/**
 * Current sponsors, shown in the logo band on /sponsors.
 * To add one: put the logo in src/assets/sponsors and add an entry here.
 * Logos are light-on-dark artwork, so they sit on black tiles.
 * Source: the sponsor logos used on the People of the Pavements partners page (26 October 2026).
 * `href` is optional: leave it empty if the sponsor has no website (Sutherlands has none).
 * Permission to show both logos granted by their owner, 26 October 2026.
 */
import type { ImageMetadata } from 'astro';
import quietOrbit from '../assets/sponsors/the-quiet-orbit.png';
import sutherlands from '../assets/sponsors/sutherlands-performance-sciences.jpg';

export type Sponsor = { name: string; logo: ImageMetadata; href: string };

export const sponsors: Sponsor[] = [
  { name: 'The Quiet Orbit', logo: quietOrbit, href: 'https://thequietorbit.uk' },
  { name: 'Sutherlands Performance Sciences Ltd', logo: sutherlands, href: '' },
];
