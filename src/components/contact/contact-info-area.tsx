export const contactInfoData = [
  {
    icon: "bi bi-envelope-fill",
    title: "Email Us",
    description: "Contact our support team anytime.",
    linkText: "info@lfes.edu.np",
    href: "mailto:info@lfes.edu.np",
  },
  {
    icon: "bi bi-telephone-fill",
    title: "Call Us",
    description: "Available 24/7 for assistance.",
    linkText: "+977 023-530172",
    href: "tel:+977023530172",
  },
  {
    icon: "bi bi-geo-alt-fill",
    title: "Visit Us",
    description: "Located in Birtamod, Jhapa, Nepal.",
    linkText: "Birtamod, Jhapa",
    href: "#",
  },
];

type ContactInfoCardsProps = {
  brandColor?: string;
  columns?: "single" | "triple";
};

export function ContactInfoCards({
  brandColor = "#0079C0",
  columns = "triple",
}: ContactInfoCardsProps) {
  return (
    <>
      <style>{`
        .contact-info-card {
          border: 1px solid ${brandColor}20 !important;
          transition: all 0.3s ease;
        }
        .contact-info-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 0.5rem 1rem rgba(0, 121, 192, 0.25) !important;
        }
        .contact-info-link {
          color: ${brandColor} !important;
          text-decoration: none;
        }
        .contact-info-link:hover {
          text-decoration: underline !important;
        }
      `}</style>
      {columns === "single" ? (
        <div className="d-flex flex-column gap-4">
          {contactInfoData.map((item) => (
            <div
              key={item.title}
              className="card border-0 shadow-sm rounded-4 contact-info-card"
            >
              <div className="card-body p-4 d-flex align-items-center gap-4">
                <div
                  className="d-inline-flex align-items-center justify-content-center flex-shrink-0"
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    backgroundColor: `${brandColor}15`,
                    color: brandColor,
                  }}
                >
                  <i className={item.icon} style={{ fontSize: "1.8rem" }}></i>
                </div>
                <div className="flex-grow-1">
                  <h5
                    className="fw-bold mb-1"
                    style={{ color: brandColor, fontSize: "1.1rem" }}
                  >
                    {item.title}
                  </h5>
                  <a
                    href={item.href}
                    className=" fw-semibold d-block "
                    style={{ fontSize: "1rem" }}
                  >
                    {item.linkText}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="row g-4">
          {contactInfoData.map((item) => (
            <div key={item.title} className="col-lg-4 col-md-6">
              <div className="card h-100 border-0 shadow-sm rounded-3 contact-info-card">
                <div className="card-body text-center p-4">
                  <div
                    className="d-inline-flex align-items-center justify-content-center mb-3"
                    style={{
                      width: "70px",
                      height: "70px",
                      borderRadius: "50%",
                      backgroundColor: `${brandColor}15`,
                      color: brandColor,
                    }}
                  >
                    <i className={item.icon} style={{ fontSize: "2rem" }}></i>
                  </div>
                  <h4
                    className="fw-bold mb-3"
                    style={{ color: brandColor, fontSize: "1.25rem" }}
                  >
                    {item.title}
                  </h4>
                  <p
                    className="text-muted mb-3"
                    style={{ fontSize: "0.95rem" }}
                  >
                    {item.description}
                  </p>
                  <a
                    href={item.href}
                    className="contact-info-link fw-semibold"
                    style={{ fontSize: "1rem" }}
                  >
                    {item.linkText}
                    <i className="bi bi-arrow-right ms-2"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default function ContactInfoArea() {
  const brandColor = "#0079C0";

  return (
    <>
      <style>{`
        .contact-info-card {
          border: 1px solid ${brandColor}20 !important;
          transition: all 0.3s ease;
        }
        .contact-info-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 0.5rem 1rem rgba(0, 121, 192, 0.25) !important;
        }
        .contact-info-link {
          color: ${brandColor} !important;
          text-decoration: none;
        }
        .contact-info-link:hover {
          text-decoration: underline !important;
        }
      `}</style>
      <section
        className="tp-contact-info-area pt-80 pb-80"
        style={{ backgroundColor: "#ffffff" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              {/* Header Section */}
              <div className="text-center mb-5">
                <h2
                  className="mb-3 fw-bold"
                  style={{
                    color: brandColor,
                    fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                  }}
                >
                  Let us know how we can help
                </h2>
                <p className="lead text-muted" style={{ fontSize: "1.1rem" }}>
                  Choose your preferred way to reach out to us
                </p>
              </div>

              {/* Contact Info Cards */}
              <div className="row g-4">
                {contactInfoData.map((item, index) => (
                  <div key={index} className="col-lg-4 col-md-6">
                    <div className="card h-100 border-0 shadow-sm rounded-3 contact-info-card">
                      <div className="card-body text-center p-4">
                        <div
                          className="d-inline-flex align-items-center justify-content-center mb-3"
                          style={{
                            width: "70px",
                            height: "70px",
                            borderRadius: "50%",
                            backgroundColor: `${brandColor}15`,
                            color: brandColor,
                          }}
                        >
                          <i
                            className={item.icon}
                            style={{ fontSize: "2rem" }}
                          ></i>
                        </div>
                        <h4
                          className="fw-bold mb-3"
                          style={{ color: brandColor, fontSize: "1.25rem" }}
                        >
                          {item.title}
                        </h4>
                        <p
                          className="text-muted mb-3"
                          style={{ fontSize: "0.95rem" }}
                        >
                          {item.description}
                        </p>
                        <a
                          href={item.href}
                          className="contact-info-link fw-semibold"
                          style={{ fontSize: "1rem" }}
                        >
                          {item.linkText}
                          <i className="bi bi-arrow-right ms-2"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
