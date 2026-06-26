# SPEC.md — Tyler Delano Personal Site
## Neo-Brutalist Typography Site (Rebuild)

---

## 1. Concept & Vision

A personal brand hub that commands attention through **typographic aggression and spatial confidence** — not color noise. The site should feel like a high-end creative director's portfolio, not a SaaS landing page. Think: Pentagram meets fashion editorial meets Bauhaus. Every element earns its place. Nothing decorates for decoration's sake.

**Core personality:** Direct. Confident. Builder-first. The site says "I ship things" without saying it.

---

## 2. Design Language

### Aesthetic Direction
**Reference:** Lydia Amaruch (lydiaamaruch.com) — editorial neo-brutalism. Black foundation, white type, one electric accent. Magazine-grid layout with intentional negative space. Typography as the primary visual element.

**NOT:** McDonald's配色 (red+yellow+blue simultaneously), SaaS gradient grids, rounded corners anywhere, generic blue "corporate trust" buttons.

### Color Palette

```
Background (dark mode foundation):
  --bg:          #0A0A0A    /* Near-black, not pure black — softer */
  --bg-surface:  #111111    /* Card/section surfaces */
  --bg-elevated: #1A1A1A    /* Hover states, elevated panels */

Text:
  --text:        #FFFFFF    /* Pure white for headings */
  --text-body:   #E5E5E5    /* Off-white for body (easier on eyes) */
  --text-muted:  #888888    /* Meta text, captions */

Accent (SINGLE accent — used ONLY for emphasis):
  --accent:      #CCFF00    /* Electric lime — modern, distinctive, NOT yellow */
                             /* NOT: #FFE600 (McDonald's), NOT #FF3B30 (danger red) */
                             /* This is the ONE color that everything else defers to */

Borders & Structural:
  --border:      #FFFFFF    /* White borders — structural, not heavy */
  --border-dim:  #333333    /* Subtle dividers */

Shadows:
  --shadow:       4px 4px 0 #FFFFFF   /* White shadow on dark bg — inverts brutalist convention */
  --shadow-sm:    2px 2px 0 #FFFFFF
```

**Why #CCFF00 over #FFE600:**
- `#FFE600` is fast-food energy (McDonald's, Febreze, Cartoons) — it signals cheap/childish
- `#CCFF00` is electric/synthetic — it's what neon sign shops look like, what fresh code looks like — it's a BUILDER color
- Same perceptual brightness, completely different cultural signal

**Why no blue:**
- `#0055FF` is corporate trust — bank websites, enterprise SaaS
- Completely wrong personality for a creative builder who runs a community

**Why no red:**
- `#FF3B30` is danger/error — it should never be a primary accent on a personal site

### Typography

```
Display Font:  "Syne" (Google Fonts) — geometric, bold, distinctive
               NOT: Bebas Neue (overused, feels like movie posters)
               NOT: Anton (too aggressive, no personality)

Body Font:     "Space Grotesk" (Google Fonts) — geometric sans, readable, modern
               NOT: Space Mono (too cold/monospace for body — save for code/labels)

Mono Font:     "JetBrains Mono" (Google Fonts) — clean monospace for labels/captions
```

**Type Scale:**
```
--text-hero:   clamp(4rem, 12vw, 10rem)   /* Massive — commands the page */
--text-h1:     clamp(2.5rem, 6vw, 5rem)
--text-h2:     clamp(1.75rem, 4vw, 3rem)
--text-h3:     clamp(1.25rem, 2.5vw, 1.75rem)
--text-body:   1rem (16px base)
--text-sm:     0.875rem
--text-xs:     0.75rem
--text-label:  0.7rem uppercase tracked (Space Grotesk)
```

**Letter-spacing:**
- Display/H1: `0.01em` to `0.02em` (slight tracking, not loose)
- Labels/tags: `0.15em` to `0.2em` (generous — editorial feel)
- Body: `0` (default)

**Line-height:**
- Display: `0.9` to `0.95` (very tight — fills the space)
- Body: `1.6` to `1.7` (readable)

### Spatial System

```
--space-xs:   0.5rem    /* 8px */
--space-sm:   1rem      /* 16px */
--space-md:   2rem      /* 32px */
--space-lg:   4rem      /* 64px */
--space-xl:   8rem      /* 128px */
--space-2xl:  12rem     /* 192px */

Section padding:  var(--space-xl) top/bottom on desktop, var(--space-lg) mobile
Container max:    1400px
Gutters:          1.5rem (24px) on each side
```

### Border & Shadow System

```
Borders:
  --border:         2px solid var(--border)
  --border-strong:  3px solid var(--border)

Shadows (ON DARK BACKGROUND — white shadow is the brutalist move):
  --shadow:    4px 4px 0 var(--border)        /* hard, no blur */
  --shadow-sm: 2px 2px 0 var(--border)
  --shadow-lg: 8px 8px 0 var(--border)

Border-radius: 0 everywhere — NO rounded corners, NO border-radius
```

### Motion Philosophy

```
Duration:
  Micro (hover):   120ms ease
  Standard:        250ms ease
  Page:            400ms ease

Hover on cards/buttons: translate(-2px, -2px) + shadow grows
  — Elements "lift" toward the viewer on dark background
  — This INVERTS the usual light-mode brutalist shadow direction

Page entrance:
  — Sections fade + slide up on scroll (Intersection Observer)
  — Stagger: 80ms between elements
  — Duration: 400ms ease-out

No: parallax, no mouse-following, no bouncy springs, no page transitions
```

---

## 3. Layout & Structure

### Overall Architecture

Dark foundation. Sections alternate between `#0A0A0A` (pure background) and `#111111` (surface) to create visual rhythm without borders.

### Page Structure

```
HEADER (fixed, transparent → solid on scroll)
  Logo/wordmark left | Nav right
  Height: 72px
  Background: #0A0A0A with bottom border on scroll

HERO (100vh or auto-height)
  — Massive name/type treatment — the main impression
  — No background video, no gradients
  — Just TYPOGRAPHY doing the work
  — One line of body copy
  — Two CTAs

ABOUT (two-column asymmetric)
  Left: Large pull quote or tagline (40% width)
  Right: Bio paragraphs (60% width)
  Alternating section backgrounds

WORK/BUILDS (magazine grid)
  — Not equal cards — some large, some small
  — Asymmetric grid, 12-column base
  — Project name in huge type overlapping images

COMMUNITY (stats + narrative)
  — Stats in a row (600+, 6 nodes, Monthly)
  — Narrative paragraph below
  — No yellow cards — the stat color comes from the accent

CREATIVE (masonry or uneven grid)
  — Photos/videos in an editorial layout
  — Not uniform cards — varied sizes
  — Minimal label treatment

FOOTER
  — Minimal, dark
  — Social links, copyright
  — One accent color line somewhere
```

### Grid Specifications

**Hero:** Full-bleed, type set from edge to edge (fluid type)
**About:** 40/60 split at lg breakpoint, stacked on mobile
**Builds:** CSS Grid, `repeat(12, 1fr)`, items span varying column counts
**Community stats:** Equal flex items, monospace numbers
**Creative:** CSS Grid, `auto-fill`, items have `grid-column: span X` variants

### Responsive Strategy

```
Mobile:    < 768px   — single column, reduced type scale
Tablet:    768-1024  — 2-column grids
Desktop:   1024+     — full asymmetric layouts
Wide:      1400px+  — max-width container kicks in
```

---

## 4. Features & Interactions

### Header
- Fixed position, `backdrop-filter: blur(12px)` with slight dark tint
- Transparent at top of page, gains `border-bottom` after 50px scroll
- Logo: `@TYLERDOTAI` in Syne Bold, accent color
- Nav links: Space Grotesk, uppercase, tracked — white, accent on hover
- Mobile: hamburger → full-screen overlay menu

### Hero
- Name: `--text-hero` size, white, Syne Bold
- Tagline below: body size, muted color
- Two buttons: Primary (accent bg) + Ghost (outline)
- Entrance: fade up from 20px below, 400ms

### Cards (Builds)
- Border: 2px white
- Shadow on dark: 4px 4px 0 white
- Hover: lift (-2px, -2px) + shadow grows (8px 8px 0 white)
- Image: cover, no border-radius, full bleed top
- Bottom section: white bg, black text (INVERTED from page — pop)
- Tags: accent-colored monospace text

### Community Stats
- Large monospace numbers: `clamp(2.5rem, 5vw, 4rem)`
- Labels: `text-xs uppercase tracked`
- Divider lines between: 1px `--border-dim`
- NO yellow backgrounds — the accent color is reserved for one element per section max

### Creative Page
- Vault grid: uniform row height (CSS grid `grid-rows-[340px]`)
- Each item: photo fills cell, label overlaid at bottom
- Video items: small play icon indicator, "VIDEO" label
- Hover: slight scale (1.02) on image only

### Buttons

**Primary (accent fill):**
- Background: `--accent` (#CCFF00)
- Text: `#0A0A0A` (near-black for max contrast)
- Border: 2px solid `#0A0A0A`
- Shadow: 4px 4px 0 `#CCFF00` (same as bg — creates outline effect)
- Hover: translate(-2px, -2px), shadow becomes 6px 6px 0 `#CCFF00`
- Active: translate(2px, 2px), shadow collapses

**Ghost (outline):**
- Background: transparent
- Text: white
- Border: 2px solid white
- Shadow: 4px 4px 0 white
- Hover: background fills white, text goes black, shadow disappears

### Scroll Animations
- Intersection Observer, threshold 0.15
- Elements start: `opacity: 0, transform: translateY(20px)`
- Elements end: `opacity: 1, transform: translateY(0)`
- Stagger: 80ms delay per child element
- Duration: 400ms ease-out

### Error/Empty States
- 404: Large "404" in display type, brief message, ghost button home
- Empty build list: "Nothing here yet. Check back soon." in body text

---

## 5. Component Inventory

### `<Header />`
States: transparent (top), solid (scrolled), mobile-open
- Transparent: bg transparent, no border-bottom
- Solid: bg `#0A0A0A` at 95% opacity, `border-bottom: 1px solid #333`
- Mobile open: full-screen overlay, centered nav links at large type size

### `<Footer />`
- Dark bg `#0A0A0A`
- Top border: 1px `#333`
- Two rows: nav links (left) + copyright (right)
- Social links: text only, accent on hover

### `<Hero />`
- Full-width, min-height 80vh
- Name in display type, fluid
- Tagline in body-muted
- Two buttons side by side

### `<BuildCard />`
- Image top (16:9 or 4:3), no border-radius
- Body: white bg, black text (INVERTED)
- Tags: accent text, monospace
- States: default, hover (lift), active (press)

### `<StatBadge />`
- Large number: clamp monospace
- Small label below: uppercase tracked muted
- Separated by vertical dividers in a flex row

### `<VaultCard />` (Creative)
- Full image fill
- Label: bottom-left, small text, white with black bg pill
- Video indicator: small play icon
- Hover: scale image 1.03, label slides up slightly

### `<SectionLabel />`
- Font: Space Grotesk mono
- Size: text-xs
- Case: uppercase
- Tracking: 0.15em
- Color: accent or muted

---

## 6. Technical Approach

### Stack
- **Astro 7** (static site, zero JS by default)
- **Tailwind CSS v4** (`@tailwindcss/vite` plugin)
- **TypeScript** (strict)
- **No React/Vue** — pure Astro components

### File Structure
```
src/
  components/
    Header.astro
    Footer.astro
    Hero.astro
    BuildCard.astro
    StatBadge.astro
    VaultCard.astro
    SectionLabel.astro
    ScrollReveal.astro
  layouts/
    BaseLayout.astro
  pages/
    index.astro
    builds.astro
    community.astro
    creative.astro
    parkinson/
      index.astro
      es.astro
  styles/
    global.css
public/
  assets/
    creative/
    community/
    builds/
  favicon.svg
```

### CSS Architecture
- Tailwind for utility classes (spacing, flex, grid)
- Custom properties in `global.css` for: color tokens, type scale, shadow system
- Component-scoped `<style>` in each `.astro` file for component-specific styles
- NO Tailwind config file needed (Tailwind v4 uses CSS `@theme`)

### JavaScript
- Minimal JS: only for scroll-triggered header state and scroll-reveal animations
- Use Astro's `<script>` tags (bundled, not inline)
- Intersection Observer for scroll animations

### Performance Targets
- Lighthouse: 95+ across all metrics
- No layout shift (explicit width/height on images)
- Fonts: `font-display: swap`

---

## 7. Color Application by Element

```
PAGE BACKGROUND:        #0A0A0A
SECTION SURFACE:        #111111 (alternating)

HEADINGS (H1-H3):      #FFFFFF
BODY TEXT:              #E5E5E5
MUTED/META TEXT:        #888888

ACCENT (ONE COLOR):      #CCFF00
  — Used for: CTAs, active nav indicator, section labels, stat numbers (one per section), hover states

CARDS:
  Background: #FFFFFF (INVERTED — white card on dark page)
  Text:      #0A0A0A (black text on white card)
  Border:    2px solid #0A0A0A
  Shadow:    4px 4px 0 #CCFF00 (accent shadow — card "pops" from page)

BUTTON PRIMARY:
  Background: #CCFF00
  Text:       #0A0A0A
  Shadow:     4px 4px 0 #0A0A0A (black shadow)

BUTTON GHOST:
  Background: transparent
  Border:     2px solid #FFFFFF
  Shadow:     4px 4px 0 #FFFFFF
  Hover fill: #FFFFFF → text #0A0A0A

SHADOW ON DARK:         4px 4px 0 #FFFFFF (white shadow = bold, confident)
SHADOW ON WHITE CARD:   4px 4px 0 #CCFF00 (accent shadow = branded pop)
```

---

## 8. Anti-Patterns (Do Not Repeat)

1. ❌ `#FFE600` yellow on white — fast-food energy
2. ❌ `#0055FF` blue as primary accent — corporate, generic
3. ❌ Three saturated accent colors simultaneously — sensory overload
4. ❌ Border-radius on any element — breaks brutalist geometry
5. ❌ Rounded buttons/pills — zero brutalist DNA
6. ❌ Yellow background sections — screams "sale at Target"
7. ❌ Bebas Neue for body/UI text — overused movie poster font
8. ❌ Grayscale filter on photos — cowardly, makes photography look washed out
9. ❌ "support by day" or any variant — absent from all pages
10. ❌ Generic stock-photo-style descriptions — real content only
