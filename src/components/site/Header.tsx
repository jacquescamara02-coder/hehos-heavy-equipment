import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/hehos-logo.jpg.asset.json";
import { SITE } from "@/lib/site";
import { OrbitRing, orbitVars } from "@/components/originkit/orbit-border-button";

const NAV = [
  { to: "/", label: "Accueil" },
  { to: "/services", label: "Réparation" },
  { to: "/pieces", label: "Pièces de rechange" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 30);
    on(); window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "bg-steel/95 py-2 shadow-elegant backdrop-blur" : "bg-transparent py-4"}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5">
        <Link to="/" className="flex items-center gap-3 sm:gap-4" onClick={() => setOpen(false)}>
          <img src={logo.url} alt="Logo HEHOS" width={96} height={96} className={`shrink-0 rounded-full object-cover ring-[3px] ring-gold shadow-gold transition-all duration-300 hover:rotate-6 ${scrolled ? "h-12 w-12 sm:h-14 sm:w-14" : "h-16 w-16 sm:h-20 sm:w-20"}`} />
          <div className="leading-none text-steel-foreground">
            <div className="font-display text-xl font-bold tracking-wide sm:text-2xl">HEHOS <span className="text-gold">SARL</span></div>
            <div className="mt-1 text-[10px] uppercase tracking-[0.2em] text-sky sm:text-[11px]">Heavy Equipments Hospital</div>
          </div>
        </Link>
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigation principale">
          {NAV.map((n) => (
            <Link key={n.to} to={n.to} activeOptions={{ exact: true }}
              className="rounded-full px-4 py-2 text-sm font-semibold text-steel-foreground/85 transition-colors duration-200 hover:text-gold"
              activeProps={{ className: "!text-gold" }}>{n.label}</Link>
          ))}
          <a href={`tel:${SITE.phones[0]!.replace(/\s/g, "")}`} style={orbitVars({ head: "var(--sky)", inset: -1.5 })} className="orb-host relative ml-3 inline-flex items-center gap-2 rounded-full bg-gradient-gold px-5 py-2.5 text-sm font-bold text-gold-foreground shadow-gold transition-transform duration-200 hover:-translate-y-0.5">
            <OrbitRing />
            <Phone className="h-4 w-4" /> {SITE.phones[0]}
          </a>
        </nav>
        <button className="rounded-lg p-2 text-steel-foreground lg:hidden" aria-label={open ? "Fermer le menu" : "Ouvrir le menu"} onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="mx-4 mt-3 rounded-2xl bg-steel p-4 shadow-elegant lg:hidden" aria-label="Navigation mobile">
          {NAV.map((n) => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="block rounded-lg px-4 py-3 font-semibold text-steel-foreground hover:bg-primary/20" activeProps={{ className: "!text-gold" }} activeOptions={{ exact: true }}>{n.label}</Link>
          ))}
        </nav>
      )}
    </header>
  );
}
