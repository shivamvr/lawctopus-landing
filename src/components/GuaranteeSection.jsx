const terms = [
  { step: '01', title: 'Attend Classes', text: 'Attend minimum 66% of live classes with camera on' },
  { step: '02', title: 'Submit Assignments', text: 'Submit all assignments with passing grades' },
  { step: '03', title: 'Claim Refund', text: 'Email within 10 days of course completion for a full refund' },
]

export default function GuaranteeSection() {
  return (
    <section style={{ background: '#fff', padding: '66px 0', borderTop: '1px solid #ebedf6' }}>
      <div className="section-wrap">
        <div style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto 36px' }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            width: 64, height: 64, borderRadius: '50%',
            background: 'linear-gradient(135deg,#4B2FCB,#6d4ae6)',
            marginBottom: 16,
          }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.7">
              <path d="M12 2c3 2 5 5 5 9 0 2-1 4-2 5l-3 2-3-2c-1-1-2-3-2-5 0-4 2-7 5-9z"/>
              <path d="M9 12l2 2 4-4"/>
            </svg>
          </span>
          <h2 className="heading-display" style={{ fontSize: 'clamp(30px, 3.5vw, 44px)', color: '#161b3a', marginBottom: 12 }}>
            100% Money-Back Guarantee
          </h2>
          <p style={{ color: '#6f748f', fontSize: 15.5, lineHeight: 1.7 }}>
            If you complete the course sincerely and still feel it didn't add value to your career,
            we'll refund 100% of your fee — no questions asked.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16 }} className="guarantee-grid">
          {terms.map(({ step, title, text }) => (
            <div key={step} style={{
              background: '#f5f6fb',
              border: '1px solid #ebedf6',
              borderRadius: 16,
              padding: '22px 20px',
              position: 'relative',
            }}>
              <div style={{
                fontSize: 11, fontWeight: 700,
                color: '#4B2FCB',
                fontFamily: 'var(--font-mono)',
                marginBottom: 10,
                letterSpacing: '0.05em',
              }}>
                Step {step}
              </div>
              <div style={{ fontWeight: 700, fontSize: 15, color: '#1b2244', marginBottom: 6 }}>{title}</div>
              <p style={{ color: '#6f748f', fontSize: 13.5, lineHeight: 1.6 }}>{text}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 699px) {
          .guarantee-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
