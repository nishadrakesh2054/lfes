import { Metadata } from "next";

import BreadcrumbTwo from "@/components/breadcrumb/breadcrumb-two";

export const metadata: Metadata = {
  title: "Gallery - Lfes",
};

export default function GalleryPage() {
  return (
    <main>
      <BreadcrumbTwo title="Gallery" subtitle="Our Moments & Memories" />
    </main>
  );
}
