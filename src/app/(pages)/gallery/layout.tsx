import { Metadata } from "next";
import { generateMetadata } from "@/lib/seo";

export const metadata: Metadata = generateMetadata({
  title: "Gallery",
  description:
    "Explore our photo gallery showcasing school events, activities, facilities, and memorable moments at Little Flowers English School (LFES) in Birtamod, Jhapa.",
  keywords: [
    "LFES Gallery",
    "School Photos",
    "Event Photos",
    "School Activities",
    "LFES Images",
  ],
  path: "/gallery",
});

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
