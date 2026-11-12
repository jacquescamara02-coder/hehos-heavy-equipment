import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import fleet from "@/assets/fleet.jpg";
import { Reveal } from "@/components/site/Reveal";
import { Rotate } from "@/components/site/RotatingTitle";
import { PageHero, Eyebrow, MapBlock, Faq } from "@/components/site/Sections";
import { ContactForm } from "@/components/site/ContactForm";
import { SITE, waLink } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & devis – HEHOS SARL, Hédzranawoé Lomé" },
      { name: "description", content: "Contactez HEHOS SARL à Hédzranawoé, Sagbo-Ville, Lomé : +228 90 07 84 15 / +228 98 27 27 77. Devis de réparation et pièces de rechange." },
      { property: "og:title", content: "Contact & devis – HEHOS SARL" },
      { property: "og:description", content: "Demandez un devis de réparation d'engin ou de pièces de rechange à Lomé." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

function Contact() {
  const cards = [
    { i: Phone, t: "Téléphones", lines: SITE.phones.map((p) => ({ l: p, h: `tel:${p.replace(/\s/g, "")}` })) },
    { i: Mail, t: "E-mails", lines: SITE.emails.map((e) => ({ l: e, h: `mailto:${e}` })) },
    { i: MapPin, t: "Atelier", lines: [{ l: SITE.address, h: `https://maps.google.com/?q=${encodeURIComponent(SITE.mapQuery)}` }] },
    { i: Clock, t: "WhatsApp", lines: [{ l: "+228 90 07 84 15", h: waLink() }] },
  ];
  return (
    <>
      <PageHero image={fleet} kicker="Contact · Devis" title={<>Parlons de <Rotate tone="gold" words={["votre engin", "votre panne", "votre devis", "vos pièces"]} /></>} text="Une panne, une pièce à trouver, un contrat d'entretien ? Notre équipe vous répond rapidement." />
      <section className="py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[1fr_1.5fr]">
          <div className="space-y-4">
            <Reveal><Eyebrow>Coordonnées</Eyebrow><h2 className="mt-3 text-4xl font-extrabold uppercase">HEHOS SARL</h2></Reveal>
            {cards.map((c, i) => (
              <Reveal key={c.t} delay={i * 80}>
                <div className="flex gap-4 rounded-2xl border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-elegant">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-sky text-primary-foreground"><c.i className="h-6 w-6" /></span>
                  <div className="min-w-0"><div className="font-display text-lg font-bold uppercase">{c.t}</div>
                    {c.lines.map((l) => <a key={l.l} href={l.h} target={l.h.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="block break-words text-muted-foreground transition-colors hover:text-primary">{l.l}</a>)}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={150}><ContactForm /></Reveal>
        </div>
      </section>
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-5">
          <Reveal><Eyebrow>Plan d'accès</Eyebrow><h2 className="mb-8 mt-3 text-4xl font-extrabold uppercase md:text-5xl">Hédzranawoé, <span className="text-primary">Sagbo-Ville</span></h2><MapBlock /></Reveal>
        </div>
      </section>
      <Faq />
    </>
  );
}
