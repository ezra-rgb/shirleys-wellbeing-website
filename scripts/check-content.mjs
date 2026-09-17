/**
 * Content governance check. Fails the build if:
 *  - an em dash (U+2014) appears anywhere the visitor could read it
 *  - a programme file is missing a status
 * Run automatically before `astro build`.
 */
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, extname } from 'node:path';

const ROOTS = ['src/content', 'src/config', 'src/pages', 'src/components', 'src/layouts'];
const EXT = new Set(['.md', '.mdx', '.ts', '.astro', '.json']);
const problems = [];

function walk(dir) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const st = statSync(full);
    if (st.isDirectory()) walk(full);
    else if (EXT.has(extname(full))) inspect(full);
  }
}

function inspect(file) {
  const text = readFileSync(file, 'utf8');
  const lines = text.split('\n');
  lines.forEach((line, i) => {
    if (line.includes('—')) problems.push(`${file}:${i + 1} contains an em dash`);
  });
  if (file.includes('src/content/programmes') && !/^status:\s*\S+/m.test(text)) {
    problems.push(`${file} has no status`);
  }
}

for (const root of ROOTS) {
  try { walk(root); } catch { /* folder may not exist yet */ }
}

if (problems.length) {
  console.error('Content check failed:\n' + problems.map((p) => '  ' + p).join('\n'));
  process.exit(1);
}
console.log('Content check passed: no em dashes, all programmes have a status.');
