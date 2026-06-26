# tylerdotai.com — SPEC.md
**Version:** 1.1
**Date:** 2026-06-26
**Framework:** Astro 7.0.x + Vite 8.x + TypeScript
**Hosting:** Vercel (auto-deploy from `tyler-site` repo)

---

## 1. Concept & Vision

tylerdotai.com is the hub for Tyler Delano's personal brand — a tinkerer of AI, a creative guy with a camera, and a collaborative community builder in DFW. The site introduces Tyler first, then routes visitors to the right vertical (builds, community, consulting, cause). It feels like a photographer's archive fused with an engineer's codebase — documentary realism meets production-grade code. Not another AI-slop landing page. Real content. Real photography. Real voice.

**Core message:** *"Tinkerer of AI, creative guy, collaborative community builder."*

---

## 2. Design Language

### Aesthetic Direction
Editorial + documentary. Think: a photographer's personal archive meets a serious developer's project page. Clean type hierarchy, real photography as the primary visual asset, warm natural tones. Not dark. Not neon. Not a startup template.

### Color Palette
| Role | Value | Usage |
|------|-------|-------|
| Background | `#FFFEF9` | Warm off-white — not stark white |
| Background alt | `#F7F4EE` | Section differentiation |
| Text primary | `#1A1A1A` | Near-black, not pure black |
| Text muted | `#6B6B6B` | Captions, metadata |
| Accent | `#FF6B00` | CTAs, links, highlights — established brand orange |
| Accent hover | `#E65A00` | Darker orange on interaction |
| Border | `#E8E4DC` | Subtle warm gray |
| Surface | `#FFFFFF` | Cards, elevated surfaces |

### Typography
| Role | Font | Fallback |
|------|------|----------|
| Headings | `Georgia`, serif | `Times New Roman`, serif |
| Body | `system-ui`, sans-serif | `-apple-system`, `BlinkMacSystemFont`, `Segoe UI` |
| Monospace | `ui-monospace`, `Menlo`, monospace | `Consolas`, `Monaco` |
| Accent/labels | `system-ui` uppercase tracking | — |

**Scale:**
- Hero: 4rem / 64px
- H1: 2.5rem / 40px
- H2: 1.75rem / 28px
- H3: 1.25rem / 20px
- Body: 1rem / 16px
- Small/caption: 0.875rem / 14px

### Spatial System
- Base unit: 4px
- Section padding: 80px vertical (desktop), 48px (mobile)
- Container max-width: 1120px
- Grid: 12-column, 24px gap
- Card padding: 24px
- Border radius: 4px (subtle, not rounded)

### Motion Philosophy
Minimal. No entrance animations, no scroll-triggered flourishes, no parallax. Fast load, instant navigation. Motion only for:
- Link/button hover: `color 150ms ease`, `background-color 150ms ease`
- Page transitions: none (Astro's default)
- Focus rings: `outline 2px solid #FF6B00`

### Visual Assets Strategy
**No stock photography. No AI-generated imagery. No generic illustrations.**

Photography assets owned by Tyler:
- ZV-E10 challenge photos (Days 1-3 confirmed, more coming)
- Homestead photos (dog, cats, chickens — confirmed)
- Portrait photography
- Desk setup

Videos embedded from local assets or X/Twitter embeds.

Favicon: Orange claw mark on warm white — SVG.

---

## 3. Layout & Structure

### Page Architecture
```
/                   — Home: Hero + About + Quick Links to all verticals
/builds             — Projects: Singularity, Agent Loop System, AIAgainstParkinson
/community          — Agent Builders Club: stats, nodes, events, links
/creative           — Filmmaking: ZV-E10 challenge, BTS, documentary
/parkinson          — AIAgainstParkinson: daily reports EN/ES, mission
/parkinson/es       — Spanish version of AIAgainstParkinson
```

### Navigation
- Sticky top nav, warm white background with subtle bottom border
- Logo (left): "tyler" in Georgia serif, orange accent on "dot"
- Links (right): Home, Builds, Community, Creative, Parkinson
- Mobile: hamburger menu, full-screen overlay

### Homepage Structure (visual order)
1. **Hero** — Name, tagline, one-line origin summary, portrait photo
2. **What I Build** — 3 cards (Singularity, Agent Loop System, AIAgainstParkinson)
3. **Community** — Agent Builders Club stats, one-line description
4. **Creative** — ZV-E10 challenge latest day, photo grid
5. **Connect** — GitHub, LinkedIn, X, Discord links
6. **Footer** — Minimal, copyright only

### Responsive Strategy
- Desktop-first (Tyler codes on desktop)
- Breakpoints: 1024px (tablet), 640px (mobile)
- Cards stack vertically below 768px
- Nav collapses to hamburger below 768px

---

## 4. Features & Interactions

### Global
- Static site, no JS by default except:
  - Mobile nav toggle (vanilla JS, ~10 lines)
  - Astro's built-in image optimization
- No analytics (privacy-first)
- No cookie banner (no cookies used)

### Home
- Hero with portrait photo (from `/creative` or Twitter)
- "What I Build" cards link to `/builds`
- "Community" section links to `/community`
- "Creative" section links to `/creative`

### Builds Page
- Project cards for each: Singularity, Agent Loop System, AIAgainstParkinson
- Each card: name, one-line description, tech stack tags, GitHub link
- AIAgainstParkinson card also links to `/parkinson`

### Community Page
- Agent Builders Club branding (not ClawPlex — renamed)
- Stats: 600+ members, 6 nodes, DFW
- Description of what the club is
- Links: Discord, X, LinkedIn, Events

### Creative Page
- "39-Day Sony ZV-E10 Challenge" header
- Day-by-day photo grid (Days 1-3 confirmed, placeholder for Day 4+)
- Caption and quote per day (from actual X posts)
- "No crew, no script" tagline under the series

### Parkinson Page
- Mission statement: daily AI research reports on Parkinson's
- Language toggle: EN / ES (Astro static routes `/parkinson` and `/parkinson/es`)
- Report archive placeholder (reports posting daily — state this)
- Link to subscribe (when subscribers exist)
- "Zero subscribers currently" — honest status

### Interactions
- External links open in new tab with `rel="noopener noreferrer"`
- All GitHub links use this pattern
- No forms (no contact form — link to LinkedIn for outreach)
- No newsletter signup (AIAgainstParkinson has its own flow)

### Edge Cases
- Missing photos: use CSS placeholder with orange accent and "Photo coming soon" text
- Broken external links: no 404 redirects — external links are user's responsibility
- Empty states: each section has real copy, no Lorem ipsum

---

## 5. Component Inventory

### `<BaseLayout>`
- `<head>` with meta: title, description, OG tags, canonical URL
- `<Header>` with nav
- `<slot />` for page content
- `<Footer>` with copyright

### `<Header>`
- Logo: "tyler<span style="color:#FF6B00">dot</span>ai" in Georgia serif
- Nav links (desktop): right-aligned
- Mobile: hamburger icon, full-screen nav overlay
- States: default, mobile-open

### `<Footer>`
- Copyright: `© 2026 Tyler Delano`
- No social links here (they're in Connect section)

### `<ProjectCard>`
- Props: name, description, techStack[], githubUrl
- Border: 1px solid `#E8E4DC`
- Hover: border-color shifts to `#FF6B00`
- GitHub link: icon + "View on GitHub"

### `<PhotoGrid>`
- CSS grid, 3 columns desktop, 2 tablet, 1 mobile
- Gap: 16px
- Each cell: `<img>` with alt text, lazy loading
- Missing photos: orange placeholder

### `<ChallengeDay>`
- Props: dayNumber, title, quote, quoteSource, imageSrc, alt
- Layout: image left, text right (desktop); stacked (mobile)
- Quote in italic serif

### `<LanguageToggle>`
- Two links: EN / ES
- No JS — just two static anchor links to `/parkinson` and `/parkinson/es`

### `<StatBadge>`
- Props: value, label
- Large number in accent orange, small label below

### `<ExternalLink>`
- Props: href, label, icon?
- `target="_blank" rel="noopener noreferrer"` always

### `<Button>`
- Variants: primary (orange bg), ghost (outline)
- Hover state: darker orange for primary, orange border for ghost
- No animation beyond color transition

---

## 6. Technical Approach

### Framework & Build
- **Astro 7.0.x** — static site generator, file-based routing, content collections
- **Vite 8.x** — build tool (Astro's default)
- **TypeScript** — strict mode
- **Tailwind CSS 4.x** — utility styling
- **@astrojs/tailwind** integration
- **@astrojs/sitemap** — auto-generated sitemap
- **@astrojs/rss** — RSS feed for AIAgainstParkinson (future)

### Project Structure
```
tyler-site/
├── public/
│   ├── favicon.svg
│   └── assets/
│       └── creative/          # ZV-E10 photos, videos
│       └── headshot.jpg        # Tyler's portrait
├── src/
│   ├── components/
│   │   ├── BaseLayout.astro
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── ProjectCard.astro
│   │   ├── PhotoGrid.astro
│   │   ├── ChallengeDay.astro
│   │   ├── LanguageToggle.astro
│   │   ├── StatBadge.astro
│   │   ├── ExternalLink.astro
│   │   └── Button.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── builds.astro
│   │   ├── community.astro
│   │   ├── creative.astro
│   │   ├── parkinson.astro
│   │   └── parkinson/
│   │       └── es.astro
│   ├── content/
│   │   └── config.ts          # Astro content collections config
│   └── styles/
│       └── global.css         # Tailwind base + custom properties
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
├── package.json
└── SPEC.md
```

### Testing Stack
- **Vitest** — unit tests for utility functions, content logic
- **Playwright** — smoke tests (page loads, no console errors, nav works, accessibility)
- **Coverage** — 80% minimum per phase

### CI Pipeline (GitHub Actions)
```yaml
on: [push, pull_request]
jobs:
  ci:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '22'
          cache: 'npm'
      - run: npm ci
      - run: npm run lint
      - run: npm run typecheck
      - run: npm test
      - run: npm run build
```

### i18n Strategy
- Static routes: `/parkinson` (EN) and `/parkinson/es` (ES)
- Content stored in frontmatter or separate `/content/parkinson/` EN/ES markdown files
- No runtime i18n library — Astro's static routing handles it

### Performance Targets
- Lighthouse Performance: 95+
- First Contentful Paint: <1s
- No layout shift (explicit image dimensions)
- No render-blocking resources

---

## 7. Content Inventory

### Home Page Copy
**Hero:**
> Tyler Delano
> Tinkerer of AI. Creative guy. Collaborative community builder.
> *Escape the queue. Build what matters.*

**What I Build section intro:**
> Open-source tools, daily research pipelines, and community infrastructure. Real systems that run in production.

**Community section:**
> Agent Builders Club — 600+ builders in DFW, 6 physical nodes, one mission: ship useful AI.

### Builds Page
**Singularity:**
> A production-grade AI agent harness built with Bun, TypeScript, SQLite, and a Solid.js TUI. 715 tests. Docker-ready. Zero magic.
> Stack: Bun · TypeScript · SQLite · Solid.js · Docker · GitHub Actions

**Agent Loop System:**
> Python + JSON contracts for orchestrating multi-agent loops with evaluator gates. Built for production safety harnesses.
> Stack: Python · JSON · Docker · GitHub Actions

**AIAgainstParkinson:**
> Daily automated research reports on Parkinson's disease, delivered in English and Spanish. Zero subscribers — reports posting daily.
> Stack: Python · Cron · EN/ES

### Community Page
**Agent Builders Club:**
> A community of builders, not spectators. DFW's largest AI meetup network — 600+ members across 6 nodes. Hackathons, streams, co-founder matching.
> Formerly ClawPlex. Category-first by design.

### Creative Page
**ZV-E10 Challenge header:**
> 39 days. One camera. No crew, no script.

**Day entries** — sourced from X posts:
- Day 1: Life on the homestead
- Day 2: "When I'm stumped, I press the shutter and see what happens"
- Day 3: Kitchen light, documentary framing
- Day 4+: Coming soon

### Parkinson Page
**Mission:**
> AIAgainstParkinson surfaces and summarizes the latest Parkinson's research every day — automatically. Built for patients, caregivers, and researchers who don't have time to read everything.
> Reports are posting daily. Currently in English and Spanish.

**EN/ES status:**
> This page reflects the English version. Spanish version: /parkinson/es

---

*SPEC.md is the source of truth. All build decisions trace back to this document. Update this first if the brief changes — no code changes without a spec update.*
