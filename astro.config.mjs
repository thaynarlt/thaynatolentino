// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://thaynarlt.com.br',
  // Português na raiz; inglês em /en (src/pages/en).
  i18n: {
    defaultLocale: 'pt',
    locales: ['pt', 'en'],
    routing: { prefixDefaultLocale: false },
  },
  vite: { plugins: [tailwindcss()] },
  integrations: [
    react(),
    // /sitemap-index.xml com todas as páginas públicas; a ligação entre os
    // idiomas fica nos links hreflang de cada página (Layout.astro).
    sitemap({ filter: (pagina) => !pagina.includes('/design-system') }),
  ],
});
