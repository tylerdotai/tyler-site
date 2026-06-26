# TYLER DELANO — TYLERDOTAI.COM
## BOLD NEO-BRUTALISM COLOR CLASH — MASTER SPEC

---

## 1. DESIGN PHILOSOPHY

Neo-brutalism: raw, direct, maximalist typography. Think protest posters, xerox flyers, bold newspaper headlines. Not "clean and modern" — aggressive and memorable. The design should feel like someone who builds real things and doesn't have time for polish theater.

**Key quote from Tutsplus neo-brutalism article:**
> "Brutalism loved concrete, but now it's translated into monochrome designs and oversized typography. Both styles are linked to rebellion, counterculture, and directness. They're a reaction against oversaturated and highly decorated designs."

**Reference sites:**
- lydiaamaruch.com — massive condensed typography, collage-style layering, yellow signature accent
- studio-job.com — baroque maximalism, all-caps headings, bold black borders
- Bold Neobrutalism Color Clash — flat color-blocking, no gradients, sharp contrast

---

## 2. COLOR PALETTE — BOLD NEO-BRUTALISM COLOR CLASH

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-ground` | `#E6E6E6` | Page background (light gray) |
| `--color-ink` | `#212121` | Primary text (near-black) |
| `--color-signal` | `#FF3D00` | Primary accent — CTAs, active states, emphasis (red-orange) |
| `--color-electric` | `#00B0FF` | Secondary accent — links, highlights, secondary actions (light blue) |
| `--color-border` | `#212121` | All borders (3px solid) |
| `--color-white` | `#FFFFFF` | Reversed text on dark sections |

### Usage Rules
- **#FF3D00** (`signal`) → CTAs, active nav, hover states, emphasis blocks, section labels
- **#00B0FF** (`electric`) → Links, secondary accents, tags, secondary buttons
- **#212121** (`ink`) → Body text, borders, dark sections
- **#E6E6E6** (`ground`) → Page background (light mode brutalist)
- **White reversed text** on #212121 dark blocks only
- **No gradients. No blur. No drop shadows with opacity.**
- **Box shadows** — always solid offset (4px 4px 0 #212121) or colored offset (4px 4px 0 #FF3D00)

---

## 3. TYPOGRAPHY

### Font Stack
- **Display**: `'Bebas Neue'` — ultra-condensed, aggressive, maximum impact (Google Fonts)
- **Body**: `'Space Grotesk'` — geometric, modern, readable (Google Fonts)
- **Mono**: `'Space Mono'` — labels, metadata, code (Google Fonts)

### Type Scale
| Name | Size | Font | Weight | Usage |
|------|------|------|--------|-------|
| `text-hero` | clamp(5rem, 14vw, 12rem) | Bebas Neue | 400 | Full-page headlines |
| `text-display` | clamp(3rem, 8vw, 7rem) | Bebas Neue | 400 | Section titles |
| `text-h1` | clamp(2.5rem, 6vw, 5rem) | Bebas Neue | 400 | Page titles |
| `text-h2` | clamp(1.75rem, 4vw, 3rem) | Bebas Neue | 400 | Card titles |
| `text-h3` | clamp(1.25rem, 2.5vw, 1.75rem) | Space Grotesk | 700 | Subheadings |
| `text-body` | 1.0625rem (17px) | Space Grotesk | 400 | Body copy |
| `text-sm` | 0.875rem | Space Grotesk | 400 | Secondary text |
| `text-xs` | 0.75rem | Space Mono | 400 | Labels, metadata |

### Type Rules
- Display text: ALWAYS uppercase, Bebas Neue, tight letter-spacing (-0.02em)
- Body text: Sentence case, Space Grotesk, line-height 1.65
- Labels/metadata: UPPERCASE, Space Mono, letter-spacing 0.1em
- No italic except for hand-written-style accents (if any)
- Text overflow: ellipsis only on truncation; never hide content
- Line-length: max 72ch on body text

---

## 4. NEO-BRUTALIST MECHANICS

### Borders
- **Default border**: `3px solid #212121`
- **Heavy border**: `4px solid #212121`
- **No border-radius anywhere** — zero, zip, none
- Borders go on: cards, buttons, inputs, sections, nav

### Shadows (Hard Offset — NO blur)
- **Card shadow**: `box-shadow: 4px 4px 0 #212121`
- **Hover shadow**: `box-shadow: 6px 6px 0 #212121; transform: translate(-2px, -2px)`
- **Signal shadow**: `box-shadow: 4px 4px 0 #FF3D00` (for signal-colored cards)
- **Electric shadow**: `box-shadow: 4px 4px 0 #00B0FF` (for blue elements)
- Shadow transitions: `transition: box-shadow 0.1s, transform 0.1s`

### Hover States
- **Cards**: lift — translate(-2px, -2px) + bigger shadow
- **Buttons**: invert — background becomes #212121, text becomes white
- **Links**: underline with signal color (#FF3D00), no default blue

### Zero Rules
- Zero border-radius
- Zero gradients
- Zero blur shadows
- Zero decorative ornament
- Zero emoji in UI (use inline SVGs if icons needed)

---

## 5. SPACING & LAYOUT

### Container
- Max-width: 1400px
- Padding: 1.5rem sides (mobile), 3rem sides (desktop)
- Grid: 12-column on desktop, 4-column on mobile

### Section Spacing
- Section padding: `py-16 md:py-24`
- Between sections: `border-b-4 border-ink` (4px solid black divider)
- No decorative dividers — borders only

### Grid Patterns
- **Project cards**: 3-col desktop, 2-col tablet, 1-col mobile
- **Photo grids**: loose asymmetric — intentionally not perfectly aligned
- **Stats row**: equal-width columns with borders between

---

## 6. PAGE ARCHITECTURE

### INDEX.HTML — Home
```
[HEADER — sticky, dark ink bg, white nav]
[HERO — full-bleed photo left, giant display type right, signal CTA button]
[DIVIDER]
[3 PILLARS — icon, bold number, short label — signal/electric accents]
[DIVIDER]
[ABOUT — 2-col: photo right, text left, ink bg section]
[DIVIDER]
[BUILD — grid of 3 project cards]
[DIVIDER]
[COMMUNITY STRIP — stat badges, link to community page]
[DIVIDER]
[FOOTER — minimal, ink bg, white text, mono]
```

### BUILDS.HTML — Builds
```
[HEADER]
[PAGE TITLE — "BUILDS" in massive Bebas Neue]
[FILTER TABS — signal underline on active]
[PROJECT GRID — 3-col, neo-brutalist cards]
[FOOTER]
```

### COMMUNITY.HTML — Community
```
[HEADER]
[STATS ROW — 600+ members / 6 nodes / monthly]
[DIVIDER]
[ABOUT — what is ABC]
[DIVIDER]
[NEXT EVENT — bold signal card]
[DIVIDER]
[PAST EVENTS — photo gallery, real node photos, real descriptions]
[FOOTER]
```

### CREATIVE.HTML — Creative / Signal Vault
```
[HEADER]
[HERO — full-bleed dark section, video or photo, vault label]
[DIVIDER]
[VAULT GRID — 2-col, fixed height rows, neo-brutalist photo cards]
[DIVIDER]
[REEL SECTION — video reel, diagnostic labels]
[DIVIDER]
[FOOTER]
```

### PARKINSON PAGES — /parkinson & /parkinson/es
```
[HEADER — simplified]
[PAGE TITLE]
[CONTENT — maintain current layout, apply color updates]
[FOOTER]
```

---

## 7. COMPONENT SPECS

### `<Header />`
- Position: sticky top-0, z-50
- Background: #212121 (ink) with 3px bottom border in #212121
- Height: auto with py-4 vertical padding
- Logo: `@TYLERDOTAI` in white, Space Mono, bold
- Nav: HOME / BUILDS / COMMUNITY / CREATIVE — white uppercase, tracked, hover: #FF3D00 underline
- Active state: #FF3D00 text + underline
- Mobile: hamburger → full-screen overlay with large centered nav links
- NO sticky blur backdrop — raw solid color

### `<Footer />`
- Background: #212121 (ink)
- Border-top: 4px solid #212121
- Text: white / #E6E6E6 (muted)
- Copyright: `© {year} @TYLERDOTAI` in Space Mono, xs size
- Social links: X, LinkedIn, GitHub — white, hover: #FF3D00
- Layout: 2-col — copyright left, socials right
- NO accent backgrounds — keep it minimal

### `<ProjectCard />`
- Border: 3px solid #212121
- Shadow: 4px 4px 0 #212121
- Hover: translate(-2px, -2px) + 6px 6px 0 #212121
- Title: Bebas Neue, h2 size
- Tag: Space Mono, xs, uppercase, signal (#FF3D00) color
- Background: white (#FFFFFF) or #E6E6E6 depending on section
- Padding: 1.5rem
- NO image grayscale — show photos in full color

### `<StatBadge />`
- Equal-width flex child
- Border between: 3px solid #212121 (right side only)
- Number: Bebas Neue, display size, #FF3D00 (signal)
- Label: Space Grotesk, sm, uppercase, muted
- Background: white

### `<VaultCard />`
- Border: 3px solid #212121
- Shadow: 4px 4px 0 #212121
- Image: full-width, h-full (grid controls height)
- Hover: translate(-2px, -2px), bigger shadow
- Label: Space Mono, xs, white on ink overlay
- Title: Bebas Neue, h3

### Buttons
- Primary: bg #FF3D00, text white, border 3px #212121, shadow 4px 4px 0 #212121
  - Hover: bg #212121, text white, shadow grows
  - Active: translate(2px, 2px), shadow shrinks
- Ghost: bg transparent, text #212121, border 3px #212121
  - Hover: bg #212121, text white

---

## 8. PHOTO / MEDIA RULES
- All photos: real ZV-E10 photography only
- No stock imagery
- Label every image: `PHOTO` / `VIDEO STILL` / `VIDEO` in Space Mono
- Alt text: descriptive, specific to content (no "image of person smiling")
- Creative vault: dark overlay on photos, labels visible

---

## 9. WHAT CHANGES FROM CURRENT SITE

### Colors (entire site)
- REMOVE: #0A0A0A (dark bg), #CCFF00 (lime accent)
- REMOVE: #0055FF (blue), #FFFF00 (yellow)
- ADD: #E6E6E6 (ground/light bg), #FF3D00 (signal), #00B0FF (electric), #212121 (ink)

### Typography
- REMOVE: Syne (display) — replace with Bebas Neue
- KEEP: Space Grotesk (body), Space Mono (mono)
- Increase display type scale — it should dominate

### Atmosphere
- REMOVE: dark editorial aesthetic
- ADD: light-ground brutalist — #E6E6E6 page background, bold color accents
- Think: xerox zine meets Bloomberg terminal

---

## 10. MASTER PROMPT FOR REDESIGN

### Phase 1: Write SPEC.md (this document)
- Done ✅

### Phase 2: Update global.css
- Replace entire `@theme` block with new color tokens
- Add new font imports (Bebas Neue)
- Rewrite base/body styles for light-ground brutalist
- Update shadow utilities
- Update button/card component styles

### Phase 3: Update all page files
- Apply light-ground backgrounds
- Replace Syne with Bebas Neue on all display text
- Update inline color styles to use new palette
- Ensure signal (#FF3D00) is used for CTAs and active states
- Ensure electric (#00B0FF) is used for links and secondary accents

### Phase 4: Update Header/Footer
- Header: solid #212121 bg (no blur), white text, signal (#FF3D00) active state
- Footer: solid #212121 bg, simplified layout

### Phase 5: Update creative page
- Vault grid: maintain fixed row height
- Apply new color scheme throughout

### Phase 6: Verify
- `npm run build` — clean
- `npm run test:e2e` — 11/11
- Browser visual check on all pages

---

## 11. VALIDATION CHECKLIST

Before calling any change "done," verify ALL of:

- [ ] No #0A0A0A anywhere in source or built output
- [ ] No #CCFF00 anywhere in source or built output
- [ ] No #0055FF anywhere in source or built output
- [ ] No #FFFF00 anywhere in source or built output
- [ ] Bebas Neue loads from Google Fonts
- [ ] No border-radius on any element
- [ ] No gradient backgrounds anywhere
- [ ] Shadows are all solid offset (4px 4px 0, no blur)
- [ ] Hero/display type is uppercase Bebas Neue
- [ ] CTAs use #FF3D00 background
- [ ] Links use #00B0FF
- [ ] Body text uses #212121 on light backgrounds
- [ ] `npm run build` succeeds
- [ ] `npm run test:e2e` — 11/11
- [ ] Visual: page loads without white flash
- [ ] Mobile: hamburger menu works
