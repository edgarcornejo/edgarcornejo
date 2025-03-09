import { defineCollection, z } from "astro:content";

const publicaciones = defineCollection({
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