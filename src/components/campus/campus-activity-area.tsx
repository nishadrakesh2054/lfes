import Image from "next/image";
import { UpArrowTwo } from "../svg";

const activities = [
  {
    id: 3,
    title: "Sports & Games",
    icon: "/assets/img/campus/campus/ball.svg",
    delay: ".3s",
    items: ["Football", "Basketball", "Cricket", "Athletics"],
  },
  {
    id: 1,
    title: "Cultural & Creative",
    icon: "/assets/img/campus/campus/ball.svg",
    delay: ".5s",
    items: ["Music Club", "Dance Club", "Art & Craft", "Drama"],
  },
  {
    id: 2,
    title: "Student Activities",
    icon: "/assets/img/campus/campus/ball.svg",
    delay: ".7s",
    items: ["Debate & Quiz", "Science Exhibition", "Spelling Bee", "Yoga"],
  },
];

export default function CampusActivityArea() {
  return (
    <section className="tp-campus-activity-area  pt-80 pb-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="tp-campus-activity-heading mb-70">
              <h3 className="tp-campus-activity-title">
                Explore exciting activities and programs <br />
                that help students learn, grow, and shine
              </h3>
            </div>
          </div>

          {activities.map((activity, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div
                className={`tp-campus-activity-content wow fadeInUp`}
                data-wow-delay={activity.delay}
              >
                <h4 className="tp-campus-activity-list-title">
                  <span>
                    <Image
                      src={activity.icon}
                      alt="Activity Icon"
                      width={37}
                      height={36}
                    />
                  </span>
                  {activity.title}
                </h4>
                <div className="tp-campus-activity-list">
                  <ul>
                    {activity.items.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        <a href="#">
                          {item}{" "}
                          <span>
                            <UpArrowTwo />
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
