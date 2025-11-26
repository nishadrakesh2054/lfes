import Link from "next/link";
import { HomeSvg } from "@/components/svg";

type EventNotice = {
  _id: string;
  title: string;
  date: string;
  description?: string;
  category: "event" | "notice";
  image?: {
    url: string;
    metadata?: {
      dimensions?: {
        width: number;
        height: number;
      };
    };
  };
};

type IProps = {
  event: EventNotice;
};

export default function EventBreadcrumb({ event }: IProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <section
      className="tp-event-details-breadcrumb-bg pb-110 p-relative z-index-1 fix"
      style={{
        backgroundImage: event.image?.url
          ? `url(${event.image.url})`
          : "url(/assets/img/event/event/event-details-bg.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 1,
        }}
      ></div>
      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div className="row align-items-center">
          <div className="col-sm-12">
            <div className="tp-breadcrumb__list tp-event-details-breadcrumb-list pb-120">
              <span>
                <Link href="/">
                  <HomeSvg />
                </Link>
              </span>
              <span>{event.category === "event" ? "Event" : "Notice"}</span>
              <span>{event.title}</span>
            </div>
            <div className="tp-event-details-breadcrumb-content">
              <span className="tp-event-details-breadcrumb-subtitle">
                {event.category === "event"
                  ? "Upcoming Event"
                  : "Important Notice"}
              </span>
              <h4 className="tp-event-details-breadcrumb-title">
                {event.title}
              </h4>
              <p style={{ color: "#fff", marginTop: "10px" }}>
                {formatDate(event.date)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
