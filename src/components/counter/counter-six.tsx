import CounterItem from "./counter-item";

const counterData = [
  {
    endValue: 45,
    label: "Years of Excellence",
    suffix: "",
  },
  {
    endValue: 10,
    label: "Happy Students",
    suffix: "K",
  },
  {
    endValue: 100,
    label: "Expert Teachers",
    suffix: "+",
  },
  {
    endValue: 98,
    label: "Success Rate",
    suffix: "%",
  },
];


export default function CounterSix() {
  return (
    <section
      className="tp-instructor-counter-area p-relative tp-instructor-bg fix"
      data-background="assets/img/bg/c.jpeg"
      style={{
        backgroundImage: "url(/assets/img/bg/c.jpeg)",
      }}
    >
      <div className="container">
        <div className="row">
          {counterData.map((item, index) => (
            <div key={index} className="col-lg-3 col-sm-6">
              <div className="tp-instructor-counter-item text-center">
                <h3 className="tp-counter-count mb-10">
                  <CounterItem min={0} max={item.endValue} />
                  {item.suffix}
                </h3>
                <p>{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
