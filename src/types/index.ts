import type { ImageMetadata } from 'astro';

export type Nicho =
  | 'Desenvolvimento'
  | 'UX/UI Design'
  | 'Front-End'
  | 'Design Gráfico'
  | 'Edição de Vídeo'
  | 'Outros';

/** `xl` ocupa a linha inteira do grid: reservado ao estudo de caso em destaque. */
export type Tamanho = 'sm' | 'md' | 'lg' | 'xl';

/** Imagem da galeria com legenda (aparece abaixo da imagem e ao ampliar). */
export interface ItemGaleria {
  imagem: ImageMetadata | string;
  titulo?: string;
  descricao?: string;
}

/** Vídeo hospedado fora do site (ex.: Google Drive). O player só carrega ao clicar. */
export interface VideoProjeto {
  titulo: string;
  /** URL do player para o iframe (ex.: https://drive.google.com/file/d/ID/preview). */
  embed: string;
  /** Miniatura exibida antes do clique. */
  poster: string;
  descricao?: string;
}

/**
 * Conteúdo opcional do estudo de caso, exibido na página /projetos/[slug].
 * Útil para projetos de código com repositório privado: em vez de expor o
 * repo, contamos o contexto, o resultado e as decisões técnicas.
 */
export interface DetalhesProjeto {
  problema?: string;
  solucao?: string;
  resultados?: string;
  aprendizados?: string;
  funcionalidades?: string[];
  /** Links extras exibidos como botões no topo do estudo de caso (ex.: artigo publicado). */
  links?: { label: string; url: string }[];
  /** Screenshots adicionais (assets otimizados do Astro ou URLs externas), com ou sem legenda. */
  galeria?: (ImageMetadata | string | ItemGaleria)[];
  /** Crédito exibido abaixo da galeria (ex.: imagens sob licença Creative Commons). */
  creditoGaleria?: { texto: string; url?: string };
  videos?: VideoProjeto[];
}

export interface Projeto {
  id: number;
  slug: string;
  titulo: string;
  descricao: string;
  nicho: Nicho;
  tecnologias: string[];
  imagem: ImageMetadata | string;
  /** Link externo do projeto (Behance, Figma, YouTube). Projetos de código não usam. */
  link?: string;
  /** URL da aplicação rodando ao vivo (deploy). Vira o CTA principal e o embed da vitrine. */
  demo?: string;
  /** URL de um vídeo (mp4/webm) de demonstração. Quando presente, a vitrine mostra o vídeo no lugar do embed ao vivo. */
  video?: string;
  /** URL do repositório. Só é exibida publicamente quando repoPrivado !== true. */
  github?: string;
  /** Marca o código como privado: mostra o selo "código sob solicitação" no lugar do link. */
  repoPrivado?: boolean;
  /** Conteúdo do estudo de caso exibido em /projetos/[slug]. */
  detalhes?: DetalhesProjeto;
  destaque?: boolean;
  tamanho?: Tamanho;
}

export type Modalidade = 'Presencial' | 'Híbrido' | 'Remoto';

/** Um cargo dentro de uma empresa. */
export interface Cargo {
  cargo: string;
  /** Tipo de vínculo deste cargo, quando varia entre os cargos da empresa. */
  tipo?: string;
  modalidade?: Modalidade;
  /** No formato "Mês Ano – Mês Ano" ou "Mês Ano – Atual". */
  periodo: string;
  /** Tópicos da descrição, um por item, na mesma ordem do LinkedIn. */
  descricao: string[];
  tecnologias: string[];
  atual: boolean;
}

/** Uma empresa com um ou mais cargos, agrupados como no LinkedIn. */
export interface Experiencia {
  id: number;
  empresa: string;
  /** Tipo de vínculo comum a todos os cargos (ex.: "Meio período", "Estágio", "Autônomo"). */
  tipo?: string;
  /** Cidade de atuação (ex.: "João Pessoa, PB"). */
  local?: string;
  /** Do cargo mais recente ao mais antigo. */
  cargos: Cargo[];
  /** Estudo de caso relacionado, exibido ao fim dos detalhes. */
  link?: string;
}

export interface Formacao {
  id: number;
  curso: string;
  instituicao: string;
  periodo: string;
  /** Grau: graduação, pós-graduação, técnico, etc. */
  grau?: string;
  descricao?: string;
  /** Nota/rendimento (ex.: "Média 9,20", "CRE 81,41"). */
  nota?: string;
  /** Atividades e grupos (ex.: "Vôlei"). */
  atividades?: string;
  competencias?: string[];
  atual: boolean;
}

export interface Publicacao {
  titulo: string;
  /** Revista, congresso ou evento onde saiu. */
  veiculo: string;
  data: string;
  url: string;
  descricao?: string;
}

export interface Certificacao {
  nome: string;
  emissor: string;
  data: string;
  /** Link público para verificar a credencial. */
  url?: string;
  validade?: string;
}

export interface Reconhecimento {
  titulo: string;
  emissor: string;
  data: string;
  descricao: string;
}

export interface Skill {
  nome: string;
  peso: 1 | 2 | 3;
}

export const NICHOS: readonly Nicho[] = [
  'Desenvolvimento',
  'UX/UI Design',
  'Front-End',
  'Design Gráfico',
  'Edição de Vídeo',
  'Outros',
] as const;
