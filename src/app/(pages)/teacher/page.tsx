import { Metadata } from "next";

import BreadcrumbTwo from "@/components/breadcrumb/breadcrumb-two";
import TeamArea from "@/components/team/team-area";
import React from "react";
import StaffArea from "@/components/staff/staff";
import { generateMetadata } from "@/lib/seo";

export const metadata: Metadata = generateMetadata({
  title: "Our Teachers",
  description:
    "Meet our dedicated and experienced teaching staff at Little Flowers English School (LFES). Our educators are committed to providing quality education and nurturing student growth.",
  keywords: [
    "LFES Teachers",
    "School Staff",
    "Educators",
    "Teaching Faculty",
    "Qualified Teachers",
  ],
  path: "/teacher",
});
const page = () => {
  return (
    <>
      <BreadcrumbTwo title="Our Teachers" subtitle="Meet Our Educators" />

      {/* group pic */}
      <TeamArea />
      <StaffArea />
    </>
  );
};

export default page;
