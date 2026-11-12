import { useReducedMotion } from "motion/react";
import { TextRotate } from "@/components/ui/text-rotate";
import { cn } from "@/lib/utils";

/** Mot mis en avant qui défile dans les grands titres. tone="gold" sur fond sombre, "sky" sur fond clair. */
export function Rotate({ words, tone = "sky", interval = 2600 }: { words: string[]; tone?: "gold" | "sky"; interval?: number }) {
  const reduce = useReducedMotion();
  const pill = cn(
    "rounded-xl px-3 py-1 overflow-hidden",
    tone === "gold" ? "bg-gradient-gold text-gold-foreground shadow-gold" : "bg-gradient-sky text-primary-foreground shadow-elegant",
  );
  if (reduce) return <span className={cn("inline-block", pill)}>{words[0]}</span>;
  return (
    <TextRotate
      texts={words}
      mainClassName={cn("!inline-flex justify-center", pill)}
      staggerFrom="last"
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      exit={{ y: "-120%" }}
      staggerDuration={0.025}
      splitLevelClassName="overflow-hidden pb-1"
      transition={{ type: "spring", damping: 30, stiffness: 400 }}
      rotationInterval={interval}
    />
  );
}
