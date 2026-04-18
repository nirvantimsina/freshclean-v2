import { Link } from 'react-router-dom';

const SERVICES = [
  {
    icon: '🔑', title: 'End of Lease / Bond Cleaning', tag: 'MOST POPULAR',
    tagColor: '#e0f7fb', tagText: '#007fa3', dark: false, featured: true,
    desc: 'Our 100% Bond Back Guarantee service. We follow a strict real estate checklist to ensure your property is ready for the next tenant without any fuss.',
    features: ['Full bond-back guarantee', '72-point checklist', 'Same-day availability', 'Agent-approved report'],
  },
  {
    icon: '🏠', title: 'Regular Home Cleaning', tag: null, dark: false,
    desc: 'Scheduled weekly or fortnightly visits to keep your sanctuary in perfect clinical condition.',
    features: ['Flexible scheduling', 'Same cleaner each time', 'Key holding available', 'Progress reports'],
  },
  {
    icon: '🏢', title: 'Office & Commercial Cleaning', tag: null, dark: true,
    desc: 'Boosting productivity with a sanitised, professional workspace tailored to corporate standards.',
    features: ['After-hours service', 'Workstation sanitising', 'Waste management', 'Weekly reporting'],
  },
  {
    icon: '🍽️', title: 'Regular Bar & Restaurant Cleaning', tag: null, dark: false,
    desc: 'Keep your venue spotless and compliant with health regulations. We handle kitchens, dining areas, and everything in between.',
    features: ['Kitchen deep clean', 'Grease & grout removal', 'Health code compliant', 'After-hours available'],
  },
  {
    icon: '🏡', title: 'Pre-Sale / Move-In Cleaning', tag: null, dark: false,
    desc: 'Make the best first impression. We prepare your property for sale or move-in with a thorough top-to-bottom clean.',
    features: ['Presentation-ready finish', 'All rooms covered', 'Photo-ready results', 'Same-day available'],
  },
  {
    icon: '🌸', title: 'Spring / Deep Cleaning', tag: null, dark: false, accent: true,
    desc: 'A total seasonal reset for your home, clearing away the clutter and refreshing every surface.',
    features: ['Full home refresh', 'All surfaces sanitised', 'Appliance interiors', 'Odour elimination'],
  },
  {
    icon: '🪄', title: 'Carpet & Upholstery Cleaning', tag: null, dark: false,
    desc: 'Advanced steam extraction for carpets and fabric-safe cleaning for sofas, armchairs and curtains.',
    features: ['Hot water extraction', 'Stain treatment', 'Deodorising', 'Shape restoration'],
  },
  {
    icon: '🪟', title: 'Window & Glass Cleaning', tag: null, dark: false,
    desc: 'Streak-free clarity for both interior and exterior panes, including high-reach and glass doors.',
    features: ['Interior & exterior', 'High-rise capable', 'Frame & sill wipe', 'Squeegee finish'],
  },
  {
    icon: '🏗️', title: 'Garage / Outdoor / Balcony Cleaning', tag: null, dark: false,
    desc: 'We clean beyond the walls — garages, patios, balconies, and outdoor areas restored to their best.',
    features: ['Pressure washing', 'Oil & stain removal', 'Cobweb clearing', 'Balcony scrub'],
  },
  {
    icon: '🌿', title: 'Eco-Friendly Cleaning', tag: null, dark: false,
    desc: 'All the power of a deep clean using 100% non-toxic, biodegradable products. Safe for kids, pets, and the planet.',
    features: ['Non-toxic products', 'Pet & child safe', 'Biodegradable solutions', 'Allergy friendly'],
  },
  {
    icon: '➕', title: 'Add-On Services', tag: 'CUSTOMISABLE', tagColor: '#f0e6ff', tagText: '#6b21a8', dark: false,
    desc: 'Customise your clean with targeted add-ons for specific areas and items that need extra attention.',
    features: ['Oven & fridge clean', 'Wall spot cleaning', 'Blind & shutter wipe', 'Mattress sanitising'],
  },
];

export default function Services() {
  return (
    <div>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #f0faff, #e2f0f8)', padding: '70px 0 60px' }}>
        <div className="page-container" style={{ display: 'flex', alignItems: 'center', gap: 60 }}>
          <div style={{ flex: 1 }}>
            <div className="section-label">Our Expertise</div>
            <h1 style={{ fontSize: 50, fontWeight: 800, lineHeight: 1.12, marginBottom: 18 }}>
              Clinical Grade<br /><span style={{ color: '#00b4d8' }}>Cleaning</span><br />Solutions
            </h1>
            <p style={{ fontSize: 15.5, color: '#5a6a7a', lineHeight: 1.8, maxWidth: 420 }}>
              From meticulous residential upkeep to large-scale commercial sanitation, we bring medical-grade precision to every corner of Sydney.
            </p>
          </div>
          <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
            <div style={{
              width: 400, height: 300, borderRadius: 20,
              background: 'linear-gradient(135deg, #1a6b7c, #0d3d4a)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 100, boxShadow: '0 24px 60px rgba(0,119,182,0.25)'
            }}>🧽</div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section style={{ padding: '80px 0', background: 'white' }}>
        <div className="page-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {SERVICES.map((s) => (
              <div key={s.title} style={{
                borderRadius: 16, padding: '28px 26px',
                background: s.dark ? '#0d1b2a' : s.accent ? 'linear-gradient(135deg, #e0fbf5, #c8f0e8)' : '#f7fbfd',
                border: s.dark ? 'none' : s.accent ? 'none' : '1px solid #e2ecf0',
                position: 'relative', overflow: 'hidden',
                transition: 'box-shadow 0.2s, transform 0.2s',
              }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 10px 36px rgba(0,180,216,0.18)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'none'; }}
              >
                {s.tag && (
                  <div style={{
                    display: 'inline-block', background: s.tagColor, color: s.tagText,
                    fontSize: 10, fontWeight: 700, letterSpacing: 1.2, padding: '4px 10px',
                    borderRadius: 20, textTransform: 'uppercase', marginBottom: 12
                  }}>{s.tag}</div>
                )}
                <div style={{ fontSize: 32, marginBottom: 12 }}>{s.icon}</div>
                <div style={{ fontWeight: 700, fontSize: 17, color: s.dark ? 'white' : '#0d1b2a', marginBottom: 10 }}>{s.title}</div>
                <p style={{ fontSize: 13.5, color: s.dark ? '#8ab4cc' : '#6b7c8d', lineHeight: 1.7, marginBottom: 18 }}>{s.desc}</p>
                <ul style={{ listStyle: 'none', marginBottom: 22 }}>
                  {s.features.map(f => (
                    <li key={f} style={{ fontSize: 12.5, color: s.dark ? '#a8c8d8' : '#5a6a7a', marginBottom: 5, display: 'flex', gap: 8, alignItems: 'center' }}>
                      <span style={{ color: '#00b4d8', fontSize: 14, fontWeight: 700 }}>✓</span> {f}
                    </li>
                  ))}
                </ul>
                <Link to="/quote">
                  <button style={{
                    background: s.dark ? 'white' : s.accent ? '#0d1b2a' : 'transparent',
                    color: s.dark ? '#0d1b2a' : s.accent ? 'white' : '#00b4d8',
                    border: s.dark || s.accent ? 'none' : '2px solid #00b4d8',
                    borderRadius: 8, padding: '10px 20px', fontWeight: 700, fontSize: 13, cursor: 'pointer',
                    transition: 'all 0.2s'
                  }}>Get a Free Quote</button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section style={{ padding: '60px 0', background: '#0d1b2a' }}>
        <div className="page-container" style={{ display: 'flex', alignItems: 'center', gap: 60 }}>
          <div style={{ flex: 1, color: 'white' }}>
            <h2 style={{ fontSize: 36, fontWeight: 800, lineHeight: 1.25, marginBottom: 16 }}>
              Clinical Standards.<br />Residential Warmth.
            </h2>
            <p style={{ color: '#8ab4cc', fontSize: 14.5, lineHeight: 1.8, marginBottom: 28 }}>
              We don't just clean; we restore. Every member of our Sydney-based team is vetted through our rigorous 42-point hygiene checklist.
            </p>
            <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
              {['✓ Police Vetted', '✓ Eco-Certified', '✓ Fully Insured'].map(b => (
                <span key={b} style={{ fontSize: 13, fontWeight: 600, color: '#00b4d8' }}>{b}</span>
              ))}
            </div>
          </div>
          <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end', position: 'relative' }}>
            <div style={{
              width: 340, height: 260, borderRadius: 16,
              background: 'linear-gradient(135deg, #1e4a5a, #0d2a35)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 80
            }}>🌿</div>
            <div style={{
              position: 'absolute', bottom: -10, right: 0,
              background: 'white', borderRadius: 12, padding: '12px 18px',
              boxShadow: '0 8px 28px rgba(0,0,0,0.2)',
              display: 'flex', alignItems: 'center', gap: 10
            }}>
              <span style={{ fontSize: 20 }}>🌿</span>
              <div>
                <div style={{ fontWeight: 700, fontSize: 13, color: '#0d1b2a' }}>100% Eco-Friendly</div>
                <div style={{ fontSize: 11, color: '#6b7c8d' }}>Safe for pets & children</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
