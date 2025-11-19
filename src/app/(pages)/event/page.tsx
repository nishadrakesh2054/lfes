import { Metadata } from "next";
import EventAreaFour from "@/components/event/event-area-four";
import BreadcrumbTwo from "@/components/breadcrumb/breadcrumb-two";

export const metadata: Metadata = {
  title: "Event - Lfes",
};

export default function EventPage() {
  return (
    <main>
      <BreadcrumbTwo title="Upcoming Events" subtitle="Upcoming Events" />

      {/* breadcrumb area end */}

      {/* event area start */}
      <EventAreaFour />
      {/* event area end */}
    </main>
  );
}
