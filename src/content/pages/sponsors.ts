/**
 * Sponsors page copy. Sponsors themselves are listed in src/config/sponsors.ts.
 * No prices or sponsorship packages: what a sponsorship funds is agreed with each sponsor.
 * What sponsors can expect is drawn from commitments already published elsewhere on the
 * site (honest outcome reporting, confidentiality); see docs/CONTENT-DEPENDENCIES.md.
 */
const talk = '/lets-talk#get-in-touch';

export const sponsorsPage = {
  meta: {
    title: "Sponsors | Shirley's Wellbeing CIC",
    description:
      "The organisations sponsoring Shirley's Wellbeing CIC, and how you can sponsor a programme or help someone affected by violence or abuse at work get support.",
  },
  hero: {
    eyebrow: 'Sponsors',
    title: 'Support that reaches the shop floor.',
    lead: 'Our sponsors help people in retail get support after violence or abuse at work. You can sponsor a programme, or help someone who has been affected take part.',
    primaryCta: { label: 'Talk to us about sponsoring', href: talk },
    secondaryCta: { label: 'Ways to sponsor', href: '#ways' },
  },
  current: {
    heading: 'Thank you to our sponsors',
    text: 'These organisations help make our work possible.',
  },
  ways: {
    eyebrow: 'Ways to sponsor',
    heading: 'Two ways to help.',
    lead: "Every sponsorship goes into support for people in retail. We'll agree with you what yours funds before anything starts.",
    items: [
      {
        tag: 'Programmes',
        title: 'Sponsor a programme',
        text: 'Fund a Beyond the Tills group, one-to-one support for shop owners and managers, or MOVE sessions in a local area, so more people can get support close to where they work.',
        link: { label: 'About our programmes', href: '/programmes' },
      },
      {
        tag: 'People',
        title: 'Support someone affected',
        text: "Fund a place for someone who has been affected by violence or abuse at work. You won't know who they are: their privacy always comes first.",
        link: { label: 'How confidentiality works', href: '/safeguarding' },
      },
    ],
  },
  expect: {
    heading: 'What sponsors can expect',
    items: [
      { title: 'Agreed up front', text: 'We agree together what your sponsorship funds before anything starts.' },
      { title: 'Honest reporting', text: "We check in on how people are doing at the start, at the end and three months later, and we'll tell you honestly what your support made possible." },
      { title: 'Privacy first', text: 'Sponsors never find out who has taken part, or what anyone has shared.' },
    ],
  },
  closing: {
    heading: 'Help someone get support after what happened.',
    text: "Talk to us about sponsoring a programme or a place. Call, text or email, and we'll take it from there.",
    primaryCta: { label: 'Talk to us about sponsoring', href: talk },
    secondaryCta: { label: 'For employers', href: '/partners' },
  },
};
