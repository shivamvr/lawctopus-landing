import { useState, useEffect } from 'react'
import heroImg from '../assets/hero.png'

const rotatingWords = [
  'Contract Drafting',
  'Legal Freelancing',
  'NDA Writing',
  'Corporate Law',
]

function StarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="#F6A609">
      <path d="M12 2l2.9 6.3 6.9.7-5.1 4.6 1.4 6.8L12 17.6 5.9 20.4l1.4-6.8L2.2 9l6.9-.7z"/>
    </svg>
  )
}

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
    <section style={{ background: '#fff', paddingTop: 68 }}>
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
              background: '#F7F7F5',
              border: '1px solid #E0E0DC',
              borderRadius: 999,
              padding: '6px 14px',
              marginBottom: 28,
            }}>
              <div style={{ display: 'flex', gap: 2 }}>
                {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
              </div>
              <span style={{ fontSize: 13, fontWeight: 500, color: '#374151' }}>
                Rated 4.8/5 by 1,000+ students
              </span>
            </div>

            {/* H1 with animated word */}
            <h1 style={{
              fontSize: 'clamp(36px, 4.5vw, 68px)',
              fontWeight: 700,
              lineHeight: 1.07,
              letterSpacing: '-0.03em',
              color: '#1A1A1A',
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
                    color: '#0ABF53',
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
              color: '#6B7280',
              maxWidth: 480,
              marginBottom: 36,
            }}>
              55 live sessions with practicing lawyers. Draft 24 real contracts, get personalized feedback, and build a high-income freelancing career on Upwork & LinkedIn.
            </p>

            {/* Feature pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginBottom: 36 }}>
              {[
                { icon: '🗓', text: '6 Months · Online' },
                { icon: '📄', text: '24 Real Contracts' },
                { icon: '🎓', text: 'Certificate on Completion' },
                { icon: '💼', text: 'Freelancing Track' },
              ].map(({ icon, text }) => (
                <div key={text} style={{
                  display: 'flex', alignItems: 'center', gap: 6,
                  background: '#F7F7F5',
                  border: '1px solid #E0E0DC',
                  borderRadius: 8, padding: '7px 12px',
                  fontSize: 13.5, fontWeight: 500, color: '#374151',
                }}>
                  <span>{icon}</span> {text}
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
                Enroll Now — ₹24,999
              </a>
              <button
                onClick={onDownload}
                className="btn-secondary"
                style={{ fontSize: 15, padding: '14px 22px' }}
              >
                Download Syllabus
              </button>
            </div>

            <p style={{ fontSize: 12.5, color: '#9CA3AF', marginTop: 14 }}>
              Next batch starts 1 July 2026 · Limited seats
            </p>
          </div>

          {/* RIGHT — hero image */}
          <div style={{ position: 'relative' }}>
            <div style={{
              borderRadius: 24,
              overflow: 'hidden',
              boxShadow: '0 24px 64px rgba(0,0,0,0.13)',
              border: '1px solid #E0E0DC',
            }}>
              <img
                src={heroImg}
                alt="Contract Drafting & Freelancing Course"
                style={{ width: '100%', display: 'block', objectFit: 'cover' }}
                loading="eager"
              />
            </div>

            {/* Floating stat card */}
            <div style={{
              position: 'absolute',
              bottom: -20,
              left: -24,
              background: '#fff',
              border: '1px solid #E0E0DC',
              borderRadius: 14,
              padding: '14px 18px',
              boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
              minWidth: 180,
            }}>
              <div style={{ fontSize: 22, fontWeight: 800, color: '#044D40', lineHeight: 1 }}>20,000+</div>
              <div style={{ fontSize: 12.5, color: '#6B7280', fontWeight: 500, marginTop: 4 }}>Legal professionals in community</div>
            </div>

            {/* Floating batch pill */}
            <div style={{
              position: 'absolute',
              top: -14,
              right: -12,
              background: '#044D40',
              color: '#fff',
              borderRadius: 999,
              padding: '8px 16px',
              fontSize: 12.5,
              fontWeight: 700,
              boxShadow: '0 4px 16px rgba(4,77,64,0.35)',
              whiteSpace: 'nowrap',
            }}>
              🔥 Batch starts July 1
            </div>
          </div>
        </div>
      </div>

      {/* Seats banner */}
      <div style={{ background: '#F7F7F5', borderTop: '1px solid #E0E0DC', borderBottom: '1px solid #E0E0DC' }}>
        <div className="section-wrap">
          <div style={{
            display: 'flex', alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap', gap: 12,
            padding: '14px 0',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
              <span style={{
                background: '#0ABF53',
                color: '#fff',
                fontSize: 11,
                fontWeight: 700,
                padding: '4px 10px',
                borderRadius: 6,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
              }}>
                Limited Seats
              </span>
              <span style={{ fontSize: 14.5, fontWeight: 600, color: '#374151' }}>
                Next Batch Starts 1st July 2026
              </span>
            </div>
            <button
              onClick={onDownload}
              className="btn-primary"
              style={{ fontSize: 13.5, padding: '10px 20px' }}
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
