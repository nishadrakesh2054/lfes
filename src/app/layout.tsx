import type { Metadata } from "next";
import "./globals.scss";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--tp-ff-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "LFES - SCHOOL",
  description: "LFES  ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.0/font/bootstrap-icons.css"
        />
      </head>
      <body
        className={poppins.variable}
        style={{ fontFamily: "var(--tp-ff-poppins), sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
