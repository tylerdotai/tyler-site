# CREATIVE BRIEF — tylerdotai.com Rebuild

**Project:** tylerdotai.com personal site rebuild
**Location:** `~/tyler-build/` (build here first; moves to `~/flume/tyler-site/` on approval)
**GitHub:** tylerdotai/tyler-site
**Creative Director:** Hoss (co-founder, Flume SaaS Factory)
**Date:** 2026-03-29
**Status:** Approved — locked, build from this document
**Directive:** Full build. Not MVP. Not phased. Everything described here ships.

---

## 1. VIBE & REFERENCES

### Primary Reference: bryantcodes.art
- Interactive, alive — the page responds to you
- Custom cursor with contextual states (nav vs text vs buttons)
- High craft, low noise — every pixel deliberate
- Technical but warm — it's a dev portfolio that feels like a person, not a resume
- Physics-simulated typography, WebGL canvas, custom cursor, CSS glitch transitions

### Secondary Reference: peteroravec.com
- Custom cursor with personality — not just functional, but memorable
- Page-load animation that sets the tone before you read anything
- Dark, confident, bold — restraint without being sterile
- Every micro-interaction has a response

### Fusion Direction
**The "Alive Pages" aesthetic.** Tyler's site should feel like it has a pulse — the page isn't static decoration, it *responds* to you. The claw motif is the signature — not a logo you glance at, but an interactive presence. Dark, kinetic, bold. Not a portfolio. Not a blog. Something that makes you go "woah."

The claw *acts*. It scratches, it reveals, it marks its presence. Not a logo buried in a footer — an interactive element you feel.

---

## 2. COLOR DIRECTION

**Dark only. No toggle.**

Why:
- The agent-node canvas background (pulsing white/silver nodes) requires a dark canvas to read
- Dark is bold and confident — the orange claw scratches pop on it, just like peteroravec.com's white elements pop on dark
- Fraunces and Literata have more personality on dark backgrounds (serifs pop, contrast is intentional)
- Flume orange (#ff6b00) has maximum impact on dark — reads as energy, not error
- Single mode eliminates complexity and keeps the experience tight

### Full Palette
| Role | Color | Hex |
|------|-------|-----|
| Background | Near-black | `#0a0a0a` |
| Surface | Dark gray | `#141414` |
| Surface elevated | Charcoal | `#1e1e1e` |
| Text primary | Off-white | `#f0f0f0` |
| Text secondary | Silver | `#a0a0a0` |
| Accent (Flume orange) | Orange | `#ff6b00` |
| Claw scratch | Orange | `#ff6b00` |
| Agent nodes | White/silver | `#e0e0e0` / `#808080` |

---

## 3. THE HERO MOMENT

### First Load Sequence
This is the first thing every visitor sees. It must land.

**Step 1 — Black screen** (0ms)
Full viewport black. No loading spinner. No text yet.

**Step 2 — Claw reveal** (200ms delay after page paint)
Three orange claw scratches animate across the screen in sequence:
- Claw 1: Top-left diagonal, sweeps down-right
- Claw 2: Middle diagonal, sweeps up-right (overlapping the first, forming a "claw mark")
- Claw 3: Bottom diagonal, sweeps down-right

Animation specs:
- Zigzag path: not straight lines — jagged, fast, decisive (3 segments per scratch)
- Easing: `cubic-bezier(0.68, -0.55, 0.27, 1.55)` — hard overshoot, settle into position
- Duration: 400ms per scratch, 150ms stagger between scratches
- Color: Flume orange `#ff6b00` with subtle glow `box-shadow: 0 0 20px rgba(255,107,0,0.4)`
- After animation: scratches fade to 20% opacity and remain as permanent subtle marks (burned in)

**Step 3 — Content reveal** (after claw animation completes, ~1200ms total)
Hero text fades in. Simultaneous, not staggered. The claws revealed the space; the content fills it.

### Agent-Node Canvas Background
Continuous ambient layer behind all content:
- 40–60 nodes scattered across viewport, varying sizes (2px–6px radius)
- Nodes pulse: opacity oscillates 0.3→0.8 on a sine wave, each node with a random phase offset
- Nodes are connected by faint lines (opacity 0.05–0.15) when within 150px — feels like a neural network or agent mesh
- Nodes drift slowly (random walk, max 0.5px/frame) — alive, not frozen
- Color: white/silver (#e0e0e0 and #808080) — clean, high-contrast against dark, subtle glow
- Performance: `requestAnimationFrame`, throttled, 60fps target
- Canvas is behind all content (`z-index: -1`), content remains fully readable

### Claw Scratch Interaction (Post-load)
**Trigger:** Mouse click + drag anywhere on the page
**Effect:** As you drag, orange claw marks appear along the drag path
- Scratch width: 25px
- Opacity: 0.4 (subtle, not aggressive)
- Feels sharp, immediate, physical — the claw *acted*
- Scratch marks persist for 3 seconds, then fade out over 500ms
- Click without dragging: a single point scratch (a mark of presence)
- Desktop only. Mobile graceful degradation (touch = single scratch, no drag)

### Cursor Context States
The cursor changes state based on what it's hovering:

| Context | Cursor State |
|---------|-------------|
| Default / background | Small glowing orange dot (4px, subtle glow) |
| Over nav links | Dot expands + "CLAW" label appears beside it |
| Over buttons | Dot becomes a ring (pulsing) |
| Over text / body copy | Dot shrinks to 2px, becomes muted |
| Over canvas background | Cursor hidden (let the nodes breathe) |
| During click-drag | Crosshair mode, scratch marks trail |

---

## 4. MOTION PHILOSOPHY

**Rule: Motion has intent. If it moves, it means something.**

- **Entrances:** No generic fade-in-on-scroll. Content is there on load or responds to user action. Scroll-triggered animations are banned unless Tyler specifically requests them.
- **The claw is the motion signature.** Everything claw-related uses the zigzag overshoot curve. Everything else is clean and fast (150–300ms, ease-out or ease-in-out).
- **Canvas is ambient.** The agent-node background is never the focus — atmosphere. Ignorable if you're not looking for it, noticed if you are.
- **Cursor changes are instant** (0ms transition) — context snaps, not glides.
- **Respect reduced-motion.** All animations respect `prefers-reduced-motion`: reduce to instant or static states.

---

## 5. TYPOGRAPHY

**Keep Fraunces + Literata + JetBrains Mono. Already scaffolded.**

| Role | Font | Weight | Notes |
|------|------|--------|-------|
| Display / headings | Fraunces | 700–900 | High personality, optical size responsive |
| Body / reading | Literata | 400–500 | Book-like, comfortable for longer reads |
| Code / technical | JetBrains Mono | 400 | Monospace for agent/terminal elements |

**Type scale:**
- Display: 5xl–7xl (responsive)
- H1: 4xl
- H2: 3xl
- Body: base–lg
- Small / meta: sm

**Line heights:** Relaxed (1.7 for body). Should breathe.

---

## 6. ANTI-PATTERNS — WHAT WE'RE NOT DOING

Explicitly out of scope:

- ❌ **Generic fade-in-on-scroll** — content appears on load or on interaction, not as you scroll
- ❌ **Colored cursor trail** — cursor is a dot/ring, not a paintbrush
- ❌ **Light mode** — dark only
- ❌ **Hero video or large media files** — canvas + CSS only, keep it fast
- ❌ **Parallax scrolling** — decorative motion without purpose
- ❌ **Testimonial carousels** — static, confident layout
- ❌ **Floating decorative elements** — the canvas IS the decoration
- ❌ **Contact form as primary CTA** — direct links (GitHub, X, email)
- ❌ **Blog section on launch** — ship the home page and a clear CTA first
- ❌ **Cookie banners / analytics on launch** — minimal, fast, no popups
- ❌ **Terminal / hacker aesthetic** — we're not going for that vibe

---

## 7. TECH IMPLICATIONS FOR BUILDER

### Canvas Layer
- `<canvas>` element with `position: fixed`, `z-index: -1`, full viewport
- Vanilla JS with `requestAnimationFrame` — no Three.js (overkill, adds weight)
- Node positions in a simple array, updated each frame
- Random walk: each node has a velocity vector, updates by ±0.5px/frame with damping
- Connection lines: check distance between all node pairs, draw lines for those < 150px apart
- Performance target: 60fps on mid-range hardware

### Claw Scratch Effect
- Track `mousedown` + `mousemove` + `mouseup` events
- On drag: add scratch marks to a scratch-layer `<div>` with `pointer-events: none`
- Scratch marks are SVG paths or canvas-drawn — the 3-prong claw shape
- CSS `will-change: transform` on scratch elements for GPU acceleration
- Fade out via CSS transition after 3s timeout

### Page-Load Claw Reveal
- Pure CSS animation triggered on first render
- Three SVG paths for the claw scratches
- `cubic-bezier(0.68, -0.55, 0.27, 1.55)` on each
- After animation: add class that fades opacity to 0.2, switches to `position: absolute` so content flows normally
- Use flag in `sessionStorage` so this only fires once per session (not on every SPA navigation)

### Custom Cursor
- Hide native cursor (`cursor: none` on `body`)
- Render a custom `<div>` that follows `mousemove` (no lag — direct follow, no lerp)
- State managed via `mouseover` event delegation
- No cursor on touch devices

### Fonts
- Fraunces + Literata + JetBrains Mono loaded via next/font or Google Fonts

---

## 8. SITE SECTIONS

Complete sections for the full build:

1. **Hero** — Tyler's name/wordmark, strong primary headline, secondary line, CTAs to projects/writing/social
2. **Current Focus / Now** — What Tyler is actively working on right now (building, living, learning) — feels alive, not archived
3. **About** — Human context without being a biography dump; IT pro + AI builder + homesteader
4. **Projects** — agent-hosting, clawplex, client-portal, agent-to-agent-sms with real descriptions and links
5. **Beliefs / Point of View** — Sharp, opinionated statements (not generic manifesto)
6. **Connect** — X, GitHub, LinkedIn, Telegram with meaningful labels
7. **Footer** — Minimal, finished, name + copyright + back-to-top

---

## 9. FULL BUILD SCOPE

Everything in this brief ships. Builder does not skip features.

**This is the complete vision. Build it all at once.**

---

## 10. WHAT SUCCESS LOOKS LIKE

When this site is done:
- The page-load claw reveal makes every first visitor stop and say "woah"
- The canvas background feels alive without being distracting
- Clicking and dragging anywhere leaves orange claw marks — the page responds to you
- The cursor changes context as you move around — it feels aware
- Dark, bold, confident — unmistakably Tyler's site
- Not a single generic fade-in-on-scroll in sight

The final reaction: **"Yeah — this is exactly the kind of guy building agent teams at 2am."**

---

## SIGN-OFF

This brief is the source of truth. Builder implements everything described. Creative director reviews at 50% and 90%. No feature gets cut without Tyler's explicit approval.

— Hoss ⚡
