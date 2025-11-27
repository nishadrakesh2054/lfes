"use client";
import Image from "next/image";
import ab_img_1 from "@/assets/img/about/4/about-thumb-1.jpg";
import ab_img_2 from "@/assets/img/about/4/about-thumb-2.jpg";
import ab_img_3 from "@/assets/img/about/4/about-thumb-3.jpg";
import ab_img_4 from "@/assets/img/about/4/about-thumb-4.jpg";
import UndergraduateArea from "../undergraduate/undergraduate-area";

const thumbs = [
  { id: 1, col_lg: 3, img: ab_img_1, delay: 0.5 },
  { id: 2, col_lg: 4, img: ab_img_2, delay: 0.7 },
  { id: 3, col_lg: 3, img: ab_img_3, delay: 0.9 },
  { id: 4, col_lg: 2, img: ab_img_4, delay: 1 },
];

const infoSections = [
  {
    title: "Class Timings",
    text: "Regular hours run from 6:45 AM to 1:30 PM, balancing structure, focus, and wellbeing.",
  },
  {
    title: "Individual Care & Guidance",
    text: "Small classes, advisory support, and proactive counseling ensure every learner is seen and heard.",
  },
  {
    title: "Practical Learning & Creativity",
    text: "Project-based experiences, science practicums, and innovation labs connect theory to real-world impact.",
  },
  {
    title: "Experienced & Inspiring Faculty",
    text: "Accomplished educators mentor students to think critically, dream boldly, and act responsibly.",
  },
  {
    title: "Modern Facilities & Weekly Activities",
    text: "State-of-the-art labs, creative studios, mini Olympic pool, and weekly enrichment build holistic growth.",
  },
  {
    title: "Proven Excellence & Discipline",
    text: "A history of 100% NEB pass results rooted in rigorous academics, culture of respect, and accountability.",
  },
];

type IProps = {
  spacing?: string;
};

export default function AboutTwo({ spacing = "pt-115 pb-90" }: IProps) {
  return (
    <section className={`about-area ${spacing} `}>
      <div className="container">
        <div className="row g-4 align-items-center mb-80">
          <div className="col-lg-6">
            <div className="about-hero-card rounded-4 p-4 p-lg-5 bg-white">
              <p
                className="text-uppercase fw-semibold mb-2"
                style={{ color: "#0079C0", letterSpacing: "0.08em" }}
              >
                Senior High School
              </p>
              <h2
                className="fw-bold mb-4"
                style={{
                  color: "#0b1f3a",
                  fontSize: "clamp(2rem, 3vw, 2.5rem)",
                }}
              >
                Future-Focused Learning With Heart, Discipline & Purpose
              </h2>
              <p className="custom-paragraph  mb-3">
                LFES Senior High School in Birtamode equips students with the
                knowledge, skills, and values needed to excel in university and
                beyond. Academic rigor blends with personal care, career
                guidance, and holistic opportunities so every learner grows into
                a confident, responsible young adult.
              </p>
              <p className="custom-paragraph  mb-0">
                We emphasize practical application, leadership, and creativity
                through project-based learning, innovation labs, and weekly
                enrichment. Discipline, resilience, and respect sit at the heart
                of our campus culture, forming the pillars of proven success.
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-thumb-grid rounded-4 overflow-hidden">
              {thumbs.map((thumb) => (
                <div
                  key={thumb.id}
                  className="about-thumb position-relative"
                  data-wow-delay={`${thumb.delay}s`}
                >
                  <Image
                    src={thumb.img}
                    alt="thumb-img"
                    className="w-100 h-100 object-fit-cover"
                  />
                  <span className="about-thumb-overlay"></span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="row g-4 mb-60">
          <div className="col-12">
            <div className="info-stack rounded-4 p-4 p-lg-5 bg-white">
              {infoSections.map((info, idx) => (
                <div key={info.title} className="info-row d-flex gap-4 mb-4">
                  <div className="info-badge">
                    <span>{String(idx + 1).padStart(2, "0")}</span>
                  </div>
                  <div>
                    <h5 className=" mb-1" style={{ color: "#0b1f3a" }}>
                      {info.title}
                    </h5>
                    <p className="custom-paragraph  mb-0">{info.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="row pt-30">
          <div className="col-12 wow fadeInUp" data-wow-delay=".4s">
            <h4 className="mb-3">Academic Streams Offered</h4>
            <p className="custom-paragraph">
              Students at LFES Senior High School can choose from two streams
              designed to match their academic interests and career goals:
            </p>
            <UndergraduateArea />

            <h4 className="mt-4">Preparation for University and Life</h4>
            <p className="custom-paragraph">
              Our comprehensive guidance program assists students in course
              selection, university applications, and career planning. Beyond
              academics, we emphasize life skills such as critical thinking,
              communication, financial literacy, and emotional intelligence—
              preparing graduates to succeed not only in higher education but in
              life. Senior High at LFES is more than just a step toward
              university—it is a transformative journey that shapes students
              into thoughtful leaders, innovative thinkers, and responsible
              global citizens.
            </p>
          </div>
        </div>
      </div>
      <style jsx>{`
        .about-thumb-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 1rem;
          background: rgba(0, 121, 192, 0.05);
          padding: 1rem;
        }
        .about-thumb {
          min-height: 180px;
          border-radius: 1rem;
          overflow: hidden;
        }
        .about-thumb-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            rgba(0, 121, 192, 0.3),
            rgba(0, 121, 192, 0)
          );
        }
        .info-stack {
          border: 1px solid rgba(0, 121, 192, 0.12);
          box-shadow: 0 1.25rem 2.5rem rgba(11, 31, 58, 0.06);
        }
        .info-row:last-child {
          margin-bottom: 0;
        }
        .info-badge {
          width: 56px;
          height: 56px;
          border-radius: 16px;
          background: rgba(0, 121, 192, 0.12);
          color: #0079c0;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1rem;
        }
        @media (max-width: 576px) {
          .info-row {
            flex-direction: column;
          }
          .info-badge {
            width: 48px;
            height: 48px;
          }
        }
      `}</style>
    </section>
  );
}
