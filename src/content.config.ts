import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

// Notas: textos curtos sobre design, front-end e projetos.
// Cada idioma fica numa subpasta (pt/, en/); o id da entrada vira "pt/slug".
const notas = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/notas" }),
  schema: z.object({
    titulo: z.string(),
    resumo: z.string(),
    data: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    /** Link do post original, quando a nota nasceu no LinkedIn. */
    linkedin: z.string().url().optional(),
  }),
});

export const collections = { notas };
