/**
 * Primary navigation (V2): four items, "Talk to us" is the prominent CTA.
 * Stories and Get Involved still exist as routes but are not promoted here
 * until genuine content exists.
 */
export type NavItem = { label: string; href: string; isAnchor?: boolean };

export const primaryNav: NavItem[] = [
  { label: 'How we help', href: '/#how-we-help', isAnchor: true },
  { label: 'About', href: '/about' },
  { label: 'For employers', href: '/partners' },
];

export const primaryCta = { label: 'Talk to us', href: '/lets-talk' };

export const legalNav: NavItem[] = [
  { label: 'Privacy', href: '/privacy' },
  { label: 'Safeguarding', href: '/safeguarding' },
  { label: 'Accessibility', href: '/accessibility' },
];
