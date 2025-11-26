import { Metadata } from "next";
import TutorArea from "@/components/tutor/tutor-area";
import CounterSix from "@/components/counter/counter-six";

import BreadcrumbTwo from "@/components/breadcrumb/breadcrumb-two";
import CampusChooseAreaThree from "@/components/campus/campus-choose-area-3";
import { generateMetadata } from "@/lib/seo";

export const metadata: Metadata = generateMetadata({
  title: "About Us",
  description:
    "Learn about Little Flowers English School (LFES) - Our mission, vision, values, and commitment to providing quality education in Birtamod, Jhapa, Nepal.",
  keywords: [
    "About LFES",
    "School History",
    "Mission Vision",
    "LFES Values",
    "Education Philosophy",
  ],
  path: "/about",
});

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
