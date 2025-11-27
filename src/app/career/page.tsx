"use client";

import { useEffect, useState, useRef } from "react";
import { useForm } from "react-hook-form";
import BreadcrumbTwo from "@/components/breadcrumb/breadcrumb-two";

type JobOpening = {
  _id: string;
  title: string;
  department: string;
  employmentType: string;
  location: string;
  postedDate?: string;
  description: string;
  requirements?: string[];
};

type ApplicationInputs = {
  name: string;
  email: string;
  phone: string;
  position: string;
  resume: FileList;
  coverLetter: string;
};

export default function CareerPage() {
  const [jobs, setJobs] = useState<JobOpening[]>([]);
  const [jobsLoading, setJobsLoading] = useState(true);
  const [jobsError, setJobsError] = useState<string | null>(null);
  const cvFormRef = useRef<HTMLDivElement>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ApplicationInputs>();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const scrollToCVForm = () => {
    cvFormRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    const fetchJobs = async () => {
      setJobsLoading(true);
      try {
        const response = await fetch("/api/jobs");
        if (!response.ok) {
          throw new Error("Failed to load job openings.");
        }
        const data = await response.json();
        setJobs(data.jobs || []);
        setJobsError(null);
      } catch (error) {
        console.error("Error fetching jobs:", error);
        setJobsError(
          error instanceof Error ? error.message : "Unable to load jobs now."
        );
      } finally {
        setJobsLoading(false);
      }
    };

    fetchJobs();
  }, []);

  const formatDate = (dateString?: string) => {
    if (!dateString) return "Recently Posted";
    const date = new Date(dateString);
    if (Number.isNaN(date.getTime())) return "Recently Posted";
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const onSubmit = async (values: ApplicationInputs) => {
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });
    try {
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("email", values.email);
      formData.append("phone", values.phone);
      formData.append("position", values.position || "");
      formData.append("coverLetter", values.coverLetter || "");
      formData.append("source", "career_page");

      if (values.resume && values.resume.length > 0) {
        formData.append("resume", values.resume[0]);
      }

      const response = await fetch("/api/job-applications", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.error || "Failed to submit application");
      }

      setSubmitStatus({
        type: "success",
        message: result.message || "Application submitted successfully!",
      });
      reset();
    } catch (error) {
      console.error("Application error:", error);
      setSubmitStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Sorry, something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main>
      <BreadcrumbTwo title="Career Opportunities" subtitle="Join Our Team" />

      <section className="pt-120 pb-120">
        <div className="container">
          {jobsLoading ? (
            <div className="text-center py-5">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <p className="custom-paragraph mt-3 mb-0">
                Loading job openings...
              </p>
            </div>
          ) : jobsError ? (
            <div className="alert alert-danger text-center" role="alert">
              {jobsError}
            </div>
          ) : jobs.length === 0 ? (
            <div className="text-center py-5">
              <h4>No job openings available right now.</h4>
              <p className="custom-paragraph ">
                Please check back later or submit your CV below so we can reach
                out when something opens up.
              </p>
            </div>
          ) : (
            <div className="row g-4">
              {jobs.map((job) => (
                <div key={job._id} className="col-lg-6 col-md-6">
                  <div className="tp-career-item-wrapper">
                    <div className="tp-career-content">
                      <div className="tp-career-header">
                        <h3 className="tp-career-title">{job.title}</h3>
                        <span className="tp-career-type">
                          {job.employmentType}
                        </span>
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
                      <p className="custom-paragraph tp-career-description">
                        {job.description}
                      </p>
                      {job.requirements && job.requirements.length > 0 && (
                        <ul className="tp-career-requirements">
                          {job.requirements.slice(0, 3).map((req, idx) => (
                            <li key={idx}>{req}</li>
                          ))}
                        </ul>
                      )}
                      <button
                        className="tp-career-apply-btn"
                        onClick={scrollToCVForm}
                        type="button"
                      >
                        Apply Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CV Upload Section */}
      <section ref={cvFormRef} className="pt-20 pb-80">
        <div className="container">
          {/* Attractive Header Section */}
          <div className="row justify-content-start mb-20">
            <div className="col-lg-12 text-center">
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
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    encType="multipart/form-data"
                  >
                    <div className="row g-3">
                      <div className="col-md-6">
                        <label className="form-label fw-semibold">
                          Full Name <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className={`form-control ${
                            errors.name ? "is-invalid" : ""
                          }`}
                          placeholder="Your full name"
                          {...register("name", {
                            required: "Name is required",
                          })}
                          disabled={isSubmitting}
                        />
                        {errors.name && (
                          <div className="invalid-feedback">
                            {errors.name.message}
                          </div>
                        )}
                      </div>
                      <div className="col-md-6">
                        <label className="form-label fw-semibold">
                          Email <span className="text-danger">*</span>
                        </label>
                        <input
                          type="email"
                          className={`form-control ${
                            errors.email ? "is-invalid" : ""
                          }`}
                          placeholder="your.email@example.com"
                          {...register("email", {
                            required: "Email is required",
                            pattern: {
                              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                              message: "Please enter a valid email address",
                            },
                          })}
                          disabled={isSubmitting}
                        />
                        {errors.email && (
                          <div className="invalid-feedback">
                            {errors.email.message}
                          </div>
                        )}
                      </div>
                      <div className="col-md-6">
                        <label className="form-label fw-semibold">
                          Phone Number <span className="text-danger">*</span>
                        </label>
                        <input
                          type="tel"
                          className={`form-control ${
                            errors.phone ? "is-invalid" : ""
                          }`}
                          placeholder="+977 98XXXXXXXX"
                          {...register("phone", {
                            required: "Phone number is required",
                          })}
                          disabled={isSubmitting}
                        />
                        {errors.phone && (
                          <div className="invalid-feedback">
                            {errors.phone.message}
                          </div>
                        )}
                      </div>
                      <div className="col-md-6">
                        <label className="form-label fw-semibold">
                          Position of Interest
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="e.g., Teacher, Administrator"
                          {...register("position")}
                          disabled={isSubmitting}
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
                            className={`form-control ${
                              errors.resume ? "is-invalid" : ""
                            }`}
                            accept=".pdf,.doc,.docx"
                            {...register("resume", {
                              required: "Please upload your resume",
                            })}
                            disabled={isSubmitting}
                          />
                          <span className="input-group-text">
                            <i className="bi bi-paperclip"></i>
                          </span>
                        </div>
                        <small className="text-muted">
                          Accepted formats: PDF, DOC, DOCX (Max 5MB)
                        </small>
                        {errors.resume && (
                          <div className="text-danger small mt-1">
                            {errors.resume.message as string}
                          </div>
                        )}
                      </div>
                      <div className="col-12">
                        <label className="form-label fw-semibold">
                          Cover Letter (Optional)
                        </label>
                        <textarea
                          className="form-control"
                          rows={4}
                          placeholder="Tell us why you'd like to join LFES..."
                          {...register("coverLetter")}
                          disabled={isSubmitting}
                        ></textarea>
                      </div>
                      <div className="col-12">
                        <button
                          type="submit"
                          className="btn text-white tp-cv-submit-btn"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <>
                              <span
                                className="spinner-border spinner-border-sm me-2"
                                role="status"
                                aria-hidden="true"
                              ></span>
                              Submitting...
                            </>
                          ) : (
                            <>
                              <i className="bi bi-upload me-2"></i>
                              Submit CV
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </form>
                  {submitStatus.type && (
                    <div
                      className={`alert alert-${
                        submitStatus.type === "success" ? "success" : "danger"
                      } d-flex align-items-center mt-4 mb-0`}
                      role="alert"
                    >
                      <i
                        className={`bi ${
                          submitStatus.type === "success"
                            ? "bi-check-circle-fill"
                            : "bi-exclamation-triangle-fill"
                        } me-2`}
                      ></i>
                      <div>{submitStatus.message}</div>
                    </div>
                  )}
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

        .tp-career-requirements {
          padding-left: 20px;
          margin-bottom: 20px;
          color: #555;
          font-size: 14px;
        }

        .tp-career-requirements li {
          margin-bottom: 6px;
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
