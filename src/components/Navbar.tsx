import  { useState } from "react";
import "./Navbar.css";

const navLinks = [
  { label: "Demo", href: "#demo" },
  { label: "Why SniperThink", href: "#whychoose" },
  { label: "Who Is It For?", href: "#whoisitfor" },
  { label: "AI Capabilities", href: "#whatai" },
  { label: "Analytics", href: "#analytics-dashboard" },
  { label: "Contact", href: "#contact" }
];

export default function Navbar() {
  const [active, setActive] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  // Optionally, you can highlight the current section using scroll events
  // For now, we highlight on click

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <div className="navbar-brand">
          <span className="navbar-logo">🤖</span>
          <span className="navbar-title">SniperThink</span>
          <span className="navbar-live">LIVE</span>
        </div>
        <button
          className={`navbar-burger${menuOpen ? " open" : ""}`}
          aria-label="Toggle navigation menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
        <div className={`navbar-links${menuOpen ? " open" : ""}`}>
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className={`navbar-link${active === link.href ? " active" : ""}`}
              onClick={() => {
                setActive(link.href);
                setMenuOpen(false);
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
