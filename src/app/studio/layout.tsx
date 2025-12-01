import { Metadata } from "next";
import StudioStyles from "./studio-styles";

export const metadata: Metadata = {
  title: "Sanity Studio",
  description: "Sanity Studio for content management",
};

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StudioStyles />
      {children}
    </>
  );
}
