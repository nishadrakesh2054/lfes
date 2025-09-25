import Image from "next/image";
import mission_main_img from "@/assets/img/our-mission/thumb-1.png";
import mission_thumb_1 from "@/assets/img/our-mission/mission-item-1.jpg";
import mission_thumb_2 from "@/assets/img/our-mission/mission-item-2.jpg";
import mission_thumb_3 from "@/assets/img/our-mission/mission-item-3.jpg";

const missionData = [
  {
    id: 1,
    title: "Excellence in English language instruction",
    description:
      "Encouraging behaviours which <br/> encompass notions of originality, and <br/> problem-solving in all that we do.",
    imgSrc: mission_thumb_1,
  },
  {
    id: 2,
    title: "Holistic character development",
    description:
      "Encouraging behaviours which <br/> encompass notions of originality, and <br/> problem-solving in all that we do.",
    imgSrc: mission_thumb_2,
  },
  {
    id: 3,
    title: "Innovative teaching methodologies",
    description:
      "Encouraging behaviours which <br/> encompass notions of originality, and <br/> problem-solving in all that we do.",
    imgSrc: mission_thumb_3,
  },
    {
    id: 3,
    title: "Global perspective and cultural awareness",
    description:
      "Encouraging behaviours which <br/> encompass notions of originality, and <br/> problem-solving in all that we do.",
    imgSrc: mission_thumb_1,
  },
];

type IProps = {
  top_cls?: string;
};
export default function MissionArea({ top_cls = "grey-bg pt-30" }: IProps) {
  return (
    <section className={`tp-our-mission-area ${top_cls}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div
              className="tp-our-mission-thumb wow fadeInUp"
              data-wow-delay=".3s"
            >
              <Image
                src={mission_main_img}
                alt="mission-img"
                style={{ height: "auto" }}
              />
            </div>
          </div>
          <div className="col-lg-8">
            <div
              className="tp-our-mission-wrapper wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="tp-our-mission-heading">
                <h3 className="tp-our-mission-title">Mission and values</h3>
                <p>
                  At Little Flowers English School, we are committed to
                  providing exceptional English education that empowers students
                  to excel academically, think critically, and communicate
                  effectively in a global society.
                </p>
              </div>

              {missionData.map((item, i) => (
                <div
                  key={item.id}
                  className={`tp-our-mission-item d-flex align-items-center justify-content-center justify-content-md-between ${
                    i !== missionData.length - 1 ? "mb-20" : ""
                  }`}
                >
                  <div className="tp-our-mission-item-content">
                    <h4 className="tp-our-mission-item-title"> {item.id}.{item.title}</h4>
                    <p
                      dangerouslySetInnerHTML={{ __html: item.description }}
                    ></p>
                  
                  </div>
                  <div className="tp-our-mission-item-thumb">
                    <div className={`tp-our-mission-item-thumb-${item.id}`}>
                      <Image
                        src={item.imgSrc}
                        alt={item.title}
                        style={{ height: "auto" }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
