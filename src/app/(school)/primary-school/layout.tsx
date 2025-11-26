import { Metadata } from "next";
import { generateMetadata } from "@/lib/seo";

export const metadata: Metadata = generateMetadata({
  title: "Primary School",
  description:
    "Discover our Primary School program at Little Flowers English School (LFES). Nurturing curious minds with holistic education, creative arts, sports, and technology integration in Birtamod, Jhapa.",
  keywords: [
    "LFES Primary School",
    "Primary Education",
    "Early Years Education",
    "Elementary School Nepal",
    "Primary School Birtamod",
  ],
  path: "/primary-school",
});

export default function PrimarySchoolLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
