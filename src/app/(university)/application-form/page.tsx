import { Metadata } from "next";
import ApplicationForm from "@/components/form/application-form";
import BreadcrumbTwo from "@/components/breadcrumb/breadcrumb-two";

export const metadata: Metadata = {
  title: "Application Form - LFES",
};

export default function ApplicationFormPage() {
  return (
    <main>
      {/* application area start */}
      <BreadcrumbTwo
        title="Application Form"
        subtitle="Ready to find out what sets us apart?"
      />

      <section className="tp-application-area grey-bg pt-120 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="tp-application-from-box wow fadeInUp"
                data-wow-delay=".5s"
              >
                {/* form area start */}
                <ApplicationForm />
                {/* form area end */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* application area end */}
    </main>
  );
}
