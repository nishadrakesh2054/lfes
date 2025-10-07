import Link from "next/link";
import { MajorPrograms, RightArrowSeven } from "../svg";

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
    <section className="tp-undergraduate-area ">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="tp-undergraduate-program-box ">
              <div
                className="tp-undergraduate-program-heading"
                style={{
                  backgroundImage:
                    "url(/assets/img/history/undergraduate/heading-bg.png)",
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
                      <div className="tp-undergraduate-program-list">
                        <ul>
                          {p.programs.map((pm) => (
                            <li key={pm}>
                              <Link href="#">
                                {pm}{" "}
                                <span>
                                  <RightArrowSeven />
                                </span>
                              </Link>
                            </li>
                          ))}
                        </ul>
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
                  backgroundImage:
                    "url(/assets/img/history/undergraduate/heading-bg.png)",
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
                      <div className="tp-undergraduate-program-list">
                        <ul>
                          {p.programs.map((pm) => (
                            <li key={pm}>
                              <Link href="#">
                                {pm}{" "}
                                <span>
                                  <RightArrowSeven />
                                </span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
