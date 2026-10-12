import type { Certificacao, Publicacao, Reconhecimento } from "../types";

// Espelha as seções de Publicações, Licenças e certificados e Reconhecimentos do LinkedIn.

export const publicacoes: Publicacao[] = [
  {
    titulo:
      "Exploring geolocation and emergency alert in public health service via TV 3.0 in Brazil",
    veiculo: "SET International Journal of Broadcast Engineering",
    data: "Dezembro 2025",
    url: "https://revistas.set.org.br/ijbe/article/view/307",
    descricao:
      "Coautoria. Aplicações de TV 3.0 desenvolvidas no LAVID/UFPB para o SUS: o Meu SUS Digital na TV, que usa a geolocalização para mostrar as unidades de saúde mais próximas, e a Campanha Novembro Azul.",
  },
];

/** As três primeiras ficam sempre visíveis; as demais aparecem em "Ver todas". */
export const certificacoes: Certificacao[] = [
  {
    nome: "Fortinet Certified Fundamentals in Cybersecurity",
    emissor: "Fortinet",
    data: "Dezembro 2025",
    validade: "Válida até dezembro 2027",
  },
  {
    nome: "Simplify SOC Operations with Security Fabric Analytics and Automation",
    emissor: "Fortinet",
    data: "Janeiro 2026",
  },
  {
    nome: "Certificado Profissional de UX Design do Google",
    emissor: "Google · Coursera",
    data: "Março 2024",
    url: "https://www.credly.com/badges/da9a8ffa-8fcf-418d-a3b6-2cdd8c72025f",
  },
  {
    nome: "Fundamentos do Spring Boot",
    emissor: "Rocketseat",
    data: "Maio 2024",
    url: "https://app.rocketseat.com.br/certificates/ebfc859c-c856-4fd2-8a03-5b5ffda17f53",
  },
  {
    nome: "Santander 2024 - Preparatório Certificação AWS",
    emissor: "DIO",
    data: "Maio 2024",
    url: "https://www.dio.me/certificate/XXSDZLXD",
  },
  {
    nome: "Santander Bootcamp 2023 - Backend Java",
    emissor: "DIO",
    data: "Outubro 2023",
    url: "https://www.dio.me/certificate/9A6E5125/share",
  },
];

export const reconhecimentos: Reconhecimento[] = [
  {
    titulo: "Parceria Inorpel Cybersecurity",
    emissor: "Inorpel Cybersecurity",
    data: "Fevereiro 2026",
    descricao:
      "Pela contribuição à Convenção ICS 2026, encontro interno que reuniu os colaboradores da empresa. Atuei na produção dos materiais gráficos do evento e no apoio à organização, incluindo suporte de backstage ao longo da programação.",
  },
];
