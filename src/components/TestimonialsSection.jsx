import { useState } from 'react'

const testimonials = [
  {
    quote: "This program transformed my understanding of contract law. The practical approach and expert guidance helped me secure a role at a top law firm — I drafted real contracts from Day 1!",
    name: 'Arjun Malhotra',
    org: 'Associate, Cyril Amarchand Mangaldas',
    initials: 'AM',
    bg: '#efeafb',
    color: '#4B2FCB',
  },
  {
    quote: "The freelancing track alone was worth the fee. I launched my Upwork profile in Month 4 and landed my first client before the course even ended. Highly recommend for anyone serious about legal freelancing.",
    name: 'Priya Sharma',
    org: 'Legal Freelancer, Upwork Top-Rated',
    initials: 'PS',
    bg: '#fff3e8',
    color: '#F26A1B',
  },
  {
    quote: "Akanksha Ma'am and the faculty are exceptional. The 1-on-1 coaching sessions gave me clarity on my career path. I got placed in a corporate legal team within 2 months of completing the course.",
    name: 'Rohit Bansal',
    org: 'In-House Counsel, TechCorp India',
    initials: 'RB',
    bg: '#e8f5ff',
    color: '#0a66c2',
  },
  {
    quote: "The curriculum is incredibly well-structured. Learning M&A, IPR, and SaaS agreements in depth with real case studies made me conference-room-ready. 20,000+ alumni is a testament to the quality.",
    name: 'Shruti Agarwal',
    org: 'Associate, Khaitan & Co.',
    initials: 'SA',
    bg: '#e8fbf0',
    color: '#138808',
  },
]

function StarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="#F6A609">
      <path d="M12 2l2.9 6.3 6.9.7-5.1 4.6 1.4 6.8L12 17.6 5.9 20.4l1.4-6.8L2.2 9l6.9-.7z"/>
    </svg>
  )
}

export default function TestimonialsSection() {
  const [active, setActive] = useState(0)
  const t = testimonials[active]

  return (
    <section id="testimonials" style={{ background: '#f5f6fb', padding: '66px 0' }}>
      <div className="section-wrap">
        <div style={{ marginBottom: 28 }}>
          <span className="section-badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l1.6 4.8L18 8l-3.6 2.8L15.5 16 12 13.2 8.5 16l1.1-5.2L6 8l4.4-1.2z"/></svg>
            Student Success
          </span>
          <h2 className="heading-display" style={{ fontSize: 'clamp(30px, 3.5vw, 44px)', color: '#161b3a', margin: '14px 0 6px' }}>
            What Our Learners Say
          </h2>
          <p style={{ color: '#6f748f', fontSize: 15 }}>Real stories from 20,000+ trained professionals</p>
        </div>

        {/* Testimonial card */}
        <div style={{ background: '#fff', border: '1px solid #ebedf6', borderRadius: 20, padding: '28px 30px', marginBottom: 18 }}>
          <svg width="34" height="34" viewBox="0 0 24 24" fill="#d9d2fb">
            <path d="M10 7H6a3 3 0 00-3 3v7h7v-7H6c0-1.5 1.5-3 4-3zm11 0h-4a3 3 0 00-3 3v7h7v-7h-4c0-1.5 1.5-3 4-3z"/>
          </svg>
          <p style={{ color: '#3a3f5c', fontSize: 15.5, lineHeight: 1.7, margin: '14px 0 24px' }}>
            {t.quote}
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{
              width: 50, height: 50, borderRadius: '50%',
              background: t.bg, border: '2px solid #efeafb',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 16, fontWeight: 700, color: t.color,
              fontFamily: 'Sora, sans-serif', flexShrink: 0,
            }}>
              {t.initials}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 700, fontSize: 14.5, color: '#1b2244' }}>{t.name}</div>
              <div style={{ color: '#7c809e', fontSize: 12.5 }}>{t.org}</div>
              <div style={{ display: 'flex', gap: 2, marginTop: 5 }}>
                {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14 }}>
          <button
            onClick={() => setActive((active - 1 + testimonials.length) % testimonials.length)}
            style={{
              width: 36, height: 36, borderRadius: '50%',
              border: '1px solid #d9dbe9', background: '#fff',
              color: '#6b7099', cursor: 'pointer',
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            }}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M15 6l-6 6 6 6"/></svg>
          </button>
          <div style={{ display: 'flex', gap: 7 }}>
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                style={{
                  width: 8, height: 8, borderRadius: '50%', border: 'none',
                  background: i === active ? '#4B2FCB' : '#cfd2e6',
                  cursor: 'pointer', padding: 0,
                }}
              />
            ))}
          </div>
          <button
            onClick={() => setActive((active + 1) % testimonials.length)}
            style={{
              width: 36, height: 36, borderRadius: '50%',
              border: '1px solid #d9dbe9', background: '#fff',
              color: '#6b7099', cursor: 'pointer',
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            }}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M9 6l6 6-6 6"/></svg>
          </button>
        </div>
      </div>
    </section>
  )
}
