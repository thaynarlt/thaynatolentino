export interface Projeto {
    id: number;
    titulo: string;
    descricao: string;
    nicho: string;
    tecnologias: string[];
    imagem: string;
    link?: string;
    github?: string;
}

export interface Sobre {
    nome: string;
    titulo: string;
    descricao: string;
    habilidades: string[];
    email: string;
    linkedin: string;
    github: string;
}

export interface Experiencia {
    id: number;
    cargo: string;
    empresa: string;
    periodo: string;
    descricao: string;
    tecnologias: string[];
    atual?: boolean;
}

export interface Hobby {
    id: number;
    titulo: string;
    descricao: string;
    icone: string;
    imagem: string;
}