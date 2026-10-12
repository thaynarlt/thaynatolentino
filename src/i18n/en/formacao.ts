// English texts for src/data/formacao.ts, keyed by id. Degree, activities,
// dates and skills are translated by src/i18n/termos.ts.
export const formacoesEn: Record<number, { curso: string; descricao?: string; nota?: string }> = {
  1: {
    curso: "Ethical Hacking and Cybersecurity",
    descricao:
      "Postgraduate specialization focused on offensive and defensive security, going deeper into secure development.",
  },
  2: {
    curso: "Internet Systems",
    descricao:
      "A program fully focused on systems development, with hands-on activities that build technical skills and teamwork: structuring, documenting and developing app and website projects with fluency and quality.",
    nota: "GPA 9.20/10",
  },
  3: {
    curso: "Internet Systems",
    descricao:
      "Where I built a solid foundation in programming, web development, databases, interface design and modern application architecture through hands-on projects and activities. I later transferred to UNIESP to complete the degree.",
    nota: "Grade index (CRE) 81.41",
  },
};
