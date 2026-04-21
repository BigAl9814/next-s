import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NAP Consistency Checklist | Ottr Plumr Internal SEO Tool",
  description: "Internal NAP consistency checklist for Ottr Plumr — directory submissions, copy-paste fields, and local SEO best practices.",
  robots: { index: false, follow: false },
};

export default function NapLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
