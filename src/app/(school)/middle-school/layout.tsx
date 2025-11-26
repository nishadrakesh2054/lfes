import { Metadata } from "next";
import { generateMetadata } from "@/lib/seo";

export const metadata: Metadata = generateMetadata({
  title: "Middle School",
  description:
    "Explore our Middle School program at Little Flowers English School (LFES). Guiding transition years with progressive teaching, New Zealand 3Di program, and comprehensive ECA activities.",
  keywords: [
    "LFES Middle School",
    "Middle School Education",
    "Transition Years",
    "Progressive Education",
    "Middle School Nepal",
  ],
  path: "/middle-school",
});

export default function MiddleSchoolLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
