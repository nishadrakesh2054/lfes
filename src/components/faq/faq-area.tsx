"use client";
import Link from "next/link";
import FaqItem from "./faq-item";

// navData.js
export const navItems = [
  { id: "general", label: "General", active: true },
  { id: "admission", label: "Admission", active: false },
];

const tabContentData = [
  {
    id: "general",
    label: "general-tab",
    title: "General",
    topics: [
      { id: 1, text: "About LFES", href: "/about" },
      { id: 2, text: "School Programs", href: "/primary-school" },
      { id: 3, text: "Facilities", href: "/facilities" },
      { id: 4, text: "Events", href: "/event" },
      { id: 5, text: "Gallery", href: "/gallery" },
      { id: 6, text: "Contact", href: "/contact" },
    ],
    faqs: [
      {
        id: 1,
        active: true,
        question: "What is Little Flowers English School (LFES)?",
        answer:
          "Little Flowers English School (LFES) is a leading educational institution in Eastern Nepal, dedicated to providing world-class education with innovative teaching methods. We offer comprehensive programs from Primary School through Senior High School, focusing on holistic development, academic excellence, and character building.",
      },
      {
        id: 2,
        question: "What programs does LFES offer?",
        answer:
          "LFES offers multiple educational programs including Progressive Wing (Special Education), Primary School, Middle School, High School, and Senior High School. Each program is designed to meet the developmental needs of students at different stages, following the Nepal Government curriculum blended with progressive international teaching practices.",
      },
      {
        id: 3,
        question: "What facilities are available at LFES?",
        answer:
          "LFES boasts state-of-the-art facilities including modern science laboratories, a well-stocked library, computer labs, sports complex with indoor stadium and swimming pool, auditorium, cafeteria, art and music rooms, playgrounds, and a medical room. All facilities are designed to support comprehensive learning and student well-being.",
      },
      {
        id: 4,
        question: "What is the New Zealand 3Di Program?",
        answer:
          "The New Zealand 3Di Program is an international learning framework integrated into our curriculum. It focuses on developing inquiry, innovation, and inspiration in students, helping them become critical thinkers and creative problem solvers while maintaining alignment with the Nepal Government curriculum.",
      },
      {
        id: 5,
        question: "What extracurricular activities are available?",
        answer:
          "LFES offers a wide range of extracurricular activities including sports (football, volleyball, basketball, cricket, table tennis, badminton, karate, tae-kwan-do), music and dance (folk, classical, modern), various musical instruments, fine arts, debates, quiz competitions, essay writing, and Nepal Scouts. These activities help students develop skills beyond academics.",
      },
      {
        id: 6,
        question: "How can I contact the school?",
        answer:
          "You can contact LFES by phone at +(977) 023-530172 or via email at info@lfes.edu.np. You can also visit our Contact page for more information, schedule a campus visit, or fill out our online inquiry form. Our administrative office is open during regular school hours.",
      },
      {
        id: 7,
        question: "Where is LFES located?",
        answer:
          "LFES is located in Eastern Nepal, serving students from the region and beyond. For specific address and directions, please visit our Contact page or call our administrative office. We also provide transportation services for students.",
      },
    ],
  },
  {
    id: "admission",
    label: "admission-tab",
    title: "Admission",
    topics: [
      { id: 1, text: "Admission Process", href: "/admission" },
      { id: 2, text: "Primary School", href: "/primary-school" },
      { id: 3, text: "Middle School", href: "/middle-school" },
      { id: 4, text: "High School", href: "/high-school" },
      { id: 5, text: "Senior High School", href: "/senior-high-school" },
      { id: 6, text: "Progressive Wing", href: "/progressive" },
    ],
    faqs: [
      {
        id: 8,
        active: true,
        question: "How do I apply for admission to LFES?",
        answer:
          "You can apply for admission by visiting our Admission page and filling out the online application form. The process includes submitting required documents, attending an interview (if applicable), and completing the enrollment formalities. For detailed information about admission requirements and procedures, please visit our Admission page or contact our admission office.",
      },
      {
        id: 9,
        question: "What documents are required for admission?",
        answer:
          "Required documents typically include: birth certificate, previous school transcripts or report cards, transfer certificate (if applicable), passport-sized photographs, medical records, and parent/guardian identification documents. Specific requirements may vary by grade level. Please check our Admission page for the complete list of required documents.",
      },
      {
        id: 10,
        question: "What is the admission age requirement?",
        answer:
          "Admission age requirements vary by program. For Primary School, students typically start at age 5-6. Each grade level has appropriate age ranges. We also consider individual student readiness and development. Please contact our admission office for specific age requirements for the grade you're interested in.",
      },
      {
        id: 11,
        question: "When does the admission process begin?",
        answer:
          "Admissions are open throughout the year, but the main admission period typically begins several months before the new academic year starts. We encourage early applications as seats are limited. For current admission dates and deadlines, please visit our Admission page or contact our admission office directly.",
      },
      {
        id: 12,
        question: "Is there an entrance exam or interview?",
        answer:
          "Depending on the grade level and program, we may conduct assessments or interviews to understand the student's academic level and learning needs. This helps us ensure proper placement and support. The Progressive Wing may have additional assessments. Details about specific requirements are provided during the application process.",
      },
      {
        id: 13,
        question: "What are the fee structures and payment options?",
        answer:
          "Fee structures vary by program and grade level. We offer transparent fee information and flexible payment options. For detailed fee information, please contact our admission office or visit our campus. We are committed to making quality education accessible and may have scholarship opportunities available.",
      },
      {
        id: 14,
        question: "Do you offer scholarships or financial aid?",
        answer:
          "LFES may offer scholarships and financial assistance to deserving students based on academic merit, financial need, or special circumstances. We believe in providing quality education to all students. Please contact our admission office for information about available scholarships and financial aid programs.",
      },
      {
        id: 15,
        question: "Can students transfer mid-year?",
        answer:
          "Mid-year transfers are considered on a case-by-case basis, subject to availability of seats and completion of required documentation including transfer certificates from the previous school. We recommend contacting our admission office as early as possible to discuss transfer possibilities and requirements.",
      },
    ],
  },
];

export default function FaqArea() {
  return (
    <section className="tp-faq-area tp-faq-p pt-50 pb-120">
      <style jsx>{`
        .nav-tabs .nav-link.active {
          color: #0079c0 !important;
          border-bottom-color: #0079c0 !important;
          font-weight: 600 !important;
        }
        .nav-tabs .nav-link:not(.active) {
          color: #666 !important;
        }
        .nav-tabs .nav-link:not(.active):hover {
          color: #0079c0 !important;
        }
        .accordion-button:not(.collapsed) {
          color: #161613 !important;
          background-color: #f8f9fa !important;
        }
      `}</style>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="tp-instructor-become-tab">
              <ul
                className="nav nav-tabs justify-content-center"
                id="myTab"
                role="tablist"
              >
                {navItems.map((item) => (
                  <li key={item.id} className="nav-item" role="presentation">
                    <button
                      className={`nav-link ${item.active ? "active" : ""}`}
                      id={`${item.id}-tab`}
                      data-bs-toggle="tab"
                      data-bs-target={`#${item.id}`}
                      type="button"
                      role="tab"
                      aria-controls={item.id}
                      aria-selected={item.active}
                      tabIndex={item.active ? 0 : -1}
                      style={{
                        color: item.active ? "#0079c0" : "#666",
                        border: "none",
                        fontWeight: item.active ? "600" : "500",
                        padding: "12px 24px",
                        transition: "all 0.3s ease",
                      }}
                      onMouseEnter={(e) => {
                        if (!item.active) {
                          e.currentTarget.style.color = "#0079c0";
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!item.active) {
                          e.currentTarget.style.color = "#666";
                        }
                      }}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>

              <div className="tab-content" id="myTabContent">
                {tabContentData.map((tab) => (
                  <div
                    key={tab.id}
                    className={`tab-pane fade ${
                      tab.id === "general" ? "show active" : ""
                    }`}
                    id={tab.id}
                    role="tabpanel"
                    aria-labelledby={tab.label}
                  >
                    <div className="row">
                      <div className="col-lg-8 order-1 order-lg-2">
                        <div className="tp-faq-box">
                          <div className="tpd-accordion">
                            <div
                              className="accordion accordion-flush"
                              id={tab.id}
                            >
                              {tab.faqs.map((faq) => (
                                <FaqItem
                                  key={faq.id}
                                  faq={faq}
                                  parentId={tab.id}
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 order-2 order-lg-1">
                        <div className="tp-faq-wrap">
                          <div className="tp-faq-sidebar">
                            <h4 className="tp-faq-sidebar-title">
                              Related Topics
                            </h4>
                            <ul>
                              {tab.topics.map((topic) => (
                                <li key={topic.id}>
                                  <Link href={topic.href}>{topic.text}</Link>
                                </li>
                              ))}
                            </ul>
                    
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
