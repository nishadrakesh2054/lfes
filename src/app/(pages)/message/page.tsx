import { Metadata } from "next";
import BreadcrumbTwo from "@/components/breadcrumb/breadcrumb-two";
import { Message } from "@/components/admission/admission-area";
import { generateMetadata } from "@/lib/seo";

export const metadata: Metadata = generateMetadata({
  title: "Director's Message",
  description:
    "Read the message from the Board of Directors and Executive Directors of Little Flowers English School (LFES). Learn about our vision, mission, and commitment to quality education.",
  keywords: [
    "LFES Directors",
    "School Leadership",
    "Board Members",
    "School Message",
    "Leadership Message",
  ],
  path: "/message",
});

export default function UniversityAdmissionOverviewPage() {
  return (
    <main>
      {/* breadcrumb area start */}
      <BreadcrumbTwo title="Director's Message" subtitle="Board Members" />
      {/* breadcrumb area end */}

      {/* admission apply area start */}
      <Message />
      {/* admission apply area end */}
    </main>
  );
}
