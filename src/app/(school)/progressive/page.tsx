import BreadcrumbTwo from "@/components/breadcrumb/breadcrumb-two";
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

        {/* process area start */}
        <ProcessOne />
        {/* process area end */}
      </main>
    </>
  );
};

export default page;
