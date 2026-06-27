const bonuses = [
  {
    eyebrow: 'AI for Legal Practice',
    title: 'AI Tools Built In',
    icon: '🤖',
    items: [
      'Monthly live sessions with Indian Kanoon (Prism) & Jurisphere',
      '4-hour recorded AI workshop — research, drafting, litigation',
      '1-month complimentary Prism access',
      '31-page AI Prompts eBook for lawyers & students',
    ],
  },
  {
    eyebrow: 'Career Launchpad',
    title: 'Full Career Support',
    icon: '🚀',
    items: [
      'CV & LinkedIn profile building workshop',
      'Cover letter drafting sessions',
      'Upwork & Fiverr profile setup + opportunity sharing',
      'Bi-monthly 1-on-1 career coaching (30–45 min)',
    ],
  },
  {
    eyebrow: 'Recognition',
    title: 'Certificates & Merit',
    icon: '🏆',
    items: [
      'Completion certificate for all graduates',
      'Merit certificate for top performers',
      'Free access to future contract drafting webinars',
      'Profile sharing with partner organizations',
    ],
  },
  {
    eyebrow: 'Community',
    title: 'Exclusive Network',
    icon: '🤝',
    items: [
      'WhatsApp groups for jobs, internships & freelancing',
      'Monthly networking sessions with industry professionals',
      'Lifetime alumni group access',
      'Exclusive discounts on future Lawctopus courses',
    ],
  },
]

export default function BonusSection() {
  return (
    <section style={{ background: '#f5f6fb', padding: '66px 0', borderTop: '1px solid #ebedf6' }}>
      <div className="section-wrap">
        <div style={{ marginBottom: 28 }}>
          <span className="section-badge">Included with Enrollment</span>
          <h2 className="heading-display" style={{ fontSize: 'clamp(30px, 3.5vw, 44px)', color: '#161b3a', margin: '14px 0 6px' }}>
            Everything You Get
          </h2>
          <p style={{ color: '#6f748f', fontSize: 15 }}>Beyond the curriculum — career support, AI tools, and community.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }} className="bonus-grid">
          {bonuses.map(({ eyebrow, title, icon, items }) => (
            <div key={title} style={{
              background: '#fff',
              border: '1px solid #ebedf6',
              borderRadius: 18,
              padding: '22px 24px',
              boxShadow: '0 2px 12px rgba(75,47,203,.05)',
            }}>
              <div style={{ fontSize: 28, marginBottom: 10 }}>{icon}</div>
              <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#9298c0', marginBottom: 6 }}>{eyebrow}</p>
              <h3 style={{ fontWeight: 700, fontSize: 16.5, color: '#1b2244', marginBottom: 14 }}>{title}</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {items.map(item => (
                  <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, padding: '5px 0', color: '#41465f', fontSize: 13.5, lineHeight: 1.5 }}>
                    <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#4B2FCB', flexShrink: 0, marginTop: 6 }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 699px) {
          .bonus-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
