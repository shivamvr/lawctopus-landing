const faculty = [
  { name: 'Akanksha Mishra', role: 'Head, Lawctopus Law School', exp: 'SLS Pune · LLM Gold Medal · 1,500+ learners · 96.5/100 rating', initials: 'AM' },
  { name: 'Shashank Sardesai', role: 'Co-founder, EverTrust Legal', exp: 'Wadia Ghandy · HSA Advocates · Khaitan Legal · Company Secretary', initials: 'SS' },
  { name: 'Pranjal Doshi', role: 'Associate, Walker Morris LLP (UK)', exp: 'HNLU · Cambridge · Trilegal · Khaitan & Co. · M&A specialist', initials: 'PD' },
  { name: 'Anup Menon V', role: 'Senior Legal Counsel & Freelancer', exp: 'Top-rated Upwork freelancer · LLM Corporate Laws · Tech & banking advisor', initials: 'AV' },
  { name: 'Gourav Mohanty', role: 'Advocate, Bombay High Court', exp: 'Gold medal · Symbiosis · Ram Jethmalani Scholar · Linklaters winner', initials: 'GM' },
  { name: 'Tanuj Kalia', role: 'Founding CEO, Lawctopus', exp: 'NUJS Kolkata · TEDx Speaker · BW Legal 40 Under 40 · Author', initials: 'TK' },
]

const bgColors = ['#efeafb', '#fff3e8', '#e8f5ff', '#e8fbf0', '#fbeaea', '#f0f3fb']
const textColors = ['#4B2FCB', '#F26A1B', '#0a66c2', '#138808', '#b3261e', '#1b2244']

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 9h4v12H3zM10 9h3.8v1.7c.6-1 1.9-2 3.7-2 3 0 4.5 1.9 4.5 5.6V21h-4v-5.7c0-1.5-.5-2.5-1.9-2.5-1 0-1.7.7-1.9 1.4-.1.2-.1.6-.1.9V21h-4z"/>
    </svg>
  )
}

export default function FacultySection() {
  return (
    <section id="instructors" style={{ background: '#f5f6fb', padding: '66px 0' }}>
      <div className="section-wrap">
        <div style={{ marginBottom: 28 }}>
          <span className="section-badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l1.6 4.8L18 8l-3.6 2.8L15.5 16 12 13.2 8.5 16l1.1-5.2L6 8l4.4-1.2z"/></svg>
            Your Instructors
          </span>
          <h2 className="heading-display" style={{ fontSize: 'clamp(30px, 3.5vw, 44px)', color: '#161b3a', margin: '14px 0 6px' }}>
            Meet Your Instructors
          </h2>
          <p style={{ color: '#6f748f', fontSize: 15 }}>
            Learn from practicing lawyers and legal experts from Khaitan & Co., Trilegal, Bombay High Court, and top Upwork freelancers.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 16,
        }} className="faculty-grid">
          {faculty.map(({ name, role, exp, initials }, i) => (
            <div key={name} style={{
              background: '#fff',
              border: '1px solid #ebedf6',
              borderRadius: 16,
              padding: '20px 16px',
              textAlign: 'center',
            }}>
              {/* Avatar */}
              <div style={{
                width: 72, height: 72, borderRadius: '50%',
                background: bgColors[i % bgColors.length],
                border: '2px solid #efeafb',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 14px',
                fontSize: 20, fontWeight: 700,
                color: textColors[i % textColors.length],
                fontFamily: 'Sora, sans-serif',
              }}>
                {initials}
              </div>

              <div style={{ fontWeight: 700, fontSize: 14.5, color: '#1b2244' }}>{name}</div>
              <div style={{ color: '#4B2FCB', fontSize: 12, fontWeight: 600, marginTop: 3 }}>{role}</div>
              <div style={{ color: '#8b90ac', fontSize: 11.5, marginTop: 7, lineHeight: 1.5 }}>{exp}</div>
              <span style={{ display: 'inline-flex', marginTop: 12, color: '#0a66c2' }}>
                <LinkedInIcon />
              </span>
            </div>
          ))}
        </div>

        <p style={{ color: '#8b90ac', fontSize: 12.5, marginTop: 18, textAlign: 'center', fontFamily: 'var(--font-mono)' }}>
          + Bhumesh Verma · Arunima Jha · Jaibatruka Mohanta · and more
        </p>
      </div>

      <style>{`
        @media (max-width: 1079px) {
          .faculty-grid { grid-template-columns: repeat(2,1fr) !important; }
        }
        @media (max-width: 699px) {
          .faculty-grid { grid-template-columns: repeat(2,1fr) !important; }
        }
      `}</style>
    </section>
  )
}
