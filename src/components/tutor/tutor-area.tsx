// import Image from "next/image";
import { TutorIconOne, TutorIconThree, TutorIconTwo } from "../svg";

const tutorData = [
  {
    id: 1,
    icon: <TutorIconOne />,
    title: "Expert Faculty",
    description:
      " Highly qualified and experienced teachers dedicated to student success",
    delay: ".3s",
  },
  {
    id: 2,
    icon: <TutorIconTwo />,
    title: "Modern Curriculum",
    description:
      "Highly qualified and experienced teachers dedicated to student success",
    delay: ".5s",
  },
  {
    id: 3,
    icon: <TutorIconThree />,
    title: "Proven Results",
    description:
      "  Highly qualified and experienced teachers dedicated to student success",
    delay: ".7s",
  },
];

export default function TutorArea() {
  return (
    <section className="tp-about-tutor-area pt-120 pb-120">
      <div className="container">
        <div className="row align-items-end">
          <div className="col-lg-12">
            <div className="tp-about-tutor-heading mb-130">
              <div>
                <p className="custom-paragraph">
                  Little Flowers English School (LFES), a household name in the
                  field of education in the Eastern region of Nepal, known for
                  providing and delivering quality education, was established in
                  the year 2038 BS. Having completed forty years of operation,
                  serving the nation with dedication and commitment, we are
                  making significant inroads towards providing a more
                  progressive, student-centric teaching learning environment,
                  keeping in tune with the changing educational scenario
                  globally. <br />
                  We believe that every student is unique. They have their own
                  characteristics and temperament. The opportunities which will
                  be provided to them will enable them to fulfill their
                  potential and achieve proficiencies that will help them in
                  good stead in the days to come. It is not limited to acquiring
                  academic knowledge, but goes beyond through gaining the
                  capabilities of accomplishing future endeavors.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          {tutorData.map((item, index) => (
            <div
              key={index}
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay={item.delay}
            >
              <div
                className="tp-tutor-ite about text-center mb-30"
                style={{ backgroundColor: "#0079C0" }}
              >
                <div className="tp-tutor-icon ">
                  <span>{item.icon}</span>
                </div>
                <div className="tp-tutor-content" style={{ color: "#fff" }}>
                  <h4 className="tp-tutor-title" style={{ color: "#fff" }}>
                    <a href="#">{item.title}</a>
                  </h4>
                  <p className="custom-paragraph" style={{ color: "#fff" }}>
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
