import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Devanshu Gupta — Software Engineer | AI, ML & MLOps",
  description:
    "Software engineer building applied AI systems, machine learning workflows, document automation and full-stack applications.",
  openGraph: {
    title: "Devanshu Gupta — Software Engineer",
    description:
      "Applied AI, machine learning, backend engineering and product development.",
    type: "website"
  },
  robots: { index: true, follow: true }
};

export default function RootLayout({
  children
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
