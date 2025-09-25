import { Metadata } from "next";
import FaqArea from "@/components/faq/faq-area";
import BreadcrumbTwo from "@/components/breadcrumb/breadcrumb-two";

export const metadata: Metadata = {
  title: "FAQ - Lfes",
};

export default function FaqPage() {
  return (
    <main>
      <BreadcrumbTwo title="Faq Page" subtitle="Faq Page" />

      {/* breadcrumb area end */}

      {/* faq area start */}
      <FaqArea />
      {/* faq area end */}
    </main>
  );
}
