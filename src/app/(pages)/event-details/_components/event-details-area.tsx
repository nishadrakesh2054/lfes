import Image from "next/image";
import EventBox from "./event-box";
import { PlusThreeSvg } from "@/components/svg";
import details_overlay_img from "@/assets/img/event/event/event-details-overlay.png";
import { IEventDT } from "@/types/event-d-t";

type IProps = {
  event:IEventDT
}

export default function EventDetailsArea({event}:IProps) {
  return (
    <section className="tp-event-details-area pt-80 pb-70">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="tp-event-details-wrapper">
              <div className="tp-event-details-about">
                <h3 className="tp-event-details-title">{event.title}</h3>
                <p>The Creating Futures Through Technology Conference – Lfes Tech Center is sponsored jointly by the Mississippi Community College Board and the Mississippi Universities Board with a goal of promoting collaboration as well as transforming teaching and learning on college campuses.
                </p>
                <p>Celebrating our 20th anniversary this year on the gulf coast, the annual conference is designed to be the key venue where the higher education faculty, administrators and IT professionals come to share with one another their strategies, methods, This is an excellent marketing opportunity to reach C-Suite level administrators and influential educators. Some limited vendor exhibitor spaces and sponsorships may still be available with speaking.</p>
                <button className="tp-event-details-about-more">
                  <span><PlusThreeSvg/></span> Show more
                </button>
                <div className="tp-event-details-about-overlay">
                  <Image src={details_overlay_img} alt="details-overlay" style={{ height: "auto" }} />
                </div>
              </div>
              <div className="tp-event-details-cover">
                <h3 className="tp-event-details-title">During this event we’ll cover</h3>
                <ul>
                  <li>How to get started learning JavaScript the right way</li>
                  <li>JavaScript for Beginners & CS Prep curriculum details</li>
                  <li>What the experience of learning in an online classroom is like</li>
                  <li>How these programs prepare you for Coders and other top coding programs.</li>
                </ul>
              </div>
             
            </div>
          </div>
          <div className="col-lg-4">
            <EventBox />
          </div>
        </div>
      
      </div>
    </section>
  )
}
