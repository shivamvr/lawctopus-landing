const bonuses = [
  {
    icon: '🤖',
    chip: 'AI for Legal Practice',
    title: 'AI Tools Built Into the Course',
    items: [
      'Monthly live sessions with Indian Kanoon (Prism) & Jurisphere',
      '4-hour recorded AI workshop — research, drafting, litigation',
      '1-month complimentary Prism access (₹999 value)',
      '31-page AI Prompts eBook exclusively for legal professionals',
    ],
  },
  {
    icon: '🚀',
    chip: 'Career Launchpad',
    title: 'Full Career Support Package',
    items: [
      'CV & LinkedIn profile building workshop',
      'Cover letter drafting sessions with feedback',
      'Upwork & Fiverr profile setup + job opportunity sharing',
      'Bi-monthly 1-on-1 career coaching with program head',
    ],
  },
  {
    icon: '🤝',
    chip: 'Community & Networking',
    title: 'Alumni Network & Networking',
    items: [
      'Monthly networking sessions with senior lawyers & recruiters',
      'Lifetime access to 20,000+ member legal professional community',
      'Exclusive WhatsApp group with fellow students & alumni',
      'Access to job boards and exclusive internship postings',
    ],
  },
]

const CheckIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0ABF53" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 2 }}>
    <path d="M20 6L9 17l-5-5"/>
  </svg>
)

export default function BonusSection() {
  return (
    <section className="section" style={{ background: '#F7F7F5', borderTop: '1px solid #E0E0DC' }}>
      <div className="section-wrap">
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <span className="chip">What's Included</span>
          <h2 className="heading-2" style={{ marginBottom: 14 }}>
            Beyond just a course — a complete ecosystem
          </h2>
          <p style={{ color: '#6B7280', fontSize: 17, maxWidth: 500, margin: '0 auto' }}>
            Every tool, every session, every connection you need to launch and grow your legal career.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3,1fr)',
          gap: 20,
        }} className="bonus-grid">
          {bonuses.map(({ icon, chip, title, items }) => (
            <div key={title} className="feature-card">
              <div style={{
                width: 52, height: 52, borderRadius: 14,
                background: '#E8F7EE',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 24, marginBottom: 16,
              }}>
                {icon}
              </div>
              <span className="chip-green" style={{ marginBottom: 10 }}>{chip}</span>
              <h3 style={{ fontSize: 17, fontWeight: 700, color: '#1A1A1A', marginBottom: 16, lineHeight: 1.3 }}>{title}</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {items.map(item => (
                  <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 9 }}>
                    <CheckIcon />
                    <span style={{ fontSize: 13.5, color: '#6B7280', lineHeight: 1.5 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1023px) { .bonus-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 639px)  { .bonus-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}
