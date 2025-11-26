import { Metadata } from "next";
import TutorArea from "@/components/tutor/tutor-area";
import CounterSix from "@/components/counter/counter-six";

import BreadcrumbTwo from "@/components/breadcrumb/breadcrumb-two";
import CampusChooseAreaThree from "@/components/campus/campus-choose-area-3";

export const metadata: Metadata = {
  title: "About - Lfes",
};

export default function AboutPage() {
  return (
    <main>
      <BreadcrumbTwo title="About Us" subtitle="Learn About LFES" />

      {/* tutor area start */}
      <TutorArea />
      {/* tutor area end */}

      {/* counter area start */}
      <CounterSix />
      {/* counter area end */}

      <CampusChooseAreaThree />

      {/* brand area end */}
    </main>
  );
}
