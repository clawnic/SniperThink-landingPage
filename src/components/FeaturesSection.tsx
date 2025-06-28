import  { useState, useRef } from "react";
import "./FeaturesSection.css";

const gridFeatures = [
  {
    icon: "✅",
    title: "Trained on internal workflows & tools",
    subtitle: "Understands your business processes"
  },
  {
    icon: "✅",
    title: "Works for internal ops/customers",
    subtitle: "Dual-purpose AI for all interactions"
  },
  {
    icon: "✅",
    title: "Integrated with CRMs, Tally, Dashboards",
    subtitle: "Connects with your existing systems"
  },
  {
    icon: "✅",
    title: "Role-based responses + triggers",
    subtitle: "Smart automation based on context"
  },
  {
    icon: "✅",
    title: "Secure, multilingual, constantly improving",
    subtitle: "Enterprise-grade with global reach"
  },
  {
    icon: "✅",
    title: "24/7 intelligent assistance",
    subtitle: "Always-on support that never sleeps"
  }
];

const tabFeatures = [
  {
    key: "smart",
    icon: "🧠",
    heading: "Smart Learning",
    subheading: "Adapts to your business logic",
    cta: "See in Action"
  },
  {
    key: "action",
    icon: "⚡",
    heading: "Instant Action",
    subheading: "Triggers workflows automatically",
    cta: "See in Action"
  },
  {
    key: "secure",
    icon: "🛡️",
    heading: "Secure & Private",
    subheading: "Enterprise-grade security",
    cta: "See in Action"
  },
  {
    key: "global",
    icon: "🌐",
    heading: "Global Ready",
    subheading: "Multilingual support",
    cta: "See in Action"
  }
];

const WhyChooseSection = () => {
  const [hovered, setHovered] = useState<string | null>(null);
  const [flipped, setFlipped] = useState<{ [key: string]: boolean }>({});
  // Touch state for swipe
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (key: string) => () => {
    if (touchStartX.current !== null && touchEndX.current !== null) {
      const dx = touchEndX.current - touchStartX.current;
      if (Math.abs(dx) > 40) {
        setFlipped(prev => ({ ...prev, [key]: !prev[key] }));
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section className="whychoose-section" id="whychoose">
      <h2 className="whychoose-title">
        Why Choose <span className="brand-gradient">SniperThink</span>?
      </h2>
      <p className="whychoose-subtitle">
        Our AI agents are trained specifically for your business — not just on language, but on your tools, SOPs, and goals. This means better responses, more action, and smarter decision-making.
      </p>
      {/* Grid Features */}
      <div className="whychoose-grid">
        {gridFeatures.map((feature, idx) => (
          <div className="whychoose-grid-card" key={idx}>
            <span className="whychoose-grid-icon">{feature.icon}</span>
            <div>
              <div className="whychoose-grid-title">{feature.title}</div>
              <div className="whychoose-grid-subtitle">{feature.subtitle}</div>
            </div>
          </div>
        ))}
      </div>
      {/* Tabbed/Flip Cue Cards */}
      <div className="whychoose-tabs">
        {tabFeatures.map(tab => (
          <div
            key={tab.key}
            className={`cue-card${(hovered === tab.key || flipped[tab.key]) ? " flipped" : ""}`}
            onMouseEnter={() => setHovered(tab.key)}
            onMouseLeave={() => setHovered(null)}
            tabIndex={0}
            role="button"
            aria-pressed={hovered === tab.key || flipped[tab.key]}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd(tab.key)}
          >
            <div className="cue-card-inner">
              {/* Front Side */}
              <div className="cue-card-front">
                <span className="cue-card-icon">{tab.icon}</span>
                <div className="cue-card-heading">{tab.heading}</div>
                <button className="cue-card-cta">{tab.cta}</button>
              </div>
              {/* Back Side */}
              <div className="cue-card-back">
                <span className="cue-card-icon">{tab.icon}</span>
                <div className="cue-card-heading">{tab.heading}</div>
                <div className="cue-card-subheading">{tab.subheading}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseSection;
