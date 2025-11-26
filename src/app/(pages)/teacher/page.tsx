import { Metadata } from "next";

import BreadcrumbTwo from "@/components/breadcrumb/breadcrumb-two";
import TeamArea from "@/components/team/team-area";
import React from "react";
import StaffArea from "@/components/staff/staff";

export const metadata: Metadata = {
  title: "Staff & teachers - Lfes",
};
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
