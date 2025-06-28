import React, { useState } from "react";
import "./WhatAICanDoSection.css";

const capabilities = [
  {
    key: "questions",
    title: "Answer Questions",
    description: "Answer team & customer questions instantly",
    icon: "❓",
    gradient: "linear-gradient(135deg, #1A6262 0%, #2A7272 100%)"
  },
  {
    key: "reports", 
    title: "Auto-Generate Reports",
    description: "Auto-generate reports and analytics",
    icon: "📊",
    gradient: "linear-gradient(135deg, #E1A940 0%, #F1B950 100%)"
  },
  {
    key: "alerts",
    title: "Business Alerts",
    description: "Alert on business metrics and KPIs", 
    icon: "🚨",
    gradient: "linear-gradient(135deg, #91C499 0%, #A1D4A9 100%)"
  },
  {
    key: "followups",
    title: "Automate Follow-ups",
    description: "Automate follow-ups and reminders",
    icon: "🔄",
    gradient: "linear-gradient(135deg, #FF6700 0%, #FF7710 100%)"
  },
  {
    key: "workflows", 
    title: "Trigger Workflows",
    description: "Trigger WhatsApp/CRM workflows",
    icon: "⚡",
    gradient: "linear-gradient(135deg, #1A6262 0%, #91C499 100%)"
  },
  {
    key: "multilingual",
    title: "Multilingual Support", 
    description: "Work in English, Hindi, and regional languages",
    icon: "🌐",
    gradient: "linear-gradient(135deg, #E1A940 0%, #91C499 100%)"
  }
];

const WhatAICanDoSection = () => {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  return (
    <section className="whatai-section isometric-layout" id="whatai">
      <h2 className="whatai-title">Let Your AI Agent Handle the Heavy Lifting</h2>
      <p className="whatai-subtitle">
        From instant support to intelligent alerts — here's what your SniperThink AI Agent can do.
      </p>
      <div className="isometric-grid">
        {capabilities.map((item, index) => (
          <div
            key={item.key}
            className={`isometric-card ${activeCard === item.key ? 'active' : ''}`}
            style={{
              "--card-gradient": item.gradient,
              "--card-index": index
            } as React.CSSProperties}
            onMouseEnter={() => setActiveCard(item.key)}
            onMouseLeave={() => setActiveCard(null)}
          >
            <div className="card-face card-front">
              <div className="isometric-icon">{item.icon}</div>
              <h3 className="isometric-title">{item.title}</h3>
              <p className="isometric-desc">{item.description}</p>
            </div>
            <div className="card-face card-top"></div>
            <div className="card-face card-right"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatAICanDoSection;
