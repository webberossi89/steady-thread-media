import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a GTM Assessment | Steady Thread Media",
  description:
    "Book a free 30-minute GTM assessment to diagnose where your outreach is breaking down and what a signal-based pipeline system would look like for your motion.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
