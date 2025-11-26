"use client";
import React, { useEffect, useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperOptions } from "swiper/types";
import { NextArrow, PrevArrow } from "../svg";
import { getTestimonials } from "@/lib/sanity-queries";

const swiper_options: SwiperOptions = {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  navigation: {
    nextEl: ".tp-testimonial-next",
    prevEl: ".tp-testimonial-prev",
  },
  autoplay: {
    delay: 2000,
  },
};

type Testimonial = {
  _id: string;
  name: string;
  position: string;
  content: string;
};

export default function TestimonialSliderOne() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTestimonials() {
      try {
        const data = await getTestimonials();
        setTestimonials(data);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
        // Fallback to empty array or default data
        setTestimonials([]);
      } finally {
        setLoading(false);
      }
    }

    fetchTestimonials();
  }, []);

  if (loading) {
    return (
      <div className="text-center py-4">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (!testimonials || testimonials.length === 0) {
    return (
      <div className="text-center py-4">
        <p>No testimonials available at the moment.</p>
      </div>
    );
  }

  // Only enable loop if there are more than 1 testimonials
  const swiperConfig = {
    ...swiper_options,
    loop: testimonials.length > 1 ? swiper_options.loop : false,
  };

  return (
    <>
      <Swiper
        {...swiperConfig}
        modules={[Navigation]}
        className="swiper tp-testimonial-active"
      >
        {testimonials.map((item) => (
          <SwiperSlide key={item._id} className="tp-testimonial-item">
            <div className="">
              <p>{item.content}</p>
            </div>
            <div className="tp-testimonial-avatar-info">
              <h4 className="tp-testimonial-avatar-title">{item.name}</h4>
              <span>{item.position}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="tp-testimonial-arrow text-md-end">
        <div className="tp-testimonial-prev pointer">
          <span>
            <PrevArrow />
          </span>
        </div>
        <div className="tp-testimonial-next pointer">
          <span>
            <NextArrow />
          </span>
        </div>
      </div>
    </>
  );
}
