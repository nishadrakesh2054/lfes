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
          <div className="row align-items-center">
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
            <div className="col-lg-6">
              <h2 className="fw-bold mb-3">
                Welcome to the LFES Alumni Network
              </h2>
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
