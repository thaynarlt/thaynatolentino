// English texts for src/data/experiencias.ts, keyed by company id.
// `cargos` follows the same order as the original. Employment type, work
// model, dates and skills are translated by src/i18n/termos.ts.
export const experienciasEn: Record<number, { cargos: { cargo: string; descricao: string[] }[] }> = {
  1: {
    cargos: [
      {
        cargo: "Front-end Developer and Visual Designer",
        descricao: [
          "I'm part of Inorpel Cybersecurity's marketing team, created in 2026, responsible for the company's visual and web front, from institutional websites to sales and technical materials.",
          "I build and maintain the group's websites in Next.js, React and TypeScript (Inorpel Cybersecurity, ICS OT and ICS Labs) and lead the development of the ICS Academy website, with its own identity endorsed by Inorpel.",
          "I work on Inorpel's 2026 rebrand, applying the new visual identity system to websites, presentations and institutional materials.",
          "I produce the company's sales and technical materials: datasheets, battlecards, spec sheets and presentations.",
          "I work on redesigning the visual identity of Inorpel Cybersecurity's products, making sure the platforms communicate the brand consistently.",
        ],
      },
      {
        cargo: "UI/UX Designer",
        descricao: [
          "I build the group's institutional websites in Next.js, React and TypeScript: Inorpel Cybersecurity, ICS OT and ICS Labs, replacing the previous Wix versions, which were outdated and out of step with the company's current positioning.",
          "I handle publishing and the websites' infrastructure layer: deploys on Hostinger, domain and DNS setup on Cloudflare.",
          "I produce the company's sales and technical materials: around 8 datasheets a month, plus battlecards, spec sheets and presentations.",
          "I apply the brand identity to Inorpel's products and internal projects, adjusting interface and visual system so the platforms communicate the brand consistently.",
          "I lead the evolution of the ICS Academy visual identity and the visual direction of institutional events, such as the ICS 2026 Convention.",
        ],
      },
      {
        cargo: "IT Intern - ICS Academy",
        descricao: [
          "I worked in the product content team, editing institutional and product videos from raw footage to final delivery.",
          "I studied for and earned Fortinet's foundation certifications (Fortinet Certified Fundamentals in Cybersecurity and [Security Analytics] Simplify SOC Operations with Security Fabric Analytics and Automation r04), building a technical foundation in cybersecurity.",
          "I gradually took on design and development work until being hired as UI/UX Designer in March 2026.",
        ],
      },
    ],
  },
  2: {
    cargos: [
      {
        cargo: "Front-End Developer",
        descricao: [
          "I build features, fixes and refactors for Grupo MedWay's online platform, a production environment where the company manages students, classes and course materials, using Next.js 15, React 19 and TypeScript.",
          "I structured and expanded the platform's design system on top of shadcn/ui, Radix UI and Tailwind CSS, now used across several sections of the product. I also evaluated replacing the base library and recommended keeping it.",
          "I work on an established codebase alongside other developers: tasks assigned through GitHub Projects, branch-based development and pull requests reviewed and approved by the tech lead.",
          "I work mainly on the front end and have been expanding into back end and databases, using Supabase and PostgreSQL on end-to-end features.",
        ],
      },
    ],
  },
  3: {
    cargos: [
      {
        cargo: "Designer and Video Editor",
        descricao: [
          "I produced design pieces and video edits for the brands the agency served, averaging 8 deliveries a day, around 35 a week, for clients in healthcare, food, legal and other industries.",
          "I worked mostly on video: social media cuts and Instagram reels, including high-performance content for the agency's clients.",
          "I worked in an agency routine with tasks managed in Trello, delivering on daily deadlines while keeping each brand visually consistent.",
          "I joined as a video editor and my scope expanded to design when the agency noticed that skill in my work, and I went on to do both.",
        ],
      },
      {
        cargo: "Video Editor",
        descricao: [
          "I edited videos for the brands the agency serves, from raw footage to final delivery, handling multiple requests a day.",
          "I worked with CapCut Pro and Adobe After Effects on social media formats.",
          "After five months, my scope expanded to graphic design and I started doing both.",
        ],
      },
    ],
  },
  4: {
    cargos: [
      {
        cargo: "UX/UI Design Intern",
        descricao: [
          "I worked as a UX/UI Designer on LAVID's TV 3.0 projects, a research lab at UFPB's Informatics Center, on public health and education initiatives developed with the João Pessoa City Hall, TV Cidade and the Brazilian Ministry of Health.",
          "I designed standalone screens for Meu SUS Digital on TV (Seasonal Campaigns), expanding access to public health services for people who struggle with phones or computers. The interfaces were validated with real users and the project was presented at a conference and to the João Pessoa City Hall.",
          "I designed the Blue November (Novembro Azul) campaign app, raising awareness about prostate cancer, integrated with telehealth appointment booking. It was presented at the National Science and Technology Week.",
          "Together with my colleagues, I designed the screens of Amparar+, including an interactive card game that helps users learn accurate information about ASD and ADHD.",
          'I co-authored the article "Exploring geolocation and emergency alert in public health service via TV 3.0 in Brazil", published in the SET International Journal of Broadcast Engineering.',
        ],
      },
    ],
  },
};
