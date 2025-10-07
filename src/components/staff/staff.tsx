import React from "react";
import shape_underline from "@/assets/img/unlerline/team-2-svg-1.svg";
import Image from "next/image";

import img1 from "@/assets/img/staff1.jpg";
import img2 from "@/assets/img/staff2.jpg";
import img3 from "@/assets/img/staff3.jpg";
import img4 from "@/assets/img/staff4.jpg";
import img5 from "@/assets/img/staff1.jpg";

const images = [
  { src: img1, title: "Progressive wing" },
  { src: img2, title: " Primary School" },
  { src: img3, title: "Middle School" },
  { src: img4, title: "Secondary School" },
  { src: img5, title: "Senior High  School" },
];

export default function StaffArea() {
  return (

    <section className="team-area pt-50 mb-100">
      <div className="container">
        {images.map((item, index) => (
          <div key={index} className="mb-10">
            {/* Dynamic Section Title */}
            <div className="row align-items-end mb-4">
              <div className="col-lg-8 col-md-8 text-start">
                <h3 className="tp-section-3-title">
                  Meet Our{" "}
                  <span>
                    {item.title}
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
            </div>

            {/* Full-width Image */}
            <div className="row mb-80">
              <div className="col-12 text-center">
                <Image
                  src={item.src}
                  alt={item.title}
                  className="w-full rounded-lg"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
