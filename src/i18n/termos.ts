import type { Idioma } from "../types";

/**
 * Termos curtos que se repetem nos dados (tecnologias, competências, vínculos,
 * categorias). O que não estiver aqui aparece igual nos dois idiomas, o que
 * vale para nomes de ferramentas (Figma, React, Supabase…).
 */
const termosEn: Record<string, string> = {
  // Vínculo e modalidade
  "Meio período": "Part-time",
  Estágio: "Internship",
  Autônomo: "Freelance",
  Presencial: "On-site",
  Híbrido: "Hybrid",
  Remoto: "Remote",

  // Categorias de projeto
  Desenvolvimento: "Development",
  "Design Gráfico": "Graphic Design",
  "Edição de Vídeo": "Video Editing",
  Outros: "Other",

  // Competências e tecnologias
  Acessibilidade: "Accessibility",
  Cibersegurança: "Cybersecurity",
  Concorrência: "Concurrency",
  "Desenvolvimento de front-end": "Front-end development",
  "Desenvolvimento full stack": "Full-stack development",
  "Design de Estampas": "Print design",
  "Design de Logo": "Logo design",
  "Design de Produto": "Product design",
  "Design de interface do usuário": "User interface design",
  "Design System próprio": "Custom design system",
  "Design gráfico": "Graphic design",
  "Edição de vídeo": "Video editing",
  "Estudos de usabilidade": "Usability studies",
  "Experiência do usuário (UX)": "User experience (UX)",
  "Identidade visual": "Visual identity",
  "Plano de pesquisa de UX": "UX research planning",
  POO: "OOP",
  Prototipagem: "Prototyping",
  "Redes de computadores": "Computer networks",
  "Sistemas Operacionais": "Operating systems",

  // Formação
  "Curso Superior de Tecnologia (CST)": "Associate degree in Technology (CST)",
  "Pós-graduação Lato Sensu · Especialização": "Postgraduate specialization",
  "Tecnólogo · Desenvolvimento de Sistemas": "Technologist degree · Systems Development",
  Vôlei: "Volleyball",
};

/** Traduz um termo curto; sem tradução cadastrada, devolve o original. */
export function termo(texto: string, idioma: Idioma): string {
  return idioma === "en" ? (termosEn[texto] ?? texto) : texto;
}

export function termos(textos: string[], idioma: Idioma): string[] {
  return textos.map((t) => termo(t, idioma));
}

const meses: Record<string, string> = {
  Janeiro: "January",
  Fevereiro: "February",
  Março: "March",
  Abril: "April",
  Maio: "May",
  Junho: "June",
  Julho: "July",
  Agosto: "August",
  Setembro: "September",
  Outubro: "October",
  Novembro: "November",
  Dezembro: "December",
};

/**
 * Traduz datas e períodos escritos por extenso nos dados
 * ("Outubro 2026 – Atual", "Válida até dezembro 2027").
 */
export function periodo(texto: string, idioma: Idioma): string {
  if (idioma === "pt") return texto;
  return texto
    .replace(/\b(Janeiro|Fevereiro|Março|Abril|Maio|Junho|Julho|Agosto|Setembro|Outubro|Novembro|Dezembro)\b/gi, (m) => {
      const chave = m.charAt(0).toUpperCase() + m.slice(1).toLowerCase();
      return meses[chave] ?? m;
    })
    .replace(/\bAtual\b/, "Present")
    .replace(/^Válida até /, "Valid until ");
}
