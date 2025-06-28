// src/components/HeroSection.tsx
import PhoneDemo from "./PhoneDemo";
import "./HeroSection.css";

interface HeroSectionProps {
  mode: "chat" | "calling";
  setMode: (mode: "chat" | "calling") => void;
}

const HeroSection = ({ mode, setMode }: HeroSectionProps) => (
  <section className="hero">
    <div className="hero-content">
      <h1 className="hero-title">
        Smarter Conversations.<br />Faster Decisions.
      </h1>
      <p className="hero-subtitle">
        Unlock the power of AI agents for chat and calling. Automate, analyze, and accelerate your business with SniperThink.
      </p>
      {/* Toggle buttons below the paragraph */}
      <div className="hero-toggle">
        <button
          className={mode === "chat" ? "active" : ""}
          onClick={() => setMode("chat")}
        ><span className="toggle-icon">💬</span>
          Chat Agent
        </button>
        <button
          className={mode === "calling" ? "active" : ""}
          onClick={() => setMode("calling")}
        ><span className="toggle-icon">📞</span>
          Calling Agent
        </button>
      </div>
    </div>
    <div className="hero-visual">
      <PhoneDemo mode={mode} />
    </div>
  </section>
);

export default HeroSection;
