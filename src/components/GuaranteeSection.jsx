const steps = [
  { num: '01', title: 'Attend Classes', text: 'Attend ≥ 66% of live sessions with your camera on.' },
  { num: '02', title: 'Submit Assignments', text: 'Complete and submit all assignments with passing grades.' },
  { num: '03', title: 'Claim Your Refund', text: 'Email us within 10 days of completion — full refund, no questions.' },
]

// Two-tone shield-check (orange shield + espresso tick), matching the
// site's duotone icon language.
const ShieldArt = () => (
  <svg width="38" height="38" viewBox="0 0 40 40" fill="none"
       stroke="var(--c-accent)" strokeWidth="1.7"
       strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 4.5l12 4.2v9.1c0 8.7-6.2 13.9-12 16.7-5.8-2.8-12-8-12-16.7V8.7z"
          fill="var(--c-accent)" fillOpacity="0.15" />
    <path d="M14.2 19.8l4 4 7.6-8"
          stroke="var(--c-forest)" strokeWidth="2.1" />
  </svg>
)

export default function GuaranteeSection() {
  return (
    <section className="section" style={{ background: 'var(--c-white)', borderTop: '1px solid var(--c-border)' }}>
      <div className="section-wrap">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.15fr',
          gap: 64,
          alignItems: 'start',
        }} className="guarantee-grid">

          {/* Left */}
          <div>
            <div style={{
              width: 72, height: 72, borderRadius: 20,
              background: 'var(--c-accent-light)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              marginBottom: 4,
            }}>
              <ShieldArt />
            </div>
            <span className="chip" style={{ paddingLeft: 4 }}>Risk Free</span>
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
              <span style={{ fontSize: 16, fontWeight: 600, color: 'var(--c-heading3)' }}>
                No fine print. No partial refunds. 100% back.
              </span>
            </div>
          </div>

          {/* Right: steps panel with connected timeline */}
          <div style={{
            background: 'var(--c-surface-alt)',
            border: '1px solid var(--c-border)',
            borderRadius: 20,
            padding: '34px 36px',
          }}>
            <div style={{
              fontSize: 12.5, fontWeight: 700, letterSpacing: '0.09em',
              textTransform: 'uppercase', color: 'var(--c-meta)',
              marginBottom: 26,
            }}>
              How to claim your refund
            </div>
            <div>
              {steps.map(({ num, title, text }, i) => {
                const isLast = i === steps.length - 1
                return (
                  <div key={num} style={{
                    display: 'flex', gap: 18,
                    paddingBottom: isLast ? 0 : 26,
                    position: 'relative',
                  }}>
                    {/* connecting line */}
                    {!isLast && (
                      <div style={{
                        position: 'absolute', left: 19, top: 42, bottom: 0,
                        width: 2, background: 'var(--c-border)',
                      }} />
                    )}
                    <div style={{
                      width: 40, height: 40, borderRadius: '50%',
                      background: 'var(--c-accent-light)',
                      color: 'var(--c-accent-text)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: 15, fontWeight: 800,
                      flexShrink: 0, zIndex: 1,
                    }}>
                      {num}
                    </div>
                    <div style={{ paddingTop: 7 }}>
                      <div style={{ fontSize: 16, fontWeight: 700, color: 'var(--c-ink)', marginBottom: 4 }}>{title}</div>
                      <div style={{ fontSize: 15, color: 'var(--c-body)', lineHeight: 1.55 }}>{text}</div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) { .guarantee-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}
