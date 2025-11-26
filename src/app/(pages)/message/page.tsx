import { Metadata } from "next";
import BreadcrumbTwo from "@/components/breadcrumb/breadcrumb-two";
import { Message } from "@/components/admission/admission-area";

export const metadata: Metadata = {
  title: "Director's Message | Little Flowers English School (LFES)",
};

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
