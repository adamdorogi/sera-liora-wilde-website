# Sera Liora Wilde — The Wellness Collective

A complete Next.js 16 redesign of the public business website, with the user-approved **Sunroom / layout A** design.

## Run locally

```sh
npm install
npm run dev -- --port 3168
```

Production checks:

```sh
npm run lint
npm run typecheck
npm run build
npm start -- --port 3168
```

## Pages

The original homepage, all 17 original profile URL paths and `/s/gift-cards` are retained. New pages organise the information into `/practitioners`, `/offerings`, `/about`, `/our-vision`, `/contact`, `/book`, and `/privacy`. `/home`, `/gift-cards`, and `/s/appointments` redirect to their corresponding destinations.

The directory searches names, offerings and locations, with URL-based category filters. Individual profiles preserve detailed public biographies, qualifications, offerings, prices, locations, training, links and booking terms in readable, expandable sections. Photos come from the original business website. The concept’s illustrative faces were replaced with the original business photographs, as approved during composition selection.

## Business connections

- Sera’s bookings: existing Square calendar and individual service links.
- Independent members: their original external websites, phone numbers and booking services.
- Gift cards: existing Square merchant `ML42ER3KH4QQT`, embedded with a direct checkout fallback. The merchant checkout can show the legacy name “Wilde Collective – Massage & Healing Spa”.
- Enquiry form: validates locally and prepares an email for the visitor to review and send. It does not claim to submit a message or require an email API key. A copy fallback is provided.
- Directions: Google Maps to 42 Murray Street, Birkdale QLD 4159.

No third-party mail service, account system or payment database is introduced.

## Content & evidence

Public website and sitemap were checked on **4 November 2026**:

- https://www.seraliorawilde.com.au/
- https://www.seraliorawilde.com.au/sitemap.xml
- https://maps.app.goo.gl/nA8z3RsKpowwJjg68

The Google listing showed **5.0 from 14 reviews**, women-owned and LGBTQ+ friendly. The site includes short attributed review excerpts linked to Google. The source directory is in `content/`; `content/assets.json` records original image URLs.

Current booking prices were compared to the website. Magnesium bath pricing differs: the live Square service lists **$60 / 30-minute booking**, while the old biography listed $40 / 20 minutes. The booking menu uses the live listing and profiles defer to it. Home organisation total pricing is left for confirmation because the public profile and booking display differ. A claim attributing recovery from cancer to holistic methods was rewritten as personal background without a treatment claim.

The DreamWeaver Spring Edition is listed for **14 November 2026 at Allambee Sanctuary, Capalaba**, with the original ticket link and `WELL` discount. Confirm future events and all independent provider prices with the provider when updating content.

## Design & accessibility

Self-hosted Baskervville and Manrope fonts, responsive layouts, reduced-motion support, visible keyboard focus, semantic navigation, search status updates, labelled forms, descriptive image text, and a skip link. The regular Baskervville companion is used to preserve the approved lowercase and italic lettering; automated fallback font matching initially returned the small-caps companion.

Development-only concept files, prompts, layout measurements and reviews live under `.impeccable/` and are excluded from deployment. They are not sent in page content. No generated concept portrait is presented as a real practitioner.

## Deployment

Requested Vercel project: `sera-liora-wilde-website` in `adamdorogis-projects`.
The canonical URL is configured in `lib/business.ts`. Sitemap, robots, page titles, descriptions, Open Graph image and local business structured data are included.
