import { useState } from "react";
import { z } from "zod";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const schema = z.object({
  full_name: z.string().trim().min(2, "Indiquez votre nom").max(100),
  phone: z.string().trim().min(6, "Numéro invalide").max(30).regex(/^[+\d\s().-]+$/, "Numéro invalide"),
  email: z.string().trim().max(255).email("E-mail invalide").or(z.literal("")),
  company: z.string().trim().max(120),
  request_type: z.string().min(1).max(60),
  machine: z.string().trim().max(120),
  message: z.string().trim().min(5, "Décrivez votre besoin").max(2000),
});
type Form = z.infer<typeof schema>;
const TYPES = ["Réparation / panne", "Diagnostic électronique", "Entretien préventif", "Achat de pièces de rechange", "Intervention sur chantier", "Autre demande"];
const empty: Form = { full_name: "", phone: "", email: "", company: "", request_type: TYPES[0]!, machine: "", message: "" };

const field = "w-full rounded-xl border bg-background px-4 py-3 text-foreground transition-colors duration-200 placeholder:text-muted-foreground/70 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30";

export function ContactForm() {
  const [f, setF] = useState<Form>(empty);
  const [err, setErr] = useState<Partial<Record<keyof Form, string>>>({});
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const set = (k: keyof Form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => setF({ ...f, [k]: e.target.value });

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    const r = schema.safeParse(f);
    if (!r.success) {
      const m: typeof err = {};
      r.error.issues.forEach((i) => { m[i.path[0] as keyof Form] = i.message; });
      setErr(m); return;
    }
    setErr({}); setState("sending");
    const d = r.data;
    const { error } = await supabase.from("contact_submissions").insert({
      ...d, email: d.email || null, company: d.company || null, machine: d.machine || null,
    });
    if (error) { setState("error"); return; }
    setState("sent"); setF(empty);
  }

  if (state === "sent") return (
    <div className="flex flex-col items-center rounded-3xl border bg-card p-12 text-center shadow-elegant">
      <CheckCircle2 className="h-16 w-16 text-primary" />
      <h3 className="mt-5 text-3xl font-extrabold uppercase">Demande envoyée</h3>
      <p className="mt-3 max-w-md text-muted-foreground">Merci ! Notre équipe vous recontacte rapidement par téléphone ou WhatsApp.</p>
      <button type="button" onClick={() => setState("idle")} className="mt-6 rounded-full bg-steel px-6 py-3 font-bold text-steel-foreground">Envoyer une autre demande</button>
    </div>
  );

  const E = ({ k }: { k: keyof Form }) => err[k] ? <p className="mt-1 text-sm text-destructive">{err[k]}</p> : null;
  return (
    <form onSubmit={submit} noValidate className="rounded-3xl border bg-card p-6 shadow-elegant md:p-10">
      <h3 className="text-3xl font-extrabold uppercase">Demande de devis</h3>
      <p className="mt-2 text-muted-foreground">Réponse sous 24 h ouvrées.</p>
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <div><label htmlFor="full_name" className="mb-1.5 block text-sm font-semibold">Nom complet *</label><input id="full_name" className={field} value={f.full_name} onChange={set("full_name")} maxLength={100} autoComplete="name" /><E k="full_name" /></div>
        <div><label htmlFor="phone" className="mb-1.5 block text-sm font-semibold">Téléphone / WhatsApp *</label><input id="phone" type="tel" className={field} value={f.phone} onChange={set("phone")} maxLength={30} placeholder="+228 ..." autoComplete="tel" /><E k="phone" /></div>
        <div><label htmlFor="email" className="mb-1.5 block text-sm font-semibold">E-mail</label><input id="email" type="email" className={field} value={f.email} onChange={set("email")} maxLength={255} autoComplete="email" /><E k="email" /></div>
        <div><label htmlFor="company" className="mb-1.5 block text-sm font-semibold">Entreprise</label><input id="company" className={field} value={f.company} onChange={set("company")} maxLength={120} /></div>
        <div><label htmlFor="request_type" className="mb-1.5 block text-sm font-semibold">Type de demande *</label><select id="request_type" className={field} value={f.request_type} onChange={set("request_type")}>{TYPES.map((t) => <option key={t}>{t}</option>)}</select></div>
        <div><label htmlFor="machine" className="mb-1.5 block text-sm font-semibold">Engin (marque / modèle)</label><input id="machine" className={field} value={f.machine} onChange={set("machine")} maxLength={120} placeholder="Ex : CAT 320D, Komatsu WA470" /></div>
        <div className="md:col-span-2"><label htmlFor="message" className="mb-1.5 block text-sm font-semibold">Description du besoin *</label><textarea id="message" rows={5} className={field} value={f.message} onChange={set("message")} maxLength={2000} placeholder="Symptômes de la panne, référence de pièce, lieu du chantier..." /><E k="message" /></div>
      </div>
      {state === "error" && <p className="mt-4 text-destructive">L'envoi a échoué. Réessayez ou contactez-nous sur WhatsApp.</p>}
      <button type="submit" disabled={state === "sending"} className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-gold px-8 py-4 font-bold text-gold-foreground shadow-gold transition-transform duration-200 hover:-translate-y-0.5 disabled:opacity-60">
        {state === "sending" ? <Loader2 className="h-5 w-5 animate-spin" /> : <Send className="h-5 w-5" />} Envoyer ma demande
      </button>
    </form>
  );
}
