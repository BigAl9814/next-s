import { Clock, Zap, ShieldCheck, Phone } from "lucide-react";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";
export default function UrgencyStrip() {
  return (
    <div className="container -mt-4 md:-mt-6 relative z-10">
      <div className="stamp-card p-4 md:p-5 grid sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 items-center bg-card">
        {[
          { icon: Zap, title: "Same-Day Available", sub: "Most calls scheduled today" },
          { icon: Clock, title: "24/7 Live Dispatch", sub: "A real local tech answers" },
          { icon: ShieldCheck, title: "Licensed & Warrantied", sub: "Workmanship guaranteed" },
        ].map(({ icon: Icon, title, sub }) => (
          <div key={title} className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-accent/15 text-accent grid place-items-center shrink-0"><Icon className="h-5 w-5" /></div>
            <div><div className="font-display text-sm text-primary leading-tight">{title}</div><div className="text-xs text-foreground/70">{sub}</div></div>
          </div>
        ))}
        <a href={`tel:${PHONE_TEL}`} className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent text-accent-foreground font-display px-4 py-3 shadow-soft hover:opacity-95 transition-opacity">
          <Phone className="h-4 w-4" /> Call {PHONE_DISPLAY}
        </a>
      </div>
    </div>
  );
}
