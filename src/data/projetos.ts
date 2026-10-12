import type { ImageMetadata } from 'astro';
import type { Projeto } from '../types';

// Carrega todas as imagens de /src/assets/projetos/ já otimizadas pelo Astro.
// Cada entrada é { '../assets/projetos/nome.png': { default: ImageMetadata } }
const images = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/projetos/*.{png,jpg}',
  { eager: true }
);

// Helper: busca uma imagem local pelo filename.
function img(filename: string): ImageMetadata {
  const path = `../assets/projetos/${filename}`;
  const mod = images[path];
  if (!mod) {
    throw new Error(`Imagem não encontrada: ${path}. Confira se o arquivo existe em src/assets/projetos/.`);
  }
  return mod.default;
}

// Helper: player e miniatura de um vídeo público do Google Drive pelo ID do arquivo.
function driveVideo(id: string) {
  return {
    embed: `https://drive.google.com/file/d/${id}/preview`,
    poster: `https://drive.google.com/thumbnail?id=${id}&sz=w1280`,
  };
}

export const projetos: Projeto[] = [
  // ───────────────────────────────────────────────────────────────
  // Estudo de caso em destaque (tamanho 'xl' = linha inteira). Fica primeiro
  // para abrir o grid de Destaques sem quebrar o encaixe dos outros cards.
  //
  // NOTA sobre imagens: as telas do Meu SUS Digital TV e do Novembro Azul vêm
  // do artigo publicado (CC BY 4.0, por isso o crédito); as do Amparar+,
  // LabStation e Catálogo são os prints do Figma publicados no LinkedIn (800px).
  // Os vídeos ficam na pasta pública do projeto no Google Drive do LAVID.
  // ───────────────────────────────────────────────────────────────
  {
    id: 31,
    slug: 'tv-3-0-saude-publica-lavid',
    titulo: 'TV 3.0 para a Saúde Pública — LAVID/UFPB',
    descricao: 'Interfaces de TV 3.0 que levam serviços do SUS para a televisão: Meu SUS Digital na TV, Campanha Novembro Azul e Amparar+. Validadas com usuários reais e publicadas em artigo científico.',
    nicho: 'UX/UI Design',
    tecnologias: ['Figma', 'Prototipagem', 'Estudos de usabilidade', 'Plano de pesquisa de UX', 'UX Design', 'UI Design', 'TV 3.0'],
    imagem: img('lavid-novembro-azul-abertura.jpg'),
    destaque: true,
    tamanho: 'xl',
    detalhes: {
      problema:
        'Muita gente tem dificuldade de usar serviços de saúde pelo celular ou pelo computador, mas tem uma TV em casa. A TV 3.0, nova geração da TV digital brasileira, traz interatividade, geolocalização e alertas de emergência. No LAVID, laboratório de pesquisa do Centro de Informática da UFPB, o desafio era usar esses recursos para levar serviços de saúde pública à televisão, em iniciativas com a Prefeitura de João Pessoa, a TV Cidade e o Ministério da Saúde.',
      solucao:
        'Atuei como UX/UI Designer nos projetos de TV 3.0 do laboratório, do levantamento de histórias de usuário aos protótipos de alta fidelidade e testes de usabilidade, em colaboração com uma equipe multidisciplinar. No Meu SUS Digital para TV, desenhei o fluxo de teleatendimento, do QR Code à fila de espera, e as campanhas sazonais, com a aplicação da Campanha Novembro Azul. Junto aos meus colegas, desenhei as telas do Amparar+, voltado para TEA e TDAH.',
      funcionalidades: [
        'Meu SUS Digital na TV · Campanhas Sazonais: telas que ampliam o acesso a serviços de saúde pública para quem tem dificuldade com celular ou computador',
        'Meu SUS Digital na TV · Fila de Espera: conteúdos informativos sobre a fila enquanto o paciente aguarda o atendimento remoto',
        'Campanha Novembro Azul: quiz de rastreamento preliminar de sintomas do câncer de próstata, integrado ao agendamento de teleatendimento',
        'Amparar+ · Quiz Mitos e Verdades: jogo de cartas interativo, com feedback imediato, sobre TEA e TDAH',
        'Amparar+ · Diversão: jogo da memória para estimular a concentração e a cognição de forma acessível',
        'LabStation e Catálogo de Aplicações: interfaces para iniciar apps em modo de desenvolvimento e apresentar os aplicativos da plataforma',
      ],
      resultados:
        'As interfaces foram validadas com usuários reais. O Meu SUS Digital para TV foi apresentado em congresso e à Prefeitura de João Pessoa, e a Campanha Novembro Azul, na Semana Nacional de Ciência e Tecnologia.\n\nO trabalho também resultou no artigo "Exploring geolocation and emergency alert in public health service via TV 3.0 in Brazil", publicado no SET International Journal of Broadcast Engineering (vol. 11, 2025), do qual sou coautora.',
      links: [
        { label: 'Ler o artigo', url: 'https://revistas.set.org.br/ijbe/article/view/307' },
      ],
      videos: [
        {
          titulo: 'Apresentação do projeto TV 3.0',
          descricao: 'Visão geral das aplicações interativas e inclusivas em saúde e educação desenvolvidas no LAVID (vídeo da equipe do projeto).',
          ...driveVideo('1-QZqqyzvi5XADzqJnlsFhmTfM1cyyCvq'),
        },
        {
          titulo: 'Meu SUS Digital TV',
          descricao: 'Demonstração do app rodando na TV.',
          ...driveVideo('1nh5_ihHxptz-RReHrLk7xrIhus_nC6Du'),
        },
        {
          titulo: 'Amparar+',
          descricao: 'Demonstração do app voltado para TEA e TDAH.',
          ...driveVideo('1HEByszQoWRe3unynZDp4VOXmAXNzKw3T'),
        },
        {
          titulo: 'LabStation',
          descricao: 'Ferramenta para iniciar aplicações em modo de desenvolvimento.',
          ...driveVideo('1vSt18TA3X7xm8GcDQpSRwxQpOKSRqUeP'),
        },
        {
          titulo: 'LabApp',
          descricao: 'Ferramenta que apresenta os aplicativos da plataforma.',
          ...driveVideo('1sFcIer160XH5VWjXwgIQakagTKGRB4nP'),
        },
      ],
      galeria: [
        {
          imagem: img('lavid-meu-sus-qr-atendimento.jpg'),
          titulo: 'Meu SUS TV · Atendimento pelo QR Code',
          descricao: 'Para buscar atendimento, o telespectador escaneia o QR Code na TV e entra imediatamente na fila do serviço.',
        },
        {
          imagem: img('lavid-meu-sus-fila-acompanhar.jpg'),
          titulo: 'Meu SUS TV · Acompanhar a fila na TV',
          descricao: 'Já na fila, ele pode voltar ao canal e assistir à programação enquanto espera a vez de entrar na sala de teleatendimento.',
        },
        {
          imagem: img('lavid-meu-sus-fila-contador.jpg'),
          titulo: 'Meu SUS TV · Posição na fila',
          descricao: 'Enquanto assiste, um pequeno card no canto superior esquerdo mostra quantas pessoas ainda estão na frente.',
        },
        {
          imagem: img('lavid-meu-sus-fila-proximo.jpg'),
          titulo: 'Meu SUS TV · Você é o próximo',
          descricao: 'Quando falta apenas uma pessoa, a TV avisa que ele é o próximo a entrar na sala virtual.',
        },
        {
          imagem: img('lavid-meu-sus-fila-sua-vez.jpg'),
          titulo: 'Meu SUS TV · Chegou a sua vez',
          descricao: 'Na vez dele, um pop-up avisa que o atendimento vai começar, acompanhado de um som de notificação.',
        },
        {
          imagem: img('lavid-novembro-azul-abertura.jpg'),
          titulo: 'Campanha Novembro Azul · Abertura',
          descricao: 'Interface simples, com poucas opções, para atrair o público e facilitar o uso.',
        },
        {
          imagem: img('lavid-novembro-azul-quiz.jpg'),
          titulo: 'Campanha Novembro Azul · Quiz',
          descricao: 'Perguntas de sim ou não fazem um rastreamento preliminar de sintomas relacionados ao câncer de próstata.',
        },
        {
          imagem: img('lavid-novembro-azul-resultado.jpg'),
          titulo: 'Campanha Novembro Azul · Resultado',
          descricao: 'Se houver sintomas, a TV orienta o agendamento de uma consulta com urologista pelo QR Code.',
        },
        {
          imagem: img('lavid-amparar-quiz.jpg'),
          titulo: 'Amparar+ · Quiz Mitos e Verdades',
          descricao: 'Seção da aplicação Amparar+, voltada para TEA e TDAH. Um jogo interativo de cartas permite que o usuário descubra informações corretas sobre o TEA e TDAH, recebendo feedback imediato e promovendo a conscientização de forma lúdica e educativa.',
        },
        {
          imagem: img('lavid-amparar-diversao.jpg'),
          titulo: 'Amparar+ · Diversão',
          descricao: 'Jogo da memória interativo, com o objetivo de estimular a concentração, a cognição e o entretenimento de forma acessível e inclusiva.',
        },
        {
          imagem: img('lavid-labstation.jpg'),
          titulo: 'LabStation',
          descricao: 'Interface voltada à inicialização de aplicações em modo de desenvolvimento, para oferecer aos desenvolvedores uma experiência mais prática e intuitiva ao configurar e executar ambientes de testes.',
        },
        {
          imagem: img('lavid-catalogo-aplicacoes.jpg'),
          titulo: 'Catálogo de Aplicações',
          descricao: 'Catálogo que apresenta de forma organizada e acessível os aplicativos e funcionalidades da plataforma, facilitando a navegação e promovendo maior engajamento do usuário.',
        },
      ],
      creditoGaleria: {
        texto: 'Telas do Meu SUS Digital TV e da Campanha Novembro Azul: Alves et al. (2025), SET International Journal of Broadcast Engineering, licença CC BY 4.0.',
        url: 'https://revistas.set.org.br/ijbe/article/view/307',
      },
    },
  },

  // Design Gráfico
  {
    id: 1,
    slug: 'identidade-visual-maria-teresa-babygirl',
    titulo: 'Identidade Visual Maria Teresa - BabyGirl',
    descricao: 'Criação completa de identidade visual para marca infantil, incluindo logo, paleta de cores delicadas e aplicações.',
    nicho: 'Design Gráfico',
    tecnologias: ['Adobe Illustrator', 'Photoshop', 'Branding', 'Design de Logo'],
    imagem: img('maria-teresa-babygirl.png'),
    link: 'https://www.behance.net/gallery/234302855/Identidade-Visual-Maria-Teresa-BabyGirl',
    destaque: false,
    tamanho: 'sm',
  },
  {
    id: 2,
    slug: 'design-camisas-catolicas',
    titulo: 'Design Camisas Católicas',
    descricao: 'Criação de designs para linha de camisas católicas com elementos religiosos modernos e elegantes.',
    nicho: 'Design Gráfico',
    tecnologias: ['Adobe Illustrator', 'Photoshop', 'Design de Estampas'],
    imagem: img('design-camisas-catolicas.png'),
    link: 'https://www.behance.net/gallery/199622209/Design-Camisas-Catolicas',
    destaque: true,
    tamanho: 'sm',
  },
  {
    id: 3,
    slug: 'portfolio-camisas-diversas',
    titulo: 'Portfolio Camisas Diversas',
    descricao: 'Portfólio com diversos designs de camisas criativas e personalizadas para diferentes nichos.',
    nicho: 'Design Gráfico',
    tecnologias: ['Adobe Illustrator', 'Photoshop', 'Design de Produto'],
    imagem: img('portfolio-camisas-diversas.png'),
    link: 'https://www.behance.net/gallery/210116431/Portfolio-Camisas-Diversas',
    destaque: false,
    tamanho: 'md',
  },
  {
    id: 4,
    slug: 'logo-medicos-catolicos',
    titulo: 'Logo Médicos Católicos',
    descricao: 'Identidade visual profissional para grupo de médicos católicos, unindo simbolismo médico e religioso.',
    nicho: 'Design Gráfico',
    tecnologias: ['Adobe Illustrator', 'Branding', 'Design de Logo'],
    imagem: img('logo-medicos-catolicos.png'),
    link: 'https://www.behance.net/gallery/222339391/LOGO-Mdicos-Catolicos',
    destaque: false,
    tamanho: 'sm',
  },
  {
    id: 5,
    slug: 'identidade-visual-casamento-anna-luiza-e-igor',
    titulo: 'Identidade Visual Casamento Anna Luiza e Igor',
    descricao: 'Identidade visual completa para casamento, incluindo convites, papelaria e identidade visual do evento.',
    nicho: 'Design Gráfico',
    tecnologias: ['Adobe Illustrator', 'Photoshop', 'Design Editorial', 'Branding'],
    imagem: img('casamento-anna-luiza-igor.png'),
    link: 'https://www.behance.net/gallery/219489285/Identidade-Visual-Casamento-Anna-Luiza-e-Igor',
    destaque: true,
    tamanho: 'sm',
  },
  {
    id: 6,
    slug: 'identidade-visual-psicologo',
    titulo: 'Identidade Visual Psicólogo',
    descricao: 'Branding completo para consultório de psicologia, transmitindo acolhimento e profissionalismo.',
    nicho: 'Design Gráfico',
    tecnologias: ['Adobe Illustrator', 'Photoshop', 'Branding', 'Design de Logo'],
    imagem: img('identidade-visual-psicologo.png'),
    link: 'https://www.behance.net/gallery/218025707/Identidade-Visual-Psicologo',
    destaque: false,
    tamanho: 'md',
  },
  {
    id: 7,
    slug: 'mantus-christi-identidade-visual',
    titulo: 'Mantus Christi - Identidade Visual',
    descricao: 'Identidade visual sofisticada para projeto religioso, com elementos clássicos e contemporâneos.',
    nicho: 'Design Gráfico',
    tecnologias: ['Adobe Illustrator', 'Photoshop', 'Branding'],
    imagem: img('mantus-christi.png'),
    link: 'https://www.behance.net/gallery/200720111/Mantus-Christi-Identidade-visual',
    destaque: false,
    tamanho: 'md',
  },
  {
    id: 8,
    slug: 'cracha-al-company',
    titulo: 'Crachá Al Company',
    descricao: 'Design de crachá corporativo moderno e funcional para empresa Al Company.',
    nicho: 'Design Gráfico',
    tecnologias: ['Adobe Illustrator', 'Design de Produto', 'Branding'],
    imagem: img('cracha-al-company.png'),
    link: 'https://www.behance.net/gallery/200318579/Cracha-Al-Company',
    destaque: false,
    tamanho: 'sm',
  },

  // UX/UI Design
  {
    id: 9,
    slug: 'al-company-landing-page',
    titulo: 'Al Company - Landing Page',
    descricao: 'Design de landing page moderna e responsiva para empresa de tecnologia com foco em conversão.',
    nicho: 'UX/UI Design',
    tecnologias: ['Figma', 'UI Design', 'Prototyping', 'Responsive Design'],
    imagem: img('al-company-landing-page.png'),
    link: 'https://www.behance.net/gallery/191525527/Al-Company-Landing-Page',
    destaque: true,
    tamanho: 'md',
  },
  {
    id: 10,
    slug: 'website-the-eras-tour-brasil',
    titulo: 'Website The Eras Tour Brasil',
    descricao: 'Design de website completo para The Eras Tour Brasil com experiência imersiva e interativa.',
    nicho: 'UX/UI Design',
    tecnologias: ['Figma', 'UI Design', 'UX Research', 'Prototyping'],
    imagem: img('eras-tour-brasil-design.png'),
    link: 'https://www.behance.net/gallery/192611425/Website-The-Eras-Tour-Brasil',
    destaque: false,
    tamanho: 'sm',
  },
  {
    id: 11,
    slug: 'projeto-ced-interface',
    titulo: 'Projeto CED - Interface',
    descricao: 'Interface intuitiva e acessível para sistema educacional, focada na experiência do usuário.',
    nicho: 'UX/UI Design',
    tecnologias: ['Figma', 'UI Design', 'Design System', 'Acessibilidade'],
    imagem: img('projeto-ced.png'),
    link: 'https://www.figma.com/pt-br/comunidade/file/1514280813377321596/projeto-ced',
    destaque: true,
    tamanho: 'md',
  },
  {
    id: 12,
    slug: 'oxxy-landing-page',
    titulo: 'Oxxy - Landing Page',
    descricao: 'Landing page clean e moderna para produto Oxxy, com design minimalista e foco em conversão.',
    nicho: 'UX/UI Design',
    tecnologias: ['Figma', 'UI Design', 'Landing Page', 'Prototyping'],
    imagem: img('oxxy-landing-page.png'),
    link: 'https://www.figma.com/community/file/1458511832397859570/oxxy-landing-page',
    destaque: false,
    tamanho: 'sm',
  },

  // Front-End
  {
    id: 13,
    slug: 'landing-page-educacao-ambiental-ifpb',
    titulo: 'Landing Page Educação Ambiental IFPB',
    descricao: 'Landing page informativa sobre educação ambiental desenvolvida para o IFPB com design responsivo.',
    nicho: 'Front-End',
    tecnologias: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    imagem: img('landing-page-educacao-ambiental.png'),
    link: 'https://www.behance.net/gallery/192609595/Landing-Page-Educacao-Ambiental-IFPB',
    destaque: false,
    tamanho: 'md',
  },

  // Outros
  {
    id: 14,
    slug: 'sistema-de-folha-de-pagamento',
    titulo: 'Sistema de Folha de Pagamento',
    descricao: 'Sistema completo para cálculo e gerenciamento de folha de pagamento com banco de dados.',
    nicho: 'Outros',
    tecnologias: ['Java', 'MySQL', 'JDBC', 'Swing'],
    imagem: img('folha.png'),
    github: 'https://github.com/thaynarlt/folha-de-pagamento',
    destaque: false,
    tamanho: 'sm',
  },
  {
    id: 15,
    slug: 'biblioteca-interdimensional',
    titulo: 'Biblioteca Interdimensional',
    descricao: 'Sistema de gerenciamento de biblioteca com banco de dados relacional e consultas avançadas.',
    nicho: 'Outros',
    tecnologias: ['PostgreSQL', 'SQL', 'Database Design', 'Java'],
    imagem: img('bd.png'),
    github: 'https://github.com/thaynarlt/Biblioteca-Interdimensional-BDII',
    destaque: true,
    tamanho: 'sm',
  },
  {
    id: 16,
    slug: 'jogo-da-forca',
    titulo: 'Jogo da Forca',
    descricao: 'Jogo interativo da forca desenvolvido em Java com interface gráfica e sistema de pontuação.',
    nicho: 'Outros',
    tecnologias: ['Java', 'Swing', 'POO', 'Game Logic'],
    imagem: img('forca.png'),
    github: 'https://github.com/thaynarlt/jogo-da-forca-java',
    destaque: false,
    tamanho: 'sm',
  },
  {
    id: 17,
    slug: 'sistema-de-gerenciamento-de-hotel',
    titulo: 'Sistema de Gerenciamento de Hotel',
    descricao: 'Sistema de reservas e gerenciamento de hotel implementando conceitos de sistemas operacionais.',
    nicho: 'Outros',
    tecnologias: ['Java', 'Threads', 'Sistemas Operacionais', 'Concorrência'],
    imagem: img('hotelpirc.png'),
    github: 'https://github.com/thaynarlt/Hotel-PIRC-SO',
    destaque: false,
    tamanho: 'sm',
  },
  {
    id: 18,
    slug: 'lista-de-tarefas-react',
    titulo: 'Lista de Tarefas React',
    descricao: 'Aplicação de to-do list desenvolvida em React with functionalities de adicionar, editar e deletar tarefas.',
    nicho: 'Outros',
    tecnologias: ['React', 'JavaScript', 'CSS', 'Local Storage'],
    imagem: img('tarefa.png'),
    github: 'https://github.com/thaynarlt/ListaDeTarefas-React',
    destaque: false,
    tamanho: 'sm',
  },

  // ───────────────────────────────────────────────────────────────
  // Desenvolvimento — apps hospedados na Vercel (repositórios PRIVADOS).
  // O card leva para a página de estudo de caso /projetos/[slug], que
  // apresenta a demo ao vivo e o contexto sem expor o código.
  //
  // NOTA sobre imagens: por enquanto uso placeholders locais em
  // /public/projetos/*.svg (sem depender de serviço externo). Para produção,
  // tire um print real (de preferência já logada, não da tela de login),
  // salve em src/assets/projetos/ e troque a string por img('nome.png').
  // ───────────────────────────────────────────────────────────────
  {
    id: 26,
    slug: 'copascom-placar-ao-vivo',
    titulo: 'Copascom — Placar ao Vivo',
    descricao: 'Organizador de campeonatos de futsal de base com visão pública em tempo real, estilo Apple Sports. O organizador monta o torneio; o público acompanha tudo por um link, sem login.',
    nicho: 'Desenvolvimento',
    tecnologias: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS v4', 'Supabase', 'PostgreSQL', 'Realtime', 'Zod'],
    imagem: '/projetos/copascom.svg',
    demo: 'https://copascom.vercel.app/',
    repoPrivado: true,
    destaque: true,
    tamanho: 'md',
    detalhes: {
      problema:
        'Em campeonatos de futsal de base, o placar, as chaves e a classificação vivem em cadernos e grupos de WhatsApp. Quem não está na quadra fica sem acompanhar, e o organizador perde tempo recalculando tabela e chaveamento na mão.',
      solucao:
        'Plataforma em tempo real, estilo Apple Sports: o organizador monta o torneio (categorias, grupos, chaves, placares) e o público acompanha por um link, sem login. Cada categoria (Sub-6, Sub-7…) é um torneio independente, com formato, chaves e final próprios. Chaveamento, classificação (padrão futsal CBFS/FIFA) e avanço dos vencedores são calculados no servidor, e a home pública se atualiza sozinha via Supabase Realtime.',
      funcionalidades: [
        'Gestão por categoria: mata-mata puro ou fase de grupos + mata-mata, configurável',
        'Chaveamento automático com distribuição de byes e avanço do vencedor',
        'Fase de grupos com classificação no padrão futsal CBFS/FIFA (todos os critérios de desempate)',
        'Placar por eventos: cada gol gera artilharia, timeline ao vivo e elenco por time',
        'Agendamento de jogos, selo "AO VIVO" e pênaltis no mata-mata',
        'Home pública read-only que atualiza sozinha via Supabase Realtime',
      ],
      aprendizados:
        'O gargalo de um app assim não é CPU nem bundle — é o número de idas e voltas ao banco, cada uma pagando a latência de rede inteira. Aprendi a tratar latência como arquitetura: manter a região da Vercel igual à do Supabase (São Paulo), validar a sessão localmente com chaves JWT assimétricas (sem gastar rede a cada página) e recalcular o placar por trigger no próprio banco. No código, a regra é ler no Server Component, escrever em Server Action e confiar no RLS como última linha de defesa — toda lógica sensível (chaveamento, validação de placar, classificação) roda no servidor, nunca no navegador.',
    },
  },
  {
    id: 27,
    slug: 'financas-controle-financeiro',
    titulo: 'Finanças — Controle Financeiro',
    descricao: 'Controle financeiro pessoal com login, importação automática do extrato bancário, metas de compra e dashboards que mostram quanto você tem livre de verdade.',
    nicho: 'Desenvolvimento',
    tecnologias: ['Next.js 16', 'React', 'TypeScript', 'Tailwind CSS 4', 'Supabase', 'PostgreSQL', 'Recharts', 'Vercel Cron'],
    imagem: '/projetos/financas.svg',
    demo: 'https://financeiro-nodejs.vercel.app/',
    repoPrivado: true,
    destaque: true,
    tamanho: 'md',
    detalhes: {
      problema:
        'Planilha de finanças não responde a pergunta que importa — "quanto eu posso gastar de verdade agora?" — e ainda exige lançar tudo na mão.',
      solucao:
        'App web com login que ancora o saldo no extrato real e mostra três números com corte no tempo: na conta agora, ainda entra este mês e livre de verdade (já descontando fixos e fatura em aberto). Importa o extrato automaticamente (API do Inter PJ via cron diário e arquivo OFX de qualquer banco), separa os gastos por origem (fatura, fixos, débito, pix) e traz metas de compra com análise de à vista × parcelado e onde economizar a partir do próprio histórico.',
      funcionalidades: [
        'Painel do mês com "quanto está livre de verdade" (descontando fixos e fatura)',
        'Importação automática do extrato: API do Inter PJ (cron diário) e arquivo OFX',
        'Entradas fixas e assinaturas com "caiu/pago", atrasados e checklist mensal',
        'Prévia de fatura por cartão e controle de investimentos (aportes, metas, plano de gastos)',
        'Metas de compra: à vista × parcelado, o que cabe e onde economizar, com simulação na hora',
        'Relatórios com drill-down e consolidado anual Entrou × Gastou',
      ],
      aprendizados:
        'O desafio mais interessante foi de modelagem, não de tela: separar "saldo em conta" de "livre de verdade", tratar investimento como dinheiro que sai da conta mas continua sendo seu, e ancorar o caixa no extrato para bater com o banco sem depender do histórico inteiro. Na integração, consumi a API do Inter PJ com mTLS num cron diário e escrevi um parser de OFX para importar qualquer banco. E na segurança: login obrigatório com RLS (cada conta vê só o que é seu), senha de 12+ caracteres barrando vazamentos via Have I Been Pwned (por k-anonimato) e contas novas nascendo pendentes de aprovação.',
    },
  },
  {
    id: 28,
    slug: 'series-app-catalogo',
    titulo: 'series.app — Catálogo de Séries',
    descricao: 'Rastreador focado só em séries de TV, episódio por episódio. Nasceu do fim do TV Time, com uma premissa: nunca mais depender de um serviço que pode apagar o seu histórico.',
    nicho: 'Desenvolvimento',
    tecnologias: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'PostgreSQL', 'TVmaze API', 'PWA'],
    imagem: '/projetos/series.svg',
    demo: 'https://series-app-topaz.vercel.app/',
    repoPrivado: true,
    destaque: false,
    tamanho: 'sm',
    detalhes: {
      problema:
        'O TV Time foi desligado em 15/07/2026 e levou junto o histórico de quem usava. O desafio: acompanhar várias séries — o que já assistiu e qual o próximo episódio — sem depender de um serviço que pode sumir com os seus dados.',
      solucao:
        'Um rastreador focado exclusivamente em séries (sem filmes, sem distração): busca via TVmaze, marca episódios assistidos, mostra o progresso de cada temporada e destaca o próximo episódio a ver. É web-first e vira PWA, com a base de séries ingerida e cacheada no Supabase para reduzir chamadas à API e ganhar robustez. Foi desenhado desde o início para virar multiusuário sem refazer a fundação.',
      funcionalidades: [
        'Busca de séries pela TVmaze API',
        'Listas por status: Assistindo, Quero assistir, Concluído e Abandonado',
        'Marcação de episódios e progresso por temporada (ex.: 14/22)',
        'Destaque do próximo episódio a assistir',
        'Importação do histórico exportado do TV Time',
        'PWA — instala na tela de início do celular',
      ],
      aprendizados:
        'Aprendi a projetar a fundação pensando no futuro sem sobre-construir: schema e auth já prontos para multiusuário e sincronização, mesmo começando como app pessoal. E lidei com dados de terceiros na prática — cachear a base da TVmaze no Supabase para reduzir chamadas e ganhar robustez, respeitando a licença CC BY-SA com crédito visível à fonte.',
    },
  },
  {
    id: 29,
    slug: 'locacoes-festas-gestao',
    titulo: 'Locações & Festas — Gestão',
    descricao: 'Gestão de locação de itens para festas — toalhas, mesas, cadeiras, capas e conjuntos. Substitui o caderno e não deixa reservar mais do que há em estoque.',
    nicho: 'Desenvolvimento',
    tecnologias: ['Next.js 14', 'React 18', 'TypeScript', 'Design System próprio', 'Supabase', 'PostgreSQL', 'Zod', 'PWA'],
    imagem: '/projetos/locacoes.svg',
    demo: 'https://locacoesvg-one.vercel.app/',
    repoPrivado: true,
    destaque: false,
    tamanho: 'sm',
    detalhes: {
      problema:
        'O controle de locação era feito no caderno: dava para reservar a mesma toalha para dois eventos no mesmo dia, esquecer de recolher e perder o controle do dinheiro.',
      solucao:
        'Sistema que substitui o caderno: cada pedido vira um registro com janela de entrega e recolhimento, itens, endereço, valor e status de pagamento. A disponibilidade é checada por janela de datas em duas camadas — no backend, com saldo em tempo real no formulário, e travada por trigger no Postgres, que nunca grava overbooking mesmo com dois pedidos simultâneos. Tem agenda do dia, Kanban logístico, calendário mensal e painel financeiro com inadimplentes.',
      funcionalidades: [
        'Checagem de disponibilidade por janela de datas (backend + trigger no banco, sem overbooking)',
        'Kanban logístico: reservado → separado → entregue → recolhido',
        'Agenda do dia, contador de atrasados e calendário mensal',
        'Financeiro: status pago/parcial/pendente, faturamento e inadimplentes',
        'Cadastro de clientes com endereços salvos e mensagens prontas de WhatsApp',
        'PWA instalável, com atalhos para Novo pedido e Agenda',
      ],
      aprendizados:
        'Dois destaques técnicos. Construí um design system próprio em TypeScript: os tokens geram todo o CSS do site por função, sem Tailwind nem CSS escrito à mão — mudar a marca inteira é editar uma paleta. E tratei a regra crítica (não reservar além do estoque) em duas camadas: validação no backend, com mensagem clara, e um trigger no Postgres como rede de segurança contra concorrência. Montei ainda o fluxo com Gitflow e ambientes separados de produção e staging (bancos Supabase distintos), para que um teste nunca toque no pedido real de uma cliente.',
    },
  },
  {
    id: 30,
    slug: 'mantus-christi-landing-page',
    titulo: 'Mantus Christi — Landing Page',
    descricao: 'Landing page da marca de camisetas católicas Mantus Christi: coleções, o processo de pedidos e conversão via WhatsApp.',
    nicho: 'Desenvolvimento',
    tecnologias: ['Next.js', 'React', 'TypeScript', 'Landing Page'],
    imagem: '/projetos/mantus-christi.svg',
    demo: 'https://mantuschristi-lp.vercel.app/',
    repoPrivado: true,
    destaque: false,
    tamanho: 'md',
    detalhes: {
      problema:
        'A marca precisava de uma presença online que apresentasse as coleções e conduzisse o cliente até o pedido pelo WhatsApp.',
      solucao:
        'Landing page responsiva que mostra os lançamentos do mês, explica como funcionam os pedidos (aberto por 7 dias, produção em 20 dias) e leva à conversa no WhatsApp.',
      funcionalidades: [
        'Vitrine de coleções e lançamentos',
        'Seção "como funciona" do processo de pedidos',
        'CTA de conversão para o WhatsApp',
        'Design responsivo, pensado para o celular',
      ],
    },
  },

  // Edição de Vídeo — thumbnails externas do YouTube ficam como string
  {
    id: 19,
    slug: 'bk-arts-motion-graphics',
    titulo: 'BK Arts - Motion Graphics',
    descricao: 'Edição criativa de vídeo curto com transições dinâmicas e efeitos visuais.',
    nicho: 'Edição de Vídeo',
    tecnologias: ['Premiere Pro', 'After Effects', 'CapCut'],
    imagem: 'https://img.youtube.com/vi/rZaWu5mbipo/maxresdefault.jpg',
    link: 'https://youtube.com/shorts/rZaWu5mbipo',
    destaque: true,
    tamanho: 'sm',
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
    destaque: false,
    tamanho: 'sm',
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
    destaque: false,
    tamanho: 'sm',
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
    destaque: false,
    tamanho: 'md',
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
    destaque: false,
    tamanho: 'md',
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
    destaque: false,
    tamanho: 'sm',
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
    destaque: false,
    tamanho: 'sm',
  },
];

export const nichos = ['Desenvolvimento', 'UX/UI Design', 'Front-End', 'Design Gráfico', 'Edição de Vídeo', 'Outros'] as const;
