import { Metadata } from "next";
import { generateMetadata } from "@/lib/seo";

export const metadata: Metadata = generateMetadata({
  title: "Career Opportunities",
  description:
    "Join the Little Flowers English School (LFES) team. Explore teaching positions, administrative roles, and career opportunities in education at our school in Birtamod, Jhapa, Nepal.",
  keywords: [
    "LFES Careers",
    "Teaching Jobs",
    "School Employment",
    "Education Careers",
    "Job Opportunities",
  ],
  path: "/career",
});

export default function CareerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
