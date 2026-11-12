import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { useReducedMotion } from "motion/react";
import { TextRotate } from "@/components/ui/text-rotate";
import { cn } from "@/lib/utils";

/** Marge de sécurité (px) entre le mot et les bords du badge. */
const SAFE = 28;

type RotateProps = { words: string[]; tone?: "gold" | "sky"; interval?: number };

/**
 * Mot mis en avant qui défile dans les grands titres. tone="gold" sur fond sombre, "sky" sur fond clair.
 * Le badge tient toujours sur une seule ligne : si le mot le plus long dépasse la largeur du
 * titre, tous les mots sont réduits à la même échelle — jamais deux lignes empilées.
 */
export function Rotate({ words, tone = "sky", interval = 2600 }: RotateProps) {
  const reduce = useReducedMotion();
  const hostRef = useRef<HTMLSpanElement>(null);
  const probeRef = useRef<HTMLSpanElement>(null);
  const [scale, setScale] = useState(1);
  const [tick, setTick] = useState(0);
  const key = words.join("|");

  // Les largeurs ne sont fiables qu'une fois la police display chargée.
  useEffect(() => {
    if (typeof document === "undefined" || !document.fonts) return;
    let alive = true;
    document.fonts.ready
      .then(() => { if (alive) setTick((t) => t + 1); })
      .catch(() => {});
    return () => { alive = false; };
  }, []);

  useEffect(() => {
    const host = hostRef.current;
    const probe = probeRef.current;
    if (!host || !probe) return;
    const box = host.closest<HTMLElement>("h1, h2, h3, h4") ?? host.parentElement;

    const fit = () => {
      const available = (box?.clientWidth ?? 0) - SAFE;
      if (available <= 0) return;
      let next = 1;
      for (const word of key.split("|")) {
        probe.textContent = word;
        const w = probe.getBoundingClientRect().width;
        if (w > 0) next = Math.min(next, available / w);
      }
      probe.textContent = "";
      setScale(Math.max(0.4, Math.min(1, next)));
    };

    fit();
    const ro = new ResizeObserver(fit);
    if (box) ro.observe(box);
    return () => ro.disconnect();
  }, [key, tick]);

  const pill = cn(
    "rotate-pill max-w-full overflow-hidden rounded-xl px-3 py-1 whitespace-nowrap",
    tone === "gold"
      ? "bg-gradient-gold text-gold-foreground shadow-gold"
      : "bg-gradient-sky text-primary-foreground shadow-elegant",
  );
  const style = { fontSize: `${scale}em` } as CSSProperties;
  const probe: ReactNode = (
    <span
      ref={probeRef}
      aria-hidden
      className="pointer-events-none absolute left-0 top-0 invisible h-0 overflow-hidden whitespace-nowrap"
    />
  );

  if (reduce)
    return (
      <span ref={hostRef} className="relative inline-flex">
        {probe}
        <span className={cn("inline-block", pill)} style={style}>{words[0]}</span>
      </span>
    );

  return (
    <span ref={hostRef} className="relative inline-flex">
      {probe}
      <TextRotate
        texts={key.split("|")}
        mainClassName={cn("!inline-flex flex-nowrap justify-center", pill)}
        style={style}
        staggerFrom="last"
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "-120%" }}
        staggerDuration={0.025}
        splitLevelClassName="overflow-hidden pb-1"
        transition={{ type: "spring", damping: 30, stiffness: 400 }}
        rotationInterval={interval}
      />
    </span>
  );
}
