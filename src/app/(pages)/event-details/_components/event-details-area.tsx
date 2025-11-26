import Image from "next/image";
import EventBox from "./event-box";

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

export default function EventDetailsArea({ event }: IProps) {
  return (
    <section className="tp-event-details-area pt-80 pb-70">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="tp-event-details-wrapper">
              {/* Event Image */}
              {event.image?.url && (
                <div
                  className="mb-4"
                  style={{ borderRadius: "12px", overflow: "hidden" }}
                >
                  <Image
                    src={event.image.url}
                    alt={event.title}
                    width={800}
                    height={500}
                    style={{
                      width: "100%",
                      height: "auto",
                      objectFit: "cover",
                    }}
                    className="img-fluid"
                  />
                </div>
              )}

              {/* Event Title */}
              <div className="tp-event-details-about mb-4">
                <h2
                  className="mb-3"
                  style={{
                    color: "#0079c0",
                    fontSize: "2rem",
                    fontWeight: 700,
                  }}
                >
                  {event.title}
                </h2>

                {/* Event Description */}
                {event.description && (
                  <div
                    className="event-description"
                    style={{
                      fontSize: "1.1rem",
                      lineHeight: "1.8",
                      color: "#555",
                      marginTop: "20px",
                    }}
                  >
                    <p style={{ whiteSpace: "pre-line" }}>
                      {event.description}
                    </p>
                  </div>
                )}

                {!event.description && (
                  <p
                    style={{
                      color: "#666",
                      fontSize: "1rem",
                      lineHeight: "1.6",
                    }}
                  >
                    More details about this {event.category} will be available
                    soon.
                  </p>
                )}
              </div>

              {/* Category Badge */}
              <div className="mb-4">
                <span
                  style={{
                    display: "inline-block",
                    padding: "8px 20px",
                    backgroundColor:
                      event.category === "event" ? "#0079c0" : "#28a745",
                    color: "#fff",
                    borderRadius: "25px",
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    textTransform: "uppercase",
                  }}
                >
                  {event.category === "event" ? "Event" : "Notice"}
                </span>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="col-lg-4">
            <EventBox event={event} />
          </div>
        </div>
      </div>
    </section>
  );
}
