import { Metadata } from "next";
import BreadcrumbTwo from "@/components/breadcrumb/breadcrumb-two";
import AboutTwo from "@/components/about/about-two";
import UndergraduateArea from "@/components/undergraduate/undergraduate-area";

export const metadata: Metadata = {
  title: "senior LFES",
};

export default function UniversityProgramPage() {
  return (
    <main>
      {/* breadcrumb area start */}
      <BreadcrumbTwo
        title="Senior School Programs"
        subtitle="Senior School Programs"
      />
      {/* breadcrumb area end */}

      {/* about area start */}
      <AboutTwo spacing="pt-90 pb-90"/>
      {/* about area end */}

      {/* undergraduate area start */}
      <UndergraduateArea/>
      {/* undergraduate area end */}

      

    </main>
  );
}
