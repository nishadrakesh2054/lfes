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
        marginBottom: "16px",
        border: "none",
        borderRadius: "12px",
        overflow: "hidden",
        background: faq.active
          ? "linear-gradient(135deg, rgba(0, 121, 192, 0.4) 0%, rgba(0, 121, 192, 0.2) 100%)"
          : "rgba(0, 0, 0, 0.10)",
        backdropFilter: "blur(10px)",
        transition: "all 0.3s ease",
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
            fontSize: "16px",
            fontWeight: faq.active ? "600" : "500",
            lineHeight: "1.6",
            color: faq.active ? "#ffffff" : "rgba(255, 255, 255, 0.85)",
            padding: "20px 24px",
            backgroundColor: "transparent",
            border: "none",
            boxShadow: "none",
            textAlign: "left",
            transition: "all 0.3s ease",
          }}
        >
          {faq.question}
          <span
            className="accordion-btn"
            style={{
              color: faq.active ? "#ffffff" : "rgba(255, 255, 255, 0.7)",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          ></span>
        </button>
      </h2>
      <div
        id={`flush-collapse${faq.id}`}
        className={`accordion-collapse collapse ${faq.active ? "show" : ""}`}
        data-bs-parent={`#${parentId}`}
      >
        <div
          className="accordion-body custom-paragraph"
          style={{
            fontSize: "15px",
            lineHeight: "1.8",
            color: faq.active ? "#ffffff" : "rgba(255, 255, 255, 0.85)",
            padding: "0 24px 24px 24px",
            backgroundColor: "transparent",
          }}
        >
          {faq.answer}
        </div>
      </div>
    </div>
  );
}
