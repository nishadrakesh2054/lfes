"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { EffectFade, Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperOptions } from "swiper/types";
import { RightArrow } from "../svg";
// Swiper CSS is imported globally in globals.scss

type HeroSlide = {
  _id?: string;
  title: string;
  subtitle: string;
  image?: {
    url: string;
  };
};

const fallbackSlides: HeroSlide[] = [
  {
    _id: "fallback-1",
    subtitle: "Celebrating 45+ Years of Excellence",
    title: "Bright Minds Shape Futures.",
    image: { url: "/assets/img/hero/home-1.png" },
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

type HeroAreaOneProps = {
  slides?: HeroSlide[];
};

export default function HeroAreaOne({ slides }: HeroAreaOneProps) {
  // Use server-fetched slides or fallback
  const heroSlides = slides && slides.length > 0 ? slides : fallbackSlides;

  return (
    <section className="tp-hero-area">
      <Swiper
        {...slider_options}
        modules={[EffectFade, Autoplay, Pagination]}
        className="swiper tp-slider-active"
      >
        {heroSlides.map((item, index) => (
          <SwiperSlide key={item._id || index}>
            <div className="tp-hero-item ">
              <div className="container">
                <div className="row">
                  <div className="col-xxl-9 col-lg-12">
                    <div className="tp-hero-wrapper hero-content">
                      <span className="hero-kicker">
                        <span className="hero-kicker__dot" />
                        {item.subtitle}
                      </span>

                      <h1 className="hero-headline">{item.title}</h1>

                      <div className="hero-btn">
                        <Link className="" href="/admission">
                          Get Admission &nbsp;
                          <span>
                            <RightArrow />
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tp-hero-bg">
                {item.image?.url && item.image.url.startsWith("http") ? (
                  // Sanity CDN image - optimized for mobile performance
                  <Image
                    src={`${item.image.url}?w=1920&q=75&auto=format`}
                    alt={item.title}
                    fill
                    priority={index === 0}
                    quality={75}
                    sizes="100vw"
                    style={{ objectFit: "cover" }}
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                ) : (
                  // Local image - use Next.js Image optimization
                  <Image
                    src={item.image?.url || "/assets/img/hero/home-1.png"}
                    alt={item.title}
                    fill
                    priority={index === 0}
                    quality={80}
                    sizes="100vw"
                    style={{ objectFit: "cover" }}
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                )}
                <div className="tp-hero-overlay"></div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <style jsx>{`
        .tp-hero-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
        }
        .tp-hero-bg :global(img) {
          object-fit: cover;
        }
        .tp-hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.4) 0%,
            rgba(0, 0, 0, 0.2) 50%,
            rgba(0, 0, 0, 0) 100%
          );
          z-index: 1;
        }
        .hero-content {
          max-width: 720px;
          padding: 3rem 0;
        }
        .hero-kicker {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.2rem 0.9rem;
          border-radius: 999px;
          font-size: clamp(0.68rem, 1.4vw, 0.88rem);
          text-transform: uppercase;
          letter-spacing: 0.25em;
          color: #fefefe;
          background-color: rgba(0, 0, 0, 0.35);
          backdrop-filter: blur(6px);
          margin-bottom: 1.5rem;
        }
        .hero-kicker__dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: linear-gradient(135deg, #f8b500, #ff6b6b);
        }
        .hero-headline {
          font-size: clamp(2.2rem, 4.5vw, 3.6rem);
          font-weight: 600;
          line-height: 1.1;
          color: #ffffff;
          text-shadow: 0 8px 30px rgba(0, 0, 0, 0.65);
          letter-spacing: -0.03em;
          margin-bottom: 2.5rem;
        }
        .hero-actions {
          display: flex;
          align-items: center;
          gap: 1.25rem;
        }
        .hero-btn {
          background-color: #0079c0;
          color: #fff;
          border-radius: 20px;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 14px;
          font-weight: 500;
          display: inline-block;
          padding: 8px 18px;
          border-radius: 20px;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .hero-btn:hover {
          background-color: #005f94;
        }

        @media (max-width: 576px) {
          .hero-actions {
            flex-direction: column;
            align-items: flex-start;
          }
          .hero-btn {
            width: auto;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}
