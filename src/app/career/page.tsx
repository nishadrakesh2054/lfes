import React from "react";
import { Metadata } from "next";

import BreadcrumbTwo from "@/components/breadcrumb/breadcrumb-two";

export const metadata: Metadata = {
  title: "Career - LFES",
};

const CareerPage = () => {
  return (
    <>
      <main>
        <BreadcrumbTwo title="Career" subtitle="Explore Your Opportunities" />
      </main>
    </>
  );
};

export default CareerPage;
