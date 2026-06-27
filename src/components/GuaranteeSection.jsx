const steps = [
  { num: '01', title: 'Attend Classes', text: 'Attend ≥ 66% of live sessions with your camera on.' },
  { num: '02', title: 'Submit Assignments', text: 'Complete and submit all assignments with passing grades.' },
  { num: '03', title: 'Claim Your Refund', text: 'Email us within 10 days of completion — full refund, no questions.' },
]

export default function GuaranteeSection() {
  return (
    <section className="section" style={{ background: 'var(--c-white)', borderTop: '1px solid var(--c-border)' }}>
      <div className="section-wrap">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.4fr',
          gap: 56,
          alignItems: 'center',
        }} className="guarantee-grid">

          {/* Left */}
          <div>
            <div style={{
              width: 72, height: 72, borderRadius: 20,
              background: 'var(--c-accent-light)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 32, marginBottom: 24,
            }}>
              🛡️
            </div>
            <span className="chip">Risk Free</span>
            <h2 className="heading-2" style={{ marginBottom: 16 }}>
              100% Money-Back Guarantee
            </h2>
            <p style={{ color: 'var(--c-body)', fontSize: 16, lineHeight: 1.7, marginBottom: 24 }}>
              We're so confident in the quality of this program that we offer a complete money-back guarantee. If you do the work and don't see results, you pay nothing.
            </p>
            <div style={{
              background: 'var(--c-surface-alt)',
              border: '1px solid var(--c-border)',
              borderRadius: 12,
              padding: '14px 18px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
            }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--c-accent)" strokeWidth="2" strokeLinecap="round"><path d="M20 6L9 17l-5-5"/></svg>
              <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--c-heading3)' }}>
                No fine print. No partial refunds. 100% back.
              </span>
            </div>
          </div>

          {/* Right: steps */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {steps.map(({ num, title, text }) => (
              <div key={num} style={{
                display: 'flex', gap: 18,
                background: 'var(--c-surface-alt)',
                border: '1px solid var(--c-border)',
                borderRadius: 14,
                padding: '20px 22px',
              }}>
                <div style={{
                  fontSize: 13, fontWeight: 800,
                  color: 'var(--c-accent)',
                  fontFamily: "'Inter', monospace",
                  letterSpacing: '0.04em',
                  flexShrink: 0,
                  paddingTop: 2,
                }}>
                  {num}
                </div>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--c-ink)', marginBottom: 5 }}>{title}</div>
                  <div style={{ fontSize: 14, color: 'var(--c-body)', lineHeight: 1.55 }}>{text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) { .guarantee-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}
