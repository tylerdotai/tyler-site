# tylerdotai.com — SPEC.md
**Version:** 3.0
**Date:** 2026-06-26
**Framework:** Astro 7.0.x + Vite 8.x + TypeScript
**Hosting:** Vercel

---

## 1. Current Direction

tylerdotai.com is Tyler Delano's personal brand hub and creative archive. The current visual direction is **Modern Y2K / Cyber-Y2K / Neo-Brutalist Interface**: high-contrast obsidian UI, neon signal colors, scanlines, wireframe panels, mono interface typography, and aggressive media-first composition.

The site must not feel like a recolored startup template. It should read like a high-end media terminal: nostalgic late-90s/early-2000s interface energy with modern performance and clean responsive behavior.

---

## 2. Non-Negotiables

- **No orange.**
- **No AI-generated visuals.**
- **No stock imagery.**
- **No fake filler content.**
- **No Chinese text.**
- **No mislabeled media.**
- **No duplicate visual rendering of the same byte-identical image.** Duplicate files may remain in assets, but the public vault should show each unique photo once.
- **Kitchen/video frames must be labeled as video stills/posters**, not standalone photos.
- Creative page is a selected media archive, not a challenge-feed dump.

---

## 3. Design System

| Role | Token |
|---|---|
| Background | `#05070A` obsidian |
| Surface | `#0B1018` / `#111827` |
| Border | `#263344` |
| Text | `#F2F7FF` |
| Muted text | `#8EA3B8` |
| Primary neon | `#00F5FF` digital cyan |
| Secondary neon | `#B6FF00` acid green |
| Tertiary neon | `#FF2BD6` hot magenta |
| Chrome | `#D7DEE8` |
| Display font | Orbitron |
| Body/interface font | JetBrains Mono |

UI should use:
- scanline overlay;
- retro grid background;
- hard rectangular interface panels;
- corner markers/crosshair energy;
- chrome gradient text only where it creates impact;
- no rounded friendly SaaS cards unless deliberately counterbalanced by Y2K interface details.

---

## 4. Creative Page Architecture

### Hero
- Video-backed hero using real ZV-E10/CapCut media.
- Big title: `SIGNAL VAULT` / visual archive framing.
- Media count module: photos + videos.

### The Vault
- Standalone photography only.
- All unique real photos currently available in the creative asset folder should be represented once.
- Labels must describe actual image content: portraits, cats, chickens, dog, roadside, desk/edit bay, rose, etc.
- Click expands image into a lightbox.

### The Reel
- Video work only.
- Video posters/stills are explicitly labeled as video stills/posters.
- Main video player with Cyber-Y2K custom control shell and thumbnail queue.
- MP4 sources only for browser playback.

### System Specs
- Creative profile presented as diagnostics/spec sheet.
- Include camera, edit stack, style, rule.

### Signal Transmit
- Social links and contact direction; no dead backend form.

---

## 5. Content Facts

- Tagline: `Tinkerer of AI, creative guy, collaborative community builder.`
- Agent Builders Club started in **2026**.
- Creative challenge is **30 days**, not 39.
- AIAgainstParkinson has zero subscribers and is a landing/reporting project only.

---

## 6. Verification Gate

Before push:

```bash
npm run check
npm test
npm run build
npm run test:e2e
```

Also verify in browser:
- no orange;
- no Chinese;
- all vault images visible;
- no duplicated byte-identical images shown twice;
- kitchen frame appears only as video still/poster;
- videos playable;
- layout works at desktop and mobile widths.
