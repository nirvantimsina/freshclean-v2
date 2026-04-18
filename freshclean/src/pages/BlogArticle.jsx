import { Link, useParams } from 'react-router-dom';

const ARTICLES = {
  'clinical-sanctuary': {
    category: 'Cleaning Tips',
    date: 'October 24, 2024',
    readTime: '8 min read',
    title: 'The Clinical Sanctuary: Why Hospital-Grade Clean Matters for Your Home',
    author: 'FreshClean Experts',
    emoji: '🧽',
    color: '#1a6b7c',
    tags: ['Health', 'Hygiene', 'Sydney', 'Luxury'],
    content: [
      {
        type: 'intro',
        text: 'The concept of a "clean home" has evolved. In an era where health awareness is at an all-time high, the standard sweep-and-mop is no longer sufficient. At FreshClean Sydney, we advocate for the transition from visual cleanliness to biological safety — a philosophy we call The Clinical Sanctuary.'
      },
      {
        type: 'heading',
        text: 'Beyond the Surface: The Science of Sanitization'
      },
      {
        type: 'text',
        text: 'Hospital-grade cleaning isn\'t just about removing dust; it\'s about disrupting the microscopic ecosystems that inhabit our shared spaces. Traditional household cleaners often merely redistribute bacteria. Our protocol utilises EPA-approved, medical-grade disinfectants that achieve a 99.99% microbial reduction without leaving toxic residues.'
      },
      {
        type: 'callout',
        text: 'Did You Know? The average kitchen sponge can harbour more bacteria than a toilet seat. Clinical cleaning focuses on these "High-Touch Points" — light switches, handles, and remote controls — that are often overlooked in standard cleaning routines.'
      },
      {
        type: 'heading',
        text: 'Eco-Friendly Precision'
      },
      {
        type: 'text',
        text: 'A common misconception is that "clinical" means "harsh chemicals." Our Sanctuary approach pairs industrial precision with ecological responsibility. By using micro-mist technology and HEPA-filtration vacuum systems, we purify the air and surfaces simultaneously, reducing allergens like pollen, pet dander, and dust mites.'
      },
      {
        type: 'checklist',
        items: [
          'HEPA-Filtration: Capturing particles as small as 0.3 microns.',
          'Non-Toxic Agents: Safe for infants, pets, and respiratory-sensitive individuals.',
          'Colour-Coded Protocol: Preventing cross-contamination between zones.'
        ]
      },
      {
        type: 'cta',
        title: 'Experience the Sanctuary Difference',
        text: 'Schedule a clinical consultation for your home and discover the peace of mind that comes with medical-grade hygiene.',
        button: 'Book Your Sanctuary'
      },
      {
        type: 'heading',
        text: 'The Mental Health Connection'
      },
      {
        type: 'text',
        text: 'Clutter and invisible grime create a "cognitive load." When your environment is truly clean — sterile yet inviting — your brain experiences a measurable drop in cortisol levels. This is the ultimate goal of hospital-grade cleaning: to turn your residence into a sanctuary where recovery and relaxation are physically supported by your surroundings.'
      }
    ]
  },
  'coastal-walks': {
    category: 'Sydney Lifestyle',
    date: 'March 8, 2024',
    readTime: '3 min read',
    title: 'The Best Coastal Walks for a Post-Cleaning Refresh',
    author: 'FreshClean Experts',
    emoji: '🌊',
    color: '#0d3d4a',
    tags: ['Sydney', 'Lifestyle', 'Wellness'],
    content: [
      { type: 'intro', text: 'Once your sanctuary is sparkling clean, there\'s no better reward than a breath of fresh Sydney coastal air. Here are our favourite walks to celebrate a freshly cleaned home.' },
      { type: 'heading', text: 'Bondi to Coogee Coastal Walk' },
      { type: 'text', text: 'The iconic 6km cliff-top trail takes you past stunning beaches, rock pools, and ocean baths. Best done in the morning after a weekend deep clean.' },
      { type: 'heading', text: 'Manly to Spit Bridge' },
      { type: 'text', text: 'A 10km bushwalk through Sydney Harbour National Park. The scent of eucalyptus and ocean air is the perfect complement to a clinically clean home.' },
      { type: 'heading', text: 'Wattamolla to Curracurrang' },
      { type: 'text', text: 'Royal National Park\'s hidden gem offers a peaceful 5km return walk through native bush to stunning sea cliffs and lagoons.' }
    ]
  },
};

const RECOMMENDED = [
  { id: 'bathroom-tips', emoji: '🚿', color: '#1a3a5a', tag: 'Tips', title: '5 Ways to Maintain a Hotel-Fresh Bathroom Every Day' },
  { id: 'hepa-filtration', emoji: '💨', color: '#0d2a35', tag: 'Air Quality', title: 'Silent Invaders: The Importance of HEPA Filtration in Modern Homes' },
  { id: 'define-clinical', emoji: '🏥', color: '#2a1a4a', tag: 'Process', title: 'The 48-Point Checklist: What Clinical Cleaning Actually Entails' },
];

export default function BlogArticle() {
  const { id } = useParams();
  const article = ARTICLES[id] || ARTICLES['clinical-sanctuary'];

  return (
    <div>
      {/* Breadcrumb */}
      <div style={{ background: 'white', borderBottom: '1px solid #e2ecf0', padding: '12px 0' }}>
        <div className="page-container" style={{ display: 'flex', gap: 8, fontSize: 13, color: '#8a9aaa' }}>
          <Link to="/" style={{ color: '#8a9aaa' }}>Home</Link>
          <span>/</span>
          <Link to="/blog" style={{ color: '#8a9aaa' }}>Blog</Link>
          <span>/</span>
          <span style={{ color: '#0d1b2a', fontWeight: 600 }}>{article.title.slice(0, 40)}...</span>
        </div>
      </div>

      {/* Article Header */}
      <section style={{ padding: '60px 0 40px', background: 'white' }}>
        <div className="page-container" style={{ maxWidth: 900 }}>
          <h1 style={{ fontSize: 44, fontWeight: 800, lineHeight: 1.2, color: '#0d1b2a', marginBottom: 20 }}>
            {article.title}
          </h1>
          <div style={{ display: 'flex', gap: 20, alignItems: 'center', marginBottom: 32 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{
                width: 34, height: 34, borderRadius: '50%',
                background: 'linear-gradient(135deg, #00b4d8, #0077b6)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'white', fontSize: 14
              }}>✓</div>
              <span style={{ fontWeight: 600, fontSize: 14, color: '#0d1b2a' }}>{article.author}</span>
            </div>
            <span style={{ color: '#d0d8e0' }}>|</span>
            <span style={{ fontSize: 13.5, color: '#8a9aaa' }}>📅 {article.date}</span>
            <span style={{ color: '#d0d8e0' }}>|</span>
            <span style={{ fontSize: 13.5, color: '#8a9aaa' }}>⏱ {article.readTime}</span>
          </div>

          {/* Hero Image */}
          <div style={{
            width: '100%', height: 360, borderRadius: 20,
            background: `linear-gradient(135deg, ${article.color}, #0d1b2a)`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 120, marginBottom: 40,
            boxShadow: '0 16px 48px rgba(0,0,0,0.15)'
          }}>{article.emoji}</div>
        </div>
      </section>

      {/* Article Body */}
      <section style={{ padding: '0 0 80px', background: 'white' }}>
        <div className="page-container" style={{ display: 'flex', gap: 48, maxWidth: 1100, alignItems: 'flex-start' }}>
          {/* Share sidebar */}
          <div style={{ flexShrink: 0, width: 48 }}>
            <div style={{ position: 'sticky', top: 90, display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'center' }}>
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1, color: '#8a9aaa', textTransform: 'uppercase', writingMode: 'vertical-rl', marginBottom: 8 }}>Share</span>
              {['📘', '🐦', '🔗'].map((icon, i) => (
                <div key={i} style={{
                  width: 36, height: 36, borderRadius: '50%',
                  background: '#f0faff', display: 'flex', alignItems: 'center',
                  justifyContent: 'center', cursor: 'pointer', fontSize: 16,
                  border: '1px solid #e2ecf0'
                }}>{icon}</div>
              ))}
            </div>
          </div>

          {/* Main content */}
          <div style={{ flex: 1, maxWidth: 680 }}>
            {article.content.map((block, i) => {
              if (block.type === 'intro') return (
                <p key={i} style={{
                  fontSize: 17, lineHeight: 1.85, color: '#3a4a5a',
                  marginBottom: 32, fontStyle: 'italic',
                  borderLeft: '3px solid #00b4d8', paddingLeft: 20
                }}>{block.text}</p>
              );
              if (block.type === 'heading') return (
                <h2 key={i} style={{ fontSize: 26, fontWeight: 800, color: '#0d1b2a', margin: '40px 0 16px', lineHeight: 1.3 }}>{block.text}</h2>
              );
              if (block.type === 'text') return (
                <p key={i} style={{ fontSize: 15.5, lineHeight: 1.9, color: '#4a5a6a', marginBottom: 24 }}>{block.text}</p>
              );
              if (block.type === 'callout') return (
                <div key={i} style={{
                  background: '#f0faff', border: '1px solid #c8e6ee',
                  borderRadius: 14, padding: '20px 24px', margin: '28px 0'
                }}>
                  <div style={{ fontWeight: 700, fontSize: 14, color: '#0077b6', marginBottom: 8 }}>💡 Did You Know?</div>
                  <p style={{ fontSize: 14.5, color: '#3a5a6a', lineHeight: 1.75 }}>{block.text}</p>
                </div>
              );
              if (block.type === 'checklist') return (
                <ul key={i} style={{ listStyle: 'none', margin: '24px 0', display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {block.items.map((item, j) => (
                    <li key={j} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', fontSize: 15, color: '#4a5a6a', lineHeight: 1.6 }}>
                      <span style={{ color: '#00b4d8', fontWeight: 700, fontSize: 16, flexShrink: 0 }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              );
              if (block.type === 'cta') return (
                <div key={i} style={{
                  border: '2px solid #00b4d8', borderRadius: 16, padding: '28px 28px',
                  margin: '36px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 24
                }}>
                  <div>
                    <div style={{ fontWeight: 800, fontSize: 18, color: '#0d1b2a', marginBottom: 8 }}>{block.title}</div>
                    <p style={{ fontSize: 14, color: '#6b7c8d', lineHeight: 1.6 }}>{block.text}</p>
                  </div>
                  <Link to="/quote" style={{ flexShrink: 0 }}>
                    <button className="btn-primary" style={{ whiteSpace: 'nowrap' }}>{block.button}</button>
                  </Link>
                </div>
              );
              return null;
            })}
          </div>

          {/* Right sidebar */}
          <div style={{ flexShrink: 0, width: 240 }}>
            <div style={{ position: 'sticky', top: 90 }}>
              {/* Tags */}
              <div style={{ background: '#f7fbfd', borderRadius: 14, padding: '20px', marginBottom: 20, border: '1px solid #e2ecf0' }}>
                <div style={{ fontWeight: 700, fontSize: 14, color: '#0d1b2a', marginBottom: 14 }}>Post Tags</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {article.tags.map(tag => (
                    <span key={tag} style={{
                      background: '#e0f7fb', color: '#007fa3',
                      fontSize: 11, fontWeight: 700, padding: '4px 12px',
                      borderRadius: 20, textTransform: 'uppercase', letterSpacing: 0.8
                    }}>{tag}</span>
                  ))}
                </div>
              </div>
              {/* Newsletter */}
              <div style={{
                background: 'linear-gradient(135deg, #0d1b2a, #1a3a55)',
                borderRadius: 14, padding: '22px', color: 'white'
              }}>
                <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 10 }}>Join Our Newsletter</div>
                <p style={{ fontSize: 12.5, color: '#8ab4cc', lineHeight: 1.6, marginBottom: 16 }}>
                  Get clinical cleaning tips delivered weekly.
                </p>
                <input placeholder="Email" style={{
                  width: '100%', padding: '9px 12px', borderRadius: 8,
                  border: 'none', background: '#1e3045', color: 'white',
                  fontSize: 13, outline: 'none', marginBottom: 10
                }} />
                <button className="btn-primary" style={{ width: '100%', padding: '10px', fontSize: 13 }}>Subscribe →</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recommended */}
      <section style={{ padding: '60px 0 80px', background: '#f7fbfd' }}>
        <div className="page-container">
          <h2 style={{ fontSize: 26, fontWeight: 800, color: '#0d1b2a', marginBottom: 8 }}>Recommended Reading</h2>
          <div style={{ width: 48, height: 3, background: '#00b4d8', borderRadius: 2, marginBottom: 28 }} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {RECOMMENDED.map(post => (
              <Link key={post.id} to={`/blog/${post.id}`} style={{ textDecoration: 'none' }}>
                <div style={{
                  background: 'white', borderRadius: 14, overflow: 'hidden',
                  border: '1px solid #e2ecf0', cursor: 'pointer',
                  transition: 'box-shadow 0.2s, transform 0.2s'
                }}
                  onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 8px 28px rgba(0,180,216,0.14)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'none'; }}
                >
                  <div style={{
                    height: 160, background: `linear-gradient(135deg, ${post.color}, #0d1b2a)`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 60
                  }}>{post.emoji}</div>
                  <div style={{ padding: '18px 18px 22px' }}>
                    <span className="tag tag-teal" style={{ marginBottom: 10, display: 'inline-block' }}>{post.tag}</span>
                    <div style={{ fontWeight: 700, fontSize: 15, color: '#0d1b2a', lineHeight: 1.4 }}>{post.title}</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
