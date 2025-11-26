"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { getEventNotices } from "@/lib/sanity-queries";

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

export default function EventListArea() {
  const [events, setEvents] = useState<EventNotice[]>([]);
  const [notices, setNotices] = useState<EventNotice[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<"all" | "event" | "notice">("all");

  useEffect(() => {
    async function fetchData() {
      try {
        const [eventsData, noticesData] = await Promise.all([
          getEventNotices("event"),
          getEventNotices("notice"),
        ]);
        setEvents(eventsData);
        setNotices(noticesData);
      } catch (error) {
        console.error("Error fetching events and notices:", error);
        setEvents([]);
        setNotices([]);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = date.toLocaleDateString("en-US", { month: "short" });
    const year = date.getFullYear();
    return {
      day,
      month,
      year,
      full: date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    };
  };

  const allItems = [...events, ...notices].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  const displayItems =
    activeTab === "all" ? allItems : activeTab === "event" ? events : notices;

  if (loading) {
    return (
      <section className="pt-120 pb-120">
        <div className="container">
          <div className="text-center py-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="pt-120 pb-120">
      <div className="container">
        {/* Tabs */}
        <div className="row mb-5">
          <div className="col-12">
            <div className="d-flex justify-content-start gap-3 mb-40 flex-wrap">
              <button
                className={`btn ${activeTab === "all" ? "btn-primary" : "btn-outline-primary"}`}
                onClick={() => setActiveTab("all")}
                style={{
                  backgroundColor:
                    activeTab === "all" ? "#0079c0" : "transparent",
                  borderColor: "#0079c0",
                  color: activeTab === "all" ? "#fff" : "#0079c0",
                  borderRadius: "25px",
                  fontWeight: 500,
                }}
              >
                All ({allItems.length})
              </button>
              <button
                className={`btn ${activeTab === "event" ? "btn-primary" : "btn-outline-primary"}`}
                onClick={() => setActiveTab("event")}
                style={{
                  backgroundColor:
                    activeTab === "event" ? "#0079c0" : "transparent",
                  borderColor: "#0079c0",
                  color: activeTab === "event" ? "#fff" : "#0079c0",
             
                  borderRadius: "25px",
                  fontWeight: 500,
                }}
              >
                Events ({events.length})
              </button>
              <button
                className={`btn ${activeTab === "notice" ? "btn-primary" : "btn-outline-primary"}`}
                onClick={() => setActiveTab("notice")}
                style={{
                  backgroundColor:
                    activeTab === "notice" ? "#0079c0" : "transparent",
                  borderColor: "#0079c0",
                  color: activeTab === "notice" ? "#fff" : "#0079c0",
                  borderRadius: "25px",
                  fontWeight: 500,
                }}
              >
                Notices ({notices.length})
              </button>
            </div>
          </div>
        </div>

        {/* Event/Notice Cards */}
        {displayItems.length > 0 ? (
          <div className="row g-4">
            {displayItems.map((item) => {
              const dateInfo = formatDate(item.date);
              return (
                <div key={item._id} className="col-lg-4 col-md-6">
                  <Link
                    href={`/event/${item._id}`}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <div
                      className="event-card h-100"
                      style={{
                        background: "#fff",
                        borderRadius: "12px",
                        overflow: "hidden",
                        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
                        transition: "all 0.3s ease",
                        cursor: "pointer",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      {/* Image */}
                      {item.image?.url ? (
                        <div
                          style={{
                            position: "relative",
                            width: "100%",
                            height: "250px",
                            overflow: "hidden",
                          }}
                        >
                          <Image
                            src={item.image.url}
                            alt={item.title}
                            fill
                            style={{
                              objectFit: "cover",
                            }}
                          />
                       
                        </div>
                      ) : (
                        <div
                          style={{
                            width: "100%",
                            height: "250px",
                            background:
                              "linear-gradient(135deg, #0079c0 0%, #005a8f 100%)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            position: "relative",
                          }}
                        >
                          <div
                            style={{
                              position: "absolute",
                              top: "15px",
                              right: "15px",
                              padding: "6px 15px",
                              backgroundColor: "rgba(255, 255, 255, 0.3)",
                              color: "#fff",
                              borderRadius: "20px",
                              fontSize: "0.75rem",
                              fontWeight: 600,
                              textTransform: "uppercase",
                            }}
                          >
                            {item.category}
                          </div>
                          <div
                            style={{
                              color: "#fff",
                              fontSize: "3rem",
                              opacity: 0.3,
                            }}
                          >
                            <i className="bi bi-calendar-event"></i>
                          </div>
                        </div>
                      )}

                      {/* Content */}
                      <div
                        style={{
                          padding: "25px",
                          flexGrow: 1,
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        {/* Date */}
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                            marginBottom: "15px",
                          }}
                        >
                          <div
                            style={{
                              width: "60px",
                              height: "60px",
                              background: "#f0f7ff",
                              borderRadius: "8px",
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                              justifyContent: "center",
                              border: "2px solid #0079c0",
                            }}
                          >
                            <span
                              style={{
                                fontSize: "1.5rem",
                                fontWeight: 700,
                                color: "#0079c0",
                                lineHeight: 1,
                              }}
                            >
                              {dateInfo.day}
                            </span>
                            <span
                              style={{
                                fontSize: "0.7rem",
                                color: "#0079c0",
                                textTransform: "uppercase",
                              }}
                            >
                              {dateInfo.month}
                            </span>
                          </div>
                          <div>
                            <div
                              style={{
                                fontSize: "0.9rem",
                                color: "#666",
                                fontWeight: 500,
                              }}
                            >
                              {dateInfo.full}
                            </div>
                          </div>
                        </div>

                        {/* Title */}
                        <h4
                          style={{
                            fontSize: "1.3rem",
                            fontWeight: 700,
                            color: "#1a1a1a",
                            marginBottom: "12px",
                            lineHeight: 1.3,
                            minHeight: "60px",
                          }}
                        >
                          {item.title}
                        </h4>

                     

                        {/* Read More */}
                        <div
                          style={{
                            marginTop: "auto",
                            display: "flex",
                            alignItems: "center",
                            color: "#0079c0",
                            fontWeight: 600,
                            fontSize: "0.9rem",
                          }}
                        >
                          Read More{" "}
                          <i
                            className="bi bi-arrow-right ms-2"
                            style={{ fontSize: "1rem" }}
                          ></i>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-5">
            <p className="text-muted" style={{ fontSize: "1.1rem" }}>
              No{" "}
              {activeTab === "all"
                ? "events or notices"
                : activeTab === "event"
                  ? "events"
                  : "notices"}{" "}
              available at the moment.
            </p>
          </div>
        )}
      </div>

      <style jsx>{`
        .event-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 25px rgba(0, 121, 192, 0.2) !important;
        }
      `}</style>
    </section>
  );
}
