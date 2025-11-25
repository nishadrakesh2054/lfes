"use client";
import React, { useState } from "react";
import { HandCheck } from "../svg";

const requirements = [
  "Procure Application form from the office",
  "Return duly completed application form to the office the same day or the next day.",
  "Appear for an entrance exam",
  "Interview along with parents",
  "Admission is offered only after students qualify through the entrance and interview.",
  "Deposit first installment.",
  "Participation in an interview with the Spiritual Formation team.",
  "Admission confirmed.",
];

const schoolDocuments = [
  "Report card/ Mark sheet of the current class.",
  "Transfer certificate (TC)/ Character Certificate.",
  "Birth certificate issued by the Ward.",
  "Two copies of recent passport-size photos.",
];

const seniorHighSchoolContent = [
  "Minimum GPA of 2.8 in the S.E.E. examination or its equivalent.(MANAGEMENT STREAM)",
  "Minimum GPA of 3.2 in the S.E.E. examination or its equivalent.(SCIENCE STREAM)",
  "Must secure at least C+ in Science and Mathematics. (SCIENCE STREAM)",
  "Must secure at least D+ in English, Nepali, and Social Studies. (SCIENCE STREAM)",
];

export default function ApplyRequirement() {
  const [activeTab, setActiveTab] = useState("admission");

  const brandColor = "#0079C0";

  return (
    <section className="tp-apply-requirement-area pt-110 pb-120">
      <div className="container">
        <div className="row mb-5">
          <h2>LFES Admissions</h2>
          <p>
            LFES School admits students of any race, color, religion, national
            and ethnic origin, or other legally protected status and provides
            the rights, privileges, programs, and activities generally accorded
            or made available to all the students in the school. We do not
            discriminate on the basis of race, color, religion, national and
            ethnic origin, or other legally protected status in our hiring or in
            the administration of our educational policies and programs,
            admissions policies, financial aid programs, or other
            school-administered programs.
          </p>
        </div>

        {/* Buttons */}
        <div className="row mb-4">
          <div className="col-12">
            <div className="btn-group w-100" role="group">
              <button
                type="button"
                className="btn"
                onClick={() => setActiveTab("admission")}
                style={{
                  backgroundColor:
                    activeTab === "admission" ? brandColor : "transparent",
                  color: activeTab === "admission" ? "white" : brandColor,
                  borderColor: brandColor,
                  borderWidth: "2px",
                  fontWeight: "600",
                  padding: "12px 24px",
                }}
              >
                Admission Procedure
              </button>
              <button
                type="button"
                className="btn"
                onClick={() => setActiveTab("school")}
                style={{
                  backgroundColor:
                    activeTab === "school" ? brandColor : "transparent",
                  color: activeTab === "school" ? "white" : brandColor,
                  borderColor: brandColor,
                  borderWidth: "2px",
                  fontWeight: "600",
                  padding: "12px 24px",
                }}
              >
                School
              </button>
              <button
                type="button"
                className="btn"
                onClick={() => setActiveTab("senior")}
                style={{
                  backgroundColor:
                    activeTab === "senior" ? brandColor : "transparent",
                  color: activeTab === "senior" ? "white" : brandColor,
                  borderColor: brandColor,
                  borderWidth: "2px",
                  fontWeight: "600",
                  padding: "12px 24px",
                }}
              >
                Senior High School
              </button>
            </div>
          </div>
        </div>

        {/* Content Area - Full Width */}
        <div className="row">
          <div className="col-12">
            <div
              className="card rounded-3 p-4"
              style={{
                border: `1px solid ${brandColor}`,
                boxShadow: `0 0.125rem 0.25rem rgba(0, 121, 192, 0.15), 0 0.5rem 1rem rgba(0, 121, 192, 0.15)`,
              }}
            >
              {/* Admission Procedure Content */}
              {activeTab === "admission" && (
                <div>
                  <div className="row">
                    <div className="col-lg-12 mb-4">
                      <div className="tp-apply-requirement-box">
                        <h3 className="mb-3" style={{ color: brandColor }}>
                          LFES Admission Process
                        </h3>
                        <span className="text-muted d-block mb-3">
                          To apply for admission, please follow these steps:
                        </span>
                        <div className="tp-apply-requirement-bullet">
                          {requirements.map((requirement, index) => (
                            <p key={index} className="mb-2 fs-6">
                              <span>
                                <HandCheck />
                              </span>
                              <i
                                dangerouslySetInnerHTML={{
                                  __html: requirement,
                                }}
                              ></i>
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* School Content */}
              {activeTab === "school" && (
                <div>
                  <h3 className="mb-4" style={{ color: brandColor }}>
                    Required Documents for School Admission
                  </h3>
                  <p className="text-muted mb-4">
                    Please ensure you have the following documents ready when
                    applying:
                  </p>
                  <div className="tp-apply-requirement-bullet">
                    {schoolDocuments.map((document, index) => (
                      <p key={index} className="mb-2 fs-6">
                        <span>
                          <HandCheck />
                        </span>
                        <i dangerouslySetInnerHTML={{ __html: document }}></i>
                      </p>
                    ))}
                  </div>
                </div>
              )}

              {/* Senior High School Content */}
              {activeTab === "senior" && (
                <div>
                  <h3 className="mb-4" style={{ color: brandColor }}>
                    Senior High School Admission Requirements
                  </h3>
                  <p className="text-muted mb-4">
                    For admission to Senior High School, please complete the
                    following:
                  </p>
                  <div className="tp-apply-requirement-bullet">
                    {seniorHighSchoolContent.map((item, index) => (
                      <p key={index} className="mb-2 fs-6">
                        <span>
                          <HandCheck />
                        </span>
                        <i dangerouslySetInnerHTML={{ __html: item }}></i>
                      </p>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
