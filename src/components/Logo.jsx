export function LawctopusGavel({ size = 44, color = 'var(--c-forest)' }) {
  const w = Math.round(size * 0.78)
  return (
    <svg width={w} height={size} viewBox="0 0 34 44" fill="none">
      <rect x="0" y="2" width="32" height="13" rx="3.5" fill={color}
            transform="rotate(-22 16 8.5)"/>
      <rect x="19" y="13" width="11" height="29" rx="3.5" fill={color}
            transform="rotate(-22 24.5 27.5)"/>
    </svg>
  )
}

export function LawctopusWordmark({ onDark = false, tagline = false, fontSize = 24 }) {
  const gavelColor   = onDark ? 'var(--c-accent)' : 'var(--c-forest)'
  const awColor      = onDark ? 'var(--c-accent)' : 'var(--c-forest)'
  const ctopusColor  = onDark ? 'var(--c-white)' : 'var(--c-ink)'
  const subtitleColor = onDark ? 'rgba(255,255,255,0.55)' : 'var(--c-meta)'

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
      <LawctopusGavel size={Math.round(fontSize * 1.7)} color={gavelColor} />
      <div style={{ lineHeight: 1 }}>
        <div style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 800,
          fontSize,
          letterSpacing: '-0.5px',
          lineHeight: 1,
        }}>
          <span style={{ color: awColor }}>aw</span>
          <span style={{ color: ctopusColor }}>ctopus</span>
        </div>
        {tagline && (
          <div style={{
            fontSize: Math.round(fontSize * 0.42),
            color: subtitleColor,
            fontWeight: 600,
            marginTop: 4,
            letterSpacing: '1.2px',
            textTransform: 'uppercase',
          }}>
            The Home of Legal Careers
          </div>
        )}
      </div>
    </div>
  )
}
