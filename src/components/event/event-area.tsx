import Link from "next/link";
import Image from "next/image";
import {  RightArrowTwo, RightSmArrowTwo } from "../svg";
import shape_line from "@/assets/img/unlerline/event-1-svg-1.svg";
import { university_classic_event_data } from "@/data/event-data";
import HoverImgItem from "./hover-img-item";

// export default function EventArea() {
//   return (
//     <section className="event-area grey-bg pt-85 pb-110">
//       <div className="container">
//         <div className="row align-items-end">
//           <div className="col-xl-6 col-md-6">
//             <div
//               className="tp-event-section mb-60 wow fadeInUp"
//               data-wow-delay=".2s"
//             >
//               <div className="tp-section">
//                 <h3 className="tp-section-2-title">
//                   Upcoming{" "}
//                   <span>
//                      Events{" "}
//                     <Image
//                       className="tp-underline-shape-3 wow bounceIn"
//                       data-wow-duration="1.5s"
//                       data-wow-delay=".4s"
//                       src={shape_line}
//                       alt="shape-line"
//                     />
//                   </span>
//                 </h3>
//               </div>
//             </div>
//           </div>
//           <div className="col-xl-6 col-md-6">
//             <div
//               className="tp-event-section mb-60 wow fadeInUp"
//               data-wow-delay=".2s"
//             >
//               <div className="tp-section">
//                 <h3 className="tp-section-2-title">
//                   Important{" "}
//                   <span>
//                     Notices{" "}
//                     <Image
//                       className="tp-underline-shape-3 wow bounceIn"
//                       data-wow-duration="1.5s"
//                       data-wow-delay=".4s"
//                       src={shape_line}
//                       alt="shape-line"
//                     />
//                   </span>
//                 </h3>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="d-flex flex-column align-items-start ">
//           <div className="tp-event-wrap wow fadeInUp" data-wow-delay=".3s">
//             {university_classic_event_data.map((item) => (
//               <div key={item.id} className="tp-event-item">
//                 <div className="row align-items-center">
//                   <div className="col-md-2">
//                     <div className="tp-event-list">
//                       <h4 className="tp-event-list-count">{item.date.day}</h4>
//                       <span>
//                         {item.date.month}, {item.date.year}
//                       </span>
//                     </div>
//                   </div>
//                   <div className="col-md-9">
//                     <div className="tp-event-content">
//                       <h3 className="tp-event-title">
//                         <HoverImgItem img={item.image} title={item.title} />
//                       </h3>
//                       <div className="tp-event-info">
//                         <span>
//                           <i className="fa-sharp fa-light fa-clock"></i>
//                           {item.time}
//                         </span>
//                         <span>
//                           <i className="fa-sharp fa-light fa-location-dot"></i>
//                           {item.location}
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="col-md-1">
//                     <div className="tp-event-arrow text-lg-end">
//                       <Link href={`/event-details/${item.id}`}>
//                         <span>
//                           <RightArrowThree />
//                         </span>
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div className="tp-event-btn text-md-end mb-70">
//             <Link className="tp-btn" href="/event">
//               See More Events
//               <span>
//                 <RightArrow />
//               </span>
//             </Link>
//           </div>
//         </div>
        
//       </div>
//     </section>
//   );
// }


export default function EventArea() {
  return (
    <section className="event-area grey-bg pt-85 pb-110">
      <div className="container">
        <div className="row">
          {/* Left Column - Upcoming Events */}
          <div className="col-lg-6 mb-4">
            <div className="tp-event-section">
              <div className="tp-section mb-4">
                <h3 className="tp-section-2-title">
                  Upcoming{" "}
                  <span>
                    Events{" "}
                    <Image
                      className="tp-underline-shape-3 wow bounceIn"
                      data-wow-duration="1.5s"
                      data-wow-delay=".4s"
                      src={shape_line}
                      alt="shape-line"
                    />
                  </span>
                </h3>
              </div>

              {/* Event Items */}
              <div className="tp-event-wrap">
                {university_classic_event_data.slice(0, 2).map((item) => (
                  <div key={item.id} className="tp-event-item mb-3">
                    <div className="row align-items-center">
                      <div className="col-2">
                        <div className="tp-event-list">
                          <h4 className="tp-event-list-count">{item.date.day}</h4>
                          <span>{item.date.month}, {item.date.year}</span>
                        </div>
                      </div>
                      <div className="col-9">
                        <div className="tp-event-content">
                          <h3 className="tp-event-title">
                            <HoverImgItem img={item.image} title={item.title} /> <span><Link href={`/event-details/${item.id}`}>
                          <RightArrowTwo />
                        </Link></span>
                          </h3>
                          <div className="tp-event-info">
                            <span>
                              <i className="fa-sharp fa-light fa-clock"></i>
                              {item.time}
                            </span>
                            <span>
                              <i className="fa-sharp fa-light fa-location-dot"></i>
                              {item.location}
                            </span>
                          </div>
                        </div>
                      </div>
                    
                    </div>
                  </div>
                ))}
              </div>

              {/* Button */}
              <div className="tp-event-btn text-start mt-3">
                <Link className="tp-btn" href="/event">
                  See More Events <RightSmArrowTwo />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column - Important Notices */}
          <div className="col-lg-6 mb-4">
            <div className="tp-event-section">
              <div className="tp-section mb-4">
                <h3 className="tp-section-2-title">
                  Important{" "}
                  <span>
                    Notices{" "}
                    <Image
                      className="tp-underline-shape-3 wow bounceIn"
                      data-wow-duration="1.5s"
                      data-wow-delay=".4s"
                      src={shape_line}
                      alt="shape-line"
                    />
                  </span>
                </h3>
              </div>

              {/* Notice Items */}
              <div className="tp-event-wrap">
               {university_classic_event_data.slice(2,4).map((item) => (
                  <div key={item.id} className="tp-event-item mb-3">
                    <div className="row align-items-center">
                      <div className="col-2">
                        <div className="tp-event-list">
                          <h4 className="tp-event-list-count">{item.date.day}</h4>
                          <span>{item.date.month}, {item.date.year}</span>
                        </div>
                      </div>
                      <div className="col-9">
                        <div className="tp-event-content">
                          <h3 className="tp-event-title">
                            <HoverImgItem img={item.image} title={item.title} /> <span> <Link href={`/event-details/${item.id}`}>
                      <RightArrowTwo />
                        </Link></span>
                          </h3>
                          
                         
                        </div>
                      </div>
                    
                    </div>
                  </div>
                ))}
              </div>

              {/* Button */}
              <div className="tp-event-btn text-start mt-3">
                <Link className="tp-btn" href="/event">
                  See More Notices <RightSmArrowTwo />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
