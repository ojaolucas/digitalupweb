# DESIGN SYSTEM — DIGITAL UP WEB
*Crafted following the [Impeccable Style](https://impeccable.style/) principles.*

---

## 1. Intent & Surface Mode
* **Surface Mode:** `Persuade` (B2B / Technology solutions & automation landing page).
* **Audience:** Business owners, operational managers, and entrepreneurs looking to streamline operations, eliminate repetitive manual tasks, and scale through custom software.
* **Core Emotional Tone:** Trustworthy, precise, high-tech, modern, and accessible (no unnecessary tech jargon, immediate clarity of value).
* **Guiding Law:** Zero placeholders, calibrated optical whitespace, unified visual hierarchy without jarring black-to-white contrast blocks.

---

## 2. Color System (Perceptually Calibrated & Tinted)
*Impeccable Law: Banned raw pure monochromes (`#000000`, `#ffffff`) and harsh 90s primary colors (`#0000D0`). All neutrals are subtly tinted towards the brand indigo/navy hue.*

### Canvas & Surfaces (Deep Tinted Navy)
* `--bg-base`: `#070A14` (Deep obsidian blue canvas)
* `--bg-surface`: `#0D1326` (Layer 1 surface elevation)
* `--bg-card`: `rgba(17, 26, 48, 0.72)` (Glassmorphic card surface)
* `--bg-card-hover`: `rgba(24, 37, 68, 0.85)` (Elevated card interaction state)

### Brand & Interactive
* `--brand-primary`: `#2563EB` (Modern electric azure)
* `--brand-vivid`: `#3B82F6` (Luminous interactive blue)
* `--brand-cyan`: `#38BDF8` (Precision highlight & pulse dot)
* `--brand-glow`: `rgba(37, 99, 235, 0.28)`

### Call-to-Action & Accent
* `--accent-primary`: `#F97316` (High-converting radiant orange)
* `--accent-hover`: `#EA580C` (Pressed/hover tone)
* `--accent-glow`: `rgba(249, 115, 22, 0.38)`

### Borders & Dividers
* `--border-subtle`: `rgba(255, 255, 255, 0.08)` (Fine optical separator)
* `--border-medium`: `rgba(255, 255, 255, 0.14)`
* `--border-glow`: `rgba(56, 189, 248, 0.28)`

### Typography Neutrals
* `--text-primary`: `#F8FAFC` (Highest contrast white-tinted slate)
* `--text-secondary`: `#94A3B8` (Legible secondary text)
* `--text-muted`: `#64748B` (Micro-copy and auxiliary labels)

---

## 3. Typographic Rules (Typeset)
* **Font Family:** `'Plus Jakarta Sans', system-ui, -apple-system, sans-serif`
* **Display / Hero H1:** `clamp(2.4rem, 4vw, 3.6rem)` | `font-weight: 800` | `letter-spacing: -0.035em` | `line-height: 1.15`
* **Section Titles H2:** `clamp(1.9rem, 3vw, 2.5rem)` | `font-weight: 800` | `letter-spacing: -0.025em` | `line-height: 1.25`
* **Card Titles H3:** `1.25rem - 1.35rem` | `font-weight: 700` | `letter-spacing: -0.015em`
* **Body Text:** `1.05rem` | `font-weight: 400 - 500` | `line-height: 1.68` | `color: var(--text-secondary)`
* **Badges & Eyebrows:** `0.78rem - 0.85rem` | `font-weight: 700` | `letter-spacing: 0.06em` | `text-transform: uppercase`

---

## 4. Elevation, Depth & Micro-interactions
* **Multi-Layer Diffuse Shadows:** Instead of sharp dark smudges, cards utilize ambient occlusion + soft projection:
  `box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 20px 40px -10px rgba(0, 0, 0, 0.5);`
* **Glassmorphism:** `backdrop-filter: blur(16px)` with delicate 1px border.
* **Transitions:** Universal cubic timing function `cubic-bezier(0.16, 1, 0.3, 1)` for organic, tactile motion.
* **Button Hover:** Subtle vertical translation (`translateY(-2px)` to `translateY(-3px)`) with glowing aura projection.
