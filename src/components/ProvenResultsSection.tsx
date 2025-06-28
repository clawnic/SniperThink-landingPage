import "./ProvenResultsSection.css";

const ProvenResultsSection = () => (
  <section className="proven-section">
    <h2 className="proven-heading">Proven Results That Matter</h2>
    <p className="proven-subheading">Real metrics from real businesses using SniperThink</p>
    <div className="proven-stats">
      <div className="proven-card">
        <span className="proven-value">300%</span>
        <span className="proven-label">Productivity Increase</span>
      </div>
      <div className="proven-card">
        <span className="proven-value">85%</span>
        <span className="proven-label">Manual Effort Reduction</span>
      </div>
      <div className="proven-card">
        <span className="proven-value">95%</span>
        <span className="proven-label">Customer Satisfaction</span>
      </div>
      <div className="proven-card">
        <span className="proven-value">$2.4M</span>
        <span className="proven-label">Revenue Generated</span>
      </div>
    </div>
  </section>
);

export default ProvenResultsSection;
