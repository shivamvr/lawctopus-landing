// Gavel SVG: the gavel shape acts as the "l" in "lawctopus"
// so wordmark renders as [gavel]awctopus
export function LawctopusGavel({ size = 44 }) {
  const w = Math.round(size * 0.78)
  return (
    <svg width={w} height={size} viewBox="0 0 34 44" fill="none">
      {/* Gavel head — horizontal block, rotated ~-22° */}
      <rect x="0" y="2" width="32" height="13" rx="3.5" fill="#F26A1B"
            transform="rotate(-22 16 8.5)"/>
      {/* Gavel handle — from under head, goes diagonally down */}
      <rect x="19" y="13" width="11" height="29" rx="3.5" fill="#F26A1B"
            transform="rotate(-22 24.5 27.5)"/>
    </svg>
  )
}

export function LawctopusWordmark({ onDark = false, tagline = false, fontSize = 24 }) {
  const subtitleColor = onDark ? 'rgba(200,207,240,0.75)' : '#8b90ac'
  const ctopusColor  = onDark ? '#ffffff' : '#3d3d3d'
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
      <LawctopusGavel size={Math.round(fontSize * 1.8)} />
      <div style={{ lineHeight: 1 }}>
        <div style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontWeight: 800,
          fontSize,
          letterSpacing: '-0.4px',
          lineHeight: 1,
        }}>
          <span style={{ color: '#F26A1B' }}>aw</span>
          <span style={{ color: ctopusColor }}>ctopus</span>
        </div>
        {tagline && (
          <div style={{
            fontSize: Math.round(fontSize * 0.44),
            color: subtitleColor,
            fontWeight: 600,
            marginTop: 4,
            letterSpacing: '1.5px',
            textTransform: 'uppercase',
          }}>
            The Home of Legal Careers
          </div>
        )}
      </div>
    </div>
  )
}
