import { useState } from 'react';

const SHEET_URL = 'https://script.google.com/macros/s/AKfycbzFbt3IGDnYUocfJUUph223Q8GKiR1LVfgI1JxuqzgZDyXKJ9pUQUodpuFhNjvKXN7rqg/exec';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', serviceType: 'Residential Clinical Clean', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handle = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      await fetch(SHEET_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formType: 'contact',
          name: form.name,
          email: form.email,
          serviceType: form.serviceType,
          message: form.message,
        }),
      });
      setSent(true);
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Hero */}
      <section style={{ padding: '70px 0 60px', background: 'linear-gradient(135deg, #f0faff, #e2f0f8)' }}>
        <div className="page-container">
          <div className="section-label">Get in Touch</div>
          <h1 style={{ fontSize: 48, fontWeight: 800, lineHeight: 1.18, marginBottom: 14 }}>
            Let's start your journey to a<br /><span style={{ color: '#00b4d8' }}>Clinical Sanctuary.</span>
          </h1>
          <p style={{ fontSize: 15.5, color: '#5a6a7a', maxWidth: 520, lineHeight: 1.75 }}>
            Whether you have a specific clinical cleaning requirement or just need a routine refresh, our Sydney-based team is ready to assist you.
          </p>
        </div>
      </section>

      {/* Main */}
      <section style={{ padding: '60px 0 80px', background: '#f7fbfd' }}>
        <div className="page-container" style={{ display: 'flex', gap: 48, alignItems: 'flex-start' }}>

          {/* Left: Info */}
          <div style={{ flex: '0 0 300px' }}>
            <div style={{ background: 'white', borderRadius: 16, padding: '28px', border: '1px solid #e2ecf0', marginBottom: 20 }}>
              <div style={{ fontWeight: 800, fontSize: 17, color: '#0d1b2a', marginBottom: 22 }}>Contact Details</div>
              {[
                { icon: '📍', title: 'Office Address', detail: 'Level 2c, Three International Towers\n300 Barangaroo Ave, Sydney NSW 2000' },
                { icon: '✉️', title: 'Email Us', detail: 'freshcleansyd@gmail.com', teal: true },
                { icon: '📞', title: 'Call Direct', detail: '0493 597 634' },
              ].map(item => (
                <div key={item.title} style={{ display: 'flex', gap: 14, marginBottom: 22, alignItems: 'flex-start' }}>
                  <div style={{
                    width: 38, height: 38, borderRadius: 10, background: '#f0faff',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 18, flexShrink: 0, border: '1px solid #d0e6ef'
                  }}>{item.icon}</div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 13, color: '#0d1b2a', marginBottom: 3 }}>{item.title}</div>
                    <div style={{ fontSize: 13, color: item.teal ? '#00b4d8' : '#6b7c8d', lineHeight: 1.6, whiteSpace: 'pre-line' }}>{item.detail}</div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{
              width: '100%', height: 200, borderRadius: 14,
              background: 'linear-gradient(135deg, #c8d8e8, #a8b8c8)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 56, border: '1px solid #d0dce8',
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
            }}>🗺️</div>
          </div>

          {/* Right: Form */}
          <div style={{ flex: 1 }}>
            <div style={{ background: 'white', borderRadius: 20, padding: '40px', border: '1px solid #e2ecf0', boxShadow: '0 4px 24px rgba(0,0,0,0.05)' }}>
              {sent ? (
                <div style={{ textAlign: 'center', padding: '40px 0' }}>
                  <div style={{ fontSize: 64, marginBottom: 20 }}>📨</div>
                  <h2 style={{ fontSize: 28, fontWeight: 800, marginBottom: 12 }}>Message Sent!</h2>
                  <p style={{ color: '#6b7c8d', fontSize: 15, lineHeight: 1.7 }}>
                    Thanks <strong>{form.name}</strong>! We typically respond within 2 hours.
                  </p>
                  <button onClick={() => { setSent(false); setForm({ name: '', email: '', serviceType: 'Residential Clinical Clean', message: '' }); }} className="btn-primary" style={{ marginTop: 24 }}>
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 20 }}>
                    <div>
                      <label className="form-label">Full Name</label>
                      <input className="form-input" name="name" value={form.name} onChange={handle} placeholder="John Doe" required />
                    </div>
                    <div>
                      <label className="form-label">Email Address</label>
                      <input className="form-input" name="email" type="email" value={form.email} onChange={handle} placeholder="john@example.com" required />
                    </div>
                  </div>
                  <div style={{ marginBottom: 20 }}>
                    <label className="form-label">Service Type</label>
                    <select className="form-input" name="serviceType" value={form.serviceType} onChange={handle}>
                      {[
                        'Residential Clinical Clean', 'End of Lease / Bond Cleaning',
                        'Office & Commercial Cleaning', 'Regular Bar & Restaurant Cleaning',
                        'Pre-Sale / Move-In Cleaning', 'Spring / Deep Cleaning',
                        'Carpet & Upholstery Cleaning', 'Window & Glass Cleaning',
                        'Garage / Outdoor / Balcony Cleaning', 'Eco-Friendly Cleaning',
                        'Add-On Services', 'Other'
                      ].map(s => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                  <div style={{ marginBottom: 28 }}>
                    <label className="form-label">Your Message</label>
                    <textarea
                      className="form-input" name="message" value={form.message} onChange={handle}
                      placeholder="Tell us about your space..."
                      rows={5} style={{ resize: 'vertical' }}
                    />
                  </div>

                  {error && (
                    <div style={{ background: '#fff0f0', border: '1px solid #ffcccc', borderRadius: 8, padding: '12px 16px', marginBottom: 16, color: '#cc0000', fontSize: 13 }}>
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    className="btn-primary"
                    style={{ padding: '13px 36px', fontSize: 15, opacity: loading ? 0.7 : 1 }}
                    disabled={loading}
                  >
                    {loading ? 'Sending...' : 'Send Message'}
                  </button>
                  <p style={{ fontSize: 12, color: '#8a9aaa', marginTop: 12 }}>
                    By submitting, you agree to our privacy policy. We typically respond within 2 hours.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
