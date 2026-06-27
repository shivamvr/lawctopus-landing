import { useState } from 'react'

const faqs = [
  {
    q: 'When does the course start and end?',
    a: 'The course runs from July 1 to December 31, 2026. Registration closes June 30 — enroll now to secure your seat.',
  },
  {
    q: 'Can I access recordings if I miss a live session?',
    a: 'Yes. All live sessions are recorded and available within 24 hours. You can revisit any session as many times as you need.',
  },
  {
    q: "What's the difference between the 2-month and 6-month course?",
    a: 'The 2-month course (₹7,999) covers contract fundamentals with 8 live sessions. The 6-month course (₹24,999) covers everything — 55 live sessions, 17 assignments, freelancing training, AI sessions, networking, and 1-on-1 career coaching.',
  },
  {
    q: 'Is prior drafting experience required?',
    a: 'No. Month 1 starts from fundamentals — essential clauses and contract structure — making it suitable for law students and those with no prior drafting experience.',
  },
  {
    q: 'How does the money-back guarantee work?',
    a: "Attend ≥ 66% of live classes (camera on), submit all assignments with passing grades, then email support@lawctopus.com within 10 days of course completion. You'll receive a full refund — no questions asked.",
  },
  {
    q: 'Do I get a certificate after completing the course?',
    a: 'Yes. All graduates receive a Certificate of Completion. Top performers also receive a Merit Certificate. Both are shareable on LinkedIn and recognized by partner organizations.',
  },
]

function FAQItem({ item, isOpen, onToggle }) {
  return (
    <div style={{
      background: '#fff',
      border: isOpen ? '1.5px solid #d9d2fb' : '1px solid #ebedf6',
      borderRadius: 14,
      overflow: 'hidden',
      marginBottom: 10,
      boxShadow: isOpen ? '0 8px 24px rgba(75,47,203,.07)' : 'none',
    }}>
      <button
        onClick={onToggle}
        style={{
          width: '100%', display: 'flex', alignItems: 'center',
          justifyContent: 'space-between', padding: '16px 18px',
          background: 'transparent', border: 'none',
          cursor: 'pointer', textAlign: 'left', gap: 12, fontFamily: 'inherit',
        }}
      >
        <span style={{ fontWeight: isOpen ? 700 : 600, fontSize: 14.5, color: isOpen ? '#4B2FCB' : '#1b2244', lineHeight: 1.35 }}>
          {item.q}
        </span>
        <span style={{
          width: 28, height: 28, borderRadius: '50%', flexShrink: 0,
          background: isOpen ? '#4B2FCB' : '#f0f1f8',
          color: isOpen ? '#fff' : '#8b90ac',
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        }}>
          {isOpen
            ? <svg width="11" height="2" viewBox="0 0 11 2" fill="none"><path d="M1 1h9" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
            : <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M5.5 1v9M1 5.5h9" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
          }
        </span>
      </button>
      {isOpen && (
        <div style={{ padding: '0 18px 16px', borderTop: '1px solid #ebedf6' }}>
          <p style={{ color: '#41465f', fontSize: 14, lineHeight: 1.7, paddingTop: 14 }}>{item.a}</p>
        </div>
      )}
    </div>
  )
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section id="faq" style={{ background: '#f5f6fb', padding: '66px 0', borderTop: '1px solid #ebedf6' }}>
      <div className="section-wrap" style={{ maxWidth: 820, margin: '0 auto' }}>
        <div style={{ marginBottom: 28 }}>
          <span className="section-badge">FAQ</span>
          <h2 className="heading-display" style={{ fontSize: 'clamp(30px, 3.5vw, 44px)', color: '#161b3a', margin: '14px 0 6px' }}>
            Frequently Asked Questions
          </h2>
          <p style={{ color: '#6f748f', fontSize: 15 }}>Everything you need to know before enrolling</p>
        </div>

        <div>
          {faqs.map((item, index) => (
            <FAQItem
              key={index}
              item={item}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
