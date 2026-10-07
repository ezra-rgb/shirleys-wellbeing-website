/**
 * Copy used on more than one page.
 * Source: V2 design (home.pdf) and the V2 mandate, sections 4 and 6.
 */
export const expectations = {
  heading: 'What you can expect from us',
  items: [
    { lead: 'You decide how much to share.', text: 'Saying nothing about what happened is completely fine.' },
    { lead: 'You can stop at any time.', text: 'No pressure to come back, and no explanation needed.' },
    { lead: "We'll tell you what happens next", text: 'before it happens.' },
    {
      // The full confidentiality terms and safeguarding exceptions are awaiting approval
      // (docs/CONTENT-DEPENDENCIES.md). Only the serious-risk-of-harm example is supplied.
      lead: 'Confidentiality.',
      text: 'We treat what you tell us with care. In rare situations, such as a serious risk of harm, information may need to be shared.',
      link: { label: 'How confidentiality works', href: '/safeguarding' },
    },
  ],
};

export const supportRoutes = {
  heading: 'Other support',
  intro:
    "These are specialist services run by other organisations. Shirley's doesn't provide them, but we can help you find the right one.",
  items: [
    {
      name: 'NHS Talking Therapies',
      text: 'Free NHS talking therapy for anxiety and depression in England. You can refer yourself.',
      link: { label: 'Find NHS Talking Therapies near you', href: 'https://www.nhs.uk/nhs-services/mental-health-services/find-nhs-talking-therapies-for-anxiety-and-depression/' },
    },
    {
      name: 'Your GP',
      text: 'Your GP can talk through how you are feeling and what support is available, including referrals.',
    },
    {
      name: 'Retail Trust',
      text: 'The charity for people who work in retail. Its wellbeing helpline is free and open 24 hours.',
      phone: { label: '0808 801 0808', href: 'tel:+448088010808' },
      link: { label: 'Visit Retail Trust', href: 'https://www.retailtrust.org.uk/' },
    },
    {
      name: 'Samaritans',
      text: 'Someone to talk to, any time, day or night.',
      phone: { label: '116 123', href: 'tel:116123' },
      link: { label: 'Visit Samaritans', href: 'https://www.samaritans.org/' },
    },
  ],
};
