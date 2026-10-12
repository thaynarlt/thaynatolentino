import { getImage } from "astro:assets";
import type { Projeto } from "../types";

type Imagem = Projeto["imagem"];

/**
 * Gera uma versão WebP redimensionada de uma imagem local e devolve a URL.
 * Sem isso, `imagem.src` aponta para o PNG original (alguns chegam a 2–3 MB).
 * URLs externas (YouTube, SVGs em /public) passam direto.
 */
export async function otimizarImagem(imagem: Imagem, largura = 1200): Promise<string> {
  if (typeof imagem === "string") return imagem;
  const { src } = await getImage({
    src: imagem,
    width: Math.min(largura, imagem.width),
    format: "webp",
  });
  return src;
}

/** Prepara projetos para as ilhas React, que recebem a capa já como URL otimizada. */
export function comCapasOtimizadas(projetos: Projeto[], largura?: number): Promise<Projeto[]> {
  return Promise.all(
    projetos.map(async (p) => ({ ...p, imagem: await otimizarImagem(p.imagem, largura) })),
  );
}
