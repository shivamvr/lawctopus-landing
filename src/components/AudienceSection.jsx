const audiences = [
  {
    icon: '📚',
    title: 'Law Students',
    desc: 'Build real drafting skills beyond the classroom and stand out in a competitive job market.',
    tags: ['Internship ready', 'Moot court edge'],
  },
  {
    icon: '⚖️',
    title: 'Young Lawyers (0–4 yrs)',
    desc: 'Accelerate your career by mastering contracts that clients actually need — right now.',
    tags: ['Faster promotions', 'Client confidence'],
  },
  {
    icon: '🎓',
    title: 'Academicians',
    desc: 'Add high-value practical credentials to your profile and enrich your teaching with real-world examples.',
    tags: ['Industry credibility', 'Richer curriculum'],
  },
  {
    icon: '💼',
    title: 'Freelancing Enthusiasts',
    desc: 'Launch a flexible legal freelancing income on Upwork, LinkedIn, and beyond — with a top-rated mentor.',
    tags: ['₹2L+/month potential', 'Upwork profile'],
  },
]

export default function AudienceSection() {
  return (
    <section className="section" style={{ background: 'var(--c-white)' }}>
      <div className="section-wrap">
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <span className="chip">Who is this for</span>
          <h2 className="heading-2" style={{ marginBottom: 14 }}>
            Built for every stage of your legal career
          </h2>
          <p style={{ color: 'var(--c-body)', fontSize: 17, maxWidth: 520, margin: '0 auto' }}>
            Whether you're just starting or looking to level up — this course meets you where you are.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 20,
        }} className="audience-grid">
          {audiences.map(({ icon, title, desc, tags }) => (
            <div key={title} className="feature-card" style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div style={{
                width: 48, height: 48,
                borderRadius: 12,
                background: 'var(--c-accent-light)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 22,
              }}>
                {icon}
              </div>
              <div>
                <h3 style={{ fontSize: 17, fontWeight: 700, color: 'var(--c-ink)', marginBottom: 8 }}>{title}</h3>
                <p style={{ fontSize: 14, color: 'var(--c-body)', lineHeight: 1.6 }}>{desc}</p>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 'auto' }}>
                {tags.map(t => (
                  <span key={t} style={{
                    fontSize: 11.5, fontWeight: 600, color: 'var(--c-accent-text)',
                    background: 'var(--c-accent-light)', padding: '3px 9px', borderRadius: 999,
                  }}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1023px) { .audience-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 639px)  { .audience-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}
