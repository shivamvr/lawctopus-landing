// Elegant two-tone illustrations (orange primary + espresso accents).
const artProps = {
  width: 36, height: 36, viewBox: '0 0 40 40', fill: 'none',
  stroke: 'var(--c-accent)', strokeWidth: 1.7,
  strokeLinecap: 'round', strokeLinejoin: 'round',
}
const soft = { fill: 'var(--c-accent)', fillOpacity: 0.15 }

const RobotArt = () => (
  <svg {...artProps}>
    <path d="M20 5v3.6" />
    <circle cx="20" cy="3.8" r="1.7" {...soft} />
    <rect x="8.5" y="8.5" width="23" height="19" rx="6.5" {...soft} />
    <rect x="4.8" y="15" width="3.6" height="6.5" rx="1.8" />
    <rect x="31.6" y="15" width="3.6" height="6.5" rx="1.8" />
    <circle cx="15.3" cy="17.3" r="1.9" fill="var(--c-forest)" stroke="none" />
    <circle cx="24.7" cy="17.3" r="1.9" fill="var(--c-forest)" stroke="none" />
    <path d="M15.5 22.4q4.5 2.6 9 0" />
    <path d="M14 27.5v2.2a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3v-2.2" />
  </svg>
)

const RocketArt = () => (
  <svg {...artProps}>
    <path d="M20 4c5.2 4 6.8 11.2 5.2 18.5h-10.4C13.2 15 14.8 8 20 4z" {...soft} />
    <circle cx="20" cy="14" r="3.4" fill="var(--c-forest)" stroke="none" />
    <circle cx="20" cy="14" r="3.4" />
    <path d="M14.8 21.5 9.5 27l1.2-6.4z" {...soft} />
    <path d="M25.2 21.5 30.5 27l-1.2-6.4z" {...soft} />
    <path d="M16.5 27c0 3.4 3.5 6.8 3.5 6.8s3.5-3.4 3.5-6.8" fill="var(--c-forest)" fillOpacity="0.15" />
  </svg>
)

const NetworkArt = () => (
  <svg {...artProps}>
    {/* connections */}
    <path d="M20 14 11 25M20 14l9 11M11 25h18" stroke="var(--c-accent)" strokeOpacity="0.4" />
    {/* left & right (behind, espresso) */}
    <circle cx="10.5" cy="16" r="2.9" fill="var(--c-forest)" fillOpacity="0.16" stroke="var(--c-forest)" />
    <path d="M6 27a4.5 4.5 0 0 1 9 0z" fill="var(--c-forest)" fillOpacity="0.16" stroke="var(--c-forest)" />
    <circle cx="29.5" cy="16" r="2.9" fill="var(--c-forest)" fillOpacity="0.16" stroke="var(--c-forest)" />
    <path d="M25 27a4.5 4.5 0 0 1 9 0z" fill="var(--c-forest)" fillOpacity="0.16" stroke="var(--c-forest)" />
    {/* center (front, orange) */}
    <circle cx="20" cy="11.5" r="3.6" {...soft} />
    <path d="M13.5 25a6.5 6 0 0 1 13 0z" {...soft} />
  </svg>
)

const bonuses = [
  {
    icon: <RobotArt />,
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
    icon: <RocketArt />,
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
    icon: <NetworkArt />,
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
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--c-accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 2 }}>
    <path d="M20 6L9 17l-5-5"/>
  </svg>
)

export default function BonusSection() {
  return (
    <section className="section" style={{ background: 'var(--c-surface-alt)', borderTop: '1px solid var(--c-border)' }}>
      <div className="section-wrap">
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <span className="chip">What's Included</span>
          <h2 className="heading-2" style={{ marginBottom: 14 }}>
            Beyond just a course — a complete ecosystem
          </h2>
          <p style={{ color: 'var(--c-body)', fontSize: 17, maxWidth: 500, margin: '0 auto' }}>
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
                width: 62, height: 62, borderRadius: 16,
                background: 'var(--c-accent-light)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: 16,
              }}>
                {icon}
              </div>
              <span className="chip-green" style={{ marginBottom: 10 }}>{chip}</span>
              <h3 style={{ fontSize: 17, fontWeight: 700, color: 'var(--c-ink)', marginBottom: 16, lineHeight: 1.3 }}>{title}</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {items.map(item => (
                  <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 9 }}>
                    <CheckIcon />
                    <span style={{ fontSize: 16, color: 'var(--c-body)', lineHeight: 1.5 }}>{item}</span>
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
