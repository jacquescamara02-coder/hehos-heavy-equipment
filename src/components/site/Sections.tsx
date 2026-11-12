import { useState, type ReactNode } from "react";
import { Link, useRouter } from "@tanstack/react-router";
import { ChevronDown, Quote, Star, ArrowRight, ArrowLeft } from "lucide-react";
import { Reveal } from "./Reveal";
import { SITE, waLink } from "@/lib/site";
import { OrbitRing, orbitVars } from "@/components/originkit/orbit-border-button";

export function Eyebrow({ children }: { children: ReactNode }) {
  return <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-primary"><span className="h-0.5 w-8 bg-gold" />{children}</div>;
}

export function PageHero({ title, kicker, text, image }: { title: ReactNode; kicker: string; text: string; image: string }) {
  return (
    <section className="relative flex min-h-[62vh] items-end overflow-hidden bg-steel pt-32 pb-16">
      <img src={image} alt="" width={1920} height={1080} className="absolute inset-0 h-full w-full object-cover animate-kenburns" />
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="relative mx-auto w-full max-w-7xl px-5">
        <BackButton />
        <Reveal>
          <div className="text-xs font-bold uppercase tracking-[0.3em] text-gold">{kicker}</div>
          <h1 className="mt-4 max-w-4xl text-5xl font-extrabold uppercase leading-[0.95] text-steel-foreground md:text-7xl">{title}</h1>
          <p className="mt-6 max-w-2xl text-lg text-steel-foreground/80">{text}</p>
        </Reveal>
      </div>
    </section>
  );
}

const REVIEWS = [
  { n: "Kossi A.", r: "Chef de chantier, Lomé", t: "Notre pelle CAT 320 était immobilisée depuis deux semaines. HEHOS a trouvé la panne hydraulique en une journée. Travail sérieux." },
  { n: "Aïcha B.", r: "Gérante, entreprise de travaux publics", t: "Pièces d'origine disponibles rapidement et prix honnêtes. Ils sont devenus notre garage de référence." },
  { n: "Jean-Paul M.", r: "Directeur technique, carrière", t: "Intervention sur site à Tsévié pour notre chargeuse. Équipe ponctuelle, bien équipée et très professionnelle." },
  { n: "Ibrahim T.", r: "Entrepreneur BTP", t: "Diagnostic électronique précis sur notre niveleuse Komatsu. Enfin un atelier qui maîtrise toutes les marques." },
  { n: "Mawuli D.", r: "Société de location d'engins", t: "Contrat d'entretien préventif pour toute notre flotte : beaucoup moins de pannes depuis un an." },
  { n: "Sandra K.", r: "Responsable logistique", t: "Réponse sur WhatsApp en quelques minutes et devis clair. Je recommande HEHOS sans hésiter." },
];

export function Testimonials() {
  const list = [...REVIEWS, ...REVIEWS];
  return (
    <section className="overflow-hidden bg-sky-soft py-24">
      <div className="mx-auto max-w-7xl px-5">
        <Reveal><Eyebrow>Avis clients</Eyebrow><h2 className="mt-3 text-4xl font-extrabold uppercase md:text-6xl">Ils nous confient <span className="text-primary">leurs engins</span></h2></Reveal>
      </div>
      <div className="mt-12 flex w-max gap-6 animate-marquee" aria-label="Avis clients défilants">
        {list.map((r, i) => (
          <figure key={i} className="w-[340px] shrink-0 rounded-2xl border bg-card p-7 shadow-elegant transition-transform duration-300 hover:-translate-y-1 md:w-[400px]">
            <Quote className="h-8 w-8 text-gold" aria-hidden="true" />
            <div className="mt-3 flex gap-1" aria-label="5 étoiles sur 5">{Array.from({ length: 5 }).map((_, k) => <Star key={k} className="h-4 w-4 fill-gold text-gold" />)}</div>
            <blockquote className="mt-4 text-foreground/85">« {r.t} »</blockquote>
            <figcaption className="mt-6 flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-sky font-display text-lg font-bold text-primary-foreground">{r.n[0]}</span>
              <span><span className="block font-bold">{r.n}</span><span className="text-sm text-muted-foreground">{r.r}</span></span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

const FAQS = [
  { q: "Quelles marques d'engins réparez-vous ?", a: "Toutes les marques : Caterpillar, Komatsu, Volvo, JCB, Hitachi, Liebherr, Hyundai, Doosan, Case, New Holland, SDLG, Shantui et bien d'autres." },
  { q: "Pouvez-vous intervenir directement sur mon chantier ?", a: "Oui. Nos techniciens se déplacent à Lomé et dans tout le Togo avec l'outillage de diagnostic nécessaire pour limiter l'immobilisation de vos engins." },
  { q: "Vendez-vous des pièces d'origine ?", a: "Nous proposons des pièces d'origine et des pièces adaptables de qualité : filtres, pompes hydrauliques, moteurs, transmissions, trains de chenilles, dents de godet, joints et kits." },
  { q: "Comment obtenir un devis ?", a: "Remplissez le formulaire de la page Contact ou écrivez-nous sur WhatsApp au +228 90 07 84 15 avec la marque, le modèle et la description de la panne." },
  { q: "Proposez-vous des contrats d'entretien ?", a: "Oui, nous mettons en place des contrats d'entretien préventif et curatif adaptés à la taille de votre flotte." },
  { q: "Où se trouve votre atelier ?", a: "À Hédzranawoé, Sagbo-Ville, à Lomé (Togo). Le plan d'accès est disponible sur la page Contact." },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="blueprint py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[1fr_1.4fr]">
        <Reveal>
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="mt-3 text-4xl font-extrabold uppercase md:text-6xl">Questions <span className="text-primary">fréquentes</span></h2>
          <p className="mt-5 text-muted-foreground">Une autre question ? Notre équipe vous répond directement sur WhatsApp.</p>
          <a href={waLink()} target="_blank" rel="noopener noreferrer" className="orb-host relative mt-6 inline-flex items-center gap-2 rounded-full bg-steel px-6 py-3 font-bold text-steel-foreground transition-transform duration-200 hover:-translate-y-0.5"><OrbitRing />Poser ma question <ArrowRight className="h-4 w-4" /></a>
        </Reveal>
        <div className="space-y-3">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 60}>
                <div className={`rounded-2xl border bg-card transition-shadow duration-300 ${isOpen ? "shadow-elegant" : ""}`}>
                  <button type="button" aria-expanded={isOpen} onClick={() => setOpen(isOpen ? null : i)} className="flex w-full items-center justify-between gap-4 p-6 text-left">
                    <span className="font-display text-xl font-bold">{f.q}</span>
                    <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${isOpen ? "rotate-180 bg-gold text-gold-foreground" : "bg-sky-soft text-primary"}`}><ChevronDown className="h-5 w-5" /></span>
                  </button>
                  <div className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                    <div className="overflow-hidden"><p className="px-6 pb-6 text-muted-foreground">{f.a}</p></div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function MapBlock() {
  return (
    <div className="overflow-hidden rounded-3xl border shadow-elegant">
      <iframe title="Localisation HEHOS à Hédzranawoé, Lomé" className="h-[420px] w-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
        src={`https://maps.google.com/maps?q=${encodeURIComponent(SITE.mapQuery)}&z=15&output=embed`} />
    </div>
  );
}

export function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-gradient-sky py-20">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 md:flex-row md:items-center">
        <Reveal>
          <h2 className="text-4xl font-extrabold uppercase text-primary-foreground md:text-5xl">Engin en panne ? <br />On s'en occupe aujourd'hui.</h2>
        </Reveal>
        <Reveal delay={150}>
          <div className="flex flex-wrap gap-3">
            <Link to="/contact" style={orbitVars({ head: "var(--primary-foreground)", inset: -1.5 })} className="orb-host relative rounded-full bg-gradient-gold px-7 py-4 font-bold text-gold-foreground shadow-gold transition-transform duration-200 hover:-translate-y-1"><OrbitRing />Demander un devis</Link>
            <a href={waLink()} target="_blank" rel="noopener noreferrer" className="orb-host relative rounded-full bg-steel px-7 py-4 font-bold text-steel-foreground transition-transform duration-200 hover:-translate-y-1"><OrbitRing />WhatsApp direct</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function BackButton() {
  const router = useRouter();
  const goBack = () => {
    if (typeof window !== "undefined" && window.history.length > 1) router.history.back();
    else router.navigate({ to: "/" });
  };
  return (
    <button type="button" onClick={goBack} aria-label="Retour à la page précédente"
      className="orb-host relative group mb-8 inline-flex cursor-pointer items-center gap-2 rounded-full border border-steel-foreground/25 bg-steel/50 px-5 py-2.5 text-sm font-bold uppercase tracking-widest text-steel-foreground backdrop-blur transition-all duration-200 hover:border-gold hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold">
      <OrbitRing />
      <ArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1" /> Retour
    </button>
  );
}
