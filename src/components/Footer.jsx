import { LawctopusWordmark } from './Logo'

const cols = [
  {
    head: 'Program',
    links: ['Curriculum', 'Instructors', 'Testimonials', 'Pricing', 'Bonuses', 'Guarantee'],
    hrefs: ['#curriculum', '#instructors', '#testimonials', '#pricing', '#', '#'],
  },
  {
    head: 'Compare',
    links: ['2-Month vs 6-Month', 'vs Other Courses', 'CDN vs LLM', 'CDN vs Internship'],
    hrefs: ['#pricing', '#', '#', '#'],
  },
  {
    head: 'Resources',
    links: ['Download Syllabus', 'Legal Blog', 'Career Guide', 'AI Tools for Lawyers', 'Webinars'],
    hrefs: ['#', 'https://lawctopus.com', '#', '#', '#'],
  },
  {
    head: 'Support',
    links: ['Contact Us', 'Help Center', 'Privacy Policy', 'Terms & Conditions', 'Refund Policy'],
    hrefs: ['mailto:support@lawctopus.com', '#', '#', '#', '#'],
  },
  {
    head: 'Company',
    links: ['About Lawctopus', 'Lawctopus Law School', 'For Law Firms', 'Partner With Us', 'Press'],
    hrefs: ['https://lawctopus.com/about', 'https://lawctopus.com', '#', '#', '#'],
  },
]

const socials = [
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 9h4v12H3zM10 9h3.8v1.7c.6-1 1.9-2 3.7-2 3 0 4.5 1.9 4.5 5.6V21h-4v-5.7c0-1.5-.5-2.5-1.9-2.5-1 0-1.7.7-1.9 1.4-.1.2-.1.6-.1.9V21h-4z"/></svg> },
  { label: 'Twitter', href: 'https://twitter.com', icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> },
  { label: 'Instagram', href: 'https://instagram.com', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg> },
  { label: 'YouTube', href: 'https://youtube.com', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22.5 6.5s-.2-1.6-.9-2.3c-.9-.9-1.8-.9-2.3-1C17 3 12 3 12 3s-5 0-7.3.2c-.5.1-1.4.1-2.3 1-.7.7-.9 2.3-.9 2.3S1.2 8.3 1.2 10v1.6c0 1.7.3 3.4.3 3.4s.2 1.6.9 2.3c.9.9 2 .9 2.5 1 1.8.2 7.6.2 7.6.2s5 0 7.3-.2c.5-.1 1.4-.1 2.3-1 .7-.7.9-2.3.9-2.3s.3-1.7.3-3.4V10c-.1-1.7-.4-3.5-.4-3.5zm-13.3 7.1V8.4l6.2 2.6-6.2 2.6z"/></svg> },
]

export default function Footer() {
  return (
    <footer style={{ background: 'var(--c-forest)', color: 'rgba(255,255,255,0.7)', padding: '72px 0 0' }}>
      <div className="section-wrap">
        {/* Top: logo + social */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
          gap: 24,
          marginBottom: 48,
          paddingBottom: 48,
          borderBottom: '1px solid rgba(255,255,255,0.1)',
        }}>
          <div>
            <LawctopusWordmark onDark fontSize={22} tagline />
            <p style={{ fontSize: 13.5, color: 'rgba(255,255,255,0.5)', marginTop: 14, maxWidth: 260, lineHeight: 1.6 }}>
              India's leading platform for legal career development — from students to senior associates.
            </p>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            {socials.map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                style={{
                  width: 36, height: 36,
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.1)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'rgba(255,255,255,0.7)',
                  textDecoration: 'none',
                  transition: 'background 0.2s, color 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.2)'; e.currentTarget.style.color = 'var(--c-white)' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = 'rgba(255,255,255,0.7)' }}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Link columns */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5,1fr)',
          gap: 32,
          marginBottom: 48,
        }} className="footer-cols">
          {cols.map(({ head, links, hrefs }) => (
            <div key={head}>
              <div style={{
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.38)',
                marginBottom: 16,
              }}>
                {head}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {links.map((link, i) => (
                  <a
                    key={link}
                    href={hrefs[i]}
                    style={{
                      fontSize: 14,
                      color: 'rgba(255,255,255,0.62)',
                      textDecoration: 'none',
                      lineHeight: 2,
                      transition: 'color 0.15s',
                    }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--c-white)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.62)'}
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.1)',
          padding: '20px 0',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 12,
        }}>
          <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
            {['Cookie Settings', 'Privacy Policy', 'Terms of Service', 'Refund Policy'].map(l => (
              <a key={l} href="#" style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', textDecoration: 'none', transition: 'color 0.15s' }}
                onMouseEnter={e => e.currentTarget.style.color = 'rgba(255,255,255,0.8)'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}
              >{l}</a>
            ))}
          </div>
          <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)' }}>
            © Lawctopus 2026. All rights reserved.
          </span>
        </div>
      </div>

      <style>{`
        @media (max-width: 1023px) { .footer-cols { grid-template-columns: repeat(3,1fr) !important; } }
        @media (max-width: 639px)  { .footer-cols { grid-template-columns: repeat(2,1fr) !important; } }
      `}</style>
    </footer>
  )
}
