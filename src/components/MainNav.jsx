import { useState, useEffect } from 'react'
import { LawctopusWordmark } from './Logo'

const navLinks = [
  { href: '#curriculum',   label: 'Curriculum' },
  { href: '#instructors',  label: 'Instructors' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#pricing',      label: 'Pricing' },
  { href: '#faq',          label: 'FAQ' },
]

export default function MainNav({ onDownload }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    const ids = navLinks.map(l => l.href.slice(1))
    const onScroll = () => {
      setScrolled(window.scrollY > 10)
      // Active section = the last one whose top has scrolled above the line
      // just under the navbar (viewport-relative, so offset-parent agnostic).
      const probe = 130
      let current = ''
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= probe) current = id
      }
      // Snap to the final section once scrolled to the very bottom.
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 2) {
        current = ids[ids.length - 1]
      }
      setActiveId(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 100,
        height: 68,
        background: 'var(--c-white)',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        boxShadow: scrolled ? '0 1px 0 0 rgba(0,0,0,0.08)' : 'none',
        transition: 'box-shadow 0.2s ease',
        display: 'flex',
        alignItems: 'center',
      }}>
        <div className="section-wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
          {/* Logo */}
          <a href="#" style={{ textDecoration: 'none', flexShrink: 0 }}>
            <LawctopusWordmark fontSize={20} />
          </a>

          {/* Desktop nav links */}
          <div style={{ display: 'flex', gap: 32, alignItems: 'center' }} className="nav-links-desktop">
            {navLinks.map(({ href, label }) => {
              const isActive = activeId === href.slice(1)
              return (
                <a
                  key={href}
                  href={href}
                  style={{
                    position: 'relative',
                    color: isActive ? 'var(--c-accent)' : 'var(--c-ink)',
                    textDecoration: 'none',
                    fontSize: 16,
                    fontWeight: isActive ? 700 : 500,
                    transition: 'color 0.15s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--c-accent)'}
                  onMouseLeave={e => e.currentTarget.style.color = isActive ? 'var(--c-accent)' : 'var(--c-ink)'}
                >
                  {label}
                  <span style={{
                    position: 'absolute',
                    left: 0, right: 0, bottom: -22,
                    height: 2,
                    background: 'var(--c-accent)',
                    borderRadius: 2,
                    opacity: isActive ? 1 : 0,
                    transition: 'opacity 0.15s',
                  }} />
                </a>
              )
            })}
          </div>

          {/* Desktop actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }} className="nav-actions-desktop">
            <button
              onClick={onDownload}
              style={{
                background: 'transparent',
                border: '1.5px solid var(--c-border)',
                color: 'var(--c-ink)',
                padding: '9px 18px',
                borderRadius: 8,
                fontWeight: 600,
                fontSize: 16,
                cursor: 'pointer',
                fontFamily: 'inherit',
                transition: 'border-color 0.2s, background 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--c-ink)'; e.currentTarget.style.background = 'var(--c-surface-alt)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--c-border)'; e.currentTarget.style.background = 'transparent' }}
            >
              Download Syllabus
            </button>
            <a
              href="https://www.lawctopuslawschool.com/courses/cdn6-months/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ fontSize: 16, padding: '10px 20px' }}
            >
              Enroll Now
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(o => !o)}
            className="nav-burger"
            style={{
              display: 'none',
              alignItems: 'center',
              justifyContent: 'center',
              width: 40, height: 40,
              borderRadius: 8,
              background: 'transparent',
              border: '1.5px solid var(--c-border)',
              color: 'var(--c-ink)',
              cursor: 'pointer',
            }}
            aria-label="Toggle menu"
          >
            {menuOpen
              ? <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>
              : <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
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
          background: 'var(--c-white)',
          borderBottom: '1px solid var(--c-border)',
          padding: '12px 20px 20px',
          boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
        }}>
          {navLinks.map(({ href, label }) => {
            const isActive = activeId === href.slice(1)
            return (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                style={{
                  display: 'block',
                  color: isActive ? 'var(--c-accent)' : 'var(--c-ink)',
                  textDecoration: 'none',
                  fontSize: 16,
                  fontWeight: isActive ? 700 : 600,
                  padding: '13px 0',
                  borderBottom: '1px solid var(--c-surface-fill)',
                }}
              >
                {label}
              </a>
            )
          })}
          <div style={{ display: 'flex', gap: 10, marginTop: 16 }}>
            <button
              onClick={() => { onDownload(); setMenuOpen(false) }}
              style={{
                flex: 1, background: 'transparent',
                border: '1.5px solid var(--c-border)',
                color: 'var(--c-ink)', padding: '12px',
                borderRadius: 8, fontWeight: 600,
                fontSize: 16, cursor: 'pointer', fontFamily: 'inherit',
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
                background: 'var(--c-accent)', color: 'var(--c-white)',
                padding: '12px', borderRadius: 8,
                fontWeight: 600, fontSize: 16,
                textDecoration: 'none', fontFamily: 'inherit',
              }}
            >
              Enroll Now
            </a>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 1023px) {
          .nav-links-desktop { display: none !important; }
          .nav-actions-desktop { display: none !important; }
          .nav-burger { display: inline-flex !important; }
        }
      `}</style>
    </>
  )
}
