"use client";
import React from "react";
import BreadcrumbTwo from "@/components/breadcrumb/breadcrumb-two";
import Image from "next/image";
import school1 from "@/assets/img/hero/hero2.jpeg";
import ECAgallery from "@/components/gallery/eca-gallery";

const SecondarySchool = () => {
  return (
    <>
      <main>
        {/* breadcrumb area start */}
        <BreadcrumbTwo title="High School" subtitle="High School Education" />

        {/* Welcome Section */}
        <section className="pt-80 pb-60">
          <div className="container">
            <div className="row g-4 align-items-center">
              <div className="col-lg-6">
                <div className="school-hero-image position-relative rounded-4 overflow-hidden">
                  <Image
                    src={school1}
                    alt="High School Students"
                    className="w-100 h-100 object-fit-cover"
                    // style={{ ...imgStyle }}
                  />
                  <span className="school-hero-badge">High School</span>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="school-hero-card rounded-4 p-4 p-lg-5 bg-white">
                  <p
                    className="text-uppercase fw-semibold mb-2"
                    style={{ color: "#0079C0", letterSpacing: "0.08em" }}
                  >
                    High School
                  </p>
                  <h2
                    className="fw-bold mb-4"
                    style={{
                      color: "#0b1f3a",
                      fontSize: "clamp(2rem, 3vw, 2.5rem)",
                    }}
                  >
                    Building Future-Ready, Thoughtful Global Citizens
                  </h2>
                  <p
                    className="custom-paragraph"
                   
                  >
                    LFES High School develops in students the ability to seek
                    knowledge, connect learning with real life, and align theory
                    with practice. Learners cultivate ethical behavior, social
                    responsibility, environmental sensitivity, and the
                    confidence to manage conflicts for sustainable peace.
                  </p>
                  <p
                    className="custom-paragraph"
                   
                  >
                    With strong integration of ICT skills, entrepreneurship, and
                    modern pedagogy, our goal is to shape capable, competitive
                    citizens who contribute to a thoughtful and inclusive
                    society rooted in social justice.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="pt-80 pb-60 bg-light">
          <div className="container">
            <div className="text-start pb-40">
              <h3 className="tp-section-2-title">
                Why Choose <br />
                <span>Our High School?</span>
              </h3>
            </div>

            <div className="row g-4">
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
                <div key={index} className="col-md-4">
                  <div className="feature-card h-100 p-4 text-center">
                    <div className="display-4 mb-3">{feature.icon}</div>
                    <h5 className="fw-semibold mb-2">{feature.title}</h5>
                    <p className="mb-0">
                      {feature.description}
                    </p>
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
              <h3 className="tp-section-2-title">
                Everyday Moments at <br />
                <span>LFES High School</span>
              </h3>
              <p
                className="custom-paragraph  wow fadeInUp"
                data-wow-delay=".4s"
              >
                Capturing precious moments of learning and growth
              </p>
            </div>

            <ECAgallery categories={["high-school"]} />
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
        .feature-card {
          border: 1px solid rgba(0, 121, 192, 0.15);
          border-radius: 20px;
          background-color: #fff;
        }
      `}</style>
    </>
  );
};

export default SecondarySchool;
