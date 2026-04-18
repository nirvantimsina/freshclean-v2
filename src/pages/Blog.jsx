import { useState } from 'react';
import { Link } from 'react-router-dom';

const SHEET_URL = 'https://script.google.com/macros/s/AKfycbzFbt3IGDnYUocfJUUph223Q8GKiR1LVfgI1JxuqzgZDyXKJ9pUQUodpuFhNjvKXN7rqg/exec';

const CATEGORIES = ['All Stories', 'Cleaning Tips', 'Sustainable Living', 'Sydney Lifestyle', 'Wellness'];

const POSTS = [
  // ── Cleaning Tips (5) ──────────────────────────────────────────────────────
  {
    id: 'clinical-sanctuary',
    category: 'Cleaning Tips',
    date: 'March 12, 2024',
    title: '7 Natural Secrets to a Sparkling Sydney Kitchen',
    excerpt: 'Discover how to harness the power of citrus and eucalyptus to maintain a clinical-grade shine in your coastal home without harsh chemicals.',
    featured: true,
    readTime: '5 min read',
    accent: '#00b4d8',
  },
  {
    id: 'define-clinical',
    category: 'Cleaning Tips',
    date: 'February 20, 2024',
    title: 'How We Define "Clinical Clean" for Your Home',
    excerpt: 'An exclusive look into our proprietary 50-point sanctuary checklist that goes far beyond surface shining.',
    featured: false,
    readTime: '6 min read',
    accent: '#0d3d5a',
  },
  {
    id: 'bathroom-tips',
    category: 'Cleaning Tips',
    date: 'February 10, 2024',
    title: '5 Ways to Maintain a Hotel-Fresh Bathroom Every Day',
    excerpt: 'Simple daily habits that keep your bathroom spotless and guest-ready between professional cleans.',
    featured: false,
    readTime: '4 min read',
    accent: '#1a5a7a',
  },
  {
    id: 'grout-secrets',
    category: 'Cleaning Tips',
    date: 'January 18, 2024',
    title: 'The Secret to Grout That Stays White All Year',
    excerpt: 'Professional-grade techniques for cleaning and sealing tile grout so it resists staining for months at a time.',
    featured: false,
    readTime: '4 min read',
    accent: '#0a4a6a',
  },
  {
    id: 'end-of-lease-checklist',
    category: 'Cleaning Tips',
    date: 'January 5, 2024',
    title: 'The Ultimate End-of-Lease Cleaning Checklist',
    excerpt: 'Everything tenants and landlords need to know to pass the final inspection and secure a full bond refund.',
    featured: false,
    readTime: '8 min read',
    accent: '#004e7c',
  },

  // ── Sustainable Living (5) ─────────────────────────────────────────────────
  {
    id: 'zero-waste',
    category: 'Sustainable Living',
    date: 'February 28, 2024',
    title: 'Zero-Waste Cleaning: A Beginner\'s Guide',
    excerpt: 'Transition your home to a sustainable sanctuary with these simple, effective swaps that cut waste without cutting corners.',
    featured: false,
    readTime: '4 min read',
    accent: '#2a7a4a',
  },
  {
    id: 'diy-cleaners',
    category: 'Sustainable Living',
    date: 'February 14, 2024',
    title: '6 DIY Cleaners You Can Make with Pantry Staples',
    excerpt: 'Vinegar, bicarb, and lemon are more powerful than you think. Here\'s how to make cleaners that actually work.',
    featured: false,
    readTime: '5 min read',
    accent: '#1a6a3a',
  },
  {
    id: 'microfibre-guide',
    category: 'Sustainable Living',
    date: 'January 25, 2024',
    title: 'Why Microfibre Cloths Are the Future of Cleaning',
    excerpt: 'How switching to microfibre reduces chemical use by up to 90% while delivering a superior clean every time.',
    featured: false,
    readTime: '3 min read',
    accent: '#145a30',
  },
  {
    id: 'carbon-footprint',
    category: 'Sustainable Living',
    date: 'January 10, 2024',
    title: 'How Your Cleaning Routine Affects Your Carbon Footprint',
    excerpt: 'Small changes to how you clean at home can have a surprisingly large impact on your household emissions.',
    featured: false,
    readTime: '5 min read',
    accent: '#0e4a28',
  },
  {
    id: 'refillable-products',
    category: 'Sustainable Living',
    date: 'December 20, 2023',
    title: 'The Best Refillable Cleaning Products Available in Sydney',
    excerpt: 'A curated guide to the top refillable and low-waste cleaning brands you can find right here in Sydney.',
    featured: false,
    readTime: '4 min read',
    accent: '#1c6040',
  },

  // ── Sydney Lifestyle (5) ───────────────────────────────────────────────────
  {
    id: 'coastal-walks',
    category: 'Sydney Lifestyle',
    date: 'March 8, 2024',
    title: 'The Best Coastal Walks for a Post-Cleaning Refresh',
    excerpt: 'Once your sanctuary is clean, take a breath at our favourite Sydney coastal trails that restore both home and mind.',
    featured: false,
    readTime: '3 min read',
    accent: '#b45309',
  },
  {
    id: 'sydney-apartments',
    category: 'Sydney Lifestyle',
    date: 'February 22, 2024',
    title: 'Keeping a Small Sydney Apartment Feeling Spacious',
    excerpt: 'Practical cleaning and decluttering habits for apartment dwellers who want to maximise every square metre.',
    featured: false,
    readTime: '5 min read',
    accent: '#92400e',
  },
  {
    id: 'airbnb-sydney',
    category: 'Sydney Lifestyle',
    date: 'February 5, 2024',
    title: 'How Sydney Airbnb Hosts Maintain 5-Star Reviews',
    excerpt: 'The cleaning routines, turnaround tips, and professional secrets behind the city\'s top-rated short-stay properties.',
    featured: false,
    readTime: '6 min read',
    accent: '#78350f',
  },
  {
    id: 'moving-sydney',
    category: 'Sydney Lifestyle',
    date: 'January 14, 2024',
    title: 'Moving in Sydney: A Stress-Free Cleaning Timeline',
    excerpt: 'A week-by-week guide for renters and buyers to manage the clean-out process without the last-minute panic.',
    featured: false,
    readTime: '5 min read',
    accent: '#7c4500',
  },
  {
    id: 'spring-sydney',
    category: 'Sydney Lifestyle',
    date: 'December 10, 2023',
    title: 'Sydney Spring Cleaning: Why October is the Perfect Month',
    excerpt: 'There\'s a reason Sydneysiders do their big clean in October. Here\'s how to make the most of the season.',
    featured: false,
    readTime: '4 min read',
    accent: '#a05300',
  },

  // ── Wellness (5) ──────────────────────────────────────────────────────────
  {
    id: 'hepa-filtration',
    category: 'Wellness',
    date: 'January 30, 2024',
    title: 'Silent Invaders: The Importance of HEPA Filtration',
    excerpt: 'How microscopic particles affect your long-term health and what clinical cleaning does to eliminate them for good.',
    featured: false,
    readTime: '7 min read',
    accent: '#5b21b6',
  },
  {
    id: 'allergens-home',
    category: 'Wellness',
    date: 'January 20, 2024',
    title: 'The Top 5 Hidden Allergens in Your Home and How to Remove Them',
    excerpt: 'Dust mites, mould spores, pet dander and more — a clinical guide to identifying and eliminating the triggers.',
    featured: false,
    readTime: '6 min read',
    accent: '#4c1d95',
  },
  {
    id: 'mental-health-clean',
    category: 'Wellness',
    date: 'January 8, 2024',
    title: 'Why a Clean Home Is One of the Best Things for Your Mental Health',
    excerpt: 'The science behind how clutter and mess affect cortisol levels, focus, and sleep quality — and what to do about it.',
    featured: false,
    readTime: '5 min read',
    accent: '#3b0764',
  },
  {
    id: 'mould-health',
    category: 'Wellness',
    date: 'December 28, 2023',
    title: 'Mould, Moisture & Your Health: What Sydney Residents Must Know',
    excerpt: 'Sydney\'s humidity makes mould a real risk. Here\'s how to spot it, remove it safely, and prevent it from returning.',
    featured: false,
    readTime: '6 min read',
    accent: '#2e1065',
  },
  {
    id: 'clean-sleep',
    category: 'Wellness',
    date: 'December 15, 2023',
    title: 'How a Cleaner Bedroom Can Transform the Quality of Your Sleep',
    excerpt: 'From dust-free mattresses to fresh linen protocols — the clinical approach to building a truly restful sleep environment.',
    featured: false,
    readTime: '4 min read',
    accent: '#4a1080',
  },
];

const categoryColors = {
  'Cleaning Tips':     { bg: '#e0f7fb', text: '#007fa3' },
  'Sustainable Living':{ bg: '#dcfce7', text: '#166534' },
  'Sydney Lifestyle':  { bg: '#fef3c7', text: '#92400e' },
  'Wellness':          { bg: '#ede9fe', text: '#5b21b6' },
};

export default function Blog() {
  const [active, setActive] = useState('All Stories');
  const [search, setSearch] = useState('');
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [subLoading, setSubLoading] = useState(false);
  const [subError, setSubError] = useState('');

  const handleSubscribe = async () => {
    if (!email) return;
    setSubLoading(true);
    setSubError('');
    try {
      await fetch(SHEET_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formType: 'newsletter',
          email: email,
        }),
      });
      setSubscribed(true);
    } catch (err) {
      setSubError('Something went wrong. Please try again.');
    } finally {
      setSubLoading(false);
    }
  };

  const filtered = POSTS.filter(p => {
    const matchCat = active === 'All Stories' || p.category === active;
    const matchSearch =
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const featured = filtered.find(p => p.featured);
  const rest = filtered.filter(p => !p.featured);

  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>

      {/* ── Hero masthead ── */}
      <section style={{ background: '#0d1b2a', padding: '72px 0 56px', borderBottom: '1px solid #1e3248' }}>
        <div className="page-container">
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 40, flexWrap: 'wrap' }}>
            <div>
              <p style={{ color: '#00b4d8', fontWeight: 700, fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 16 }}>
                The FreshClean Journal
              </p>
              <h1 style={{ fontSize: 64, fontWeight: 800, color: 'white', lineHeight: 1.05, marginBottom: 0 }}>
                Stories &<br /><span style={{ color: '#00b4d8' }}>Insights</span>
              </h1>
            </div>
            <div style={{ maxWidth: 380 }}>
              <p style={{ color: '#8ab4cc', fontSize: 15, lineHeight: 1.8, marginBottom: 24 }}>
                Expert guides on eco-friendly living, clinical cleaning standards, and the Sydney lifestyle. Published for people who care about their space.
              </p>
              <input
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search articles..."
                style={{
                  width: '100%', padding: '13px 18px',
                  borderRadius: 8, border: '1.5px solid #2a3f55',
                  background: '#162535', color: 'white',
                  fontSize: 14, outline: 'none', boxSizing: 'border-box',
                  fontFamily: 'inherit',
                }}
              />
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginTop: 48 }}>
            <div style={{ flex: 1, height: 1, background: '#1e3248' }} />
            <span style={{ color: '#4a6a7a', fontSize: 12, fontWeight: 600, letterSpacing: 1.5, textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
              {filtered.length} Article{filtered.length !== 1 ? 's' : ''}
            </span>
            <div style={{ flex: 1, height: 1, background: '#1e3248' }} />
          </div>
        </div>
      </section>

      {/* ── Category tabs ── */}
      <section style={{ background: 'white', borderBottom: '1px solid #e2ecf0' }}>
        <div className="page-container">
          <div style={{ display: 'flex', gap: 0, overflowX: 'auto' }}>
            {CATEGORIES.map(c => (
              <button key={c} onClick={() => setActive(c)} style={{
                padding: '18px 24px', background: 'none', border: 'none',
                borderBottom: active === c ? '3px solid #00b4d8' : '3px solid transparent',
                fontWeight: active === c ? 700 : 500, fontSize: 13.5,
                color: active === c ? '#0d1b2a' : '#6b7c8d',
                cursor: 'pointer', whiteSpace: 'nowrap',
                transition: 'all 0.2s', marginBottom: '-1px', fontFamily: 'inherit',
              }}>{c}</button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Articles ── */}
      <section style={{ padding: '60px 0 80px', background: '#f7fbfd' }}>
        <div className="page-container">

          {/* Featured */}
          {featured && (
            <div style={{ marginBottom: 52 }}>
              <div style={{
                background: 'white', borderRadius: 20, overflow: 'hidden',
                border: '1px solid #e2ecf0', boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
                display: 'grid', gridTemplateColumns: '1fr 1fr',
              }}>
                <div style={{
                  background: `linear-gradient(150deg, ${featured.accent} 0%, #0d1b2a 100%)`,
                  padding: '56px 48px', display: 'flex', flexDirection: 'column',
                  justifyContent: 'space-between', minHeight: 340,
                  position: 'relative', overflow: 'hidden',
                }}>
                  <div style={{
                    position: 'absolute', top: -20, right: -20,
                    fontSize: 200, fontWeight: 900, color: 'rgba(255,255,255,0.04)',
                    lineHeight: 1, userSelect: 'none', pointerEvents: 'none', letterSpacing: -8,
                  }}>01</div>
                  <div>
                    <div style={{
                      display: 'inline-block', background: 'rgba(255,255,255,0.15)',
                      color: 'white', fontSize: 10, fontWeight: 700,
                      letterSpacing: 2, padding: '5px 12px', borderRadius: 4,
                      textTransform: 'uppercase', marginBottom: 24,
                    }}>Featured Story</div>
                    <h2 style={{ fontSize: 30, fontWeight: 800, color: 'white', lineHeight: 1.25 }}>{featured.title}</h2>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                    <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)' }}>{featured.date}</span>
                    <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'rgba(255,255,255,0.3)' }} />
                    <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)' }}>{featured.readTime}</span>
                  </div>
                </div>
                <div style={{ padding: '48px 44px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{
                      display: 'inline-block',
                      background: categoryColors[featured.category]?.bg || '#e0f7fb',
                      color: categoryColors[featured.category]?.text || '#007fa3',
                      fontSize: 11, fontWeight: 700, letterSpacing: 1,
                      padding: '4px 12px', borderRadius: 4,
                      textTransform: 'uppercase', marginBottom: 22,
                    }}>{featured.category}</div>
                    <p style={{ fontSize: 16, color: '#4a5568', lineHeight: 1.85, marginBottom: 32 }}>{featured.excerpt}</p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Link to={`/blog/${featured.id}`}>
                      <button style={{
                        background: '#0d1b2a', color: 'white', border: 'none',
                        borderRadius: 8, padding: '12px 28px', fontWeight: 700,
                        fontSize: 14, cursor: 'pointer', fontFamily: 'inherit', transition: 'background 0.2s',
                      }}
                        onMouseEnter={e => e.currentTarget.style.background = '#00b4d8'}
                        onMouseLeave={e => e.currentTarget.style.background = '#0d1b2a'}
                      >Read Article</button>
                    </Link>
                    <span style={{ fontSize: 12, color: '#aab4bc', fontStyle: 'italic' }}>FreshClean Editorial</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28 }}>
            {rest.map((post, idx) => (
              <article key={post.id} style={{
                background: 'white', borderRadius: 16, border: '1px solid #e2ecf0',
                overflow: 'hidden', display: 'flex', flexDirection: 'column',
                transition: 'box-shadow 0.25s, transform 0.25s', cursor: 'pointer',
              }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.1)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'none'; }}
              >
                <div style={{
                  background: `linear-gradient(135deg, ${post.accent}, #0d1b2a)`,
                  padding: '28px 28px 24px', position: 'relative', overflow: 'hidden',
                }}>
                  <div style={{
                    position: 'absolute', bottom: -16, right: 16,
                    fontSize: 96, fontWeight: 900, color: 'rgba(255,255,255,0.07)',
                    lineHeight: 1, userSelect: 'none',
                  }}>{String(idx + 2).padStart(2, '0')}</div>
                  <div style={{
                    display: 'inline-block', background: 'rgba(255,255,255,0.15)',
                    color: 'white', fontSize: 10, fontWeight: 700,
                    letterSpacing: 1.5, padding: '4px 10px', borderRadius: 4, textTransform: 'uppercase',
                  }}>{post.category}</div>
                </div>
                <div style={{ padding: '24px 28px 28px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
                    <span style={{ fontSize: 11.5, color: '#8a9aaa' }}>{post.date}</span>
                    <span style={{ width: 3, height: 3, borderRadius: '50%', background: '#d0dde4' }} />
                    <span style={{ fontSize: 11.5, color: '#8a9aaa' }}>{post.readTime}</span>
                  </div>
                  <h3 style={{ fontSize: 17, fontWeight: 700, color: '#0d1b2a', lineHeight: 1.35, marginBottom: 12 }}>{post.title}</h3>
                  <p style={{ fontSize: 13.5, color: '#6b7c8d', lineHeight: 1.75, marginBottom: 24, flex: 1 }}>{post.excerpt}</p>
                  <Link to={`/blog/${post.id}`}>
                    <span style={{ fontSize: 13, fontWeight: 700, color: '#00b4d8', paddingBottom: 2, borderBottom: '2px solid transparent', transition: 'border-color 0.2s' }}
                      onMouseEnter={e => e.currentTarget.style.borderColor = '#00b4d8'}
                      onMouseLeave={e => e.currentTarget.style.borderColor = 'transparent'}
                    >Read Article →</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {filtered.length === 0 && (
            <div style={{ textAlign: 'center', padding: '80px 0', color: '#8a9aaa', fontSize: 16 }}>
              <div style={{ fontSize: 40, marginBottom: 16, opacity: 0.3 }}>—</div>
              No articles found. Try a different search or category.
            </div>
          )}
        </div>
      </section>

      {/* ── Newsletter ── */}
      <section style={{ background: '#0d1b2a', padding: '80px 0' }}>
        <div className="page-container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
            <div>
              <p style={{ color: '#00b4d8', fontWeight: 700, fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 16 }}>Stay Informed</p>
              <h2 style={{ fontSize: 44, fontWeight: 800, color: 'white', lineHeight: 1.1, marginBottom: 16 }}>
                The Sanctuary<br /><span style={{ color: '#00b4d8' }}>Letter</span>
              </h2>
              <p style={{ color: '#8ab4cc', fontSize: 15, lineHeight: 1.8 }}>
                Monthly cleaning guides, eco-friendly living tips, and exclusive offers — delivered to your inbox.
              </p>
            </div>
            <div>
              {subscribed ? (
                <div style={{ background: '#162535', borderRadius: 12, padding: '32px', textAlign: 'center', border: '1px solid #2a3f55' }}>
                  <div style={{ fontSize: 28, fontWeight: 800, color: '#00b4d8', marginBottom: 8 }}>You're in.</div>
                  <p style={{ color: '#8ab4cc', fontSize: 14 }}>Welcome to the Sanctuary Letter. Check your inbox for a confirmation.</p>
                </div>
              ) : (
                <div style={{ background: '#162535', borderRadius: 12, padding: '32px', border: '1px solid #2a3f55' }}>
                  <p style={{ color: '#8ab4cc', fontSize: 13, marginBottom: 20 }}>Join 3,200+ Sydney homeowners already subscribed.</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                    <input
                      value={email} onChange={e => setEmail(e.target.value)}
                      type="email" placeholder="Your email address"
                      style={{
                        padding: '13px 18px', borderRadius: 8,
                        border: '1.5px solid #2a3f55', background: '#0d1b2a',
                        color: 'white', fontSize: 14, outline: 'none', fontFamily: 'inherit',
                      }}
                    />
                    <button onClick={handleSubscribe} className="btn-primary"
                      style={{ padding: '13px', fontSize: 14, fontWeight: 700, opacity: subLoading ? 0.7 : 1 }}
                      disabled={subLoading}>
                      {subLoading ? 'Subscribing...' : 'Subscribe to the Letter'}
                    </button>
                    {subError && <p style={{ color: '#cc0000', fontSize: 12, marginTop: 8 }}>{subError}</p>}
                  </div>
                  <p style={{ color: '#4a6a7a', fontSize: 11, marginTop: 12 }}>No spam. Unsubscribe anytime.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
