import { useForm, ValidationError } from '@formspree/react'
import { Loader, CheckCircle, X, Download } from 'lucide-react'

export default function SyllabusModal({ onClose }) {
  const [state, handleSubmit] = useForm('mgojkzjv')

  const inputStyle = {
    width: '100%',
    border: '1.5px solid var(--c-border)',
    borderRadius: 8,
    padding: '11px 14px',
    fontSize: 14,
    color: 'var(--c-ink)',
    fontFamily: 'inherit',
    marginBottom: 14,
    boxSizing: 'border-box',
    outline: 'none',
    transition: 'border-color 0.2s',
  }

  return (
    <div
      style={{
        position: 'fixed', inset: 0, zIndex: 200,
        display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16,
        background: 'var(--c-forest-45)', backdropFilter: 'blur(8px)',
      }}
      onClick={e => e.target === e.currentTarget && onClose()}
    >
      <div style={{
        background: 'var(--c-white)', borderRadius: 20,
        width: '100%', maxWidth: 440,
        boxShadow: '0 40px 80px rgba(0,0,0,0.25)',
        overflow: 'hidden', position: 'relative',
      }}>
        {/* Close */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute', top: 14, right: 14,
            width: 32, height: 32, borderRadius: '50%',
            background: 'var(--c-surface-fill)', border: 'none',
            color: 'var(--c-body)', cursor: 'pointer',
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          }}
        >
          <X style={{ width: 15, height: 15 }} />
        </button>

        {/* Header */}
        <div style={{ textAlign: 'center', padding: '28px 28px 18px' }}>
          <span style={{
            width: 56, height: 56, borderRadius: '50%',
            background: 'var(--c-accent-light)',
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            color: 'var(--c-forest)', marginBottom: 14,
          }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
              <path d="M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8z"/>
              <path d="M14 3v5h5M9 14l3 3 0-6"/>
            </svg>
          </span>
          <h3 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: 21, color: 'var(--c-ink)', marginBottom: 6 }}>
            Download Syllabus
          </h3>
          <p style={{ color: 'var(--c-meta)', fontSize: 13.5, lineHeight: 1.5 }}>
            6-month curriculum · Faculty bios · Pricing breakdown
          </p>
        </div>

        {/* Body */}
        <div style={{ padding: '0 28px 28px' }}>
          {state.succeeded ? (
            <div style={{ textAlign: 'center', padding: '20px 0' }}>
              <CheckCircle style={{ width: 48, height: 48, color: 'var(--c-accent)', margin: '0 auto 16px' }} />
              <h4 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: 19, color: 'var(--c-ink)', marginBottom: 8 }}>You're all set!</h4>
              <p style={{ color: 'var(--c-meta)', fontSize: 13.5, lineHeight: 1.6, marginBottom: 20 }}>
                We'll send the syllabus to your email shortly. Check your inbox (and spam folder, just in case).
              </p>
              <button
                onClick={onClose}
                className="btn-primary"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                Back to Course
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <label style={{ display: 'block', fontSize: 12.5, fontWeight: 600, color: 'var(--c-heading3)', marginBottom: 5 }}>Full Name</label>
              <input name="name" type="text" required placeholder="e.g. Priya Sharma" style={inputStyle} />
              <ValidationError field="name" prefix="Name" errors={state.errors} style={{ color: 'var(--c-danger)', fontSize: 12, marginTop: -10, marginBottom: 8 }} />

              <label style={{ display: 'block', fontSize: 12.5, fontWeight: 600, color: 'var(--c-heading3)', marginBottom: 5 }}>Email Address</label>
              <input name="email" type="email" required placeholder="e.g. priya@gmail.com" style={inputStyle} />
              <ValidationError field="email" prefix="Email" errors={state.errors} style={{ color: 'var(--c-danger)', fontSize: 12, marginTop: -10, marginBottom: 8 }} />

              <label style={{ display: 'block', fontSize: 12.5, fontWeight: 600, color: 'var(--c-heading3)', marginBottom: 5 }}>Phone Number</label>
              <div style={{ display: 'flex', gap: 10, marginBottom: 14 }}>
                <div style={{
                  display: 'flex', alignItems: 'center', gap: 7,
                  border: '1.5px solid var(--c-border)', borderRadius: 8,
                  padding: '0 12px', fontWeight: 600, color: 'var(--c-ink)',
                  fontSize: 14, flexShrink: 0,
                }}>
                  <span style={{ display: 'flex', flexDirection: 'column', width: 17, height: 12, borderRadius: 2, overflow: 'hidden', border: '1px solid var(--c-border)' }}>
                    <span style={{ flex: 1, background: 'var(--c-flag-saffron)' }}/>
                    <span style={{ flex: 1, background: 'var(--c-white)' }}/>
                    <span style={{ flex: 1, background: 'var(--c-flag-green)' }}/>
                  </span>
                  +91
                </div>
                <input
                  name="phone" type="tel" required
                  placeholder="Enter your phone number"
                  style={{ ...inputStyle, flex: 1, marginBottom: 0, minWidth: 0 }}
                />
              </div>
              <ValidationError field="phone" prefix="Phone" errors={state.errors} style={{ color: 'var(--c-danger)', fontSize: 12, marginBottom: 8 }} />

              <button
                type="submit"
                disabled={state.submitting}
                className="btn-primary"
                style={{
                  width: '100%', justifyContent: 'center',
                  padding: '13px', fontSize: 15,
                  marginTop: 4,
                  opacity: state.submitting ? 0.7 : 1,
                }}
              >
                {state.submitting
                  ? <><Loader style={{ width: 16, height: 16, animation: 'spin 1s linear infinite' }} /> Sending…</>
                  : <><Download style={{ width: 16, height: 16 }} /> Download Free Syllabus</>
                }
              </button>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, color: 'var(--c-muted)', fontSize: 12, marginTop: 12 }}>
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
