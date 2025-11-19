import Image from "next/image";
import overview_img_1 from "@/assets/img/lfesimages/Rajesh-Khadka.png";
import overview_img_2 from "@/assets/img/lfesimages/Barun-Khadka.png";


import { CSSProperties } from "react";

const facilities = [
  {
    id: 1,
    title: "Board of Directors",
    description:
      "LITTLE FLOWERS ENGLISH SCHOOL has always been at the forefront of education not only in Eastern Nepal but throughout the country. Our students have excelled in various fi elds nationally and internationally. This has been made possible with the blessings of our elders, visionary members of the school managing committee, supportive parents, and dedicated staff. Since its inception, LFES has always remained committed to providing a kind of education that emphasizes not only gaining knowledge but also focuses on the holistic development of students. The achievement of the prestigious awards mentioned in the pages of our history bear testimony to our commitment to high-quality education. <br/> <br/>  From the academic year 2076, we have implemented the Early Child Education and Care (ECEC) curriculum From Nursery to Grade 2 which will be upgraded till grade 5, remaining within the framework of the National Government Curriculum to ensure the best education befitting the needs. As the traditional system of education is insufficient in this era of change, the focus will be given to Progressive Education till grade 7. <br/> <br/>  Our infrastructure is of an international standard supported by unmatched facilities and a team of professionals to support the creative minds of students. We reiterate our commitment to providing an inspiring environment and every possible facility to ensure the quality education that every student deserves in today’s globalized world. ",
    image: overview_img_1,
    name: "Rajesh Khadka",
    signature: "",
  },
  {
    id: 2,
    title: "Executive Directors",
    description:
      "LITTLE FLOWERS ENGLISH SCHOOL has always been at the forefront of education not only in Eastern Nepal but throughout the country. Our students have excelled in various fi elds nationally and internationally. This has been made possible with the blessings of our elders, visionary members of the school managing committee, supportive parents, and dedicated staff. Since its inception, LFES has always remained committed to providing a kind of education that emphasizes not only gaining knowledge but also focuses on the holistic development of students. The achievement of the prestigious awards mentioned in the pages of our history bear testimony to our commitment to high-quality education. <br/> <br/>  From the academic year 2076, we have implemented the Early Child Education and Care (ECEC) curriculum From Nursery to Grade 2 which will be upgraded till grade 5, remaining within the framework of the National Government Curriculum to ensure the best education befitting the needs. As the traditional system of education is insufficient in this era of change, the focus will be given to Progressive Education till grade 7. <br/> <br/>  Our infrastructure is of an international standard supported by unmatched facilities and a team of professionals to support the creative minds of students. We reiterate our commitment to providing an inspiring environment and every possible facility to ensure the quality education that every student deserves in today’s globalized world. ",
    image: overview_img_2,
    name: "Barun Khadka",
    signature: "",
  },
];
const imgStyle: CSSProperties = {
  height: "auto",
};
export function Message() {
  return (
    <>
      <section className="about-area tp-about-bg pt-20">
        <div className="container">
          {facilities.map((facility, index) => (
            <div className="row align-items-start mb-100" key={facility.id}>
              {/* Image Column */}
              <div
                className={`col-lg-5 mb-4 mb-lg-0 ${
                  index % 2 === 0 ? "order-1 order-lg-1" : "order-1 order-lg-2"
                }`}
              >
                <div
                  className="tp-about-wrap mb-30 wow fadeInLeft h-100"
                  data-wow-delay=".3s"
                >
                  <div className="tp-about-thumb-wrapper">
                    <div className="tp-about-thumb-1">
                      <Image
                        src={facility.image}
                        alt={`${facility.title}-thumb`}
                        style={imgStyle}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Text Column */}
              <div
                className={`col-lg-7 ${
                  index % 2 === 0 ? "order-2 order-lg-2" : "order-2 order-lg-1"
                }`}
              >
                <div
                  className="tp-about-wrapper mb-30 wow fadeInRight h-100"
                  data-wow-delay=".3s"
                >
                  <div className="tp-sectio mb-40">
                    <h5 className="tp-section-subtitle fs-1">
                      {facility.title}
                    </h5>
                    <p
                      className="text-muted lh-lg"
                      style={{ textAlign: "justify" }}
                      dangerouslySetInnerHTML={{ __html: facility.description }}
                    ></p>{" "}
                    <h5 className="tp-section-subtitle">{facility.name}</h5>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
