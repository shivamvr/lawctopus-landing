import { useState } from 'react'

const plans = [
  {
    id: 'starter',
    label: '2-Month Course',
    name: 'Foundations',
    tagline: 'Essential contract drafting skills',
    price: '₹7,999',
    original: '₹15,000',
    highlight: false,
    features: [
      '8 live sessions with practicing lawyers',
      '8+ hrs 38 min of recorded lectures',
      '202 pages of reading material',
      '2 graded assignments with feedback',
      'Certificate of Completion',
      'Essential clauses & contract structure',
      'Employment agreements & NDAs',
    ],
    cta: 'Enroll in 2-Month',
    href: 'https://www.lawctopuslawschool.com/courses/cdn2-months/',
  },
  {
    id: 'pro',
    label: '6-Month Course',
    name: 'Professional',
    tagline: 'Complete career transformation',
    price: '₹24,999',
    original: '₹60,000',
    highlight: true,
    features: [
      '55 live sessions with expert lawyers',
      '83 recorded lectures (32+ hrs)',
      '800+ pages of reading material',
      '17 graded assignments with line-by-line feedback',
      'Certificate of Completion + Merit Certificate',
      'All 6 contract law modules',
      'Freelancing on Upwork & Fiverr',
      'Monthly networking sessions',
      'Bi-monthly 1-on-1 career coaching',
      'AI tools for legal practice (4-hr workshop)',
      'CV, LinkedIn & cover letter building',
      '100% money-back guarantee',
    ],
    cta: 'Enroll in 6-Month',
    href: 'https://www.lawctopuslawschool.com/courses/cdn6-months/',
  },
]

const CheckIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
    <path d="M20 6L9 17l-5-5"/>
  </svg>
)

export default function PricingSection({ onDownload }) {
  const [active, setActive] = useState('pro')

  return (
    <section id="pricing" className="section" style={{ background: '#fff', borderTop: '1px solid #E0E0DC' }}>
      <div className="section-wrap">
        <div style={{ textAlign: 'center', marginBottom: 44 }}>
          <span className="chip">Pricing</span>
          <h2 className="heading-2" style={{ marginBottom: 12 }}>
            Built for every budget &amp; timeline
          </h2>
          <p style={{ color: '#6B7280', fontSize: 16, maxWidth: 460, margin: '0 auto 28px' }}>
            Start with foundations or go all-in — both paths lead to real skills.
          </p>

          {/* Segment toggle */}
          <div className="tab-group">
            {plans.map(p => (
              <button
                key={p.id}
                className={`tab-item${active === p.id ? ' active' : ''}`}
                onClick={() => setActive(p.id)}
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>

        {/* Pricing cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2,1fr)',
          gap: 24,
          maxWidth: 860,
          margin: '0 auto',
        }} className="pricing-grid">
          {plans.map(plan => {
            const isActive = active === plan.id
            return (
              <div
                key={plan.id}
                style={{
                  border: plan.highlight ? '2px solid #0ABF53' : '1px solid #E0E0DC',
                  borderRadius: 20,
                  padding: '32px',
                  background: '#fff',
                  position: 'relative',
                  opacity: isActive ? 1 : 0.55,
                  transform: isActive ? 'scale(1.02)' : 'scale(0.98)',
                  transition: 'all 0.3s ease',
                  boxShadow: plan.highlight && isActive ? '0 16px 48px rgba(10,191,83,0.15)' : 'none',
                }}
              >
                {plan.highlight && (
                  <div style={{
                    position: 'absolute', top: -14, left: '50%',
                    transform: 'translateX(-50%)',
                    background: '#0ABF53', color: '#fff',
                    fontSize: 12, fontWeight: 700,
                    padding: '5px 16px', borderRadius: 999,
                    whiteSpace: 'nowrap',
                  }}>
                    Most Popular
                  </div>
                )}

                <div style={{ marginBottom: 24 }}>
                  <span className="chip-green" style={{ marginBottom: 8 }}>{plan.label}</span>
                  <h3 style={{ fontSize: 22, fontWeight: 800, color: '#1A1A1A', marginBottom: 4 }}>{plan.name}</h3>
                  <p style={{ fontSize: 13.5, color: '#9CA3AF' }}>{plan.tagline}</p>
                </div>

                <div style={{ marginBottom: 28 }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
                    <span style={{ fontSize: 38, fontWeight: 800, color: '#1A1A1A', letterSpacing: '-1px' }}>{plan.price}</span>
                    <span style={{ fontSize: 16, color: '#B0B8C1', textDecoration: 'line-through' }}>{plan.original}</span>
                  </div>
                  <p style={{ fontSize: 12.5, color: '#9CA3AF', marginTop: 4 }}>One-time fee · All taxes included</p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 28 }}>
                  {plan.features.map(f => (
                    <div key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 9, color: '#374151' }}>
                      <span style={{ color: '#0ABF53', marginTop: 1 }}><CheckIcon /></span>
                      <span style={{ fontSize: 14 }}>{f}</span>
                    </div>
                  ))}
                </div>

                <a
                  href={plan.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex', justifyContent: 'center', alignItems: 'center',
                    width: '100%', padding: '14px',
                    background: plan.highlight ? '#0ABF53' : 'transparent',
                    color: plan.highlight ? '#fff' : '#1A1A1A',
                    border: plan.highlight ? 'none' : '1.5px solid #E0E0DC',
                    borderRadius: 8,
                    fontWeight: 700, fontSize: 15,
                    textDecoration: 'none',
                    transition: 'background 0.2s',
                    marginBottom: 10,
                  }}
                >
                  {plan.cta}
                </a>
                <button
                  onClick={onDownload}
                  style={{
                    display: 'flex', justifyContent: 'center', alignItems: 'center',
                    width: '100%', padding: '12px',
                    background: 'transparent', color: '#6B7280',
                    border: 'none', cursor: 'pointer',
                    fontFamily: 'inherit', fontSize: 13.5, fontWeight: 500,
                    textDecoration: 'underline',
                  }}
                >
                  Download full syllabus first
                </button>
              </div>
            )
          })}
        </div>

        <p style={{ textAlign: 'center', fontSize: 13, color: '#9CA3AF', marginTop: 24 }}>
          No credit card required to download syllabus · EMI options available
        </p>
      </div>

      <style>{`
        @media (max-width: 639px) { .pricing-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}
