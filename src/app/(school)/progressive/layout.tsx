import { Metadata } from "next";
import { generateMetadata } from "@/lib/seo";

export const metadata: Metadata = generateMetadata({
  title: "Progressive Wing",
  description:
    "Discover our Progressive Wing special education program at Little Flowers English School (LFES). Providing inclusive education and specialized support for all students.",
  keywords: [
    "LFES Progressive Wing",
    "Special Education",
    "Inclusive Education",
    "Special Needs Education",
    "Progressive Education",
  ],
  path: "/progressive",
});

export default function ProgressiveLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
