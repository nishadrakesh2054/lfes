import { MajorPrograms } from "../svg";

const undergraduatePrograms = [
  {
    id: 1,
    programs: [
      "Physics",
      "Chemistry",
      "Mathematics",
      "Nepali",
      "English",
      "Biology  ",
      "Computer Science",
    ],
  },
];

const managementPrograms = [
  {
    id: 1,
    programs: [
      "Accountancy",
      "Economics",
      "Mathematics ",
      " Social Studies",
      "Nepali",
      "English",
      "Business Studies ",
      "Computer Science",
    ],
  },
];

export default function UndergraduateArea() {
  return (
    <section className=" pb-80">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="tp-undergraduate-program-box ">
              <div
                className="tp-undergraduate-program-heading"
                style={{
                  background:
                    "linear-gradient(135deg, #0079C0 0%, #005f94 100%)",
                }}
              >
                <h4 className="tp-undergraduate-program-title">
                  <span>
                    <MajorPrograms />
                  </span>{" "}
                  Science Stream
                </h4>
              </div>
              <div className="tp-undergraduate-program-content">
                <div className="row">
                  {undergraduatePrograms.map((p) => (
                    <div key={p.id} className="col-lg-12 col-md-12 ">
                      <div className="program-grid">
                        {p.programs.map((pm) => (
                          <div key={pm} className="program-item">
                            <span className="program-dot"></span>
                            <span className="program-text">{pm}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="tp-undergraduate-program-box">
              <div
                className="tp-undergraduate-program-heading"
                style={{
                  background:
                    "linear-gradient(135deg, #0079C0 0%, #005f94 100%)",
                }}
              >
                <h4 className="tp-undergraduate-program-title">
                  <span>
                    <MajorPrograms />
                  </span>{" "}
                  Management Stream
                </h4>
              </div>
              <div className="tp-undergraduate-program-content">
                <div className="row">
                  {managementPrograms.map((p) => (
                    <div key={p.id} className="col-lg-12 col-md-12">
                      <div className="program-grid">
                        {p.programs.map((pm) => (
                          <div key={pm} className="program-item">
                            <span className="program-dot"></span>
                            <span className="program-text">{pm}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .program-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
          gap: 0.75rem;
        }
        .program-item {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          padding: 0.75rem 1rem;
          border-radius: 0.85rem;
          background-color: rgba(0, 121, 192, 0.06);
          transition: transform 0.2s ease, border-color 0.2s ease,
            background-color 0.2s ease;
        }
        .program-item:hover {
          transform: translateX(4px);
          border-color: #0079c0;
          background-color: rgba(0, 121, 192, 0.12);
        }
        .program-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: linear-gradient(135deg, #0079c0, #005f94);
          flex-shrink: 0;
        }
        .program-text {
          color: #0b1f3a;
          font-weight: 500;
          font-size: 0.98rem;
        }
      `}</style>
    </section>
  );
}
