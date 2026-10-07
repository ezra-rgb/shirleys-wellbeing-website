/**
 * Short pages for routes that exist but are not in the primary navigation until
 * genuine content exists (V2 mandate section 5). Both are noindex.
 */
export const storiesPage = {
  meta: {
    title: "Stories | Shirley's Wellbeing CIC",
    description: "Stories from people in retail will be shared here, only ever with their consent.",
  },
  eyebrow: 'Stories',
  title: 'Stories will be shared here.',
  body: [
    'In time, this is where people in retail will be able to share their experiences, in their own words and only ever with their consent.',
    "Taking part in Shirley's never requires taking part in publicity, and nobody is ever asked to describe what happened.",
  ],
  primaryCta: { label: 'Talk to us', href: '/lets-talk' },
  secondaryCta: { label: 'See how we help', href: '/#how-we-help' },
};

export const getInvolvedPage = {
  meta: {
    title: "Get involved | Shirley's Wellbeing CIC",
    description: "Ways to get involved with Shirley's are being developed. The best first step is a conversation.",
  },
  eyebrow: 'Get involved',
  title: 'The best first step is a conversation.',
  body: [
    "Ways to get involved with Shirley's are being developed.",
    "Whether you work in retail, employ people who do, or want to support the work, we'd like to hear from you.",
  ],
  primaryCta: { label: 'Talk to us', href: '/lets-talk' },
  secondaryCta: { label: 'Partner with us', href: '/partners' },
};

export const notFoundPage = {
  meta: { title: "Page not found | Shirley's Wellbeing CIC", description: "That page could not be found. Go to the Shirley's Wellbeing CIC home page or get in touch." },
  eyebrow: 'Page not found',
  title: "We couldn't find that page.",
  body: ['The page may have moved, or the link may be out of date.'],
  primaryCta: { label: 'Go to the home page', href: '/' },
  secondaryCta: { label: 'Talk to us', href: '/lets-talk' },
};
