// ─────────────────────────────────────────────────────────────────────────
//  THE single source of truth for every colour in the app.
//  Change a value here and it updates across the whole site.
//
//  • Consumed in components / index.css via CSS variables  ->  var(--c-accent)
//  • The variables are injected onto :root by main.jsx from this file,
//    so this is the ONLY place colours are ever defined.
//
//  Want a different brand colour? Edit `accent` (and its ramp) below.
// ─────────────────────────────────────────────────────────────────────────

export const colors = {
  // ── Brand · Orange ──────────────────────────────────────────────
  accent:        '#f6a11e',   // primary brand & CTAs
  accentHover:   '#e8910f',   // button hover
  accentActive:  '#cf7d08',   // button active / pressed
  accentLight:   '#fef1dd',   // light tint background (chips, soft fills)
  accentText:    '#b45309',   // brand-tinted text on light backgrounds

  // ── Dark brand surface · warm espresso ──────────────────────────
  forest:        '#3a2412',   // dark sections, footer, final CTA, AI panel
  forestDark:    '#241509',   // deepest dark (gradient end)

  // ── Neutrals / text ─────────────────────────────────────────────
  ink:           '#1a1a1a',   // primary text & headings
  inkMax:        '#0c0c0c',   // max-contrast text
  body:          '#6b7280',   // secondary body text
  meta:          '#9ca3af',   // meta / placeholder text
  heading3:      '#374151',   // tertiary headings
  muted:         '#b0b8c1',   // strikethrough / faint

  // ── Surfaces & borders ──────────────────────────────────────────
  white:         '#ffffff',
  black:         '#000000',
  surface:       '#ffffff',   // default page background
  surfaceAlt:    '#f7f7f5',   // alternating section background
  surfaceFill:   '#f0f0ec',   // card / input fills
  border:        '#e0e0dc',   // borders & dividers

  // ── Semantic ────────────────────────────────────────────────────
  star:          '#f6a609',   // rating stars
  danger:        '#b3261e',   // form validation errors

  // ── Indian flag (phone-prefix illustration) ─────────────────────
  flagSaffron:   '#ff9933',
  flagGreen:     '#138808',
}

// hex (#rrggbb) -> "r,g,b"
const rgbOf = (hex) => {
  const h = hex.replace('#', '')
  const full = h.length === 3 ? h.split('').map((c) => c + c).join('') : h
  const n = parseInt(full, 16)
  return `${(n >> 16) & 255},${(n >> 8) & 255},${n & 255}`
}

// colour + opacity -> 'rgba(r,g,b,a)'  (for brand-tinted fills)
export const withAlpha = (hex, a) => `rgba(${rgbOf(hex)},${a})`

// camelCase key -> --c-kebab-case CSS variable name
const toVarName = (key) => '--c-' + key.replace(/[A-Z]/g, (m) => '-' + m.toLowerCase())

// Full map of solid-colour CSS variables, derived from `colors`.
export const cssVars = {
  ...Object.fromEntries(
    Object.entries(colors).map(([k, v]) => [toVarName(k), v]),
  ),
  // Brand-tinted translucent variants used around the site.
  '--c-accent-08':  withAlpha(colors.accent, 0.08),
  '--c-accent-15':  withAlpha(colors.accent, 0.15),
  '--c-accent-20':  withAlpha(colors.accent, 0.2),
  '--c-forest-35':  withAlpha(colors.forest, 0.35),
  '--c-forest-45':  withAlpha(colors.forest, 0.45),
}
