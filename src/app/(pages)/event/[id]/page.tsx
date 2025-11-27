import EventDetailsArea from "../../event-details/_components/event-details-area";
import { generateMetadata as genMeta } from "@/lib/seo";
import { Metadata } from "next";
import { getEventNoticeById } from "@/lib/sanity-queries";
import { notFound } from "next/navigation";
import BreadcrumbTwo from "@/components/breadcrumb/breadcrumb-two";

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = params.id;
  const event = await getEventNoticeById(id);

  if (!event) {
    return genMeta({
      title: "Event Not Found",
      description: "The requested event could not be found.",
      path: `/event/${id}`,
      noIndex: true,
    });
  }

  return genMeta({
    title: event.title || "School Event",
    description:
      event.description ||
      `Join us for ${event.title} at Little Flowers English School (LFES).`,
    keywords: [
      "LFES Events",
      "School Events",
      event.title || "",
      event.category || "",
    ],
    path: `/event/${id}`,
    image: event.image?.url,
  });
}

export default async function EventDetailsPage({ params }: Props) {
  const event = await getEventNoticeById(params.id);

  if (!event) {
    notFound();
  }

  return (
    <main>
  
      {/* breadcrumb area end */}
      <BreadcrumbTwo title={"School Event Details"} subtitle="Event Details" />

      {/* event details area start */}
      <EventDetailsArea event={event} />
      {/* event details area end */}
    </main>
  );
}
