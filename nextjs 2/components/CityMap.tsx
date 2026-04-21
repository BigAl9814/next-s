export default function CityMap({ cityName, query, title }: { cityName: string; query?: string; title?: string }) {
  const q = encodeURIComponent(query ?? `${cityName}, Ontario, Canada`);
  return (
    <div className="rounded-[2rem] overflow-hidden border-4 border-foreground/10 shadow-pop">
      <iframe title={title ?? `Map of ${cityName}, Ontario — Ottr Plumr service area`}
        src={`https://www.google.com/maps?q=${q}&output=embed`}
        width="100%" height="380" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-[320px] md:h-[420px] block" allowFullScreen />
    </div>
  );
}
