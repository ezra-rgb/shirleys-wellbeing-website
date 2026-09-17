import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/** Programme statuses mirror the Business Plan offer table exactly. No other values build. */
export const programmeStatus = z.enum([
  'pilot-development',
  'in-development',
  'early-development',
  'developing',
  'ongoing',
  'planned',
  'future',
  'longer-term',
]);

export const statusLabels: Record<z.infer<typeof programmeStatus>, string> = {
  'pilot-development': 'Pilot / development',
  'in-development': 'In development',
  'early-development': 'Early development',
  developing: 'Developing',
  ongoing: 'Ongoing',
  planned: 'Planned',
  future: 'Future',
  'longer-term': 'Longer-term',
};

const cta = z.object({ label: z.string(), href: z.string() });

const programmes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/programmes' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    status: programmeStatus,
    summary: z.string(),
    arm: z.enum(['support', 'move-wellbeing', 'voice-advocacy', 'appreciation-community']),
    imageSlot: z.string().optional(),
    order: z.number(),
    showOnHome: z.boolean().default(false),
    hasPage: z.boolean().default(false),
    launchCta: cta.optional(),
    futureCta: cta.optional(),
  }),
});

const routes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/routes' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    icon: z.string(),
    tint: z.enum(['sage', 'blush', 'pale-blue', 'gold']),
    order: z.number(),
    launchHref: z.string(),
    futureHref: z.string(),
  }),
});

const audiences = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/audiences' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    icon: z.string(),
    iconColour: z.enum(['coral', 'teal', 'sage', 'gold']),
    tint: z.enum(['sage', 'blush', 'pale-blue', 'gold']),
    anchor: z.string(),
    order: z.number(),
    href: z.string().optional(),
  }),
});

/**
 * Stories are empty at launch. The schema encodes the Business Plan rule that
 * participation in support never requires participation in publicity:
 * a story only builds with written consent recorded.
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
    imageSlot: z.string().optional(),
    sensitiveContent: z.boolean().default(false),
  }),
});

const legal = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/legal' }),
  schema: z.object({ title: z.string(), updated: z.coerce.date().optional() }),
});

export const collections = { programmes, routes, audiences, stories, legal };
