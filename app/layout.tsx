import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Devanshu Gupta — Software Engineer | AI, ML & MLOps",
  description:
    "Devanshu Gupta builds applied AI systems, machine learning workflows and dependable software products.",
  openGraph: {
    title: "Devanshu Gupta — Software Engineer",
    description: "Applied AI, machine learning and product engineering.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
