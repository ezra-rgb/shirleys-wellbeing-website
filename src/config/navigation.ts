/**
 * Navigation items feed the header, mobile menu and footer.
 * `href` is the launch destination; `futureHref` is what it becomes when the
 * named page exists. Switch by editing here and adding a redirect in public/_redirects.
 */
export type NavItem = {
  label: string;
  href: string;
  futureHref?: string;
  /** Anchor links never show an active state. */
  isAnchor?: boolean;
};

export const primaryNav: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'What We Do', href: '/#what-we-do', futureHref: '/what-we-do', isAnchor: true },
  { label: 'For Retailers', href: '/#for-retailers', futureHref: '/for-retailers', isAnchor: true },
  { label: 'Stories', href: '/stories' },
  { label: 'Get Involved', href: '/get-involved' },
  { label: 'Contact', href: '/lets-talk' },
];

export const primaryCta = { label: "Let's Talk", href: '/lets-talk' };

/** Legal links are rendered only when site.flags.showLegalLinks is true. */
export const legalNav: NavItem[] = [
  { label: 'Privacy', href: '/privacy' },
  { label: 'Terms', href: '/terms' },
  { label: 'Accessibility', href: '/accessibility' },
];
