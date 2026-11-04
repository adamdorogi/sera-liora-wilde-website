---
name: The Wellness Collective
description: The Sunroom — a welcoming window onto independent local care.
colors:
  pine: "#203d35"
  pine-deep: "#173e31"
  pine-hover: "#315b48"
  paper: "#f8f8f5"
  celery: "#edf1df"
  community-paper: "#e7ebdd"
  rose: "#e6b9ab"
  rose-ink: "#9b5d4d"
  review-paper: "#f3e9e2"
  muted: "#52655b"
  line: "#d5ddd0"
  white: "#ffffff"
typography:
  display:
    fontFamily: "Baskervville, serif"
    fontSize: "clamp(72px, 6.45vw, 96px)"
    fontWeight: 400
    lineHeight: 0.97
    letterSpacing: "-0.035em"
  page-heading:
    fontFamily: "Baskervville, serif"
    fontSize: "clamp(48px, 5.1vw, 74px)"
    fontWeight: 400
    lineHeight: 1.08
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Baskervville, serif"
    fontSize: "clamp(34px, 3.5vw, 52px)"
    fontWeight: 400
    lineHeight: 1.12
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Baskervville, serif"
    fontSize: "27px"
    fontWeight: 400
    lineHeight: 1.15
  body:
    fontFamily: "Manrope, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "Manrope, sans-serif"
    fontSize: "12px"
    fontWeight: 500
    lineHeight: 1.7
  control:
    fontFamily: "Manrope, sans-serif"
    fontSize: "16px"
    fontWeight: 500
    lineHeight: 1.35
  field:
    fontFamily: "Manrope, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.65
  navigation:
    fontFamily: "Manrope, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.7
rounded:
  field: "7px"
  surface: "14px"
  pill: "100px"
  circle: "50%"
  hero-arch: "230px 230px 14px 14px"
  hero-arch-mobile: "140px 140px 12px 12px"
spacing:
  inline: "8px"
  stack: "22px"
  gutter-mobile: "20px"
  gutter-tablet: "44px"
  gutter: "60px"
  section-mobile: "55px"
  section: "85px"
components:
  button-primary:
    backgroundColor: "{colors.pine}"
    textColor: "{colors.paper}"
    typography: "{typography.control}"
    rounded: "{rounded.pill}"
    padding: "15px 27px"
  button-primary-hover:
    backgroundColor: "{colors.pine-hover}"
  button-light:
    backgroundColor: "{colors.celery}"
    textColor: "{colors.pine}"
    typography: "{typography.control}"
    rounded: "{rounded.pill}"
    padding: "15px 27px"
  button-light-hover:
    backgroundColor: "{colors.white}"
    textColor: "{colors.pine}"
  text-link:
    textColor: "{colors.pine}"
    padding: "10px 0"
  search-field:
    backgroundColor: "{colors.white}"
    textColor: "{colors.pine}"
    rounded: "{rounded.pill}"
    padding: "12px 19px"
  filter-chip:
    backgroundColor: "transparent"
    textColor: "{colors.pine}"
    rounded: "{rounded.pill}"
    padding: "9px 17px"
  filter-chip-selected:
    backgroundColor: "{colors.pine}"
    textColor: "{colors.white}"
  contact-field:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.pine}"
    typography: "{typography.field}"
    rounded: "{rounded.field}"
    padding: "11px 13px"
  practitioner-card:
    textColor: "{colors.pine}"
  navigation:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.pine}"
    typography: "{typography.navigation}"
---

# Design System: The Wellness Collective

## Overview

**Creative North Star: "The Sunroom"**

A welcoming window onto independent local care. The approved image-first direction pairs generous near-white space with pine green, pale celery and soft rose. Elegant Roman serif headings and plain sans text make the collective feel personal and useful.

Source photography supplies the people and places. Arches give larger photographs a gentle architectural frame; the directory gives each practitioner the same clear portrait, name, role and next step. The approved composition is recorded in `.impeccable/surfaces/app-page-tsx.md`; it does not prescribe the composition of every future page.

**Key Characteristics:**
- Human photography with deliberate crops.
- Spacious editorial sections and a flat directory.
- Real lowercase and italic serif lettering.
- Small pill controls with explicit interaction states.

## Colors

Pine anchors the interface; light green and warm neutral bands make the long pages easy to scan. The frontmatter is the portable token source; `app/globals.css` owns the implementation values.

### Primary
- **Pine** supplies primary text, buttons, the announcement and dark sections. **Deep Pine** supports selection text and prose links; **Pine Hover** is the primary button hover.

### Secondary
- **Celery** supplies category bands, help panels and booking containers. **Community Paper** is the slightly deeper green used for the community section.
- **Rose** supplies the care seal and selected text background. **Rose Ink** supplies keyboard focus and link hover color.

### Neutral
- **Paper** is the page ground. **White** is used for search and selected-filter text.
- **Review Paper** gives testimonials a warm, quiet section ground.
- **Muted** supplies supporting copy and location text. **Line** supplies fine dividers and unselected filter borders.

## Typography

**Display Font:** locally hosted Baskervville, with `serif` fallback; regular and italic (400).
**Body Font:** locally hosted Manrope, with `sans-serif` fallback; weights (400, 500, 600, 700).

Baskervville supplies headings, practitioner names and quotations. Manrope supplies body copy, navigation, labels and controls. The local font files are registered in `app/layout.tsx` through `--font-display` and `--font-sans`.

### Hierarchy
- **Display:** the two-line homepage headline; its mobile scale is `clamp(58px, 14.7vw, 84px)` with line-height (0.99).
- **Page heading:** editorial and directory introductions; the mobile scale is `clamp(46px, 12vw, 63px)`.
- **Headline:** large section headings; most become (35px) on mobile. Section-specific variants remain in the stylesheet.
- **Title:** practitioner names become (29px) at the tablet breakpoint and (22px) on mobile.
- **Body:** the base role is supplemented by reading copy (15–17px, line-height 1.85–1.95) and mobile section copy (14px). Introductory paragraphs commonly cap at (450–620px).
- **Label / control:** compact Manrope labels, medium-weight actions and restrained supporting metadata. These roles do not establish an uppercase eyebrow pattern.

**The Typeface Fidelity Rule.** Use the supplied regular and italic Baskervville faces so lowercase and italic letters remain intact; do not substitute a small-caps display face.

## Layout

The shared content container caps at (1400px), with side gutters (60px), compact desktop gutters (44px) at widths up to (1300px), and mobile gutters (20px). The spacing tokens are repeated anchors rather than an exhaustive arithmetic scale.

The desktop homepage hero pairs text and photography in columns (43.3% / 56.7%). Editorial sections use asymmetrical two-column compositions; section spacing is usually (85px), becoming (55px) on mobile. The directory uses four equal columns with a (22px) gap, two columns at widths up to (1050px), and retains two columns on mobile with a (15px) column gap.

Navigation switches to the menu control at widths up to (1050px). Page layouts predominantly stack at widths up to (760px): the hero becomes text followed by photography, category links form two columns, reviews become a single column, and profile booking panels lose sticky positioning. At widths from (1600px), the homepage hero image grows to (540px) high.

## Elevation & Depth

Most surfaces are flat. Photography, tonal section grounds, fine rules and whitespace provide separation. Shadows belong to specific floating controls, navigation or the physical gift-card artwork.

### Shadow Vocabulary
- **Map action:** `0 16px 36px rgb(23 62 49 / 10%)`.
- **Button hover:** `0 5px 14px rgb(23 62 49 / 12%)`.
- **Open menu:** `0 15px 25px rgb(23 62 49 / 10%)`.
- **Gift artwork:** `0 20px 55px rgb(30 47 32 / 16%)`.

## Shapes

Ordinary image frames and filled containers use the surface radius; fields have a smaller corner. Buttons, search and filters are pills. Circular arrow controls and the rose care seal echo the curves without turning every container into an arch.

Large source photographs use arched top corners with small lower corners. The hero uses the frontmatter arch values; founder, community, profile and offering photographs use related arches sized to their frames. Some feature photographs curve just one corner. Use `object-fit: cover` and deliberate subject positioning; keep the approved orientation correction for the affected portrait.

## Components

### Buttons and links

The primary pill has a minimum height (55px), with a small navigation variant (44px). The light pill sits on dark sections. A secondary action is a text link with an arrow and an underline that appears on hover. Arrows are inline SVG. Primary hover changes the green and adds its small shadow; light hover becomes white. The shared keyboard focus is a Rose Ink outline (3px), offset (5px).

### Search and filters

The search field is a white pill with a fine border, search icon and conditional clear button. Its enclosing focus treatment is Pine (2px), offset (3px). Filter pills wrap; `aria-pressed="true"` fills the chip Pine with white text. Category entry links carry the filter to the directory, where selection and search update the result count and actual practitioner list. Empty results offer a reset.

### Practitioner cards and containers

Directory cards have no raised shell. A rounded source photograph sits above location, serif name, medium role, muted description and an underlined profile action. The circular image arrow is Paper. Portrait hover enlarges the image gently (1.035 scale); the photograph remains clipped to its frame. Filled booking and enquiry panels use Celery, surface corners and context-specific padding (29px and 38px respectively).

### Inputs and native browser states

Contact fields use Paper, Pine text, a fine green border and the field corner. Labels remain visible. The textarea can resize vertically. Required fields and email validity use native browser validation; there is no custom error or disabled palette to inherit. Preparing an enquiry reveals a reviewable email draft and explicit email/copy actions before a message is sent.

Selected text uses Rose with Deep Pine text; input carets are Pine. The native scrollbar uses a muted green thumb (`#738776`) on Celery. Links, buttons, fields and native disclosure summaries share visible keyboard focus. The skip link appears on focus.

### Navigation and disclosures

The desktop header is an airy brand-and-links row. Current desktop links are underlined; hover uses Rose Ink. The menu button exposes its expanded state, and the open menu is a full-width Paper panel under the header. Profile and footer disclosures use native `details` / `summary`, fine dividers and a clear open-state indicator.

### Motion

The hero photograph opens once through a gentle aperture reveal (850ms). Text stays still. Button/link/disclosure state transitions take (200ms), filter state transitions (150ms), and portrait enlargement (450ms). With `prefers-reduced-motion: reduce`, animation and transitions are disabled, smooth scrolling becomes automatic scrolling, and all content remains visible.

## Do's and Don'ts

### Do:
- **Do** use approved source photographs for people and places, with deliberate crops.
- **Do** preserve the local Baskervville regular and italic lettering.
- **Do** keep selected filters and keyboard focus visually explicit.
- **Do** give independent practitioners equal card structure and a clear next step.

### Don't:
- **Don't** replace genuine practitioner or clinic photographs with illustrative faces or rooms.
- **Don't** introduce a small-caps substitute for the display font.
- **Don't** turn the flat practitioner directory into a set of raised panels.
