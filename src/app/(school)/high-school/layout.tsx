import { Metadata } from "next";
import { generateMetadata } from "@/lib/seo";

export const metadata: Metadata = generateMetadata({
  title: "High School",
  description:
    "Discover our High School program at Little Flowers English School (LFES). Building future-ready, thoughtful global citizens with comprehensive curriculum, ICT skills, and modern pedagogy.",
  keywords: [
    "LFES High School",
    "High School Education",
    "Secondary Education",
    "High School Nepal",
    "Global Citizens",
  ],
  path: "/high-school",
});

export default function HighSchoolLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
