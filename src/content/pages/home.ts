/**
 * Home page copy. Visual and copy source: design/v2/home.pdf, with the V2 mandate
 * taking precedence for content, safety and claims.
 */
export const home = {
  meta: {
    title: "Shirley's Wellbeing CIC | Support for retail workers affected by violence and abuse at work",
    description:
      "Shirley's supports people in retail living with the effects of abuse, threats and violence at work. You don't have to tell us what happened. Beginning in Solihull and the West Midlands.",
  },
  hero: {
    eyebrow: 'For people in retail affected by violence and abuse at work',
    title: "It happened at work. It's still with you.",
    lead:
      "Shirley's supports retail workers living with the effects of abuse, threats and violence on the shop floor. You don't have to tell us what happened. You don't have to carry it on your own.",
    primaryCta: { label: 'Talk to us', href: '/lets-talk' },
    secondaryCta: { label: 'See how we help', href: '#how-we-help' },
  },
  problem: {
    heading: 'Abuse is not part of the job.',
    lead:
      'It usually starts with something staff are expected to do: stopping a theft, asking for ID, refusing a sale. Most of it never reaches a police officer, and much of it is never reported at all.',
    // Each figure was checked against its source on 7 October 2026. See docs/CONTENT-DEPENDENCIES.md.
    stats: [
      {
        figure: '1,600',
        text: 'incidents of violence and abuse against UK retail staff every day, more than three times the level before the pandemic.',
        source: 'BRC Crime Report 2026, covering 2024/25',
        href: 'https://brc.org.uk/news-and-events/news/operations/2026/ungated/brc-crime-report-2026/',
      },
      {
        figure: '2 in 5',
        text: 'shopworkers say violence, threats and abuse cause them anxiety at work.',
        source: 'USDAW survey of 7,752 shopworkers, 2022',
        href: 'https://www.usdaw.org.uk/latest-news/nearly-a-third-of-shopworkers-are-thinking-of-quitting-because-of-violence-threats-and-abuse-an-usdaw-survey-finds/',
      },
      {
        figure: '71%',
        text: 'of the retail workers we surveyed were offered no support afterwards.',
        source: "Shirley's survey of 42 retail workers, 2026",
      },
    ],
    // A consented quote from a local retail worker. Renders only when consentConfirmed is true.
    quote: { text: '', attribution: '', consentConfirmed: false },
  },
  howWeHelp: {
    eyebrow: 'How we help',
    heading: 'What happens afterwards matters.',
    lead:
      "We don't investigate incidents or decide who was to blame. We focus on you: how you're feeling, what's changed, and what might help you feel steady again. There's more than one way in.",
    routes: [
      {
        title: 'TALK',
        text: 'Small, informal, light-touch conversations with people who understand retail.',
        strong: 'Nobody is ever asked to describe what happened.',
        link: { label: 'Talk to us', href: '/lets-talk' },
      },
      {
        title: 'CONNECT',
        text: "Meet others who've been through something similar, so you're not the only one in the room who gets it.",
        link: { label: 'Ask about meeting others', href: '/lets-talk#get-in-touch' },
      },
      {
        title: 'BE SUPPORTED',
        text: 'Help finding the right next step when you need more than we can offer, including NHS Talking Therapies, your GP and Retail Trust. These are specialist services, not ones we provide.',
        link: { label: 'See other support', href: '/lets-talk#other-support' },
      },
      {
        title: 'MOVE',
        text: 'Group movement and accessible fitness, at your own pace. Regular activity can support wellbeing and help ease anxiety and low mood.',
        strong: 'For wellbeing, not a replacement for therapy.',
        link: { label: 'Find out more about MOVE', href: '#programme-move' },
      },
    ],
  },
  programmes: {
    heading: 'Programmes',
    items: [
      {
        id: 'programme-beyond-the-tills',
        photo: 'programme-beyond-the-tills' as const,
        status: 'In development',
        title: 'Beyond the Tills',
        text: "A group programme of around six weeks for people who've experienced abuse or violence at work. It's about rebuilding confidence, finding steady ground and knowing where to turn.",
        cta: { label: 'Register your interest', hidden: 'in Beyond the Tills', href: '/lets-talk#get-in-touch' },
      },
      {
        id: 'programme-move',
        photo: 'programme-move' as const,
        status: 'Piloting now',
        title: 'MOVE',
        text: "Weekly movement sessions with music, for every fitness level. A way to feel better in your body and spend time with people who understand the job. It's for wellbeing, not a replacement for therapy.",
        cta: { label: 'Ask about the next session', hidden: 'of MOVE', href: '/lets-talk#get-in-touch' },
      },
    ],
  },
  employers: {
    eyebrow: 'For employers and partners',
    heading: 'Your team carries what happens on the shop floor.',
    lead:
      "Cameras and guards deter incidents. They don't help the person afterwards. We work alongside your existing support, with managers as well as staff, and we measure what changes.",
    body: 'Talk to us about referrals, commissioned programmes, venues or sponsorship.',
    cta: { label: 'Start a conversation', href: '/lets-talk#employers' },
  },
};
