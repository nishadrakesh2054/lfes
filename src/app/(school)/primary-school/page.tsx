"use client";
import React from "react";
import BreadcrumbTwo from "@/components/breadcrumb/breadcrumb-two";
import Image from "next/image";
import school1 from "@/assets/img/hero/hero2.jpeg";
import ECAgallery from "@/components/gallery/eca-gallery";

const PrimarySchool = () => {
  return (
    <>
      <main>
        {/* breadcrumb area start */}
        <BreadcrumbTwo
          title="Primary School"
          subtitle="Early Years Education"
        />

        {/* Welcome Section */}
        <section className="pt-120 ">
          <div className="container">
            <div className="row g-4 align-items-center">
              <div className="col-lg-6">
                <div className="school-hero-image position-relative rounded-4 overflow-hidden">
                  <Image
                    src={school1}
                    alt="Primary School Students"
                    className="w-100 h-100 object-fit-cover"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="school-hero-card rounded-4 p-4 p-lg-5 bg-white">
                  <p
                    className="text-uppercase fw-semibold mb-2"
                    style={{ color: "#0079C0", letterSpacing: "0.08em" }}
                  >
                    Primary School
                  </p>
                  <h2
                    className="fw-bold mb-4"
                    style={{
                      color: "#0b1f3a",
                      fontSize: "clamp(2rem, 3vw, 2.5rem)",
                    }}
                  >
                    Nurturing Curious Minds With Heart & Purpose
                  </h2>
                  <p
                    className="custom-paragraph"
                  
                  >
                    At our Primary Block, every child’s journey is unique. We
                    embrace a holistic approach that goes beyond textbooks to
                    cultivate creativity, critical thinking, emotional growth,
                    and social skills. Lessons are rooted in real-life
                    experiences so that learning feels meaningful and joyful.
                  </p>
                  <p
                    className="custom-paragraph"
                 
                  >
                    Parents are true partners in this journey. We keep families
                    informed about every milestone—from academic progress to
                    personal growth—so that children feel supported both at
                    school and at home. By focusing on the whole child—mind,
                    heart, and spirit—we lay the foundation for confident,
                    compassionate, and happy learners.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="pt-40 pb-40 bg-light">
          <div className="container">
            <div className="text-start pb-40">
              <h3 className="tp-section-2-title">
                Why Choose <br />
                <span>Our Primary School?</span>
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
                  icon: "🌏",
                  title: "New Zealand 3Di Program",
                  description: " International learning framework",
                },
              ].map((feature, index) => (
                <div key={index} className="col-md-4">
                  <div className="feature-card h-100 p-4 text-center">
                    <div className="display-4 mb-3">{feature.icon}</div>
                    <h5 className="fw-semibold mb-2">{feature.title}</h5>
                    <p className="  mb-0">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Photo Gallery */}
        <section className="pt-80 pb-120">
          <div className="container">
            <div className="text-start pb-40">
              <h3 className="tp-section-2-title ">
                Everyday Moments at <br />
                <span>LFES Primary</span>
              </h3>
              <p
                className="custom-paragraph lead wow fadeInUp"
                data-wow-delay=".4s"
              >
                Capturing precious moments of learning and growth
              </p>
            </div>

            <ECAgallery categories={["primary-school"]} />
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

export default PrimarySchool;
