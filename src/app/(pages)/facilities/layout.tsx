import { Metadata } from "next";
import { generateMetadata } from "@/lib/seo";

export const metadata: Metadata = generateMetadata({
  title: "School Facilities",
  description:
    "Explore world-class facilities at Little Flowers English School (LFES) including science laboratories, library, sports complex, computer labs, auditorium, and more in Birtamod, Jhapa.",
  keywords: [
    "LFES Facilities",
    "School Facilities",
    "Science Labs",
    "Library",
    "Sports Complex",
    "Computer Labs",
    "Auditorium",
  ],
  path: "/facilities",
});

export default function FacilitiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
