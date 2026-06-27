import { Check, X } from 'lucide-react'

const rows = [
  { label: 'Live Classes',         basic: '8',            pro: '55' },
  { label: 'Reading Material',     basic: '202 pages',    pro: '800 pages' },
  { label: 'Recorded Lectures',    basic: '8 hrs 38 min', pro: '32 hrs 3 min' },
  { label: 'Assignments',          basic: '2',            pro: '17' },
  { label: 'Freelancing Sessions', basic: false,          pro: true },
  { label: 'Networking Sessions',  basic: false,          pro: true },
  { label: 'AI Sessions',          basic: false,          pro: true },
  { label: 'Career Coaching 1:1',  basic: false,          pro: true },
  { label: 'Certificate',          basic: true,           pro: true },
]

function Cell({ value, dark }) {
  if (value === true)  return <Check style={{ width: 16, height: 16, margin: '0 auto', color: dark ? '#fff' : '#4B2FCB' }} />
  if (value === false) return <X    style={{ width: 16, height: 16, margin: '0 auto', color: dark ? 'rgba(255,255,255,.3)' : '#ccc' }} />
  return <span style={{ fontSize: 13, fontWeight: 600, color: dark ? '#fff' : '#1b2244' }}>{value}</span>
}

export default function PricingSection({ onDownload }) {
  return (
    <section id="pricing" style={{ background: '#fff', padding: '66px 0', borderTop: '1px solid #ebedf6' }}>
      <div className="section-wrap">
        <div style={{ marginBottom: 28 }}>
          <span className="section-badge">Pricing</span>
          <h2 className="heading-display" style={{ fontSize: 'clamp(30px, 3.5vw, 44px)', color: '#161b3a', margin: '14px 0 6px' }}>
            Choose Your Path
          </h2>
          <p style={{ color: '#6f748f', fontSize: 15 }}>Flexible options to match your learning goals</p>
        </div>

        {/* Price cards */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }} className="pricing-cards">
          {/* 2-month */}
          <div style={{
            background: '#f5f6fb', borderRadius: 20, padding: '28px 30px',
            border: '1px solid #ebedf6',
          }}>
            <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#9298c0', marginBottom: 16 }}>2-Month Course</p>
            <div style={{ fontFamily: 'Sora, sans-serif', fontWeight: 800, fontSize: 'clamp(28px, 4vw, 38px)', color: '#1b2244', letterSpacing: '-1px', marginBottom: 4 }}>₹7,999</div>
            <p style={{ color: '#8b90ac', fontSize: 14, marginBottom: 24 }}>Core contract fundamentals</p>
            <a
              href="https://www.lawctopuslawschool.com/courses/cdn6-months/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                height: 42, padding: '0 20px',
                background: '#fff', border: '1.5px solid #ebedf6',
                borderRadius: 11, color: '#1b2244',
                fontSize: 14, fontWeight: 600, textDecoration: 'none',
                fontFamily: 'inherit',
              }}
            >
              Enroll in 2-Month
            </a>
          </div>

          {/* 6-month */}
          <div style={{
            background: 'linear-gradient(180deg,#1b2244,#0c1130)',
            borderRadius: 20, padding: '28px 30px',
            position: 'relative',
          }}>
            <div style={{
              position: 'absolute', top: 16, right: 16,
              border: '1px solid rgba(255,255,255,.2)', borderRadius: 100,
              padding: '5px 12px', color: '#fff', fontSize: 11.5, fontWeight: 700,
            }}>
              Most Popular
            </div>
            <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(255,255,255,.4)', marginBottom: 16 }}>6-Month Course</p>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 4 }}>
              <span style={{ fontFamily: 'Sora, sans-serif', fontWeight: 800, fontSize: 'clamp(28px, 4vw, 38px)', color: '#fff', letterSpacing: '-1px' }}>₹24,999</span>
              <span style={{ color: 'rgba(255,255,255,.3)', fontSize: 16, textDecoration: 'line-through' }}>₹60,000</span>
            </div>
            <p style={{ color: 'rgba(255,255,255,.4)', fontSize: 14, marginBottom: 24 }}>Complete mastery + freelancing · 58% off</p>
            <a
              href="https://www.lawctopuslawschool.com/courses/cdn6-months/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                height: 42, background: '#F26A1B', borderRadius: 11,
                color: '#fff', fontSize: 14, fontWeight: 700,
                textDecoration: 'none', fontFamily: 'inherit', marginBottom: 10,
              }}
            >
              Enroll Now — ₹24,999
            </a>
            <button
              onClick={onDownload}
              style={{
                width: '100%', textAlign: 'center', color: 'rgba(255,255,255,.5)',
                background: 'transparent', border: 'none', fontSize: 13.5,
                cursor: 'pointer', fontFamily: 'inherit',
              }}
            >
              Download Syllabus First →
            </button>
          </div>
        </div>

        {/* Comparison table */}
        <div style={{ background: '#fff', border: '1px solid #ebedf6', borderRadius: 18, overflow: 'hidden' }}>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', minWidth: 360, borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid #ebedf6', background: '#f5f6fb' }}>
                  <th style={{ textAlign: 'left', padding: '12px 20px', color: '#8b90ac', fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Feature</th>
                  <th style={{ textAlign: 'center', padding: '12px 20px', color: '#8b90ac', fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em' }}>2-Month</th>
                  <th style={{ textAlign: 'center', padding: '12px 20px', color: '#4B2FCB', fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em' }}>6-Month ✦</th>
                </tr>
              </thead>
              <tbody>
                {rows.map(({ label, basic, pro }, i) => (
                  <tr key={label} style={{ borderBottom: i < rows.length - 1 ? '1px solid #f0f1f8' : 'none', background: i % 2 === 1 ? '#fafbff' : '#fff' }}>
                    <td style={{ padding: '11px 20px', color: '#41465f', fontSize: 13.5 }}>{label}</td>
                    <td style={{ padding: '11px 20px', textAlign: 'center' }}><Cell value={basic} /></td>
                    <td style={{ padding: '11px 20px', textAlign: 'center' }}><Cell value={pro} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 699px) {
          .pricing-cards { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
