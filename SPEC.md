# SPEC.md — tylerdotai.com

**Version:** 1.0
**Last updated:** 2026-03-29
**Author:** Hoss (subagent)
**Purpose:** Complete redesign spec for Tyler's personal site. Build phase is separate.

---

## 1. Concept & Vision

Tyler's digital home — not a portfolio, not a resume, not AI-generated slop. This is a living site that breathes personality: first-person voice, actual opinions, curated chaos energy. The design communicates "human who builds things" through deliberate imperfection at the edges, confident typography, and motion that feels playful rather than polished. The site should feel like it was made by someone with taste, not a template.

**Tagline energy:** "IT Pro by day. AI builder by night. Chicken farmer by heart."

---

## 2. Design Language

### Aesthetic Direction
**Reference:** Editorial brutalism meets homestead warmth. Think: a well-worn Moleskine notebook with surprising typographic choices, not a SaaS landing page. High contrast, ink-on-paper weight, with earthy undertones that nod to the homestead life. NOT dark-mode-by-default — let's lead with light, add dark.

### Color Palette (OKLCH)

```css
:root {
  /* Brand accent — warm orange, Tyler's signature */
  --color-accent: oklch(68% 0.18 50);        /* #ff6b00 - rich orange */

  /* Background tints (warm, not pure white) */
  --color-bg-primary:   oklch(98% 0.01 90);  /* warm off-white */
  --color-bg-secondary: oklch(95% 0.015 85); /* slightly warmer */
  --color-bg-dark:      oklch(18% 0.015 280); /* deep warm dark */

  /* Text — warm neutrals, no pure gray */
  --color-text-primary:   oklch(15% 0.02 260); /* near-black, slight purple tint */
  --color-text-secondary: oklch(45% 0.02 260); /* warm mid-gray */
  --color-text-tertiary:  oklch(65% 0.02 260); /* warm light-gray */
  --color-text-inverse:   oklch(95% 0.01 90);  /* off-white on dark */

  /* Borders & dividers */
  --color-border: oklch(85% 0.01 90);
  --color-border-strong: oklch(70% 0.02 90);

  /* Semantic accents */
  --color-accent-hover: oklch(72% 0.20 48);   /* deeper orange on hover */
  --color-accent-muted: oklch(78% 0.08 50);   /* muted orange for subtle use */

  /* Status */
  --color-success: oklch(65% 0.15 155);
  --color-warning: oklch(78% 0.15 85);
  --color-error:   oklch(60% 0.20 25);
}
```

### Typography

**Headlines:** Fraunces (optical-size variable, weight 200–900)
- Display: 200 weight, optical size 72–144px
- H1: 200 weight, 64px (desktop) / 40px (mobile)
- H2: 200 weight, 48px (desktop) / 32px (mobile)
- H3: 400 weight, 32px (desktop) / 24px (mobile)
- Subheadings get optical size boost for character

**Body:** Literata (weight 300–600)
- Body: 400 weight, 18px / 1.7 line-height
- Lead/intro: 300 weight, 22px / 1.6 line-height
- Small: 400 weight, 14px

**Code/Mono:** JetBrains Mono (weight 400–700)
- Code inline: 400 weight, 16px
- Code blocks: 400 weight, 14px, 1.6 line-height

**Scale (major third, 1.25 ratio):**
```
xs:   12px
sm:   14px
base: 18px
lg:   22px
xl:   28px
2xl:  36px
3xl:  48px
4xl:  64px
5xl:  96px  (hero display only)
```

### Weight Contrast (Anti-AI-Slop)

| Element | Weight | Size |
|---------|--------|------|
| Hero tagline | 200 | 5xl–96px |
| Section heading | 200 | 3xl–48px |
| Sub-heading | 400 | xl–28px |
| Body | 400 | base–18px |
| Caption/meta | 300 | sm–14px |
| Nav links | 400 | base–18px |

**Key rule:** Headlines at 200, body at 400+. Never 400↔600 mid-weight confusion.

### Spatial System

Base unit: 8px
- `--space-1`: 8px
- `--space-2`: 16px
- `--space-3`: 24px
- `--space-4`: 32px
- `--space-6`: 48px
- `--space-8`: 64px
- `--space-12`: 96px
- `--space-16`: 128px
- `--space-24`: 192px

**Section rhythm:** Generous vertical padding (96–128px). Content never feels cramped. Whitespace is a design choice, not waste.

### Motion Philosophy

Motion communicates: "this site is alive." But never distracting, never gratuitous.

**Principles:**
- Entrance animations: fade + subtle translate (0→1 opacity, 20px→0 translateY), 500–700ms ease-out
- Stagger: 80ms between siblings
- Scroll-triggered reveals: 15% viewport threshold
- Hover states: 200ms transitions, subtle scale/shadow lifts
- No infinite loops except the kinetic hero typography

### Tech Stack

- **Framework:** Vanilla HTML + CSS + JS (zero React/Vue bloat)
- **Build:** None required — or minimal Vite for dev HMR if desired
- **Smooth scroll:** Lenis (`@studio-freight/lenis`)
- **Scroll animations:** GSAP (gsap, ScrollTrigger) — or Motion.dev (`motion` package)
- **Kinetic typography:** pretext (`@chenglou/pretext`) for hero tagline
- **CSS features:** Native scroll-driven animations (`animation-timeline: scroll()`), CSS View Transitions
- **RSS:** Static XML generated at build time
- **Fonts:** Google Fonts (Fraunces, Literata, JetBrains Mono)
- **No:** Tailwind, Bootstrap, or component frameworks

---

## 3. Layout & Structure

### Global Layout

```
<header>        — fixed nav, 64px height, blur backdrop
<main>          — sections stacked vertically
<footer>        — minimal, links only
```

**Container:** max-width 1100px, horizontal padding 24px (mobile) / 48px (desktop)

**Sections:** Full-width with inner constrained content. Alternate: light bg / slightly different warm tint.

### Section Order & Flow

```
1. [HERO]        — Full viewport height, kinetic typography, scroll indicator
2. [CURRENTLY]   — ~60vh, living status block, subtle border
3. [BLOG]        — Latest 3 posts, editorial card layout
4. [ABOUT]       — Two-column: portrait + curated bio
5. [PROJECTS]    — Flume products, screenshot-forward grid
6. [CONNECT]     — Minimal links, centered
```

### Section Break Rhythm

- Hero → Currently: tight (16px gap)
- Currently → Blog: generous (96px)
- Blog → About: medium (64px)
- About → Projects: tight (16px visual reset)
- Projects → Connect: generous (128px)

### Responsive Strategy

| Breakpoint | Behavior |
|------------|----------|
| < 640px    | Single column, stacked nav (hamburger), reduced type scale |
| 640–1024px | Tablet: 2-column grids become 1-column |
| > 1024px   | Full layout, sticky nav, hover states active |

---

## 4. Features & Interactions

### Navigation

- Fixed header, 64px tall, `backdrop-filter: blur(12px)` with subtle border-bottom
- Logo/name on left (text mark, not image)
- Nav links on right: Blog, About, Projects, Connect
- Mobile: hamburger menu, full-screen overlay with staggered link entrance
- Active section highlighted via scroll-spy (Intersection Observer)
- Hover: underline grows from center (CSS transform scaleX)

### Kinetic Hero

- **Purpose:** Immediate personality injection. The tagline animates.
- **Implementation:** pretext library (`@chenglou/pretext`) for character-by-character reveal
- **Tagline candidates:**
  - "Building agents that ship."
  - "IT Pro. AI Builder. Chicken Farmer."
  - "I make AI agents work. Then I make them work harder."
- **Motion:** Characters reveal sequentially, 30ms per character, 400ms total loop
- **Subtext:** Below tagline — short descriptor, 300 weight, muted color
- **Scroll indicator:** Animated chevron/bounce arrow at bottom, disappears on scroll

### Currently Section

- **Label:** "Currently" in small caps, 200 weight
- **Content:** 2–4 inline status items, each with a noun/verb structure
  - "Building agent-hosting v2"
  - "Reading The Making of the Atomic Bomb"
  - "Growing tomatoes (poorly)"
  - "Teaching Spencer to code"
- **Style:** Inline tags with subtle borders, comma-separated or stacked
- **Note:** This section is manually updated — no CMS needed, just edit the HTML
- **Interaction:** Hover on items reveals relative timestamp ("2 weeks ago") if applicable

### Blog Section

- **Heading:** "Writing" (200 weight, 48px)
- **Layout:** 3-column card grid on desktop, single column mobile
- **Cards:**
  - Date in small muted text (top-left)
  - Title (24px, 400 weight)
  - Excerpt (2–3 lines, 400 weight, secondary color)
  - "Read →" link at bottom
  - On hover: card lifts (translateY -4px), subtle shadow
- **Filter/Tags:** Optional — All, AI, Homstead, IT, Projects
- **Empty state:** "No posts yet. Check back soon."
- **RSS link:** Visible in section header, links to `/rss.xml`

### About Section

- **Layout:** Two columns on desktop (portrait left, text right), stacked on mobile
- **Portrait:** Real photo of Tyler, ~400px wide, subtle border or shadow, NOT a circle crop
- **Bio:** First-person, conversational. Example tone:
  > "I'm an IT Support Associate at Amazon by day, and an AI agent builder by night. I live on a small homestead in Springtown, Texas with my wife Justine and son Spencer. We raise chickens, grow vegetables, and I spend every spare cycle building SaaS products with AI agent teams.
  >
  > I believe the future of software is autonomous agents working together. I'm building that future at Flume SaaS Factory."
- **Interests grid:** Small icons + labels for: AI/Agents, Homesteader, IT Pro, 3D Printing, DFW Community
- **Callout:** A single strong opinion Tyler holds (e.g., "AI agents will replace 80% of SaaS in 5 years.")

### Projects Section

- **Heading:** "Projects" (200 weight, 48px)
- **Layout:** 2-column grid of project cards
- **Each card:**
  - Real screenshot (16:10 aspect ratio, actual product UI, NOT stock)
  - Project name (H3 weight, 400)
  - One-line description
  - Tags: ["Live", "Beta", "Experimental"]
  - Links: "Visit →" and "GitHub →"
- **Products to include:**
  1. **agent-hosting** — AI agent deployment platform
  2. **clawplex** — DFW AI builders community
  3. **client-portal** — Flume client management
  4. **agent-to-agent-sms** — Open source agent communication
- **On hover:** Screenshot zooms slightly (scale 1.02), shadow lifts

### Connect Section

- **Heading:** "Let's Connect" or "Find Me" (200 weight)
- **Layout:** Centered, horizontal link row
- **Links:** Twitter/X, GitHub, Telegram, LinkedIn — icon + text
- **Style:** Large touch targets (min 48px), underline on hover
- **No:** Contact form, email field, newsletter signup

### Footer

- Minimal: copyright + "Built with OpenClaw" + top-of-page link
- Height: ~80px

---

## 5. Component Inventory

### `<NavBar>`
| State | Appearance |
|-------|------------|
| Default | Transparent bg, border-bottom appears on scroll |
| Scrolled | `backdrop-filter: blur(12px)`, `background: oklch(98% 0.01 90 / 0.8)` |
| Mobile open | Full-screen overlay, links centered, staggered fade-in |

### `<HeroTagline>`
| State | Appearance |
|-------|------------|
| Loading | Invisible |
| Playing | Characters reveal sequentially via pretext |
| Complete | Static after animation, accessible |

### `<CurrentlyItem>`
| State | Appearance |
|-------|------------|
| Default | Inline tag, subtle border |
| Hover | Border darkens, cursor pointer |

### `<BlogCard>`
| State | Appearance |
|-------|------------|
| Default | White bg, subtle shadow, 16px radius |
| Hover | translateY -4px, shadow increases |
| Focus | Orange outline (accessibility) |

### `<ProjectCard>`
| State | Appearance |
|-------|------------|
| Default | Screenshot + text, clean border |
| Hover | Screenshot scale 1.02, shadow lifts |
| Tag: Live | Green dot indicator |
| Tag: Beta | Orange dot indicator |
| Tag: Experimental | Gray dot indicator |

### `<SocialLink>`
| State | Appearance |
|-------|------------|
| Default | Icon + text, muted |
| Hover | Text becomes accent color, underline |
| Focus | Orange outline |

### `<Button>` (optional — used sparingly)
| State | Appearance |
|-------|------------|
| Default | Accent bg, white text, 8px radius |
| Hover | Darker accent bg |
| Disabled | 50% opacity, no pointer |
| Focus | Orange outline |

### `<ScrollIndicator>`
| State | Appearance |
|-------|------------|
| Visible | Bouncing chevron, bottom of hero |
| Hidden | Fades out after scroll begins |

---

## 6. Accessibility Requirements

**Target:** WCAG 2.2 AA minimum, targeting AAA for contrast on key elements.

### Color Contrast
- Body text (--color-text-primary on --color-bg-primary): 12.5:1 ✓
- Large text (headings): 7:1+ ✓
- Interactive elements: 4.5:1+ ✓

### Keyboard Navigation
- All interactive elements focusable via Tab
- Focus order follows visual DOM order
- Custom focus styles (orange ring, 2px offset)
- Skip-to-content link (hidden until focused)

### Screen Readers
- Semantic HTML5 landmarks: `<header>`, `<nav>`, `<main>`, `<footer>`, `<article>`, `<section>`
- Section headings: proper h1→h2→h3 hierarchy
- Images: descriptive alt text (NOT "screenshot" — describe what it shows)
- Links: meaningful text (no "click here")

### Motion & Animation
- `prefers-reduced-motion`: Disable kinetic hero, simplify transitions to opacity-only
- No auto-playing videos or looping animations beyond the hero tagline
- Scroll-triggered animations: gentle, non-jarring

### Forms (none on this site, but if added)
- Labels associated with inputs
- Error messages linked via `aria-describedby`
- Required fields marked in text, not color alone

---

## 7. Performance Targets

| Metric | Target | Strategy |
|--------|--------|----------|
| **LCP** | < 1.5s | Preload Fraunces, LCP image (portrait) in srcset |
| **FID** | < 50ms | Vanilla JS, no heavy frameworks |
| **CLS** | < 0.05 | Font-display: swap, explicit image dimensions |
| **Total JS** | < 50KB gzipped | GSAP (25KB) + Lenis (4KB) + pretext (12KB) |
| **Total CSS** | < 15KB | Single stylesheet, no utility framework |
| **Fonts** | 3 fonts, 6 weights max | Fraunces (200, 400) + Literata (300, 400) + JetBrains Mono (400) |
| **Images** | WebP/AVIF, lazy-load below fold | Hero portrait: eager, others: lazy |
| **TTFB** | < 200ms | Static HTML, no SSR needed |
| **HTTP requests** | < 20 | Inlined critical CSS, font subsetting |

### Font Loading Strategy
```html
<!-- Preload most critical font -->
<link rel="preload" href="/fonts/fraunces-200.woff2" as="font" type="font/woff2" crossorigin>
<!-- Font display swap to avoid FOIT -->
<style>
  @font-face {
    font-family: 'Fraunces';
    font-display: swap;
  }
</style>
```

### Image Strategy
- Hero portrait: AVIF primary, WebP fallback, 2x for retina
- Project screenshots: WebP, width-constrained, lazy-loaded
- No GIFs or heavy assets

---

## 8. File Structure

```
tylerdotai/
├── index.html          # Main page
├── rss.xml             # Blog RSS feed (generated)
├── SPEC.md             # This file
├── css/
│   └── styles.css      # Single stylesheet
├── js/
│   ├── main.js         # Core: smooth scroll, nav, intersection observer
│   ├── lenis.js        # Lenis smooth scroll init
│   ├── gsap.js         # GSAP + ScrollTrigger init (or motion)
│   └── pretext.js      # Kinetic typography init
└── assets/
    ├── portrait.avif   # Tyler's photo
    ├── screenshots/
    │   ├── agent-hosting.avif
    │   ├── clawplex.avif
    │   ├── client-portal.avif
    │   └── agent-to-agent-sms.avif
    └── icons/
        ├── twitter.svg
        ├── github.svg
        ├── telegram.svg
        └── linkedin.svg
```

---

## 9. Motion Design Specification

### Hero Kinetic Typography
- **Library:** `@chenglou/pretext`
- **Trigger:** Page load after fonts + hero section in view
- **Animation:** Character-by-character reveal
- **Timing:** 30ms per character, ease-out
- **Loop:** Plays once on load, not repeated

### Scroll-Triggered Section Entrances
- **Library:** GSAP ScrollTrigger OR CSS scroll-driven animations
- **Elements:** Section headings, paragraphs, cards
- **Animation:** `opacity: 0 → 1`, `translateY: 20px → 0`
- **Duration:** 600ms, ease-out
- **Stagger:** 80ms between siblings
- **Threshold:** Trigger when 15% of element is visible

### Nav Scroll-Spy
- **Library:** Native Intersection Observer
- **Behavior:** Active nav link gets underline accent color
- **Threshold:** Section 50% in viewport

### Hover States
- **Cards:** `transform: translateY(-4px)`, shadow increases, 200ms ease
- **Links:** Underline grows from center via `transform: scaleX(0 → 1)`
- **Buttons:** Background darkens, `transform: scale(1.02)`, 200ms

### Smooth Scroll (Lenis)
- Duration: 1.2s
- Easing: `ease-out`
- Touch multiplier: 1.5 (for mobile)
- Disabled when `prefers-reduced-motion: reduce`

### CSS View Transitions (Progressive Enhancement)
- Section navigation: fade + slide
- `<nav view-transition-name: nav>`
- `<main view-transition-name: main-content>`

---

## 10. RSS Feed

**Path:** `/rss.xml`
**Standard:** RSS 2.0
**Fields per item:**
- `title`
- `link`
- `description` (full content or excerpt)
- `pubDate`
- `guid` (unique per post)

**Example:**
```xml
<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
  <channel>
    <title>Tyler — tylerdotai.com</title>
    <link>https://tylerdotai.com</link>
    <description>IT Pro. AI Builder. Homesteader.</description>
    <language>en-us</language>
    <item>
      <title>Why I Built agent-hosting</title>
      <link>https://tylerdotai.com/blog/why-i-built-agent-hosting</link>
      <description>First principles on AI agent deployment...</description>
      <pubDate>Sun, 29 Mar 2026 00:00:00 GMT</pubDate>
      <guid>https://tylerdotai.com/blog/why-i-built-agent-hosting</guid>
    </item>
  </channel>
</rss>
```

---

## 11. Implementation Notes

1. **Start mobile-first CSS** — design for small screen, add complexity at breakpoints
2. **Font subsetting** — only load characters needed for headlines (Fraunces is large)
3. **No analytics until needed** — site doesn't need Plausible/GA at launch
4. **Real content first** — write Tyler's actual blog posts before launch, not lorem ipsum
5. **Prefer CSS native** — use `animation-timeline: scroll()` before GSAP where possible
6. **Kinetic hero fallback** — if pretext fails to load, show tagline statically (no error)

---

## 12. Out of Scope (Do Not Build)

- CMS or database (hardcoded HTML is fine for < 20 blog posts)
- Comments or guestbook
- Newsletter signup
- Contact form
- Dark/light mode toggle (site is light-first, one mode)
- Multiple authors
- E-commerce or payments
- A/B testing infrastructure

---

*SPEC.md complete. Build phase is a separate task.*
