import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Stories are empty until genuine, consented content exists. The schema encodes
 * the rule that participation in support never requires participation in
 * publicity: a story only builds with written consent recorded.
 */
const stories = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/stories' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    attribution: z.string().default('Anonymous'),
    consentConfirmed: z.literal(true),
    consentDate: z.coerce.date(),
    summary: z.string(),
  }),
});

export const collections = { stories };
