const logos = [
  { name: 'Bar & Bench',   style: { fontWeight: 800, fontSize: 15, letterSpacing: '-0.3px' } },
  { name: 'Live Law',      style: { fontWeight: 700, fontSize: 16, letterSpacing: '-0.5px' } },
  { name: 'LegallyIndia', style: { fontWeight: 700, fontSize: 14 } },
  { name: 'SCC Online',   style: { fontWeight: 600, fontSize: 14, letterSpacing: '0.5px' } },
  { name: 'iPleaders',    style: { fontWeight: 800, fontSize: 15, letterSpacing: '-0.5px' } },
  { name: 'The Leaflet',  style: { fontWeight: 700, fontSize: 14, fontStyle: 'italic' } },
  { name: 'MANUPATRA',    style: { fontWeight: 600, fontSize: 12, letterSpacing: '2px' } },
  { name: 'India Legal',  style: { fontWeight: 700, fontSize: 14 } },
  { name: 'CLATGyan',     style: { fontWeight: 800, fontSize: 15, letterSpacing: '-0.3px' } },
  { name: 'Law Insider',  style: { fontWeight: 600, fontSize: 14, letterSpacing: '0.3px' } },
]

const doubled = [...logos, ...logos]

export default function SocialProofBar() {
  return (
    <section style={{
      background: '#F7F7F5',
      borderTop: '1px solid #E0E0DC',
      borderBottom: '1px solid #E0E0DC',
      padding: '48px 0',
    }}>
      <p style={{
        textAlign: 'center',
        fontSize: 13,
        fontWeight: 600,
        color: '#9CA3AF',
        letterSpacing: '0.07em',
        textTransform: 'uppercase',
        marginBottom: 32,
      }}>
        Trusted by legal professionals at top firms &amp; institutions across India
      </p>

      <div className="marquee-wrapper">
        <div className="marquee-track" style={{ gap: 56 }}>
          {doubled.map((logo, i) => (
            <span
              key={i}
              style={{
                ...logo.style,
                color: '#B0B8C1',
                fontFamily: "'Inter', sans-serif",
                flexShrink: 0,
                whiteSpace: 'nowrap',
                transition: 'color 0.3s',
                cursor: 'default',
              }}
              onMouseEnter={e => e.currentTarget.style.color = '#374151'}
              onMouseLeave={e => e.currentTarget.style.color = '#B0B8C1'}
            >
              {logo.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
