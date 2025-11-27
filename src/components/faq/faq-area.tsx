"use client";
import FaqItem from "./faq-item";

// navData.js
export const navItems = [
  { id: "general", label: "General", active: true },
  { id: "admission", label: "Admission", active: false },
  { id: "academic", label: "Academic", active: false },
  { id: "events", label: "Events", active: false },
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
  {
    id: "academic",
    label: "academic-tab",
    title: "Academic",
    topics: [
      { id: 1, text: "Curriculum Overview", href: "/academics" },
      { id: 2, text: "Assessment & Evaluation", href: "/academics/assessment" },
      { id: 3, text: "Progressive Wing", href: "/progressive" },
      { id: 4, text: "STEM & Labs", href: "/facilities#labs" },
      { id: 5, text: "Library & Resources", href: "/facilities#library" },
    ],
    faqs: [
      {
        id: 16,
        active: true,
        question: "What curriculum does LFES follow?",
        answer:
          "LFES follows the Nepal Government curriculum enriched with international best practices and project-based learning. We integrate the New Zealand 3Di framework and progressive methodologies to develop critical thinking, creativity, and problem-solving skills.",
      },
      {
        id: 17,
        question: "How are students assessed?",
        answer:
          "Assessment is continuous and comprehensive. We use a mix of formative assessments, projects, presentations, exams, and performance-based evaluations. Teachers provide regular feedback and share progress reports with parents each term.",
      },
      {
        id: 18,
        question: "Do you offer support for students who need extra help?",
        answer:
          "Yes. Our Progressive Wing and Academic Support teams provide personalized learning plans, remedial sessions, and counseling for students who need additional academic or behavioral assistance.",
      },
      {
        id: 19,
        question: "What technology or digital tools are used in classrooms?",
        answer:
          "Classrooms are equipped with interactive panels and high-speed internet. Students have access to digital resources, virtual labs, coding platforms, and Google Workspace to collaborate and complete assignments.",
      },
      {
        id: 20,
        question: "Are there enrichment or gifted programs?",
        answer:
          "We run enrichment clubs, STEM challenges, Olympiad prep sessions, and leadership workshops to challenge advanced learners. Students can join specialized programs in science, entrepreneurship, arts, and social impact.",
      },
    ],
  },
  {
    id: "events",
    label: "events-tab",
    title: "Events & Activities",
    topics: [
      { id: 1, text: "Upcoming Events", href: "/event" },
      { id: 2, text: "ECA & Clubs", href: "/eca" },
      { id: 3, text: "Sports Programs", href: "/sports" },
      { id: 4, text: "Community Service", href: "/community" },
      { id: 5, text: "Alumni Stories", href: "/alumni" },
    ],
    faqs: [
      {
        id: 21,
        active: true,
        question: "What types of events does LFES host?",
        answer:
          "We host academic competitions, cultural festivals, sports meets, talent shows, science fairs, parent forums, and international exchange events throughout the year. Events are curated to celebrate creativity, collaboration, and community.",
      },
      {
        id: 22,
        question: "How can students participate in clubs or ECAs?",
        answer:
          "Students can enroll in clubs at the start of each term. Options include music, dance, robotics, debate, art, Model UN, coding, entrepreneurship, Scouts, and more. Club coordinators guide students based on interests and skill levels.",
      },
      {
        id: 23,
        question: "Do you organize educational trips or excursions?",
        answer:
          "Yes. Grade-wise field trips, leadership camps, university visits, and international study tours are organized to extend learning beyond the classroom. Safety guidelines and parental consent are strictly followed.",
      },
      {
        id: 24,
        question: "How are parents informed about events?",
        answer:
          "Parents receive event calendars via email, WhatsApp broadcasts, and the LFES mobile app. Important updates are also posted on the website, social media channels, and sent home through circulars.",
      },
      {
        id: 25,
        question: "Can alumni participate in school programs?",
        answer:
          "Absolutely. Our alumni network often collaborates as speakers, mentors, and judges for competitions. They also lead community service drives, career talks, and scholarship initiatives for current students.",
      },
    ],
  },
];

export default function FaqArea() {
  return (
    <section
      className="tp-faq-area tp-faq-p pt-120 pb-120"
      style={{
        backgroundImage: `url(/assets/img/bg/a.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        position: "relative",
        minHeight: "100vh",
      }}
    >
      <style jsx>{`
        .nav-tabs {
          border: none !important;
          margin-bottom: 40px;
        }
        .nav-tabs .nav-link {
          border: none !important;
          box-shadow: none !important;
        }
        .nav-tabs .nav-link.active {
          color: #ffffff !important;
          background: transparent !important;
          position: relative;
        }
        .nav-tabs .nav-link.active::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 40px;
          height: 3px;
          background: #ffffff;
          border-radius: 2px;
        }
        .accordion-button {
          box-shadow: none !important;
        }
        .accordion-button:focus {
          box-shadow: none !important;
          border-color: transparent !important;
        }
      `}</style>

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div className="col-lg-12">
          <div className="tp-program-4-section mb-60">
            <h3 className="tp-section-4-title text-center text-light">FAQS </h3>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="tp-instructor-become-tab">
              {/* Enhanced Tab Navigation */}
              <ul
                className="nav nav-tabs justify-content-start justify-content-md-center"
                id="myTab"
                role="tablist"
                style={{ borderBottom: "none", gap: "8px" }}
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
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                        color: item.active
                          ? "#ffffff"
                          : "rgba(255, 255, 255, 0.85)",
                        border: "none",
                        fontWeight: item.active ? "500" : "400",
                        padding: "4px 20px",
                        transition: "all 0.3s ease",
                        background: item.active
                          ? "rgba(0, 121, 192, 0.08)"
                          : "rgba(255, 255, 255, 0.1)",
                        borderRadius: "50px",
                        fontSize: "16px",
                        position: "relative",
                      }}
                      onMouseEnter={(e) => {
                        if (!item.active) {
                          e.currentTarget.style.color = "#ffffff";
                          e.currentTarget.style.background =
                            "rgba(0, 121, 192, 0.05)";
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!item.active) {
                          e.currentTarget.style.color =
                            "rgba(255, 255, 255, 0.75)";
                          e.currentTarget.style.background =
                            "rgba(255, 255, 255, 0.1)";
                        }
                      }}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>

              <div
                className="tab-content"
                id="myTabContent"
                style={{ marginTop: "10px" }}
              >
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
                    <div className="row justify-content-center">
                      <div className="col-lg-10 order-1 order-lg-2">
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
