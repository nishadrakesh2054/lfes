// import AboutTwo from "@/components/about/about-two";
import BreadcrumbTwo from "@/components/breadcrumb/breadcrumb-two";
// import GalleryOne from "@/components/gallery/gallery-one";
import HeroAreaThree from "@/components/hero-area/hero-area-three";
import ProcessOne from "@/components/process/process-one";
import ServiceTwo from "@/components/service/service-two";
import SubjectArea from "@/components/subject/subject-area";
import React from "react";

const page = () => {
  return (
    <>
      <main>
        {/* breadcrumb area start */}
        <BreadcrumbTwo
          title="KIndergarten Programs"
          subtitle="KIndergarten Programs"
        />
        {/* breadcrumb area end */}

        {/* about area start */}
        {/* <AboutTwo spacing="pt-90 pb-90" /> */}
        {/* about area end */}
        {/* hero area start */}
        <HeroAreaThree />
        {/* hero area end */}

        {/* service area start */}
        <ServiceTwo />.
        
        {/* service area end */}

        {/* process area start */}
        <ProcessOne />
        {/* process area end */}

        {/* gallery area start */}
        {/* <GalleryOne /> */}
        {/* gallery area end */}

        {/* subject area start */}
        <SubjectArea />
        {/* subject area end */}
      </main>
    </>
  );
};

export default page;
