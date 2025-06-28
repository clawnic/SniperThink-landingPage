
import "./DataCollectionVisual.css";

const cards = [
  {
    id: 1,
    label: "Claim Report",
    title: "Customer Support",
    sub: "Insurance",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    style: { top: "12%", left: "13%" }
  },
  {
    id: 2,
    label: "Schedule Appointment",
    title: "Appointment Booking",
    sub: "Healthcare",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    style: { top: "7%", right: "10%" }
  },
  {
    id: 3,
    label: "Answer FAQs",
    title: "Lead Qualification",
    sub: "Finance & Mortgage Loans",
    img: "",
    style: { bottom: "18%", left: "8%" }
  },
  {
    id: 4,
    label: "Lead Qualification",
    title: "Customer Support",
    sub: "Ecommerce",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
    style: { bottom: "13%", right: "13%" }
  },
  {
    id: 5,
    label: "Lead Qualification",
    title: "Customer Support",
    sub: "Ecommerce",
    img: "https://randomuser.me/api/portraits/men/24.jpg",
    style: { bottom: "3%", left: "38%" }
  },
  {
    id: 6,
    label: "Data Collection",
    title: "Customer Support",
    sub: "Ecommerce",
    img: "https://randomuser.me/api/portraits/men/41.jpg",
    style: { top: "40%", left: "34%" },
    central: true
  }
];



export default function DataCollectionVisual() {
  const mobile = typeof window !== "undefined" && window.innerWidth <= 600;
  return (
    <section className="datacollection-section">
      <div className="datacollection-intro">
        <h2>How Teams Use SniperThink AI</h2>
        <p>
          Real-world use cases: See how businesses automate data collection, support, and lead qualification with SniperThink AI.
        </p>
      </div>
      <div className="datacollection-bg">
        {cards.map(card => {
          const cardProps = {
            key: card.id,
            className: card.central ? "datacollection-card central" : "datacollection-card",
            ...(mobile ? {} : { style: card.style })
          };
          return card.central ? (
            <div {...cardProps}>
              <div className="datacollection-label central-label">{card.label}</div>
              <div className="datacollection-row">
                <img
                  src={card.img}
                  alt="user"
                  className="datacollection-avatar"
                  loading="lazy"
                />
                <div>
                  <div className="datacollection-title">{card.title}</div>
                  <div className="datacollection-sub central-sub">{card.sub}</div>
                </div>
              </div>
              <span className="datacollection-play">&#9654;</span>
            </div>
          ) : (
            <div {...cardProps}>
              <div className="datacollection-label">{card.label}</div>
              <div className="datacollection-row">
                {card.img && (
                  <img
                    src={card.img}
                    alt="user"
                    className="datacollection-avatar"
                    loading="lazy"
                  />
                )}
                <div>
                  <div className="datacollection-title">{card.title}</div>
                  <div className="datacollection-sub">{card.sub}</div>
                </div>
              </div>
              <span className="datacollection-play">&#9654;</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
