/**
 * Beyond the Tills page copy.
 * Source: "Beyond the Tills page preview" (PDF, October 2026), built on "Beyond the Tills:
 * Programme Design" (Google Doc, 7 October 2026). Confirmed 26 October 2026: the three routes
 * (including one-to-one for owners and managers), confidentiality for staff, self-referrals and
 * employers, and every call to action going to Talk to us.
 * No prices, and no specific venues or times: each group's arrangements are set group by group.
 * Every figure was checked against its source on 7 October 2026; see docs/CONTENT-DEPENDENCIES.md.
 */
const talk = '/lets-talk#get-in-touch';

export const btt = {
  meta: {
    title: "Beyond the Tills | Shirley's Wellbeing CIC",
    description:
      'A 12-week wellbeing and recovery programme for people in retail affected by violence or abuse at work: group support for staff and managers, or one to one for owners. You do not have to tell us what happened.',
  },
  hero: {
    eyebrow: 'Beyond the Tills',
    status: 'Register your interest',
    title: 'Support for what happens after the incident.',
    lead: 'A 12-week wellbeing and recovery programme for people in retail who are still feeling the effects of violence or abuse at work. For shop-floor staff, for managers and supervisors, and for owners and managers who would rather have one-to-one support.',
    sub: 'Building confidence, coping, connection and your next steps.',
    promise: 'You do not have to tell us what happened.',
    primaryCta: { label: 'Register your interest', href: talk },
    secondaryCta: { label: 'How the programme works', href: '#what-happens' },
  },
  problem: {
    heading: 'Abuse does not end when the incident does.',
    lead: 'An incident can continue to affect how someone feels, thinks and functions long after the immediate event has ended.',
    intro: 'What happens at work can carry on into:',
    areas: ['Home life', 'Relationships and family', 'Confidence', 'Sleep and mood', 'Returning to work', 'Whether to stay in the job'],
  },
  stats: {
    heading: 'What retail workers tell us',
    label: "Shirley's Wellbeing survey",
    note: '42 retail workers, 2026. A local, self-selected group: it shows the local picture, not all retail workers.',
    items: [
      { figure: '95%', text: 'of respondents had experienced abuse at work.' },
      { figure: '45%', text: 'said abuse had affected their mental health.' },
      { figure: '71%', text: 'said they were offered no support after an incident.' },
    ],
  },
  who: {
    eyebrow: 'Who is Beyond the Tills for?',
    heading: 'Three ways in.',
    lead: 'For people in retail who have experienced violence or abuse at work, or whose staff have, and who are still feeling the effects at home, with family or at work. Nobody is ever in the same group as their own line manager.',
    routes: [
      {
        tag: 'Group',
        title: 'Staff',
        text: 'For shop-floor and front-line retail workers dealing with the ongoing effects of violence or abuse at work. Weekly group sessions with people who understand the job, plus six one-to-one coaching sessions.',
      },
      {
        tag: 'Group',
        title: 'Managers and supervisors',
        text: 'For managers and supervisors who may be dealing with their own experiences while also supporting their team. A separate group, so you can speak openly, plus six one-to-one coaching sessions.',
      },
      {
        tag: 'One to one · New',
        title: 'Owners and managers',
        text: 'For owners and managers of retail units and outlets whose staff have experienced violence or abuse, and who would rather have personal support than join a group. The same 12 weeks, one to one, at times that fit around running a business.',
        link: { label: 'About one-to-one support', href: '#one-to-one' },
      },
    ],
    signsIntro: 'You might notice',
    signs: [
      'feeling anxious about going to work',
      'disrupted sleep',
      'low mood or irritability',
      'loss of confidence',
      'withdrawing from others',
      'difficulty at work, or taking time away',
      'thinking about leaving the job',
      'worrying about your team and not knowing how to help',
    ],
    intakeHeading: 'Before you start',
    intake:
      "A short call with a coach to explain what happens, agree your goals and check this is the right support for you right now. If you need urgent or clinical help first, we'll help you get it, and you can join later.",
  },
  oneToOne: {
    eyebrow: 'One-to-one support for owners and managers',
    heading: "When it's your shop, it's your worry too.",
    lead: 'If you own or run a shop and someone on your team has been attacked, threatened or abused, you can be left carrying it: for them, for the business and for yourself. Not everyone wants to talk about that in a group. Beyond the Tills one-to-one gives you the same 12 weeks of support, personally, with a coach who understands retail.',
    coversHeading: 'What it covers',
    covers: [
      { title: 'Looking after yourself', text: 'How what happened is affecting you, and practical ways to cope.' },
      { title: 'Supporting your staff afterwards', text: 'Practical help first, checking in over the following weeks, and knowing where to point someone for more help.' },
      { title: 'When staff speak up', text: 'Listening, responding and following through.' },
      { title: 'Your shop', text: 'The flashpoints in your setting, such as theft, age checks, drunk customers and queues, and what you can change.' },
      { title: 'Reporting', text: 'Recording incidents and reporting to the police.' },
      { title: 'Your crisis pack', text: 'A personal toolkit, plus a one-page guide for the first days after an incident in your shop.' },
    ],
    howHeading: 'How it works',
    how: [
      'Regular one-to-one sessions over 12 weeks, at times that fit around opening hours.',
      'In person, by phone or by video.',
      "You can join a MOVE session if you'd like to, but you don't have to.",
      'You never have to describe what happened.',
    ],
    cta: { label: 'Ask about one-to-one support', href: talk },
  },
  what: {
    heading: 'What happens over 12 weeks.',
    lead: "One group session a week, plus one-to-one coaching. Or, if you're an owner or manager who prefers it, all one to one. You never have to share your incident.",
    cards: [
      { title: 'MOVE', text: 'Weekly non-contact boxercise to support physical wellbeing, confidence and routine. You can step out, slow down or take a seated option at any time.' },
      { title: 'TALK', text: 'Practical workshops and fictional workplace scenarios to build confidence, awareness and communication. Nobody has to take a turn.' },
      { title: 'Your crisis pack', text: 'A personal set of practical tools and strategies, built up over the 12 weeks, to help you recognise what you need and what to do when things feel difficult.' },
      { title: '1:1 support', text: 'Six fortnightly individual coaching sessions alongside the group programme. Coaching, not therapy.' },
    ],
    phasesHeading: 'How the 12 weeks build',
    phases: [
      { weeks: 'Weeks 1–3', title: 'Settling in', text: 'Getting to know the group, understanding how stress shows up, and simple ways to cope.' },
      { weeks: 'Weeks 4–6', title: 'Understanding work', text: 'Common flashpoints, your rights at work, and how to report.' },
      { weeks: 'Weeks 7–9', title: 'Confidence and voice', text: 'Practising calm responses and speaking up, using made-up scenarios.' },
      { weeks: 'Weeks 10–12', title: 'Looking ahead', text: 'Home and family, warning signs, finishing your crisis pack, and what comes next.' },
    ],
    after: "When the 12 weeks end, you can carry on with MOVE for continued wellbeing activity and time with people who understand the job. We'll check in again three months after you finish.",
    afterLink: { label: 'About MOVE', href: '/programmes#programme-move' },
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
  isNot: {
    heading: 'Support, not treatment.',
    columns: [
      {
        label: 'Beyond the Tills is',
        items: [
          'Wellbeing and recovery support',
          'Practical and preventative',
          'Designed around choice and safety',
          'Alongside appropriate clinical or professional support where needed',
        ],
      },
      {
        label: 'It is not',
        items: ['Emergency support', 'Trauma treatment', 'An investigation', 'A requirement to relive or describe what happened'],
      },
      {
        label: 'You decide how much you share',
        items: [
          'You do not have to tell us what happened.',
          'Every activity is optional.',
          'You can stop at any time.',
          'We explain what happens next.',
          'Confidentiality is explained from the first session.',
        ],
      },
    ],
    signpost: 'If you need more than wellbeing support, NHS Talking Therapies, your GP and Retail Trust can help.',
    links: [
      { label: 'See other support', href: '/lets-talk#other-support' },
      { label: 'How confidentiality works', href: '/safeguarding' },
    ],
  },
  outcomes: {
    heading: 'What are we trying to support?',
    items: [
      { title: 'Confidence', text: 'Feeling more able to manage situations and speak up.' },
      { title: 'Wellbeing', text: 'Supporting mood, routine, activity and day-to-day wellbeing.' },
      { title: 'Help-seeking', text: 'Knowing when and where to seek further support.' },
      { title: 'Work', text: 'Confidence and practical coping around returning to, remaining in or navigating work.' },
    ],
    note: "We check in on how people are doing at the start, at the end and three months later, so we can learn what helps. We'll share what we find honestly.",
  },
  employers: {
    eyebrow: 'For employers',
    heading: 'If someone on your team has been affected.',
    lead: 'You can point a member of staff towards Beyond the Tills, or talk to us about places for your team. Taking part is always their choice.',
    cards: [
      { title: 'Referring someone', text: 'Share this page, or with their agreement, ask us to get in touch with them.' },
      {
        title: "What you'll hear from us",
        text: "We won't share what someone tells us, or whether they're taking part, unless they agree. What you tell us about your business stays confidential too. The rare exceptions are on our",
        link: { label: 'safeguarding page', href: '/safeguarding' },
      },
      { title: 'Support for you too', text: "If you're the owner or manager carrying this, the one-to-one route is there for you." },
      { title: 'Working with us', text: 'Funded places, commissioned cohorts for your stores, venues or sponsorship.' },
    ],
    primaryCta: { label: 'Refer someone', href: talk },
    secondaryCta: { label: 'Partner with us', href: '/partners' },
  },
  faq: {
    heading: 'Questions people ask',
    items: [
      { q: 'Do I have to talk about what happened?', a: 'No. You never have to describe your incident, in the group or one to one. Saying nothing about it is completely fine.' },
      { q: 'What if it happened a while ago?', a: "That's fine. If it's still affecting you, Beyond the Tills may help." },
      { q: 'Does it have to be physical violence?', a: "No. Threats and abuse can have just as lasting an effect, and you're welcome to get in touch." },
      { q: "I'm not very fit. Can I still do the boxercise?", a: "Yes. It's non-contact and at your own pace, with no sparring. You can slow down, step out or take a seated option at any time." },
      { q: "Will my employer find out I'm taking part?", a: 'Not from us, unless you agree. That applies whether you got in touch yourself or your employer pointed you towards us. Confidentiality is explained clearly from the first session.' },
      { q: 'I run a shop. Do I have to join a group?', a: 'No. Owners and managers can choose one-to-one support instead.' },
      { q: 'Is this therapy?', a: "No. It's wellbeing and recovery support. If you need more, such as NHS Talking Therapies or your GP, we'll help you find it." },
      { q: 'Where and when does it run?', a: "Each group's venue, day and time are arranged group by group, and we'll tell you before you start. We're beginning in Solihull and the West Midlands. One-to-one sessions can also be by phone or video." },
      { q: 'What happens after the 12 weeks?', a: "You can carry on with MOVE, and we'll check in with you three months later." },
    ],
  },
  cta: {
    heading: 'What happened matters. So does what happens next.',
    text: "Whether it's you, your team or your shop, talk to us about whether Beyond the Tills is right for you. Call, text or email. You don't need to explain why you're getting in touch.",
    primary: { label: 'Register your interest', href: talk },
    secondary: { label: 'Ask about one-to-one support', href: talk },
  },
};
