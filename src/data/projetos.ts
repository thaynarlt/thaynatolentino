import type { Projeto } from '../types';

export const projetos: Projeto[] = [
  // Design Gráfico
  {
    id: 1,
    slug: 'identidade-visual-maria-teresa-babygirl',
    titulo: 'Identidade Visual Maria Teresa - BabyGirl',
    descricao: 'Criação completa de identidade visual para marca infantil, incluindo logo, paleta de cores delicadas e aplicações.',
    nicho: 'Design Gráfico',
    tecnologias: ['Adobe Illustrator', 'Photoshop', 'Branding', 'Design de Logo'],
    imagem: '/projetos/maria-teresa-babygirl.png',
    link: 'https://www.behance.net/gallery/234302855/Identidade-Visual-Maria-Teresa-BabyGirl',
    destaque: false
  },
  {
    id: 2,
    slug: 'design-camisas-catolicas',
    titulo: 'Design Camisas Católicas',
    descricao: 'Criação de designs para linha de camisas católicas com elementos religiosos modernos e elegantes.',
    nicho: 'Design Gráfico',
    tecnologias: ['Adobe Illustrator', 'Photoshop', 'Design de Estampas'],
    imagem: '/projetos/design-camisas-catolicas.png',
    link: 'https://www.behance.net/gallery/199622209/Design-Camisas-Catolicas',
    destaque: true
  },
  {
    id: 3,
    slug: 'portfolio-camisas-diversas',
    titulo: 'Portfolio Camisas Diversas',
    descricao: 'Portfólio com diversos designs de camisas criativas e personalizadas para diferentes nichos.',
    nicho: 'Design Gráfico',
    tecnologias: ['Adobe Illustrator', 'Photoshop', 'Design de Produto'],
    imagem: '/projetos/portfolio-camisas-diversas.png',
    link: 'https://www.behance.net/gallery/210116431/Portfolio-Camisas-Diversas',
    destaque: false
  },
  {
    id: 4,
    slug: 'logo-medicos-catolicos',
    titulo: 'Logo Médicos Católicos',
    descricao: 'Identidade visual profissional para grupo de médicos católicos, unindo simbolismo médico e religioso.',
    nicho: 'Design Gráfico',
    tecnologias: ['Adobe Illustrator', 'Branding', 'Design de Logo'],
    imagem: '/projetos/logo-medicos-catolicos.png',
    link: 'https://www.behance.net/gallery/222339391/LOGO-Mdicos-Catolicos',
    destaque: false
  },
  {
    id: 5,
    slug: 'identidade-visual-casamento-anna-luiza-e-igor',
    titulo: 'Identidade Visual Casamento Anna Luiza e Igor',
    descricao: 'Identidade visual completa para casamento, incluindo convites, papelaria e identidade visual do evento.',
    nicho: 'Design Gráfico',
    tecnologias: ['Adobe Illustrator', 'Photoshop', 'Design Editorial', 'Branding'],
    imagem: '/projetos/casamento-anna-luiza-igor.png',
    link: 'https://www.behance.net/gallery/219489285/Identidade-Visual-Casamento-Anna-Luiza-e-Igor',
    destaque: false
  },
  {
    id: 6,
    slug: 'identidade-visual-psicologo',
    titulo: 'Identidade Visual Psicólogo',
    descricao: 'Branding completo para consultório de psicologia, transmitindo acolhimento e profissionalismo.',
    nicho: 'Design Gráfico',
    tecnologias: ['Adobe Illustrator', 'Photoshop', 'Branding', 'Design de Logo'],
    imagem: '/projetos/identidade-visual-psicologo.png',
    link: 'https://www.behance.net/gallery/218025707/Identidade-Visual-Psicologo',
    destaque: false
  },
  {
    id: 7,
    slug: 'mantus-christi-identidade-visual',
    titulo: 'Mantus Christi - Identidade Visual',
    descricao: 'Identidade visual sofisticada para projeto religioso, com elementos clássicos e contemporâneos.',
    nicho: 'Design Gráfico',
    tecnologias: ['Adobe Illustrator', 'Photoshop', 'Branding'],
    imagem: '/projetos/mantus-christi.png',
    link: 'https://www.behance.net/gallery/200720111/Mantus-Christi-Identidade-visual',
    destaque: false
  },
  {
    id: 8,
    slug: 'cracha-al-company',
    titulo: 'Crachá Al Company',
    descricao: 'Design de crachá corporativo moderno e funcional para empresa Al Company.',
    nicho: 'Design Gráfico',
    tecnologias: ['Adobe Illustrator', 'Design de Produto', 'Branding'],
    imagem: '/projetos/cracha-al-company.png',
    link: 'https://www.behance.net/gallery/200318579/Cracha-Al-Company',
    destaque: false
  },

  // UX/UI Design
  {
    id: 9,
    slug: 'al-company-landing-page',
    titulo: 'Al Company - Landing Page',
    descricao: 'Design de landing page moderna e responsiva para empresa de tecnologia com foco em conversão.',
    nicho: 'UX/UI Design',
    tecnologias: ['Figma', 'UI Design', 'Prototyping', 'Responsive Design'],
    imagem: '/projetos/al-company-landing-page.png',
    link: 'https://www.behance.net/gallery/191525527/Al-Company-Landing-Page',
    destaque: false
  },
  {
    id: 10,
    slug: 'website-the-eras-tour-brasil',
    titulo: 'Website The Eras Tour Brasil',
    descricao: 'Design de website completo para The Eras Tour Brasil com experiência imersiva e interativa.',
    nicho: 'UX/UI Design',
    tecnologias: ['Figma', 'UI Design', 'UX Research', 'Prototyping'],
    imagem: '/projetos/eras-tour-brasil-design.png',
    link: 'https://www.behance.net/gallery/192611425/Website-The-Eras-Tour-Brasil',
    destaque: false
  },
  {
    id: 11,
    slug: 'projeto-ced-interface',
    titulo: 'Projeto CED - Interface',
    descricao: 'Interface intuitiva e acessível para sistema educacional, focada na experiência do usuário.',
    nicho: 'UX/UI Design',
    tecnologias: ['Figma', 'UI Design', 'Design System', 'Acessibilidade'],
    imagem: '/projetos/projeto-ced.png',
    link: 'https://www.figma.com/pt-br/comunidade/file/1514280813377321596/projeto-ced',
    destaque: false
  },
  {
    id: 12,
    slug: 'oxxy-landing-page',
    titulo: 'Oxxy - Landing Page',
    descricao: 'Landing page clean e moderna para produto Oxxy, com design minimalista e foco em conversão.',
    nicho: 'UX/UI Design',
    tecnologias: ['Figma', 'UI Design', 'Landing Page', 'Prototyping'],
    imagem: '/projetos/oxxy-landing-page.png',
    link: 'https://www.figma.com/community/file/1458511832397859570/oxxy-landing-page',
    destaque: false
  },

  // Front-End
  {
    id: 13,
    slug: 'landing-page-educacao-ambiental-ifpb',
    titulo: 'Landing Page Educação Ambiental IFPB',
    descricao: 'Landing page informativa sobre educação ambiental desenvolvida para o IFPB com design responsivo.',
    nicho: 'Front-End',
    tecnologias: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    imagem: '/projetos/landing-page-educacao-ambiental.png',
    link: 'https://www.behance.net/gallery/192609595/Landing-Page-Educacao-Ambiental-IFPB',
    destaque: false
  },

  // Outros
  {
    id: 14,
    slug: 'sistema-de-folha-de-pagamento',
    titulo: 'Sistema de Folha de Pagamento',
    descricao: 'Sistema completo para cálculo e gerenciamento de folha de pagamento com banco de dados.',
    nicho: 'Outros',
    tecnologias: ['Java', 'MySQL', 'JDBC', 'Swing'],
    imagem: '/projetos/folha.png',
    github: 'https://github.com/thaynarlt/folha-de-pagamento',
    destaque: false
  },
  {
    id: 15,
    slug: 'biblioteca-interdimensional',
    titulo: 'Biblioteca Interdimensional',
    descricao: 'Sistema de gerenciamento de biblioteca com banco de dados relacional e consultas avançadas.',
    nicho: 'Outros',
    tecnologias: ['PostgreSQL', 'SQL', 'Database Design', 'Java'],
    imagem: '/projetos/bd.png',
    github: 'https://github.com/thaynarlt/Biblioteca-Interdimensional-BDII',
    destaque: false
  },
  {
    id: 16,
    slug: 'jogo-da-forca',
    titulo: 'Jogo da Forca',
    descricao: 'Jogo interativo da forca desenvolvido em Java com interface gráfica e sistema de pontuação.',
    nicho: 'Outros',
    tecnologias: ['Java', 'Swing', 'POO', 'Game Logic'],
    imagem: '/projetos/forca.png',
    github: 'https://github.com/thaynarlt/jogo-da-forca-java',
    destaque: false
  },
  {
    id: 17,
    slug: 'sistema-de-gerenciamento-de-hotel',
    titulo: 'Sistema de Gerenciamento de Hotel',
    descricao: 'Sistema de reservas e gerenciamento de hotel implementando conceitos de sistemas operacionais.',
    nicho: 'Outros',
    tecnologias: ['Java', 'Threads', 'Sistemas Operacionais', 'Concorrência'],
    imagem: '/projetos/hotelpirc.png',
    github: 'https://github.com/thaynarlt/Hotel-PIRC-SO',
    destaque: false
  },
  {
    id: 18,
    slug: 'lista-de-tarefas-react',
    titulo: 'Lista de Tarefas React',
    descricao: 'Aplicação de to-do list desenvolvida em React with functionalities de adicionar, editar e deletar tarefas.',
    nicho: 'Outros',
    tecnologias: ['React', 'JavaScript', 'CSS', 'Local Storage'],
    imagem: '/projetos/tarefa.png',
    github: 'https://github.com/thaynarlt/ListaDeTarefas-React',
    destaque: false
  },

  // Edição de Vídeo
  {
    id: 19,
    slug: 'bk-arts-motion-graphics',
    titulo: 'BK Arts - Motion Graphics',
    descricao: 'Edição criativa de vídeo curto com transições dinâmicas e efeitos visuais.',
    nicho: 'Edição de Vídeo',
    tecnologias: ['Premiere Pro', 'After Effects', 'CapCut'],
    imagem: 'https://img.youtube.com/vi/rZaWu5mbipo/maxresdefault.jpg',
    link: 'https://youtube.com/shorts/rZaWu5mbipo',
    destaque: false
  },
  {
    id: 20,
    slug: 'bk-ads-anuncio',
    titulo: 'BK Ads - Anúncio',
    descricao: 'Edição de conteúdo vertical otimizado para redes sociais com motion graphics.',
    nicho: 'Edição de Vídeo',
    tecnologias: ['Premiere Pro', 'After Effects', 'Color Grading'],
    imagem: 'https://img.youtube.com/vi/A6W85zRP6ic/maxresdefault.jpg',
    link: 'https://youtube.com/shorts/A6W85zRP6ic',
    destaque: false
  },
  {
    id: 21,
    slug: 'bk-reviews-motion-graphics',
    titulo: 'BK Reviews - Motion Graphics',
    descricao: 'Vídeo curto com edição ritmada e sincronização perfeita com a música.',
    nicho: 'Edição de Vídeo',
    tecnologias: ['Premiere Pro', 'After Effects', 'Sound Design'],
    imagem: 'https://img.youtube.com/vi/I5tTDAmIxIM/maxresdefault.jpg',
    link: 'https://youtube.com/shorts/I5tTDAmIxIM',
    destaque: false
  },
  {
    id: 22,
    slug: 'al-company-anuncio',
    titulo: 'Al Company - Anúncio',
    descricao: 'Edição criativa com efeitos de transição e correção de cor profissional.',
    nicho: 'Edição de Vídeo',
    tecnologias: ['Premiere Pro', 'DaVinci Resolve', 'Motion Design'],
    imagem: 'https://img.youtube.com/vi/NISoHClezoE/maxresdefault.jpg',
    link: 'https://youtube.com/shorts/NISoHClezoE',
    destaque: false
  },
  {
    id: 23,
    slug: 'al-company-anuncio-2',
    titulo: 'Al Company - Anúncio 2',
    descricao: 'Vídeo vertical com storytelling visual e edição dinâmica para engajamento.',
    nicho: 'Edição de Vídeo',
    tecnologias: ['Premiere Pro', 'After Effects', 'Typography'],
    imagem: 'https://img.youtube.com/vi/zUIcg_t1UWY/maxresdefault.jpg',
    link: 'https://youtube.com/shorts/zUIcg_t1UWY',
    destaque: false
  },
  {
    id: 24,
    slug: 'gomes-marques-reels',
    titulo: 'Gomes & Marques - Reels',
    descricao: 'Edição de reels com efeitos visuais modernos e trilha sincronizada.',
    nicho: 'Edição de Vídeo',
    tecnologias: ['Premiere Pro', 'After Effects', 'VFX'],
    imagem: 'https://img.youtube.com/vi/8_IyObaCZ9E/maxresdefault.jpg',
    link: 'https://youtube.com/shorts/8_IyObaCZ9E',
    destaque: false
  },
  {
    id: 25,
    slug: 'lapa-de-carne-food',
    titulo: 'Lapa de Carne - Food',
    descricao: 'Conteúdo vertical editado com foco em impacto visual e retenção de audiência.',
    nicho: 'Edição de Vídeo',
    tecnologias: ['Premiere Pro', 'Color Grading', 'Motion Graphics'],
    imagem: 'https://img.youtube.com/vi/dc0Dw4AS3Ao/maxresdefault.jpg',
    link: 'https://youtube.com/shorts/dc0Dw4AS3Ao',
    destaque: false
  }
];

export const nichos = ['UX/UI Design', 'Front-End', 'Design Gráfico', 'Edição de Vídeo', 'Outros'] as const;