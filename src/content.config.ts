import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

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

const practice = defineCollection({
  loader: file('./src/data/practice.yaml'),
  schema: z.object({
    name: z.string(),
    principal: z.string(),
    principalTitle: z.string(),
    tagline: z.string(),
    positioning: z.string(),
    engagementModel: z.string(),
    location: z.string(),
    foundedYear: z.string(),
    email: z.string(),
    phone: z.string(),
    links: z.array(z.object({ label: z.string(), url: z.string() })),
    thesis: z.object({
      eyebrow: z.string(),
      heading: z.string(),
      body: z.string(),
    }),
    specializations: z.array(
      z.object({
        title: z.string(),
        detail: z.string(),
        client: z.string(),
      })
    ),
    engagements: z.array(
      z.object({
        org: z.string(),
        note: z.string(),
        years: z.string(),
      })
    ),
    credentials: z.object({
      education: z.array(z.string()),
      certifications: z.array(z.string()),
      yearsExperience: z.string(),
    }),
  }),
});

export const collections = { blog, casework, practice };
