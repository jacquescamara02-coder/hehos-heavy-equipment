import { createFileRoute } from "@tanstack/react-router";
import { Cpu, Cog, Droplets, Zap, Wrench, Truck, ClipboardCheck, Search, Hammer, BadgeCheck } from "lucide-react";
import repair from "@/assets/repair.jpg";
import hero from "@/assets/hero.jpg";
import { Reveal } from "@/components/site/Reveal";
import { Rotate } from "@/components/site/RotatingTitle";
import { PageHero, Eyebrow, Faq, CtaBand } from "@/components/site/Sections";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Réparation & entretien d'engins BTP – HEHOS Lomé" },
      { name: "description", content: "Diagnostic électronique, réparation moteurs, transmissions et hydraulique, entretien préventif d'engins de chantier toutes marques à Lomé." },
      { property: "og:title", content: "Réparation & entretien d'engins BTP – HEHOS" },
      { property: "og:description", content: "Diagnostic, réparation et entretien d'engins de chantier toutes marques au Togo." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Services,
});

const S = [
  { i: Cpu, t: "Diagnostic électronique", d: "Lecture des codes défauts, calibration et paramétrage avec valises multimarques." },
  { i: Cog, t: "Moteurs", d: "Révision, rectification, remplacement d'injecteurs, turbos et culasses." },
  { i: Wrench, t: "Transmissions", d: "Boîtes de vitesses, convertisseurs, ponts et réducteurs finaux." },
  { i: Droplets, t: "Hydraulique", d: "Pompes, distributeurs, vérins, flexibles : recherche de fuites et pertes de pression." },
  { i: Zap, t: "Électricité", d: "Faisceaux, démarreurs, alternateurs, capteurs et éclairage." },
  { i: Truck, t: "Intervention sur chantier", d: "Unité mobile équipée pour dépanner vos engins sur site dans tout le Togo." },
];
const STEPS = [
  { i: Search, t: "Diagnostic", d: "Examen complet et identification précise de la panne." },
  { i: ClipboardCheck, t: "Devis clair", d: "Chiffrage détaillé des pièces et de la main-d'œuvre." },
  { i: Hammer, t: "Réparation", d: "Intervention par nos techniciens avec des pièces adaptées." },
  { i: BadgeCheck, t: "Contrôle & garantie", d: "Essais de performance et remise en service garantie." },
];

function Services() {
  return (
    <>
      <PageHero image={hero} kicker="Réparation · Entretien" title={<>Nous soignons <Rotate tone="gold" words={["tous les engins", "les pelles", "les bulldozers", "les compacteurs"]} /> de chantier</>} text="Pelles hydrauliques, chargeuses, bulldozers, niveleuses, compacteurs, tombereaux — toutes marques, en atelier ou sur site." />
      <section className="blueprint py-24">
        <div className="mx-auto max-w-7xl px-5">
          <Reveal><Eyebrow>Nos spécialités</Eyebrow><h2 className="mt-3 text-4xl font-extrabold uppercase md:text-6xl">Un plateau technique <Rotate words={["complet", "moderne", "multimarque"]} /></h2></Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {S.map((s, i) => (
              <Reveal key={s.t} delay={i * 80}>
                <div className="group h-full rounded-2xl border bg-card p-8 transition-all duration-300 hover:-translate-y-2 hover:border-primary hover:shadow-elegant">
                  <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-sky-soft text-primary transition-colors duration-300 group-hover:bg-gradient-gold group-hover:text-gold-foreground"><s.i className="h-7 w-7" /></span>
                  <h3 className="mt-6 text-2xl font-bold uppercase">{s.t}</h3>
                  <p className="mt-2 text-muted-foreground">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-steel py-24 text-steel-foreground">
        <div className="mx-auto max-w-7xl px-5">
          <Reveal><div className="text-xs font-bold uppercase tracking-[0.25em] text-gold">Notre protocole</div><h2 className="mt-3 text-4xl font-extrabold uppercase md:text-6xl">De l'admission <span className="text-sky">à la remise en service</span></h2></Reveal>
          <ol className="mt-14 grid gap-8 md:grid-cols-4">
            {STEPS.map((s, i) => (
              <Reveal key={s.t} delay={i * 120}>
                <li className="relative">
                  <div className="font-display text-7xl font-extrabold text-steel-foreground/10">0{i + 1}</div>
                  <s.i className="-mt-8 h-10 w-10 text-gold" />
                  <h3 className="mt-4 text-2xl font-bold uppercase">{s.t}</h3>
                  <p className="mt-2 text-steel-foreground/70">{s.d}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>
      <section className="py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2">
          <Reveal><Eyebrow>Contrats d'entretien</Eyebrow><h2 className="mt-3 text-4xl font-extrabold uppercase md:text-5xl">Moins de pannes, <Rotate words={["plus de chantier", "plus de rendement", "plus de sérénité"]} /></h2>
            <p className="mt-5 text-lg text-muted-foreground">Nos contrats préventifs planifient vidanges, changements de filtres, contrôles hydrauliques et diagnostics périodiques de toute votre flotte. Vous réduisez les immobilisations et prolongez la durée de vie de vos engins.</p></Reveal>
          <Reveal delay={150}><img src={repair} alt="Diagnostic hydraulique par un technicien HEHOS" width={1280} height={960} loading="lazy" className="rounded-3xl shadow-elegant" /></Reveal>
        </div>
      </section>
      <Faq />
      <CtaBand />
    </>
  );
}
