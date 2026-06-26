# tylerdotai.com — SPEC.md
**Version:** 2.0
**Date:** 2026-06-26
**Framework:** Astro 7.0.x + Vite 8.x + TypeScript
**Hosting:** Vercel (auto-deploy from `tyler-site` repo)

---

## 1. Concept & Vision

tylerdotai.com is the hub for Tyler Delano's personal brand — a tinkerer of AI, a creative guy with a camera, and a collaborative community builder in DFW. The site feels like a photographer's archive fused with an engineer's codebase — documentary realism meets production-grade code. Dark, editorial, warm. Not bright. Not orange. Not a startup template.

**Core message:** *"Tinkerer of AI, creative guy, collaborative community builder."*

---

## 2. Design Language

### Aesthetic Direction
Dark editorial. Think: a filmmaker's personal archive meets a serious developer's project page. Dark backgrounds let real photography breathe. Warm gold as the only accent — restrained, not everywhere. Cormorant Garamond gives it literary weight; DM Sans keeps it clean.

Reference: dark-mode creative agencies, documentary film branding.

### Color Palette
| Role | Value | Usage |
|------|-------|-------|
| Background | `#0E0E0E` | Near-black, warmer than pure black |
| Surface | `#1A1A1A` | Cards, elevated elements, modals |
| Border | `#2A2A2A` | Subtle dividers |
| Text | `#F5F5F0` | Warm off-white — readable, not harsh |
| Text muted | `#888888` | Captions, metadata |
| Accent | `#C9A84C` | Warm gold — used sparingly: links on hover, focus rings, logo mark, one CTA |

**Zero orange anywhere.**

### Typography
| Role | Font | Fallback |
|------|------|----------|
| Headings | `Cormorant Garamond`, serif | Georgia, serif |
| Body | `DM Sans`, sans-serif | system-ui, sans-serif |
| Mono/labels | `ui-monospace`, monospace | Menlo, monospace |

**Scale:**
- Hero: 3.5rem / 56px (large, editorial)
- H1: 2.5rem / 40px
- H2: 1.75rem / 28px
- H3: 1.25rem / 20px
- Body: 1rem / 16px
- Small/caption: 0.875rem / 14px

### Spatial System
- Base unit: 4px
- Section padding: 80px vertical (desktop), 48px (mobile)
- Container max-width: 1120px
- Card padding: 24px
- Border radius: 2px (barely rounded — sharp, editorial)

### Motion Philosophy
Minimal. No entrance animations. Motion only for:
- Link/button hover: `color 150ms ease`, `opacity 150ms ease`
- Focus rings: `outline 2px solid #C9A84C`
- Image hover: `opacity 150ms ease` (not scale, not zoom — that's trendy)

### Visual Assets Strategy
**No stock photography. No AI-generated imagery. No generic illustrations.**
Photography is the primary visual asset — ZV-E10 challenge content on dark backgrounds.

Favicon: Gold "t" on dark background — SVG.

---

## 3. Layout & Structure

### Pages
```
/                   — Home: Hero + About + Quick Links to all verticals
/builds             — Projects: Singularity, Agent Loop System, AIAgainstParkinson
/community          — Agent Builders Club: stats, nodes, events, links
/creative           — Filmmaking: ZV-E10 challenge, photo gallery, documentary
/parkinson          — AIAgainstParkinson: daily reports EN/ES, mission
/parkinson/es       — Spanish version of AIAgainstParkinson
```

### Navigation
- Fixed top nav, dark background with subtle bottom border
- Logo (left): "tyler" in Cormorant Garamond serif, gold on "dotai"
- Links (right): Home, Builds, Community, Creative
- Mobile: hamburger, full-screen overlay

### Homepage Structure
1. **Hero** — Name, tagline, one-line origin summary
2. **What I Build** — 3 cards (Singularity, Agent Loop System, AIAgainstParkinson)
3. **Community** — Agent Builders Club stats, one-line description
4. **Creative** — ZV-E10 challenge latest day, single featured photo
5. **Connect** — GitHub, LinkedIn, X, Discord links
6. **Footer** — Minimal, copyright only

### Responsive Strategy
- Desktop-first
- Breakpoints: 1024px (tablet), 640px (mobile)
- Cards stack vertically below 768px
- Nav collapses to hamburger below 768px

---

## 4. Features & Interactions

### Global
- Static site, minimal JS (mobile nav toggle only)
- No analytics, no cookies
- No newsletter forms

### Interactions
- External links open in new tab with `rel="noopener noreferrer"`
- Gold accent on hover for links and interactive elements
- No animations beyond color transitions

### Edge Cases
- Missing photos: dark placeholder with gold border accent
- Empty states: real copy, no Lorem ipsum

---

## 5. Component Inventory

### `<BaseLayout>`
- `<head>` with meta: title, description, OG tags, canonical URL
- Cormorant Garamond + DM Sans from Google Fonts
- Dark background

### `<Header>`
- Logo: "tyler<span style="color:#C9A84C">dot</span>ai" in Cormorant Garamond
- Nav links (desktop): right-aligned, DM Sans
- Mobile: hamburger icon, full-screen overlay on dark
- States: default, mobile-open

### `<Footer>`
- Copyright: `© 2026 Tyler Delano`
- Connect links: GitHub, LinkedIn, X, Discord — gold on hover

### `<ProjectCard>`
- Props: name, description, techStack[], githubUrl
- Background: `#1A1A1A`, border: 1px solid `#2A2A2A`
- Hover: border-color shifts to `#C9A84C`

### `<PhotoGrid>` (creative page)
- 2-column on mobile, 3-column on desktop
- Larger images — let photography breathe
- Gap: 16px

### `<ChallengeDay>`
- Props: dayNumber, title, quote, quoteSource, imageSrc, alt
- Full-width image with text overlay or side-by-side on desktop

### `<StatBadge>`
- Props: value, label
- Large number in `#C9A84C` (gold), label in muted text

### `<Button>`
- Variants: primary (gold bg + dark text), ghost (gold border + gold text)
- Hover: opacity shift

---

## 6. Technical Approach

### Framework & Build
- **Astro 7.0.x** — static site, file-based routing
- **Vite 8.x** — build tool (Astro default)
- **TypeScript** — strict mode
- **Tailwind CSS 4.x** — utility styling with `@tailwindcss/vite`
- **@astrojs/sitemap** — auto-generated sitemap
- **@astrojs/tailwind** — removed (incompatible with Astro 7, use Vite plugin)

### Project Structure
```
tyler-site/
├── public/
│   ├── favicon.svg
│   └── assets/
│       └── creative/          # ZV-E10 photos, videos
├── src/
│   ├── components/
│   ├── layouts/
│   ├── pages/
│   └── styles/
│       └── global.css         # Tailwind base + custom properties
├── astro.config.mjs
├── tsconfig.json
├── package.json
└── SPEC.md
```

### Testing Stack
- **Vitest** — unit tests
- **Playwright** — smoke tests (page loads, nav works)
- **Coverage** — 80% minimum

### CI Pipeline (GitHub Actions)
```
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
      - run: npm run check
      - run: npm test
      - run: npm run build
      - run: npx playwright install --with-deps chromium
      - run: npm run test:e2e
```

---

## 7. Content Inventory

### Home Page Copy
**Hero:**
> Tyler Delano
> Tinkerer of AI. Creative guy. Collaborative community builder.

**What I Build:**
> Open-source tools, daily research pipelines, and community infrastructure. Real systems that run in production.

**Community:**
> Agent Builders Club — 600+ builders in DFW, 6 physical nodes, one mission: ship useful AI.

### Builds Page
**Singularity:**
> A production-grade AI agent harness built with Bun, TypeScript, SQLite, and a Solid.js TUI.
> Stack: Bun · TypeScript · SQLite · Solid.js · Docker · GitHub Actions

**Agent Loop System:**
> Python + JSON contracts for orchestrating multi-agent loops with evaluator gates.
> Stack: Python · JSON · Docker · GitHub Actions

**AIAgainstParkinson:**
> Daily automated research reports on Parkinson's disease, in English and Spanish.
> Stack: Python · Cron · EN/ES

### Community Page
**Agent Builders Club:**
> A community of builders, not spectators. DFW's largest AI meetup network — 600+ members across 6 nodes.
> Formerly ClawPlex. Category-first by design.

### Creative Page
**ZV-E10 Challenge:**
> 30 days. One camera. No crew, no script.

### Parkinson Page
**Mission:**
> AIAgainstParkinson surfaces and summarizes the latest Parkinson's research every day — automatically. Built for patients, caregivers, and researchers who don't have time to read everything.

---

*SPEC.md is the source of truth. All build decisions trace back to this document. Update this first if the brief changes — no code changes without a spec update.*
