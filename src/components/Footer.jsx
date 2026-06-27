const quickLinks = ['About Us', 'Curriculum', 'Instructors', 'Testimonials', 'FAQ']
const resources = ['Blog', 'Legal Articles', 'Career Guide', 'Webinars', 'Syllabus']
const support = ['Contact Us', 'Help Center', 'Privacy Policy', 'Terms & Conditions']

function SocialLink({ children, href = '#' }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        width: 38, height: 38, borderRadius: 10,
        background: 'rgba(255,255,255,.06)',
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        color: '#c0c5e4', textDecoration: 'none',
      }}
    >
      {children}
    </a>
  )
}

export default function Footer() {
  return (
    <footer style={{ background: '#070a20', color: '#c0c5e4', padding: '56px 0 24px' }}>
      <div className="section-wrap">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.6fr 1fr 1fr 1fr 1.5fr',
          gap: 28,
          rowGap: 36,
        }} className="footer-grid">

          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <svg width="32" height="32" viewBox="0 0 48 48" fill="none">
                <ellipse cx="24" cy="18" rx="13" ry="12" fill="#F26A1B"/>
                <circle cx="19" cy="17" r="2.4" fill="#fff"/><circle cx="29" cy="17" r="2.4" fill="#fff"/>
                <path d="M13 26c-2 5-3 8-7 10M18 28c-1 5-2 8-4 11M24 29v12M30 28c1 5 2 8 4 11M35 26c2 5 3 8 7 10" stroke="#F26A1B" strokeWidth="4" strokeLinecap="round"/>
              </svg>
              <div style={{ fontFamily: 'Sora, sans-serif', fontWeight: 800, fontSize: 21, color: '#fff', letterSpacing: '-0.5px' }}>Lawctopus</div>
            </div>
            <p style={{ color: '#9298c0', fontSize: 13.5, lineHeight: 1.7, maxWidth: 280 }}>
              Empowering the next generation of legal professionals with industry-relevant education. India's most trusted legal career platform.
            </p>
            <div style={{ display: 'flex', gap: 10, marginTop: 18 }}>
              <SocialLink>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M14 9h3V5h-3c-2.2 0-4 1.8-4 4v2H7v4h3v6h4v-6h3l1-4h-4V9c0-.6.4-1 1-1z"/></svg>
              </SocialLink>
              <SocialLink>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1.2" fill="currentColor"/></svg>
              </SocialLink>
              <SocialLink>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 9h4v12H3zM10 9h3.8v1.7c.6-1 1.9-2 3.7-2 3 0 4.5 1.9 4.5 5.6V21h-4v-5.7c0-1.5-.5-2.5-1.9-2.5-1 0-1.7.7-1.9 1.4-.1.2-.1.6-.1.9V21h-4z"/></svg>
              </SocialLink>
              <SocialLink href="https://www.youtube.com/@lawctopus">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12s0-3-.4-4.4a2.7 2.7 0 00-1.9-1.9C18.3 5.3 12 5.3 12 5.3s-6.3 0-7.7.4a2.7 2.7 0 00-1.9 1.9C2 9 2 12 2 12s0 3 .4 4.4a2.7 2.7 0 001.9 1.9c1.4.4 7.7.4 7.7.4s6.3 0 7.7-.4a2.7 2.7 0 001.9-1.9C22 15 22 12 22 12zm-12 3V9l5 3z"/></svg>
              </SocialLink>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div style={{ color: '#fff', fontWeight: 700, fontSize: 14.5, marginBottom: 16 }}>Quick Links</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 11, fontSize: 13.5 }}>
              {quickLinks.map(l => (
                <a key={l} href={`#${l.toLowerCase().replace(/\s/g,'')}`} style={{ color: '#9298c0', textDecoration: 'none' }}>{l}</a>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div>
            <div style={{ color: '#fff', fontWeight: 700, fontSize: 14.5, marginBottom: 16 }}>Resources</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 11, fontSize: 13.5 }}>
              {resources.map(l => (
                <a key={l} href="https://www.lawctopus.com" target="_blank" rel="noopener noreferrer" style={{ color: '#9298c0', textDecoration: 'none' }}>{l}</a>
              ))}
            </div>
          </div>

          {/* Support */}
          <div>
            <div style={{ color: '#fff', fontWeight: 700, fontSize: 14.5, marginBottom: 16 }}>Support</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 11, fontSize: 13.5 }}>
              {support.map(l => (
                <a key={l} href="#" style={{ color: '#9298c0', textDecoration: 'none' }}>{l}</a>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <div style={{ color: '#fff', fontWeight: 700, fontSize: 14.5, marginBottom: 14 }}>Stay Updated</div>
            <p style={{ color: '#9298c0', fontSize: 13.5, lineHeight: 1.6, marginBottom: 14 }}>
              Subscribe for the latest legal insights and course updates.
            </p>
            <div style={{
              display: 'flex',
              background: 'rgba(255,255,255,.06)',
              border: '1px solid rgba(255,255,255,.12)',
              borderRadius: 11, padding: 5, gap: 6,
            }}>
              <input
                type="email"
                placeholder="Enter your email"
                style={{
                  flex: 1, minWidth: 0,
                  background: 'transparent', border: 'none',
                  color: '#fff', padding: '8px 10px', fontSize: 13.5,
                  fontFamily: 'inherit', outline: 'none',
                }}
              />
              <button style={{
                width: 40, height: 40, borderRadius: 9,
                background: '#F26A1B', border: 'none',
                color: '#fff', cursor: 'pointer',
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
              }}>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M5 12h14M13 6l6 6-6 6"/>
                </svg>
              </button>
            </div>
            <div style={{ marginTop: 16, fontSize: 13, color: '#9298c0' }}>
              <div>courses@lawctopus.com</div>
              <div>+91 9214883452</div>
            </div>
          </div>
        </div>

        <div style={{
          borderTop: '1px solid rgba(255,255,255,.08)',
          marginTop: 40, paddingTop: 22,
          textAlign: 'center', color: '#8086ac', fontSize: 13,
        }}>
          © 2026 Lawctopus Law School. All rights reserved. · India's most trusted legal education platform.
        </div>
      </div>

      <style>{`
        @media (max-width: 1079px) {
          .footer-grid { grid-template-columns: 1fr 1fr 1fr !important; }
        }
        @media (max-width: 699px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </footer>
  )
}
