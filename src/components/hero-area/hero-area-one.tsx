// 'use client';
// import Link from "next/link";
// import React from "react";
// import { EffectFade } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { SwiperOptions } from "swiper/types";
// import { RightArrow } from "../svg";

// //
// const heroSliderData = [
//   {
//     id: 1,
//     subtitle: "Celebrating 40+ Years of Excellence",
//     title: " Bright Minds,  Brighter Futures.",
//     bgImg: "/assets/img/bg.jpeg",
//   },
//   {
//     id: 2,
//     subtitle: "Where Knowledge Meets Values",
//     title: "Learning with Purpose.",
//     bgImg: "/assets/img/hero/hero-bg-2.jpg",
//   },
//   {
//     id: 3,
//     subtitle: "Beyond Academics",
//     title: "Leaders for Tomorrow.",
//     bgImg: "/assets/img/hero/hero-bg-3.jpg",
//   },
// ];

// const slider_options: SwiperOptions = {
//   slidesPerView: 1,
//   effect: "fade",
//   autoplay: {
//     delay: 2000,
//   },
//   pagination: {
//     el: ".tp-program-dot",
//     clickable: true,
//   },
// };

// export default function HeroAreaOne() {
//   return (
//     <section className="tp-hero-area">
//       <Swiper {...slider_options} modules={[EffectFade]} className="swiper tp-slider-active">
//         {heroSliderData.map((item) => (
//           <SwiperSlide key={item.id}>
//             <div className="tp-hero-item">
//               <div className="container">
//                 <div className="row">
//                   <div className="col-xxl-9 col-lg-11">
//                     <div className="tp-hero-wrapper">
//                       <span className="tp-hero-subtitle">
//                         {item.subtitle}
//                       </span>
//                       <h2 className="tp-hero-title">
//                         {item.title}
//                       </h2>
//                       <div className="tp-hero-btn">
//                         <Link className="tp-btn" href="/university-program">
//                         Get Admission
//                           <span>
//                             <RightArrow/>
//                           </span>
//                         </Link>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div
//                 className="tp-hero-bg"
//                 style={{ backgroundImage: `url(${item.bgImg})` }}
//               ></div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </section>
//   );
// }

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
    id: 1,
    subtitle: "Celebrating 40+ Years of Excellence",
    title: "Bright Minds, Brighter Futures.",
    bgImg: "/assets/img/bg.jpeg",
  },
  {
    id: 2,
    subtitle: "Where Knowledge Meets Values",
    title: "Learning with Purpose.",
    bgImg: "/assets/img/hero/hero1.jpeg",
  },
  {
    id: 3,
    subtitle: "Beyond Books and Classrooms",
    title: "Leaders for Tomorrow.",
    bgImg: "/assets/img/hero/hero3.jpeg",
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
            <div className="tp-hero-item">
              <div className="container">
                <div className="row">
                  <div className="col-xxl-9 col-lg-11">
                    <div className="tp-hero-wrapper">
                      <span className="tp-hero-subtitle">{item.subtitle}</span>
                      {/* <h2 className="tp-hero-title  border">{item.title}</h2> */}
                      <h2
                        className=" "
                        style={{
                        //   fontSize: "67px", 
                           fontSize: "clamp(48px, 6vw, 67px)",
                          fontWeight: "700", 
                          lineHeight: "1.2", 
                          color: "#fff", 
                          textShadow: "2px 2px 2px #0079C0",
                          marginBottom: "55px", 
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
                style={{ backgroundImage: `url(${item.bgImg})` }}
              ></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* <div className="tp-program-dot"></div> */}
    </section>
  );
}
