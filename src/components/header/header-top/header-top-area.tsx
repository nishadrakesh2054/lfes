import React from "react";
import Image from "next/image";
import calling from "@/assets/img/icon/calling.svg";

export default function HeaderTopArea() {
  return (
    <div className="tp-header-top theme-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="tp-heder-info d-flex justify-content-center justify-content-lg-start align-items-center">
              <div className="tp-header-info-item ">
                <span>
                  <a href="#">
                    <i className="fa-solid fa-envelope"></i>
                  </a>
                  info@lfes.edu.np
                </span>
              </div>
              <div className="tp-header-info-item">
                <span>
                  <a href="tel:0123456789">
                    <i>
                      <Image src={calling} alt="phone-img" />
                    </i>{" "}
                    +(977) 023-530172
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 d-none d-lg-block">
            <div className="tp-header-right-list d-flex justify-content-md-end">
        
              {/* Social Icons */}
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-tiktok"></i>
              </a>

              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="/contact">Help Desk</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
