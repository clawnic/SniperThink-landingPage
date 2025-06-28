import "./Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <span className="footer-logo">🤖</span>
          <span className="footer-title">SniperThink</span>
        </div>
        <nav className="footer-links">
          <a href="#demo" className="footer-link">Chat Agent</a>
          <a href="#demo" className="footer-link">Call Agent</a>
          <a href="#faq" className="footer-link">FAQ</a>
          <a href="#contact" className="footer-link">Contact</a>
        </nav>
        <div className="footer-trust">
          <span className="trust-icon" title="Secure">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <circle cx="11" cy="11" r="11" fill="#1A6262"/>
              <path d="M7 11.5l3 3 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Secure
          </span>
          <span className="trust-icon" title="Encrypted">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <circle cx="11" cy="11" r="11" fill="#1A6262"/>
              <path d="M7 12V9a4 4 0 018 0v3" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
              <rect x="6" y="12" width="10" height="5" rx="2" stroke="#fff" strokeWidth="2"/>
            </svg>
            Encrypted
          </span>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} SniperThink. All rights reserved.</span>
      </div>
    </footer>
  );
}
