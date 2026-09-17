# Shirley's Wellbeing CIC website

Public website for Shirley's Wellbeing CIC. Static, three-page launch (Home, About, Let's Talk) with minimal placeholder routes for Stories and Get Involved, built to be extended without rebuilding.

Built with [Astro](https://astro.build) (static output), plain CSS design tokens, self-hosted fonts and inline SVG icons. No backend, no forms, no database, no analytics, no cookies.

## Run locally

```bash
npm install
npm run dev        # http://localhost:4321 with live reload
npm run check      # content governance check + type check
npm run build      # production build into dist/ (runs the content check and regenerates the Open Graph image first)
npm run preview    # serve dist/ locally
```

Node 20 or later. Append `?slots=1` to any page URL to label image placeholders with their slot names.

## Deploy

The site is a static folder (`dist/`). Recommended host: Cloudflare Pages or Netlify.

- Build command: `npm run build`
- Output directory: `dist`
- Node version: 20 or later
- Redirects: `public/_redirects` (copied into `dist/`)
- Set `site` in `astro.config.mjs` to the live domain before the first production deploy. It feeds canonical URLs, the sitemap and Open Graph tags.

Pull requests get preview URLs on either host. Production deploys from `main`.

## Where things live

| What | Where |
| --- | --- |
| Organisation facts, contact details, location and safety lines, feature flags, legal fields | `src/config/site.ts` |
| Navigation (launch and future hrefs) | `src/config/navigation.ts` |
| Image slot registry (ratios, alt text, focal points) | `src/config/images.ts` |
| Page copy | `src/content/pages/*.ts` |
| Programmes (one file each, with status) | `src/content/programmes/*.md` |
| Entry routes (MOVE, TALK, CONNECT, BE SUPPORTED) | `src/content/routes/*.md` |
| Audience cards on Let's Talk | `src/content/audiences/*.md` |
| Values | `src/content/values.ts` |
| Design tokens (colours, type, spacing) | `src/styles/tokens.css` |
| Components | `src/components/` |
| Pages (routes) | `src/pages/` |

No sentence the visitor reads lives inside a component. Edit content files, not components.

## Common changes

**Swap in a photograph.** Drop the file at `src/assets/images/<page>/<slot>.jpg` (or `.png`, `.webp`, `.avif`), using the slot name from `src/config/images.ts` (for example `src/assets/images/home/home-hero.jpg`). Write its `alt` text in the registry. Rebuild. The frame keeps its aspect ratio so layout does not move. The optional founder image slot `about-story` appears only once a file exists.

**Add the logo.** Save `src/assets/brand/logo.svg` (dark) and `src/assets/brand/logo-white.svg`. The header and footer switch from the temporary script-font wordmark automatically. Then replace the wordmark in `scripts/og-image.mjs` and `public/favicon.svg` with the real marks.

**Switch on social links.** Add entries to `site.social` in `src/config/site.ts` and set `flags.showSocial` to `true`.

**Add legal pages.** Add markdown to `src/content/legal/` (privacy, terms, accessibility), create the three page files in `src/pages/` from the placeholder page pattern, then set `flags.showLegalLinks` to `true`. Fill `site.legal` with the company number, place of registration and registered office when supplied; the footer prints them automatically.

**Change a programme status.** Edit `status` in the programme's file. Only these values build, mirroring the Business Plan: `pilot-development`, `in-development`, `early-development`, `developing`, `ongoing`, `planned`, `future`, `longer-term`.

**Add a programme page.** Set `hasPage: true` and add a body to the programme's markdown file, then create `src/pages/what-we-do/[slug].astro` reading the collection. The Home card's link switches from `launchCta` to `futureCta` on its own.

**Turn an anchor into a page.** Create the page (for example `src/pages/what-we-do.astro`), change the item's `href` in `src/config/navigation.ts`, and add a line to `public/_redirects`.

**Add a story.** Add markdown to `src/content/stories/`. The schema requires `consentConfirmed: true` and a `consentDate`; the build fails otherwise. Attribution defaults to Anonymous. Participation in Shirley's activity never requires participation in publicity.

**Turn on a testimonial on Home.** `PartnerStatement` has a `testimonial` variant that only renders with `consentConfirmed`. Until a consented quote exists it shows the organisational statement.

## Content rules enforced by the build

- No em dashes anywhere in content, config, pages or components (`scripts/check-content.mjs`).
- Every programme has a valid status.
- Stories cannot build without recorded consent.
- Testimonials cannot render without recorded consent.

## Accessibility

Target WCAG 2.2 AA. Coral text and button fills use the deeper tokens `--coral-700` and `--coral-800` for contrast; the brand coral `--coral` is reserved for icons, hearts, borders and decorative uses. Handwritten accents are `aria-hidden`. Repeated link labels carry visually hidden context. Skip link, visible focus rings, 44px targets, `prefers-reduced-motion` respected.

## Temporary mock-up images (visual QA only)

The files currently in `src/assets/images/` are crops of the three approved mock-ups, generated by `node scripts/extract-mockup-images.mjs` from `design/mockups/`. They exist so the local site can be compared with the mock-ups. They are not Shirley's photography and nobody in them is a participant. Each crop already contains its handwritten accent or programme title, so the matching slot in `src/config/images.ts` carries `bakedAccent: true` or `bakedTitle: true`, which tells the component not to draw that text again.

To replace one with a final photograph: overwrite the file, write the real `alt` text, and remove the `bakedAccent` / `bakedTitle` flag so the accent or title renders from the component again. Nothing else changes.

## Not yet supplied (intentional placeholders)

Final photography for all eleven slots (temporary mock-up crops are in place, see above), the logo, social URLs, privacy/terms/accessibility text, CIC registration number and registered office, and the live domain. See `src/config/site.ts` flags.
