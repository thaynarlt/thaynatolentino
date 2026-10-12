import { experiencias } from "../data/experiencias";
import { formacoes } from "../data/formacao";
import { certificacoes, publicacoes, reconhecimentos } from "../data/credenciais";
import { projetos } from "../data/projetos";
import { skills } from "../data/skills";
import type { Experiencia, Formacao, Idioma, Projeto } from "../types";
import { experienciasEn } from "./en/experiencias";
import { formacoesEn } from "./en/formacao";
import { certificacoesEn, publicacoesEn, reconhecimentosEn } from "./en/credenciais";
import { projetosEn } from "./en/projetos";
import { termo, termos } from "./termos";

// Os dados em português são a fonte; aqui o texto longo em inglês é aplicado
// por cima. Termos curtos e datas são traduzidos na hora de exibir
// (termo/periodo em src/i18n/termos.ts), então não aparecem aqui.

export function experienciasEm(idioma: Idioma): Experiencia[] {
  if (idioma === "pt") return experiencias;
  return experiencias.map((e) => {
    const t = experienciasEn[e.id];
    return {
      ...e,
      cargos: e.cargos.map((c, i) => ({
        ...c,
        cargo: t?.cargos[i]?.cargo ?? c.cargo,
        descricao: t?.cargos[i]?.descricao ?? c.descricao,
        tecnologias: termos(c.tecnologias, idioma),
      })),
    };
  });
}

export function formacoesEm(idioma: Idioma): Formacao[] {
  if (idioma === "pt") return formacoes;
  return formacoes.map((f) => ({
    ...f,
    ...formacoesEn[f.id],
    competencias: f.competencias && termos(f.competencias, idioma),
  }));
}

export function credenciaisEm(idioma: Idioma) {
  if (idioma === "pt") return { publicacoes, certificacoes, reconhecimentos };
  return {
    publicacoes: publicacoes.map((p, i) => ({ ...p, ...publicacoesEn[i] })),
    certificacoes: certificacoes.map((c, i) => ({ ...c, ...certificacoesEn[i] })),
    reconhecimentos: reconhecimentos.map((r, i) => ({ ...r, ...reconhecimentosEn[i] })),
  };
}

export function skillsEm(idioma: Idioma) {
  return skills.map((s) => ({ ...s, nome: termo(s.nome, idioma) }));
}

/** Projeto com textos, tecnologias e listas do estudo de caso no idioma pedido. */
export function projetoEm(p: Projeto, idioma: Idioma): Projeto {
  if (idioma === "pt") return p;
  const t = projetosEn[p.slug];
  const d = p.detalhes;
  const td = t?.detalhes;

  return {
    ...p,
    titulo: t?.titulo ?? p.titulo,
    descricao: t?.descricao ?? p.descricao,
    tecnologias: termos(p.tecnologias, idioma),
    detalhes: d && {
      ...d,
      problema: td?.problema ?? d.problema,
      solucao: td?.solucao ?? d.solucao,
      resultados: td?.resultados ?? d.resultados,
      aprendizados: td?.aprendizados ?? d.aprendizados,
      funcionalidades: td?.funcionalidades ?? d.funcionalidades,
      links: d.links?.map((l, i) => ({ ...l, label: td?.links?.[i]?.label ?? l.label })),
      galeria: d.galeria?.map((g, i) => {
        const tg = td?.galeria?.[i];
        if (!tg || typeof g !== "object" || !("imagem" in g)) return g;
        return { ...g, ...tg };
      }),
      videos: d.videos?.map((v, i) => ({ ...v, ...td?.videos?.[i] })),
      creditoGaleria: d.creditoGaleria && {
        ...d.creditoGaleria,
        texto: td?.creditoGaleria ?? d.creditoGaleria.texto,
      },
    },
  };
}

export function projetosEm(idioma: Idioma): Projeto[] {
  return projetos.map((p) => projetoEm(p, idioma));
}
