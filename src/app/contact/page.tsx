import { Metadata } from "next";
import ContactArea from "@/components/contact/contact-area";
import BreadcrumbTwo from "@/components/breadcrumb/breadcrumb-two";
import { generateMetadata } from "@/lib/seo";

export const metadata: Metadata = generateMetadata({
  title: "Contact Us",
  description:
    "Get in touch with Little Flowers English School (LFES) in Birtamod, Jhapa, Nepal. Contact us via phone, email, or visit our campus for admissions and inquiries.",
  keywords: [
    "Contact LFES",
    "School Contact",
    "Admission Inquiry",
    "LFES Address",
    "Birtamod School Contact",
  ],
  path: "/contact",
});

export default function ContactPage() {
  return (
    <main>
      <BreadcrumbTwo title="Contact Us" subtitle="Get in Touch" />

      {/* contact area start */}
      <ContactArea />
      {/* contact area end */}

      {/* map area start */}
      <div className="tp-map-area">
        <div className="tp-contact-map-content">
       
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3566.5188597555093!2d87.9875100760875!3d26.631864872102224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e5baf2f96b471b%3A0x7cd8929eb75daa0c!2sLittle%20Flowers&#39;%20English%20School!5e0!3m2!1sen!2snp!4v1764143323648!5m2!1sen!2snp" width="600" height="450" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
      {/* map area end */}
    </main>
  );
}
