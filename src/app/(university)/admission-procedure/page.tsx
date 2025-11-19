import { Metadata } from "next";
// import Image from "next/image";
import BreadcrumbTwo from "@/components/breadcrumb/breadcrumb-two";
import CampusChooseArea from "@/components/campus/campus-choose-area";
// import apply_thumb from "@/assets/img/course/details/apply-thumb.jpg";
import ProcessTwo from "@/components/process/process-two";
import ApplyRequirement from "@/components/requirement/apply-requirement-area";

export const metadata: Metadata = {
  title: "Admission Procedure - LFES",
};

export default function AdmissionProcedurePage() {
  return (
    <main>
      {/* breadcrumb area start */}
      <BreadcrumbTwo
        title="Admission Procedure"
        subtitle="Admission Procedure"
        admission={true}
      />
      {/* breadcrumb area end */}

      {/* campus choose area start */}
      <CampusChooseArea />
      {/* campus choose area end */}

      {/* apply area start */}
      {/* <div className="tp-apply-thumb-area grey-bg pb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="tp-apply-thumb wow fadeInUp" data-wow-delay=".5s">
                <Image
                  src={apply_thumb}
                  alt="apply-thumb"
                  style={{height:"auto"}}
                />
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* apply area end */}
      {/* apply requirement area start */}
      <ApplyRequirement />
      {/* apply requirement area end */}

      {/* process area start */}
      <ProcessTwo />
      {/* process area end */}
    </main>
  );
}
