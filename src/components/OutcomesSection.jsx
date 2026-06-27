const outcomes = [
  { title: 'Draft 24 Real Contracts', description: 'From NDAs and employment agreements to international commercial contracts and IPR licenses.', icon: '📝' },
  { title: 'Save 4 Years of Your Career', description: 'Compress years of on-the-job learning into one structured, expert-led 6-month program.', icon: '⏱️' },
  { title: '10 Contracts with Expert Feedback', description: 'Submit drafts and receive personalized, line-by-line feedback from practicing lawyers.', icon: '✅' },
  { title: 'Launch Your Freelancing Career', description: 'Build your Upwork and LinkedIn presence with a top-rated Upwork legal freelancer as your guide.', icon: '🚀' },
  { title: 'Master AI for Legal Drafting', description: 'Monthly AI sessions with Indian Kanoon and Jurisphere, plus a 31-page AI Prompts eBook.', icon: '🤖' },
  { title: 'Lifetime Access to Materials', description: 'Keep 800+ pages of reading material, 32+ hours of recorded lectures, and alumni access — forever.', icon: '♾️' },
]

export default function OutcomesSection() {
  return (
    <section style={{ background: '#fff', padding: '66px 0', borderTop: '1px solid #ebedf6' }}>
      <div className="section-wrap">
        <div style={{ marginBottom: 28 }}>
          <span className="section-badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l1.6 4.8L18 8l-3.6 2.8L15.5 16 12 13.2 8.5 16l1.1-5.2L6 8l4.4-1.2z"/></svg>
            Learning Outcomes
          </span>
          <h2 className="heading-display" style={{ fontSize: 'clamp(30px, 3.5vw, 44px)', color: '#161b3a', margin: '14px 0 6px' }}>
            What You'll Walk Away With
          </h2>
          <p style={{ color: '#6f748f', fontSize: 15 }}>Practical, career-defining skills — not just theoretical knowledge.</p>
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 16,
        }} className="outcomes-grid">
          {outcomes.map(({ title, description, icon }) => (
            <div key={title} style={{
              background: '#f5f6fb',
              border: '1px solid #ebedf6',
              borderRadius: 16,
              padding: '22px 20px',
            }}>
              <div style={{ fontSize: 26, marginBottom: 10 }}>{icon}</div>
              <h3 style={{ fontWeight: 700, fontSize: 15, color: '#1b2244', marginBottom: 8 }}>{title}</h3>
              <p style={{ color: '#6f748f', fontSize: 13.5, lineHeight: 1.6 }}>{description}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1079px) {
          .outcomes-grid { grid-template-columns: repeat(2,1fr) !important; }
        }
        @media (max-width: 699px) {
          .outcomes-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
