import Image from "next/image";
import mission_thumb_1 from "@/assets/img/lfesimages/Vision.png";
import mission_thumb_2 from "@/assets/img/lfesimages/Mission.png";
import mission_thumb_3 from "@/assets/img/lfesimages/Values.png";
import { DownArrowThree } from "../svg";

export default function CampusChooseAreaThree() {
  return (
    <section className="tp-campus-choose-area pt-120 pb-80 ">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="tp-campus-choose-wrapper text-center">
              <div className="tp-campus-choose-btn">
                <p>Mission and values</p>
                <div className="tp-campus-choose-content mb-10">
                  <h2 className="tp-campus-choose-title">
                    The LFES SCHOOL prepare you to <br />
                    launch your career by providing a supportive, <br />
                    creative, and professional.
                  </h2>
                </div>
                <a href="#">
                  <span>
                    <DownArrowThree />
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="tp-mission-valus-thumb mb-30">
              <Image
                className="text-center"
                src={mission_thumb_1}
                alt="mission-thumb"
                style={{ height: "auto" }}
              />
              <div className="tp-mission-valus-content">
                <h4 className="tp-mission-valus-title">Vision</h4>
                <p>
                  Inspiring and transforming lives in <br />
                  a spiritually vital, caring school <br />
                  community to serve God for <br />
                  His glory.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="tp-mission-valus-thumb main pt-100 mb-30 pl-125">
              <Image
                src={mission_thumb_2}
                alt="mission-thumb"
                style={{ height: "auto" }}
              />
              <div className="tp-mission-valus-content">
                <h4 className="tp-mission-valus-title">Mission</h4>
                <p>
                  At Little Flowers English School, we are committed to
                  providing exceptional English education that empowers students
                  to excel academically, think critically, and communicate
                  effectively in a global society.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="tp-mission-valus-thumb mb-30">
              <Image
                className="text-center"
                src={mission_thumb_3}
                alt="mission-thumb"
                style={{ height: "auto" }}
              />
              <div className="tp-mission-valus-content">
                <h4 className="tp-mission-valus-title">Values</h4>
                <p>
                  Our goal is to develop and meet the needs of each child so
                  that he & she becomes a well-rounded tomorrow individual.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
