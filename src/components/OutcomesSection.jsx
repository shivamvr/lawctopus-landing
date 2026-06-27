import { useState } from 'react'

const tabs = [
  {
    chip: 'Hands-on Learning',
    title: 'Draft real contracts, get real feedback',
    body: '55 live sessions and 17 graded assignments covering 24+ contract types used in top Indian & international law firms. Every draft is reviewed by a practicing lawyer — not a bot.',
    link: { label: 'See the full curriculum →', href: '#curriculum' },
    stats: [
      { value: '55', label: 'Live sessions' },
      { value: '24+', label: 'Contract types' },
      { value: '17', label: 'Assignments' },
    ],
  },
  {
    chip: 'Practicing Lawyers',
    title: 'Learn from those who do it every day',
    body: 'Every instructor is an active legal professional — partners, senior associates, and in-house counsels at leading firms. No full-time academics. Pure practical knowledge.',
    link: { label: 'Meet the faculty →', href: '#instructors' },
    stats: [
      { value: '8+', label: 'Expert instructors' },
      { value: '15+', label: 'Years avg. experience' },
      { value: '100%', label: 'Practicing lawyers' },
    ],
  },
  {
    chip: 'Career Launch',
    title: 'Start earning before you finish the course',
    body: 'Build your Upwork profile, get LinkedIn coaching, join bi-monthly 1-on-1 career sessions, and tap into our alumni network of 20,000+ legal professionals. Your career starts on Day 1.',
    link: { label: 'See career outcomes →', href: '#pricing' },
    stats: [
      { value: '20,000+', label: 'Alumni network' },
      { value: '₹2L+', label: 'Monthly earning potential' },
      { value: '1-on-1', label: 'Career coaching sessions' },
    ],
  },
]

export default function OutcomesSection() {
  const [active, setActive] = useState(0)
  const tab = tabs[active]

  return (
    <section className="section" style={{ background: 'var(--c-surface-alt)', borderTop: '1px solid var(--c-border)' }}>
      <div className="section-wrap">
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <span className="chip">Why Lawctopus CDN</span>
          <h2 className="heading-2" style={{ marginBottom: 14 }}>
            Everything you need to launch your career
          </h2>
          <p style={{ color: 'var(--c-body)', fontSize: 17, maxWidth: 500, margin: '0 auto' }}>
            Not just a course — a complete career accelerator for legal professionals.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 40,
          alignItems: 'start',
        }} className="outcomes-grid">

          {/* Left: tab switcher */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {tabs.map((t, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                style={{
                  textAlign: 'left',
                  padding: '20px 22px',
                  borderRadius: 12,
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                  background: active === i ? 'var(--c-white)' : 'transparent',
                  boxShadow: active === i ? '0 4px 16px rgba(0,0,0,0.08)' : 'none',
                  borderLeft: active === i ? '3px solid var(--c-accent)' : '3px solid transparent',
                  transition: 'all 0.2s ease',
                }}
              >
                <div style={{
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: active === i ? 'var(--c-accent)' : 'var(--c-meta)',
                  marginBottom: 6,
                }}>
                  {t.chip}
                </div>
                <div style={{
                  fontSize: 17,
                  fontWeight: 700,
                  color: active === i ? 'var(--c-ink)' : 'var(--c-body)',
                  lineHeight: 1.3,
                }}>
                  {t.title}
                </div>
              </button>
            ))}
          </div>

          {/* Right: content panel */}
          <div key={active} style={{
            background: 'var(--c-white)',
            borderRadius: 16,
            padding: '32px',
            border: '1px solid var(--c-border)',
            boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
            animation: 'word-in 300ms ease forwards',
          }}>
            <span className="chip-green">{tab.chip}</span>
            <h3 className="heading-3" style={{ marginBottom: 14 }}>{tab.title}</h3>
            <p style={{ fontSize: 16, color: 'var(--c-body)', lineHeight: 1.65, marginBottom: 28 }}>
              {tab.body}
            </p>

            {/* Stats row */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3,1fr)',
              gap: 16,
              marginBottom: 24,
              padding: '20px 0',
              borderTop: '1px solid var(--c-surface-fill)',
              borderBottom: '1px solid var(--c-surface-fill)',
            }}>
              {tab.stats.map(({ value, label }) => (
                <div key={label} style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: 22, fontWeight: 800, color: 'var(--c-forest)', lineHeight: 1 }}>{value}</div>
                  <div style={{ fontSize: 12, color: 'var(--c-meta)', fontWeight: 500, marginTop: 4 }}>{label}</div>
                </div>
              ))}
            </div>

            <a
              href={tab.link.href}
              style={{
                fontSize: 16,
                fontWeight: 600,
                color: 'var(--c-accent)',
                textDecoration: 'none',
              }}
              onMouseEnter={e => e.currentTarget.style.textDecoration = 'underline'}
              onMouseLeave={e => e.currentTarget.style.textDecoration = 'none'}
            >
              {tab.link.label}
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) { .outcomes-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}
