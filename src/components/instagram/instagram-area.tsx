"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperOptions } from "swiper/types";
import shape from "@/assets/img/instagram/instagram-shape.svg";

const instagramData = [
  {
    id: 1,
    link: "https://www.instagram.com",
    src: "/assets/img/lfesimages/journey1.png",
  },
  {
    id: 2,
    link: "https://www.instagram.com",
    src: "/assets/img/lfesimages/journey2.png",
  },
  {
    id: 3,
    link: "https://www.instagram.com",
    src: "/assets/img/lfesimages/journey3.png",
  },
  {
    id: 4,
    link: "https://www.instagram.com",
    src: "/assets/img/lfesimages/journey4.png",
  },
  {
    id: 5,
    link: "https://www.instagram.com",
    src: "/assets/img/lfesimages/journey5.png",
  },
  {
    id: 6,
    link: "https://www.instagram.com",
    src: "/assets/img/lfesimages/journey1.png",
  },
];

// swiper options
const swiper_options: SwiperOptions = {
  slidesPerView: 5,
  spaceBetween: 10,
  freeMode: false,
  loop: true,
  autoplay: {
    delay: 3500,
  },
  breakpoints: {
    "1200": {
      slidesPerView: 5,
    },
    "992": {
      slidesPerView: 4,
    },
    "768": {
      slidesPerView: 3,
    },
    "576": {
      slidesPerView: 2,
    },
    "0": {
      slidesPerView: 2,
    },
  },
};

export default function InstagramArea() {
  return (
    <>
      <div className="instagram-area tp-instagram-wrapper  pb-200 pt-200">
        <div className="col-xl-10 col-md-10 container">
          <div className="tp-program-4-section mb-60">
            <span className="tp-section-subtitle text-uppercase">
              Snapshots of Our Growth
            </span>
            <h3 className="tp-section-4-title">
              Capturing Our{" "}
              <span>
                Journey
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="170"
                  height="12"
                  viewBox="0 0 170 12"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M163.543 11.6881C91.7847 -3.61174 28.9468 5.36254 6.918 11.5745C5.00947 12.1127 2.30014 11.9681 0.866555 11.2516C-0.567032 10.5352 -0.182011 9.51803 1.72652 8.97984C26.0126 2.13138 92.5575 -7.17892 167.812 8.86629C169.887 9.30883 170.614 10.2993 169.435 11.0785C168.257 11.8577 165.618 12.1306 163.543 11.6881Z"
                    fill="#161613"
                  />
                </svg>
              </span>
            </h3>
          </div>
        </div>

        <Swiper
          {...swiper_options}
          className="swiper tp-instagram-active wow fadeInUp"
          data-wow-delay=".2s"
        >
          {instagramData.map((data) => (
            <SwiperSlide key={data.id} className="tp-instagram-item">
              <a className="popup-image" href={data.link} target="_blank">
                <Image
                  src={data.src}
                  alt="instagram-thumb"
                  width={373}
                  height={367}
                  style={{ height: "auto" }}
                  loading="lazy"
                  sizes="(max-width: 576px) 50vw, (max-width: 992px) 33vw, 20vw"
                  quality={80}
                />
              </a>
              <div className="tp-instagram-shape">
                <Image src={shape} alt="shape" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
