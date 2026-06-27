export default function StickyNav({ show, onDownload }) {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 50,
        background: 'rgba(10,14,42,0.96)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
        transform: show ? 'translateY(0)' : 'translateY(-100%)',
        transition: 'transform 0.3s ease',
      }}
    >
      <div className="section-wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 60 }}>
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <svg width="30" height="30" viewBox="0 0 48 48" fill="none">
            <ellipse cx="24" cy="18" rx="13" ry="12" fill="#F26A1B"/>
            <circle cx="19" cy="17" r="2.6" fill="#fff"/><circle cx="29" cy="17" r="2.6" fill="#fff"/>
            <circle cx="19.4" cy="17.6" r="1.2" fill="#1b2244"/><circle cx="29.4" cy="17.6" r="1.2" fill="#1b2244"/>
            <path d="M13 26c-2 5-3 8-7 10" stroke="#F26A1B" strokeWidth="4" strokeLinecap="round"/>
            <path d="M18 28c-1 5-2 8-4 11" stroke="#F26A1B" strokeWidth="4" strokeLinecap="round"/>
            <path d="M24 29v12" stroke="#F26A1B" strokeWidth="4" strokeLinecap="round"/>
            <path d="M30 28c1 5 2 8 4 11" stroke="#F26A1B" strokeWidth="4" strokeLinecap="round"/>
            <path d="M35 26c2 5 3 8 7 10" stroke="#F26A1B" strokeWidth="4" strokeLinecap="round"/>
          </svg>
          <span style={{ fontFamily: 'Sora, sans-serif', fontWeight: 800, fontSize: 18, color: '#fff', letterSpacing: '-0.5px' }}>
            Lawctopus
          </span>
          <span style={{ fontSize: 12, color: '#9aa1cf', fontWeight: 600, display: 'none' }} className="sm:inline">
            · Contract Drafting & Freelancing
          </span>
        </div>

        {/* Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <button
            onClick={onDownload}
            style={{
              display: 'none',
              alignItems: 'center',
              height: 36,
              padding: '0 16px',
              color: '#d6daf3',
              fontSize: 13,
              fontWeight: 600,
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: 10,
              background: 'transparent',
              cursor: 'pointer',
              fontFamily: 'inherit',
            }}
            className="sm:!flex"
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
              height: 36,
              padding: '0 18px',
              background: '#F26A1B',
              color: '#fff',
              fontSize: 13,
              fontWeight: 700,
              borderRadius: 10,
              textDecoration: 'none',
              fontFamily: 'inherit',
            }}
          >
            Enroll Now
          </a>
        </div>
      </div>
    </div>
  )
}
