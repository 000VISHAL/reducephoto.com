# DESIGN.md — Reduce Photo Size Design System

> This file is the single source of truth for all visual and UX decisions.
> Every component, page, and element must follow these rules exactly.
> Do not deviate from these tokens without a documented reason.

---

## 1. Design Philosophy

**Inspiration:** Vercel.com — not a copy, but the same *feeling*.
- Precision over decoration
- Dark backgrounds with surgical use of white text
- Borders instead of shadows
- Green accent used sparingly — never as wallpaper
- Every element earns its place

**The one rule:** If removing something makes the page cleaner — remove it.

---

## 2. Color Tokens

Use these exact values. No other colors unless listed here.

```css
/* Backgrounds */
--color-bg:           #0a0a0a;   /* Page background */
--color-bg-card:      #111111;   /* Card, panel background */
--color-bg-elevated:  #161616;   /* Hover state, active tabs */
--color-bg-input:     #0d0d0d;   /* Form inputs */

/* Borders */
--color-border:       #222222;   /* Default border */
--color-border-subtle:#1a1a1a;   /* Dividers, subtle separators */
--color-border-focus: #444444;   /* Input focus ring */

/* Text */
--color-text-primary: #ededed;   /* Headings, important labels */
--color-text-secondary:#888888;  /* Body copy, descriptions */
--color-text-muted:   #444444;   /* Disabled, placeholder text */
--color-text-inverse: #0a0a0a;   /* Text on green/white backgrounds */

/* Accent (use sparingly) */
--color-accent:       #00d084;   /* Primary CTA, active states, icons */
--color-accent-hover: #00b870;   /* Hover state of accent */
--color-accent-subtle:#00d08415; /* Accent background tint (badges, tags) */

/* Status */
--color-success:      #00d084;   /* Same as accent */
--color-warning:      #f5a623;   /* Warnings */
--color-error:        #ff4444;   /* Errors */
--color-info:         #4da6ff;   /* Info states */

/* Special */
--color-white:        #ffffff;
--color-black:        #000000;
```

---

## 3. Typography

**Font Stack:**
```css
--font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
--font-mono: 'JetBrains Mono', 'Fira Code', 'Cascadia Code', monospace;
```

Import from Google Fonts:
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
```

**Type Scale:**
```
Display:   48px / 700 weight / -0.03em letter-spacing / 1.1 line-height
H1:        36px / 700 weight / -0.02em letter-spacing / 1.2 line-height
H2:        28px / 600 weight / -0.01em letter-spacing / 1.3 line-height
H3:        20px / 600 weight / 0em   letter-spacing / 1.4 line-height
H4:        16px / 600 weight / 0em   letter-spacing / 1.4 line-height
Body:      15px / 400 weight / 0em   letter-spacing / 1.6 line-height
Small:     13px / 400 weight / 0em   letter-spacing / 1.5 line-height
Caption:   12px / 400 weight / 0.02em letter-spacing / 1.4 line-height
Code:      13px / 400 weight (mono)
```

**Rules:**
- Never use font-weight below 400
- Headings always use `--color-text-primary`
- Body text uses `--color-text-secondary`
- Labels, badges use `--color-text-muted` or `--color-text-secondary`

---

## 4. Spacing System

Base unit: `4px`

```
xs:   4px
sm:   8px
md:   12px
lg:   16px
xl:   24px
2xl:  32px
3xl:  48px
4xl:  64px
5xl:  96px
6xl:  128px
```

**Page Layout:**
- Max content width: `1200px`
- Page horizontal padding: `24px` (mobile), `48px` (desktop)
- Section vertical gap: `96px`

---

## 5. Border Radius

```
none:  0px      — Tables, strict grids
sm:    4px      — Badges, chips, small tags
md:    6px      — Inputs, small buttons
lg:    8px      — Cards, panels, modals
xl:    12px     — Large cards, hero containers
full:  9999px   — Pill buttons, avatars
```

---

## 6. Component Specs

### Cards
```css
background: var(--color-bg-card);
border: 1px solid var(--color-border);
border-radius: 8px;
padding: 24px;
```
- NO box-shadow — borders only
- Hover: border-color changes to `--color-border-focus`
- Transition: `border-color 0.15s ease`

### Primary Button (CTA)
```css
background: var(--color-accent);
color: var(--color-text-inverse);
border: none;
border-radius: 6px;
padding: 10px 20px;
font-size: 14px;
font-weight: 600;
cursor: pointer;
transition: background 0.15s ease;
```
- Hover: `background: var(--color-accent-hover)`
- Focus: `outline: 2px solid var(--color-accent); outline-offset: 2px`
- Disabled: `opacity: 0.4; cursor: not-allowed`

### Secondary Button (Outline)
```css
background: transparent;
color: var(--color-text-primary);
border: 1px solid var(--color-border);
border-radius: 6px;
padding: 10px 20px;
font-size: 14px;
font-weight: 500;
cursor: pointer;
transition: border-color 0.15s ease, background 0.15s ease;
```
- Hover: `border-color: var(--color-border-focus); background: var(--color-bg-elevated)`

### Ghost Button
```css
background: transparent;
color: var(--color-text-secondary);
border: none;
padding: 8px 12px;
font-size: 14px;
font-weight: 500;
cursor: pointer;
```
- Hover: `color: var(--color-text-primary)`

### Input / Textarea
```css
background: var(--color-bg-input);
color: var(--color-text-primary);
border: 1px solid var(--color-border);
border-radius: 6px;
padding: 10px 14px;
font-size: 14px;
font-family: var(--font-sans);
width: 100%;
outline: none;
transition: border-color 0.15s ease;
```
- Focus: `border-color: var(--color-border-focus)`
- Placeholder: `color: var(--color-text-muted)`

### Badge / Tag
```css
background: var(--color-accent-subtle);
color: var(--color-accent);
border: 1px solid rgba(0, 208, 132, 0.2);
border-radius: 4px;
padding: 2px 8px;
font-size: 12px;
font-weight: 500;
```

### Divider
```css
border: none;
border-top: 1px solid var(--color-border-subtle);
```

---

## 7. Navbar

```
Height:           60px
Background:       rgba(10, 10, 10, 0.8)
Backdrop filter:  blur(12px) saturate(180%)
Border bottom:    1px solid var(--color-border-subtle)
Position:         sticky top-0
Z-index:          100
```

Logo: White text `Reduce Photo Size`, font-weight 700, 18px
Nav links: 14px, `--color-text-secondary`, hover → `--color-text-primary`
CTA: Small green button on right — "Try Now"

---

## 8. Layout Patterns

### Hero Section
```
Padding top:    120px
Padding bottom: 96px
Text align:     center (desktop), left optional
Max width:      720px (centered)
```
- Headline: Display size
- Sub-headline: Body, `--color-text-secondary`
- CTA group: 2 buttons with 12px gap
- No background gradients — plain `--color-bg`

### Tool Card Grid
```
Grid:    3 columns (desktop), 2 (tablet), 1 (mobile)
Gap:     16px
```
Each card: icon (24px, accent color) + title (H4) + description (Small, muted)

### Section Headers
```
Label (optional):  Caption, accent color, uppercase, 0.1em tracking
Heading:           H2
Sub-heading:       Body, secondary color
Gap between:       8px label→heading, 12px heading→sub
```

---

## 9. Motion & Transitions

Keep it minimal. Transitions are for feedback, not entertainment.

```css
/* Default transition for all interactive elements */
transition: all 0.15s ease;

/* For page-level transitions */
transition: opacity 0.2s ease, transform 0.2s ease;
```

**Rules:**
- No CSS animations on page load (no fade-ins for hero text)
- Hover states: color/border transitions only (0.15s)
- Loading states: simple opacity pulse, no spinners unless file is processing
- No parallax effects
- `@media (prefers-reduced-motion: reduce)` — remove all transitions

---

## 10. Icons

Use **Lucide Icons** (inline SVG or via CDN).
- Size: 16px (inline), 20px (card), 24px (feature icons)
- Color: inherit from parent or explicitly set to `--color-accent` for feature icons
- Stroke width: 1.5px
- No filled icons — outline only

---

## 11. Upload / Dropzone

```
Border:       2px dashed var(--color-border)
Border-radius: 12px
Background:   var(--color-bg-card)
Padding:      48px
Text-align:   center
```
- Hover / drag-over: `border-color: var(--color-accent); background: var(--color-accent-subtle)`
- Transition: `0.15s ease`
- Icon: Upload icon, 32px, `--color-text-muted`
- Text: "Drag & drop or click to upload" — `--color-text-secondary`
- Sub-text: accepted formats, max size — `--color-text-muted`, Caption size

---

## 12. Progress / Status Indicators

### Progress Bar
```css
background: var(--color-border);
border-radius: 9999px;
height: 4px;

/* Fill */
background: var(--color-accent);
border-radius: 9999px;
transition: width 0.3s ease;
```

### Status Pill
- Success: green text, green subtle bg
- Warning: `--color-warning`
- Error: `--color-error`

---

## 13. Before/After Slider

```
Container border:  1px solid var(--color-border)
Border-radius:     8px
Divider line:      2px solid white
Handle:            white circle, 40px, no shadow
```

---

## 14. Responsive Breakpoints

```
Mobile:   < 640px   (default / mobile-first)
Tablet:   ≥ 640px   (sm:)
Desktop:  ≥ 1024px  (lg:)
Wide:     ≥ 1280px  (xl:)
```

Mobile-first: always write base styles for mobile, override for larger screens.

---

## 15. Accessibility Rules

- All interactive elements must have visible focus states
- Focus ring: `outline: 2px solid var(--color-accent); outline-offset: 2px`
- Color contrast: all text must meet WCAG AA (4.5:1 body, 3:1 large text)
- All images: `alt` attribute required
- All form inputs: associated `<label>`
- Keyboard navigation must work for: navbar, dropzone, buttons, sliders
- `aria-label` on icon-only buttons

---

## 16. What NOT to Do

- ❌ No box-shadows (use borders instead)
- ❌ No gradients on text (no `background-clip: text` rainbow effects)
- ❌ No glassmorphism cards with heavy blur
- ❌ No colored section backgrounds (everything on `--color-bg`)
- ❌ No emoji in UI (icons only)
- ❌ No more than 2 font sizes in a single card
- ❌ No inline styles in components
- ❌ No `!important` in CSS
- ❌ No centered text in body/paragraph copy
- ❌ No Lorem Ipsum — write real copy
- ❌ No animations on page load
- ❌ Do not use competitor's design (exammint.in) as visual reference

---

## 17. File & Code Conventions

- All component files: PascalCase (`ExamSearch.astro`)
- All page files: kebab-case (`background-remove.astro`)
- CSS variables defined in `src/styles/global.css`
- No Tailwind arbitrary values `[value]` — use the design token scale
- One component per file
- No commented-out code in final files

---

*Last updated: June 2026 — Reduce Photo Size v1.0*
