"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { RightArrowTwo } from "../svg";
import { getEventNotices } from "@/lib/sanity-queries";

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

export default function EventArea() {
  const [events, setEvents] = useState<EventNotice[]>([]);
  const [notices, setNotices] = useState<EventNotice[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const [eventsData, noticesData] = await Promise.all([
          getEventNotices("event"),
          getEventNotices("notice"),
        ]);
        setEvents(eventsData.slice(0, 3)); // Show only 2 events
        setNotices(noticesData.slice(0, 3)); // Show only 2 notices
      } catch (error) {
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
    return { day, month, year };
  };

  if (loading) {
    return (
      <section className="event-area grey-bg pt-85 pb-110">
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
    <section className="event-area grey-bg pt-85 pb-110">
      <div className="container">
        <div className="row">
          {/* Left Column - Upcoming Events */}
          <div className="col-lg-6 mb-4">
            <div className="tp-event-section">
              <div className="tp-section mb-4">
                <h4 className="tp-section-2-title">
                  Upcoming <span>Events</span>
                </h4>
              </div>

              {/* Event Items */}
              {events.length > 0 ? (
                <>
                  <div className="tp-event-wrap">
                    {events.map((item) => {
                      const dateInfo = formatDate(item.date);
                      return (
                        <Link
                          key={item._id}
                          href={`/event/${item._id}`}
                          style={{ textDecoration: "none", color: "inherit" }}
                        >
                          <div
                            className="tp-event-item mb-3"
                            style={{
                              cursor: "pointer",
                              transition: "all 0.3s ease",
                            }}
                          >
                            <div className="row align-items-center">
                              <div className="col-2">
                                <div className="tp-event-list">
                                  <h4
                                    className="tp-event-list-count"
                                    style={{
                                      fontSize: "2.5rem",
                                      fontStyle: "normal",
                                    }}
                                  >
                                    {dateInfo.day}
                                  </h4>
                                  <span>{dateInfo.month}</span>
                                </div>
                              </div>
                              <div className="col-9">
                                <div className="tp-event-content">
                                  <h3 className="tp-event-title d-flex align-items-center justify-content-between gap-2">
                                    <span>{item.title}</span>
                                    <span>
                                      <RightArrowTwo />
                                    </span>
                                  </h3>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </>
              ) : (
                <div className="text-muted py-3">
                  <p>No upcoming events at the moment.</p>
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Important Notices */}
          <div className="col-lg-6 mb-4">
            <div className="tp-event-section">
              <div className="tp-section mb-4">
                <h4 className="tp-section-2-title">
                  Important <span>Notices</span>
                </h4>
              </div>

              {/* Notice Items */}
              {notices.length > 0 ? (
                <>
                  <div className="tp-event-wrap">
                    {notices.map((item) => {
                      const dateInfo = formatDate(item.date);
                      return (
                        <Link
                          key={item._id}
                          href={`/event/${item._id}`}
                          style={{ textDecoration: "none", color: "inherit" }}
                        >
                          <div
                            className="tp-event-item mb-3"
                            style={{
                              cursor: "pointer",
                              transition: "all 0.3s ease",
                            }}
                          >
                            <div className="row align-items-center">
                              <div className="col-2">
                                <div className="tp-event-list">
                                  <h4
                                    className="tp-event-list-count"
                                    style={{
                                      fontSize: "2.5rem",
                                      fontStyle: "normal",
                                    }}
                                  >
                                    {dateInfo.day}
                                  </h4>
                                  <span>{dateInfo.month}</span>
                                </div>
                              </div>
                              <div className="col-9">
                                <div className="tp-event-content">
                                  <h3 className="tp-event-title d-flex align-items-center justify-content-between gap-2">
                                    <span>{item.title}</span>
                                    <span>
                                      <RightArrowTwo />
                                    </span>
                                  </h3>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </>
              ) : (
                <div className="text-muted py-3">
                  <p>No notices at the moment.</p>
                </div>
              )}
            </div>
          </div>

          <div className="text-center">
            <Link href="/event" className="tp-btn">
              View All Events
            </Link>
          </div>
        </div>
      </div>
      <style jsx>{`
        .tp-event-title {
          font-size: 1.1rem;
          line-height: 1.2;
        }
        .tp-event-title span {
          font-size: 1.2rem;
        }
        .tp-event-list count {
          font-size: 2rem;
        }
        .tp-event-list span {
          font-size: 0.85rem;
        }
        .tp-event-info span {
          font-size: 0.85rem;
        }
        .tp-event-btn .tp-btn {
          font-size: 0.9rem;
          padding: 0.55rem 1.5rem;
        }
        .tp-event-item:hover {
          transform: translateX(5px);
          opacity: 0.9;
        }
      `}</style>
    </section>
  );
}
