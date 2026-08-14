import type { ImageMetadata } from 'astro';

export type Nicho =
  | 'Desenvolvimento'
  | 'UX/UI Design'
  | 'Front-End'
  | 'Design Gráfico'
  | 'Edição de Vídeo'
  | 'Outros';

export type Tamanho = 'sm' | 'md' | 'lg';

/**
 * Conteúdo opcional do estudo de caso, exibido na página /projetos/[slug].
 * Útil para projetos de código com repositório privado: em vez de expor o
 * repo, contamos o contexto, o resultado e as decisões técnicas.
 */
export interface DetalhesProjeto {
  problema?: string;
  solucao?: string;
  aprendizados?: string;
  funcionalidades?: string[];
  /** Screenshots adicionais (assets otimizados do Astro ou URLs externas). */
  galeria?: (ImageMetadata | string)[];
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

export interface Experiencia {
  id: number;
  cargo: string;
  empresa: string;
  periodo: string;
  descricao: string;
  tecnologias: string[];
  atual: boolean;
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
