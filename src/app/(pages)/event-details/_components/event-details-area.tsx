import Image from "next/image";
import EventBox from "./event-box";

type EventNotice = {
  _id: string;
  title: string;
  date: string;
  description?: string;
  category: "event" | "notice";
  videoUrl?: string;
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
  const getYoutubeEmbedUrl = (url?: string) => {
    if (!url) return null;
    try {
      const parsed = new URL(url);
      let videoId = parsed.searchParams.get("v");

      if (!videoId && parsed.hostname.includes("youtu.be")) {
        videoId = parsed.pathname.replace("/", "");
      }

      if (!videoId && parsed.pathname.includes("/embed/")) {
        videoId = parsed.pathname.split("/embed/")[1];
      }

      return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
    } catch (error) {
      return null;
    }
  };

  const videoEmbedUrl = getYoutubeEmbedUrl(event.videoUrl);

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
              <div className="tp-event-details-abou mb-4">
                <h2
                  className="mb-3"
                  style={{
                    color: "#0079c0",
                    fontSize: "1.5rem",
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
                    <p className="custom-paragraph">{event.description}</p>
                  </div>
                )}

                {!event.description && (
                  <p
                    className="custom-paragraph"
                    style={{
                      color: "#666",
                    }}
                  >
                    More details about this {event.category} will be available
                    soon.
                  </p>
                )}

                {videoEmbedUrl && (
                  <div className="mt-5">
                    <h4
                      style={{
                        color: "#0079c0",
                        fontWeight: 600,
                        marginBottom: "16px",
                      }}
                    >
                      Event Highlights
                    </h4>
                    <div
                      style={{
                        position: "relative",
                        paddingBottom: "56.25%",
                        height: 0,
                        overflow: "hidden",
                        borderRadius: "12px",
                        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)",
                        backgroundColor: "#000",
                      }}
                    >
                      <iframe
                        src={videoEmbedUrl}
                        title={`${event.title} video`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                          border: 0,
                        }}
                      ></iframe>
                    </div>
                  </div>
                )}
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
