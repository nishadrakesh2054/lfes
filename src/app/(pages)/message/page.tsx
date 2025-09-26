import { Metadata } from "next";
import BreadcrumbTwo from "@/components/breadcrumb/breadcrumb-two";
import { Message } from "@/components/admission/admission-area";

export const metadata: Metadata = {
  title: "LFES- MESSAGE",
};




export default function UniversityAdmissionOverviewPage() {
  return (
    <main>
      {/* breadcrumb area start */}
      <BreadcrumbTwo title="MESSAGE" subtitle="Director Message" />
      {/* breadcrumb area end */}

      {/* admission apply area start */}
      <Message />
      {/* admission apply area end */}
    </main>
  );
}
