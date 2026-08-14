import type { Formacao } from "../types";

export const formacoes: Formacao[] = [
  {
    id: 1,
    curso: "Ethical Hacking e Cybersecurity",
    grau: "Pós-graduação Lato Sensu · Especialização",
    instituicao: "UNIESP Centro Universitário",
    periodo: "Janeiro 2026 – Atual",
    descricao:
      "Especialização com foco em segurança ofensiva e defensiva, aprofundando o campo do desenvolvimento seguro.",
    atual: true,
  },
  {
    id: 2,
    curso: "Sistemas para Internet",
    grau: "Tecnólogo · Desenvolvimento de Sistemas",
    instituicao: "UNIESP Centro Universitário",
    periodo: "Março 2025 – Junho 2026",
    descricao:
      "Curso totalmente focado em desenvolvimento de sistemas, com atividades dinâmicas que estimulam o aprendizado técnico e a colaboração em equipe: estruturar, documentar e desenvolver projetos de aplicativos e sites com fluidez e qualidade.",
    nota: "Média 9,20",
    competencias: ["GitHub", "CSS"],
    atual: false,
  },
  {
    id: 3,
    curso: "Sistemas para Internet",
    grau: "Curso Superior de Tecnologia (CST)",
    instituicao: "Instituto Federal da Paraíba (IFPB)",
    periodo: "Março 2023 – Março 2025",
    descricao:
      "Onde construí bases sólidas em programação, desenvolvimento web, bancos de dados, design de interfaces e arquitetura de aplicações modernas, com projetos e atividades práticas. Depois, transferi para a UNIESP para dar continuidade à graduação.",
    nota: "CRE 81,41",
    atividades: "Vôlei",
    competencias: ["Desenvolvimento de front-end", "Redes de computadores"],
    atual: false,
  },
];
