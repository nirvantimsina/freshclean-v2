import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const links = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Pricing', path: '/pricing' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 200,
      background: 'rgba(255,255,255,0.96)',
      borderBottom: '1px solid #e8edf2',
      backdropFilter: 'blur(16px)',
      boxShadow: scrolled ? '0 2px 20px rgba(10,22,40,0.07)' : 'none',
      transition: 'box-shadow 0.3s',
    }}>
      <div className="page-container" style={{
        display: 'flex', alignItems: 'center',
        justifyContent: 'space-between', height: 68,
      }}>

        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{
            width: 36, height: 36, borderRadius: 10,
            background: 'linear-gradient(135deg, #0ea5c9, #0077b6)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: 'white', fontWeight: 800, fontSize: 12,
            letterSpacing: 0.5,
            boxShadow: '0 4px 12px rgba(14,165,201,0.3)',
          }}>FC</div>
          <div>
            <div style={{ fontWeight: 800, fontSize: 15, color: '#0a1628', fontFamily: 'var(--font-display)', letterSpacing: '-0.02em', lineHeight: 1 }}>FreshClean</div>
            <div style={{ fontSize: 10, color: '#94a3b8', fontWeight: 500, letterSpacing: 2, textTransform: 'uppercase' }}>Sydney</div>
          </div>
        </Link>

        {/* Nav links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          {links.map(l => {
            const active = location.pathname === l.path;
            return (
              <Link key={l.path} to={l.path} style={{
                fontSize: 14, fontWeight: active ? 600 : 400,
                color: active ? '#0a1628' : '#64748b',
                padding: '7px 16px', borderRadius: 100,
                background: active ? '#f1f7fc' : 'transparent',
                transition: 'all 0.18s',
              }}
                onMouseEnter={e => { e.currentTarget.style.color = '#0a1628'; e.currentTarget.style.background = '#f8fbff'; }}
                onMouseLeave={e => { e.currentTarget.style.color = active ? '#0a1628' : '#64748b'; e.currentTarget.style.background = active ? '#f1f7fc' : 'transparent'; }}
              >{l.label}</Link>
            );
          })}
        </div>

        {/* Right side */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <a href="tel:0493597634" style={{ fontSize: 13.5, fontWeight: 600, color: '#3d5166' }}>
            0493 597 634
          </a>
          <Link to="/quote">
            <button className="btn-primary" style={{ padding: '10px 22px', fontSize: 13 }}>Book Now</button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
