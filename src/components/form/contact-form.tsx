"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import ErrMsg from "../err-msg";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };
  const brandColor = "#0079C0";

  return (
    <>
      <style>{`
        #contact-form .form-control:focus,
        #contact-form textarea:focus {
          border-color: ${brandColor} !important;
          box-shadow: none !important;
          outline: none !important;
        }
        #contact-form .form-control:focus-visible,
        #contact-form textarea:focus-visible {
          border-color: ${brandColor} !important;
          box-shadow: none !important;
          outline: 1px solid ${brandColor} !important;
          outline-offset: -1px !important;
        }
        #contact-form .form-check-input:checked {
          background-color: ${brandColor} !important;
          border-color: ${brandColor} !important;
        }
        #contact-form .form-check-input:focus {
          border-color: ${brandColor} !important;
          box-shadow: 0 0 0 0.25rem rgba(0, 121, 192, 0.25) !important;
        }
      `}</style>
      <form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="row g-3">
          <div className="col-md-6">
            <label
              className="form-label fw-semibold"
              style={{ fontSize: "0.9rem" }}
            >
              Your Name <span className="text-danger">*</span>
            </label>
            <div className="input-group input-group-sm">
              <span className="input-group-text bg-light">
                <i
                  className="bi bi-person"
                  style={{ color: brandColor, fontSize: "0.9rem" }}
                ></i>
              </span>
              <input
                type="text"
                className={`form-control ${errors.name ? "is-invalid" : ""}`}
                placeholder="Enter your name"
                {...register("name", { required: "Name is required" })}
              />
            </div>
            {errors.name?.message && <ErrMsg msg={errors.name.message} />}
          </div>

          <div className="col-md-6">
            <label
              className="form-label fw-semibold"
              style={{ fontSize: "0.9rem" }}
            >
              Email Address <span className="text-danger">*</span>
            </label>
            <div className="input-group input-group-sm">
              <span className="input-group-text bg-light">
                <i
                  className="bi bi-envelope"
                  style={{ color: brandColor, fontSize: "0.9rem" }}
                ></i>
              </span>
              <input
                type="email"
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                placeholder="your.email@example.com"
                {...register("email", { required: "Email is required" })}
              />
            </div>
            {errors.email?.message && <ErrMsg msg={errors.email.message} />}
          </div>

          <div className="col-12">
            <label
              className="form-label fw-semibold"
              style={{ fontSize: "0.9rem" }}
            >
              Subject <span className="text-danger">*</span>
            </label>
            <div className="input-group input-group-sm">
              <span className="input-group-text bg-light">
                <i
                  className="bi bi-tag"
                  style={{ color: brandColor, fontSize: "0.9rem" }}
                ></i>
              </span>
              <input
                type="text"
                className={`form-control ${errors.subject ? "is-invalid" : ""}`}
                placeholder="What is this regarding?"
                {...register("subject", { required: "Subject is required" })}
              />
            </div>
            {errors.subject?.message && <ErrMsg msg={errors.subject.message} />}
          </div>

          <div className="col-12">
            <label
              className="form-label fw-semibold"
              style={{ fontSize: "0.9rem" }}
            >
              Your Message <span className="text-danger">*</span>
            </label>
            <div className="input-group input-group-sm">
              <span className="input-group-text bg-light align-items-start pt-2">
                <i
                  className="bi bi-chat-left-text"
                  style={{ color: brandColor, fontSize: "0.9rem" }}
                ></i>
              </span>
              <textarea
                className={`form-control ${errors.message ? "is-invalid" : ""}`}
                rows={3}
                placeholder="Tell us how we can help..."
                {...register("message", { required: "Message is required" })}
              ></textarea>
            </div>
            {errors.message?.message && <ErrMsg msg={errors.message.message} />}
          </div>

          <div className="col-12">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="remember"
                style={{ fontSize: "0.8rem" }}
              />
              <label
                className="form-check-label text-muted"
                htmlFor="remember"
                style={{ fontSize: "0.8rem" }}
              >
                Save my name, email for next time
              </label>
            </div>
          </div>

          <div className="col-12 text-center mt-2">
            <button
              type="submit"
              className="btn btn-sm px-4 py-1 text-white"
              style={{
                backgroundColor: brandColor,
                borderColor: brandColor,
                minWidth: "120px",
                fontSize: "0.9rem",
              }}
            >
              <i className="bi bi-send me-2"></i>
              Send Message
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
