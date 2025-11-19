"use client";
import Link from "next/link";
import React from "react";
import { EffectFade, Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperOptions } from "swiper/types";
import { RightArrow } from "../svg";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const heroSliderData = [
  {
    id: 2,
    subtitle: "Where Knowledge Meets Values",
    title: "Learning with Purpose Always.",
    bgImg: "/assets/img/hero/home-3.png",
  },
  {
    id: 1,
    subtitle: "Beyond Books and Classrooms",
    title: "Shaping Leaders for Tomorrow.",
    bgImg: "/assets/img/hero/home-2.png",
  },

  {
    id: 3,
    subtitle: "Celebrating 45+ Years of Excellence",
    title: "Bright Minds Shape Futures.",
    bgImg: "/assets/img/hero/home-1.png",
  },
];

const slider_options: SwiperOptions = {
  slidesPerView: 1,
  effect: "fade",
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  fadeEffect: {
    crossFade: true,
  },
};

export default function HeroAreaOne() {
  return (
    <section className="tp-hero-area">
      <Swiper
        {...slider_options}
        modules={[EffectFade, Autoplay, Pagination]}
        className="swiper tp-slider-active"
      >
        {heroSliderData.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="tp-hero-item ">
              <div className="container">
                <div className="row">
                  <div className="col-xxl-9 col-lg-12">
                    <div className="tp-hero-wrapper">
                      <span className="tp-hero-subtitle">{item.subtitle}</span>

                      <h2
                        className="tp-hero-title"
                        style={{
                          fontSize: "clamp(42px, 5.5vw, 72px)",
                          fontWeight: "700",
                          lineHeight: "1.15",
                          color: "#fff",
                          textShadow:
                            "2px 2px 8px rgba(0, 0, 0, 0.5), 0 0 20px rgba(0, 121, 192, 0.3)",
                          marginBottom: "45px",
                          letterSpacing: "-1px",
                        }}
                      >
                        {item.title}
                      </h2>

                      <div className="tp-hero-btn">
                        <Link className="tp-btn" href="/university-program">
                          Get Admission
                          <span>
                            <RightArrow />
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tp-hero-bg"
                style={{
                  backgroundImage: `url(${item.bgImg})`,
                }}
              ></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
