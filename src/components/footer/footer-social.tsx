"use client";

const socialData = [
  {
    id: 1,
    cls: "social-fb",
    href: "https://www.facebook.com",
    iconClass: "bi bi-facebook",
    alt: "Facebook",
    color: "#1877F2",
  },
  {
    id: 2,
    cls: "social-instagram",
    href: "https://www.instagram.com",
    iconClass: "bi bi-instagram",
    alt: "Instagram",
    color: "#E4405F",
  },
  {
    id: 3,
    cls: "social-linkedin",
    href: "https://www.linkedin.com",
    iconClass: "bi bi-linkedin",
    alt: "LinkedIn",
    color: "#0077B5",
  },
  {
    id: 4,
    cls: "social-youtube",
    href: "https://www.youtube.com",
    iconClass: "bi bi-youtube",
    alt: "YouTube",
    color: "#FF0000",
  },
];

export default function FooterSocial() {
  return (
    <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
      {socialData.map((item) => (
        <a
          key={item.id}
          className={item.cls}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={item.alt}
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            backgroundColor: "transparent",
            color: item.color,
            textDecoration: "none",
            transition: "all 0.3s ease",
            fontSize: "20px",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = item.color;
            e.currentTarget.style.color = "white";
            e.currentTarget.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "transparent";
            e.currentTarget.style.color = item.color;
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          <i className={item.iconClass}></i>
        </a>
      ))}
    </div>
  );
}
