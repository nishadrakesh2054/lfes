"use client";
import Link from "next/link";
import Image from "next/image";

import { Email } from "../svg";
import FooterSocial from "./footer-social";
import NewsletterForm from "../form/newsletter-form";
import logo from "@/assets/img/lfeslogo1.png";

import { footerLinks } from "@/data/footer-links";

// prop type
type IProps = {
  style_2?: boolean;
};

export default function FooterOne({ style_2 = false }: IProps) {
  return (
    <>
      <style jsx>{`
        .tp-footer-main {
          background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
        }
        .tp-footer-widget-title {
          color: #161613 !important;
          font-weight: 600 !important;
          font-size: 18px !important;
          margin-bottom: 20px !important;
        }
        .tp-footer-widget-link ul li a {
          color: #57595f !important;
          transition: all 0.3s ease !important;
          font-size: 14px !important;
        }
        .tp-footer-widget-link ul li a:hover {
          color: #0079c0 !important;
          padding-left: 5px !important;
        }
        .tp-footer-contact a {
          color: #0079c0 !important;
          font-weight: 600 !important;
          font-size: 16px !important;
        }
        .tp-footer-contact-mail a {
          color: #57595f !important;
          transition: all 0.3s ease !important;
        }
        .tp-footer-contact-mail a:hover {
          color: #0079c0 !important;
        }
        .tp-footer-newsletter-input input {
          border: 1px solid #e0e0e0 !important;
          border-radius: 6px !important;
        }
        .tp-footer-newsletter-input input:focus {
          border-color: #0079c0 !important;
          outline: none !important;
          box-shadow: 0 0 0 0.2rem rgba(0, 121, 192, 0.1) !important;
        }
        .tp-footer-bottom {
          background-color: #f8f9fa !important;
          border-top: 2px solid #e0e0e0 !important;
          padding: 1px 0 !important;
        }
        .tp-footer-copyright {
          color: #57595f !important;
          padding: 20px 0 !important;
        }
        .tp-footer-copyright span {
          margin: 0 10px;
          display: inline-block;
        }
        @media only screen and (max-width: 767px) {
          .tp-footer-copyright {
            padding: 15px 10px !important;
            word-wrap: break-word !important;
            overflow-wrap: break-word !important;
            max-width: 100% !important;
            box-sizing: border-box !important;
          }
          .tp-footer-copyright span {
            display: block !important;
            margin: 5px 0 !important;
            font-size: 14px !important;
            line-height: 1.5 !important;
            white-space: normal !important;
            word-wrap: break-word !important;
            overflow-wrap: break-word !important;
            max-width: 100% !important;
            width: 100% !important;
            box-sizing: border-box !important;
          }
          .tp-footer-copyright span .heart {
            display: inline !important;
            white-space: normal !important;
          }
          .tp-footer-copyright a {
            word-break: break-word !important;
            overflow-wrap: break-word !important;
            display: inline !important;
            white-space: normal !important;
          }
        }
        .tp-footer-copyright a {
          color: #0079c0 !important;
          font-weight: 600 !important;
          transition: all 0.3s ease !important;
          text-decoration: none !important;
        }
        .tp-footer-copyright a:hover {
          color: #005a8f !important;
          text-decoration: underline !important;
        }
        .tp-footer-copyright .heart {
          color: #ff6b6b !important;
        }
        .tp-footer-widget-content p {
          color: #57595f !important;
          line-height: 1.7 !important;
        }
      `}</style>
      <footer>
        <div
          className={`tp-footer-main ${style_2 ? "" : "grey-bg"} pt-80 pb-55`}
        >
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-lg-3 col-sm-6">
                <div
                  className={`tp-footer-widget ${
                    style_2 ? "tp-footer-5-col-1" : "tp-footer-col-1"
                  } mb-30`}
                >
                  <Link
                    href="/"
                    style={{ display: "inline-block", marginBottom: "20px" }}
                  >
                    <div
                      style={{
                        width: "90px",
                        height: "90px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Image
                        src={logo}
                        alt="LFES Logo"
                        priority
                        width={90}
                        height={90}
                        quality={100}
                        style={{
                          objectFit: "contain",
                          width: "auto",
                          height: "auto",
                          maxWidth: "100%",
                          maxHeight: "100%",
                        }}
                      />
                    </div>
                  </Link>
                  <div className="tp-footer-widget-content">
                    <p
                      style={{
                        marginBottom: "20px",
                        fontSize: "15px",
                        lineHeight: "1.7",
                      }}
                    >
                      Dedicated to providing world-class education with
                      innovative teaching methods and personalized learning
                      experiences for every student
                    </p>
                  </div>
                  <div
                    className="tp-footer-contact"
                    style={{ marginTop: "20px", marginBottom: "15px" }}
                  >
                    <span
                      style={{
                        color: "#57595f",
                        fontSize: "14px",
                        display: "block",
                        marginBottom: "8px",
                      }}
                    >
                      Got Questions? Call us
                    </span>
                    <a href="tel:+977023530172, +977023540172">
                      +(977) 023-530172 / 023-540172
                    </a>
                  </div>
                  <div className="tp-footer-contact-mail">
                    <a
                      href="mailto:info@lfes.edu.np"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <span>
                        <Email />
                      </span>
                      info@lfes.edu.np
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 col-sm-6">
                <div
                  className={`tp-footer-widget ${
                    style_2 ? "tp-footer-5-col-2" : "tp-footer-col-2"
                  } mb-30`}
                >
                  <h4 className="tp-footer-widget-title mb-20">About</h4>
                  <div className="tp-footer-widget-link">
                    <ul style={{ listStyle: "none", padding: 0 }}>
                      {footerLinks.link_one.map((link) => (
                        <li key={link.id} style={{ marginBottom: "10px" }}>
                          <Link href={link.link}>{link.title}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-sm-4">
                <div
                  className={`tp-footer-widget ${
                    style_2 ? "tp-footer-5-col-3" : "tp-footer-col-3"
                  } mb-30`}
                >
                  <h4 className="tp-footer-widget-title mb-20">Quick Links</h4>
                  <div className="tp-footer-widget-link">
                    <ul style={{ listStyle: "none", padding: 0 }}>
                      {footerLinks.link_two.map((link) => (
                        <li key={link.id} style={{ marginBottom: "10px" }}>
                          <Link href={link.link}>{link.title}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-sm-8">
                <div
                  className={`p-footer-widget ${
                    style_2 ? "tp-footer-5-col-4" : "tp-footer-col-4"
                  } mb-30`}
                >
                  <h4 className="tp-footer-widget-title mb-20">
                    Our Newsletter
                  </h4>
                  <div className="tp-footer-newsletter-wrap">
                    <p
                      style={{
                        marginBottom: "20px",
                        fontSize: "15px",
                        lineHeight: "1.6",
                        color: "#bfbfbf",
                      }}
                    >
                      Enter your email and we will send you more information
                      about LFES
                    </p>
                    <NewsletterForm source="footer" style_2={style_2} />
                    {/* footer social */}
                    <div className="tp-footer-newsletter-social">
                      <FooterSocial />
                    </div>
                    {/* footer social */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${style_2 ? "tp-footer-5-bottom" : "tp-footer-bottom"}`}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="tp-footer-copyright text-center">
                  <span>
                    © {new Date().getFullYear()} <a href="#">LFES</a>. All
                    rights reserved.
                  </span>
                  <span>
                    Powered with <span className="heart">❤️</span> by{" "}
                    <a
                      href="https://1or8.com.np"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      1or8{" "}
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
