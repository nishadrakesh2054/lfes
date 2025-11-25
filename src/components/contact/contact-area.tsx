import ContactForm from "../form/contact-form";
import { ContactInfoCards } from "./contact-info-area";

export default function ContactArea() {
  const brandColor = "#0079C0";

  return (
    <section
      className=" pt-120 pb-120"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-12">
            {/* Header Section */}
            <div className="text-start mb-50">
              <h3 className="tp-section-2-title">
                {" "}
                Get in <span>Touch</span>
              </h3>
              <p className="text-muted" style={{ fontSize: "1.05rem" }}>
                We are here to answer any question you may have.
              </p>
            </div>

            <div className="row g-4 align-items-stretch">
              {/* Contact Form Card - Left Side */}
              <div className="col-lg-6">
                <div
                  className="card rounded-4 shadow border-0 h-100"
                  style={{
                    border: `1px solid ${brandColor}`,
                    boxShadow: `0 0.25rem 0.75rem rgba(0, 121, 192, 0.2), 0 0.75rem 1.5rem rgba(0, 121, 192, 0.15)`,
                  }}
                >
                  <div
                    className="card-header text-white py-3"
                    style={{ backgroundColor: brandColor }}
                  >
                    <div className="d-flex align-items-center">
                      <i className="bi bi-envelope-paper me-3 fs-5"></i>
                      <div>
                        <h5 className="mb-0 fw-bold text-light text-uppercase">
                          Send a Message
                        </h5>
                        <small className="opacity-75">
                          Fill out the form and we&apos;ll reach out shortly.
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className="card-body p-4 p-lg-5 d-flex flex-column">
                    <ContactForm />
                  </div>
                </div>
              </div>

              {/* Contact Info Side Panel - Right Side */}
              <div className="col-lg-6">
                <div
                  className="card rounded-4 shadow border-0 h-100"
                  style={{
                    border: `1px solid ${brandColor}`,
                    boxShadow: `0 0.25rem 0.75rem rgba(0, 121, 192, 0.2), 0 0.75rem 1.5rem rgba(0, 121, 192, 0.15)`,
                  }}
                >
                  <div
                    className="card-header text-white py-3"
                    style={{ backgroundColor: brandColor }}
                  >
                    <div className="d-flex align-items-center">
                      <i className="bi bi-info-circle me-3 fs-5"></i>
                      <div>
                        <h5 className="mb-0 fw-bold text-light text-uppercase">
                          Contact Information
                        </h5>
                        <small className="opacity-75">
                          Prefer a direct line? Use any option below.
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className="card-body p-4 p-lg-5 d-flex flex-column">
                    <div className="flex-grow-1 d-flex flex-column justify-content-center">
                      <ContactInfoCards
                        brandColor={brandColor}
                        columns="single"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
