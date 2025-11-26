import { Metadata } from "next";
import BreadcrumbTwo from "@/components/breadcrumb/breadcrumb-two";
import AboutTwo from "@/components/about/about-two";
import { generateMetadata } from "@/lib/seo";

export const metadata: Metadata = generateMetadata({
  title: "Senior High School",
  description:
    "Learn about our Senior High School program at Little Flowers English School (LFES). Advanced programs preparing students for higher education and future careers.",
  keywords: [
    "LFES Senior High School",
    "Senior High Education",
    "Advanced Programs",
    "Higher Education Preparation",
    "Senior High Nepal",
  ],
  path: "/senior-high-school",
});

export default function UniversityProgramPage() {
  return (
    <main>
      {/* breadcrumb area start */}
      <BreadcrumbTwo title="Senior High School" subtitle="Advanced Programs" />

      {/* about area start */}
      <AboutTwo spacing="pt-90 pb-90" />
    </main>
  );
}
