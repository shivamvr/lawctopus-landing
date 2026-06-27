import { useForm, ValidationError } from '@formspree/react'
import { Loader, CheckCircle, X, Download } from 'lucide-react'

export default function SyllabusModal({ onClose }) {
  const [state, handleSubmit] = useForm('mgojkzjv')

  const inputStyle = {
    width: '100%',
    border: '1.5px solid #e3e6f3',
    borderRadius: 10,
    padding: '11px 14px',
    fontSize: 14,
    color: '#1b2244',
    fontFamily: 'inherit',
    marginBottom: 14,
    boxSizing: 'border-box',
    outline: 'none',
  }

  return (
    <div
      style={{
        position: 'fixed', inset: 0, zIndex: 60,
        display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16,
        background: 'rgba(10,14,42,.6)', backdropFilter: 'blur(6px)',
      }}
      onClick={e => e.target === e.currentTarget && onClose()}
    >
      <div style={{
        background: '#fff', borderRadius: 22,
        width: '100%', maxWidth: 440,
        boxShadow: '0 40px 80px rgba(6,10,40,.4)',
        overflow: 'hidden', position: 'relative',
      }}>
        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute', top: 16, right: 16,
            width: 32, height: 32, borderRadius: '50%',
            background: '#f1f2f8', border: 'none',
            color: '#6b7099', cursor: 'pointer',
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          }}
        >
          <X style={{ width: 15, height: 15 }} />
        </button>

        {/* Header */}
        <div style={{ textAlign: 'center', padding: '28px 28px 20px' }}>
          <span style={{
            width: 56, height: 56, borderRadius: '50%',
            background: '#efeafb',
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            color: '#4B2FCB', marginBottom: 14,
          }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
              <path d="M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8z"/>
              <path d="M14 3v5h5M9 14l3 3 0-6"/>
            </svg>
          </span>
          <h3 style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: 21, color: '#1b2244', marginBottom: 6 }}>
            Download Syllabus
          </h3>
          <p style={{ color: '#7c809e', fontSize: 13.5, lineHeight: 1.5 }}>
            6-month curriculum · Faculty bios · Pricing breakdown
          </p>
        </div>

        {/* Body */}
        <div style={{ padding: '0 28px 28px' }}>
          {state.succeeded ? (
            <div style={{ textAlign: 'center', padding: '20px 0' }}>
              <CheckCircle style={{ width: 48, height: 48, color: '#4B2FCB', margin: '0 auto 16px' }} />
              <h4 style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: 19, color: '#1b2244', marginBottom: 8 }}>You're all set!</h4>
              <p style={{ color: '#7c809e', fontSize: 13.5, lineHeight: 1.6, marginBottom: 20 }}>
                We'll send the syllabus to your email shortly. Check your inbox (and spam folder, just in case).
              </p>
              <button
                onClick={onClose}
                style={{
                  background: '#4B2FCB', color: '#fff', border: 'none',
                  padding: '12px 28px', borderRadius: 11,
                  fontWeight: 700, fontSize: 14, cursor: 'pointer', fontFamily: 'inherit',
                }}
              >
                Back to Course
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <label style={{ display: 'block', fontSize: 12.5, fontWeight: 600, color: '#41465f', marginBottom: 5 }}>
                Full Name
              </label>
              <input
                name="name" type="text" required
                placeholder="e.g. Priya Sharma"
                style={inputStyle}
              />
              <ValidationError field="name" prefix="Name" errors={state.errors} style={{ color: '#b3261e', fontSize: 12, marginTop: -10, marginBottom: 8 }} />

              <label style={{ display: 'block', fontSize: 12.5, fontWeight: 600, color: '#41465f', marginBottom: 5 }}>
                Email Address
              </label>
              <input
                name="email" type="email" required
                placeholder="e.g. priya@gmail.com"
                style={inputStyle}
              />
              <ValidationError field="email" prefix="Email" errors={state.errors} style={{ color: '#b3261e', fontSize: 12, marginTop: -10, marginBottom: 8 }} />

              <label style={{ display: 'block', fontSize: 12.5, fontWeight: 600, color: '#41465f', marginBottom: 5 }}>
                Phone Number
              </label>
              <div style={{ display: 'flex', gap: 10, marginBottom: 14 }}>
                <div style={{
                  display: 'flex', alignItems: 'center', gap: 7,
                  border: '1.5px solid #e3e6f3', borderRadius: 10,
                  padding: '0 12px', fontWeight: 600, color: '#1b2244',
                  fontSize: 14, flexShrink: 0,
                }}>
                  <span style={{ display: 'flex', flexDirection: 'column', width: 17, height: 12, borderRadius: 2, overflow: 'hidden', border: '1px solid #e0e0e0' }}>
                    <span style={{ flex: 1, background: '#FF9933' }}/>
                    <span style={{ flex: 1, background: '#fff' }}/>
                    <span style={{ flex: 1, background: '#138808' }}/>
                  </span>
                  +91
                </div>
                <input
                  name="phone" type="tel" required
                  placeholder="Enter your phone number"
                  style={{ ...inputStyle, flex: 1, marginBottom: 0, minWidth: 0 }}
                />
              </div>
              <ValidationError field="phone" prefix="Phone" errors={state.errors} style={{ color: '#b3261e', fontSize: 12, marginBottom: 8 }} />

              <button
                type="submit"
                disabled={state.submitting}
                style={{
                  width: '100%',
                  background: '#F26A1B',
                  color: '#fff', border: 'none',
                  padding: '13px', borderRadius: 11,
                  fontWeight: 700, fontSize: 15,
                  cursor: 'pointer', fontFamily: 'inherit',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                  marginTop: 4,
                  opacity: state.submitting ? 0.7 : 1,
                }}
              >
                {state.submitting
                  ? <><Loader style={{ width: 16, height: 16, animation: 'spin 1s linear infinite' }} /> Sending…</>
                  : <><Download style={{ width: 16, height: 16 }} /> Download Free Syllabus</>
                }
              </button>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, color: '#9298c0', fontSize: 12, marginTop: 12 }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 018 0v3"/>
                </svg>
                We respect your privacy. Your details are safe with us.
              </div>
            </form>
          )}
        </div>
      </div>

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  )
}
