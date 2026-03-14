import { defineCollection } from "astro:content";
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const publicaciones = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/publicaciones" }),

  schema: z.object({
    title: z.string(),
    author: z.string(),
    description: z.string(),
    image: z.string(),
    date: z.date(),
    draft: z.boolean(),
    category: z.string(),
    language: z.string(),
    tags: z.array(z.string()),
  }),
});

export const collections = {publicaciones};