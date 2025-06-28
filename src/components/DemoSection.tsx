import LaptopChatDemo from "./LaptopChatDemo";
import LaptopCallingDemo from "./LaptopCallingDemo";
import "./DemoSection.css";

interface DemoSectionProps {
  mode: "chat" | "calling";
}

const DemoSection = ({ mode }: DemoSectionProps) => (
  <section className="demo-section" id="demo">
    <div className="laptop-frame">
      <div className="laptop-header">
        <div className="laptop-logo">
          <span className="logo-circle">
            <svg width="22" height="22" viewBox="0 0 22 22">
              <circle cx="11" cy="11" r="11" fill="#1A6262" />
              <text x="11" y="16" textAnchor="middle" fontSize="16" fill="#fff">
                {mode === "chat" ? "💬" : "📞"}
              </text>
            </svg>
          </span>
          <span className="laptop-title">
            SniperThink {mode === "chat" ? "Chat AI" : "Call AI"}
          </span>
        </div>
        <span className="laptop-status">
          <span className="status-dot"></span>
          Online & Ready
        </span>
        <span className="laptop-demo-badge">
          {mode === "chat" ? "Live Demo" : "Voice AI"}
        </span>
      </div>
      <div className="laptop-content">
        {mode === "chat" ? <LaptopChatDemo /> : <LaptopCallingDemo />}
      </div>
    </div>
  </section>
);

export default DemoSection;
