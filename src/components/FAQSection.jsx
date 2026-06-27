import { useState } from 'react'

const faqs = [
  { q: 'When does the course start and end?', a: 'The course runs from July 1 to December 31, 2026. Registration closes June 30 — enroll now to secure your seat.' },
  { q: 'Can I access recordings if I miss a live session?', a: 'Yes. All live sessions are recorded and available within 24 hours. You can revisit any session as many times as you need throughout and after the program.' },
  { q: "What's the difference between the 2-month and 6-month course?", a: 'The 2-month course (₹7,999) covers contract fundamentals with 8 live sessions. The 6-month course (₹24,999) covers everything — 55 live sessions, 17 assignments, freelancing training, AI sessions, networking, and 1-on-1 career coaching.' },
  { q: 'Is prior drafting experience required?', a: 'No. Month 1 starts from fundamentals — essential clauses and contract structure — making it suitable for law students and those with no prior drafting experience.' },
  { q: 'How does the money-back guarantee work?', a: 'Attend ≥ 66% of live classes (camera on), submit all assignments with passing grades, then email support@lawctopus.com within 10 days of course completion. You\'ll receive a full refund — no questions asked.' },
  { q: 'Do I get a certificate after completing the course?', a: 'Yes. All graduates receive a Certificate of Completion. Top performers also receive a Merit Certificate. Both are shareable on LinkedIn and recognized by our partner organizations.' },
  { q: 'Are there EMI or instalment options?', a: 'Yes. We offer EMI options via credit card and select fintech partners. Contact support@lawctopus.com for details on available instalment plans.' },
]

function FAQItem({ item, isOpen, onToggle }) {
  return (
    <div style={{
      background: 'var(--c-white)',
      border: isOpen ? '1.5px solid var(--c-accent)' : '1px solid var(--c-border)',
      borderRadius: 12,
      overflow: 'hidden',
      marginBottom: 8,
      boxShadow: isOpen ? '0 4px 16px var(--c-accent-08)' : 'none',
      transition: 'border-color 0.2s, box-shadow 0.2s',
    }}>
      <button
        onClick={onToggle}
        style={{
          width: '100%', display: 'flex', alignItems: 'center',
          justifyContent: 'space-between', padding: '18px 22px',
          background: 'transparent', border: 'none',
          cursor: 'pointer', textAlign: 'left', gap: 16,
          fontFamily: 'inherit',
        }}
      >
        <span style={{ fontWeight: isOpen ? 700 : 500, fontSize: 15, color: isOpen ? 'var(--c-forest)' : 'var(--c-ink)', lineHeight: 1.4 }}>
          {item.q}
        </span>
        <span style={{
          width: 28, height: 28, borderRadius: '50%', flexShrink: 0,
          background: isOpen ? 'var(--c-forest)' : 'var(--c-surface-fill)',
          color: isOpen ? 'var(--c-white)' : 'var(--c-body)',
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          transition: 'background 0.2s',
        }}>
          {isOpen
            ? <svg width="11" height="2" viewBox="0 0 11 2" fill="none"><path d="M1 1h9" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
            : <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M5.5 1v9M1 5.5h9" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
          }
        </span>
      </button>
      {isOpen && (
        <div style={{ padding: '0 22px 18px', borderTop: '1px solid var(--c-surface-fill)' }}>
          <p style={{ color: 'var(--c-body)', fontSize: 14.5, lineHeight: 1.7, paddingTop: 14 }}>{item.a}</p>
        </div>
      )}
    </div>
  )
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section id="faq" className="section" style={{ background: 'var(--c-surface-alt)', borderTop: '1px solid var(--c-border)' }}>
      <div className="section-wrap" style={{ maxWidth: 780, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 44 }}>
          <span className="chip">FAQ</span>
          <h2 className="heading-2" style={{ marginBottom: 12 }}>Frequently Asked Questions</h2>
          <p style={{ color: 'var(--c-body)', fontSize: 16 }}>Everything you need to know before enrolling</p>
        </div>

        <div>
          {faqs.map((item, i) => (
            <FAQItem
              key={i}
              item={item}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
