import { Link } from 'react-router-dom';

const PLANS = [
  {
    id: 'standard',
    tag: 'ESSENTIAL', tagBg: '#e0f7fb', tagColor: '#007fa3',
    name: 'Standard', sub: 'Small homes · Quick clean',
    price: 'Flexible', priceSub: 'Starting from market rates',
    features: ['2 Bedrooms', '2 Bathrooms', '1 Living room', '~2–3 hrs completion', '1–2 Dedicated cleaners'],
    cta: 'Get Started', ctaStyle: 'outline',
    popular: false,
  },
  {
    id: 'premium',
    tag: 'MOST SELECTED', tagBg: '#e0f7fb', tagColor: '#007fa3',
    name: 'Premium', sub: 'Deep clean · Best value',
    price: 'Negotiable', priceSub: 'Tailored to your requirements',
    features: ['5 Bedrooms', '3 Bathrooms', '2 Living rooms + vacuum', 'Oven / Fridge spot clean', '~4–5 hrs completion', '2–3 Expert cleaners'],
    cta: 'Book Premium', ctaStyle: 'primary',
    popular: true,
  },
  {
    id: 'enterprise',
    tag: 'BESPOKE', tagBg: '#e8edf5', tagColor: '#1e3a5f',
    name: 'Enterprise', sub: 'Large properties · Custom quote',
    price: 'Custom', priceSub: 'Volume-based discounts available',
    features: ['8+ Bedrooms / Offices', '5+ Bathrooms', 'Full deep clean & inspection', 'Custom timing / After hours', 'Team as required'],
    cta: 'Request Quote', ctaStyle: 'outline',
    popular: false,
  },
];

export default function Pricing() {
  return (
    <div>
      {/* Hero */}
      <section style={{ padding: '70px 0 60px', background: 'white', textAlign: 'center' }}>
        <div className="page-container">
          <h1 style={{ fontSize: 48, fontWeight: 800, lineHeight: 1.15, marginBottom: 16 }}>
            Clinical Clarity in <span style={{ color: '#00b4d8' }}>Every Corner</span>
          </h1>
          <p style={{ fontSize: 16, color: '#6b7c8d', maxWidth: 480, margin: '0 auto' }}>
            Transparent pricing for a sanctuary-grade clean. Choose the tier that fits your space and lifestyle.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section style={{ padding: '20px 0 80px', background: 'white' }}>
        <div className="page-container" style={{ display: 'flex', gap: 24, alignItems: 'stretch', maxWidth: 920, margin: '0 auto' }}>
          {PLANS.map(plan => (
            <div key={plan.id} style={{
              flex: 1, borderRadius: 16,
              border: plan.popular ? '2px solid #00b4d8' : '1.5px solid #e2ecf0',
              padding: '32px 28px', position: 'relative',
              background: 'white',
              boxShadow: plan.popular ? '0 12px 40px rgba(0,180,216,0.18)' : '0 2px 12px rgba(0,0,0,0.04)',
              display: 'flex', flexDirection: 'column'
            }}>
              {plan.popular && (
                <div style={{
                  position: 'absolute', top: -14, right: 20,
                  background: '#00b4d8', color: 'white',
                  fontSize: 11, fontWeight: 700, letterSpacing: 1,
                  padding: '4px 14px', borderRadius: 20, textTransform: 'uppercase'
                }}>POPULAR</div>
              )}
              <div style={{
                display: 'inline-block', background: plan.tagBg, color: plan.tagColor,
                fontSize: 10, fontWeight: 700, letterSpacing: 1.2,
                padding: '4px 10px', borderRadius: 20, textTransform: 'uppercase', marginBottom: 14
              }}>{plan.tag}</div>
              <div style={{ fontWeight: 800, fontSize: 22, color: '#0d1b2a', marginBottom: 4 }}>{plan.name}</div>
              <div style={{ fontSize: 13, color: '#8a9aaa', marginBottom: 20 }}>{plan.sub}</div>
              <div style={{ fontWeight: 800, fontSize: 32, color: '#0d1b2a', marginBottom: 4 }}>{plan.price}</div>
              <div style={{ fontSize: 13, color: '#8a9aaa', marginBottom: 24, paddingBottom: 24, borderBottom: '1px solid #e2ecf0' }}>{plan.priceSub}</div>
              <ul style={{ listStyle: 'none', flex: 1, marginBottom: 28 }}>
                {plan.features.map(f => (
                  <li key={f} style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 12, fontSize: 14, color: '#4a5568' }}>
                    <span style={{ color: '#00b4d8', fontWeight: 700, fontSize: 15 }}>✓</span> {f}
                  </li>
                ))}
              </ul>
              <Link to="/quote">
                <button style={{
                  width: '100%', padding: '13px', fontWeight: 700, fontSize: 14, borderRadius: 9, cursor: 'pointer',
                  background: plan.ctaStyle === 'primary' ? 'linear-gradient(135deg, #00b4d8, #0077b6)' : 'transparent',
                  color: plan.ctaStyle === 'primary' ? 'white' : '#0077b6',
                  border: plan.ctaStyle === 'primary' ? 'none' : '2px solid #0077b6',
                  transition: 'all 0.2s'
                }}>{plan.cta}</button>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Trust Banner */}
      <section style={{ padding: '70px 0', background: '#0d1b2a' }}>
        <div className="page-container" style={{ display: 'flex', alignItems: 'center', gap: 60 }}>
          <div style={{ flex: 1, color: 'white' }}>
            <h2 style={{ fontSize: 38, fontWeight: 800, lineHeight: 1.25, marginBottom: 18 }}>
              Clinical Standards.<br />Residential Warmth.
            </h2>
            <p style={{ color: '#8ab4cc', fontSize: 14.5, lineHeight: 1.8, marginBottom: 28 }}>
              We don't just clean; we restore. Every member of our Sydney-based team is vetted through our rigorous 42-point hygiene checklist.
            </p>
            <div style={{ display: 'flex', gap: 24 }}>
              {['✓ Police Vetted', '✓ Eco-Certified', '✓ Fully Insured'].map(b => (
                <span key={b} style={{ fontSize: 13.5, fontWeight: 600, color: '#00b4d8' }}>{b}</span>
              ))}
            </div>
          </div>
          <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end', position: 'relative' }}>
            <div style={{
              width: 360, height: 280, borderRadius: 18,
              background: 'linear-gradient(135deg, #1e4a5a, #0d2a35)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 90
            }}>👩‍🍳</div>
            <div style={{
              position: 'absolute', bottom: -12, right: 0,
              background: 'white', borderRadius: 12, padding: '14px 20px',
              boxShadow: '0 8px 28px rgba(0,0,0,0.25)',
              display: 'flex', alignItems: 'center', gap: 12
            }}>
              <span style={{ fontSize: 24 }}>🌿</span>
              <div>
                <div style={{ fontWeight: 700, fontSize: 13.5, color: '#0d1b2a' }}>100% Eco-Friendly</div>
                <div style={{ fontSize: 12, color: '#6b7c8d' }}>Safe for pets & children</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
