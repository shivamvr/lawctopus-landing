const testimonials = [
  {
    quote: "Drafted real contracts from Day 1 — this wasn't theory. I landed a role at Cyril Amarchand within two months of completing the program. The feedback on assignments was sharper than anything I got in law school.",
    name: 'Arjun Malhotra',
    org: 'Associate, Cyril Amarchand Mangaldas',
    initials: 'AM',
    tag: 'Career Placement',
  },
  {
    quote: "I launched my Upwork profile in Month 4 and landed my first paying client before the course even ended. The freelancing track is worth every rupee — Anup Sir is incredible.",
    name: 'Priya Sharma',
    org: 'Legal Freelancer, Upwork Top-Rated',
    initials: 'PS',
    tag: 'Freelancing',
  },
  {
    quote: "The 1-on-1 coaching sessions gave me the clarity I never got elsewhere. Placed in a corporate legal team 2 months post-completion. The structured curriculum and live sessions made all the difference.",
    name: 'Rohit Bansal',
    org: 'In-House Counsel, TechCorp India',
    initials: 'RB',
    tag: 'Career Placement',
  },
  {
    quote: "M&A, IPR, SaaS agreements — all covered with real case studies. The quality of content and the depth of instruction make this the best legal upskilling program in India bar none.",
    name: 'Shruti Agarwal',
    org: 'Senior Associate, Khaitan & Co.',
    initials: 'SA',
    tag: 'Skill Building',
  },
  {
    quote: "As an academician, I wanted practical exposure. This course gave me industry-standard templates, live negotiation sessions, and a peer network I still lean on. Highly recommended.",
    name: 'Dr. Vikram Nair',
    org: 'Faculty, NLSIU Bangalore',
    initials: 'VN',
    tag: 'Academic',
  },
  {
    quote: "The money-back guarantee gave me confidence to enroll. I didn't need it — the program delivered 10x what I expected. Completed 17 assignments, all reviewed with actual written feedback.",
    name: 'Meera Krishnan',
    org: 'Contract Lawyer, Remote',
    initials: 'MK',
    tag: 'Quality',
  },
]

function StarRow() {
  return (
    <div style={{ display: 'flex', gap: 3 }}>
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="var(--c-star)">
          <path d="M12 2l2.9 6.3 6.9.7-5.1 4.6 1.4 6.8L12 17.6 5.9 20.4l1.4-6.8L2.2 9l6.9-.7z"/>
        </svg>
      ))}
    </div>
  )
}

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="section" style={{ background: 'var(--c-surface-alt)', borderTop: '1px solid var(--c-border)' }}>
      <div className="section-wrap">
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <span className="chip">Student Stories</span>
          <h2 className="heading-2" style={{ marginBottom: 14 }}>Real stories, real results</h2>
          <p style={{ color: 'var(--c-body)', fontSize: 17, maxWidth: 480, margin: '0 auto' }}>
            Join 20,000+ legal professionals who've already transformed their careers.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3,1fr)',
          gap: 20,
        }} className="testimonials-grid">
          {testimonials.map(({ quote, name, org, initials, tag }) => (
            <div
              key={name}
              style={{
                background: 'var(--c-white)',
                border: '1px solid var(--c-border)',
                borderRadius: 16,
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                transition: 'box-shadow 0.25s ease, transform 0.25s ease',
                cursor: 'default',
              }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.12)'; e.currentTarget.style.transform = 'translateY(-4px)' }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)' }}
            >
              {/* Top color stripe */}
              <div style={{ height: 4, background: 'var(--c-accent)' }} />

              <div style={{ padding: '22px 24px 24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                {/* Tag + stars */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
                  <span style={{
                    fontSize: 11, fontWeight: 700, color: 'var(--c-accent-text)',
                    background: 'var(--c-accent-light)', padding: '3px 9px', borderRadius: 999,
                    textTransform: 'uppercase', letterSpacing: '0.06em',
                  }}>
                    {tag}
                  </span>
                  <StarRow />
                </div>

                {/* Quote */}
                <p style={{
                  fontSize: 14,
                  color: 'var(--c-heading3)',
                  lineHeight: 1.7,
                  flex: 1,
                  marginBottom: 20,
                }}>
                  "{quote}"
                </p>

                {/* Author */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, borderTop: '1px solid var(--c-surface-fill)', paddingTop: 16 }}>
                  <div style={{
                    width: 38, height: 38,
                    borderRadius: '50%',
                    background: 'var(--c-forest)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 13, fontWeight: 700, color: 'var(--c-white)',
                    flexShrink: 0,
                  }}>
                    {initials}
                  </div>
                  <div>
                    <div style={{ fontSize: 13.5, fontWeight: 700, color: 'var(--c-ink)' }}>{name}</div>
                    <div style={{ fontSize: 12, color: 'var(--c-meta)' }}>{org}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1023px) { .testimonials-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 639px)  { .testimonials-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}
