import Image from "next/image";
import { RightArrow } from "../svg";

// images
import thumb_1 from "@/assets/img/lfesimages/about-our-school02.png";
import thumb_2 from "@/assets/img/lfesimages/about-our-school01.png";

import shape_1 from "@/assets/img/about/about-shape-1.jpg";
import shape_2 from "@/assets/img/about/about-shape-2.jpg";
import icon_1 from "@/assets/img/icon/about/about-icon-1.svg";
import icon_2 from "@/assets/img/icon/about/about-icon-2.svg";
import { CSSProperties } from "react";
import CounterItem from "../counter/counter-item";
import Link from "next/link";

// list data
const about_lists = [
  {
    id: 1,
    icon: icon_1,
    title: "Excellence in Education",
    subtitle: "Delivering quality education <br/> for over four decades",
  },
  {
    id: 2,
    icon: icon_2,
    title: "Trusted by Families",
    subtitle: "A caring environment <br/> where every child matters",
  },
];

const imgStyle: CSSProperties = {
  height: "auto",
};

export default function AboutOne() {
  return (
    <section className="about-area tp-about-bg grey-bg pt-105">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 border rounded-1 ">
            <div
              className="tp-about-wrap mb-60 wow fadeInLeft"
              data-wow-delay=".3s"
            >
              <div className="tp-about-thumb-wrapper">
                <div className="tp-about-thumb-1 rounded">
                  <Image src={thumb_1} alt="about-thumb" style={imgStyle} className="rounded" />
                </div>
                <div className="tp-about-thumb-2">
                  <Image src={thumb_2} alt="about-thumb" style={imgStyle} className="rounded" />
                </div>
              </div>
              <div className="tp-about-shape">
                <div className="tp-about-shape-1">
                  <Image src={shape_1} alt="shape" />
                </div>
                <div className="tp-about-shape-2">
                  <Image src={shape_2} alt="shape" />
                </div>
              </div>
              <div className="tp-about-exprience">
                <div className="tp-about-exprience-text d-flex">
                  <h3 className="tp-about-exprience-count">
                    <CounterItem min={0} max={45} />
                  </h3>
                  <p className="custom-paragraph">
                    Years of <br /> Experience
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div
              className="tp-about-wrapper mb-60 wow fadeInRight"
              data-wow-delay=".3s"
            >
              <div className="tp-section mb-40">
                <h5 className="tp-section-subtitle">About Our School</h5>
                <h3 className="tp-section-title mb-30">
                  Discover the Story <br /> Behind
                  <span> &nbsp; LFES</span>
                </h3>
                <p className="custom-paragraph">
                  {" "}
                  Little Flowers&apos; English School, established in 2038 BS, has
                  been a trusted name in education for over four decades. With a
                  student-centric approach, we provide a balance of academics,
                  discipline, creativity, and life skills—preparing students not
                  only for higher studies but also for meaningful lives.
                </p>
              </div>
              <div className="tp-about-list">
                {about_lists.map((list) => (
                  <div
                    key={list.id}
                    className="tp-about-list-item d-flex align-items-center mb-35"
                  >
                    <div className="tp-about-list-icon">
                      <span>
                        <Image src={list.icon} alt="about-icon" />
                      </span>
                    </div>
                    <div className="tp-about-list-content">
                      <h5 className="tp-about-list-title">{list.title}</h5>
                      <p
                        dangerouslySetInnerHTML={{ __html: list.subtitle }}
                      ></p>
                    </div>
                  </div>
                ))}
                <div className="tp-about-btn pt-10">
                  <Link className="tp-btn tp-btn-sm" href="/about">
                    Read More
                    <span>
                      <RightArrow />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
