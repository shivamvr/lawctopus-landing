import { useState } from 'react'
import { LawctopusWordmark } from './Logo'

const navLinks = [
  { href: '#curriculum',    label: 'Curriculum' },
  { href: '#instructors',   label: 'Instructors' },
  { href: '#testimonials',  label: 'Testimonials' },
  { href: '#pricing',       label: 'Pricing' },
  { href: '#faq',           label: 'FAQ' },
]

export default function MainNav({ onDownload }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <nav style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 100,
        background: 'rgba(10,14,42,0.97)',
        backdropFilter: 'blur(14px)',
        borderBottom: '1px solid rgba(255,255,255,0.07)',
        height: 68,
        display: 'flex',
        alignItems: 'center',
      }}>
        <div className="section-wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
          {/* Logo */}
          <a href="#" style={{ textDecoration: 'none' }}>
            <LawctopusWordmark onDark tagline fontSize={22} />
          </a>

          {/* Desktop nav links */}
          <div style={{ display: 'flex', gap: 32, alignItems: 'center' }} className="desktop-nav">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                style={{
                  color: '#c8d0f0',
                  textDecoration: 'none',
                  fontSize: 15,
                  fontWeight: 600,
                  transition: 'color .15s',
                }}
                onMouseEnter={e => e.target.style.color = '#fff'}
                onMouseLeave={e => e.target.style.color = '#c8d0f0'}
              >
                {label}
              </a>
            ))}
          </div>

          {/* Desktop actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }} className="desktop-actions">
            <button
              onClick={onDownload}
              style={{
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.18)',
                color: '#fff',
                padding: '9px 18px',
                borderRadius: 10,
                fontWeight: 600,
                fontSize: 14,
                cursor: 'pointer',
                fontFamily: 'inherit',
              }}
            >
              Download Syllabus
            </button>
            <a
              href="https://www.lawctopuslawschool.com/courses/cdn6-months/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                height: 38,
                padding: '0 20px',
                background: '#F26A1B',
                color: '#fff',
                fontSize: 14,
                fontWeight: 700,
                borderRadius: 10,
                textDecoration: 'none',
                fontFamily: 'inherit',
              }}
            >
              Enroll Now
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(o => !o)}
            className="mobile-burger"
            style={{
              display: 'none',
              alignItems: 'center',
              justifyContent: 'center',
              width: 44, height: 44,
              borderRadius: 10,
              background: 'rgba(255,255,255,.08)',
              border: '1px solid rgba(255,255,255,.15)',
              color: '#fff',
              cursor: 'pointer',
            }}
            aria-label="Toggle menu"
          >
            {menuOpen
              ? <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>
              : <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
            }
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div style={{
          position: 'fixed',
          top: 68, left: 0, right: 0,
          zIndex: 99,
          background: 'rgba(10,14,42,0.98)',
          borderBottom: '1px solid rgba(255,255,255,.08)',
          padding: '16px 20px 20px',
        }}>
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'block',
                color: '#c8d0f0',
                textDecoration: 'none',
                fontSize: 16,
                fontWeight: 600,
                padding: '12px 0',
                borderBottom: '1px solid rgba(255,255,255,.07)',
              }}
            >
              {label}
            </a>
          ))}
          <div style={{ display: 'flex', gap: 10, marginTop: 16 }}>
            <button
              onClick={() => { onDownload(); setMenuOpen(false) }}
              style={{
                flex: 1, background: 'rgba(255,255,255,.08)',
                border: '1px solid rgba(255,255,255,.18)',
                color: '#fff', padding: '12px',
                borderRadius: 10, fontWeight: 600,
                fontSize: 14, cursor: 'pointer', fontFamily: 'inherit',
              }}
            >
              Download Syllabus
            </button>
            <a
              href="https://www.lawctopuslawschool.com/courses/cdn6-months/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: '#F26A1B', color: '#fff',
                padding: '12px', borderRadius: 10,
                fontWeight: 700, fontSize: 14,
                textDecoration: 'none', fontFamily: 'inherit',
              }}
            >
              Enroll Now
            </a>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 1079px) {
          .desktop-nav { display: none !important; }
          .desktop-actions { display: none !important; }
          .mobile-burger { display: inline-flex !important; }
        }
      `}</style>
    </>
  )
}
