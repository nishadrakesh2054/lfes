import { Metadata } from "next";
import BreadcrumbTwo from "@/components/breadcrumb/breadcrumb-two";
import ApplyRequirement from "@/components/requirement/apply-requirement-area";
import ApplicationForm from "@/components/form/application-form";

export const metadata: Metadata = {
  title: "Application Form - LFES",
};

export default function AdmissionProcedurePage() {
  return (
    <main>
      {/* breadcrumb area start */}
      <BreadcrumbTwo
        title="Admission Application"
        subtitle="Apply Now"
        admission={true}
      />
      <ApplyRequirement />

      <section className=" pb-90">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className=" wow fadeInUp" data-wow-delay=".5s">
                {/* form area start */}
                <ApplicationForm />
                {/* form area end */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
