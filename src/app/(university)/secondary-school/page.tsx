import React from "react";
import BreadcrumbTwo from "@/components/breadcrumb/breadcrumb-two";
import Image from "next/image";
import school1 from "@/assets/img/hero/hero2.jpeg";
import ECAgallery from "@/components/gallery/eca-gallery";
import shape_underline from "@/assets/img/unlerline/team-2-svg-1.svg";

const SecondarySchool = () => {
  return (
    <>
      <main>
        {/* breadcrumb area start */}
        <BreadcrumbTwo title="secondary School" subtitle="SECONDARY SCHOOL" />

        {/* Welcome Section */}
        <section className="py-5">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
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
                    Secondary education should develop in students the ability
                    to seek knowledge and establish a connection between
                    learning and real life, coordinate theory and practice, and
                    update knowledge, skills, and abilities through
                    self-reflection. Students are expected to develop the
                    ability to demonstrate ethical conduct, be sensitive to
                    social connection, be sensitive to environmental balance, be
                    committed to sustainable peace by managing conflicts, use
                    modern knowledge, skills, information, and communication
                    technology, and practice self-reliance and business-oriented
                    skills. <br /> <br />
                    Education should be developed as a means to help build
                    capable and competitive citizens with creative and critical
                    thinking for building a prosperous nation based on social
                    justice. The policy of this level of education is to prepare
                    capable citizens who can contribute to building a thoughtful
                    and inclusive society. <br />
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
                Why Choose <br />
                <span>
                  Our Secondary School?
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
                  icon: "📚",
                  title: "Comprehensive Curriculum",
                  description: "Balanced program covering all core subjects",
                },
                {
                  icon: "🎨",
                  title: "Creative Arts",
                  description: "Music, art, and drama programs",
                },
                {
                  icon: "⚽",
                  title: "Sports Development",
                  description: "Physical education and team sports",
                },
                {
                  icon: "🔬",
                  title: "Science Exploration",
                  description: "Hands-on experiments and discovery",
                },
                {
                  icon: "💻",
                  title: "Technology Integration",
                  description: "Age-appropriate tech learning",
                },
                {
                  icon: "❤️",
                  title: "Pastoral Care",
                  description: "Emotional and social development support",
                },
              ].map((feature, index) => (
                <div key={index} className="col-md-4 mb-4">
                  <div
                    className="card h-100 border-0 shadow-sm wow fadeInUp"
                    data-wow-delay={`${0.3 + index * 0.1}s`}
                  >
                    <div className="card-body text-center p-4">
                      <div className="display-4 mb-3">{feature.icon}</div>
                      <h5 className="card-title">{feature.title}</h5>
                      <p className="card-text">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
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
                  LFES Secondary School
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
                  Ready to Join Our Secondary School?
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

export default SecondarySchool;
