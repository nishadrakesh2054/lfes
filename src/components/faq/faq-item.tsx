type IProps = {
  faq: {
    id: number;
    active?: boolean;
    question: string;
    answer: string;
  };
  parentId: string;
};

export default function FaqItem({ faq, parentId }: IProps) {
  return (
    <div
      className={`accordion-item ${faq.active ? "expand" : ""}`}
      key={faq.id}
      style={{
        marginBottom: "12px",
        border: "1px solid #e0e0e0",
        borderRadius: "8px",
        overflow: "hidden",
      }}
    >
      <h2 className="accordion-header">
        <button
          className={`accordion-button ${
            faq.active ? "faq-expend" : "collapsed"
          }`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#flush-collapse${faq.id}`}
          aria-expanded="false"
          aria-controls={`flush-collapse${faq.id}`}
          style={{
            fontSize: "15px",
            fontWeight: "500",
            lineHeight: "1.5",
            color: "#161613",
            padding: "16px 20px",
            backgroundColor: faq.active ? "#f8f9fa" : "#ffffff",
            border: "none",
            boxShadow: "none",
            textAlign: "left",
          }}
        >
          {faq.question}
          <span className="accordion-btn" style={{ color: "#0079c0" }}></span>
        </button>
      </h2>
      <div
        id={`flush-collapse${faq.id}`}
        className={`accordion-collapse collapse ${faq.active ? "show" : ""}`}
        data-bs-parent={`#${parentId}`}
      >
        <div
          className="accordion-body"
          style={{
            fontSize: "14px",
            lineHeight: "1.7",
            color: "#57595f",
            padding: "20px",
            backgroundColor: "#ffffff",
          }}
        >
          {faq.answer}
        </div>
      </div>
    </div>
  );
}
