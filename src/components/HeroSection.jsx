import { useState } from 'react'
import { useForm, ValidationError } from '@formspree/react'
import { Loader, CheckCircle, Download, Play } from 'lucide-react'
import heroImg from '../assets/hero.png'

function StarIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="#F6A609">
      <path d="M12 2l2.9 6.3 6.9.7-5.1 4.6 1.4 6.8L12 17.6 5.9 20.4l1.4-6.8L2.2 9l6.9-.7z"/>
    </svg>
  )
}

function HeroInlineForm({ onDownload }) {
  const [state, handleSubmit] = useForm('mgojkzjv')
  const [vals, setVals] = useState({ name: '', email: '', phone: '' })
  const set = k => e => setVals(v => ({ ...v, [k]: e.target.value }))

  const inputStyle = {
    width: '100%',
    border: '1.5px solid #e3e6f3',
    borderRadius: 10,
    padding: '11px 13px',
    fontSize: 13.5,
    color: '#1b2244',
    fontFamily: 'inherit',
    marginBottom: 13,
    outline: 'none',
    boxSizing: 'border-box',
  }
  const labelStyle = {
    display: 'block',
    fontSize: 12.5,
    fontWeight: 600,
    color: '#41465f',
    marginBottom: 5,
  }

  if (state.succeeded) {
    return (
      <div style={{ textAlign: 'center', padding: '24px 0' }}>
        <CheckCircle style={{ width: 44, height: 44, color: '#4B2FCB', margin: '0 auto 12px' }} />
        <div style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: 19, color: '#1b2244', marginBottom: 8 }}>
          You're all set!
        </div>
        <p style={{ color: '#7c809e', fontSize: 13, lineHeight: 1.6 }}>
          We'll send the syllabus to your email shortly.<br />Check your inbox (and spam folder).
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit}>
      <label style={labelStyle} htmlFor="hero-name">Full Name</label>
      <input
        id="hero-name" name="name" type="text" required
        value={vals.name} onChange={set('name')}
        placeholder="Enter your full name"
        style={inputStyle}
      />
      <ValidationError field="name" errors={state.errors} className="text-red-600 text-xs" />

      <label style={labelStyle} htmlFor="hero-email">Email Address</label>
      <input
        id="hero-email" name="email" type="email" required
        value={vals.email} onChange={set('email')}
        placeholder="Enter your email"
        style={inputStyle}
      />
      <ValidationError field="email" errors={state.errors} className="text-red-600 text-xs" />

      <label style={labelStyle} htmlFor="hero-phone">Phone Number</label>
      <div style={{ display: 'flex', gap: 9, marginBottom: 17 }}>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 7,
          border: '1.5px solid #e3e6f3', borderRadius: 10, padding: '0 12px',
          fontWeight: 600, color: '#1b2244', fontSize: 13.5, flexShrink: 0,
        }}>
          <span style={{ display: 'flex', flexDirection: 'column', width: 17, height: 12, borderRadius: 2, overflow: 'hidden', border: '1px solid #e0e0e0' }}>
            <span style={{ flex: 1, background: '#FF9933' }}/>
            <span style={{ flex: 1, background: '#fff' }}/>
            <span style={{ flex: 1, background: '#138808' }}/>
          </span>
          +91
        </div>
        <input
          id="hero-phone" name="phone" type="tel" required
          value={vals.phone} onChange={set('phone')}
          placeholder="Enter your phone number"
          style={{ ...inputStyle, flex: 1, marginBottom: 0, minWidth: 0 }}
        />
      </div>
      <ValidationError field="phone" errors={state.errors} className="text-red-600 text-xs" />

      <button
        type="submit"
        disabled={state.submitting}
        style={{
          width: '100%',
          background: '#F26A1B',
          color: '#fff',
          border: 'none',
          padding: '13px',
          borderRadius: 11,
          fontWeight: 700,
          fontSize: 14.5,
          cursor: 'pointer',
          fontFamily: 'inherit',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 8,
          opacity: state.submitting ? 0.7 : 1,
        }}
      >
        {state.submitting
          ? <><Loader style={{ width: 16, height: 16, animation: 'spin 1s linear infinite' }} /> Sending…</>
          : <><Download style={{ width: 16, height: 16 }} /> Download Syllabus</>
        }
      </button>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, color: '#8b8fa8', fontSize: 12, marginTop: 12 }}>
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 018 0v3"/>
        </svg>
        We respect your privacy. Your details are safe with us.
      </div>
    </form>
  )
}

const statRows = [
  { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>, label: 'Duration', value: '6 Months' },
  { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><rect x="3" y="4" width="18" height="12" rx="1.5"/><path d="M8 20h8M12 16v4"/></svg>, label: 'Mode', value: 'Online (Live + Recorded)' },
  { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>, label: 'Effort', value: '8–10 hrs / week' },
  { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><circle cx="12" cy="9" r="5"/><path d="M9 13l-2 7 5-3 5 3-2-7"/></svg>, label: 'Certificate', value: 'Upon Completion' },
]

export default function HeroSection({ onDownload }) {
  return (
    <div className="hero-band">
      <div className="section-wrap" style={{ position: 'relative', zIndex: 2, paddingTop: 68 }}>
        {/* HERO GRID */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0,1.04fr) minmax(0,0.96fr)',
          gap: 44,
          alignItems: 'start',
          position: 'relative',
          zIndex: 2,
        }} className="hero-grid">
          {/* LEFT */}
          <div style={{ position: 'relative', zIndex: 2, padding: '14px 0 64px' }}>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: 7,
              background: 'rgba(255,255,255,.07)',
              border: '1px solid rgba(255,255,255,.14)',
              padding: '8px 14px', borderRadius: 30,
              fontSize: 13, fontWeight: 600, color: '#ffd9a8', whiteSpace: 'nowrap',
            }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="#F26A1B"><path d="M12 2l1.6 4.8L18 8l-3.6 2.8L15.5 16 12 13.2 8.5 16l1.1-5.2L6 8l4.4-1.2z"/></svg>
              Expert Level · 6-Month Program
            </span>

            <h1 style={{
              fontFamily: 'Sora, sans-serif',
              fontWeight: 800,
              fontSize: 'clamp(36px, 4.5vw, 62px)',
              lineHeight: 1.06,
              letterSpacing: '-1px',
              margin: '18px 0 0',
              color: '#fff',
            }}>
              Master Contract Drafting &{' '}
              <span style={{ color: '#F26A1B', display: 'block' }}>Launch Your Legal Freelancing Career</span>
            </h1>

            <p style={{ color: '#b9bfe2', fontSize: 16, lineHeight: 1.65, maxWidth: 480, marginTop: 18 }}>
              54 live sessions with industry experts. Draft 24 real contracts with personalized feedback.
              Build a high-income freelancing career on Upwork & LinkedIn.
            </p>

            {/* Pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 18, marginTop: 26 }}>
              {[
                { icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M9 4h6a2 2 0 012 2v13a1 1 0 01-1 1H8a1 1 0 01-1-1V6a2 2 0 012-2z"/><path d="M9 9h6M9 13h4"/></svg>, label: 'Industry Relevant\nCurriculum' },
                { icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="9" cy="8" r="3"/><path d="M3 20a6 6 0 0112 0"/><circle cx="17" cy="9" r="2.4"/><path d="M16 20a5 5 0 015-3"/></svg>, label: 'Learn from\nTop Professionals' },
                { icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="9" r="5"/><path d="M9 13l-2 7 5-3 5 3-2-7"/></svg>, label: 'Certificate of\nCompletion' },
              ].map(({ icon, label }) => (
                <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span style={{
                    width: 34, height: 34, borderRadius: 9,
                    background: 'rgba(255,255,255,.07)',
                    border: '1px solid rgba(255,255,255,.12)',
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                    color: '#F26A1B', flexShrink: 0,
                  }}>
                    {icon}
                  </span>
                  <span style={{ fontSize: 13.5, fontWeight: 500, color: '#dfe3f5', lineHeight: 1.3, whiteSpace: 'pre-line' }}>{label}</span>
                </div>
              ))}
            </div>

            {/* Stars */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 28 }}>
              <div style={{ display: 'flex', gap: 2 }}>
                {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
              </div>
              <span style={{ fontWeight: 700, fontSize: 15 }}>4.8/5</span>
              <span style={{ color: '#a8aed6', fontSize: 14 }}>(1,000+ Reviews)</span>
            </div>

            {/* CTAs */}
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 16, marginTop: 28 }}>
              <a
                href="https://www.lawctopuslawschool.com/courses/cdn6-months/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-accent"
                style={{ textDecoration: 'none' }}
              >
                <Download style={{ width: 18, height: 18 }} />
                Enroll Now — ₹24,999
              </a>
              <button
                onClick={onDownload}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 11,
                  background: 'transparent', color: '#fff',
                  border: 'none', cursor: 'pointer',
                  fontFamily: 'inherit', fontSize: 14.5, fontWeight: 600,
                }}
              >
                <span style={{
                  width: 42, height: 42, borderRadius: '50%',
                  background: 'rgba(255,255,255,.1)',
                  border: '1px solid rgba(255,255,255,.2)',
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Play style={{ width: 16, height: 16, fill: '#fff', strokeWidth: 0 }} />
                </span>
                Download Free Syllabus
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, paddingTop: 14 }}>
            {/* Hero image */}
            <div style={{ borderRadius: 18, overflow: 'hidden', border: '1px solid rgba(255,255,255,.1)' }}>
              <img
                src={heroImg}
                alt="Contract Drafting & Freelancing Course"
                style={{ width: '100%', height: 200, objectFit: 'cover', display: 'block' }}
              />
            </div>

            {/* Stat card */}
            <div style={{
              background: 'linear-gradient(180deg,rgba(24,30,72,.92),rgba(13,18,52,.92))',
              border: '1px solid rgba(255,255,255,.09)',
              borderRadius: 18, padding: '4px 20px',
              backdropFilter: 'blur(6px)',
            }}>
              {statRows.map((row, i) => (
                <div key={row.label} style={{
                  display: 'flex', alignItems: 'center', gap: 14,
                  padding: '13px 0',
                  borderBottom: i < statRows.length - 1 ? '1px solid rgba(255,255,255,.07)' : 'none',
                }}>
                  <span style={{ color: '#aeb4e0', flexShrink: 0 }}>{row.icon}</span>
                  <div>
                    <div style={{ fontSize: 11, color: '#9298c4', fontWeight: 600 }}>{row.label}</div>
                    <div style={{ fontSize: 14.5, fontWeight: 700, color: '#fff', marginTop: 2 }}>{row.value}</div>
                  </div>
                </div>
              ))}
              {/* Fee row */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '13px 0' }}>
                <span style={{ color: '#aeb4e0', flexShrink: 0 }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                    <path d="M12 2c3 2 5 5 5 9 0 2-1 4-2 5l-3 2-3-2c-1-1-2-3-2-5 0-4 2-7 5-9z"/>
                  </svg>
                </span>
                <div>
                  <div style={{ fontSize: 11, color: '#9298c4', fontWeight: 600 }}>Program Fee</div>
                  <div style={{ fontSize: 14.5, fontWeight: 700, color: '#fff', marginTop: 2, display: 'flex', alignItems: 'center', gap: 8 }}>
                    ₹24,999{' '}
                    <span style={{ color: '#8086b0', fontWeight: 500, textDecoration: 'line-through', fontSize: 12.5 }}>₹60,000</span>
                  </div>
                </div>
              </div>
              <button
                onClick={onDownload}
                style={{
                  width: '100%', margin: '4px 0 14px',
                  background: 'linear-gradient(90deg,#4B2FCB,#6d4ae6)',
                  color: '#fff', border: 'none', padding: '12px',
                  borderRadius: 11, fontWeight: 700, fontSize: 13.5,
                  cursor: 'pointer', fontFamily: 'inherit',
                }}
              >
                Download Syllabus — It's Free!
              </button>
            </div>

            {/* Inline form card */}
            <div style={{
              background: '#fff', borderRadius: 20, padding: '22px 24px',
              boxShadow: '0 30px 70px rgba(6,10,40,.5)', color: '#1b2244',
            }}>
              <div style={{ textAlign: 'center', marginBottom: 16 }}>
                <span style={{
                  width: 50, height: 50, borderRadius: '50%',
                  background: '#efeafb',
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  color: '#4B2FCB', marginBottom: 10,
                }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                    <path d="M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8z"/>
                    <path d="M14 3v5h5M9 14l3 3 0-6"/>
                  </svg>
                </span>
                <div style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: 19, color: '#1b2244' }}>Download Syllabus</div>
                <div style={{ color: '#7c809e', fontSize: 13, marginTop: 5, lineHeight: 1.5 }}>Get the complete 6-month curriculum guide.</div>
              </div>
              <HeroInlineForm onDownload={onDownload} />
            </div>
          </div>
        </div>
      </div>

      {/* SEATS BANNER */}
      <div style={{ background: '#070a20', borderTop: '1px solid rgba(255,255,255,.06)', position: 'relative', zIndex: 2 }}>
        <div className="section-wrap">
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 16,
            padding: '15px 0',
            flexWrap: 'wrap',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
              <span style={{ color: '#F26A1B' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>
                </svg>
              </span>
              <span style={{
                background: 'linear-gradient(90deg,#4B2FCB,#6d4ae6)',
                color: '#fff', fontSize: 12.5, fontWeight: 700,
                padding: '5px 12px', borderRadius: 7,
              }}>Limited Seats Only!</span>
              <span style={{ fontSize: 15, fontWeight: 600, color: '#e7e9f8' }}>
                Next Batch Starts on 1st July 2026
              </span>
            </div>
            <button
              onClick={onDownload}
              style={{
                background: '#F26A1B', color: '#fff', border: 'none',
                padding: '12px 22px', borderRadius: 11,
                fontWeight: 700, fontSize: 13.5,
                cursor: 'pointer', fontFamily: 'inherit', flexShrink: 0,
              }}
            >
              Download Syllabus Now
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1079px) {
          .hero-grid { grid-template-columns: 1fr !important; }
        }
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </div>
  )
}
