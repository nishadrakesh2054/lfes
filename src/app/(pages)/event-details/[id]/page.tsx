import { all_events } from "@/data/event-data";
import EventBreadcrumb from "../_components/event-breadcrumb";
import EventDetailsArea from "../_components/event-details-area";
import { generateMetadata as genMeta } from "@/lib/seo";
import { Metadata } from "next";

type Props = {
  params: { id: string };
};

export function generateMetadata({ params }: Props): Metadata {
  const id = params.id;
  const event = all_events.find((item) => item.id == Number(id));

  if (!event) {
    return genMeta({
      title: "Event Not Found",
      description: "The requested event could not be found.",
      path: `/event-details/${id}`,
      noIndex: true,
    });
  }

  return genMeta({
    title: event.title || "School Event",
    description: `Join us for ${
      event.title
    } at Little Flowers English School (LFES). ${
      event.time ? `Event time: ${event.time}.` : ""
    } ${event.location ? `Location: ${event.location}.` : ""}`,
    keywords: ["LFES Events", "School Events", event.title || ""],
    path: `/event-details/${id}`,
    image: event.image,
  });
}

export default function EventDetailsPage({ params }: Props) {
  const event = all_events.find((item) => item.id == Number(params.id));
  return (
    <main>
      {event ? (
        <>
          {/* breadcrumb area start */}
          <EventBreadcrumb event={event} />
          {/* breadcrumb area end */}

          {/* event details area start */}
          <EventDetailsArea event={event} />
          {/* event details area end */}
        </>
      ) : (
        <div className="text-center mt-100 mb-80">
          No Event found with id: {params.id}
        </div>
      )}
    </main>
  );
}
