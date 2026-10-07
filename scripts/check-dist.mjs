/**
 * Post-build verification of dist/. Runs after every build and fails it if any page has:
 *  - a canonical or og:url that is not the clean served URL (no .html), or missing metadata
 *  - an internal link or #anchor that does not resolve
 *  - an image without meaningful alt text
 *  - placeholder, filler or retired-tagline text
 *  - a missing crisis strip, footer crisis panel or footer policy link
 *  - a phone/email link other than the approved ones, or insecure (http://) content
 *  - more or fewer than one h1, or a skipped heading level
 * It also checks the sitemap and robots.txt.
 */
import { readdirSync, readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const SITE = 'https://www.shirleyswellbeingcic.co.uk';
const DIST = 'dist';
const ALLOWED_TEL = new Set(['tel:+447913204385', 'sms:+447913204385', 'tel:999', 'tel:111', 'tel:116123', 'tel:+448088010808']);
const ALLOWED_MAIL = new Set(['mailto:Hello@ShirleyswellbeingCIC.co.uk']);
const BANNED = [
  /People Change Everything/i, /Stronger People,? Brighter Communities/i, /People\.? Retail\.? Stronger Together/i,
  /You are more than your job/i, /mock-?up/i, /lorem ipsum/i, /\bTODO\b/, /PLACEHOLDER/i, /\[(?:NUMBER|Registered|Photo|confirm|number|Role|A short)[^\]]*\]/,
  /move, talk, connect/i,
];
const problems = [];
const fail = (page, msg) => problems.push(`${page}: ${msg}`);

const pages = readdirSync(DIST).filter((f) => f.endsWith('.html'));
const html = Object.fromEntries(pages.map((p) => [p, readFileSync(join(DIST, p), 'utf8')]));
const attr = (tag, name) => tag.match(new RegExp(`\\s${name}=(?:"([^"]*)"|'([^']*)'|([^\\s>]+))`, 'i'))?.slice(1).find((v) => v !== undefined);
const tags = (src, name) => [...src.matchAll(new RegExp(`<${name}\\b[^>]*>`, 'gi'))].map((m) => m[0]);
const ids = (src) => new Set(tags(src, '[a-z0-9]+').map((t) => attr(t, 'id')).filter(Boolean));
const visibleText = (src) => src.replace(/<script[\s\S]*?<\/script>/gi, '').replace(/<style[\s\S]*?<\/style>/gi, '').replace(/<[^>]+>/g, ' ');
const decode = (s) => s.replace(/&#39;/g, "'").replace(/&amp;/g, '&').replace(/&quot;/g, '"');

function resolvePage(pathname) {
  const clean = pathname.replace(/\/$/, '') || '/';
  if (clean === '/') return 'index.html';
  const name = clean.slice(1);
  if (html[`${name}.html`]) return `${name}.html`;
  if (existsSync(join(DIST, name))) return name; // static asset
  return null;
}

for (const page of pages) {
  const src = html[page];
  const isNoindex = /<meta name="robots" content="noindex/.test(src);
  const cleanPath = page === 'index.html' ? '/' : `/${page.replace(/\.html$/, '')}`;

  // Metadata
  const canonical = attr(tags(src, 'link').find((t) => /rel="canonical"/.test(t)) ?? '', 'href');
  const ogUrl = attr(tags(src, 'meta').find((t) => /property="og:url"/.test(t)) ?? '', 'content');
  if (!isNoindex) {
    const expected = SITE + cleanPath;
    if (canonical !== expected) fail(page, `canonical is ${canonical}, expected ${expected}`);
    if (ogUrl !== expected) fail(page, `og:url is ${ogUrl}, expected ${expected}`);
  }
  if (canonical?.includes('.html') || ogUrl?.includes('.html')) fail(page, 'canonical/og:url contains .html');
  for (const prop of ['og:title', 'og:description', 'og:image']) {
    if (!tags(src, 'meta').some((t) => t.includes(`property="${prop}"`) && attr(t, 'content'))) fail(page, `missing ${prop}`);
  }
  if (!/<title>[^<]{10,}<\/title>/.test(src)) fail(page, 'missing or short <title>');
  if (!tags(src, 'meta').some((t) => /name="description"/.test(t) && (attr(t, 'content') ?? '').length > 50)) fail(page, 'missing meta description');
  if (!/<meta name="theme-color" content="#121417"/.test(src)) fail(page, 'theme-color is not #121417');
  if (!/<html lang="en-GB"/.test(src)) fail(page, 'missing lang="en-GB"');

  // Links
  for (const a of tags(src, 'a')) {
    const href = decode(attr(a, 'href') ?? '');
    if (!href) { fail(page, `link without href: ${a}`); continue; }
    if (href.startsWith('tel:') || href.startsWith('sms:')) { if (!ALLOWED_TEL.has(href)) fail(page, `unexpected phone link ${href}`); continue; }
    if (href.startsWith('mailto:')) { if (!ALLOWED_MAIL.has(href)) fail(page, `unexpected email link ${href}`); continue; }
    if (href.startsWith('http://')) { fail(page, `insecure link ${href}`); continue; }
    if (/^https?:/.test(href)) continue;
    const [path, hash] = href.split('#');
    const target = path ? resolvePage(path) : page;
    if (!target) { fail(page, `broken internal link ${href}`); continue; }
    if (path && path.endsWith('.html')) fail(page, `internal link uses .html: ${href}`);
    if (hash && target.endsWith('.html') && !ids(html[target]).has(hash)) fail(page, `missing anchor ${href}`);
  }

  // Mixed content
  for (const m of src.matchAll(/\s(?:src|srcset|href)="(http:\/\/[^"]+)"/g)) fail(page, `insecure resource ${m[1]}`);

  // Images
  for (const img of tags(src, 'img')) {
    const alt = attr(img, 'alt');
    if (alt === undefined) fail(page, `img without alt: ${img.slice(0, 80)}`);
    else if (alt.trim().length < 10) fail(page, `img alt too short to be meaningful: "${alt}"`);
  }

  // Text
  const text = decode(visibleText(src));
  for (const re of BANNED) if (re.test(text) || re.test(src.match(/<head>[\s\S]*<\/head>/)?.[0] ?? '')) fail(page, `contains banned text ${re}`);
  const taglineCount = (text.match(/See the person first\./g) ?? []).length;
  if (taglineCount < 1) fail(page, 'missing the tagline');

  // Safety and footer
  if (!/aria-label="Urgent help"/.test(src)) fail(page, 'missing crisis strip');
  const footer = src.match(/<footer[\s\S]*<\/footer>/)?.[0] ?? '';
  if (!footer) fail(page, 'missing footer');
  for (const needle of ['tel:999', 'tel:111', 'tel:116123', 'tel:+448088010808', "not an emergency service", 'href="/privacy"', 'href="/safeguarding"', 'href="/accessibility"', '17308401', 'B75 7LW']) {
    if (!decode(footer).includes(needle)) fail(page, `footer missing ${needle}`);
  }

  // Headings
  const levels = [...src.matchAll(/<h([1-6])\b/g)].map((m) => Number(m[1]));
  if (levels.filter((l) => l === 1).length !== 1) fail(page, `expected exactly one h1, found ${levels.filter((l) => l === 1).length}`);
  levels.forEach((l, i) => { if (i > 0 && l > levels[i - 1] + 1) fail(page, `heading level skips from h${levels[i - 1]} to h${l}`); });
}

// Sitemap and robots
const sitemap = existsSync(join(DIST, 'sitemap-0.xml')) ? readFileSync(join(DIST, 'sitemap-0.xml'), 'utf8') : '';
if (!sitemap) problems.push('sitemap-0.xml missing');
for (const [, loc] of sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)) {
  if (!loc.startsWith(SITE)) problems.push(`sitemap: ${loc} is not on ${SITE}`);
  if (loc.includes('.html')) problems.push(`sitemap: ${loc} contains .html`);
  if (!resolvePage(new URL(loc).pathname)) problems.push(`sitemap: ${loc} has no page`);
}
for (const req of ['/', '/about', '/lets-talk', '/privacy', '/safeguarding', '/accessibility']) {
  if (!sitemap.includes(`<loc>${SITE}${req === '/' ? '/' : req}</loc>`)) problems.push(`sitemap missing ${req}`);
}
const robots = readFileSync(join(DIST, 'robots.txt'), 'utf8');
if (!robots.includes(`Sitemap: ${SITE}/sitemap-index.xml`)) problems.push('robots.txt sitemap line is wrong');
if (!html['404.html']) problems.push('404.html missing');

if (problems.length) {
  console.error(`Dist check failed (${problems.length}):\n` + problems.map((p) => '  ' + p).join('\n'));
  process.exit(1);
}
console.log(`Dist check passed: ${pages.length} pages, metadata, links, anchors, alt text, safety and footer all OK.`);
