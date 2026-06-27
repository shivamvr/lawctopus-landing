export default function FinalCTA({ onDownload }) {
  return (
    <section style={{ background: 'linear-gradient(90deg,#4B2FCB 0%,#6d4ae6 100%)' }}>
      <div className="section-wrap">
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 24,
          padding: '44px 0',
          flexWrap: 'wrap',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
            <span style={{
              width: 58, height: 58, borderRadius: 16,
              background: 'rgba(255,255,255,.16)',
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              color: '#fff', flexShrink: 0,
            }}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                <path d="M12 2c3 2 5 5 5 9 0 2-1 4-2 5l-3 2-3-2c-1-1-2-3-2-5 0-4 2-7 5-9z"/>
                <circle cx="12" cy="9" r="2"/>
                <path d="M7 16l-2 4 4-1M17 16l2 4-4-1"/>
              </svg>
            </span>
            <div>
              <h2 className="heading-display" style={{ fontSize: 'clamp(22px, 3vw, 28px)', color: '#fff', letterSpacing: '-0.5px' }}>
                Ready to Accelerate Your Legal Career?
              </h2>
              <p style={{ color: '#dcd6f8', fontSize: 15, marginTop: 6 }}>
                Join 20,000+ professionals who have elevated their careers with Lawctopus. Next batch starts July 1, 2026.
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, flexShrink: 0 }}>
            <a
              href="https://www.lawctopuslawschool.com/courses/cdn6-months/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 9,
                background: '#F26A1B', color: '#fff',
                padding: '15px 26px', borderRadius: 13,
                fontWeight: 700, fontSize: 15, textDecoration: 'none',
                fontFamily: 'inherit', flexShrink: 0,
                boxShadow: '0 14px 30px rgba(0,0,0,.2)',
              }}
            >
              Enroll Now — ₹24,999
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                <path d="M5 12h14M13 6l6 6-6 6"/>
              </svg>
            </a>
            <button
              onClick={onDownload}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 9,
                background: 'rgba(255,255,255,.15)',
                border: '1px solid rgba(255,255,255,.3)',
                color: '#fff', padding: '15px 22px', borderRadius: 13,
                fontWeight: 600, fontSize: 14.5, cursor: 'pointer',
                fontFamily: 'inherit', flexShrink: 0,
              }}
            >
              Download Syllabus
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
