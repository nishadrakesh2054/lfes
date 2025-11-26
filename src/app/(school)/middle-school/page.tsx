// import AboutTwo from "@/components/about/about-two";
"use client";
import BreadcrumbTwo from "@/components/breadcrumb/breadcrumb-two";
import school1 from "@/assets/img/hero/hero2.jpeg";
import ECAgallery from "@/components/gallery/eca-gallery";
import Image from "next/image";
import React from "react";

const Middlepage = () => {
  return (
    <>
      <main>
        {/* breadcrumb area start */}
        <BreadcrumbTwo title="Middle School" subtitle="Transition Years" />

        {/* Welcome Section */}
        <section className="pt-80 pb-60">
          <div className="container">
            <div className="row g-4 align-items-center">
              <div className="col-lg-6">
                <div className="school-hero-image position-relative rounded-4 overflow-hidden">
                  <Image
                    src={school1}
                    alt="Middle School Students"
                    className="w-100 h-100 object-fit-cover"
                    // style={{ ...imgStyle }}
                  />
                  <span className="school-hero-badge">Middle School</span>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="school-hero-card rounded-4 p-4 p-lg-5 bg-white">
                  <p
                    className="text-uppercase fw-semibold mb-2"
                    style={{ color: "#0079C0", letterSpacing: "0.08em" }}
                  >
                    Middle School
                  </p>
                  <h2
                    className="fw-bold mb-4"
                    style={{
                      color: "#0b1f3a",
                      fontSize: "clamp(2rem, 3vw, 2.5rem)",
                    }}
                  >
                    Guiding Transition Years With Purpose & Confidence
                  </h2>
                  <p
                    className="text-muted lh-lg"
                    style={{ textAlign: "justify" }}
                  >
                    LFES follows the Nepal Government curriculum and blends it
                    with progressive teaching practices from international
                    contexts. Meaningful, activity-based learning helps students
                    discover their strengths, ambitions, and interests while
                    applying new knowledge in authentic ways.
                  </p>
                  <p
                    className="text-muted lh-lg"
                    style={{ textAlign: "justify" }}
                  >
                    Middle schoolers are in a unique transition stage. We focus
                    on developing independent learners who are ready for high
                    school and beyond. Conceptual depth, specialized subject
                    focus, and a wide range of extracurricular experiences keep
                    students motivated and well-balanced.
                  </p>
                  <div className="quote-card mt-3 p-3 rounded-3">
                    <p className="mb-0 fst-italic text-muted text-center">
                      “Working together, respecting all, because everyone is
                      special and everyone matters.”
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="pt-80 pb-60 bg-light">
          <div className="container">
            <div className="text-start pb-80">
              <h3 className="tp-section-3-title">
                Middle School <br />
                <span>USP</span>
              </h3>
            </div>

            <div className="row g-4">
              {[
                {
                  icon: "🤝",
                  title: "Caring Environment",
                  description:
                    "A nurturing atmosphere where every child feels valued, respected, and supported.",
                },
                {
                  icon: "📖",
                  title: "Progressive Teaching & Learning",
                  description:
                    "Modern pedagogical methods that encourage creativity, curiosity, and critical thinking.",
                },
                {
                  icon: "🌏",
                  title: "New Zealand 3Di Program",
                  description:
                    "An international learning framework designed to develop inquiry, innovation, and inspiration.",
                },
                {
                  icon: "🎭",
                  title: "ECA Activities",
                  description:
                    "A diverse range of extra-curricular activities including music, art, dance, and drama.",
                },
                {
                  icon: "🌟",
                  title: "Window of Opportunity",
                  description:
                    "Creating outstanding learning opportunities for early teenagers to thrive academically and personally.",
                },
                {
                  icon: "🎓",
                  title: "Future-Ready Preparation",
                  description:
                    "We prepare students for active participation in academic, cultural, sporting, social, and working life.",
                },
                {
                  icon: "👩‍🏫",
                  title: "Trained & Dedicated Staff",
                  description:
                    "Qualified, passionate educators committed to guiding each student towards success.",
                },
                {
                  icon: "🏕️",
                  title: "Nepal Scouts",
                  description:
                    "Building leadership, responsibility, and teamwork through Nepal Scouts participation.",
                },
              ].map((feature, index) => (
                <div key={index} className="col-md-3">
                  <div className="feature-card h-100 p-4 text-center">
                    <div className="display-5 mb-3">{feature.icon}</div>
                    <h5 className="fw-semibold mb-2 text-black">
                      {feature.title}
                    </h5>
                    <p className="text-muted mb-0">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div
              className="row justify-content-center my-5 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="col-lg-10 text-center">
                <h5
                  className="fw-semibold text-secondary"
                  style={{
                    fontStyle: "italic",
                    lineHeight: "1.3",
                    letterSpacing: "0.5px",
                    textAlign: "center",
                  }}
                >
                  <span className="text-danger">“</span>Do not change yourselves
                  to be like the people of this world, but be changed within a
                  new way of thinking. Then you will be able to decide what you
                  want for yourself and you will know what is good and pleasing
                  for the entire world… <span className="text-danger">” </span>
                </h5>
              </div>
            </div>
          </div>
        </section>

        {/* Photo Gallery */}
        <section className="pt-50 pb-50">
          <div className="container">
            <div className="text-start pb-40">
              <h3 className="tp-section-2-title">
                Everyday Moments at <br />
                <span>LFES Middle School</span>
              </h3>
              <p className="lead wow fadeInUp" data-wow-delay=".4s">
                Capturing precious moments of learning and growth
              </p>
            </div>

            <ECAgallery />
          </div>
        </section>
      </main>
      <style jsx>{`
        .school-hero-image::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            rgba(0, 121, 192, 0.35),
            rgba(0, 121, 192, 0)
          );
        }
        .school-hero-badge {
          position: absolute;
          top: 1rem;
          left: 1rem;
          background: rgba(255, 255, 255, 0.92);
          color: #0079c0;
          padding: 0.35rem 0.9rem;
          border-radius: 999px;
          font-size: 0.85rem;
          font-weight: 600;
        }
        .school-hero-card {
          border: 1px solid rgba(0, 121, 192, 0.12);
          box-shadow: 0 1.5rem 3rem rgba(11, 31, 58, 0.08);
        }
        .quote-card {
          border: 1px dashed rgba(0, 121, 192, 0.4);
          background-color: rgba(0, 121, 192, 0.05);
        }
        .feature-card {
          border: 1px solid rgba(0, 121, 192, 0.15);
          border-radius: 20px;
          background-color: #fff;
        }
      `}</style>
    </>
  );
};

export default Middlepage;
