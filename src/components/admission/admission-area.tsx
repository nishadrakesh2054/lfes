"use client";
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
      <section className="about-area tp-about-bg pt-120 pb-120">
        <div className="container">
          <div className="row g-4 align-items-stretch">
            {facilities.map((facility) => (
              <div key={facility.id} className="col-lg-6">
                <div
                  className="message-card rounded-4 p-4 h-100 bg-white d-flex flex-column"
                  style={{ border: "1px solid rgba(0,121,192,0.12)" }}
                >
                  <div className="message-image position-relative rounded-4 overflow-hidden mb-4">
                    <Image
                      src={facility.image}
                      alt={`${facility.title}-thumb`}
                      style={{ ...imgStyle, width: "100%" }}
                      className="w-100 h-100 object-fit-cover"
                    />
                  </div>
                  <div className="message-content flex-grow-1 d-flex flex-column">
                    <p
                      className="text-uppercase fw-semibold mb-2"
                      style={{ color: "#0079C0", letterSpacing: "0.08em" }}
                    >
                      {facility.title}
                    </p>
                    <h3
                      className="fw-bold mb-3"
                      style={{ color: "#0b1f3a", fontSize: "1.6rem" }}
                    >
                      {facility.name}
                    </h3>
                    <p
                      className="custom-paragraph mb-0"
                      style={{  flexGrow: 1 }}
                      dangerouslySetInnerHTML={{
                        __html: facility.description,
                      }}
                    ></p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <style jsx>{`
        .message-image::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            rgba(0, 121, 192, 0.25),
            rgba(0, 121, 192, 0)
          );
        }
        .message-badge {
          position: absolute;
          top: 1rem;
          left: 1rem;
          background: rgba(255, 255, 255, 0.9);
          color: #0079c0;
          padding: 0.35rem 0.9rem;
          border-radius: 999px;
          font-size: 0.85rem;
          font-weight: 600;
        }
      `}</style>
    </>
  );
}
