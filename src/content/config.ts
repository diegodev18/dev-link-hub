import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(),
    tags: z.array(z.string()),
    image: z.string().optional(),
    url: z.string().optional(),
    creator: z.object({
      youtube: z.string().optional(),
      x: z.string().optional(),
      website: z.string().optional(),
    }),
  }),
});

const works = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(),
    tags: z.array(z.string()),
    image: z.string().optional(),
    url: z.string().optional(),
    creator: z.object({
      youtube: z.string().optional(),
      x: z.string().optional(),
      website: z.string().optional(),
    }),
  }),
});

const blogs = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(),
    creator: z.object({
      youtube: z.string().optional(),
      x: z.string().optional(),
      website: z.string().optional(),
    }),
  }),
});

export const collections = { projects, works, blogs };
