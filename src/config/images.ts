/**
 * Image slot registry.
 *
 * Every photograph position on the site is a named slot. To supply a final
 * image, drop a file named `<slot>.jpg` (or .png/.webp/.avif) into
 * `src/assets/images/<page>/` and update the alt text below. Nothing else changes:
 * the frame keeps the aspect ratio, so layout is unaffected.
 *
 * Until a file exists the slot renders a tinted placeholder at the same ratio.
 */
export type Tint = 'sage' | 'blush' | 'pale-blue' | 'gold';

export type ImageSlotDef = {
  /** Folder under src/assets/images */
  page: 'home' | 'about' | 'lets-talk';
  /** Human description of what the final photograph should show */
  subject: string;
  /** CSS aspect-ratio for the frame on desktop */
  ratio: string;
  /** CSS aspect-ratio on narrow screens (optional) */
  ratioMobile?: string;
  /** Alt text for the supplied image. Written when the photograph is supplied. */
  alt: string;
  /** object-position for the supplied image, e.g. '50% 30%' to favour a face */
  focal?: string;
  tint: Tint;
  /** Widths generated for srcset */
  widths?: number[];
  sizes?: string;
};

export const imageSlots = {
  'home-hero': {
    page: 'home',
    subject: 'One person in a shop or stockroom, natural expression, warm light, environment visible but soft.',
    ratio: '4 / 3',
    ratioMobile: '16 / 10',
    alt: '',
    focal: '50% 30%',
    tint: 'sage',
    sizes: '(max-width: 900px) 100vw, 52vw',
  },
  'home-beyond-the-tills': {
    page: 'home',
    subject: 'A retail worker in conversation or at ease at work.',
    ratio: '16 / 9',
    alt: '',
    tint: 'pale-blue',
    sizes: '(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 25vw',
  },
  'home-move': {
    page: 'home',
    subject: 'Group movement or class, energy; backs or raised arms acceptable.',
    ratio: '16 / 9',
    alt: '',
    tint: 'sage',
    sizes: '(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 25vw',
  },
  'home-appreciation': {
    page: 'home',
    subject: 'A moment of thanks or recognition; no printed slogans.',
    ratio: '16 / 9',
    alt: '',
    tint: 'blush',
    sizes: '(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 25vw',
  },
  'home-voice': {
    page: 'home',
    subject: 'Listening or speaking; a microphone, notebook or conversation.',
    ratio: '16 / 9',
    alt: '',
    tint: 'gold',
    sizes: '(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 25vw',
  },
  'home-story': {
    page: 'home',
    subject: 'A person or pair, soft focus, with room for the blush overlay and handwritten accent.',
    ratio: '1 / 1',
    ratioMobile: '16 / 9',
    alt: '',
    tint: 'blush',
    sizes: '(max-width: 900px) 100vw, 50vw',
  },
  'about-hero': {
    page: 'about',
    subject: 'Another retail worker, a different age or setting from the Home hero.',
    ratio: '4 / 3',
    ratioMobile: '16 / 10',
    alt: '',
    focal: '50% 30%',
    tint: 'pale-blue',
    sizes: '(max-width: 900px) 100vw, 52vw',
  },
  'about-story': {
    page: 'about',
    subject: 'Approved photograph of the founder, Denise Sutherland, or of Shirley. Supplied separately.',
    ratio: '4 / 5',
    alt: '',
    focal: '50% 25%',
    tint: 'blush',
    sizes: '(max-width: 900px) 100vw, 40vw',
  },
  'about-approach': {
    page: 'about',
    subject: 'A person in a community or movement setting. Choose deliberately so it is not mistaken for the founder.',
    ratio: '2 / 1',
    ratioMobile: '16 / 9',
    alt: '',
    tint: 'sage',
    sizes: '(max-width: 900px) 100vw, 45vw',
  },
  'lets-talk-hero': {
    page: 'lets-talk',
    subject: 'A person smiling in a retail setting.',
    ratio: '4 / 3',
    ratioMobile: '16 / 10',
    alt: '',
    focal: '50% 30%',
    tint: 'blush',
    sizes: '(max-width: 900px) 100vw, 52vw',
  },
  'lets-talk-detail': {
    page: 'lets-talk',
    subject: 'Hands, a cup, a table; a warm everyday detail with no printed slogan.',
    ratio: '5 / 3',
    ratioMobile: '16 / 9',
    alt: '',
    tint: 'gold',
    sizes: '(max-width: 900px) 100vw, 40vw',
  },
} satisfies Record<string, ImageSlotDef>;

export type ImageSlotName = keyof typeof imageSlots;
