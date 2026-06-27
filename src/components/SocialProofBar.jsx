const proofs = [
  { value: '20,000+', label: 'Learners Trained' },
  { value: '4.8/5', label: 'Average Rating' },
  { value: '1,000+', label: 'Student Reviews' },
  { value: '100%', label: 'Money-Back Guarantee' },
]

function StarSmall() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="#F6A609">
      <path d="M12 2l2.9 6.3 6.9.7-5.1 4.6 1.4 6.8L12 17.6 5.9 20.4l1.4-6.8L2.2 9l6.9-.7z"/>
    </svg>
  )
}

export default function SocialProofBar() {
  return (
    <section style={{ background: '#fff', borderBottom: '1px solid #ebedf6' }}>
      <div className="section-wrap" style={{ padding: '36px 48px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '24px 32px',
        }} className="proof-grid">
          {proofs.map(({ value, label }, i) => (
            <div key={label} style={{ textAlign: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, marginBottom: 4 }}>
                {i === 1 && <div style={{ display: 'flex', gap: 2 }}>{[...Array(5)].map((_, j) => <StarSmall key={j} />)}</div>}
                <div style={{
                  fontFamily: 'Sora, sans-serif',
                  fontWeight: 800,
                  fontSize: 'clamp(20px, 3vw, 28px)',
                  color: '#1b2244',
                  letterSpacing: '-0.5px',
                }}>
                  {value}
                </div>
              </div>
              <div style={{ color: '#6f748f', fontSize: 13.5 }}>{label}</div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 699px) {
          .proof-grid { grid-template-columns: repeat(2,1fr) !important; }
        }
      `}</style>
    </section>
  )
}
