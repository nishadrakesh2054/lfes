import { Metadata } from "next";
import FaqArea from "@/components/faq/faq-area";
import BreadcrumbTwo from "@/components/breadcrumb/breadcrumb-two";
import { generateMetadata } from "@/lib/seo";

export const metadata: Metadata = generateMetadata({
  title: "Frequently Asked Questions",
  description:
    "Find answers to common questions about admissions, academics, facilities, and more at Little Flowers English School (LFES). Get all the information you need.",
  keywords: [
    "LFES FAQ",
    "School Questions",
    "Admission FAQ",
    "School Information",
    "Common Questions",
  ],
  path: "/faq",
});

export default function FaqPage() {
  return (
    <main>
      <BreadcrumbTwo
        title="Frequently Asked Questions"
        subtitle="Get Your Answers"
      />

      {/* breadcrumb area end */}

      {/* faq area start */}
      <FaqArea />
      {/* faq area end */}
    </main>
  );
}
