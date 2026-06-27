export default function FinalCTA({ onDownload }) {
  return (
    <section style={{ background: 'var(--c-forest)', padding: '96px 0' }}>
      <div className="section-wrap" style={{ textAlign: 'center' }}>
        <h2 style={{
          fontSize: 'clamp(28px,3.5vw,44px)',
          fontWeight: 700,
          color: 'var(--c-white)',
          letterSpacing: '-0.02em',
          lineHeight: 1.15,
          marginBottom: 16,
        }}>
          Ready to launch your legal career?
        </h2>
        <p style={{
          color: 'rgba(255,255,255,0.72)',
          fontSize: 18,
          maxWidth: 520,
          margin: '0 auto 36px',
          lineHeight: 1.65,
        }}>
          Draft real contracts, learn from practicing lawyers, and build a high-income freelancing career — all in 6 months.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: 14, flexWrap: 'wrap', marginBottom: 18 }}>
          <a
            href="https://www.lawctopuslawschool.com/courses/cdn6-months/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ fontSize: 16, padding: '15px 32px' }}
          >
            Enroll Now — ₹24,999
          </a>
          <button
            onClick={onDownload}
            className="btn-ghost-dark"
            style={{ fontSize: 16 }}
          >
            Download Syllabus First
          </button>
        </div>

        <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.45)' }}>
          No credit card required · 100% money-back guarantee · Next batch: July 1, 2026
        </p>
      </div>
    </section>
  )
}
