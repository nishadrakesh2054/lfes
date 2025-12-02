"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";

type Inputs = {
  email: string;
};

type NewsletterFormProps = {
  source?: string;
  style_2?: boolean;
};

export default function NewsletterForm({
  source = "footer",
  style_2 = false,
}: NewsletterFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const {
    register,
    handleSubmit,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    formState: { errors },
    reset,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: data.email, source }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to subscribe");
      }

      setSubmitStatus({
        type: "success",
        message:
          result.message || "Thank you for subscribing to our newsletter!",
      });
      reset(); // Clear the form
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Sorry, there was an error subscribing. Please try again later.";
      setSubmitStatus({
        type: "error",
        message: errorMessage,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="tp-footer-newsletter-wrapper mb-30">
          <div
            className={`tp-footer-newsletter-input ${
              style_2 ? "tp-footer-5-newsletter-input" : ""
            }`}
          >
            <input
              type="email"
              placeholder="Your email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Please enter a valid email address",
                },
              })}
            />
          </div>
          <div
            className={`${
              style_2
                ? "tp-footer-5-newsletter-submit"
                : "tp-footer-newsletter-submit"
            }`}
          >
            <style>{`
              .footer-subscribe-btn {
                background-color: #0079C0 !important;
                border-color: #0079C0 !important;
                color: white !important;
                transition: all 0.3s ease !important;
              }
              .footer-subscribe-btn:hover:not(:disabled) {
                background-color: #005a8f !important;
                border-color: #005a8f !important;
              }
              .footer-subscribe-btn:disabled {
                background-color: #6c757d !important;
                border-color: #6c757d !important;
                cursor: not-allowed;
                opacity: 0.7;
              }
            `}</style>
            <button
              type="submit"
              className={`${
                style_2 ? "tp-btn-4" : "tp-btn"
              } footer-subscribe-btn`}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Subscribing..." : "Subscribe"}
            </button>
          </div>
        </div>
      </form>

      {submitStatus.type && (
        <div
          className={`alert alert-${
            submitStatus.type === "success" ? "success" : "danger"
          } d-flex align-items-center mt-2 mb-3`}
          role="alert"
          style={{
            fontSize: "13px",
            padding: "8px 12px",
            borderRadius: "4px",
          }}
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
    </>
  );
}
