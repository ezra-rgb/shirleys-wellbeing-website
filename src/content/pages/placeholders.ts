/**
 * Minimal launch treatments for navigation items whose full pages come later.
 * Wording is drawn from the Business Plan (Year 1 LISTEN; participation in
 * support never requires participation in publicity; who Shirley's works with).
 */
export const storiesPage = {
  meta: {
    title: "Stories | Shirley's Wellbeing CIC",
    description: "Check in soon to see how Shirley's supports people in its community.",
  },
  eyebrow: 'Coming soon',
  title: [{ text: 'Stories from our ' }, { text: 'community', script: true }, { text: '.' }],
  lead: 'Check in soon to see how we support people in our community.',
  body: [
    "Shirley's is beginning by listening. This is where stories from people in retail will live as the community grows.",
    "If you work or have worked in retail and would like to tell us what would help, we would love to hear from you. Taking part in Shirley's activity never requires taking part in publicity.",
  ],
  cta: { label: "Let's Talk", href: '/lets-talk' },
  accent: 'People Change Everything',
};

export const getInvolvedPage = {
  meta: {
    title: "Get Involved | Shirley's Wellbeing CIC",
    description: "Ways to get involved with Shirley's are being developed. The best first step is a conversation.",
  },
  eyebrow: 'Coming soon',
  title: [{ text: 'Get ' }, { text: 'involved', script: true }, { text: '.' }],
  lead: "Ways to get involved with Shirley's are being developed.",
  body: [
    'Whether you are in retail, an employer, a partner, a funder or someone who wants to help, the best first step is a conversation.',
    "Shirley's works with retailers and employers, retail destinations, local authorities, community organisations, professional partners, sponsors and funders.",
  ],
  cta: { label: "Let's Talk", href: '/lets-talk' },
  accent: 'Stronger People Brighter Communities',
};

export const notFoundPage = {
  meta: { title: "Page not found | Shirley's Wellbeing CIC", description: 'That page does not exist.' },
  title: [{ text: 'We could not find that ' }, { text: 'page', script: true }, { text: '.' }],
  lead: 'The page may have moved, or the link may be out of date.',
  body: ["You can go back to the start, or get in touch and we will point you in the right direction."],
  primaryCta: { label: 'Go to Home', href: '/' },
  secondaryCta: { label: "Let's Talk", href: '/lets-talk' },
};
