import "./WhoIsItForSection.css";

const WhoIsItForSection = () => (
  <section className="whoisitfor-section diagonal-layout" id="whoisitfor">
    <div className="diagonal-container">
      <div className="content-side">
        <h2 className="whoisitfor-title">Built for Teams That Value Speed & Precision</h2>
        <p className="whoisitfor-subtitle">
          SniperThink AI Agents are tailored for businesses that deal with high-volume queries, team coordination, and time-sensitive responses.
        </p>
        <div className="industry-list">
          <div className="industry-item">
            <span className="industry-icon">🎓</span>
            <div>
              <h3>EdTech (Colleges & Universities)</h3>
              <p>Automate admissions, student FAQs, event queries, and campus communications.</p>
            </div>
          </div>
          <div className="industry-item">
            <span className="industry-icon">💹</span>
            <div>
              <h3>Finance (Insurance, Lending & Advisory)</h3>
              <p>Speed up quote generation, claims processing, onboarding, and document delivery.</p>
            </div>
          </div>
          <div className="industry-item">
            <span className="industry-icon">🏠</span>
            <div>
              <h3>Real Estate</h3>
              <p>Handle property inquiries, lead follow-ups, appointment bookings, and status updates.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="visual-side">
        <div className="floating-card healthcare">
          <span className="card-icon">🩺</span>
          <h3>Healthcare</h3>
          <p>Automate appointment booking, test result dispatch, patient reminders.</p>
        </div>
        <div className="floating-card d2c">
          <span className="card-icon">🛒</span>
          <h3>D2C Brands</h3>
          <p>Instant product support, return tracking, WhatsApp updates.</p>
        </div>
      </div>
    </div>
  </section>
);

export default WhoIsItForSection;
