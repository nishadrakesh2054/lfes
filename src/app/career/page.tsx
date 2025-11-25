"use client";
import BreadcrumbTwo from "@/components/breadcrumb/breadcrumb-two";

export default function CareerPage() {
  const jobListings = [
    {
      id: 1,
      title: "Mathematics Teacher",
      department: "Primary School",
      type: "Full-time",
      location: "Biratnagar",
      postedDate: "2025-01-15",
      description:
        "We are seeking an experienced Mathematics Teacher to join our primary school team.",
    },
    {
      id: 2,
      title: "Science Teacher",
      department: "Middle School",
      type: "Full-time",
      location: "Biratnagar",
      postedDate: "2025-01-14",
      description:
        "Join our middle school team as a Science Teacher and inspire young minds.",
    },
    {
      id: 3,
      title: "English Teacher",
      department: "Secondary School",
      type: "Full-time",
      location: "Biratnagar",
      postedDate: "2025-01-13",
      description:
        "We are looking for a passionate English Teacher for our secondary school.",
    },
    {
      id: 4,
      title: "Administrative Assistant",
      department: "Administration",
      type: "Part-time",
      location: "Biratnagar",
      postedDate: "2025-01-12",
      description:
        "Support our administrative team in daily operations and student services.",
    },
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <main>
      <BreadcrumbTwo title="Career" subtitle="Explore Your Opportunities" />

      <section className="pt-120 pb-120">
        <div className="container">
          <div className="row g-4">
            {jobListings.map((job) => (
              <div key={job.id} className="col-lg-6 col-md-6">
                <div className="tp-career-item-wrapper">
                  <div className="tp-career-content">
                    <div className="tp-career-header">
                      <h3 className="tp-career-title">{job.title}</h3>
                      <span className="tp-career-type">{job.type}</span>
                    </div>
                    <div className="tp-career-meta">
                      <span className="tp-career-department">
                        <i className="bi bi-people-fill"></i>
                        {job.department}
                      </span>
                      <span className="tp-career-location">
                        <i className="bi bi-geo-alt-fill"></i>
                        {job.location}
                      </span>
                      <span className="tp-career-date">
                        <i className="bi bi-calendar3"></i>
                        Posted: {formatDate(job.postedDate)}
                      </span>
                    </div>
                    <p className="tp-career-description">{job.description}</p>
                    <button className="tp-career-apply-btn">Apply Now</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CV Upload Section */}
      <section className="pt-20 pb-80" style={{ backgroundColor: "#f8f9fa" }}>
        <div className="container">
          {/* Attractive Header Section */}
          <div className="row justify-content-start mb-20">
            <div className="col-lg-10 text-center">
              <div className="tp-cv-header-content">
                <div
                  className="d-inline-flex align-items-center justify-content-center mb-3"
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    backgroundColor: "#0079C0",
                    color: "white",
                  }}
                >
                  <i
                    className="bi bi-file-earmark-person"
                    style={{ fontSize: "2.5rem" }}
                  ></i>
                </div>
                <h2
                  className="mb-3 fw-semibold"
                  style={{ color: "#0079C0", fontSize: "2rem" }}
                >
                  Drop Your CV Here
                </h2>
                <p
                  className="lead mb-4"
                  style={{
                    color: "#666",
                    fontSize: "1rem",
                    maxWidth: "600px",
                    margin: "0 auto",
                  }}
                >
                  Don&apos;t see a position that matches your skills? No
                  problem! Submit your CV and we&apos;ll keep you in mind for
                  future opportunities.
                </p>
                <div className="d-flex justify-content-center gap-3 flex-wrap ">
                  <div className="d-flex align-items-center">
                    <i
                      className="bi bi-check-circle-fill me-2"
                      style={{ color: "#0079C0", fontSize: "1.2rem" }}
                    ></i>
                    <span>Quick & Easy Process</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <i
                      className="bi bi-check-circle-fill me-2"
                      style={{ color: "#0079C0", fontSize: "1.2rem" }}
                    ></i>
                    <span>We&apos;ll Review Your Profile</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <i
                      className="bi bi-check-circle-fill me-2"
                      style={{ color: "#0079C0", fontSize: "1.2rem" }}
                    ></i>
                    <span>Get Notified of New Positions</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CV Upload Form */}
          <div className="row justify-content-center ">
            <div className="col-lg-10">
              <div
                className="card border-0 shadow-sm"
                style={{
                  borderRadius: "12px",
                  border: "1px solid #0079C0",
                  boxShadow:
                    "0 0.125rem 0.25rem rgba(0, 121, 192, 0.15), 0 0.5rem 1rem rgba(0, 121, 192, 0.15)",
                }}
              >
                <div
                  className="card-header text-white py-3"
                  style={{
                    backgroundColor: "#0079C0",
                    borderRadius: "12px 12px 0 0",
                  }}
                >
                  <div className="d-flex align-items-center">
                    <i className="bi bi-file-earmark-person me-2 fs-5"></i>
                    <div>
                      <h5 className="mb-0 fw-bold text-white">
                        Submit Your Application
                      </h5>
                      <small className="opacity-75">
                        Fill in your details and upload your CV
                      </small>
                    </div>
                  </div>
                </div>
                <div className="card-body p-4">
                  <form>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <label className="form-label fw-semibold">
                          Full Name <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label fw-semibold">
                          Email <span className="text-danger">*</span>
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="your.email@example.com"
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label fw-semibold">
                          Phone Number <span className="text-danger">*</span>
                        </label>
                        <input
                          type="tel"
                          className="form-control"
                          placeholder="+977 98XXXXXXXX"
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label fw-semibold">
                          Position of Interest
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="e.g., Teacher, Administrator"
                        />
                      </div>
                      <div className="col-12">
                        <label className="form-label fw-semibold">
                          Upload CV/Resume{" "}
                          <span className="text-danger">*</span>
                        </label>
                        <div className="input-group">
                          <input
                            type="file"
                            className="form-control"
                            accept=".pdf,.doc,.docx"
                            required
                          />
                          <span className="input-group-text">
                            <i className="bi bi-paperclip"></i>
                          </span>
                        </div>
                        <small className="text-muted">
                          Accepted formats: PDF, DOC, DOCX (Max 5MB)
                        </small>
                      </div>
                      <div className="col-12">
                        <label className="form-label fw-semibold">
                          Cover Letter (Optional)
                        </label>
                        <textarea
                          className="form-control"
                          rows={4}
                          placeholder="Tell us why you'd like to join LFES..."
                        ></textarea>
                      </div>
                      <div className="col-12">
                        <button
                          type="submit"
                          className="btn text-white tp-cv-submit-btn"
                        >
                          <i className="bi bi-upload me-2"></i>
                          Submit CV
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .tp-career-item-wrapper {
          background: #ffffff;
          border-radius: 12px;
          padding: 30px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .tp-career-item-wrapper:hover {
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
          transform: translateY(-4px);
        }

        .tp-career-content {
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .tp-career-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 20px;
          flex-wrap: wrap;
          gap: 15px;
        }

        .tp-career-title {
          font-size: 24px;
          font-weight: 600;
          color: #1a1a1a;
          margin: 0;
          line-height: 1.3;
        }

        .tp-career-type {
          padding: 6px 16px;
          background: #e8f4f8;
          color: #0079c0;
          border-radius: 20px;
          font-size: 14px;
          font-weight: 500;
          white-space: nowrap;
        }

        .tp-career-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          margin-bottom: 20px;
          padding-bottom: 20px;
          border-bottom: 1px solid #e0e0e0;
        }

        .tp-career-department,
        .tp-career-location,
        .tp-career-date {
          display: flex;
          align-items: center;
          gap: 6px;
          color: #666;
          font-size: 14px;
        }

        .tp-career-department i,
        .tp-career-location i,
        .tp-career-date i {
          color: #0079c0;
        }

        .tp-career-description {
          color: #555;
          font-size: 15px;
          line-height: 1.6;
          margin-bottom: 25px;
          flex-grow: 1;
        }

        .tp-career-apply-btn {
          padding: 4px 16px;
          background: #0079c0;
          color: #ffffff;
          border: none;
          border-radius: 50px;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          width: fit-content;
        }

        .tp-career-apply-btn:hover {
          background: #005a8f;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 121, 192, 0.4);
        }

        .tp-cv-submit-btn {
          background-color: #0079c0 !important;
          border-color: #0079c0 !important;
          padding: 10px 30px !important;
          border-radius: 50px !important;
          font-weight: 500 !important;
          transition: all 0.3s ease !important;
        }

        .tp-cv-submit-btn:hover {
          background-color: #005a8f !important;
          border-color: #005a8f !important;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 121, 192, 0.4);
        }

        @media (max-width: 768px) {
          .tp-career-item-wrapper {
            padding: 20px;
          }

          .tp-career-title {
            font-size: 20px;
          }

          .tp-career-meta {
            flex-direction: column;
            gap: 12px;
          }

          .tp-career-header {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </main>
  );
}
