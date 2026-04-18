import { useState } from 'react';
import { Link } from 'react-router-dom';

const SHEET_URL = 'https://script.google.com/macros/s/AKfycbzFbt3IGDnYUocfJUUph223Q8GKiR1LVfgI1JxuqzgZDyXKJ9pUQUodpuFhNjvKXN7rqg/exec';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async () => {
    if (!email) return;
    setLoading(true);
    try {
      await fetch(SHEET_URL, {
        method: 'POST', mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ formType: 'newsletter', email }),
      });
      setSubscribed(true);
    } catch (e) { console.error(e); }
    finally { setLoading(false); }
  };

  return (
    <footer style={{ background: "#0a1628", color: "#94a3b8" }}>
      {/* Top strip */}
      <div
        style={{ borderBottom: "1px solid #1e3248", padding: "64px 0 56px" }}
      >
        <div className="page-container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "2fr 1fr 1fr 1.8fr",
              gap: 56,
            }}
          >
            {/* Brand */}
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  marginBottom: 18,
                }}
              >
                <img
                  src="/images/logo.jpg"
                  alt="FreshClean Logo"
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 10,
                    objectFit: "cover",
                  }}
                />
                  <span class="nav-logo-text">FreshClean Sydney</span>
              </div>
              <p
                style={{
                  fontSize: 13.5,
                  lineHeight: 1.75,
                  color: "#64748b",
                  marginBottom: 28,
                  maxWidth: 260,
                }}
              >
                Clinical-grade cleaning for Sydney's homes, offices, and
                hospitality venues. Trusted by 5,000+ clients.
              </p>
              <div style={{ display: "flex", gap: 12 }}>
                {["Facebook", "Instagram", "LinkedIn"].map((s) => (
                  <a
                    key={s}
                    href="#"
                    style={{
                      fontSize: 12,
                      fontWeight: 600,
                      color: "#64748b",
                      padding: "6px 14px",
                      borderRadius: 100,
                      border: "1px solid #1e3248",
                      transition: "all 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "white";
                      e.currentTarget.style.borderColor = "#0ea5c9";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "#64748b";
                      e.currentTarget.style.borderColor = "#1e3248";
                    }}
                  >
                    {s}
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <div
                style={{
                  color: "white",
                  fontWeight: 700,
                  fontSize: 13,
                  marginBottom: 20,
                  letterSpacing: 0.3,
                }}
              >
                Services
              </div>
              {[
                "End of Lease",
                "Home Cleaning",
                "Office Cleaning",
                "Carpet Cleaning",
                "Deep Cleaning",
                "Window Cleaning",
              ].map((s) => (
                <div key={s} style={{ marginBottom: 12 }}>
                  <Link
                    to="/services"
                    style={{
                      fontSize: 13,
                      color: "#64748b",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => (e.target.style.color = "#0ea5c9")}
                    onMouseLeave={(e) => (e.target.style.color = "#64748b")}
                  >
                    {s}
                  </Link>
                </div>
              ))}
            </div>

            {/* Company */}
            <div>
              <div
                style={{
                  color: "white",
                  fontWeight: 700,
                  fontSize: 13,
                  marginBottom: 20,
                  letterSpacing: 0.3,
                }}
              >
                Company
              </div>
              {[
                { label: "About Us", path: "/" },
                { label: "Pricing", path: "/pricing" },
                { label: "Blog", path: "/blog" },
                { label: "Contact", path: "/contact" },
                { label: "Privacy Policy", path: "/" },
                { label: "Terms of Service", path: "/" },
              ].map((l) => (
                <div key={l.label} style={{ marginBottom: 12 }}>
                  <Link
                    to={l.path}
                    style={{
                      fontSize: 13,
                      color: "#64748b",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => (e.target.style.color = "#0ea5c9")}
                    onMouseLeave={(e) => (e.target.style.color = "#64748b")}
                  >
                    {l.label}
                  </Link>
                </div>
              ))}
            </div>

            {/* Newsletter */}
            <div>
              <div
                style={{
                  color: "white",
                  fontWeight: 700,
                  fontSize: 13,
                  marginBottom: 12,
                  letterSpacing: 0.3,
                }}
              >
                Stay in the loop
              </div>
              <p
                style={{
                  fontSize: 13,
                  color: "#64748b",
                  lineHeight: 1.7,
                  marginBottom: 20,
                }}
              >
                Monthly tips, offers, and cleaning guides — straight to your
                inbox.
              </p>
              {subscribed ? (
                <div
                  style={{
                    background: "#112240",
                    borderRadius: 10,
                    padding: "16px 20px",
                    color: "#0ea5c9",
                    fontWeight: 600,
                    fontSize: 14,
                    textAlign: "center",
                    border: "1px solid #1e3248",
                  }}
                >
                  You're subscribed!
                </div>
              ) : (
                <div
                  style={{ display: "flex", flexDirection: "column", gap: 10 }}
                >
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="your@email.com"
                    style={{
                      padding: "11px 16px",
                      borderRadius: 10,
                      border: "1px solid #1e3248",
                      background: "#112240",
                      color: "white",
                      fontSize: 13,
                      outline: "none",
                      transition: "border-color 0.2s",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "#0ea5c9")}
                    onBlur={(e) => (e.target.style.borderColor = "#1e3248")}
                  />
                  <button
                    onClick={handleSubscribe}
                    disabled={loading}
                    style={{
                      padding: "11px",
                      borderRadius: 10,
                      background: loading ? "#1e3248" : "#0ea5c9",
                      color: "white",
                      border: "none",
                      fontWeight: 600,
                      fontSize: 13,
                      cursor: loading ? "not-allowed" : "pointer",
                      transition: "background 0.2s",
                    }}
                  >
                    {loading ? "Subscribing..." : "Subscribe"}
                  </button>
                </div>
              )}
              <div
                style={{
                  marginTop: 24,
                  paddingTop: 20,
                  borderTop: "1px solid #1e3248",
                }}
              >
                <div
                  style={{ fontSize: 12, color: "#3d5166", marginBottom: 4 }}
                >
                  Call us directly
                </div>
                <a
                  href="tel:0493597634"
                  style={{
                    color: "white",
                    fontWeight: 700,
                    fontSize: 18,
                    letterSpacing: -0.5,
                  }}
                >
                  0493 597 634
                </a>
                <div style={{ fontSize: 12, color: "#3d5166", marginTop: 4 }}>
                  freshcleansyd@gmail.com
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ padding: "20px 0" }}>
        <div
          className="page-container"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span style={{ fontSize: 12, color: "#3d5166" }}>
            © 2024 FreshClean Sydney. All rights reserved.
          </span>
          <div style={{ display: "flex", gap: 24 }}>
            {["ABN: 12 345 678 901", "Sydney, NSW 2000"].map((t) => (
              <span key={t} style={{ fontSize: 12, color: "#3d5166" }}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
