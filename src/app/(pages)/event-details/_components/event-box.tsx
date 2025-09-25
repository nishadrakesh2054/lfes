import SocialLinks from "@/components/social/social-links";
import {
  CalenderTwoSvg,
  ClockSvgThree,
  LocationThree,
  Ongoing,
} from "@/components/svg";

export default function EventBox() {
  return (
    <div className="tp-event-details-box">
      <div className="tp-event-details-details">
        <h4 className="tp-event-details-box-title">Event Detail</h4>
        <div className="tp-event-details-list d-flex align-items-center justify-content-between">
          <h5>
            <span>
              <CalenderTwoSvg />
            </span>{" "}
            Start Date
          </h5>
          <span>30 Nov 2024</span>
        </div>
        <div className="tp-event-details-list d-flex align-items-center justify-content-between">
          <h5>
            <span>
              <ClockSvgThree />
            </span>{" "}
            Start Time
          </h5>
          <span>02:00 PM</span>
        </div>

        <div className="tp-event-details-list d-flex align-items-center justify-content-between">
          <h5>
            <span>
              <Ongoing />
            </span>{" "}
            Ongoing
          </h5>
          <span>520</span>
        </div>
        <div className="tp-event-details-list d-flex align-items-center justify-content-between">
          <h5>
            <span>
              <LocationThree />
            </span>{" "}
            Location
          </h5>
          <span>Biratnagar, Nepal</span>
        </div>
      </div>
      <div className="tp-event-details-ticket">
        <div className="tp-event-details-social text-center">
          <SocialLinks />
        </div>
      </div>
    </div>
  );
}
