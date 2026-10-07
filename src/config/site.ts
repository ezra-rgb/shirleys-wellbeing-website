/**
 * Site configuration: the single source of truth for organisation facts,
 * contact details, crisis lines and legal identifiers.
 * Change values here, never inside components.
 *
 * Anything still awaiting confirmation is listed in docs/CONTENT-DEPENDENCIES.md.
 * An empty string means "not supplied": the component that uses it renders nothing
 * rather than a guess.
 */
export const site = {
  name: "Shirley's Wellbeing CIC",
  shortName: "Shirley's",
  // The only retained tagline (V2 mandate, section 3).
  tagline: 'See the person first.',
  audience: 'For people in retail affected by violence and abuse at work',
  region: 'Solihull and the West Midlands',
  locationLine: 'Beginning locally in Solihull and the West Midlands.',

  contact: {
    phoneDisplay: '07913 204385',
    phoneHref: 'tel:+447913204385',
    smsHref: 'sms:+447913204385',
    email: 'Hello@ShirleyswellbeingCIC.co.uk',
    emailHref: 'mailto:Hello@ShirleyswellbeingCIC.co.uk',
  },

  // Source: Companies House, company 17308401 (checked 7 October 2026).
  legal: {
    companyNumber: '17308401',
    placeOfRegistration: 'England and Wales',
    registeredOffice: '10 Fowler Road, Sutton Coldfield, England, B75 7LW',
    companiesHouseUrl: 'https://find-and-update.company-information.service.gov.uk/company/17308401',
  },

  // Crisis signposting shown in the top strip and the footer panel on every page.
  crisis: {
    notEmergency: "Shirley's is not an emergency service",
    lines: [
      { label: 'In immediate danger', name: '999', href: 'tel:999' },
      { label: 'Urgent but not an emergency', name: 'NHS 111', href: 'tel:111' },
      { label: 'Someone to talk to, any time', name: 'Samaritans 116 123', href: 'tel:116123' },
      // Source: retailtrust.org.uk, "UK: 0808 801 0808", 24 hours (checked 7 October 2026).
      { label: 'Retail Trust helpline, 24 hours', name: '0808 801 0808', href: 'tel:+448088010808' },
    ],
  },

  copyrightYear: new Date().getFullYear(),
};
