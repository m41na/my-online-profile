import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Just write dates as 'YYYY-MM-DD' in frontmatter — no ceremony.
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const casework = defineCollection({
  loader: glob({ base: './src/content/casework', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    // The one-line hook shown on cards.
    hook: z.string(),
    sector: z.string(),
    client: z.string().optional(),
    // Short tag chips, e.g. ["Kafka", "Debezium", "CDC"]
    stack: z.array(z.string()).default([]),
    // Engagement snapshot — shown as a stat strip at the top of the page.
    duration: z.string().optional(),
    teamSize: z.number().optional(),
    role: z.string().optional(),
    outcome: z.string().optional(),
    // Lower number = shown first. Use this to control priority, not date.
    order: z.number(),
    status: z.enum(['live', 'draft']).default('live'),
  }),
});

export const collections = { blog, casework };
