// import AboutTwo from "@/components/about/about-two";
import BreadcrumbTwo from "@/components/breadcrumb/breadcrumb-two";
import school1 from "@/assets/img/hero/hero2.jpeg";
import ECAgallery from "@/components/gallery/eca-gallery";
import shape_underline from "@/assets/img/unlerline/team-2-svg-1.svg";
import Image from "next/image";
import React from "react";

const Middlepage = () => {
  return (
    <>
      <main>
        {/* breadcrumb area start */}
        <BreadcrumbTwo title="Middle School " subtitle="MIDDLE SCHOOL" />

        {/* Welcome Section */}
        <section className="py-5">
          <div className="container">
            <div className="row align-items-start">
              <div className="col-lg-6">
                <div className="text-center wow fadeInUp" data-wow-delay=".5s">
                  <h5
                    className="text-capitalize position-relative d-inline-block px-4 py-3 shadow-lg"
                    style={{
                      fontStyle: "italic",
                      textAlign: "justify",
                      fontWeight: "500",
                      color: "#fff",
                      background: "linear-gradient(145deg, #0079C0, #005f94)",
                      borderLeft: "4px solid #C81121",
                      borderRight: "4px solid #C81121",
                      borderRadius: "12px",
                      boxShadow:
                        "0 6px 15px rgba(0,0,0,0.3), inset 0 2px 4px rgba(255,255,255,0.2)",
                      transform:
                        "perspective(800px) rotateX(2deg) rotateY(-2deg)",
                      transition: "all 0.3s ease",
                    }}
                  >
                    <span
                      className="d-block d-md-none"
                      style={{ fontSize: "14px" }}
                    >
                      “Working together, respecting all, because everyone is
                      special and everyone matters.”
                    </span>
                    <span
                      className="d-none d-md-block"
                      style={{ fontSize: "18px" }}
                    >
                      “Working together, respecting all, because everyone is
                      special and everyone matters.”
                    </span>
                  </h5>
                </div>

                <div
                  className="tp-hero-3-thumb mb-45 wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <Image
                    src={school1}
                    alt="Primary School Students"
                    className="img-fluid rounded-3"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="px-1">
                  <p
                    className="tp-about-tutor-content wow fadeInUp"
                    data-wow-delay=".5s"
                    style={{ textAlign: "justify" }}
                  >
                    We follow the Nepal Government curriculum and ensure
                    progressive teaching skills that are practiced in an
                    international context. Planned activities within the
                    curriculum enable students to identify their strengths,
                    skills, and ambitions so they may make suitable choices that
                    are best suited for them. Our teaching-learning is based on
                    a student-centric approach; therefore, the acquisition of
                    new knowledge is made more meaningful through the prospect
                    of applying it. <br />
                    We would like to extend a warm welcome to the Middle School
                    of LFES. Students in middle school are in a transition
                    stage, where a more extraordinary ability for conceptual
                    thinking emerges in children. It focuses on developing
                    independent learners who are prepared to succeed in high
                    school and beyond. The shift from a theme-based approach to
                    a more specialized and focused understanding of concepts
                    helps students gain more interest in different subjects.{" "}
                    <br />
                    Little Flowers’ English School aims to draw the best
                    elements of the curriculum, combined with the depth and
                    range of subjects that are based on age-appropriate learning
                    goals. Good education not only develops character and a
                    sense of value but also maintains a balance between the
                    academic and ECA areas. With this in mind, we aim to provide
                    a wide range of extracurricular activities to meet the needs
                    of all students for their holistic development. Projects,
                    exhibitions, presentations, or field trips ensure that
                    learners find opportunities to see theory in practice.
                    <br />
                    Assessment is an integral part of teaching and learning.
                    Assessment can mainly be formative and summative. It starts
                    with a formative assessment of each subject, and it is
                    carried out throughout the year as a continuous assessment.
                    This test is based on their skills and understanding. The
                    other assessments and evaluations are based on summative
                    assessment. This is reflected at the end of each term on the
                    evaluation grade sheet.
                  </p>
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
                  Middle School{" "}
                  <span>
                    USP
                    <Image
                      className="tp-underline-shape-9 wow bounceIn"
                      data-wow-duration="1.5s"
                      data-wow-delay=".4s"
                      src={shape_underline}
                      alt="shape-underline"
                    />
                  </span>
                </h3>
            </div>

            <div className="row">
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
                <div key={index} className="col-md-3 mb-4">
                  <div
                    className="card h-100 border-0 shadow-sm wow fadeInUp"
                    data-wow-delay={`${0.3 + index * 0.1}s`}
                    style={{
                      borderRadius: "15px",
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    }}
                  >
                    <div className="card-body text-center p-4">
                      <div
                        className="display-5 mb-3"
                        style={{
                          fontSize: "2.5rem",
                          transform: "scale(1)",
                          transition: "transform 0.3s ease",
                        }}
                      >
                        {feature.icon}
                      </div>
                      <h5 className="card-title fw-bold text-primary mb-2">
                        {feature.title}
                      </h5>
                      <p className="card-text text-muted">
                        {feature.description}
                      </p>
                    </div>
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
              <h3 className="tp-section-3-title">
                Life at{" "}
                <span>
                  LFES Middle
                  <Image
                    className="tp-underline-shape-9 wow bounceIn"
                    data-wow-duration="1.5s"
                    data-wow-delay=".4s"
                    src={shape_underline}
                    alt="shape-underline"
                  />
                </span>
              </h3>
              <p className="lead wow fadeInUp" data-wow-delay=".4s">
                Capturing precious moments of learning and growth
              </p>
            </div>

            <ECAgallery />
          </div>
        </section>

         {/* Call to Action */}
        <section className="py-5  text-white" style={{ background: "#0079C0" }}>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto text-center">
                <h3 className="wow fadeInUp text-light" data-wow-delay=".3s">
                  Ready to Join Our Middle School?
                </h3>
                <p
                  className=" wow fadeInUp text-light tp-about-tutor-content"
                  data-wow-delay=".4s"
                >
                  Schedule a visit or contact us for more information about
                  admissions
                </p>
                <div className="wow fadeInUp d-flex flex-wrap justify-content-center gap-3" data-wow-delay=".5s">
                  <button className="btn btn-outline-light btn-md ">
                    Schedule a Tour
                  </button>
                  <button className="btn btn-outline-light btn-md">
                    Download Brochure
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Middlepage;
