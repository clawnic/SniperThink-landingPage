/* src/components/AnalyticsDashboard.tsx */
import "./AnalyticsDashboard.css";

const kpis = [
  { label: "Active Conversations", value: "247", trend: "up" },
  { label: "Conversion Rate", value: "34.5 %", trend: "flat" },
  { label: "Response Time", value: "0.3 s", trend: "up" },
  { label: "Revenue", value: "$24.5 K", trend: "up" },
];

const leads = [
  { tier: "Hot Leads", count: 89, color: "#F66A6A" },
  { tier: "Warm Leads", count: 156, color: "#F5C04E" },
  { tier: "Cold Leads", count: 203, color: "#4E9FFF" },
];

const recent = [
  { initials: "SJ", name: "Sarah Johnson", channel: "Website • 2 m ago", urgency: "High" },
  { initials: "MC", name: "Mike Chen", channel: "LinkedIn • 5 m ago", urgency: "Medium" },
  { initials: "ED", name: "Emma Davis", channel: "Email • 8 m ago", urgency: "High" },
];

export default function AnalyticsDashboard() {
  return (
    <section className="analytics-wrapper" id="analytics-dashboard">
      <h2 className="analytics-eyebrow">Real-time Analytics</h2>
      <h1 className="analytics-heading">Analytics Dashboard</h1>
      <p className="analytics-blurb">
        Monitor your AI agents’ performance with comprehensive real-time analytics and actionable insights.
      </p>

      {/* KPI card grid */}
      <div className="kpi-grid">
        {kpis.map((kpi) => (
          <div key={kpi.label} className="kpi-card">
            <span className="kpi-value">{kpi.value}</span>
            <span className="kpi-label">{kpi.label}</span>
            <span className={`kpi-trend ${kpi.trend}`}/>
          </div>
        ))}
      </div>

      <div className="dashboard-panels">
        {/* Lead segmentation */}
        <div className="panel lead-panel">
          <h3>Lead Segmentation</h3>
          <ul>
            {leads.map((l) => (
              <li key={l.tier}>
                <span className="dot" style={{ background: l.color }} />
                <span>{l.tier}</span>
                <span className="count">{l.count}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Recent interactions */}
        <div className="panel recent-panel">
          <h3>Recent Interactions</h3>
          <ul>
            {recent.map((r) => (
              <li key={r.name}>
                <span className="avatar">{r.initials}</span>
                <div className="meta">
                  <strong>{r.name}</strong>
                  <small>{r.channel}</small>
                </div>
                <span className={`badge ${r.urgency.toLowerCase()}`}>{r.urgency}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
