# Content dependencies (V2)

Items the V2 build could not complete without inventing content. Each is marked in the
code where it applies. Nothing below has been guessed or published as fact.

Last reviewed: 7 October 2026.

## 1. Legal (Privacy)
`src/pages/privacy.astro`: sections in italics are marked "being finalised".
- Lawful basis for handling phone, text, email and survey information.
- Retention periods for each.
- Who information may be shared with, and the services used to store it (for example the phone provider and the survey platform).
- Full statement of data-protection rights and how to use them.
- ICO registration / data protection fee status, if it is to be stated.
- Approval of the whole notice by whoever signs off legal content.

## 2. Safeguarding / confidentiality
`src/pages/safeguarding.astro` and `src/content/pages/shared.ts` (Confidentiality item).
- Full list of circumstances in which information may need to be shared. Only "serious risk of harm" was supplied.
- Who sees what someone shares, how it is recorded and kept secure.
- Position on sharing with employers (the design draft says "We won't share what you tell us with your employer"; not published until confirmed, including the case where an employer referred the person).
- Safeguarding policy and the named safeguarding contact/lead.
- How a person is involved if information has to be shared.

## 3. Company information
- Company number 17308401 and registered office (10 Fowler Road, Sutton Coldfield, England, B75 7LW) were taken from Companies House on 7 October 2026. Confirm this is the address you want published (it is a public record and legally required on the website). If the registered office changes, edit `src/config/site.ts`.
- Final logo files (the header, favicon and OG image use a text wordmark).

## 4. Contact / support information
- Retail Trust helpline 0808 801 0808 (24 hours) was verified on retailtrust.org.uk on 7 October 2026. Recheck periodically.
- Confirm 07913 204385 accepts text messages (the site offers "Call, text or email" as in the design).
- Confirm MOVE is "Piloting now" with "weekly" sessions, and that CONNECT is something people can join now (copy is from the V2 design).

## 5. Photography / assets
Slots in `src/config/photos.ts`. Each renders nothing until a file exists; add the file plus alt text.
- `home-evidence`: a real shop floor or till after closing, photographed locally with consent.
- `programme-beyond-the-tills`: a real Beyond the Tills group session.
- `programme-move`: a real MOVE session, people moving, not posing.
- `about-founder`: a real portrait of Denise Sutherland, natural light.

## 6. Testimonials / quotes
- A short, real quote from a local retail worker, with written consent, role and store type (no name unless they choose). Set `home.problem.quote` in `src/content/pages/home.ts` with `consentConfirmed: true`.

## 7. Statistics / source verification
Checked 7 October 2026.
- **1,600 a day (BRC):** confirmed, but the source is the *BRC Crime Report 2026* (covering 1 Sep 2024 to 31 Aug 2025), not "BRC Crime Survey 2024/25". The pre-pandemic level was 455 a day, so the design's "close to four times" was corrected to "more than three times".
- **2 in 5 (USDAW / Retail Trust):** the combined claim mixed different surveys and measures. Published wording now uses one primary-source finding: USDAW 2022 survey of 7,752 shopworkers, 40.88% said violence, threats and abuse caused them anxiety at work. Alternative: Retail Trust 2024, 39% considering leaving (confirmed via trade press and a Retail Trust summary page).
- **71% (Shirley's survey):** confirmed from the survey report: Q15 "What support was offered to you?", "No support" 71.43% of 42 valid responses. The survey's consent screen describes it as research for a Level 5 Diploma in Psychotherapeutic Counselling with anonymous, confidential responses. Confirm it can be published as "Shirley's survey" and that consent covers publishing aggregate figures. The design caption said "local"; that was not verifiable from the report and was dropped.

## 8. Old domain
- `shirleyswellbeing.co.uk` is **not registered** (Nominet WHOIS, 7 October 2026), so no 301 can be set up. To redirect it: register it, add it to the Render service as a custom domain with a redirect to `https://www.shirleyswellbeingcic.co.uk`, or use the registrar's 301 forwarding. Neither touches the live domain's DNS or email.

## 9. Beyond the Tills page (added 7 October 2026)
Source: "Beyond the Tills: Programme Design" (Google Doc, 7 October 2026). The page states no price, dates, venue, eligibility rules or referral routes, because the doc lists these as open decisions.
- Programme length: the doc says **12 weeks**; the earlier V2 design PDF said "around six weeks". The site now says 12 weeks everywhere. Confirm.
- Status shown as "In development" (the doc describes a pilot still to run). Confirm, and when cohorts are open, add dates and how to join.
- Open decisions to resolve before the page can say more: eligibility (violence only, or verbal abuse and threats too; how recent), funding model (free, employer-funded or grant-funded), whether employers are told who takes part, session day/time/venue.
- Referral routes in the doc (employers, USDAW reps, Retail Trust, GPs, NHS Talking Therapies) are not published until those arrangements exist.
- Survey figures used: 95% experienced abuse (Q6, 40 of 42), 45% said it affected mental health (Q11, 19 of 42 including "if yes, describe"), 71% no support (Q15). Labelled as a local, self-selected sample.
- Retail Trust 2024: 48% and 39% confirmed via trade press reproducing the press release (A1 Retail Magazine, The Grocer, Grocery Gazette). The base is 1,240 people with previous Retail Trust contact (headline "1,200"), self-selected. The charity's own article page could not be read (JavaScript-only); recheck if a readable version appears.
- Research: Billings et al. (2023), European Journal of Psychotraumatology (verified, PMC10990448), and NICE NG116 recommendation 1.6.5 (verified). The design doc's "abuse roughly quadrupled since 2019" was not used: BRC figures give about 3.5 times.
- Photo slot `programme-beyond-the-tills` appears on this page too once a real photo is supplied.
- The page uses "MOVE" and "TALK" as card names for the boxercise and workshop parts, as the build instruction specified. Check this does not confuse them with the separate MOVE programme.
