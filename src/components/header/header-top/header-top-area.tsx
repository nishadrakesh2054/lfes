import React from "react";

export default function HeaderTopArea() {
  return (
    <div className="tp-header-top theme-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="tp-heder-info d-flex justify-content-center justify-content-lg-start align-items-center">
              <div className="tp-header-info-item">
                <span>
                  <i className="bi bi-envelope-fill me-2"></i>
                  <a href="mailto:info@lfes.edu.np" className="text-white text-decoration-none">
                    info@lfes.edu.np
                  </a>
                </span>
              </div>
              <div className="tp-header-info-item">
                <span>
                  <a href="tel:+977023530172" className="text-white text-decoration-none">
                    <i className="bi bi-telephone-fill me-2"></i>
                    +977 023-530172
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 d-none d-lg-block">
            <div className="tp-header-right-list d-flex justify-content-md-end">
              {/* Social Icons */}
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="/admission">Admission</a>
              <a href="/faq">FAQs</a>
              <a href="/career">Careers</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
