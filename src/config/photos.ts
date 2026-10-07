/**
 * Photo slot registry.
 *
 * Documentary photography only: real local stores, real sessions, real people
 * photographed with consent. No stock imagery, and nothing that presents a person
 * as an identifiable victim.
 *
 * To supply a photograph, save it as `src/assets/photos/<slot>.jpg` (or .png,
 * .webp, .avif) and write its `alt` below, describing what the photograph
 * actually shows. Until a file exists the slot renders nothing and the layout
 * closes up around it. The build fails if a photo exists without alt text.
 */
export type PhotoSlot = {
  /** What the final photograph should show (brief for the photographer, never rendered). */
  brief: string;
  /** Alt text describing the supplied photograph. Write it when the file is added. */
  alt: string;
  ratio: string;
  focal?: string;
  sizes: string;
};

export type PhotoSlotName = 'home-evidence' | 'programme-beyond-the-tills' | 'programme-move' | 'about-founder';

export const photoSlots: Record<PhotoSlotName, PhotoSlot> = {
  'home-evidence': {
    brief: 'A real shop floor or till after closing, quiet, no posed smiles. Photographed locally with consent.',
    alt: '',
    ratio: '4 / 3',
    sizes: '(max-width: 900px) 100vw, 600px',
  },
  'programme-beyond-the-tills': {
    brief: 'A real Beyond the Tills group session.',
    alt: '',
    ratio: '2 / 1',
    sizes: '(max-width: 900px) 100vw, 600px',
  },
  'programme-move': {
    brief: 'A real MOVE session: people moving, not posing.',
    alt: '',
    ratio: '2 / 1',
    sizes: '(max-width: 900px) 100vw, 600px',
  },
  'about-founder': {
    brief: 'Denise Sutherland, founder: a real portrait in natural light.',
    alt: '',
    ratio: '1 / 1',
    focal: '50% 30%',
    sizes: '(max-width: 900px) 100vw, 450px',
  },
};
