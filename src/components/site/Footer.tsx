import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/hehos-logo.jpg.asset.json";
import { SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative bg-steel text-steel-foreground">
      <div className="hazard-stripe h-2" />
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-4 sm:gap-5">
            <img src={logo.url} alt="Logo HEHOS" width={128} height={128} loading="lazy" className="h-20 w-20 shrink-0 rounded-full object-cover ring-[3px] ring-gold shadow-gold sm:h-28 sm:w-28" />
            <div className="font-display text-2xl font-bold leading-tight sm:text-3xl">HEAVY EQUIPMENTS <span className="text-gold">HOSPITAL</span></div>
          </div>
          <p className="mt-5 max-w-md text-steel-foreground/70">Réparation d'engins BTP de toutes marques et vente de pièces de rechange à Lomé. Diagnostic, réparation, entretien, performance.</p>
          <p className="mt-4 font-display text-xl italic text-gold">« {SITE.tagline} »</p>
        </div>
        <div>
          <h3 className="text-lg font-bold uppercase tracking-wider text-sky">Navigation</h3>
          <ul className="mt-4 space-y-2 text-steel-foreground/80">
            <li><Link to="/" className="transition-colors hover:text-gold">Accueil</Link></li>
            <li><Link to="/services" className="transition-colors hover:text-gold">Réparation & entretien</Link></li>
            <li><Link to="/pieces" className="transition-colors hover:text-gold">Pièces de rechange</Link></li>
            <li><Link to="/contact" className="transition-colors hover:text-gold">Contact & devis</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold uppercase tracking-wider text-sky">Coordonnées</h3>
          <ul className="mt-4 space-y-3 text-sm text-steel-foreground/80">
            <li className="flex gap-2"><MapPin className="h-4 w-4 shrink-0 text-gold" />{SITE.address}</li>
            {SITE.phones.map((p) => <li key={p}><a href={`tel:${p.replace(/\s/g, "")}`} className="flex gap-2 hover:text-gold"><Phone className="h-4 w-4 text-gold" />{p}</a></li>)}
            {SITE.emails.map((e) => <li key={e}><a href={`mailto:${e}`} className="flex gap-2 break-all hover:text-gold"><Mail className="h-4 w-4 shrink-0 text-gold" />{e}</a></li>)}
          </ul>
        </div>
      </div>
      <div className="border-t border-steel-foreground/10 py-6 text-center text-xs text-steel-foreground/50">© {new Date().getFullYear()} {SITE.legal} — Lomé, Togo. Tous droits réservés.</div>
    </footer>
  );
}
