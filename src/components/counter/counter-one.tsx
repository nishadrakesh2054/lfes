import React from "react";
import CounterItem from "./counter-item";

const counterData = [
    { id: 3, count: 45, suffix: "+", duration: 1, title: "Years of Excellence" },

  { id: 1, count: 10, suffix: "k", duration: 1, title: "Happy Students" },
  { id: 2, count: 300, suffix: "+", duration: 1, title: "Teachers & Staff" },
  { id: 4, count: 98, suffix: "%", duration: 1, title: "Success Rates" },
];

export default function CounterOne() {
  return (
    <section className="counter-area tp-counter-wrap mb-90">
      <div className="container">
        <div
          className="tp-counter-bg wow fadeInUp"
          data-wow-delay=".3s"
          data-background="assets/img/bg/b.jpg"
          style={{ backgroundImage: `url(/assets/img/bg/b.jpg)` }}
        >
          <div className="row">
            {counterData.map((item) => (
            <div key={item.id} className="col-lg-3 col-md-6">
              <div className="tp-counter-item text-center">
                <h3 className="tp-counter-count mb-10">
                  <CounterItem min={0} max={item.count}/>
                  {item.suffix}
                </h3>
                <p>{item.title}</p>
              </div>
            </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
