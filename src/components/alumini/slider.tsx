"use client";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { alumini } from "@/data/team-data";

const slider_options = {
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 5000,
  },
  navigation: {
    nextEl: ".tp-team-2-next",
    prevEl: ".tp-team-2-prev",
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

export default function AluminiSlider() {
  return (
    <Swiper
      {...slider_options}
      modules={[Navigation]}
      className="swiper tp-team-2-active wow fadeInUp"
      data-wow-delay=".5s"
    >
      {alumini.map((item) => (
        <SwiperSlide key={item.id}>
          <div className="tp-team-2-item border bg-danger">
            <div className={`tp-team-2-b  `}></div>

            <div className="tp-team-2-thumb ">
              <Image
                src={item.image}
                alt={item.name}
                width={250}
                height={372}
              />
            </div>

            <div className="tp-team-2-content  border mt-5">
              <h4 className="tp-team-2-title ">
                <Link href="/my-profile">{item.name}</Link>
              </h4>
              <span>{item.desc}</span>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
