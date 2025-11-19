import { Metadata } from "next";
import BreadcrumbTwo from "@/components/breadcrumb/breadcrumb-two";
import AboutTwo from "@/components/about/about-two";

export const metadata: Metadata = {
  title: "senior LFES",
};

export default function UniversityProgramPage() {
  return (
    <main>
      {/* breadcrumb area start */}
      <BreadcrumbTwo
        title="Senior High School Programs"
        subtitle="Senior High School Programs"
      />

      {/* about area start */}
      <AboutTwo spacing="pt-90 pb-90" />
           {/* Call to Action */}
        <section className="py-5  text-white" style={{ background: "#0079C0" }}>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto text-center">
                <h3 className="wow fadeInUp text-light" data-wow-delay=".3s">
                  Ready to Join Our Senior High School?
                </h3>
                <p
                  className=" wow fadeInUp text-light tp-about-tutor-content"
                  data-wow-delay=".4s"
                >
                  Schedule a visit or contact us for more information about
                  admissions
                </p>
                <div className="wow fadeInUp d-flex flex-wrap justify-content-center gap-3" data-wow-delay=".5s">
                  <button className="btn btn-outline-light btn-md ">
                    Schedule a Tour
                  </button>
                  <button className="btn btn-outline-light btn-md">
                    Download Brochure
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
    </main>
  );
}
