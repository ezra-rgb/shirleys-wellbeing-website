/**
 * Renders public/og-image.png (1200 x 630) from scripts/og-image.html with headless Chrome,
 * so the image uses the real Archivo and Public Sans fonts.
 * Run locally after changing the source (`npm run og`) and commit the PNG.
 * It is deliberately not part of the build: the host has no Chrome.
 */
import { execFileSync } from 'node:child_process';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

const chrome = process.env.CHROME_PATH || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const src = pathToFileURL(resolve('scripts/og-image.html')).href;
const out = resolve('public/og-image.png');
execFileSync(chrome, ['--headless', '--disable-gpu', '--hide-scrollbars', '--force-device-scale-factor=1',
  '--window-size=1200,630', '--virtual-time-budget=3000', `--screenshot=${out}`, src], { stdio: 'inherit' });
console.log('Built public/og-image.png');
