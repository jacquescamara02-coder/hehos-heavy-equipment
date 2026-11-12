import { createFileRoute, Link } from "@tanstack/react-router";
import { Filter, Droplets, Cog, Link2, Shovel, CircleDot, Gauge, Package } from "lucide-react";
import parts from "@/assets/parts.jpg";
import fleet from "@/assets/fleet.jpg";
import { Reveal, CountUp } from "@/components/site/Reveal";
import { Rotate } from "@/components/site/RotatingTitle";
import { PageHero, Eyebrow, Testimonials, CtaBand } from "@/components/site/Sections";
import { waLink } from "@/lib/site";
import { OrbitRing, orbitVars } from "@/components/originkit/orbit-border-button";

export const Route = createFileRoute("/pieces")({
  head: () => ({
    meta: [
      { title: "Pièces de rechange engins BTP – HEHOS Lomé" },
      { name: "description", content: "Vente de pièces de rechange pour engins de chantier toutes marques à Lomé : filtres, pompes hydrauliques, moteurs, chenilles, dents de godet." },
      { property: "og:title", content: "Pièces de rechange engins BTP – HEHOS" },
      { property: "og:description", content: "Pièces d'origine et adaptables pour engins de chantier toutes marques au Togo." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Pieces,
});

const CATS = [
  { i: Filter, t: "Filtration", d: "Filtres à huile, carburant, air, hydraulique." },
  { i: Droplets, t: "Hydraulique", d: "Pompes, moteurs, distributeurs, vérins, flexibles." },
  { i: Cog, t: "Moteur", d: "Injecteurs, turbos, joints, segments, kits de révision." },
  { i: Gauge, t: "Transmission", d: "Embrayages, convertisseurs, engrenages, roulements." },
  { i: Link2, t: "Trains de chenilles", d: "Chaînes, galets, barbotins, patins, roues folles." },
  { i: Shovel, t: "Outils d'attaque", d: "Dents de godet, adaptateurs, lames et couteaux." },
  { i: CircleDot, t: "Électricité", d: "Capteurs, démarreurs, alternateurs, faisceaux." },
  { i: Package, t: "Consommables", d: "Huiles, graisses, liquides de refroidissement." },
];

function Pieces() {
  return (
    <>
      <PageHero image={parts} kicker="Pièces de rechange" title={<>La bonne pièce, <Rotate tone="gold" words={["au bon moment", "au bon prix", "d’origine"]} /></>} text="Pièces d'origine et adaptables de qualité pour toutes les marques d'engins BTP. Stock à Lomé et commande rapide." />
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-5">
          <Reveal><Eyebrow>Catalogue</Eyebrow><h2 className="mt-3 text-4xl font-extrabold uppercase md:text-6xl">Nos familles <Rotate words={["de pièces", "de filtres", "d’hydraulique", "de moteurs"]} /></h2></Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {CATS.map((c, i) => (
              <Reveal key={c.t} delay={i * 60}>
                <a href={waLink(`Bonjour HEHOS, je recherche une pièce : ${c.t}. Marque/modèle de l'engin : `)} target="_blank" rel="noopener noreferrer" style={orbitVars({ head: "var(--primary)" })}
                  className="orb-host relative group flex h-full flex-col rounded-2xl border bg-card p-7 transition-all duration-300 hover:-translate-y-2 hover:border-gold hover:shadow-elegant">
                  <OrbitRing />
                  <c.i className="h-9 w-9 text-primary transition-transform duration-300 group-hover:scale-110" />
                  <h3 className="mt-5 text-2xl font-bold uppercase">{c.t}</h3>
                  <p className="mt-2 flex-1 text-muted-foreground">{c.d}</p>
                  <span className="mt-5 text-sm font-bold text-primary group-hover:text-foreground">Demander la disponibilité →</span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden bg-steel py-24">
        <img src={fleet} alt="" width={1280} height={960} loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-25" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 text-center text-steel-foreground md:grid-cols-3">
          {[{ v: 5000, s: "+", l: "Références en stock" }, { v: 48, s: "h", l: "Délai moyen de commande" }, { v: 30, s: "+", l: "Marques couvertes" }].map((x, i) => (
            <Reveal key={x.l} delay={i * 120}><div className="font-display text-7xl font-extrabold text-gold"><CountUp to={x.v} suffix={x.s} /></div><div className="mt-2 font-bold uppercase tracking-widest">{x.l}</div></Reveal>
          ))}
        </div>
      </section>
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-5 text-center">
          <Reveal>
            <Eyebrow>Commande simple</Eyebrow>
            <h2 className="mt-3 text-4xl font-extrabold uppercase md:text-5xl">Envoyez la référence, <Rotate words={["on s’occupe du reste", "on la trouve", "on vous livre"]} /></h2>
            <p className="mt-5 text-lg text-muted-foreground">Une photo de la pièce, la plaque de l'engin ou le numéro de série suffit. Nous vérifions la compatibilité et vous confirmons prix et délai.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a href={waLink("Bonjour HEHOS, je souhaite commander une pièce de rechange.")} target="_blank" rel="noopener noreferrer" className="orb-host relative rounded-full bg-whatsapp px-8 py-4 font-bold text-primary-foreground transition-transform duration-200 hover:-translate-y-1"><OrbitRing />Commander sur WhatsApp</a>
              <Link to="/contact" className="orb-host relative rounded-full bg-steel px-8 py-4 font-bold text-steel-foreground transition-transform duration-200 hover:-translate-y-1"><OrbitRing />Formulaire de demande</Link>
            </div>
          </Reveal>
        </div>
      </section>
      <Testimonials />
      <CtaBand />
    </>
  );
}
