import React from "react";
import { HandCheck } from "../svg";
import Link from "next/link";

const requirements = [
  "You can be admitted at any time during the academic year.",
  "If English is not your first language, you will need to demonstrate English language proficiency equivalent to a minimum of 5.5 in each band and 6.0 in speaking.",
  "Provide contact information for one teacher (or two, maximum) who will complete the Teacher Evaluation form.",
  "Open to students 18 years and over at course commencement.",
  "Spiritual Formation Program Requirements:",
  "Completion of a personal statement outlining your spiritual journey and goals.",
  "Participation in an interview with the Spiritual Formation team.",
  "Commitment to attending weekly spiritual development sessions."
];

const eligibility=[
  'Minimum GPA of 2.8 in the S.E.E. examination or its equivalent.(MANAGEMENT STREAM)',
  'Minimum GPA of 3.2 in the S.E.E. examination or its equivalent.(SCIENCE STREAM)',
  'Must secure at least C+ in Science and Mathematics. (SCIENCE STREAM)',
  'Must secure at least D+ in English, Nepali, and Social Studies. (SCIENCE STREAM)',
]


const deadlinesData = [
 {
    category: "Kindergarten School",
    deadline: "October 15",
    decision: "Early Decision |",
  },
  {
    category: "Elementary School",
    deadline: "November 1",
    decision: "Early Decision II |",
  },
  {
    category: "Middle School",
    deadline: "January 15",
    decision: "Regular Decision",
  },
  {
    category: "Senior School",
    deadline: "March 1",
    decision: "All Continuing",
  },
];

export default function ApplyRequirement  () {
  return (
    <section className="tp-apply-requirement-area tp-apply-requirement-bg pt-110 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="tp-apply-requirement-box">
              <h3 className="tp-apply-process-title">
               Admission Procedure
              </h3>
              <span>You will need:</span>
              <div className="tp-apply-requirement-bullet mb-55">
                {requirements.map((requirement, index) => (
                  <p key={index}>
                    <span>
                      <HandCheck />
                    </span>
                    <i dangerouslySetInnerHTML={{ __html: requirement }}></i>
                  </p>
                ))}
              </div>
             
            </div>




              <div className="tp-apply-requirement-box">
              <h3 className="tp-apply-process-title">
               Eligibility
              </h3>
              <span>You will need:</span>
              <div className="tp-apply-requirement-bullet mb-55">
                {eligibility.map((requirement, index) => (
                  <p key={index}>
                    <span>
                      <HandCheck />
                    </span>
                    <i dangerouslySetInnerHTML={{ __html: requirement }}></i>
                  </p>
                ))}
              </div>
             
            </div>


          </div>

          <div className="col-lg-4">
            <div className="tp-apply-dedline-box">
              <h4 className="tp-apply-dedline-wrap-title">
                Application Deadlines
              </h4>
              <div className="tp-apply-dedline-wrapper">
                {deadlinesData.map((deadline, index) => (
                  <div
                    className={`tp-apply-dedline-wrap d-flex align-items-center justify-content-between ${
                      index === deadlinesData.length - 1 ? "b-none" : ""
                    }`}
                    key={index}
                  >
                    <div className="tp-apply-dedline-content">
                      <span>{deadline.category}</span>
                      <p>{deadline.deadline}</p>
                    </div>
                    <div className="tp-apply-dedline-date">
                      <p>{deadline.decision}</p>
                    </div>
                  </div>
                ))}
                <div className="tp-apply-btn">
                  <Link className="tp-btn" href="/university-financial">
                    Visit Financial Aid
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

