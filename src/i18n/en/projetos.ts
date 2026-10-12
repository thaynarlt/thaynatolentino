import type { TraducaoProjeto } from '../../types';

// English texts for src/data/projetos.ts, keyed by project slug.
export const projetosEn: Record<string, TraducaoProjeto> = {
  'tv-3-0-saude-publica-lavid': {
    titulo: 'TV 3.0 for Public Health — LAVID/UFPB',
    descricao:
      "TV 3.0 interfaces that bring services from SUS, Brazil's public health system, to television: Meu SUS Digital TV, the Novembro Azul Campaign and Amparar+. Validated with real users and published in a scientific article.",
    detalhes: {
      problema:
        'Many people struggle to use health services on a phone or computer, but they have a TV at home. TV 3.0, the next generation of Brazilian digital TV, brings interactivity, geolocation and emergency alerts. At LAVID, a research lab at the Center for Informatics of UFPB, the challenge was to use these features to bring public health services to television, in initiatives with the João Pessoa City Hall, TV Cidade and the Ministry of Health.',
      solucao:
        "I worked as a UX/UI Designer on the lab's TV 3.0 projects, from gathering user stories to high-fidelity prototypes and usability testing, in collaboration with a multidisciplinary team. For Meu SUS Digital TV, I designed the telehealth flow, from the QR Code to the waiting queue, as well as the seasonal campaigns, including the Novembro Azul Campaign app. Together with my colleagues, I designed the screens for Amparar+, focused on ASD and ADHD.",
      funcionalidades: [
        'Meu SUS Digital TV · Seasonal Campaigns: screens that expand access to public health services for people who struggle with phones or computers',
        'Meu SUS Digital TV · Waiting Queue: informative content about the queue while the patient waits for their remote consultation',
        'Novembro Azul Campaign: a preliminary prostate cancer symptom screening quiz, integrated with telehealth appointment booking',
        'Amparar+ · Myths and Facts Quiz: an interactive card game with instant feedback about ASD and ADHD',
        'Amparar+ · Fun: a memory game that stimulates focus and cognition in an accessible way',
        "LabStation and App Catalog: interfaces for launching apps in development mode and presenting the platform's apps",
      ],
      resultados:
        'The interfaces were validated with real users. Meu SUS Digital TV was presented at a conference and to the João Pessoa City Hall, and the Novembro Azul Campaign at the National Science and Technology Week.\n\nThe work also resulted in the article "Exploring geolocation and emergency alert in public health service via TV 3.0 in Brazil", published in the SET International Journal of Broadcast Engineering (vol. 11, 2025), which I co-authored.',
      links: [{ label: 'Read the article' }],
      videos: [
        {
          titulo: 'TV 3.0 project presentation',
          descricao:
            'Overview of the interactive and inclusive health and education applications developed at LAVID (video by the project team).',
        },
        {
          titulo: 'Meu SUS Digital TV',
          descricao: 'Demo of the app running on a TV.',
        },
        {
          titulo: 'Amparar+',
          descricao: 'Demo of the app focused on ASD and ADHD.',
        },
        {
          titulo: 'LabStation',
          descricao: 'A tool for launching applications in development mode.',
        },
        {
          titulo: 'LabApp',
          descricao: "A tool that presents the platform's apps.",
        },
      ],
      galeria: [
        {
          titulo: 'Meu SUS TV · Care via QR Code',
          descricao:
            'To get care, the viewer scans the QR Code on the TV and immediately joins the service queue.',
        },
        {
          titulo: 'Meu SUS TV · Following the queue on TV',
          descricao:
            'Once in the queue, they can go back to the channel and watch the programming while waiting for their turn to enter the telehealth room.',
        },
        {
          titulo: 'Meu SUS TV · Queue position',
          descricao:
            'While they watch, a small card in the top-left corner shows how many people are still ahead of them.',
        },
        {
          titulo: "Meu SUS TV · You're next",
          descricao:
            'When only one person is left, the TV lets them know they are next to enter the virtual room.',
        },
        {
          titulo: "Meu SUS TV · It's your turn",
          descricao:
            'When their turn comes, a pop-up announces that the consultation is about to start, along with a notification sound.',
        },
        {
          titulo: 'Novembro Azul Campaign · Opening screen',
          descricao:
            'A simple interface with few options, designed to draw the audience in and make it easy to use.',
        },
        {
          titulo: 'Novembro Azul Campaign · Quiz',
          descricao:
            'Yes-or-no questions provide a preliminary screening for symptoms related to prostate cancer.',
        },
        {
          titulo: 'Novembro Azul Campaign · Result',
          descricao:
            'If there are symptoms, the TV guides the viewer to book an appointment with a urologist via QR Code.',
        },
        {
          titulo: 'Amparar+ · Myths and Facts Quiz',
          descricao:
            'A section of the Amparar+ app, focused on ASD and ADHD. An interactive card game lets users discover accurate information about ASD and ADHD, with instant feedback, raising awareness in a playful and educational way.',
        },
        {
          titulo: 'Amparar+ · Fun',
          descricao:
            'An interactive memory game designed to stimulate focus, cognition and entertainment in an accessible and inclusive way.',
        },
        {
          titulo: 'LabStation',
          descricao:
            'An interface for launching applications in development mode, giving developers a more practical and intuitive experience when setting up and running test environments.',
        },
        {
          titulo: 'App Catalog',
          descricao:
            "A catalog that presents the platform's apps and features in an organized, accessible way, making navigation easier and encouraging greater user engagement.",
        },
      ],
      creditoGaleria:
        'Meu SUS Digital TV and Novembro Azul Campaign screens: Alves et al. (2025), SET International Journal of Broadcast Engineering, CC BY 4.0 license.',
    },
  },

  // Graphic Design
  'identidade-visual-maria-teresa-babygirl': {
    titulo: 'Maria Teresa - BabyGirl Visual Identity',
    descricao:
      "Complete visual identity for a children's brand, including the logo, a soft color palette and brand applications.",
  },
  'design-camisas-catolicas': {
    titulo: 'Catholic T-Shirt Designs',
    descricao:
      'Designs for a line of Catholic T-shirts featuring modern, elegant religious elements.',
  },
  'portfolio-camisas-diversas': {
    titulo: 'Assorted T-Shirt Portfolio',
    descricao:
      'A portfolio of creative, custom T-shirt designs for different niches.',
  },
  'logo-medicos-catolicos': {
    titulo: 'Catholic Doctors Logo',
    descricao:
      'Professional visual identity for a group of Catholic doctors, combining medical and religious symbolism.',
  },
  'identidade-visual-casamento-anna-luiza-e-igor': {
    titulo: 'Anna Luiza and Igor Wedding Visual Identity',
    descricao:
      'Complete visual identity for a wedding, including invitations, stationery and event branding.',
  },
  'identidade-visual-psicologo': {
    titulo: 'Psychologist Visual Identity',
    descricao:
      'Complete branding for a psychology practice, conveying warmth and professionalism.',
  },
  'mantus-christi-identidade-visual': {
    titulo: 'Mantus Christi - Visual Identity',
    descricao:
      'Sophisticated visual identity for a religious project, blending classic and contemporary elements.',
  },
  'cracha-al-company': {
    titulo: 'Al Company ID Badge',
    descricao: 'Modern, functional corporate ID badge design for Al Company.',
  },

  // UX/UI Design
  'al-company-landing-page': {
    descricao:
      'Modern, responsive landing page design for a tech company, focused on conversion.',
  },
  'website-the-eras-tour-brasil': {
    titulo: 'The Eras Tour Brasil Website',
    descricao:
      'Complete website design for The Eras Tour Brasil, with an immersive, interactive experience.',
  },
  'projeto-ced-interface': {
    titulo: 'CED Project - Interface',
    descricao:
      'Intuitive, accessible interface for an educational system, focused on user experience.',
  },
  'oxxy-landing-page': {
    descricao:
      'Clean, modern landing page for the Oxxy product, with a minimalist design and a focus on conversion.',
  },

  // Front-End
  'landing-page-educacao-ambiental-ifpb': {
    titulo: 'IFPB Environmental Education Landing Page',
    descricao:
      'Informative landing page about environmental education, built for IFPB with a responsive design.',
  },

  // Other
  'sistema-de-folha-de-pagamento': {
    titulo: 'Payroll System',
    descricao:
      'Complete system for calculating and managing payroll, backed by a database.',
  },
  'biblioteca-interdimensional': {
    titulo: 'Interdimensional Library',
    descricao:
      'Library management system with a relational database and advanced queries.',
  },
  'jogo-da-forca': {
    titulo: 'Hangman Game',
    descricao:
      'Interactive hangman game built in Java, with a graphical interface and a scoring system.',
  },
  'sistema-de-gerenciamento-de-hotel': {
    titulo: 'Hotel Management System',
    descricao:
      'Hotel booking and management system that applies operating systems concepts.',
  },
  'lista-de-tarefas-react': {
    titulo: 'React To-Do List',
    descricao:
      'To-do list app built in React, with features to add, edit and delete tasks.',
  },

  // Development
  'copascom-placar-ao-vivo': {
    titulo: 'Copascom — Live Scoreboard',
    descricao:
      'Youth futsal tournament organizer with a real-time public view, Apple Sports style. The organizer sets up the tournament; the public follows everything through a link, no login required.',
    detalhes: {
      problema:
        'In youth futsal tournaments, scores, brackets and standings live in notebooks and WhatsApp groups. Anyone who is not at the court cannot follow along, and the organizer wastes time recalculating standings and brackets by hand.',
      solucao:
        'A real-time platform, Apple Sports style: the organizer sets up the tournament (categories, groups, brackets, scores) and the public follows along through a link, no login required. Each category (U-6, U-7…) is an independent tournament with its own format, bracket and final. Bracket generation, standings (CBFS/FIFA futsal standard) and winner advancement are calculated on the server, and the public home page updates on its own via Supabase Realtime.',
      funcionalidades: [
        'Per-category management: straight knockout or group stage + knockout, configurable',
        'Automatic bracket generation with bye distribution and winner advancement',
        'Group stage with standings following the CBFS/FIFA futsal standard (all tiebreaker criteria)',
        'Event-based scoring: each goal feeds the top scorers list, a live timeline and team rosters',
        'Match scheduling, a "LIVE" badge and penalty shootouts in the knockout stage',
        'Read-only public home page that updates on its own via Supabase Realtime',
      ],
      aprendizados:
        "The bottleneck in an app like this is not CPU or bundle size — it's the number of round trips to the database, each one paying the full network latency. I learned to treat latency as architecture: keeping the Vercel region the same as the Supabase one (São Paulo), validating the session locally with asymmetric JWT keys (without spending a network call on every page) and recalculating the score with a trigger in the database itself. In the code, the rule is to read in Server Components, write in Server Actions and trust RLS as the last line of defense — all sensitive logic (bracket generation, score validation, standings) runs on the server, never in the browser.",
    },
  },
  'financas-controle-financeiro': {
    titulo: 'Finanças — Personal Finance Tracker',
    descricao:
      'Personal finance tracker with login, automatic bank statement import, purchase goals and dashboards that show how much money is truly free.',
    detalhes: {
      problema:
        'A finance spreadsheet does not answer the question that matters — "how much can I really spend right now?" — and it still requires entering everything by hand.',
      solucao:
        'A web app with login that anchors the balance to the real bank statement and shows three time-bound numbers: in the account now, still coming in this month and truly free (already minus fixed expenses and the open credit card bill). It imports the statement automatically (Inter PJ API via a daily cron job and OFX files from any bank), splits spending by source (credit card bill, fixed expenses, debit, Pix) and includes purchase goals with an upfront × installments analysis and where to save based on your own history.',
      funcionalidades: [
        'Monthly dashboard showing "how much is truly free" (after fixed expenses and the credit card bill)',
        'Automatic statement import: Inter PJ API (daily cron) and OFX files',
        'Recurring income and subscriptions with "received/paid" tracking, overdue items and a monthly checklist',
        'Bill preview per credit card and investment tracking (contributions, goals, spending plan)',
        'Purchase goals: upfront × installments, what fits and where to save, with instant simulation',
        'Reports with drill-down and an annual Income × Spending summary',
      ],
      aprendizados:
        'The most interesting challenge was data modeling, not UI: separating "account balance" from "truly free", treating investments as money that leaves the account but is still yours, and anchoring cash flow to the bank statement so it matches the bank without relying on the entire history. On the integration side, I consumed the Inter PJ API with mTLS in a daily cron job and wrote an OFX parser to import from any bank. And on security: mandatory login with RLS (each account sees only its own data), 12+ character passwords with leaked ones blocked via Have I Been Pwned (using k-anonymity) and new accounts starting out pending approval.',
    },
  },
  'series-app-catalogo': {
    titulo: 'series.app — TV Series Catalog',
    descricao:
      'A tracker focused only on TV series, episode by episode. Born from the end of TV Time, with one premise: never again depend on a service that can erase your history.',
    detalhes: {
      problema:
        "TV Time was shut down on July 15, 2026, and took its users' history with it. The challenge: keep track of several series — what you have already watched and what the next episode is — without depending on a service that can disappear with your data.",
      solucao:
        'A tracker focused exclusively on series (no movies, no distractions): search via TVmaze, mark episodes as watched, see the progress of each season and highlight the next episode to watch. It is web-first and works as a PWA, with the series database ingested and cached in Supabase to reduce API calls and improve robustness. It was designed from the start to become multi-user without rebuilding the foundation.',
      funcionalidades: [
        'Series search through the TVmaze API',
        'Lists by status: Watching, Want to Watch, Completed and Dropped',
        'Episode tracking and per-season progress (e.g. 14/22)',
        'Highlight of the next episode to watch',
        'Import of the history exported from TV Time',
        "PWA — installs on your phone's home screen",
      ],
      aprendizados:
        'I learned to design the foundation with the future in mind without overbuilding: schema and auth already prepared for multiple users and sync, even though it started as a personal app. And I dealt with third-party data in practice — caching the TVmaze database in Supabase to reduce calls and improve robustness, while respecting the CC BY-SA license with visible credit to the source.',
    },
  },
  'locacoes-festas-gestao': {
    titulo: 'Party Rentals — Management',
    descricao:
      'Management of party item rentals — tablecloths, tables, chairs, covers and sets. It replaces the paper notebook and prevents booking more than what is in stock.',
    detalhes: {
      problema:
        'Rentals were tracked in a notebook: it was possible to book the same tablecloth for two events on the same day, forget to pick items up and lose track of the money.',
      solucao:
        'A system that replaces the notebook: each order becomes a record with a delivery and pickup window, items, address, amount and payment status. Availability is checked by date window in two layers — in the backend, with real-time stock levels in the form, and locked by a Postgres trigger that never saves an overbooking, even with two simultaneous orders. It includes a daily agenda, a logistics Kanban board, a monthly calendar and a financial dashboard with customers who have overdue payments.',
      funcionalidades: [
        'Availability check by date window (backend + database trigger, no overbooking)',
        'Logistics Kanban: reserved → packed → delivered → picked up',
        'Daily agenda, overdue counter and monthly calendar',
        'Finances: paid/partial/pending status, revenue and customers with overdue payments',
        'Customer records with saved addresses and ready-made WhatsApp messages',
        'Installable PWA, with shortcuts to New order and Agenda',
      ],
      aprendizados:
        'Two technical highlights. I built my own design system in TypeScript: the tokens generate all of the CSS for the site through functions, with no Tailwind or hand-written CSS — changing the entire brand means editing a single palette. And I handled the critical rule (never booking beyond stock) in two layers: backend validation, with a clear message, and a Postgres trigger as a safety net against concurrency. I also set up the workflow with Gitflow and separate production and staging environments (distinct Supabase databases), so a test never touches a real customer order.',
    },
  },
  'mantus-christi-landing-page': {
    descricao:
      'Landing page for the Catholic T-shirt brand Mantus Christi: collections, the ordering process and conversion via WhatsApp.',
    detalhes: {
      problema:
        'The brand needed an online presence that showcased its collections and guided customers all the way to placing an order on WhatsApp.',
      solucao:
        'A responsive landing page that shows the monthly releases, explains how orders work (open for 7 days, produced in 20 days) and leads to a WhatsApp conversation.',
      funcionalidades: [
        'Showcase of collections and new releases',
        'A "how it works" section about the ordering process',
        'Conversion CTA to WhatsApp',
        'Responsive design, built with mobile in mind',
      ],
    },
  },

  // Video Editing
  'bk-arts-motion-graphics': {
    descricao:
      'Creative short-form video editing with dynamic transitions and visual effects.',
  },
  'bk-ads-anuncio': {
    titulo: 'BK Ads - Advertisement',
    descricao:
      'Editing of vertical content optimized for social media, with motion graphics.',
  },
  'bk-reviews-motion-graphics': {
    descricao:
      'Short video with rhythmic editing, perfectly synced to the music.',
  },
  'al-company-anuncio': {
    titulo: 'Al Company - Advertisement',
    descricao:
      'Creative editing with transition effects and professional color correction.',
  },
  'al-company-anuncio-2': {
    titulo: 'Al Company - Advertisement 2',
    descricao:
      'Vertical video with visual storytelling and dynamic editing for engagement.',
  },
  'gomes-marques-reels': {
    descricao:
      'Reels editing with modern visual effects and a synced soundtrack.',
  },
  'lapa-de-carne-food': {
    descricao:
      'Vertical content edited for visual impact and audience retention.',
  },
};
