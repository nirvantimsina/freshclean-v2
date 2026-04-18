import { useState } from 'react';

const SHEET_URL = 'https://script.google.com/macros/s/AKfycbzFbt3IGDnYUocfJUUph223Q8GKiR1LVfgI1JxuqzgZDyXKJ9pUQUodpuFhNjvKXN7rqg/exec';

export default function Quote() {
  const [form, setForm] = useState({
    name: '', mobile: '', email: '', service: '', frequency: 'One Time',
    bedrooms: 'Studio', totalRooms: '', message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

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
          formType: 'quote',
          name: form.name,
          email: form.email,
          phone: form.mobile,
          service: form.service,
          frequency: form.frequency,
          bedrooms: form.bedrooms,
          totalRooms: form.totalRooms,
          message: form.message,
        }),
      });
      setSubmitted(true);
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Hero */}
      <section style={{ padding: '70px 0 60px', background: 'white', textAlign: 'center' }}>
        <div className="page-container">
          <h1 style={{ fontSize: 46, fontWeight: 800, marginBottom: 14 }}>Get a Free Quote</h1>
          <p style={{ fontSize: 16, color: '#6b7c8d', maxWidth: 520, margin: '0 auto' }}>
            Experience the gold standard in clinical-grade cleaning. Complete the form below and receive a tailored estimate for your sanctuary.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section style={{ padding: '0 0 80px', background: '#f7fbfd' }}>
        <div className="page-container" style={{ display: 'flex', gap: 48, alignItems: 'flex-start' }}>

          {/* Left column */}
          <div style={{ flex: '0 0 300px' }}>
            <div style={{
              width: '100%', height: 220, borderRadius: 16,
              background: 'linear-gradient(135deg, #1a6b7c, #0d3d4a)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 80, marginBottom: 24, boxShadow: '0 12px 40px rgba(0,0,0,0.15)'
            }}>🏠</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                { icon: '🌿', title: 'Eco-Friendly Care', desc: 'Non-toxic, clinical grade solutions.' },
                { icon: '🛡️', title: 'Fully Insured', desc: 'Your peace of mind is our priority.' },
                { icon: '⭐', title: '5-Star Service', desc: "Sydney's highest rated cleaners." },
              ].map(item => (
                <div key={item.title} style={{
                  background: 'white', borderRadius: 12, padding: '16px 18px',
                  border: '1px solid #e2ecf0', display: 'flex', gap: 14, alignItems: 'flex-start'
                }}>
                  <span style={{ fontSize: 22 }}>{item.icon}</span>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 14, color: '#0d1b2a', marginBottom: 3 }}>{item.title}</div>
                    <div style={{ fontSize: 12.5, color: '#6b7c8d' }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div style={{ flex: 1 }}>
            <div style={{ background: 'white', borderRadius: 20, padding: '40px', border: '1px solid #e2ecf0', boxShadow: '0 4px 24px rgba(0,0,0,0.05)' }}>
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '40px 0' }}>
                  <div style={{ fontSize: 64, marginBottom: 20 }}>✅</div>
                  <h2 style={{ fontSize: 28, fontWeight: 800, color: '#0d1b2a', marginBottom: 12 }}>Quote Requested!</h2>
                  <p style={{ color: '#6b7c8d', fontSize: 15, lineHeight: 1.7 }}>
                    Thanks, <strong>{form.name}</strong>! We typically respond within 60 minutes during business hours. Check your email at <strong>{form.email}</strong>.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', mobile: '', email: '', service: '', frequency: 'One Time', bedrooms: 'Studio', totalRooms: '', message: '' }); }}
                    className="btn-primary" style={{ marginTop: 28, padding: '12px 32px' }}
                  >Submit Another</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 20 }}>
                    <div>
                      <label className="form-label">Name</label>
                      <input className="form-input" name="name" value={form.name} onChange={handle} placeholder="John Smith" required />
                    </div>
                    <div>
                      <label className="form-label">Mobile Number</label>
                      <input className="form-input" name="mobile" value={form.mobile} onChange={handle} placeholder="0400 000 000" />
                    </div>
                  </div>

                  <div style={{ marginBottom: 20 }}>
                    <label className="form-label">Email Address</label>
                    <input className="form-input" name="email" type="email" value={form.email} onChange={handle} placeholder="john@example.com" required />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 20 }}>
                    <div>
                      <label className="form-label">Choose a Service</label>
                      <select className="form-input" name="service" value={form.service} onChange={handle} required>
                        <option value="">Select Service...</option>
                        {[
                          'End of Lease / Bond Cleaning',
                          'Regular Home Cleaning',
                          'Office & Commercial Cleaning',
                          'Regular Bar & Restaurant Cleaning',
                          'Pre-Sale / Move-In Cleaning',
                          'Spring / Deep Cleaning',
                          'Carpet & Upholstery Cleaning',
                          'Window & Glass Cleaning',
                          'Garage / Outdoor / Balcony Cleaning',
                          'Eco-Friendly Cleaning',
                          'Add-On Services (Oven, Fridge, Walls, Blinds, Mattress)',
                        ].map(s => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="form-label">Frequency</label>
                      <select className="form-input" name="frequency" value={form.frequency} onChange={handle}>
                        {['One Time', 'Weekly', 'Fortnightly', 'Monthly'].map(f => (
                          <option key={f} value={f}>{f}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 20 }}>
                    <div>
                      <label className="form-label">Bedrooms</label>
                      <select className="form-input" name="bedrooms" value={form.bedrooms} onChange={handle}>
                        {['Studio', '1 Bedroom', '2 Bedrooms', '3 Bedrooms', '4 Bedrooms', '5+ Bedrooms'].map(b => (
                          <option key={b} value={b}>{b}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="form-label">Total Rooms</label>
                      <input className="form-input" name="totalRooms" value={form.totalRooms} onChange={handle} placeholder="e.g. 7" type="number" min="1" />
                    </div>
                  </div>

                  <div style={{ marginBottom: 28 }}>
                    <label className="form-label">Message</label>
                    <textarea
                      className="form-input"
                      name="message" value={form.message} onChange={handle}
                      placeholder="Any specific requirements or instructions..."
                      rows={4}
                      style={{ resize: 'vertical' }}
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
                    style={{ width: '100%', padding: '14px', fontSize: 15, opacity: loading ? 0.7 : 1 }}
                    disabled={loading}
                  >
                    {loading ? 'Sending...' : 'Request Your Free Quote'}
                  </button>
                  <p style={{ textAlign: 'center', fontSize: 12, color: '#8a9aaa', marginTop: 12 }}>
                    *We typically respond within 60 minutes during business hours.
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
