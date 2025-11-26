import { Metadata } from "next";
import BreadcrumbTwo from "@/components/breadcrumb/breadcrumb-two";
import { generateMetadata } from "@/lib/seo";
import EventListArea from "@/components/event/event-list-area";

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
      <EventListArea />
    </main>
  );
}
