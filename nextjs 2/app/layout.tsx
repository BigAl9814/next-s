import type { Metadata } from "next";
import "./globals.css";
import { QueryProvider } from "@/components/QueryProvider";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import EmergencyCTA from "@/components/EmergencyCTA";

export const metadata: Metadata = {
  title: { default: "Niagara Plumber & Heating | 24/7 Service | Ottr Plumr", template: "%s | Ottr Plumr" },
  description: "Licensed Niagara plumbers & HVAC techs — 24/7 emergency plumbing, drain cleaning, water heater repair, sump pumps, furnaces & boilers. Same-day service in St. Catharines, Niagara Falls & Welland. Call 289-488-1007.",
  metadataBase: new URL("https://plumr.ca"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bowlby+One&family=Caveat:wght@600&family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <QueryProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <div className="min-h-screen flex flex-col bg-background">
              <Header />
              <main className="flex-1 pb-20">{children}</main>
              <Footer />
              <EmergencyCTA />
            </div>
          </TooltipProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
