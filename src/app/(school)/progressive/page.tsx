import BreadcrumbTwo from "@/components/breadcrumb/breadcrumb-two";
import ECAgallery from "@/components/gallery/eca-gallery";
// import GalleryOne from "@/components/gallery/gallery-one";
import ProcessOne from "@/components/process/process-one";
import ServiceTwo from "@/components/service/service-two";
import React from "react";

const page = () => {
  return (
    <>
      <main>
        {/* breadcrumb area start */}
        <BreadcrumbTwo
          title="Progressive Wing"
          subtitle="Special Education Program"
        />
        {/* breadcrumb area end */}

        {/* service area start */}
        <ServiceTwo />

        {/* service area end */}

        <section className="pt-80 pb-120">
          <div className="container">
            <div className="text-start pb-40">
              <h3 className="tp-section-2-title ">
                Everyday Moments at <br />
                <span>LFES Progressive</span>
              </h3>
              <p className="lead wow fadeInUp" data-wow-delay=".4s">
                Capturing precious moments of learning and growth at LFES
                Progressive.
              </p>
            </div>

            <ECAgallery categories={["progressive-wing"]} />
          </div>
        </section>

        {/* process area start */}
        <ProcessOne />
        {/* process area end */}
      </main>
    </>
  );
};

export default page;
