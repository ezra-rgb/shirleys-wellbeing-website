# Shirley's Wellbeing CIC website (V2)

Public website for Shirley's Wellbeing CIC: for people in retail affected by violence and abuse at work.

V2 follows the "dark into light" design in `design/v2/home.pdf` and `design/v2/about.pdf`. V1 is preserved in Git history (commit `2735bac` and earlier).

Built with [Astro](https://astro.build) (static output), plain CSS tokens and self-hosted fonts (Archivo 800, Public Sans). No backend, no forms, no database, no analytics, no cookies, no third-party scripts.

## Run locally

```bash
npm install
npm run dev        # http://localhost:4321
npm run check      # content check + type check
npm run build      # content check, astro build, then verification of dist/
npm run preview    # serve dist/
npm run og         # re-render public/og-image.png with local Chrome (commit the result)
```

Node 20 or later.

## Deploy

Render Static Site, auto-deploys from `main` on GitHub. Build command `npm run build`, publish directory `dist`. www is canonical; Render 301s the apex to it. DNS and email are managed elsewhere and are not part of this repo.

Pages are emitted as `about.html` etc. and served at `/about`. `SeoHead.astro` strips the extension so canonicals, `og:url` and the sitemap all use the clean served URL.

## Routes

| Route | In primary nav | Indexed |
| --- | --- | --- |
| `/` | (logo) | yes |
| `/about` | About | yes |
| `/programmes` | (Home "Our programmes" button) | yes |
| `/partners` | For employers | yes |
| `/lets-talk` | Talk to us (CTA) | yes |
| `/privacy`, `/safeguarding`, `/accessibility` | footer | yes |
| `/stories`, `/get-involved` | no, until genuine content exists | noindex |
| `/404` | | noindex |

"How we help" is an anchor on Home (`/#how-we-help`). Programme detail lives only on `/programmes`.

## Where things live

| What | Where |
| --- | --- |
| Organisation facts, contact, crisis lines, company details | `src/config/site.ts` |
| Navigation | `src/config/navigation.ts` |
| Photo slots (brief, alt text, ratio) | `src/config/photos.ts` |
| Page copy | `src/content/pages/*.ts` |
| Policy page copy | `src/pages/privacy.astro`, `safeguarding.astro`, `accessibility.astro` |
| Design tokens | `src/styles/tokens.css` |
| Global styles and tones | `src/styles/base.css` |
| Outstanding content | `docs/CONTENT-DEPENDENCIES.md` |

## Common changes

**Add a photograph.** Save it as `src/assets/photos/<slot>.jpg` using a slot name from `src/config/photos.ts`, and write its `alt` there describing what it actually shows. Until a file exists the slot renders nothing. The build fails if a photo has no alt text. Documentary photography only; no stock images.

**Add the consented quote on Home.** Fill `home.problem.quote` in `src/content/pages/home.ts` and set `consentConfirmed: true`.

**Add a story.** Add markdown to `src/content/stories/`. The schema requires `consentConfirmed: true` and a `consentDate`.

## Build guards

`scripts/check-content.mjs` (before build) fails on em dashes, retired taglines, mock-up alt text, filler text, or photos without alt text.

`scripts/check-dist.mjs` (after build) fails if any page has a wrong canonical or `og:url`, missing metadata, a broken internal link or anchor, an image without meaningful alt text, placeholder text, a missing crisis strip or footer crisis panel, a missing footer policy link or company details, an unexpected phone/email link, insecure content, or a broken heading order. It also checks the sitemap and robots.txt.

## Tone and claims

"See the person first." is the only tagline. Nobody is ever asked to describe what happened. Shirley's is not an emergency service, therapy, trauma treatment or an investigator, and the site must not imply otherwise. Don't publish statistics, testimonials, partnerships or outcomes that haven't been verified.
