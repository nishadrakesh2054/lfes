import Image from "next/image";

const navData = [
  {
    id: "profile",
    title: "Student Clubs",
    ariaControls: "profile",
    isActive: true,
  },
  {
    id: "home",
    title: "Housing & Dining",
    ariaControls: "home",
    isActive: false,
  },

  {
    id: "contact",
    title: "Arts & Culture",
    ariaControls: "contact",
    isActive: false,
  },
  {
    id: "Moscow",
    title: "LFES School",
    ariaControls: "Moscow",
    isActive: false,
  },
];

const tabContentData = [
  {
    id: "home",
    active: true,
    imgSrc: "/assets/img/lfesimages/HousingDining.png",
    title: "Housing & Dining",
    description:
      "Student Housing provides a home for eligible undergraduate and graduate students, including couples and families.",
    thumbImgSrc: "/assets/img/lfesimages/HousingDining.png",
  },
  {
    id: "profile",
    imgSrc: "/assets/img/lfesimages/Students-Clubs.png",
    title: "Student Clubs",
    description:
      "Student Housing provides a home for eligible undergraduate and graduate students, including couples and families.",
    thumbImgSrc: "/assets/img/lfesimages/Students-Clubs.png",
  },
  {
    id: "contact",
    imgSrc: "/assets/img/campus/campus/campus-student-4.jpg",
    title: "Arts  Sports & Culture",
    description:
      "Student Housing provides a home for eligible undergraduate and graduate students, including couples and families.",
    thumbImgSrc: "/assets/img/campus/campus/campus-student.jpg",
  },
  {
    id: "Moscow",
    imgSrc: "/assets/img/lfesimages/LFES-SChool.png",
    title: "LFES School",
    description:
      "Student Housing provides a home for eligible undergraduate and graduate students, including couples and families.",
    thumbImgSrc: "/assets/img/lfesimages/LFES-SChool.png",
  },
];

export default function CampusStudentArea() {
  return (
    <section className="tp-campus-student-area grey-bg py-4">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div
              id="down"
              className="tp-campus-student-box pb-100 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="tp-campus-student-heading text-center">
                <h3 className="tp-campus-student-title">
                  Student&apos;s Life at LFES
                </h3>
                <p>
                  Life at LFES SCHOOL is enriching, exciting, and energizing
                </p>
              </div>

              {/* Tab Content */}
              <div className="tp-campus-student-content">
                <div className="tab-content" id="myTabContent">
                  {tabContentData.map((tab) => (
                    <div
                      key={tab.id}
                      className={`tab-pane fade ${
                        tab.active ? "show active" : ""
                      }`}
                      id={tab.id}
                      role="tabpanel"
                      aria-labelledby={`${tab.id}-tab`}
                    >
                      <div className="tp-campus-student-wrap p-relative">
                        <div className="tp-campus-student-thumb">
                          <Image
                            src={tab.imgSrc}
                            alt={tab.title}
                            width={1201}
                            height={580}
                            style={{ height: "auto" }}
                          />
                        </div>
                        <div className="tp-campus-student-item">
                          <h4 className="tp-campus-student-item-title">
                            {tab.title}
                          </h4>
                          <p>{tab.description}</p>
                          <div className="tp-campus-student-item-thumb">
                            <Image
                              src={tab.thumbImgSrc}
                              alt={tab.title}
                              width={260}
                              height={160}
                              style={{ height: "auto" }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tab Navigation */}
              <div className="tp-campus-student-list">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  {navData.map((nav) => (
                    <li key={nav.id} className="nav-item" role="presentation">
                      <button
                        className={`nav-link ${nav.isActive ? "active" : ""}`}
                        id={`${nav.id}-tab`}
                        data-bs-toggle="tab"
                        data-bs-target={`#${nav.id}`}
                        type="button"
                        role="tab"
                        aria-controls={nav.ariaControls}
                        aria-selected={nav.isActive}
                        tabIndex={nav.isActive ? 0 : -1}
                      >
                        {nav.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
