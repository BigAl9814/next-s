import type { Metadata } from "next";
import Link from "next/link";
import { Phone, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SERVICES } from "@/lib/services";
import { PHONE_TEL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Niagara Plumbing & Heating Services | Ottr Plumr",
  description: "Full-service plumber & HVAC in Niagara — drain cleaning, water heater install & repair, sump pumps, leak detection, furnace & boiler service. Same-day, licensed, warrantied. Call 289-488-1007.",
  alternates: { canonical: "/services" },
};

const ld = [
  { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://plumr.ca/" }, { "@type": "ListItem", position: 2, name: "Services", item: "https://plumr.ca/services" }] },
  { "@context": "https://schema.org", "@type": "CollectionPage", "@id": "https://plumr.ca/services#collection", url: "https://plumr.ca/services", name: "Niagara Plumbing & Heating Services", about: { "@id": "https://plumr.ca/#business" },
    mainEntity: { "@type": "ItemList", numberOfItems: SERVICES.length, itemListElement: SERVICES.map((s, i) => ({ "@type": "ListItem", position: i + 1, url: `https://plumr.ca/services/${s.slug}`, item: { "@type": "Service", name: s.title, url: `https://plumr.ca/services/${s.slug}`, provider: { "@id": "https://plumr.ca/#business" } } })) } },
];

export default function ServicesPage() {
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <section className="bg-gradient-hero py-16 md:py-24">
        <div className="container text-center max-w-3xl">
          <p className="font-script text-2xl text-accent">Our services</p>
          <h1 className="font-display text-5xl md:text-6xl text-primary mt-1">Everything plumbing.<br />Everything heating.</h1>
          <p className="text-foreground/80 mt-5 text-lg">From a dripping tap to a full commercial install — one trusted local team for it all.</p>
        </div>
        <div className="water-band h-10 mt-12" aria-hidden="true" />
      </section>
      <section className="container pt-12 md:pt-16">
        <div className="max-w-3xl mx-auto space-y-5 text-center">
          <p className="text-foreground/80 text-base md:text-lg leading-relaxed">Ottr Plumr is a full-service plumbing &amp; heating company serving the Niagara Region — residential, commercial, and emergency. One licensed local crew, one phone number, every job warrantied.</p>
        </div>
      </section>
      <section className="container py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-6">
          {SERVICES.map((s) => (
            <article key={s.slug} className="stamp-card p-7 flex flex-col">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-14 w-14 rounded-2xl bg-primary text-primary-foreground grid place-items-center shadow-soft"><s.icon className="h-7 w-7" /></div>
                <h2 className="font-display text-2xl text-primary">{s.title}</h2>
              </div>
              <p className="text-foreground/80">{s.shortDesc}</p>
              <ul className="grid sm:grid-cols-2 gap-2 mt-5">
                {s.points.slice(0, 4).map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-accent mt-0.5 shrink-0" /><span>{p}</span></li>
                ))}
              </ul>
              <div className="mt-6 pt-5 border-t border-border/60">
                <Button asChild variant="deep" className="w-full sm:w-auto"><Link href={`/services/${s.slug}`}>Learn more <ArrowRight /></Link></Button>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="container pb-16 md:pb-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="font-script text-2xl text-accent">How we work</p>
          <h2 className="font-display text-4xl text-primary mt-1">A simple, honest process</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[{ step: "1", title: "You call or book", desc: "Phone, online form, or email — we confirm and give you a clear arrival window." },
            { step: "2", title: "We diagnose first", desc: "We arrive, listen, look, and find the actual root cause — not just the loudest symptom." },
            { step: "3", title: "Flat-rate quote", desc: "We write up the fix, walk you through options, and you decide. No pressure." },
            { step: "4", title: "Clean, warrantied work", desc: "Drop cloths down, work done right, mess cleaned up, written warranty in your inbox." }].map((s) => (
            <article key={s.step} className="stamp-card p-6">
              <div className="h-12 w-12 rounded-2xl bg-accent text-accent-foreground grid place-items-center font-display text-2xl shadow-soft mb-4">{s.step}</div>
              <h3 className="font-display text-lg text-primary mb-2">{s.title}</h3>
              <p className="text-sm text-foreground/75">{s.desc}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="bg-gradient-deep text-primary-foreground py-16">
        <div className="container text-center max-w-2xl">
          <h2 className="font-display text-3xl md:text-4xl">Don't see what you need?</h2>
          <p className="opacity-85 mt-3">If it involves pipes or heat, we can probably handle it. Just ask.</p>
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            <Button asChild variant="hero" size="lg"><a href={`tel:${PHONE_TEL}`}><Phone /> Call 289-488-1007</a></Button>
            <Button asChild size="lg" className="bg-card text-primary hover:bg-card/90"><Link href="/contact">Get a Quote <ArrowRight /></Link></Button>
          </div>
        </div>
      </section>
    </div>
  );
}
