"use client";

const missionData = [
  {
    title: "Vision",
    description:
      "Inspiring and transforming lives in a spiritually vital, caring school community to serve God for His glory.",
    icon: "bi bi-eye-fill",
    accent: "#6EC1E4",
  },
  {
    title: "Mission",
    description:
      "We provide exceptional English education that empowers students to excel academically, think critically, and communicate effectively in a global society.",
    icon: "bi bi-bullseye",
    featured: true,
    accent: "#F2994A",
  },
  {
    title: "Values",
    description:
      "We nurture every child so they become well-rounded individuals who lead with integrity, compassion, and purpose.",
    icon: "bi bi-stars",
    accent: "#9B6CFF",
  },
];
export default function CampusChooseAreaThree() {
  const brandColor = "#0079C0";

  return (
    <section
      className="tp-campus-choose-area pt-120 pb-100"
   
    >
      <div className="container">
        <div className="row align-items-center mb-80">
          <div className="col-lg-8">
            <p
              className="text-uppercase fw-semibold mb-2"
              style={{ color: brandColor }}
            >
              Mission & Values
            </p>
            <h2
              className="fw-bold mb-3"
              style={{
                fontSize: "clamp(2rem, 3vw, 2.75rem)",
                color: "#0b1f3a",
                lineHeight: 1.2,
              }}
            >
              Preparing Students for a Purpose-Driven Future
            </h2>
            <p className="text-muted mb-0" style={{ fontSize: "1.05rem" }}>
              LFES provides a supportive, creative, and faith-filled environment
              where every learner discovers their calling and develops the
              character to impact the world.
            </p>
          </div>
        </div>

        <div className="row g-4 align-items-stretch">
          {missionData.map((item) => {
            const accent = item.accent ?? brandColor;
            const gradient = `linear-gradient(135deg, ${accent} 0%, ${brandColor} 100%)`;
            return (
              <div
                key={item.title}
                className={`${
                  item.featured ? "col-lg-6 col-md-12" : "col-lg-3 col-md-6"
                }`}
              >
                <div
                  className={`mission-card h-100 position-relative overflow-hidden rounded-4 ${
                    item.featured ? "p-4 p-lg-5" : "p-4"
                  }`}
                  style={{
                    border: `1px solid ${accent}33`,
                    backgroundColor: "#fff",
                    boxShadow:
                      "0 0.5rem 0.5rem rgba(11, 31, 58, 0.08), 0 0.1rem 0.5rem rgba(0, 121, 192, 0.1)",
                  }}
                >
                  <span
                    className="mission-card__ribbon"
                    style={{ background: gradient }}
                  ></span>
                  <div className="text-center mb-4">
                    <span
                      className="mission-card__icon"
                      style={{
                        background: gradient,
                        width: item.featured ? "90px" : "70px",
                        height: item.featured ? "90px" : "70px",
                      }}
                    >
                      <i
                        className={item.icon}
                        style={{ fontSize: item.featured ? "2.4rem" : "2rem" }}
                      ></i>
                    </span>
                  </div>
                  <div className="text-center px-lg-2">
                  
                    <h4
                      className="fw-semibold mb-3"
                      style={{ color: brandColor, fontSize: "1.35rem" }}
                    >
                      {item.title}
                    </h4>
                    <p
                      className="text-muted mb-0"
                      style={{ fontSize: "0.98rem", lineHeight: 1.7 }}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <style jsx>{`
        .mission-card::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 1.5rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          pointer-events: none;
        }
        .mission-card__icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          color: #fff;
          box-shadow: 0 10px 25px rgba(0, 121, 192, 0.2);
        }
        .mission-card__ribbon {
          position: absolute;
          inset: 0;
          opacity: 0.05;
        }
        .mission-card:hover {
          transform: translateY(-6px);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          box-shadow: 0 2rem 4rem rgba(0, 121, 192, 0.18);
        }
      `}</style>
    </section>
  );
}
