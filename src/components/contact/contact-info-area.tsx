import { EmailThree, LocationFour, TelSvgTwo } from "../svg";

const contactInfoData = [
  {
    icon: <EmailThree />,
    title: 'Email Us',
    description: 'Contact our support team anytime.',
    linkText: 'info@lfes.edu.np',
    href: 'mailto:info@lfes.edu.np'
  },
  {
    icon: <TelSvgTwo />,
    title: 'Call Us',
    description: 'Available 24/7 for assistance.',
    linkText: '+977 023-530172',
    href: 'tel:+977 023-530172'
  },
  {
    icon: <LocationFour />,
    title: 'Visit Us',
    description: 'Located in Birtamod, Jhapa, Nepal.',
    linkText: 'Birtamod, Jhapa.',
    href: '#'
  }
];


export default function ContactInfoArea() {
    return (
        <section className="tp-contact-info-area tp-contact-p pb-90">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="tp-contact-info-wrapper text-center">
                            <h3 className="tp-contact-main-title">Let us know how we can help</h3>
                        </div>
                        <div className="row">
                            {contactInfoData.map((item, index) => (
                                <div key={index} className="col-lg-4 col-md-6">
                                    <div className="tp-contact-info-item mb-30">
                                        <div className="tp-contact-info-icon">
                                            <span>{item.icon}</span>
                                        </div>
                                        <h4 className="tp-contact-info-title">{item.title}</h4>
                                        <p>{item.description}</p>
                                        <a href={item.href}>{item.linkText}</a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
