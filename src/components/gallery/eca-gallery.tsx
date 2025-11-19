"use client";
import React from "react";
import Image from "next/image";

// Import your local images (replace with your own)
import img1 from "@/assets/img/eca/a.jpg";
import img2 from "@/assets/img/eca/b.jpeg";
import img3 from "@/assets/img/eca/c.jpg";
import img4 from "@/assets/img/eca/d.jpg";
import img5 from "@/assets/img/eca/a.jpg";
import img6 from "@/assets/img/eca/c.jpg";

const images = [
  { src: img1, height: "250px" },
  { src: img2, height: "320px" },
  { src: img3, height: "200px" },
  { src: img4, height: "280px" },
  { src: img5, height: "230px" },
  { src: img6, height: "300px" },
];

const ECAgallery = () => {
  return (
    <div className="container">
      <div className="row g-3">
        {images.map((item, index) => (
          <div
            key={index}
            className={`col-12 col-sm-6 col-lg-4`}
            style={{ display: "flex", alignItems: "stretch" }}
          >
            <div className="w-100 gallery-item position-relative overflow-hidden rounded-4 shadow-sm">
              <Image
                src={item.src}
                alt={`ECA ${index + 1}`}
                className="w-100 h-100 object-fit-cover gallery-img"
                style={{ height: item.height }}
                placeholder="blur"
              />
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .gallery-item {
          transition: transform 0.4s ease, box-shadow 0.3s ease;
        }
        .gallery-item:hover {
          transform: scale(1.02);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
        }
        @media (max-width: 576px) {
          .gallery-img {
            height: 220px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default ECAgallery;
