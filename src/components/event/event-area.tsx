"use client";
import Link from "next/link";
import { RightArrowTwo, RightSmArrowTwo } from "../svg";
import { university_classic_event_data } from "@/data/event-data";

export default function EventArea() {
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
              <div className="tp-event-wrap">
                {university_classic_event_data.slice(0, 2).map((item) => (
                  <div key={item.id} className="tp-event-item mb-3">
                    <div className="row align-items-center">
                      <div className="col-2">
                        <div className="tp-event-list">
                          <h4 className="tp-event-list-count">
                            {item.date.day}
                          </h4>
                          <span>
                            {item.date.month}, {item.date.year}
                          </span>
                        </div>
                      </div>
                      <div className="col-9">
                        <div className="tp-event-content">
                          <h3 className="tp-event-title d-flex align-items-center justify-content-between gap-2">
                            <span>{item.title}</span>
                            <span>
                              <Link href={`/event-details/${item.id}`}>
                                <RightArrowTwo />
                              </Link>
                            </span>
                          </h3>
                          <div className="tp-event-info">
                            <span>
                              <i className="fa-sharp fa-light fa-clock"></i>
                              {item.time}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Button */}
              <div className="tp-event-btn text-start mt-3">
                <Link className="tp-btn" href="/event">
                  See More Events <RightSmArrowTwo />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column - Important Notices */}
          <div className="col-lg-6 mb-4">
            <div className="tp-event-section">
              <div className="tp-section mb-4">
                <h4 className="tp-section-2-title">
                  Important <span>Notices </span>
                </h4>
              </div>

              {/* Notice Items */}
              <div className="tp-event-wrap">
                {university_classic_event_data.slice(2, 4).map((item) => (
                  <div key={item.id} className="tp-event-item mb-3">
                    <div className="row align-items-center">
                      <div className="col-2">
                        <div className="tp-event-list">
                          <h4 className="tp-event-list-count">
                            {item.date.day}
                          </h4>
                          <span>
                            {item.date.month}, {item.date.year}
                          </span>
                        </div>
                      </div>
                      <div className="col-9">
                        <div className="tp-event-content">
                          <h3 className="tp-event-title d-flex align-items-center justify-content-between gap-2">
                            <span>{item.title}</span>
                            <span>
                              <Link href={`/event-details/${item.id}`}>
                                <RightArrowTwo />
                              </Link>
                            </span>
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Button */}
              <div className="tp-event-btn text-start mt-3">
                <Link className="tp-btn" href="/event">
                  See More Notices <RightSmArrowTwo />
                </Link>
              </div>
            </div>
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
      `}</style>
    </section>
  );
}
