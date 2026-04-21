export type Nicho =
  | 'UX/UI Design'
  | 'Front-End'
  | 'Design Gráfico'
  | 'Edição de Vídeo'
  | 'Outros';

export type Tamanho = 'sm' | 'md' | 'lg';

export interface Projeto {
  id: number;
  slug: string;
  titulo: string;
  descricao: string;
  nicho: Nicho;
  tecnologias: string[];
  imagem: string;
  link?: string;
  github?: string;
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

export interface Skill {
  nome: string;
  peso: 1 | 2 | 3;
}

export const NICHOS: readonly Nicho[] = [
  'UX/UI Design',
  'Front-End',
  'Design Gráfico',
  'Edição de Vídeo',
  'Outros',
] as const;
