---
name: Kinetic Syntax
colors:
  surface: '#051424'
  surface-dim: '#051424'
  surface-bright: '#2c3a4c'
  surface-container-lowest: '#010f1f'
  surface-container-low: '#0d1c2d'
  surface-container: '#122131'
  surface-container-high: '#1c2b3c'
  surface-container-highest: '#273647'
  on-surface: '#d4e4fa'
  on-surface-variant: '#c6c6cd'
  primary: '#bec6e0'
  secondary: '#5de6ff'
  on-secondary: '#00363e'
  tertiary: '#bdc2ff'
  primary-container: '#0f172a'
  outline: '#909097'
  outline-variant: '#45464d'
---

## Brand & Style
High-end developer portfolio: "High-Tech Professional" — authoritative yet
innovative, **Cyberpunk-Lite** aesthetic prioritizing legibility. Visual style is
**Modern Glassmorphism**: interfaces feel like sophisticated HUDs with deep
layering, subtle translucent surfaces, and vibrant energy from accent points.

## Colors
Rooted in deep "Midnight Carbon" (#051424). Cyan (#5de6ff) for primary actions and
"live" states; Indigo/Purple (tertiary #bdc2ff) for depth in gradients. Cool-toned
neutrals. Use 135deg linear gradients Cyan→Indigo for high-impact elements.

## Typography
**Inter** for prose/navigation, **JetBrains Mono** for data/code/labels.
Headlines: tight tracking, heavy weights. Body: line-height 1.6. Labels: small
caps with increased tracking for section eyebrows and metadata (terminal feel).

## Layout & Spacing
Fluid grid, 4px baseline rhythm. Desktop: 12-col, 24px gutters, max-width 1280px.
Mobile: single column, 16px margins. Large vertical stacks (64px+) between sections.
Left-aligned technical content; centered only for hero sections.

## Elevation & Depth
Glassmorphism + tonal layering over heavy shadows. Cards: semi-transparent
(rgba(18,33,49,0.4)) with 20px backdrop-blur and 1px white/8% stroke. On hover,
border transitions to vivid Cyan with an ambient glow.

## Components
- Buttons: primary = Cyan→Indigo gradient, white text; secondary = ghost (1px Cyan
  border, subtle glow on hover).
- Cards: glassmorphic, generous padding (24–32px).
- Code blocks: darker non-transparent bg (#010f1f), cyan accents.
- Chips/Tags: monospaced text in low-opacity Cyan capsule.
- Inputs: dark bg, 1px border glowing Cyan on focus, JetBrains Mono text.
- Navigation: fixed glass header with backdrop-blur.

> Implemented in Tailwind via `client/tailwind.config.js` (theme.extend) and global
> utilities (`.glass-card`, `.gradient-button`, `.glow-input`) in `client/src/index.css`.
