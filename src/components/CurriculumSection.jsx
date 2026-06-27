import { useState } from 'react'

const modules = [
  {
    label: 'Contract Fundamentals',
    title: 'Module 1 — Essential Clauses & Contract Structure',
    sessions: '4 Live · 25 Recorded',
    items: [
      'Contract fundamentals and overall structure',
      'Definition clauses & representations/warranties',
      'Termination, force majeure & confidentiality',
      'Dispute resolution mechanisms',
      'Drafting operative and boilerplate clauses',
    ],
    badge: 'Month 1',
  },
  {
    label: 'Employment & NDAs',
    title: 'Module 2 — Execution, Negotiation & Common Agreements',
    sessions: '4 Live · 18 Recorded',
    items: [
      'Employment agreements & software licensing',
      'Non-Disclosure Agreements (NDAs) in depth',
      'Negotiation concepts and techniques',
      'Contract lab with personalized feedback sessions',
    ],
    badge: 'Month 2',
  },
  {
    label: 'International Contracts',
    title: 'Module 3 — International & Cross-Border Contracts',
    sessions: '8 Live · 15 Recorded',
    items: [
      'International commercial contracts',
      'Cross-border loan agreements',
      'International NDA drafting in depth',
      'Introduction to legal freelancing on global platforms',
    ],
    badge: 'Month 3',
  },
  {
    label: 'IP & SaaS',
    title: 'Module 4 — IPR, Technology & SaaS Agreements',
    sessions: '8 Live · 13 Recorded',
    items: [
      'Trademark, patent & copyright licensing',
      'SaaS and software agreements',
      'Website terms & privacy policies (GDPR & IT Act)',
      'Freelancing on Upwork & Fiverr — setting up your profile',
    ],
    badge: 'Month 4',
  },
  {
    label: 'Real Estate',
    title: 'Module 5 — Real Estate & Property Agreements',
    sessions: '6 Live · 4 Recorded',
    items: [
      'Sale deeds & leave and license agreements',
      'Power of attorney documents',
      'Franchisee and dealership agreements',
    ],
    badge: 'Month 5',
  },
  {
    label: 'M&A & Capstone',
    title: 'Module 6 — Business, M&A & Capstone Project',
    sessions: '6 Live · 8 Recorded',
    items: [
      'Shareholder & share purchase agreements',
      'Partnership & joint venture agreements',
      'Capstone project with final expert feedback',
    ],
    badge: 'Month 6',
  },
]

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0ABF53" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
    <path d="M20 6L9 17l-5-5"/>
  </svg>
)

export default function CurriculumSection() {
  const [active, setActive] = useState(0)
  const mod = modules[active]

  return (
    <section id="curriculum" className="section" style={{ background: '#fff', borderTop: '1px solid #E0E0DC' }}>
      <div className="section-wrap">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <span className="chip">Program Curriculum</span>
          <h2 className="heading-2" style={{ marginBottom: 12 }}>What you'll learn</h2>
          <p style={{ color: '#6B7280', fontSize: 16 }}>
            6 months · 55 live sessions · 83 recorded lectures · 17 assignments
          </p>
        </div>

        {/* Pill tabs */}
        <div className="pill-tabs" style={{ marginBottom: 32 }}>
          {modules.map((m, i) => (
            <button
              key={i}
              className={`pill-tab${active === i ? ' active' : ''}`}
              onClick={() => setActive(i)}
            >
              {m.label}
            </button>
          ))}
        </div>

        {/* Content panel */}
        <div key={active} style={{
          display: 'grid',
          gridTemplateColumns: '1fr 0.7fr',
          gap: 28,
          alignItems: 'start',
          animation: 'word-in 250ms ease forwards',
        }} className="curriculum-content">

          {/* Left: module details */}
          <div style={{
            background: '#fff',
            border: '1px solid #E0E0DC',
            borderRadius: 16,
            padding: '28px 32px',
            boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
              <span style={{
                background: '#044D40',
                color: '#fff',
                fontSize: 11,
                fontWeight: 700,
                padding: '4px 10px',
                borderRadius: 999,
                letterSpacing: '0.06em',
              }}>
                {mod.badge}
              </span>
              <span style={{ fontSize: 12.5, color: '#9CA3AF', fontWeight: 500 }}>{mod.sessions}</span>
            </div>

            <h3 style={{ fontSize: 20, fontWeight: 700, color: '#1A1A1A', marginBottom: 20, lineHeight: 1.3 }}>
              {mod.title}
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {mod.items.map(item => (
                <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                  <CheckIcon />
                  <span style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.5 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: course highlights */}
          <div style={{
            background: 'linear-gradient(160deg, #044D40 0%, #033830 100%)',
            borderRadius: 16,
            padding: '28px 24px',
            color: '#fff',
          }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: 20 }}>
              Program Highlights
            </div>
            {[
              { value: '55', label: 'Live Sessions' },
              { value: '83', label: 'Recorded Lectures' },
              { value: '24+', label: 'Contract Types Drafted' },
              { value: '17', label: 'Graded Assignments' },
              { value: '6', label: 'Months Duration' },
              { value: '100%', label: 'Money-Back Guarantee' },
            ].map(({ value, label }, i, arr) => (
              <div key={label} style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '12px 0',
                borderBottom: i < arr.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none',
              }}>
                <span style={{ fontSize: 13.5, color: 'rgba(255,255,255,0.72)' }}>{label}</span>
                <span style={{ fontSize: 18, fontWeight: 800, color: '#0ABF53' }}>{value}</span>
              </div>
            ))}

            <a
              href="https://www.lawctopuslawschool.com/courses/cdn6-months/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ width: '100%', justifyContent: 'center', marginTop: 20, fontSize: 14 }}
            >
              Enroll Now — ₹24,999
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .curriculum-content { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
