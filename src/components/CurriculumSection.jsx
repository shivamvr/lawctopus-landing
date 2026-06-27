import { useState } from 'react'

const months = [
  { title: 'Module 1: Essential Clauses & Contract Fundamentals', items: ['Contract fundamentals and structure', 'Definition clauses & representations/warranties', 'Termination, force majeure & confidentiality', 'Dispute resolution mechanisms', 'Drafting operative and boilerplate clauses'], meta: '25 Recorded · 4 Live Sessions' },
  { title: 'Module 2: Execution, Negotiation & Common Agreements', items: ['Employment agreements & software licensing', 'Non-Disclosure Agreements (NDAs)', 'Negotiation concepts and techniques', 'Contract lab & personalized feedback sessions'], meta: '18 Recorded · 4 Live Sessions' },
  { title: 'Module 3: International & Cross-Border Contracts', items: ['International commercial contracts', 'Loan agreements', 'Employment & NDA drafting in-depth', 'Introduction to legal freelancing'], meta: '15 Recorded · 8 Live Sessions' },
  { title: 'Module 4: IPR, Technology & SaaS Agreements', items: ['Trademark, patent & copyright licensing', 'SaaS agreements', 'Website terms & privacy policies', 'Freelancing on Upwork & Fiverr'], meta: '13 Recorded · 8 Live Sessions' },
  { title: 'Module 5: Real Estate & Property Agreements', items: ['Sale deeds & leave and license agreements', 'Power of attorney documents', 'Franchisee agreements'], meta: '4 Recorded · 6 Live Sessions' },
  { title: 'Module 6: Business, M&A & Capstone', items: ['Shareholder & share purchase agreements', 'Partnership & joint venture agreements', 'Capstone project & final feedback'], meta: '8 Recorded · 6 Live Sessions' },
]

const features = [
  { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M4 5h6a2 2 0 012 2v12a1.5 1.5 0 00-1.5-1.5H4z"/><path d="M20 5h-6a2 2 0 00-2 2v12a1.5 1.5 0 011.5-1.5H20z"/></svg>, title: 'Hands-on Learning', desc: 'Case studies, assignments & real legal scenarios.' },
  { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><circle cx="9" cy="8" r="3"/><path d="M3 20a6 6 0 0112 0"/><circle cx="17" cy="9" r="2.4"/><path d="M16 20a5 5 0 015-3"/></svg>, title: 'Expert Mentorship', desc: 'Learn directly from practicing lawyers and legal experts.' },
  { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2"/></svg>, title: 'Career Support', desc: 'Placement assistance & career guidance.' },
  { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>, title: 'Flexible Learning', desc: 'Learn at your own pace with lifetime access to recordings.' },
]

function AccordionItem({ item, isOpen, onToggle, index }) {
  return (
    <div style={{
      background: '#fff',
      border: isOpen ? '1.5px solid #d9d2fb' : '1px solid #ebedf6',
      borderRadius: 14,
      marginBottom: 10,
      overflow: 'hidden',
      boxShadow: isOpen ? '0 12px 32px rgba(75,47,203,.08)' : 'none',
    }}>
      <button
        onClick={onToggle}
        style={{
          width: '100%', display: 'flex', alignItems: 'center',
          justifyContent: 'space-between', gap: 14,
          padding: '16px 18px', background: 'transparent',
          border: 'none', cursor: 'pointer', textAlign: 'left',
          fontFamily: 'inherit',
        }}
      >
        <span style={{
          fontWeight: isOpen ? 700 : 600,
          fontSize: 14.5,
          color: isOpen ? '#4B2FCB' : '#1b2244',
          lineHeight: 1.35,
        }}>
          {item.title}
        </span>
        <span style={{
          width: 30, height: 30, borderRadius: '50%',
          background: isOpen ? '#4B2FCB' : '#fff',
          color: isOpen ? '#fff' : '#a6abc9',
          border: isOpen ? 'none' : '1.5px solid #e3e6f3',
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0,
        }}>
          {isOpen
            ? <svg width="12" height="2" viewBox="0 0 12 2" fill="none"><path d="M1 1h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
            : <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
          }
        </span>
      </button>
      {isOpen && (
        <div style={{ padding: '0 18px 16px' }}>
          {item.items.map(it => (
            <div key={it} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '5px 0', color: '#565b78', fontSize: 13.5 }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#4B2FCB', flexShrink: 0 }} />
              {it}
            </div>
          ))}
          <div style={{ textAlign: 'right', color: '#9499b8', fontSize: 12.5, fontWeight: 600, marginTop: 10, borderTop: '1px dashed #e8eaf3', paddingTop: 10 }}>
            {item.meta}
          </div>
        </div>
      )}
    </div>
  )
}

export default function CurriculumSection() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="curriculum" style={{ background: '#fff', padding: '66px 0' }}>
      <div className="section-wrap">
        <span className="section-badge">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l1.6 4.8L18 8l-3.6 2.8L15.5 16 12 13.2 8.5 16l1.1-5.2L6 8l4.4-1.2z"/></svg>
          Program Curriculum
        </span>
        <h2 className="heading-display" style={{ fontSize: 'clamp(30px, 3.5vw, 44px)', color: '#161b3a', margin: '14px 0 6px' }}>
          What You'll Learn
        </h2>
        <p style={{ color: '#6f748f', fontSize: 15.5 }}>6 months · 55 live sessions · 83 recorded lectures · 17 assignments</p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 0.72fr',
          gap: 28,
          alignItems: 'start',
          marginTop: 30,
        }} className="curriculum-grid">
          {/* Accordion */}
          <div>
            {months.map((item, i) => (
              <AccordionItem
                key={item.title}
                item={item}
                index={i}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
              />
            ))}
          </div>

          {/* Dark features panel */}
          <div style={{
            background: 'linear-gradient(180deg,#181f4c,#0c1130)',
            borderRadius: 20, padding: '8px 24px',
            color: '#fff', alignSelf: 'start',
          }}>
            {features.map((f, i) => (
              <div key={f.title} style={{
                display: 'flex', gap: 14,
                padding: '17px 0',
                borderBottom: i < features.length - 1 ? '1px solid rgba(255,255,255,.08)' : 'none',
              }}>
                <span style={{
                  width: 42, height: 42, borderRadius: 11,
                  background: 'rgba(109,74,230,.22)',
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  color: '#a791f5', flexShrink: 0,
                }}>
                  {f.icon}
                </span>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 15 }}>{f.title}</div>
                  <div style={{ color: '#aab0d6', fontSize: 13.5, marginTop: 4, lineHeight: 1.5 }}>{f.desc}</div>
                </div>
              </div>
            ))}

            {/* Freelancing callout */}
            <div style={{ padding: '16px 0 8px', borderTop: '1px solid rgba(255,255,255,.08)', marginTop: 4 }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: '#a791f5', textTransform: 'uppercase', letterSpacing: 1.5, marginBottom: 8 }}>
                Freelancing Track
              </div>
              <p style={{ color: '#aab0d6', fontSize: 13, lineHeight: 1.6 }}>
                CV & LinkedIn building · Upwork & Fiverr mastery · Monthly networking · Bi-monthly 1-on-1 career coaching
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1079px) {
          .curriculum-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
