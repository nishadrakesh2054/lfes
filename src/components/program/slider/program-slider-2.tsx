"use client";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { SwiperOptions } from "swiper/types";
import { high_school_program_data } from "@/data/program-data";
import { RightArrowFive } from "@/components/svg";

const slider_options: SwiperOptions = {
  slidesPerView: 4,
  spaceBetween: 10,
  loop: true,
  autoplay: {
    delay: 5000,
  },
  navigation: {
    nextEl: ".tp-program-4-next",
    prevEl: ".tp-program-4-prev",
  },
  breakpoints: {
    "1200": {
      slidesPerView: 4,
    },
    "992": {
      slidesPerView: 3,
    },
    "768": {
      slidesPerView: 2,
    },
    "576": {
      slidesPerView: 2,
    },
    "0": {
      slidesPerView: 1,
    },
  },
};

export default function ProgramSliderTwo() {
  return (
    <div className="swiper wow fadeInUp" data-wow-delay=".3s">
      <Swiper
        {...slider_options}
        modules={[Navigation]}
        className="tp-program-4-active"
      >
        {high_school_program_data.map((item) => (
          <SwiperSlide key={item.id} className="tp-program-4-item">
            <div className="tp-program-4-thumb">
              <Image
                src={item.img}
                alt={item.title}
                width={936}
                height={1086}
                sizes="(max-width: 576px) 100vw, (max-width: 768px) 50vw, (max-width: 992px) 33vw, (max-width: 1200px) 25vw, 468px"
                style={{ height: "auto", width: "100%", objectFit: "cover" }}
                quality={100}
                priority={item.id <= 4}
                unoptimized={false}
              />
            </div>
            <div className="tp-program-4-content">
              <h3 className="tp-program-4-title">
                <Link href={item.link}>{item.title}</Link>
              </h3>
              <div className="tp-program-4-btn">
                <Link href={item.link}>
                  <span>
                    <RightArrowFive />
                  </span>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
