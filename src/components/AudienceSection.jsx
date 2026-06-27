const audiences = [
  { title: 'Law Students', description: 'Build real drafting skills beyond the classroom and stand out in a competitive job market.', icon: '📚' },
  { title: 'Young Lawyers (0–4 yrs)', description: 'Accelerate your career by mastering contracts that clients actually need — right now.', icon: '⚖️' },
  { title: 'Academicians', description: 'Add high-value practical credentials to your profile and enrich your teaching.', icon: '🎓' },
  { title: 'Freelancing Enthusiasts', description: 'Launch a flexible legal freelancing income on Upwork, LinkedIn, and beyond.', icon: '💼' },
]

export default function AudienceSection() {
  return (
    <section style={{ background: '#f5f6fb', padding: '66px 0' }}>
      <div className="section-wrap">
        <div style={{ marginBottom: 28 }}>
          <span className="section-badge">Who Is This For</span>
          <h2 className="heading-display" style={{ fontSize: 'clamp(30px, 3.5vw, 44px)', color: '#161b3a', margin: '14px 0 6px' }}>
            Is This Course Right For You?
          </h2>
          <p style={{ color: '#6f748f', fontSize: 15 }}>Designed for legal professionals at every stage</p>
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 16,
        }} className="audience-grid">
          {audiences.map(({ title, description, icon }) => (
            <div key={title} style={{
              background: '#fff',
              border: '1px solid #ebedf6',
              borderRadius: 16,
              padding: '22px 18px',
              boxShadow: '0 2px 12px rgba(75,47,203,.05)',
            }}>
              <div style={{ fontSize: 28, marginBottom: 12 }}>{icon}</div>
              <h3 style={{ fontWeight: 700, fontSize: 15, color: '#1b2244', marginBottom: 8 }}>{title}</h3>
              <p style={{ color: '#6f748f', fontSize: 13.5, lineHeight: 1.6 }}>{description}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1079px) {
          .audience-grid { grid-template-columns: repeat(2,1fr) !important; }
        }
        @media (max-width: 699px) {
          .audience-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  )
}
