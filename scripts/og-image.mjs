/**
 * Builds public/og-image.png (1200 x 630) from an inline SVG using the brand tokens.
 * Regenerated on every build so it always reflects the current wordmark.
 * When the final logo is supplied, replace the <text> wordmark with the logo paths.
 */
import sharp from 'sharp';
import { mkdirSync } from 'node:fs';

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#f8f7f3"/>
  <rect x="0" y="0" width="1200" height="14" fill="#375865"/>
  <text x="90" y="200" font-family="Georgia, 'Times New Roman', serif" font-weight="700" font-size="112" fill="#163744">See the</text>
  <text x="90" y="330" font-family="'Bradley Hand', 'Segoe Script', cursive" font-style="italic" font-weight="700" font-size="132" fill="#ba5634">person</text>
  <text x="560" y="330" font-family="Georgia, 'Times New Roman', serif" font-weight="700" font-size="112" fill="#163744">first.</text>
  <text x="90" y="420" font-family="Georgia, serif" font-weight="700" font-size="40" fill="#375865">Behind every workplace role is a person.</text>
  <text x="90" y="540" font-family="Helvetica, Arial, sans-serif" font-weight="600" font-size="30" fill="#163744" letter-spacing="6">SHIRLEY'S WELLBEING CIC</text>
  <path d="M1085 470c-18-30-70-18-70 22 0 35 45 62 70 84 25-22 70-49 70-84 0-40-52-52-70-22z" fill="#d9795c"/>
</svg>`;

mkdirSync('public', { recursive: true });
await sharp(Buffer.from(svg)).png().toFile('public/og-image.png');
console.log('Built public/og-image.png');
