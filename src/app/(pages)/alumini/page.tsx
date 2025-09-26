import { Metadata } from "next";

import BreadcrumbTwo from "@/components/breadcrumb/breadcrumb-two";
import Alumini from "@/components/alumini/alumini";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Alumni - LFES",
};

export default function AlumniPage() {
  return (
    <>
      {/* Breadcrumb */}
      <BreadcrumbTwo title="Our Alumni" subtitle="LFES Alumni Community" />

      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-start">
            {/* Image on left */}
            <div className="col-lg-6 mb-4 mb-lg-0 ">
              <Image
                className=""
                data-wow-duration="1.5s"
                data-wow-delay=".4s"
                src="/assets/img/alumini.png"
                alt="shape-underline"
                width={600}
                height={400}
                style={{ width: "100%", height: "auto" }}
              />
            </div>

            {/* Text on right */}
            <div className="col-lg-6 ">

              <div className="tp-program-4-section mb-30 mt-2 ">
                <h3 className="tp-section-4-title">
                  LFES Alumni{" "}
                  <span>
                    Network
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

              <p className="text-muted lh-lg mb-3">
                LFES alumni are our pride! From graduating students in Eastern
                Nepal to leaders and professionals across the globe, our alumni
                continue to make a mark in every field. This network connects
                past students to celebrate achievements, share experiences, and
                stay part of the LFES family.
              </p>
              <p className="text-muted lh-lg">
                Whether it’s sharing career milestones, contributing to
                community development, or attending alumni events, our LFES
                alumni network fosters lifelong connections and keeps the spirit
                of learning alive.
              </p>
              <p className="text-muted lh-lg">
                Whether it’s sharing career milestones, contributing to
                community development, or attending alumni events, our LFES
                alumni network fosters lifelong connections and keeps the spirit
                of learning alive.
              </p>
              <a
                href="/alumni/register"
                className="btn btn-md text-white shadow"
                style={{
                  backgroundColor: "#AB0C2F",
                  border: "none",
                  borderRadius: "8px",
                  padding: "0.55rem 1.1rem",
                }}
              >
                Join Alumni Network
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* thsi is student alumini */}
      <Alumini />
    </>
  );
}
