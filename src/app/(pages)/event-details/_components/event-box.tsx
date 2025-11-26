import SocialLinks from "@/components/social/social-links";
import { CalenderTwoSvg } from "@/components/svg";

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

export default function EventBox({ event }: IProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatShortDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="tp-event-details-box">
      <div className="tp-event-details-details">
        <h4 className="tp-event-details-box-title">
          {event.category === "event" ? "Event" : "Notice"} Details
        </h4>
        <div className="tp-event-details-list d-flex align-items-center justify-content-between">
          <h5>
            <span>
              <CalenderTwoSvg />
            </span>{" "}
            Date
          </h5>
          <span style={{ textAlign: "right", fontSize: "0.9rem" }}>
            {formatShortDate(event.date)}
          </span>
        </div>
        <div className="tp-event-details-list d-flex align-items-center justify-content-between">
          <h5>
            <span>
              <CalenderTwoSvg />
            </span>{" "}
            Full Date
          </h5>
          <span style={{ textAlign: "right", fontSize: "0.85rem" }}>
            {formatDate(event.date)}
          </span>
        </div>
        <div className="tp-event-details-list d-flex align-items-center justify-content-between">
          <h5>
            <span>
              <CalenderTwoSvg />
            </span>{" "}
            Type
          </h5>
          <span
            style={{
              textTransform: "capitalize",
              fontWeight: 600,
              color: event.category === "event" ? "#0079c0" : "#28a745",
            }}
          >
            {event.category}
          </span>
        </div>
      </div>
      <div className="tp-event-details-ticket">
        <div className="tp-event-details-social text-center">
          <SocialLinks />
        </div>
      </div>
    </div>
  );
}
