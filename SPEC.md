# MASTER PROMPT: TYLERDOTAI.COM — BOLD NEO-BRUTALISM AUDIT & FIX

## BEFORE ANYTHING: READ THESE FILES

Every time you touch this site, you MUST read and cross-reference:
1. `~/.hermes/memories/MEMORY.md` — user preferences
2. `/home/tyler/tyler-site/SPEC.md` — design system spec (this file)
3. `/home/tyler/tyler-site/src/styles/global.css` — current CSS variables and classes
4. The specific page file you're editing

Do NOT make color decisions from memory. The palette lives in SPEC.md and global.css.

---

## PALETTE — LOCKED, DO NOT DEVIATE

| Token | Hex | Use | NEVER use |
|-------|-----|-----|-----------|
| `ground` | `#E6E6E6` | Page background (light) | `#0A0A0A`, `#111111`, `#333333` |
| `ink` | `#212121` | Text, borders, dark sections | `#0A0A0A`, `#333333`, `#555555` |
| `signal` | `#FF3D00` | CTAs, active states, emphasis | `#CCFF00`, `#FF6B00`, `#FFAA00` |
| `electric` | `#00B0FF` | Links, secondary accents | `#0055FF`, `#0066FF` |
| `white` | `#FFFFFF` | Reversed text on dark | — |
| `muted` | `#555555` | Secondary text on light bg | `#888888`, `#AAAAAA`, `#CCCCCC` |

**Signal vs Electric rules:**
- `#FF3D00` (signal) → CTAs, active nav, hover states, section labels, stat numbers, primary emphasis
- `#00B0FF` (electric) → links (`<a>` tags), secondary badges, video labels
- Dark section backgrounds → `#212121` only
- Light section backgrounds → `#E6E6E6` or `#FFFFFF`

**Forbidden colors — ZERO tolerance:**
- `#0A0A0A` — everywhere, no exceptions
- `#111111` — everywhere, no exceptions
- `#333333` — use `#212121` for borders
- `#CCFF00` / `#AAE000` — old lime accent, gone
- `#0055FF` / `#0066FF` — old blue, gone
- `#FFFF00` / `#FFE600` — old yellow, gone
- `#888888` / `#AAAAAA` / `#CCCCCC` — muted text on LIGHT backgrounds ONLY; on DARK backgrounds use `#E6E6E6` or `#FFFFFF`

---

## TYPOGRAPHY RULES

### Fonts
| Role | Font | Fallback |
|------|------|----------|
| Display | `'Bebas Neue'` | `'Arial Black', Impact, sans-serif` |
| Body | `'Space Grotesk'` | `system-ui, sans-serif` |
| Mono | `'Space Mono'` | `ui-monospace, monospace` |

**NEVER use:** Syne, JetBrains Mono (replaced by Space Mono), Fraunces, Source Serif 4.

### Type Scale
```css
--text-hero:   clamp(5rem, 14vw, 12rem);  /* Bebas Neue — page titles */
--text-h1:     clamp(2.5rem, 6vw, 5rem);   /* Bebas Neue */
--text-h2:     clamp(1.75rem, 4vw, 3rem);  /* Bebas Neue */
--text-h3:     clamp(1.25rem, 2.5vw, 1.75rem); /* Space Grotesk 700 */
--text-body:   1.0625rem;  /* Space Grotesk 400 */
--text-sm:     0.875rem;  /* Space Grotesk 400 */
--text-xs:     0.75rem;   /* Space Mono — labels, metadata */
```

### Display text rules
- H1, H2, page titles: ALWAYS `font-family: 'Bebas Neue'`, `text-transform: uppercase`, `font-weight: 400`
- Body text: `Space Grotesk`, sentence case
- Labels/metadata: `Space Mono`, UPPERCASE, `letter-spacing: 0.1em`
- NO italic in UI (only for hand-written accents if any)

---

## NEO-BRUTALIST MECHANICS

### Borders
- Default: `3px solid #212121`
- Heavy: `4px solid #212121`
- ZERO border-radius — no exceptions

### Shadows
- Default card: `box-shadow: 4px 4px 0 #212121`
- Hover: `box-shadow: 7px 7px 0 #212121; transform: translate(-3px, -3px)`
- Signal accent shadow: `box-shadow: 4px 4px 0 #FF3D00`
- Electric accent shadow: `box-shadow: 4px 4px 0 #00B0FF`
- NO blur, NO opacity — solid offset only

### Hover states
- Cards: translate(-3px, -3px) + bigger shadow
- Buttons primary: bg becomes `#212121`, text becomes `#FFFFFF`
- Buttons ghost: bg becomes `#212121`, text becomes `#FFFFFF`
- Links: color → `#00B0FF` (electric), underline

---

## CONTRAST RULES — NON-NEGOTIABLE

### Light background (`#E6E6E6` or `#FFFFFF`)
- Body text: `#212121`
- Muted text: `#555555`
- Links: `#00B0FF`

### Dark background (`#212121`)
- Body text: `#FFFFFF` or `#E6E6E6`
- Muted text: `#AAAAAA` or `#E6E6E6`
- NEVER: `#555555`, `#888888`, `#AAAAAA` on `#212121` — this is unreadable

### Signal accent (`#FF3D00`) on dark
- Works fine as accent — stat numbers, labels, borders

### Electric (`#00B0FF`) on dark
- Works fine as link color on dark backgrounds

**COMMON ERROR:** `color:#888888` on `background:#0A0A0A` or `background:#212121` — THIS IS UNREADABLE. Fix: use `#E6E6E6` or `#FFFFFF` for text on dark backgrounds.

---

## PAGE-BY-PAGE AUDIT CHECKLIST

### BaseLayout.astro
- [ ] `<body>` background: `#E6E6E6` (ground) — NOT `#0A0A0A`
- [ ] No inline styles on `<body>`

### index.astro (HOME)
- [ ] Hero section: `background:#212121`, text `#FFFFFF`
- [ ] All section backgrounds: `#E6E6E6` — NO `#0A0A0A` anywhere
- [ ] All section borders: `border-[#212121]`
- [ ] Section labels: `color:#FF3D00` (signal)
- [ ] H3 headings: `font-family:'Bebas Neue'`, `color:#212121`
- [ ] Stats section cards: white background `#FFFFFF`, stat numbers `color:#FF3D00`
- [ ] Dark stat card (`background:#0A0A0A`): REPLACE with `background:#212121` + text `#FFFFFF`
- [ ] Link color: `#00B0FF` (electric) — NOT `#CCFF00`
- [ ] Tag/label backgrounds: `#212121` with `#FFFFFF` text — NOT `#0A0A0A`
- [ ] `#CCFF00` anywhere → replace with `#FF3D00` (signal) for emphasis or `#00B0FF` (electric) for links
- [ ] `#888888` text on dark bg → `#E6E6E6`
- [ ] `#AAAAAA` text → `#212121` on light, `#E6E6E6` on dark
- [ ] `Syne` anywhere → `Bebas Neue`
- [ ] `JetBrains Mono` anywhere → `Space Mono`
- [ ] CTA buttons: `.btn-primary` class (signal fill)

### builds.astro
- [ ] Page title: `font-family:'Bebas Neue'`, `text-transform:uppercase`
- [ ] Background: `#E6E6E6`
- [ ] Cards: white `#FFFFFF`, border `3px solid #212121`
- [ ] Tags: `.tag` or `.tag-signal` class
- [ ] `#0A0A0A` → `#E6E6E6` or `#212121`

### community.astro
- [ ] Stats row: `.brutal-stat` (white bg, border), `.stat-number` (signal red)
- [ ] Next event card: `.card-signal` (signal shadow)
- [ ] Past events photo containers: dark `#212121` overlay, white text labels
- [ ] Section labels: `.section-label` (signal)
- [ ] `#888888` text on dark → `#E6E6E6`
- [ ] No `#CCFF00` — use `#FF3D00` or `#00B0FF`

### creative.astro
- [ ] Hero: `#212121` dark vault
- [ ] `.vault-card`: white bg, 3px ink border, hover shadow `#FF3D00`
- [ ] Metadata: `#00B0FF` electric links
- [ ] CTAs: `.btn-primary`
- [ ] Labels: `Space Mono`, uppercase
- [ ] No `#0A0A0A` — use `#212121`

### Header.astro
- [ ] Background: `#212121` solid
- [ ] Nav links: white `#FFFFFF`, uppercase
- [ ] Active: `#FF3D00` text + signal underline
- [ ] Hover: signal underline animation
- [ ] Logo: `@TYLERDOTAI` in Bebas Neue

### Footer.astro
- [ ] Background: `#212121`
- [ ] Text: `#FFFFFF` / `#E6E6E6`
- [ ] Social links: white → `#FF3D00` on hover
- [ ] Copyright: `© {year} @tylerdotai` in Space Mono

### parkinson/index.astro + parkinson/es.astro
- [ ] Background: `#E6E6E6`
- [ ] Dark title section: `#212121` with white text
- [ ] CTAs: `.btn-primary`

---

## SMOKE TEST — RUN AFTER EVERY CHANGE

```bash
cd /home/tyler/tyler-site
npm run build        # must succeed
npm run test:e2e    # must be 11/11
```

## COLOR AUDIT COMMAND

After any color change, run this to catch any remaining stale values:

```bash
grep -rn "#0A0A0A\|#111111\|#CCFF00\|#333333\|#888888\|Syne\|JetBrains" src/ --include="*.astro" --include="*.css" | grep -v "node_modules"
```

Every match must be an intentional design choice or a commented note. Zero unaccounted matches.

---

## WHAT "GOOD" LOOK LIKE

### index.astro stats section (CORRECT):
```astro
<!-- Stats row: 3 equal white cards -->
<div class="flex gap-0" style="background:#FFFFFF;">
  <div class="brutal-stat flex-1 p-6">
    <span class="stat-number">600+</span>
    <span class="stat-label">Members</span>
  </div>
  <!-- border-right: 3px solid #212121 -->
  <div class="brutal-stat flex-1 p-6">
    <span class="stat-number">6</span>
    <span class="stat-label">DFW Nodes</span>
  </div>
  <!-- border-right: 3px solid #212121 -->
  <div class="brutal-stat flex-1 p-6">
    <span class="stat-number">2026</span>
    <span class="stat-label">Founded</span>
  </div>
</div>
```

### index.astro section label (CORRECT):
```astro
<span class="section-label">01 / BUILD</span>
```

### Dark section on light page (CORRECT):
```astro
<section style="background:#212121;" class="border-b-4 border-black">
  <div class="container py-16">
    <h2 class="text-white uppercase" style="font-family:'Bebas Neue',sans-serif;">
      CREATIVE
    </h2>
    <p class="text-[#E6E6E6]">
      Real footage. Shot on Sony ZV-E10.
    </p>
  </div>
</section>
```

### WRONG (stale):
```astro
<!-- WRONG: dark gray on dark background — unreadable -->
<p style="color:#888888;">Some muted text</p>  ← on dark bg, use #E6E6E6

<!-- WRONG: old lime green accent -->
<span style="color:#CCFF00;">LABEL</span>  ← use #FF3D00

<!-- WRONG: old dark bg -->
<section style="background:#0A0A0A;">  ← use #212121

<!-- WRONG: wrong font -->
<h2 style="font-family:'Syne',sans-serif;">  ← use Bebas Neue

<!-- WRONG: wrong mono font -->
<span style="font-family:'JetBrains Mono',monospace;">  ← use Space Mono
```

---

## MASTER AUDIT SCRIPT — RUN THIS BEFORE ANY PR

Before opening a PR, run ALL of:

```bash
# 1. Check for stale colors
grep -rn "#0A0A0A\|#111111\|#CCFF00\|#333333\|#888888" src/ --include="*.astro" --include="*.css" | grep -v "node_modules"
# Expected: empty (all should be replaced with spec colors)

# 2. Check for wrong fonts
grep -rn "Syne\|JetBrains Mono" src/ --include="*.astro" --include="*.css" | grep -v "node_modules"
# Expected: empty (Syne → Bebas Neue, JetBrains Mono → Space Mono)

# 3. Check for wrong border-radius (should be zero)
grep -rn "border-radius" src/ --include="*.astro" --include="*.css" | grep -v "node_modules"
# Expected: empty (zero border-radius everywhere)

# 4. Build and test
npm run build && npm run test:e2e
# Expected: build succeeds, 11/11 tests pass
```

---

## SUMMARY: THE EXACT REPLACEMENT MAP

| Old color/value | Replace with | Where |
|-----------------|-------------|-------|
| `#0A0A0A` | `#212121` | All dark backgrounds |
| `#111111` | `#212121` | All dark backgrounds |
| `#333333` | `#212121` | All borders |
| `#CCFF00` | `#FF3D00` | Signal accents (CTAs, labels) |
| `#CCFF00` | `#00B0FF` | Links |
| `#888888` (on dark bg) | `#E6E6E6` | Muted text on dark |
| `#AAAAAA` (on dark bg) | `#E6E6E6` | Muted text on dark |
| `#888888` (on light bg) | `#555555` | Muted text on light |
| `#AAAAAA` (on light bg) | `#212121` | Body text on light |
| `Syne` | `Bebas Neue` | All display headings |
| `JetBrains Mono` | `Space Mono` | All mono text |
| `font-weight: 800` (Bebas) | `font-weight: 400` | Bebas Neue only has 400 |
| `border-radius: 8px` etc. | `border-radius: 0` | Remove all |

If you see something that doesn't match this map, STOP and re-read SPEC.md and global.css before touching anything.
