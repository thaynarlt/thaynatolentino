# Portfólio — Thayná Tolentino

Site pessoal apresentando trabalhos de **UX/UI Design**, **Front-End**, **Design Gráfico** e **Edição de Vídeo** como um único ecossistema criativo — não como caixas separadas.

Construído com Astro 6, React 19, Tailwind CSS v4 e Framer Motion.

---

## Stack

| Camada | Tecnologia | Por quê |
|---|---|---|
| Framework | **Astro 6** | Site de conteúdo (portfólio) — entrega HTML estático leve, hidrata React só onde precisa |
| UI interativa | **React 19** + **Framer Motion** | Islands isolados (filtro de projetos, animações de layout) |
| Estilização | **Tailwind CSS v4** + CSS Variables | Design tokens em 3 camadas, tema via `@theme` |
| Tipagem | **TypeScript strict** | Segurança em dados (projetos, experiências, skills) |
| Tipografia | **Inter** (UI) + **Instrument Serif** (editorial) | Contraste entre funcional e expressivo |

---

## Como rodar localmente

```bash
npm install
npm run dev     # desenvolvimento — http://localhost:4321
npm run build   # gera o site estático em /dist
npm run preview # serve o build local pra validar
```

Requer **Node 22.12+**.

---

## Estrutura

```
src/
├── layouts/
│   └── Layout.astro              # HTML base, fontes, <head>, script de reveal
├── pages/
│   ├── index.astro               # Home (todas as seções)
│   └── design-system.astro       # Playground de tokens (referência viva)
├── components/
│   ├── ui/                       # Primitivos .astro (Button, Badge)
│   ├── layout/                   # Header, Footer
│   ├── sections/                 # Seções da home (Hero, Projetos, etc.)
│   └── react/                    # Islands React (FilteredProjects, ProjectCard)
├── data/                         # Arrays tipados: projetos, experiências, skills
├── types/                        # Interfaces TypeScript
└── styles/
    └── global.css                # Tokens + Tailwind v4 @theme + reveal system
```

---

## Design System — 3 camadas de tokens

Todas as decisões visuais moram em [src/styles/global.css](src/styles/global.css), em 3 camadas:

### Camada 1 — Primitivos (`:root`)
Valores crus. Escalas 50–900 nunca usadas diretamente em componentes.

```css
--cyan-500:   #00B8C4;   /* signature */
--magenta-500: #E8336F;   /* support */
--ink-50:     #FAFAF7;   /* fundo */
--ink-900:    #0F1419;   /* texto */
```

### Camada 2 — Semânticos (`@theme`)
Tailwind v4 lê esse bloco e **gera utilitárias automaticamente** (`bg-bg`, `text-accent`, `font-display`). Componentes consomem só daqui.

```css
--color-bg:        var(--ink-50);
--color-accent:    var(--cyan-500);
--color-text:      var(--ink-900);
--font-display:    'Instrument Serif', serif;
```

### Camada 3 — Tokens de componente (quando necessário)
Escopados por componente, criados só quando semântico não basta.

**Resultado:** trocar a paleta inteira = mudar um hex na Camada 1. Zero refactor em componentes.

---

## Paleta

- **Ciano signature** `#00B8C4` — CTAs, destaques, identidade
- **Magenta support** `#E8336F` — uso pontual (Edição de Vídeo)
- **Ink neutros** off-white → carvão — fundo, texto, bordas

---

## Decisões arquiteturais

- **Astro islands** — React só em `FilteredProjects` (precisa de `useState` + Framer). Resto é `.astro` estático → bundle leve.
- **Scroll reveal sem biblioteca** — `data-reveal` + IntersectionObserver inline ([Layout.astro](src/layouts/Layout.astro)). Respeita `prefers-reduced-motion`.
- **Bento grid de projetos** — cards com `tamanho: sm | md | lg` via `col-span` variável. Destaques ocupam mais espaço.
- **Filtro default em "Destaques"** — evita página longa demais na primeira carga.
- **Content Collections (não implementado)** — roadmap: migrar `data/projetos.ts` para `src/content/projetos/*.mdx` quando adicionar case studies.

---

## Roadmap — próximas melhorias

### Prioridade alta
- [ ] **Deploy** (Vercel/Netlify) — produção pública
- [ ] **SEO + Open Graph** — meta tags completas, OG image 1200×630
- [ ] **Favicon próprio** — identidade visual no browser tab
- [ ] **Otimização de imagens** — migrar pra `<Image />` do Astro (`src/assets/`) com WebP/AVIF automático
- [ ] **Páginas individuais de projeto** — `/projetos/[slug]` com case studies ricos (4-5 destaques como MVP)

### Prioridade média
- [ ] **Hamburger menu** no mobile (<400px)
- [ ] **A11y audit** — Lighthouse, landmarks ARIA, skip-link, contraste WCAG AA
- [ ] **View Transitions** do Astro — transição smooth entre páginas

### Polish
- [ ] Seção "Além do trabalho" (hobbies)
- [ ] Domínio próprio (`.com.br`)
- [ ] Dark mode (opcional, futuro)

---

## Créditos

Design e desenvolvimento: **Thayná Tolentino**.
Tipografia: [Inter](https://rsms.me/inter/) + [Instrument Serif](https://fonts.google.com/specimen/Instrument+Serif).

---

## Licença

MIT.
