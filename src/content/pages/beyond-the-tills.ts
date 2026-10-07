/**
 * Beyond the Tills page copy.
 * Source: "Beyond the Tills: Programme Design" (Google Doc, 7 October 2026) and the
 * Beyond the Tills build instruction. Public summary only: no curriculum, measures,
 * prices, dates, venues or referral arrangements (those are still open decisions).
 * Every figure was checked against its source on 7 October 2026; see docs/CONTENT-DEPENDENCIES.md.
 */
export const btt = {
  meta: {
    title: "Beyond the Tills | Shirley's Wellbeing CIC",
    description:
      'A 12-week wellbeing and recovery programme supporting retail workers affected by violence or abuse at work. You do not have to tell us what happened.',
  },
  hero: {
    eyebrow: 'Beyond the Tills',
    title: 'Support for what happens after the incident.',
    lead: 'A 12-week wellbeing and recovery programme for retail workers who are still feeling the effects of violence or abuse at work.',
    sub: 'Supporting confidence, coping, connection and the next steps.',
    promise: 'You do not have to tell us what happened.',
    primaryCta: { label: 'Talk to us', href: '/lets-talk#get-in-touch' },
    secondaryCta: { label: 'How the programme works', href: '#what-happens' },
    status: 'In development',
  },
  problem: {
    heading: 'Abuse does not end when the incident does.',
    lead: 'An incident can continue to affect how someone feels, thinks and functions long after the immediate event has ended.',
    intro: 'What happens at work can carry on into:',
    areas: ['Home life', 'Relationships and family', 'Confidence', 'Sleep and mood', 'Returning to work', 'Whether to stay in the job'],
  },
  stats: {
    heading: 'What retail workers tell us',
    groups: [
      {
        label: "Shirley's Wellbeing survey",
        note: '42 retail workers, 2026. A local, self-selected group: it shows the local picture, not all retail workers.',
        items: [
          { figure: '95%', text: 'of respondents had experienced abuse at work.' },
          { figure: '45%', text: 'said abuse had affected their mental health.' },
          { figure: '71%', text: 'said they were offered no support after an incident.' },
        ],
      },
      {
        label: 'Retail Trust',
        // Base checked 7 Oct 2026: 1,240 respondents who had previous contact with Retail Trust,
        // online, 27 Aug to 5 Sep 2024 (headline "1,200"). Press release reproduced by A1 Retail Magazine.
        note: 'Online survey of 1,240 people who had previously been in contact with the charity, 2024. Self-selected, not representative of all retail workers.',
        href: 'https://www.a1retailmagazine.com/company-news/retail-trust-charity-to-run-free-training-to-protect-shop-workers/',
        items: [
          { figure: '48%', text: 'said they did not receive enough employer support to deal with violence, threats and abuse.' },
          { figure: '39%', text: 'were considering leaving their job or the industry altogether because of the rise in violent and abusive incidents.' },
        ],
      },
    ],
  },
  research: {
    heading: 'Why the programme is designed this way',
    paragraphs: [
      'Research into support after workplace incidents suggests that workers generally value support, but it has not yet been established which approach is safe and effective for everyone.',
      'A 2023 systematic review of 80 studies and 11 clinical guidelines found most of the evidence was of poor quality, and did not conclusively show the benefit of any specific post-incident intervention. Generic debriefing was associated with some negative outcomes.',
      'NICE guidance on post-traumatic stress disorder advises against offering psychologically-focused debriefing.',
    ],
    designHeading: 'So Beyond the Tills has:',
    design: ['No forced retelling', 'No requirement to describe the incident', 'No pressure to disclose', 'A focus on wellbeing, recovery, confidence and practical coping'],
    sources: [
      {
        label: 'Billings et al. (2023), Post-incident psychosocial interventions after a traumatic incident in the workplace: a systematic review of current research evidence and clinical guidance. European Journal of Psychotraumatology.',
        href: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC10990448/',
      },
      { label: 'NICE NG116, Post-traumatic stress disorder, recommendation 1.6.5.', href: 'https://www.nice.org.uk/guidance/ng116/chapter/Recommendations' },
    ],
  },
  what: {
    heading: 'What happens over 12 weeks',
    lead: 'One group session a week, plus individual support. You never have to share your incident.',
    cards: [
      { title: 'MOVE', text: 'Weekly non-contact boxercise to support physical wellbeing, confidence and routine. You can step out, slow down or take a seated option at any time.' },
      { title: 'TALK', text: 'Practical workshops and fictional workplace scenarios to build confidence, awareness and communication. Nobody has to take a turn.' },
      { title: 'Your crisis pack', text: 'A personal set of practical tools and strategies, built up over the 12 weeks, to help you recognise what you need and what to do when things feel difficult.' },
      { title: '1:1 support', text: 'Six fortnightly individual coaching sessions alongside the group programme. Coaching, not therapy.' },
    ],
    after: 'When the 12 weeks end, you can carry on with MOVE for continued wellbeing activity and time with people who understand the job.',
    afterLink: { label: 'About MOVE', href: '/programmes#programme-move' },
  },
  who: {
    heading: 'Who is Beyond the Tills for?',
    lead: 'For retail workers who have experienced violence or abuse at work and are still feeling its effects at home, with family or at work.',
    signsIntro: 'You might notice:',
    signs: [
      'feeling anxious about returning to work',
      'disrupted sleep',
      'low mood or irritability',
      'loss of confidence',
      'withdrawing from others',
      'difficulty at work',
      'taking time away from work',
      'thinking about leaving the job',
    ],
    intake:
      "Before the programme starts, there's a short call with a coach to explain what happens and agree your goals, and a check that it's the right support for you right now. If you need urgent or clinical help first, we'll help you get it, and you can join later.",
  },
  strands: {
    heading: 'Two separate groups',
    lead: 'There are two versions of the programme, run as separate groups, so nobody is in the same group as their own line manager.',
    items: [
      { title: 'Staff', text: 'For retail workers dealing with the ongoing effects of workplace violence or abuse.' },
      { title: 'Managers', text: 'For managers and supervisors who may be dealing with their own experiences while also carrying responsibility for supporting their team.' },
    ],
  },
  isNot: {
    heading: 'Support, not treatment.',
    is: {
      label: 'Beyond the Tills is',
      items: [
        'Wellbeing and recovery support',
        'Practical and preventative',
        'Designed around choice and safety',
        'Alongside appropriate clinical or professional support where needed',
      ],
    },
    not: {
      label: 'It is not',
      items: ['Emergency support', 'Trauma treatment', 'An investigation', 'A requirement to relive or describe what happened'],
    },
    signpost: 'If you need more than wellbeing support, NHS Talking Therapies, your GP and Retail Trust can help.',
    signpostLink: { label: 'See other support', href: '/lets-talk#other-support' },
  },
  safety: {
    heading: 'You decide how much you share.',
    items: [
      'You do not have to tell us what happened.',
      'You can choose how much you take part. Every activity is optional.',
      'You can stop at any time.',
      'We explain what happens next.',
      'Confidentiality is explained clearly from the first session.',
      'Safety comes first.',
    ],
    link: { label: 'How confidentiality works', href: '/safeguarding' },
  },
  outcomes: {
    heading: 'What are we trying to support?',
    items: [
      { title: 'Confidence', text: 'Feeling more able to manage situations and speak up.' },
      { title: 'Wellbeing', text: 'Supporting mood, routine, activity and day-to-day wellbeing.' },
      { title: 'Help-seeking', text: 'Knowing when and where to seek further support.' },
      { title: 'Work', text: 'Supporting confidence and practical coping around returning to, remaining in or navigating work.' },
    ],
    note: "We check in on how people are doing at the start, at the end and three months later, so we can learn what helps. We'll share what we find honestly.",
  },
  cta: {
    heading: 'What happened matters. So does what happens next.',
    text: 'If you want to know whether Beyond the Tills could be right for you, your team or your workplace, talk to us.',
    primary: { label: 'Talk to us', href: '/lets-talk#get-in-touch' },
  },
};
