/**
 * TEMPORARY VISUAL QA ASSETS.
 *
 * Crops the photograph regions out of the three approved mock-ups (design/mockups/*.png,
 * 1024 x 1536 each) into the image slots so the local site can be compared with the
 * mock-ups. These are generated mock-up images, not Shirley's photography, and nobody in
 * them is a real participant. Replace each file with the final photograph when supplied
 * and clear the `bakedAccent` / `bakedTitle` flags in src/config/images.ts.
 *
 * Usage: node scripts/extract-mockup-images.mjs
 */
import sharp from 'sharp';
import { mkdirSync } from 'node:fs';

const crops = [
  // slot, source mock-up, left, top, width, height (canvas pixels)
  ['home/home-hero', 'home', 510, 76, 514, 371],
  ['home/home-beyond-the-tills', 'home', 34, 958, 227, 120],
  ['home/home-move', 'home', 278, 958, 227, 120],
  ['home/home-appreciation', 'home', 523, 958, 227, 120],
  ['home/home-voice', 'home', 768, 958, 225, 120],
  ['home/home-story', 'home', 800, 1176, 224, 186],
  ['about/about-hero', 'about', 510, 76, 514, 352],
  ['about/about-approach', 'about', 0, 903, 445, 225],
  ['lets-talk/lets-talk-hero', 'lets-talk', 510, 76, 514, 371],
  ['lets-talk/lets-talk-detail', 'lets-talk', 0, 1026, 390, 250],
];

for (const [slot, src, left, top, width, height] of crops) {
  const out = `src/assets/images/${slot}.jpg`;
  mkdirSync(out.substring(0, out.lastIndexOf('/')), { recursive: true });
  await sharp(`design/mockups/${src}.png`)
    .extract({ left, top, width, height })
    .resize({ width: width * 2, kernel: 'lanczos3' }) // gentle upscale so 1440px layouts stay smooth
    .jpeg({ quality: 88 })
    .toFile(out);
  console.log('wrote', out, `${width}x${height}`);
}
