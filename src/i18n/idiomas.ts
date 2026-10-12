import type { Idioma } from "../types";

export const idiomas: Idioma[] = ["pt", "en"];

/** Código BCP 47 usado em <html lang>, hreflang e formatação de datas. */
export const codigoIdioma: Record<Idioma, string> = { pt: "pt-BR", en: "en" };
export const localeOg: Record<Idioma, string> = { pt: "pt_BR", en: "en_US" };

/** Idioma da página atual, a partir de Astro.currentLocale. */
export function idiomaDe(locale: string | undefined): Idioma {
  return locale === "en" ? "en" : "pt";
}

// Português fica na raiz; inglês em /en, com os segmentos traduzidos.
const prefixo: Record<Idioma, string> = { pt: "", en: "/en" };
const segmentos = {
  projetos: { pt: "projetos", en: "projects" },
  notas: { pt: "notas", en: "notes" },
} as const;

export const urls = {
  inicio: (idioma: Idioma, ancora?: string) =>
    `${prefixo[idioma]}/${ancora ? `#${ancora}` : ""}`,
  projeto: (idioma: Idioma, slug: string) =>
    `${prefixo[idioma]}/${segmentos.projetos[idioma]}/${slug}`,
  notas: (idioma: Idioma) => `${prefixo[idioma]}/${segmentos.notas[idioma]}`,
  nota: (idioma: Idioma, slug: string) =>
    `${prefixo[idioma]}/${segmentos.notas[idioma]}/${slug}`,
};

/**
 * Caminho da mesma página no outro idioma. Os slugs são iguais nos dois
 * idiomas; só o prefixo e o segmento (projetos/projects, notas/notes) mudam.
 * Páginas sem versão traduzida caem no início.
 */
export function caminhoEquivalente(pathname: string, destino: Idioma): string {
  const partes = pathname.replace(/^\/en(?=\/|$)/, "").split("/").filter(Boolean);
  const [secao, slug] = partes;

  if (partes.length === 0) return urls.inicio(destino);
  for (const chave of Object.keys(segmentos) as (keyof typeof segmentos)[]) {
    const nomes: readonly string[] = Object.values(segmentos[chave]);
    if (!nomes.includes(secao)) continue;
    if (chave === "projetos" && slug) return urls.projeto(destino, slug);
    if (chave === "notas") return slug ? urls.nota(destino, slug) : urls.notas(destino);
  }
  return urls.inicio(destino);
}
