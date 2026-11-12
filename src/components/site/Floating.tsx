import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { waLink } from "@/lib/site";
import { OrbitRing, orbitVars } from "@/components/originkit/orbit-border-button";

export function WhatsAppButton() {
  return (
    <a href={waLink()} target="_blank" rel="noopener noreferrer" aria-label="Discuter sur WhatsApp au +228 90 07 84 15"
      className="group fixed bottom-6 left-6 z-50 flex items-center gap-3">
      <span style={orbitVars({ width: 2, glow: 6, arc: 250 })} className="orb-host group-hover:scale-110 relative flex h-16 w-16 items-center justify-center rounded-full bg-whatsapp text-primary-foreground shadow-elegant transition-transform duration-300">
        <OrbitRing />
        <span className="absolute inset-0 rounded-full bg-whatsapp animate-ping-soft" />
        <svg viewBox="0 0 24 24" className="relative h-8 w-8 fill-current" aria-hidden="true"><path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35zM12.05 21.8h-.01a9.86 9.86 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.87 9.87 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.9-9.88 2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 0 1 2.89 6.99c0 5.45-4.44 9.88-9.89 9.88zm8.41-18.3A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.89 0-3.18-1.24-6.16-3.48-8.41z"/></svg>
      </span>
      <span className="hidden rounded-full bg-card px-4 py-2 text-sm font-bold text-foreground shadow-elegant opacity-0 transition-all duration-300 group-hover:opacity-100 sm:block">Écrivez-nous</span>
    </a>
  );
}

export function ScrollTop() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const on = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setP(h > 0 ? window.scrollY / h : 0);
    };
    on(); window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  const visible = p > 0.06;
  const C = 2 * Math.PI * 26;
  return (
    <button type="button" aria-label="Remonter en haut de la page"
      onClick={() => window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" })}
      style={orbitVars({ width: 2, glow: 6, arc: 250 })}
      className={`orb-host fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-steel text-gold shadow-elegant transition-all duration-300 hover:-translate-y-1 ${visible ? "opacity-100" : "pointer-events-none translate-y-6 opacity-0"}`}>
      <OrbitRing />
      <svg className="absolute inset-0 -rotate-90" viewBox="0 0 60 60" aria-hidden="true">
        <circle cx="30" cy="30" r="26" fill="none" stroke="currentColor" strokeOpacity=".15" strokeWidth="3" />
        <circle cx="30" cy="30" r="26" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeDasharray={C} strokeDashoffset={C * (1 - p)} />
      </svg>
      <ArrowUp className="relative h-6 w-6" />
      <span className="sr-only">{Math.round(p * 100)}%</span>
    </button>
  );
}
