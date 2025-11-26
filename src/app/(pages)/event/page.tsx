import { Metadata } from "next";
import EventAreaFour from "@/components/event/event-area-four";
import BreadcrumbTwo from "@/components/breadcrumb/breadcrumb-two";
import { generateMetadata } from "@/lib/seo";

export const metadata: Metadata = generateMetadata({
  title: "School Events",
  description:
    "Discover upcoming and past events at Little Flowers English School (LFES). Join us for cultural programs, sports events, academic competitions, and more.",
  keywords: [
    "LFES Events",
    "School Events",
    "Cultural Programs",
    "Sports Events",
    "Academic Competitions",
  ],
  path: "/event",
});

export default function EventPage() {
  return (
    <main>
      <BreadcrumbTwo title="School Events" subtitle="Upcoming & Past Events" />

      {/* breadcrumb area end */}

      {/* event area start */}
      <EventAreaFour />
      {/* event area end */}
    </main>
  );
}
