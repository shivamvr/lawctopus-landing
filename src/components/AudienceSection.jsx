// Themed duotone icons: orange line-art with a soft accent fill.
const svgProps = {
  width: 26, height: 26, viewBox: '0 0 24 24', fill: 'none',
  stroke: 'var(--c-accent)', strokeWidth: 1.7,
  strokeLinecap: 'round', strokeLinejoin: 'round',
}
const fillSoft = { fill: 'var(--c-accent)', fillOpacity: 0.16 }

const BookIcon = () => (
  <svg {...svgProps}>
    <path d="M11.2 7c-2.2-1.2-4.6-1.5-7-1.2-.4 0-.7.4-.7.8v9.9c0 .5.4.8.8.8 2.3-.2 4.6.1 6.9 1.3" {...fillSoft} />
    <path d="M12.8 7c2.2-1.2 4.6-1.5 7-1.2.4 0 .7.4.7.8v9.9c0 .5-.4.8-.8.8-2.3-.2-4.6.1-6.9 1.3" />
    <path d="M12 7v11.7" />
  </svg>
)

const ScalesIcon = () => (
  <svg {...svgProps}>
    <path d="M12 5v14" />
    <path d="M8.5 19.5h7" />
    <circle cx="12" cy="4" r="1.1" {...fillSoft} />
    <path d="M5 7h14" />
    <path d="M5 7l-2.5 5h5L5 7z" {...fillSoft} />
    <path d="M19 7l-2.5 5h5L19 7z" {...fillSoft} />
    <path d="M2.5 12a2.5 2 0 0 0 5 0" />
    <path d="M16.5 12a2.5 2 0 0 0 5 0" />
  </svg>
)

const CapIcon = () => (
  <svg {...svgProps}>
    <path d="M12 4.5 2.5 8.5 12 12.5l9.5-4L12 4.5z" {...fillSoft} />
    <path d="M6.5 10.5v4.3c0 1.4 2.5 2.7 5.5 2.7s5.5-1.3 5.5-2.7v-4.3" />
    <path d="M21.5 8.5v4" />
    <circle cx="21.5" cy="13.4" r="1" {...fillSoft} />
  </svg>
)

const LaptopGrowthIcon = () => (
  <svg {...svgProps}>
    <rect x="4.5" y="5" width="15" height="10" rx="1.6" {...fillSoft} />
    <path d="M2.5 18.5h19" />
    <path d="M8 12l2.6-2.6 2 2 3.4-3.4" />
    <path d="M14 8h2v2" />
  </svg>
)

const audiences = [
  {
    icon: <BookIcon />,
    title: 'Law Students',
    desc: 'Build real drafting skills beyond the classroom and stand out in a competitive job market.',
    tags: ['Internship ready', 'Moot court edge'],
  },
  {
    icon: <ScalesIcon />,
    title: 'Young Lawyers (0–4 yrs)',
    desc: 'Accelerate your career by mastering contracts that clients actually need — right now.',
    tags: ['Faster promotions', 'Client confidence'],
  },
  {
    icon: <CapIcon />,
    title: 'Academicians',
    desc: 'Add high-value practical credentials to your profile and enrich your teaching with real-world examples.',
    tags: ['Industry credibility', 'Richer curriculum'],
  },
  {
    icon: <LaptopGrowthIcon />,
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
              }}>
                {icon}
              </div>
              <div>
                <h3 style={{ fontSize: 17, fontWeight: 700, color: 'var(--c-ink)', marginBottom: 8 }}>{title}</h3>
                <p style={{ fontSize: 16, color: 'var(--c-body)', lineHeight: 1.6 }}>{desc}</p>
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
