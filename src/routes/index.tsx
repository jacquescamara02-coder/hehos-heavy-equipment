import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Cpu, Wrench, ShieldCheck, Gauge, Truck, Clock, Award } from "lucide-react";
import hero from "@/assets/hero.jpg";
import repair from "@/assets/repair.jpg";
import parts from "@/assets/parts.jpg";
import fleet from "@/assets/fleet.jpg";
import { Reveal, CountUp } from "@/components/site/Reveal";
import { Eyebrow, Testimonials, Faq, CtaBand } from "@/components/site/Sections";
import { waLink } from "@/lib/site";
import { OrbitRing, orbitVars } from "@/components/originkit/orbit-border-button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "HEHOS SARL – L'hôpital des engins BTP à Lomé, Togo" },
      { name: "description", content: "Diagnostic, réparation et entretien d'engins de chantier toutes marques, et vente de pièces de rechange à Hédzranawoé, Lomé." },
      { property: "og:title", content: "HEHOS SARL – L'hôpital des engins BTP à Lomé" },
      { property: "og:description", content: "Réparation d'engins BTP toutes marques et pièces de rechange à Lomé, Togo." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const PILLARS = [
  { i: Cpu, t: "Diagnostic", d: "Électronique & mécanique, valises multimarques." },
  { i: Wrench, t: "Réparation", d: "Moteurs, transmissions, hydraulique." },
  { i: ShieldCheck, t: "Entretien", d: "Préventif & curatif, contrats de flotte." },
  { i: Gauge, t: "Performance", d: "Optimisation et longévité de vos engins." },
];
const BRANDS = ["CATERPILLAR", "KOMATSU", "VOLVO", "JCB", "HITACHI", "LIEBHERR", "HYUNDAI", "DOOSAN", "CASE", "SDLG", "SHANTUI", "BOBCAT"];

function Home() {
  return (
    <>
      <section className="relative flex min-h-screen items-center overflow-hidden bg-steel">
        <img src={hero} alt="Techniciens HEHOS réparant une pelle hydraulique dans l'atelier" width={1920} height={1088} className="absolute inset-0 h-full w-full object-cover animate-kenburns" />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="relative mx-auto w-full max-w-7xl px-5 pt-28 pb-20">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-steel/50 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-gold backdrop-blur">Lomé · Togo · Toutes marques</div>
            <h1 className="mt-6 max-w-5xl text-6xl font-extrabold uppercase leading-[0.9] text-steel-foreground md:text-8xl">
              L'hôpital de vos <span className="text-gradient-gold">engins lourds</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-steel-foreground/80 md:text-xl">Diagnostic, réparation et entretien d'engins BTP de toutes marques — et pièces de rechange disponibles. Nous remettons vos machines au travail, vite.</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/contact" style={orbitVars({ head: "var(--sky)" })} className="orb-host group inline-flex items-center gap-2 rounded-full bg-gradient-gold px-8 py-4 font-bold text-gold-foreground shadow-gold transition-transform duration-200 hover:-translate-y-1"><OrbitRing />Demander un devis <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" /></Link>
              <a href={waLink()} target="_blank" rel="noopener noreferrer" className="orb-host inline-flex items-center gap-2 rounded-full border-2 border-sky px-8 py-4 font-bold text-steel-foreground transition-colors duration-200 hover:bg-sky hover:text-steel"><OrbitRing />Urgence WhatsApp</a>
            </div>
          </Reveal>
        </div>
        <div className="absolute inset-x-0 bottom-0 hazard-stripe h-2" />
      </section>

      <section className="relative bg-steel pt-24 pb-24">
        <div className="mx-auto max-w-7xl px-5">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-gold"><span className="h-0.5 w-8 bg-gold" />Nos services<span className="h-0.5 w-8 bg-gold" /></div>
              <h2 className="mt-4 text-3xl font-extrabold uppercase leading-tight text-steel-foreground md:text-5xl">Une prise en charge complète, <span className="text-gold">du diagnostic à la remise en service</span></h2>
              <p className="mt-5 text-lg text-steel-foreground/75">Chaque engin qui entre chez HEHOS bénéficie d'un suivi rigoureux, mené par des techniciens expérimentés et un outillage de pointe.</p>
            </div>
          </Reveal>
        </div>
        <div className="mx-auto mt-14 grid max-w-7xl gap-4 px-5 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((p, i) => (
            <Reveal key={p.t} delay={i * 100}>
              <div className="group h-full rounded-2xl border border-steel-foreground/10 bg-steel-foreground/5 p-7 transition-all duration-300 hover:-translate-y-2 hover:border-gold/50 hover:bg-primary/15">
                <p.i className="h-10 w-10 text-gold transition-transform duration-300 group-hover:scale-110" />
                <h3 className="mt-5 text-2xl font-bold uppercase text-steel-foreground">{p.t}</h3>
                <p className="mt-2 text-steel-foreground/70">{p.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2">
          <Reveal>
            <div className="relative">
              <img src={repair} alt="Mécanicien HEHOS diagnostiquant un circuit hydraulique" width={1280} height={960} loading="lazy" className="rounded-3xl object-cover shadow-elegant" />
              <div className="absolute -bottom-8 -right-4 rounded-2xl bg-gradient-gold p-6 shadow-gold animate-float md:-right-8">
                <div className="font-display text-5xl font-extrabold text-gold-foreground"><CountUp to={24} suffix="h" /></div>
                <div className="text-sm font-bold uppercase text-gold-foreground/80">Délai de diagnostic</div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <Eyebrow>Qui sommes-nous</Eyebrow>
            <h2 className="mt-3 text-4xl font-extrabold uppercase leading-none md:text-6xl">Une clinique <span className="text-primary">pour machines</span> de chantier</h2>
            <p className="mt-6 text-lg text-muted-foreground">Basée à Hédzranawoé, Sagbo-Ville, HEHOS SARL accompagne les entreprises de BTP, carrières, mines et loueurs d'engins au Togo. Comme un hôpital, nous auscultons, soignons et suivons chaque machine.</p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {[{ i: Truck, t: "Intervention sur site" }, { i: Clock, t: "Réactivité 7j/7" }, { i: Award, t: "Techniciens certifiés" }, { i: ShieldCheck, t: "Travail garanti" }].map((x) => (
                <li key={x.t} className="flex items-center gap-3 rounded-xl bg-sky-soft p-4 font-semibold"><x.i className="h-6 w-6 text-primary" />{x.t}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="bg-gradient-sky py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 text-center text-primary-foreground sm:grid-cols-2 lg:grid-cols-4">
          {[{ v: 850, s: "+", l: "Engins réparés" }, { v: 30, s: "+", l: "Marques maîtrisées" }, { v: 5000, s: "+", l: "Pièces en stock" }, { v: 98, s: "%", l: "Clients satisfaits" }].map((x, i) => (
            <Reveal key={x.l} delay={i * 100}>
              <div className="font-display text-6xl font-extrabold md:text-7xl"><CountUp to={x.v} suffix={x.s} /></div>
              <div className="mt-2 text-sm font-bold uppercase tracking-widest text-primary-foreground/85">{x.l}</div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-5">
          <Reveal><Eyebrow>Nos pôles</Eyebrow><h2 className="mt-3 text-4xl font-extrabold uppercase md:text-6xl">Deux métiers, <span className="text-primary">une exigence</span></h2></Reveal>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {[{ img: fleet, t: "Réparation & entretien", d: "Pelles, chargeuses, bulldozers, niveleuses, compacteurs, camions-bennes : toutes marques, en atelier ou sur chantier.", to: "/services" as const },
              { img: parts, t: "Pièces de rechange", d: "Filtres, pompes hydrauliques, moteurs, trains de chenilles, dents de godet : pièces d'origine et adaptables.", to: "/pieces" as const }].map((c, i) => (
              <Reveal key={c.t} delay={i * 150}>
                <Link to={c.to} className="orb-host group relative block h-[460px] overflow-hidden rounded-3xl shadow-elegant">
                  <OrbitRing />
                  <img src={c.img} alt={c.t} width={1280} height={960} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-steel via-steel/40 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-8">
                    <h3 className="text-4xl font-extrabold uppercase text-steel-foreground">{c.t}</h3>
                    <p className="mt-3 max-w-md text-steel-foreground/80">{c.d}</p>
                    <span className="mt-5 inline-flex items-center gap-2 font-bold text-gold">Découvrir <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" /></span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden border-y bg-steel py-8">
        <div className="flex w-max gap-14 animate-marquee">
          {[...BRANDS, ...BRANDS].map((b, i) => <span key={i} className="font-display text-3xl font-bold tracking-widest text-steel-foreground/40 transition-colors hover:text-gold">{b}</span>)}
        </div>
      </section>

      <Testimonials />
      <Faq />
      <CtaBand />
    </>
  );
}
