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

export default function EventListArea() {
  const [events, setEvents] = useState<EventNotice[]>([]);
  const [notices, setNotices] = useState<EventNotice[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<"all" | "event" | "notice">("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

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

  // Reset to page 1 when tab changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeTab]);

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

  const allDisplayItems =
    activeTab === "all" ? allItems : activeTab === "event" ? events : notices;

  // Calculate pagination
  const totalPages = Math.ceil(allDisplayItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayItems = allDisplayItems.slice(startIndex, endIndex);

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
                              fontWeight: 500,
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
                          flexDirection: "row",
                          gap: "15px",
                          alignItems: "flex-start",
                        }}
                      >
                        {/* Date Box - All date info in one box */}
                        <div
                          style={{
                            width: "80px",
                            height: "80px",
                            background: "#f0f7ff",
                            borderRadius: "8px",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            border: "2px solid #0079c0",
                            flexShrink: 0,
                          }}
                        >
                          <span
                            style={{
                              fontSize: "1.4rem",
                              fontWeight: 700,
                              color: "#0079c0",
                              marginTop: "-4px",
                            }}
                          >
                            {dateInfo.day}
                          </span>
                          <span
                            style={{
                              fontSize: "0.75rem",
                              color: "#0079c0",
                              textTransform: "uppercase",
                              fontWeight: 600,
                              margin: 0,
                              lineHeight: 1,
                              padding: 0,
                              marginTop: "4px",
                            }}
                          >
                            {dateInfo.month}
                          </span>
                          <span
                            style={{
                              fontSize: "0.7rem",
                              color: "#666",
                              fontWeight: 500,
                              marginTop: "-4px",
                            }}
                          >
                            {dateInfo.year}
                          </span>
                        </div>

                        {/* Title and Button Container */}
                        <div
                          style={{
                            flex: 1,
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-start",
                          }}
                        >
                          {/* Title */}
                          <h4
                            style={{
                              fontSize: "1rem",
                              fontWeight: 600,
                              color: "#1a1a1a",
                              textAlign: "left",
                              margin: 0,
                              marginBottom: "8px",
                            }}
                          >
                            {item.title}
                          </h4>

                          {/* Read More */}
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              color: "#0079c0",
                              fontWeight: 600,
                              fontSize: "0.9rem",
                              textAlign: "left",
                              marginTop: "auto",
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

        {/* Pagination Controls */}
        {allDisplayItems.length > itemsPerPage && (
          <div className="row mt-5">
            <div className="col-12">
              <div
                className="d-flex justify-content-center align-items-center gap-3 flex-wrap"
                style={{ marginTop: "40px" }}
              >
                {/* Previous Button */}
                <button
                  onClick={() => {
                    setCurrentPage((prev) => Math.max(1, prev - 1));
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  disabled={currentPage === 1}
                  className="btn btn-outline-primary"
                  style={{
                    borderColor: "#0079c0",
                    color: currentPage === 1 ? "#ccc" : "#0079c0",
                    borderRadius: "8px",
                    padding: "8px 20px",
                    fontWeight: 500,
                    cursor: currentPage === 1 ? "not-allowed" : "pointer",
                    opacity: currentPage === 1 ? 0.5 : 1,
                  }}
                >
                  <i className="bi bi-chevron-left me-1"></i>
                  Previous
                </button>

                {/* Page Numbers */}
                <div className="d-flex gap-2 align-items-center">
                  {(() => {
                    const pages: (number | string)[] = [];

                    // Always show first page
                    pages.push(1);

                    // Add ellipsis if needed
                    if (currentPage > 3) {
                      pages.push("ellipsis-start");
                    }

                    // Add pages around current page
                    for (
                      let i = Math.max(2, currentPage - 1);
                      i <= Math.min(totalPages - 1, currentPage + 1);
                      i++
                    ) {
                      if (i !== 1 && i !== totalPages) {
                        pages.push(i);
                      }
                    }

                    // Add ellipsis if needed
                    if (currentPage < totalPages - 2) {
                      pages.push("ellipsis-end");
                    }

                    // Always show last page (if more than 1 page)
                    if (totalPages > 1) {
                      pages.push(totalPages);
                    }

                    // Remove duplicates
                    const uniquePages = pages.filter((page, index, self) => {
                      if (typeof page === "string") {
                        // Only keep one ellipsis of each type
                        const prev = self[index - 1];
                        return (
                          !(
                            prev === "ellipsis-start" &&
                            page === "ellipsis-start"
                          ) &&
                          !(prev === "ellipsis-end" && page === "ellipsis-end")
                        );
                      }
                      return self.indexOf(page) === index;
                    });

                    return uniquePages.map((page, idx) => {
                      if (typeof page === "string") {
                        return (
                          <span
                            key={`${page}-${idx}`}
                            style={{
                              color: "#0079c0",
                              padding: "0 5px",
                            }}
                          >
                            ...
                          </span>
                        );
                      }

                      return (
                        <button
                          key={page}
                          onClick={() => {
                            setCurrentPage(page);
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                          className="btn"
                          style={{
                            backgroundColor:
                              currentPage === page ? "#0079c0" : "transparent",
                            borderColor: "#0079c0",
                            color: currentPage === page ? "#fff" : "#0079c0",
                            borderRadius: "8px",
                            minWidth: "40px",
                            height: "40px",
                            fontWeight: currentPage === page ? 600 : 500,
                            padding: "0",
                          }}
                        >
                          {page}
                        </button>
                      );
                    });
                  })()}
                </div>

                {/* Next Button */}
                <button
                  onClick={() => {
                    setCurrentPage((prev) => Math.min(totalPages, prev + 1));
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  disabled={currentPage === totalPages}
                  className="btn btn-outline-primary"
                  style={{
                    borderColor: "#0079c0",
                    color: currentPage === totalPages ? "#ccc" : "#0079c0",
                    borderRadius: "8px",
                    padding: "8px 20px",
                    fontWeight: 500,
                    cursor:
                      currentPage === totalPages ? "not-allowed" : "pointer",
                    opacity: currentPage === totalPages ? 0.5 : 1,
                  }}
                >
                  Next
                  <i className="bi bi-chevron-right ms-1"></i>
                </button>
              </div>

              {/* Page Info */}
              <div className="text-center mt-3">
                <p
                  style={{
                    color: "#666",
                    fontSize: "0.9rem",
                    margin: 0,
                  }}
                >
                  Showing {startIndex + 1} -{" "}
                  {Math.min(endIndex, allDisplayItems.length)} of{" "}
                  {allDisplayItems.length}{" "}
                  {activeTab === "all"
                    ? "items"
                    : activeTab === "event"
                      ? "events"
                      : "notices"}
                </p>
              </div>
            </div>
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
