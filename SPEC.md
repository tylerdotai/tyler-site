# tylerdotai.com — SPEC.md
**Version:** 4.0
**Date:** 2026-06-26
**Framework:** Astro 7.0.x + Vite 8.x + TypeScript
**Hosting:** Vercel

---

## 1. Design Direction

**Neo-Brutalism** — the 2020s UI grammar, not the 90s web-raw kind. Thick outlines, hard offset shadows, saturated flat color blocks, oversized condensed type, zero border-radius, intentional broken-grid asymmetry. This is calculated chaos — structured rebellion, not accident.

Reference: reallygooddesigns.com/neo-brutalist-website-examples, problem.studio, Design Thinkers 2025

---

## 2. Design Tokens

### Colors
```
--color-bg:         #FFFFFF   /* stark white — dominant surface */
--color-bg-alt:     #F5F5F0   /* off-white — alternate sections */
--color-ink:        #0A0A0A   /* near-black — primary text */
--color-accent:     #FFE500   /* saturated yellow — primary CTA, highlights */
--color-blue:       #255FFF   /* bold ultramarine — links, badges */
--color-red:        #FF3B30   /* alarm red — emphasis only */
--color-border:     #0A0A0A   /* black — thick structural borders */
--color-shadow:     #0A0A0A   /* hard offset shadow always black */
```

### Typography
- **Display/headings:** Bebas Neue — condensed, bold, uppercase, massive scale (80–160px for hero). No italic, no weight variation — just ONE weight.
- **Body/UI:** Space Mono — monospaced, technical, grid-aligned. 14–16px body.
- **Labels/badges:** Space Mono uppercase, tracked out.

### Borders & Shadows
```
border: 3px solid var(--color-border)
box-shadow: 6px 6px 0 var(--color-shadow)   /* hard offset, no blur, no radius */
border-radius: 0                              /* zero — everywhere, no exceptions */
```

### Spacing
- Base unit: 8px
- Generous section padding (80–120px vertical)
- Intentional asymmetric gaps in grids

---

## 3. Component Grammar

### BrutalCard
- White fill, 3px black border, 6px hard offset shadow
- No hover animation (just shadow shift: `4px 4px 0` on hover)
- Cursor: pointer

### BrutalButton
```
background: var(--color-accent)
border: 3px solid var(--color-ink)
box-shadow: 6px 6px 0 var(--color-ink)
font-family: Space Mono
font-weight: 700
text-transform: uppercase
transition: box-shadow 80ms ease, transform 80ms ease
Hover: box-shadow: 3px 3px 0 var(--color-ink); transform: translate(3px, 3px)
```

### BrutalBadge
- Solid fill (accent yellow or blue), black border 2px, no shadow
- Space Mono uppercase, tracked

### Section Pattern
- Alternating bg: white / off-white / solid color block
- Headings: Bebas Neue, massive (clamp 60px–120px), uppercase
- Subheadings: Space Mono, normal case, 14–16px

### Navigation
- Fixed or sticky top bar, white bg, thick bottom border
- Logo: text mark "TYLER DELANO" in Bebas Neue
- Nav links: Space Mono, uppercase, small
- No hamburger menus unless mobile — prefer horizontal scroll or stacked

### Footer
- Solid color block (ink black), white/yellow text
- Simple columns: links, social, copyright

---

## 4. Page Structure

### /
1. **Hero** — Full-width, massive Bebas Neue name treatment (split color blocks), tagline in Space Mono, one CTA button
2. **What I do** — 3-column brutal cards: Build, Community, Create
3. **About snippet** — 2-col: text left, photo right (real photo, yellow border + shadow)
4. **Selected work** — Horizontal scroll or grid of project cards
5. **CTA** — Big yellow block, "LET'S TALK" button

### /builds
1. **Header** — Page title in Bebas Neue
2. **Project grid** — BrutalCards in 2-col grid, each with: title, description, tech chips (yellow badges), link

### /community
1. **Header** — Page title + tagline
2. **Stats row** — 3 big numbers (600+, 6, weekly) in brutal stat badges
3. **About** — Paragraph + sidebar facts in brutal card
4. **Events info** — Brutal card with next event details
5. **CTA** — Yellow block to join

### /creative
1. **Header** — Page title
2. **Vault grid** — All photos as neo-brutalist framed cards (yellow border + hard shadow), lightbox on click
3. **Reel section** — Video poster frames, labeled as VIDEO STILL
4. **Connect** — Social links in brutal button style

### /parkinson, /parkinson/es
- Minimal: white bg, black text, one clean section — keep layout simple, focus is the content not the design

---

## 5. Non-Negotiables
- **Zero border-radius** anywhere in the design
- **No orange**
- **No Fraunces, Source Serif, Orbitron, or decorative serif fonts**
- **No AI-generated visuals**
- **No cyber/Y2K aesthetic** — this replaces the prior direction entirely
- All photos: real ZV-E10 frames only
- Video stills labeled explicitly as such

---

## 6. Assets
- Fonts: Google Fonts (Bebas Neue, Space Mono)
- Icons: inline SVG only — no icon libraries
- Photos: `/public/assets/creative/` — 13 unique standalone photos
- Videos: `/public/assets/creative/*.mp4` — 2 videos
- Video posters: `video-preview.jpg`, `video2-preview.jpg` — labeled VIDEO STILL in UI

---

## 7. Quality Gates
- `npm run check` → 0 errors
- `npm test` → all pass
- `npm run build` → success
- `npm run test:e2e` → all pass
- Browser visual verification → neo-brutalist design confirmed
