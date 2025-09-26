"use client";
import React from "react";

import BreadcrumbTwo from "@/components/breadcrumb/breadcrumb-two";
import Image from "next/image";
import img1 from "@/assets/img/transportation.webp";

import { CSSProperties } from "react";

const Facilities = () => {
  const facilities = [
    {
      id: 1,
      title: "Science Laboratories",
      description:
        "The junior block, or Kadjou Building, operates classes I to VIII, accommodating 480 students. It has a cafeteria, library, science labs, and performing arts rooms. It has a rooftop playground with soft rubber flooring for students in grades I to III. It is also used by grades VI through VIII for soft football. The building has over 40,000 square feet of operational space.",
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
        "We have three libraries, one each in the junior, senior and IBDP building. In total, the libraries hold 20,000 books, periodicals and resource materials. Each library is staffed by qualified librarians, and all provide access to online publications and books. The elementary and secondary grades have classroom libraries, but students visit the school library for special classes and general reading.Parents are always welcome at the school’s libraries. We strongly encourage parents to read with their children, especially in the elementary grades. Reading from a young age helps children develop a lifelong appreciation for learning.",
      image: img1,
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
        "Healthy and nutritious meals prepared in hygienic conditions with diverse menu options to cater to different tastes and dietary requirements. The biology, chemistry and physics laboratories allow hands-on study and help students gain experience in scientific methods. All of our laboratories of the junior and senior buildings are well equipped and IBO certified.",
      image: img1,
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
        "LFES School is equipped to meet the educational needs of children in today’s technologically driven world. The school’s computer laboratories in the junior and senior buildings are each equipped with 35 computer systems and connected to high-speed Internet. Students have unlimited access to the laboratory and are encouraged to spend their free time doing coursework and personal research. However, we maintain a strict code of conduct related to the use of the Internet and expect all students and parents to be aware of the standards.",
      image: img1,
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
        "Comprehensive sports facilities including indoor stadium, swimming pool, basketball courts, and athletic tracks to promote physical fitness. Ullens School is equipped to meet the educational needs of children in today’s technologically driven world. The school’s computer laboratories in the junior and senior buildings are each equipped with 35 computer systems and connected to high-speed Internet. Students have unlimited access to the laboratory and are encouraged to spend their free time doing coursework and personal research. However, we maintain a strict code of conduct related to the use of the Internet and expect all students and parents to be aware of the standards.",
      image: img1,
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
      description:
        "Spacious auditorium with modern audio-visual equipment for cultural events, seminars, presentations, and school gatherings.Ullens School is equipped to meet the educational needs of children in today’s technologically driven world. The school’s computer laboratories in the junior and senior buildings are each equipped with 35 computer systems and connected to high-speed Internet. Students have unlimited access to the laboratory and are encouraged to spend their free time doing coursework and personal research. However, we maintain a strict code of conduct related to the use of the Internet and expect all students and parents to be aware of the standards.",
      image: img1,
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
        "Advanced computer laboratories with high-speed internet, latest software, and dedicated IT support for technology education. Ullens School is equipped to meet the educational needs of children in today’s technologically driven world. The school’s computer laboratories in the junior and senior buildings are each equipped with 35 computer systems and connected to high-speed Internet. Students have unlimited access to the laboratory and are encouraged to spend their free time doing coursework and personal research. However, we maintain a strict code of conduct related to the use of the Internet and expect all students and parents to be aware of the standards.",
      image: img1,
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
        "Fully equipped medical facility with qualified nursing staff and emergency care provisions for student health and wellness. Ullens School is equipped to meet the educational needs of children in today’s technologically driven world. The school’s computer laboratories in the junior and senior buildings are each equipped with 35 computer systems and connected to high-speed Internet. Students have unlimited access to the laboratory and are encouraged to spend their free time doing coursework and personal research. However, we maintain a strict code of conduct related to the use of the Internet and expect all students and parents to be aware of the standards.",
      image: img1,
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
        "Creative spaces dedicated to artistic expression with instruments, art supplies, and exhibition areas for budding artists.Ullens School is equipped to meet the educational needs of children in today’s technologically driven world. The school’s computer laboratories in the junior and senior buildings are each equipped with 35 computer systems and connected to high-speed Internet. Students have unlimited access to the laboratory and are encouraged to spend their free time doing coursework and personal research. However, we maintain a strict code of conduct related to the use of the Internet and expect all students and parents to be aware of the standards.",
      image: img1,
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
        "Safe and expansive playground areas with age-appropriate equipment for recreational activities and outdoor play.Ullens School is equipped to meet the educational needs of children in today’s technologically driven world. The school’s computer laboratories in the junior and senior buildings are each equipped with 35 computer systems and connected to high-speed Internet. Students have unlimited access to the laboratory and are encouraged to spend their free time doing coursework and personal research. However, we maintain a strict code of conduct related to the use of the Internet and expect all students and parents to be aware of the standards.",
      image: img1,
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
