/**
 * Site configuration: the single source of truth for organisation facts,
 * contact details, feature flags and legal information.
 * Change values here, never inside components.
 */
export const site = {
  name: "Shirley's Wellbeing CIC",
  shortName: "Shirley's",
  descriptor: 'A people-first community organisation',
  // Approved public brand language (decision OD2).
  brandLine: 'People. Retail. Stronger Together.',
  footerDescriptor:
    'A people-first community organisation beginning with people in retail and building carefully through listening, evidence, partnership and responsible growth.',
  coreStatement: 'See the person first.',
  supportingLine: 'Behind every workplace role is a person.',

  contact: {
    phoneDisplay: '07913 204385',
    phoneHref: 'tel:+447913204385',
    email: 'Hello@ShirleyswellbeingCIC.co.uk',
    emailHref: 'mailto:Hello@ShirleyswellbeingCIC.co.uk',
  },

  // Approved location and delivery statements (decision OD8).
  location: {
    line: "Shirley's is beginning locally in Solihull and the West Midlands.",
    deliveryLine:
      "Shirley's operates within the premises of our clients and via coworking spaces and event halls.",
    region: 'Solihull and the West Midlands',
  },

  // Approved boundary wording for Let's Talk (decision OD9). Public numbers only.
  safety: {
    line: "Shirley's is not an emergency service.",
    detail:
      'If someone is in immediate danger, call 999. For urgent support, contact NHS 111 or Samaritans on 116 123.',
  },

  // Social accounts: none supplied yet (decision OD5). Add entries to switch the block on.
  social: [] as { network: 'instagram' | 'linkedin' | 'youtube' | 'facebook'; label: string; href: string }[],

  // Legal identifiers: not yet supplied (decisions OD6, OD7). Leave empty rather than guess.
  legal: {
    companyNumber: '',
    registeredOffice: '',
    placeOfRegistration: '',
  },

  flags: {
    showViewAllProgrammes: false, // switch on when /what-we-do exists
    showSocial: false,            // switch on when social URLs are supplied
    showLegalLinks: false,        // switch on when Privacy, Terms and Accessibility content exists
    showLocationLine: true,       // OD8 approved
    showDeliveryLine: true,       // OD8 approved
    showSafetyLine: true,         // OD9 approved
  },

  copyrightYear: new Date().getFullYear(),
};

export type SocialNetwork = (typeof site.social)[number]['network'];
