import { useState, useEffect } from 'react'
import HeroArt from './HeroArt'

const rotatingWords = [
  'Contract Drafting',
  'Legal Freelancing',
  'NDA Writing',
  'Corporate Law',
]

function StarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="var(--c-star)">
      <path d="M12 2l2.9 6.3 6.9.7-5.1 4.6 1.4 6.8L12 17.6 5.9 20.4l1.4-6.8L2.2 9l6.9-.7z"/>
    </svg>
  )
}

// Small orange line icons for the hero feature pills
const pillIcon = {
  width: 16, height: 16, viewBox: '0 0 24 24', fill: 'none',
  stroke: 'var(--c-accent)', strokeWidth: 1.8,
  strokeLinecap: 'round', strokeLinejoin: 'round',
  style: { flexShrink: 0 },
}
const CalendarIcon = () => (
  <svg {...pillIcon}><rect x="3.5" y="5" width="17" height="15" rx="2.5" /><path d="M3.5 9.5h17M8 3.5v3M16 3.5v3" /></svg>
)
const DocIcon = () => (
  <svg {...pillIcon}><path d="M6 3.5h7l5 5v11a1.5 1.5 0 0 1-1.5 1.5H6A1.5 1.5 0 0 1 4.5 19.5V5A1.5 1.5 0 0 1 6 3.5z" /><path d="M13 3.5V8.5h5M8.5 13h7M8.5 16.5h5" /></svg>
)
const CapIcon = () => (
  <svg {...pillIcon}><path d="M12 5 2.5 8.5 12 12l9.5-3.5L12 5z" /><path d="M6.5 10v4c0 1.3 2.5 2.5 5.5 2.5s5.5-1.2 5.5-2.5v-4M21.5 8.5v4" /></svg>
)
const BriefcaseIcon = () => (
  <svg {...pillIcon}><rect x="3.5" y="7.5" width="17" height="12" rx="2" /><path d="M8.5 7.5V6a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v1.5M3.5 12.5h17" /></svg>
)

export default function HeroSection({ onDownload }) {
  const [wordIdx, setWordIdx]   = useState(0)
  const [visible, setVisible]   = useState(true)

  useEffect(() => {
    const timer = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setWordIdx(i => (i + 1) % rotatingWords.length)
        setVisible(true)
      }, 350)
    }, 2800)
    return () => clearInterval(timer)
  }, [])

  return (
    <section style={{ background: 'var(--c-white)', paddingTop: 68 }}>
      <div className="section-wrap" style={{ paddingTop: 80, paddingBottom: 80 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '55fr 45fr',
          gap: 64,
          alignItems: 'center',
        }} className="hero-grid">

          {/* LEFT — text */}
          <div>
            {/* Social proof chip */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              background: 'var(--c-surface-alt)',
              border: '1px solid var(--c-border)',
              borderRadius: 999,
              padding: '6px 14px',
              marginBottom: 28,
            }}>
              <div style={{ display: 'flex', gap: 2 }}>
                {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
              </div>
              <span style={{ fontSize: 16, fontWeight: 500, color: 'var(--c-heading3)' }}>
                Rated 4.8/5 by 1,000+ students
              </span>
            </div>

            {/* H1 with animated word */}
            <h1 style={{
              fontSize: 'clamp(36px, 4.5vw, 68px)',
              fontWeight: 700,
              lineHeight: 1.07,
              letterSpacing: '-0.03em',
              color: 'var(--c-ink)',
              marginBottom: 24,
            }}>
              Master{' '}
              <span style={{
                display: 'inline-block',
                overflow: 'hidden',
                verticalAlign: 'bottom',
              }}>
                <span
                  key={wordIdx}
                  style={{
                    display: 'inline-block',
                    color: 'var(--c-accent)',
                    animation: visible ? 'word-in 350ms ease forwards' : 'none',
                    opacity: visible ? undefined : 0,
                  }}
                >
                  {rotatingWords[wordIdx]}
                </span>
              </span>
              {' '}&<br />
              Launch Your Legal Career
            </h1>

            <p style={{
              fontSize: 18,
              lineHeight: 1.65,
              color: 'var(--c-body)',
              maxWidth: 480,
              marginBottom: 36,
            }}>
              55 live sessions with practicing lawyers. Draft 24 real contracts, get personalized feedback, and build a high-income freelancing career on Upwork & LinkedIn.
            </p>

            {/* Feature pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginBottom: 36 }}>
              {[
                { icon: <CalendarIcon />, text: '6 Months · Online' },
                { icon: <DocIcon />, text: '24 Real Contracts' },
                { icon: <CapIcon />, text: 'Certificate on Completion' },
                { icon: <BriefcaseIcon />, text: 'Freelancing Track' },
              ].map(({ icon, text }) => (
                <div key={text} style={{
                  display: 'flex', alignItems: 'center', gap: 7,
                  background: 'var(--c-surface-alt)',
                  border: '1px solid var(--c-border)',
                  borderRadius: 8, padding: '7px 12px',
                  fontSize: 16, fontWeight: 500, color: 'var(--c-heading3)',
                }}>
                  {icon}<span>{text}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center' }}>
              <a
                href="https://www.lawctopuslawschool.com/courses/cdn6-months/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ fontSize: 16, padding: '15px 28px' }}
              >
                Enroll Now
              </a>
              <button
                onClick={onDownload}
                className="btn-secondary"
                style={{ fontSize: 16, padding: '14px 22px' }}
              >
                Download Syllabus
              </button>
            </div>

            <p style={{ fontSize: 12.5, color: 'var(--c-meta)', marginTop: 14 }}>
              Next batch starts 1 July 2026 · Limited seats
            </p>
          </div>

          {/* RIGHT — hero image */}
          <div style={{ position: 'relative' }}>
            <div style={{
              borderRadius: 24,
              overflow: 'hidden',
              boxShadow: '0 24px 64px rgba(0,0,0,0.13)',
              border: '1px solid var(--c-border)',
            }}>
              <HeroArt />
            </div>

            {/* Floating stat card */}
            <div style={{
              position: 'absolute',
              bottom: -20,
              left: -24,
              background: 'var(--c-white)',
              border: '1px solid var(--c-border)',
              borderRadius: 14,
              padding: '14px 18px',
              boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
              minWidth: 180,
            }}>
              <div style={{ fontSize: 22, fontWeight: 800, color: 'var(--c-forest)', lineHeight: 1 }}>20,000+</div>
              <div style={{ fontSize: 12.5, color: 'var(--c-body)', fontWeight: 500, marginTop: 4 }}>Legal professionals in community</div>
            </div>

            {/* Floating batch pill */}
            <div style={{
              position: 'absolute',
              top: -14,
              right: -12,
              background: 'var(--c-forest)',
              color: 'var(--c-white)',
              borderRadius: 999,
              padding: '8px 16px',
              fontSize: 12.5,
              fontWeight: 700,
              boxShadow: '0 4px 16px var(--c-forest-35)',
              whiteSpace: 'nowrap',
            }}>
              🔥 Batch starts July 1
            </div>
          </div>
        </div>
      </div>

      {/* Seats banner */}
      <div style={{ background: 'var(--c-surface-alt)', borderTop: '1px solid var(--c-border)', borderBottom: '1px solid var(--c-border)' }}>
        <div className="section-wrap">
          <div style={{
            display: 'flex', alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap', gap: 12,
            padding: '14px 0',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
              <span style={{
                background: 'var(--c-accent)',
                color: 'var(--c-white)',
                fontSize: 11,
                fontWeight: 700,
                padding: '4px 10px',
                borderRadius: 6,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
              }}>
                Limited Seats
              </span>
              <span style={{ fontSize: 16, fontWeight: 600, color: 'var(--c-heading3)' }}>
                Next Batch Starts 1st July 2026
              </span>
            </div>
            <button
              onClick={onDownload}
              className="btn-primary"
              style={{ fontSize: 16, padding: '10px 20px' }}
            >
              Download Syllabus — It's Free
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  )
}
