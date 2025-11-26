"use client";
import React from "react";

import BreadcrumbTwo from "@/components/breadcrumb/breadcrumb-two";
import Image from "next/image";
import img1 from "@/assets/img/lfesimages/Science-Laboratories.png";
import img2 from "@/assets/img/lfesimages/Transportation.png";
import img3 from "@/assets/img/lfesimages/Cafeteria.png";
import img4 from "@/assets/img/lfesimages/Library-&-Resource-Center.png";
import img5 from "@/assets/img/lfesimages/Sports-Complex.png";
import img6 from "@/assets/img/lfesimages/Auditorium.png";
import img7 from "@/assets/img/lfesimages/Computer-Labs.png";
import img8 from "@/assets/img/lfesimages/Computer-Labs.png";
import img9 from "@/assets/img/lfesimages/Art-&-Music-Rooms.png";
import img10 from "@/assets/img/lfesimages/Playground.png";

import { CSSProperties } from "react";

const Facilities = () => {
  const facilities = [
    {
      id: 1,
      title: "Science Laboratories",
      description:
        "The Laboratory facilities at LFES have been set up with an objective to provide amenities of the highest standard and are fully -equipped with all the requisite devices, apparatus and chemicals. These are regularly upgraded to maintain their standard and in accordance with the change(s) as demanded in the syllabus. There is provision for separate Physics, Chemistry, and Biology labs, where practical classes are conducted.",
      image: img1,
      features: [
        "Modern Equipment",
        "Safety First",
        "Research Grade",
        "Digital Integration",
      ],
    },
    {
      id: 2,
      title: "Transportation",
      description:
        "LFES School provides safe and reliable transportation with GPS tracking, experienced staff, and flexible routes to ensure students travel securely.",

      image: img2,
      features: [
        "GPS Tracking",
        "Safe Vehicles",
        "Experienced Staff",
        "Flexible Routes",
      ],
    },
    {
      id: 3,
      title: "Cafeteria",
      description:
        "High school can be a stressful time, especially if you are far away from home. Keeping the students’ best interests in mind, the School has coordinated with local hostel owners for providing students with affordable and accessible accommodation. and accessible accommodation.",
      image: img3,
      features: [
        "Healthy Menu",
        "Hygienic Kitchen",
        "Varied Cuisine",
        "Dietary Options",
      ],
    },
    {
      id: 4,
      title: "Library & Resource Center",
      description:
        "The well-stocked library, with a large collection of books and reference materials, is open on all weekdays during office hours, and students can also access reading materials worldwide via its internet facilities..",
      image: img4,
      features: [
        "10,000+ Books",
        "Digital Resources",
        "Study Zones",
        "Research Support",
      ],
    },
    {
      id: 5,
      title: "Sports Complex",
      description:
        "LFES School offers comprehensive sports facilities, including an indoor stadium, Olympic pool, multiple courts, and a fitness center to promote physical fitness.",

      image: img5,
      features: [
        "Mini Olympic Swimming Pool",
        "Indoor Stadium",
        "Multiple Courts",
      ],
    },
    {
      id: 6,
      title: "Auditorium",
      description:
        "LFES School has a spacious auditorium with modern audio-visual equipment, ideal for cultural events, seminars, presentations, and school gatherings.",
      image: img6,
      features: [
        "500+ Capacity",
        "HD Projection",
        "Sound System",
        "Stage Facilities",
      ],
    },
    {
      id: 7,
      title: "Computer Labs",
      description:
        "Equipped with state-of-the-art technology under the supervision of highly trained staff, our computer laboratories provide networking and internet facilities to the standard required internationally.",
      image: img7,
      features: [
        "Latest Hardware",
        "High-Speed Internet",
        "Software Suite",
        "IT Support",
      ],
    },
    {
      id: 8,
      title: "Medical Room",
      description:
        "LFES School has a fully equipped medical room with qualified staff and emergency care facilities to ensure student health and wellness.",
      image: img8,
      features: [
        "Qualified Staff",
        "Emergency Care",
        "First Aid",
        "Health Monitoring",
      ],
    },
    {
      id: 9,
      title: "Art & Music Rooms",
      description:
        "LFES School provides creative art and music rooms equipped with instruments, art supplies, practice areas, and exhibition spaces for students to explore their talents.",
      image: img9,
      features: [
        "Musical Instruments",
        "Art Supplies",
        "Practice Rooms",
        "Exhibition Space",
      ],
    },
    {
      id: 10,
      title: "Playground",
      description:
        "LFES School offers safe and spacious playgrounds with age-appropriate equipment for recreational and outdoor activities.",
      image: img10,
      features: [
        "Safe Equipment",
        "Age-Appropriate",
        "Supervised Play",
        "Green Spaces",
      ],
      icon: "🌳",
    },
  ];
  const imgStyle: CSSProperties = {
    height: "auto",
  };

  return (
    <>
      <BreadcrumbTwo title="School Facilities" subtitle="Explore LFES School" />

      <section className="about-area tp-about-bg pt-120 pb-120">
        <div className="container">
          {facilities.map((facility, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={facility.id}
                className="facility-card  rounded-4 p-md-4 mb-80 bg-white"
                style={{
                  border: "1px solid rgba(0,121,192,0.12)",
                }}
              >
                <div className="row align-items-stretch g-4">
                  <div className={`col-lg-6 ${isEven ? "" : "order-lg-2"}`}>
                    <div className="facility-image position-relative rounded overflow-hidden h-100">
                      <Image
                        src={facility.image}
                        alt={`${facility.title}-thumb`}
                        style={{ ...imgStyle, width: "100%" }}
                        className="w-100 h-100 object-fit-cover"
                      />
                    </div>
                  </div>

                  <div className={`col-lg-6 ${isEven ? "" : "order-lg-1"}`}>
                    <div className="facility-content h-100 d-flex flex-column justify-content-center">
                      <h3
                        className="fw-bold mb-3"
                        style={{ color: "#0b1f3a", fontSize: "1.8rem" }}
                      >
                        {facility.title}
                      </h3>
                      <p
                        className="text-muted mb-4"
                        style={{ lineHeight: 1.7 }}
                      >
                        {facility.description}
                      </p>

                      <h6
                        className="fw-semibold mb-3"
                        style={{ color: "#0079C0" }}
                      >
                        Key Highlights
                      </h6>
                      <div className="row g-2">
                        {facility.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="col-sm-6">
                            <div className="feature-pill d-flex align-items-center rounded-3 px-3 py-2">
                              <i className="bi bi-check-circle-fill me-2"></i>
                              <span>{feature}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <style jsx>{`
        .facility-image::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            rgba(0, 121, 192, 0.35),
            rgba(0, 121, 192, 0)
          );
        }
        .facility-badge {
          position: absolute;
          top: 1rem;
          left: 1rem;
          background: rgba(255, 255, 255, 0.9);
          color: #0079c0;
          padding: 0.35rem 0.9rem;
          border-radius: 999px;
          font-size: 0.85rem;
          font-weight: 600;
        }
        .feature-pill {
          background-color: #ffffff;
          border: 1px solid rgba(0, 121, 192, 0.15);
          font-size: 0.95rem;
        }
        .feature-pill i {
          color: #0079c0;
        }
      `}</style>

      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.0/font/bootstrap-icons.css"
      />
    </>
  );
};

export default Facilities;
