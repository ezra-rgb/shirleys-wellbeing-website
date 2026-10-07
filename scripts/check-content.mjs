/**
 * Source content governance check. Runs before every build and fails it if:
 *  - an em dash (U+2014) appears anywhere the visitor could read it
 *  - a retired tagline, mock-up alt text or filler text appears in source
 *  - a photograph exists in src/assets/photos without alt text in src/config/photos.ts
 */
import { readdirSync, readFileSync, statSync, existsSync } from 'node:fs';
import { join, extname, basename } from 'node:path';

const ROOTS = ['src/content', 'src/config', 'src/pages', 'src/components', 'src/layouts'];
const EXT = new Set(['.md', '.mdx', '.ts', '.astro', '.json']);
const BANNED = [
  /People Change Everything/i,
  /Stronger People,? Brighter Communities/i,
  /People\.? Retail\.? Stronger Together/i,
  /You are more than your job/i,
  /Temporary mock-?up/i,
  /lorem ipsum/i,
];
const problems = [];

function walk(dir) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) walk(full);
    else if (EXT.has(extname(full))) inspect(full);
  }
}

function inspect(file) {
  readFileSync(file, 'utf8').split('\n').forEach((line, i) => {
    if (line.includes('—')) problems.push(`${file}:${i + 1} contains an em dash`);
    for (const re of BANNED) if (re.test(line)) problems.push(`${file}:${i + 1} contains banned text ${re}`);
  });
}

for (const root of ROOTS) if (existsSync(root)) walk(root);

// Every supplied photograph needs real alt text.
const photoDir = 'src/assets/photos';
if (existsSync(photoDir)) {
  const registry = readFileSync('src/config/photos.ts', 'utf8');
  for (const f of readdirSync(photoDir)) {
    if (!/\.(jpe?g|png|webp|avif)$/i.test(f)) continue;
    const slot = basename(f).replace(/\.[^.]+$/, '');
    const block = registry.split(`'${slot}':`)[1]?.split('},')[0] ?? '';
    const alt = block.match(/alt:\s*(['"])(.*?)\1/)?.[2] ?? '';
    if (!block) problems.push(`${photoDir}/${f} has no slot named '${slot}' in src/config/photos.ts`);
    else if (alt.trim().length < 10) problems.push(`${photoDir}/${f} needs meaningful alt text in src/config/photos.ts`);
  }
}

if (problems.length) {
  console.error('Content check failed:\n' + problems.map((p) => '  ' + p).join('\n'));
  process.exit(1);
}
console.log('Content check passed: no em dashes, retired taglines, mock-up text or photos without alt text.');
