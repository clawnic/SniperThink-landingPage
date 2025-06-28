// src/components/CompareAgentsSection.tsx
import React from "react";
import "./CompareAgentsSection.css";

const features = [
  {
    name: "Natural Language Q&A",
    chat: true,
    call: true
  },
  {
    name: "Text-based conversation",
    chat: true,
    call: false
  },
  {
    name: "Voice-based interactions",
    chat: false,
    call: true
  },
  {
    name: "Supports Team + Customer",
    chat: true,
    call: true
  },
  {
    name: "Alerts & automations",
    chat: true,
    call: true
  }
];

const CompareAgentsSection = () => (
  <section className="compare-section" id="compare-agents">
    <h2 className="compare-title">Chat or Call — You Choose How Your AI Works</h2>
    <div className="compare-table-wrapper">
      <table className="compare-table">
        <thead>
          <tr>
            <th>Feature</th>
            <th>Chat Agent</th>
            <th>Calling Agent</th>
          </tr>
        </thead>
        <tbody>
          {features.map(f => (
            <tr key={f.name}>
              <td>{f.name}</td>
              <td className={f.chat ? "check" : "cross"}>
                {f.chat ? "✅" : "❌"}
              </td>
              <td className={f.call ? "check" : "cross"}>
                {f.call ? "✅" : "❌"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <div className="compare-cta-group">
      <button className="compare-cta chat">Get Chat Agent</button>
      <button className="compare-cta call">Get Calling Agent</button>
    </div>
  </section>
);

export default CompareAgentsSection;
