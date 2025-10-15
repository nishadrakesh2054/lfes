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
import img10 from "@/assets/img/lfesimages/Playground.png"


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
description: "LFES School provides safe and reliable transportation with GPS tracking, experienced staff, and flexible routes to ensure students travel securely.",

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
description: "LFES School offers comprehensive sports facilities, including an indoor stadium, Olympic pool, multiple courts, and a fitness center to promote physical fitness.",

      image: img5,
      features: [
        "Olympic Pool",
        "Indoor Stadium",
        "Multiple Courts",
        "Fitness Center",
      ],
    },
    {
      id: 6,
      title: "Auditorium",
   description: "LFES School has a spacious auditorium with modern audio-visual equipment, ideal for cultural events, seminars, presentations, and school gatherings."
,
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
    description: "LFES School has a fully equipped medical room with qualified staff and emergency care facilities to ensure student health and wellness."
,
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
    description: "LFES School provides creative art and music rooms equipped with instruments, art supplies, practice areas, and exhibition spaces for students to explore their talents.",
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
     description: "LFES School offers safe and spacious playgrounds with age-appropriate equipment for recreational and outdoor activities."
,
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
      <BreadcrumbTwo title="Campus Facilities" subtitle="Explore LFES Campus" />

   <section className="about-area tp-about-bg pt-100">
  <div className="container">
    {facilities.map((facility, index) => (
      <div
        className="row align-items-center  mb-60"
        key={facility.id}
      >
        {/* Image Column */}
        <div
          className={`col-lg-6 mb-4 mb-lg-0 ${
            index % 2 === 0 ? "order-1 order-lg-1" : "order-1 order-lg-2"
          }`}
        >
          <div
            className="tp-about-wrap  wow fadeInLeft h-100"
            data-wow-delay=".3s"
          >
            <div className="tp-about-thumb-wrapper">
              <div className="tp-about-thumb-1">
                <Image
                  src={facility.image}
                  alt={`${facility.title}-thumb`}
                  style={imgStyle}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Text Column */}
        <div
          className={`col-lg-6 ${
            index % 2 === 0 ? "order-2 order-lg-2" : "order-2 order-lg-1"
          }`}
        >
          <div
            className="tp-about-wrapper  wow fadeInRight h-100"
            data-wow-delay=".3s"
          >
            <div className="tp-section mb-40">
              <h5 className="tp-section-subtitle fs-1">{facility.title}</h5>
              <p>{facility.description}</p>
              <h5 className="tp-section-subtitle">Features</h5>

              <div className="row ms-2">
                {facility.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="col-12">
                    <i className="bi bi-check-circle-fill me-2 text-danger"></i>
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>


      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.0/font/bootstrap-icons.css"
      />
    </>
  );
};

export default Facilities;
