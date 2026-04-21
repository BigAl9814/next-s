import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Ottr Plumr | 24/7 Niagara Plumber — Free Quote",
  description: "Book a Niagara plumber today — call 289-488-1007 or message us for fast, free quotes on plumbing, heating, drains, water heaters & emergency service. 187 King St, Welland, ON. 24/7 response.",
  alternates: { canonical: "/contact" },
  robots: { index: true, follow: true },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
