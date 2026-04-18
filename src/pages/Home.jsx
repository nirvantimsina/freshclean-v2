import { useState, useRef, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';

const SERVICES = [
  { icon: '🔑', title: 'End of Lease / Bond Cleaning', desc: 'Full bond-back guarantee with a detailed 72-point checklist for tenants and agents.' },
  { icon: '🏠', title: 'Regular Home Cleaning', desc: 'Scheduled visits to keep your sanctuary in perfect clinical condition.' },
  { icon: '🏢', title: 'Office & Commercial Cleaning', desc: 'Boost productivity with a clinically clean and organised workspace.' },
  { icon: '🍽️', title: 'Bar & Restaurant Cleaning', desc: 'Keep your venue spotless and compliant with health regulations.' },
  { icon: '🏡', title: 'Pre-Sale / Move-In Cleaning', desc: 'Make the best first impression with a thorough top-to-bottom clean.' },
  { icon: '🌸', title: 'Spring / Deep Cleaning', desc: 'A total seasonal reset, clearing away grime and refreshing every surface.' },
  { icon: '🪄', title: 'Carpet & Upholstery Cleaning', desc: 'Steam cleaning and stain removal to restore carpets and furniture to new.' },
  { icon: '🪟', title: 'Window & Glass Cleaning', desc: 'Crystal clear, streak-free results for all interior and exterior panes.' },
  { icon: '🏗️', title: 'Garage / Outdoor / Balcony', desc: 'We clean beyond the walls — garages, patios and balconies restored.' },
  { icon: '🌿', title: 'Eco-Friendly Cleaning', desc: 'Non-toxic, biodegradable products safe for kids, pets and the planet.' },
  { icon: '➕', title: 'Add-On Services', desc: 'Oven, fridge, walls, blinds, mattress and more — fully customisable.' },
];

const FAQS = [
  { q: 'How do I get a quote?', a: 'By emailing us, through WhatsApp, through phone call, through the website or by messaging us on our social media.' },
  { q: 'What areas do you cover?', a: 'We cover all of Sydney and surrounding suburbs including the Inner West, Eastern Suburbs, North Shore, and Western Sydney.' },
  { q: 'How long does it take?', a: 'Depending on the size and condition of the property, most cleans take between 3–8 hours. We\'ll give you an accurate estimate when you book.' },
];

const REVIEWS = [
  { name: 'Sarah Chen', location: 'Surrey Hills', initials: 'SC', text: 'FreshClean made my end-of-lease move so easy. The property manager said it was the cleanest handover he\'d ever seen. Got my full bond back within 48 hours!!' },
  { name: 'James Miller', location: 'Mosman', initials: 'JM', text: 'I\'ve used several services in Sydney, but the clinical attention to detail here is unmatched. My windows are actually invisible now. Highly recommend the deep clean.' },
  { name: 'Linda Thompson', location: 'Balmain', initials: 'LT', text: 'Professional from start to finish. The team arrived on time and the house smells incredibly fresh. Best clinical-grade cleaning service in the Inner West.' },
];

// ─── Before & After Data ─────────────────────────────────────────────────────
// Replace the placeholder URLs below with your real before/after photo URLs.
// Each entry needs: id, label, beforeSrc, afterSrc, beforeAlt, afterAlt
const BEFORE_AFTER = [
  {
    id: 1,
    label: 'Kitchen Deep Clean',
    beforeSrc: '/images/kitchen-before.jpg',
    afterSrc:  '/images/kitchen-after.jpg',
    beforeAlt: 'Kitchen before cleaning',
    afterAlt:  'Kitchen after cleaning',
  },
  {
    id: 2,
    label: 'Bathroom Restoration',
    beforeSrc: '/images/bathroom-before.jpg',
    afterSrc:  '/images/bathroom-after.jpg',
    beforeAlt: 'Bathroom before cleaning',
    afterAlt:  'Bathroom after cleaning',
  },
  {
    id: 3,
    label: 'Carpet Steam Clean',
    beforeSrc: '/images/carpet-before.jpg',
    afterSrc:  '/images/carpet-after.jpg',
    beforeAlt: 'Carpet before cleaning',
    afterAlt:  'Carpet after cleaning',
  },
];

// ─── Slider Component ─────────────────────────────────────────────────────────
function ImageSlider({ beforeSrc, afterSrc, beforeAlt, afterAlt }) {
  const [position, setPosition] = useState(50);
  const [dragging, setDragging] = useState(false);
  const containerRef = useRef(null);

  const getPercent = useCallback((clientX) => {
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    return (x / rect.width) * 100;
  }, []);

  const onMouseDown = () => setDragging(true);
  const onMouseMove = useCallback((e) => {
    if (!dragging) return;
    setPosition(getPercent(e.clientX));
  }, [dragging, getPercent]);
  const onMouseUp = () => setDragging(false);

  const onTouchMove = useCallback((e) => {
    setPosition(getPercent(e.touches[0].clientX));
  }, [getPercent]);

  useEffect(() => {
    if (dragging) {
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', onMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, [dragging, onMouseMove]);

  return (
    <div
      ref={containerRef}
      onMouseMove={onMouseMove}
      onTouchMove={onTouchMove}
      style={{
        position: 'relative', width: '100%', height: 340,
        borderRadius: 16, overflow: 'hidden', cursor: 'col-resize',
        userSelect: 'none', boxShadow: '0 16px 48px rgba(0,0,0,0.14)',
      }}
    >
      {/* After image (base layer) */}
      <img
        src={afterSrc} alt={afterAlt} draggable={false}
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
      />
      {/* Before image (clipped) */}
      <div style={{ position: 'absolute', inset: 0, width: `${position}%`, overflow: 'hidden' }}>
        <img
          src={beforeSrc} alt={beforeAlt} draggable={false}
          style={{ width: containerRef.current?.offsetWidth || 600, maxWidth: 'none', height: '100%', objectFit: 'cover' }}
        />
      </div>

      {/* Labels */}
      <span style={{
        position: 'absolute', top: 14, left: 14, background: 'rgba(13,27,42,0.75)',
        color: 'white', fontSize: 11, fontWeight: 700, letterSpacing: 1.2,
        padding: '4px 10px', borderRadius: 20, textTransform: 'uppercase', backdropFilter: 'blur(4px)'
      }}>Before</span>
      <span style={{
        position: 'absolute', top: 14, right: 14, background: 'rgba(0,119,182,0.85)',
        color: 'white', fontSize: 11, fontWeight: 700, letterSpacing: 1.2,
        padding: '4px 10px', borderRadius: 20, textTransform: 'uppercase', backdropFilter: 'blur(4px)'
      }}>After</span>

      {/* Divider line */}
      <div style={{
        position: 'absolute', top: 0, bottom: 0, left: `${position}%`,
        width: 3, background: 'white', transform: 'translateX(-50%)',
        boxShadow: '0 0 10px rgba(0,0,0,0.35)',
      }} />

      {/* Handle */}
      <div
        onMouseDown={onMouseDown}
        onTouchStart={() => setDragging(true)}
        onTouchEnd={() => setDragging(false)}
        style={{
          position: 'absolute', top: '50%', left: `${position}%`,
          transform: 'translate(-50%, -50%)',
          width: 44, height: 44, borderRadius: '50%',
          background: 'white', boxShadow: '0 4px 16px rgba(0,0,0,0.25)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          gap: 2, cursor: 'col-resize',
          transition: dragging ? 'none' : 'left 0.05s',
        }}
      >
        <div style={{ display: 'flex', gap: 3 }}>
          {['◀', '▶'].map((ch, i) => (
            <span key={i} style={{ fontSize: 11, color: '#00b4d8', lineHeight: 1 }}>{ch}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Before & After Section ───────────────────────────────────────────────────
function BeforeAfterSection() {
  const [active, setActive] = useState(0);
  const current = BEFORE_AFTER[active];

  return (
    <section style={{ padding: '80px 0', background: 'linear-gradient(180deg, #f0faff 0%, #e6f4f8 100%)' }}>
      <div className="page-container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div className="section-label">Real Results</div>
          <h2 style={{ fontSize: 34, fontWeight: 800, marginTop: 8 }}>See the FreshClean Difference</h2>
          <div style={{ width: 48, height: 3, background: '#00b4d8', margin: '14px auto 14px', borderRadius: 2 }} />
          <p style={{ color: '#6b7c8d', fontSize: 15, maxWidth: 480, margin: '0 auto' }}>
            Drag the slider to reveal the transformation. Every clean, backed by our bond-back guarantee.
          </p>
        </div>

        {/* Tab Switcher */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 10, marginBottom: 32 }}>
          {BEFORE_AFTER.map((item, i) => (
            <button
              key={item.id}
              onClick={() => setActive(i)}
              style={{
                padding: '9px 20px', borderRadius: 24, fontSize: 13, fontWeight: 600,
                border: '2px solid',
                borderColor: active === i ? '#00b4d8' : '#d0e8f0',
                background: active === i ? '#00b4d8' : 'white',
                color: active === i ? 'white' : '#5a6a7a',
                cursor: 'pointer', transition: 'all 0.2s',
              }}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Slider */}
        <div style={{ maxWidth: 780, margin: '0 auto' }}>
          <ImageSlider
            key={current.id}
            beforeSrc={current.beforeSrc}
            afterSrc={current.afterSrc}
            beforeAlt={current.beforeAlt}
            afterAlt={current.afterAlt}
          />
          <p style={{
            textAlign: 'center', marginTop: 16, fontSize: 13, color: '#8a9aaa', fontStyle: 'italic'
          }}>
            ← Drag the handle to compare before &amp; after →
          </p>
        </div>

        {/* Stats row */}
        <div style={{
          display: 'flex', justifyContent: 'center', gap: 48, marginTop: 52,
          flexWrap: 'wrap',
        }}>
          {[
            { value: '5,000+', label: 'Happy Clients' },
            { value: '100%', label: 'Bond Back Rate' },
            { value: '4.9★', label: 'Average Rating' },
            { value: '72-pt', label: 'Checklist' },
          ].map(stat => (
            <div key={stat.label} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 28, fontWeight: 800, color: '#00b4d8' }}>{stat.value}</div>
              <div style={{ fontSize: 13, color: '#8a9aaa', marginTop: 4 }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section style={{ padding: '80px 0', background: '#f7fbfd' }}>
      <div className="page-container">
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <h2 style={{ fontSize: 34, fontWeight: 800 }}>You Might Ask</h2>
          <div style={{ width: 48, height: 3, background: '#00b4d8', margin: '14px auto 10px', borderRadius: 2 }} />
          <p style={{ color: '#8a9aaa', fontSize: 14 }}>Frequently Asked Questions</p>
        </div>
        <div style={{ maxWidth: 700, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 4 }}>
          {FAQS.map((faq, i) => (
            <div key={i} style={{ background: 'white', borderRadius: 10, border: '1px solid #e2ecf0', overflow: 'hidden' }}>
              <button
                onClick={() => setOpen(open === i ? -1 : i)}
                style={{
                  width: '100%', padding: '18px 24px', textAlign: 'left',
                  background: 'none', border: 'none', cursor: 'pointer',
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  fontSize: 15, fontWeight: 600, color: '#0d1b2a'
                }}>
                {faq.q}
                <span style={{ fontSize: 20, color: '#00b4d8', transition: 'transform 0.2s', transform: open === i ? 'rotate(180deg)' : 'rotate(0)' }}>⌄</span>
              </button>
              {open === i && (
                <div style={{ padding: '0 24px 20px', fontSize: 14, color: '#5a6a7a', lineHeight: 1.75 }}>{faq.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #f0faff 0%, #e6f4f8 100%)', padding: '70px 0 60px' }}>
        <div className="page-container" style={{ display: 'flex', alignItems: 'center', gap: 60 }}>
          <div style={{ flex: 1 }}>
            <div className="section-label">Sydney's #1 Rated Team</div>
            <h1 style={{ fontSize: 52, fontWeight: 800, lineHeight: 1.12, marginBottom: 6 }}>
              Professional End<br />of Lease
            </h1>
            <h1 style={{ fontSize: 52, fontWeight: 800, color: '#00b4d8', lineHeight: 1.12, marginBottom: 20 }}>
              Cleaning Sydney
            </h1>
            <p style={{ fontSize: 16, color: '#5a6a7a', lineHeight: 1.7, marginBottom: 34, maxWidth: 440 }}>
              Pure Clean. Pure Peace of Mind. We handle the clinical details so you can focus on your new beginning.
            </p>
            <div style={{ display: 'flex', gap: 14 }}>
              <Link to="/quote"><button className="btn-primary" style={{ fontSize: 15, padding: '13px 28px' }}>Get a Free Quote</button></Link>
              <Link to="/pricing"><button className="btn-outline" style={{ fontSize: 15, padding: '13px 28px' }}>View Pricing</button></Link>
            </div>
          </div>
          <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
            <div style={{ position: 'relative', width: 420 }}>
              <div style={{
                width: '100%', height: 320, borderRadius: 20,
                background: 'linear-gradient(135deg, #1a6b7c, #0d3d4a)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 100, boxShadow: '0 24px 60px rgba(0,119,182,0.28)',
                overflow: 'hidden'
              }}>
                <span style={{ filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.3))' }}>🧹</span>
              </div>
              <div style={{
                position: 'absolute', bottom: -16, left: 20, right: 20,
                background: 'white', borderRadius: 12, padding: '14px 18px',
                boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
                display: 'flex', alignItems: 'center', gap: 14
              }}>
                <div style={{
                  width: 40, height: 40, borderRadius: '50%',
                  background: 'linear-gradient(135deg, #00b4d8, #0077b6)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'white', fontSize: 18, flexShrink: 0
                }}>✓</div>
                <div>
                  <div style={{ fontWeight: 800, fontSize: 12.5, color: '#0d1b2a', letterSpacing: 0.3 }}>BOND GUARANTEE</div>
                  <div style={{ fontSize: 11.5, color: '#6b7c8d' }}>100% Satisfaction</div>
                </div>
                <div style={{ marginLeft: 'auto', textAlign: 'right' }}>
                  <div className="stars" style={{ fontSize: 13 }}>★★★★★</div>
                  <div style={{ fontSize: 10.5, color: '#8a9aaa' }}>2,400+ Reviews</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before & After */}
      <BeforeAfterSection />

      {/* About */}
      <section style={{ padding: '80px 0', background: 'white' }}>
        <div className="page-container" style={{ display: 'flex', gap: 64, alignItems: 'center' }}>
          <div style={{ flex: 1 }}>
            <h2 style={{ fontSize: 30, fontWeight: 800, lineHeight: 1.3, marginBottom: 18 }}>
              Welcome to FreshClean Sydney –<br />Sydney's Premier Cleaning Experts.
            </h2>
            <p style={{ fontSize: 14.5, color: '#5a6a7a', lineHeight: 1.85, marginBottom: 28 }}>
              At FreshClean Sydney, we believe a clean space is a sanctuary. Founded on the principles of clinical precision and architectural order, we've redefined what it means to experience professional cleaning. Whether it's securing your full bond back or maintaining a pristine office environment, our team uses medical-grade protocols to ensure every corner sparkles.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { icon: '🏥', title: 'Clinical Grade Standards', desc: 'We follow hospital-grade checklists to ensure hygiene is absolute.' },
                { icon: '🛡️', title: 'Fully Insured & Vetted', desc: 'Your property is in safe hands with our background-checked professionals.' },
              ].map(item => (
                <div key={item.title} style={{
                  display: 'flex', gap: 14, alignItems: 'flex-start',
                  background: '#f7fbfd', borderRadius: 10, padding: '16px 20px',
                  border: '1px solid #e2ecf0'
                }}>
                  <span style={{ fontSize: 22, lineHeight: 1 }}>{item.icon}</span>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 14, color: '#0d1b2a', marginBottom: 3 }}>{item.title}</div>
                    <div style={{ fontSize: 13, color: '#6b7c8d' }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ flex: 1, display: 'flex', gap: 16, height: 300 }}>
            <div style={{
              flex: 1, borderRadius: 16, background: 'linear-gradient(135deg, #c8e6ee, #8dc8d8)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 72, boxShadow: '0 12px 40px rgba(0,0,0,0.1)'
            }}>🛋️</div>
            <div style={{
              flex: 1, borderRadius: 16, background: 'linear-gradient(135deg, #daf0f5, #a8d8e6)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 72, boxShadow: '0 12px 40px rgba(0,0,0,0.1)'
            }}>🧴</div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ />

      {/* Services */}
      <section style={{ padding: '80px 0', background: 'white' }}>
        <div className="page-container">
          <div style={{ textAlign: 'center', marginBottom: 50 }}>
            <h2 style={{ fontSize: 34, fontWeight: 800 }}>Our Premium Services</h2>
            <div style={{ width: 48, height: 3, background: '#00b4d8', margin: '14px auto 0', borderRadius: 2 }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 22 }}>
            {SERVICES.map(s => (
              <div key={s.title} style={{
                background: '#f7fbfd', borderRadius: 14, padding: '28px 22px',
                border: '1px solid #e2ecf0', transition: 'box-shadow 0.2s, transform 0.2s', cursor: 'pointer'
              }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 10px 32px rgba(0,180,216,0.16)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'none'; }}
              >
                <div style={{ fontSize: 32, marginBottom: 14 }}>{s.icon}</div>
                <div style={{ fontWeight: 700, fontSize: 15, color: '#0d1b2a', marginBottom: 8 }}>{s.title}</div>
                <div style={{ fontSize: 13, color: '#6b7c8d', lineHeight: 1.6, marginBottom: 16 }}>{s.desc}</div>
                <Link to="/services" style={{ fontSize: 13, fontWeight: 700, color: '#00b4d8' }}>Learn More →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section style={{ padding: '80px 0', background: '#f0faff' }}>
        <div className="page-container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 44 }}>
            <div>
              <h2 style={{ fontSize: 34, fontWeight: 800 }}>Trusted by 5,000+ Sydneysiders</h2>
              <p style={{ fontSize: 14, color: '#6b7c8d', marginTop: 8 }}>Real reviews from our valued clinical-grade cleaning clients.</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span className="stars" style={{ fontSize: 18 }}>★★★★★</span>
              <span style={{ fontWeight: 700, fontSize: 15 }}>5.0 Rating on Google</span>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {REVIEWS.map(r => (
              <div key={r.name} style={{
                background: 'white', borderRadius: 16, padding: '28px 24px',
                border: '1px solid #e2ecf0', boxShadow: '0 4px 20px rgba(0,0,0,0.04)'
              }}>
                <span className="stars">★★★★★</span>
                <p style={{ fontSize: 14, color: '#4a5568', lineHeight: 1.8, margin: '14px 0 22px' }}>"{r.text}"</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: '50%',
                    background: 'linear-gradient(135deg, #00b4d8, #0077b6)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'white', fontWeight: 700, fontSize: 13
                  }}>{r.initials}</div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 14 }}>{r.name}</div>
                    <div style={{ fontSize: 12, color: '#8a9aaa' }}>{r.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section style={{ padding: '70px 0', background: 'linear-gradient(135deg, #0d1b2a, #1a3a55)' }}>
        <div className="page-container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: 36, fontWeight: 800, color: 'white', marginBottom: 14 }}>
            Ready for a Clinical-Grade Clean?
          </h2>
          <p style={{ color: '#8ab4cc', fontSize: 16, marginBottom: 34 }}>
            Get a free, tailored quote in under 60 seconds.
          </p>
          <Link to="/quote">
            <button className="btn-primary" style={{ fontSize: 16, padding: '15px 40px' }}>
              Get a Free Quote →
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
