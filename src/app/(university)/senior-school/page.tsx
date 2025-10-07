import { Metadata } from "next";
import BreadcrumbTwo from "@/components/breadcrumb/breadcrumb-two";
import AboutTwo from "@/components/about/about-two";

export const metadata: Metadata = {
  title: "senior LFES",
};

export default function UniversityProgramPage() {
  return (
    <main>
      {/* breadcrumb area start */}
      <BreadcrumbTwo
        title="Senior High School Programs"
        subtitle="Senior High School Programs"
      />

      {/* about area start */}
      <AboutTwo spacing="pt-90 pb-90" />
    </main>
  );
}
