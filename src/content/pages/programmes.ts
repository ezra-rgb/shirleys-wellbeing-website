/**
 * Programmes page copy. Programme text is from the V2 design (home.pdf); statuses
 * ("In development", "Piloting now") are awaiting confirmation, see docs/CONTENT-DEPENDENCIES.md.
 */
export const programmes = {
  meta: {
    title: "Programmes | Shirley's Wellbeing CIC",
    description:
      "Beyond the Tills and MOVE: group programmes for people in retail affected by violence and abuse at work. Nobody is ever asked to describe what happened.",
  },
  hero: {
    eyebrow: 'Programmes',
    title: 'Our programmes',
    lead:
      'Group programmes for people in retail affected by violence and abuse at work. You decide how much to share, and nobody is ever asked to describe what happened.',
  },
  items: [
    {
      id: 'programme-beyond-the-tills',
      photo: 'programme-beyond-the-tills' as const,
      status: 'In development',
      title: 'Beyond the Tills',
      text: "A 12-week wellbeing and recovery programme for retail workers who are still feeling the effects of violence or abuse at work. Weekly group sessions, practical workshops and six 1:1 coaching sessions, with separate groups for staff and managers. You do not have to tell us what happened.",
      cta: { label: 'Find out about Beyond the Tills', hidden: '', href: '/beyond-the-tills' },
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
  closing: {
    heading: 'Need more than a programme can offer?',
    text: 'We can help you find specialist support, including NHS Talking Therapies, your GP and Retail Trust.',
    cta: { label: 'See other support', href: '/lets-talk#other-support' },
  },
};
