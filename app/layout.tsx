import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Devanshu Gupta | Software Engineer",
  description:
    "Software engineer in Indore working on applied AI, document automation, model evaluation, backend services and machine-learning applications.",
  openGraph: {
    title: "Devanshu Gupta | Software Engineer",
    description:
      "Applied AI, document workflows, model evaluation and backend engineering.",
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
