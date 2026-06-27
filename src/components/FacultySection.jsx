const faculty = [
  { name: 'Akanksha Mishra', role: 'Head, Lawctopus Law School', exp: 'SLS Pune · LLM Gold Medal · 1,500+ learners · 96.5/100 rating', initials: 'AM', isNew: true },
  { name: 'Shashank Sardesai', role: 'Co-founder, EverTrust Legal', exp: 'Wadia Ghandy · HSA Advocates · Khaitan Legal · Company Secretary', initials: 'SS' },
  { name: 'Pranjal Doshi', role: 'Associate, Walker Morris LLP (UK)', exp: 'HNLU · Cambridge · Trilegal · Khaitan & Co. · M&A specialist', initials: 'PD' },
  { name: 'Anup Menon V', role: 'Senior Legal Counsel & Freelancer', exp: 'Top-rated Upwork freelancer · LLM Corporate Laws · Tech & banking advisor', initials: 'AV', isNew: true },
  { name: 'Gourav Mohanty', role: 'Advocate, Bombay High Court', exp: 'Gold medal · Symbiosis · Ram Jethmalani Scholar · Linklaters winner', initials: 'GM' },
  { name: 'Tanuj Kalia', role: 'Founding CEO, Lawctopus', exp: 'NUJS Kolkata · TEDx Speaker · BW Legal 40 Under 40 · Author', initials: 'TK' },
]

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 9h4v12H3zM10 9h3.8v1.7c.6-1 1.9-2 3.7-2 3 0 4.5 1.9 4.5 5.6V21h-4v-5.7c0-1.5-.5-2.5-1.9-2.5-1 0-1.7.7-1.9 1.4-.1.2-.1.6-.1.9V21h-4z"/>
    </svg>
  )
}

export default function FacultySection() {
  return (
    <section id="instructors" style={{ background: '#044D40', padding: '96px 0' }}>
      <div className="section-wrap">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <span style={{
            display: 'inline-block',
            background: 'rgba(10,191,83,0.2)',
            color: '#0ABF53',
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            padding: '5px 14px',
            borderRadius: 999,
            marginBottom: 16,
          }}>
            Expert Faculty
          </span>
          <h2 style={{
            fontSize: 'clamp(28px,3.5vw,44px)',
            fontWeight: 700,
            color: '#fff',
            letterSpacing: '-0.02em',
            lineHeight: 1.15,
            marginBottom: 14,
          }}>
            Learn from those who do it every day
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 17, maxWidth: 500, margin: '0 auto' }}>
            Every instructor is an active legal professional — partners, senior associates, and in-house counsels.
          </p>
        </div>

        {/* Faculty grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 20,
        }} className="faculty-grid">
          {faculty.map(({ name, role, exp, initials, isNew }) => (
            <div key={name} style={{
              background: 'rgba(255,255,255,0.07)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: 20,
              padding: '24px',
              transition: 'background 0.25s, transform 0.25s',
              cursor: 'default',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.12)'; e.currentTarget.style.transform = 'translateY(-3px)' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.07)'; e.currentTarget.style.transform = 'translateY(0)' }}
            >
              {/* Avatar + badge */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
                <div style={{
                  width: 52, height: 52,
                  borderRadius: '50%',
                  background: '#0ABF53',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 16, fontWeight: 800, color: '#fff',
                  flexShrink: 0,
                }}>
                  {initials}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap' }}>
                    <span style={{ fontSize: 15, fontWeight: 700, color: '#fff' }}>{name}</span>
                    {isNew && <span className="badge-new">New</span>}
                  </div>
                  <div style={{ fontSize: 12.5, color: 'rgba(255,255,255,0.6)', marginTop: 2 }}>{role}</div>
                </div>
              </div>

              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', lineHeight: 1.6, marginBottom: 16 }}>
                {exp}
              </p>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  color: '#0ABF53', fontSize: 13, fontWeight: 600,
                  textDecoration: 'none',
                }}
                onMouseEnter={e => e.currentTarget.style.textDecoration = 'underline'}
                onMouseLeave={e => e.currentTarget.style.textDecoration = 'none'}
              >
                <LinkedInIcon /> View Profile
              </a>
            </div>
          ))}
        </div>

        {/* Bottom stat */}
        <div style={{
          display: 'flex', justifyContent: 'center', gap: 48,
          marginTop: 48,
          paddingTop: 48,
          borderTop: '1px solid rgba(255,255,255,0.1)',
          flexWrap: 'wrap',
        }}>
          {[
            { value: '8+', label: 'Expert Instructors' },
            { value: '15+', label: 'Years Avg. Experience' },
            { value: '100%', label: 'Practicing Lawyers' },
          ].map(({ value, label }) => (
            <div key={label} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 32, fontWeight: 800, color: '#0ABF53', lineHeight: 1 }}>{value}</div>
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', marginTop: 6 }}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1023px) { .faculty-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 639px)  { .faculty-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}
