import { Metadata } from "next";

import BreadcrumbTwo from "@/components/breadcrumb/breadcrumb-two";
// import Alumini from "@/components/alumini/alumini";
import Image from "next/image";
import { generateMetadata } from "@/lib/seo";

export const metadata: Metadata = generateMetadata({
  title: "Our Alumni",
  description:
    "Join the LFES Alumni Network. Connect with past students, share achievements, and stay part of the Little Flowers English School community. Celebrating alumni success worldwide.",
  keywords: [
    "LFES Alumni",
    "Alumni Network",
    "School Alumni",
    "Graduates",
    "Alumni Community",
  ],
  path: "/alumini",
});

export default function AlumniPage() {
  return (
    <>
      {/* Breadcrumb */}
      <BreadcrumbTwo title="Our Alumni" subtitle="LFES Alumni Community" />

      <section className="pt-120 pb-120">
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
                <h3 className="tp-section-2-title">
                  LFES Alumni <span>Network</span>
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
                  backgroundColor: "#0079C0",
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
      {/* <Alumini /> */}
    </>
  );
}
