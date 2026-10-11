---
name: 3 Jharkhand CTC NCC Web Presence
description: Authentic Indian NCC and Government of India institutional design system for BIT Mesra
colors:
  ncc-navy: "#2e3092"
  ncc-navy-deep: "#1e206f"
  ncc-navy-darkest: "#111244"
  ncc-red: "#ef1c24"
  ncc-sky: "#00aeef"
  ncc-orange: "#ef7935"
  ncc-gold: "#f59e0b"
  bg-page: "#f8fafc"
  bg-surface: "#ffffff"
  text-main: "#1e293b"
  text-muted: "#475569"
  border-light: "#e2e8f0"
typography:
  display:
    fontFamily: "Cinzel, Roboto, Georgia, serif"
    fontWeight: 700
  sans:
    fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, Segoe UI, Arial, sans-serif"
    fontWeight: 400
  hindi:
    fontFamily: "Noto Sans Devanagari, Roboto, sans-serif"
rounded:
  sm: "4px"
  md: "6px"
  lg: "10px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "24px"
components:
  button-saffron:
    backgroundColor: "{colors.ncc-orange}"
    textColor: "#ffffff"
    rounded: "{rounded.sm}"
  button-navy:
    backgroundColor: "{colors.ncc-navy}"
    textColor: "#ffffff"
    rounded: "{rounded.sm}"
---

## Overview

The design system for **3 Jharkhand Composite Technical Company NCC, BIT Mesra** follows the authentic visual design language of official Government of India defence portals, closely aligned with `indiancc.mygov.in`. It pairs crisp institutional typography with official inter-service tricolours (Army Red, Navy Blue, and Air Force Sky Blue) and high-contrast, uncluttered layout surfaces.

## Colors

- **Tri-Service Palette:**
  - `Army Red`: `#ef1c24` — used in top tricolour accent bands, important tags, and unit signboards.
  - `Navy Blue`: `#2e3092` — primary brand color, header backgrounds, official insignia backdrop.
  - `Air Force Sky Blue`: `#00aeef` — top tricolour band, secondary highlights.
- **Accents:**
  - `National Portal Saffron`: `#ef7935` — high-visibility CTA buttons and highlight indicators.
  - `Gold / Brass`: `#f59e0b` — ceremonial badges, wreath accents, and Hindi motto highlights.
- **Neutral Surfaces:**
  - Light mode: `#f8fafc` page background, `#ffffff` card surfaces, `#1e293b` text.
  - Dark mode: `#0b0c26` page background, `#141642` surface cards, `#f8fafc` text.

## Typography

- **Headings & Institutional Lockups:** `Roboto` with heavy weights (700–900), paired with `Cinzel` for formal motto inscriptions.
- **Body & Metadata:** `Roboto` (regular 400 / medium 500) with clean line-height (1.6) and high WCAG contrast against surfaces.
- **Devanagari / Hindi Inscriptions:** `Noto Sans Devanagari` for "एकता और अनुशासन".

## Layout

- **Container Width:** Max 1200px centered grid with fluid responsive padding.
- **Header Structure:**
  1. Tri-colour 4px institutional stripe (`#ef1c24`, `#2e3092`, `#00aeef`).
  2. Accessibility topbar (GOI metadata, text resize A-/A/A+, contrast toggle).
  3. Official Navy Header (`#2e3092`) with transparent NCC Crest, bilingual title, and twin tricolour hover lines on navigation links.
- **Hero Section:** Full-bleed background photograph of the unit cadets and red board (`/home.jpg`), unobstructed by buttons or colored tints, with high-contrast text shadows.

## Elevation & Depth

- Restrained elevation relying on crisp 1px borders (`#e2e8f0` light / `#252869` dark) and soft ambient shadows (`0 4px 12px rgba(15, 23, 42, 0.08)`).
- Hero section utilizes subtle directional gradient masks only where necessary to guarantee WCAG AAA text legibility without washing out the photo.

## Shapes

- Strict geometric radii: `4px` on buttons and chips, `6px` on input fields, `10px` on cards.
- Clean rectangular layout blocks representing military discipline.

## Components

- **Institutional Navbar:** Deep navy bar with active tricolour top/bottom underline animations on hover.
- **Action Buttons:** Saffron CTA (`#ef7935`) and navy outline buttons.
- **Document & Notice Cards:** Bordered cards with publication dates, official download links, and category indicators.
- **Photo Gallery:** Clean modal lightbox with responsive grid and image citations.

## Do's and Don'ts

### Do's
- **Preserve authentic unit imagery:** Keep the real unit photograph (`/home.jpg`) clearly visible in the hero banner.
- **Maintain official colour hierarchy:** Use the tricolours (Red, Navy, Sky) in their authentic inter-service order.
- **Keep audio invisible:** The NCC anthem plays headlessly via keyboard triggers (`play` / `amrit`, `stop`) without visual widgets.

### Don'ts
- **No artificial blue wash:** Never apply heavy blue or dark overlays that obscure the cadets or the red unit board in the hero image.
- **No speculative enrollment forms:** The site is an official display showcase; do not add transactional enrollment forms or dummy login portals.
- **No decorative clutter:** Avoid unnecessary floating badges, moving marquee tickers, or extraneous CTA buttons across the hero section.
