import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";

/**
 * Orbit border button — a masked ring with a blurred comet arc rotating inside it.
 * Hovering grows the arc until the ring reads as solid light.
 *
 * Usage: put `orb-host` on the clickable element (it only needs `position: relative`
 * and `isolation: isolate`, both added by the class) and render <OrbitRing /> as its
 * first child. The ring inherits the element's border-radius, so pill buttons stay pills.
 *
 * <a className="rounded-full orb-host ..." href="..."><OrbitRing /> Label</a>
 *
 * Optional per-button overrides (inline style on the host, or a modifier class):
 *   --orb-w      ring thickness          (default 2px)
 *   --orb-speed  one full orbit          (default 4s)
 *   --orb-glow   comet blur              (default 7px)
 *   --orb-head   comet head color        (default gold)
 *   --orb-tail   comet tail color        (default faint gold)
 *   --orb-base   unlit ring color        (default faint sky)
 *   --orb-arc    resting arc in degrees  (default 110deg)
 *
 * `--orb-arc` and `--orb-base` must not be set inline on the host: the hover state
 * overrides them on the ring layers, and an inline style would beat that rule.
 */

export type OrbitRingProps = {
  /** Extra classes on both ring layers. */
  className?: string;
};

export function OrbitRing({ className }: OrbitRingProps) {
  return (
    <>
      <span aria-hidden="true" className={cn("orb-glow", className)} />
      <span aria-hidden="true" className={cn("orb-ring", className)} />
    </>
  );
}

/** Convenience style object for the rare button that wants its own comet colors. */
export function orbitVars(v: {
  width?: number;
  speed?: number;
  glow?: number;
  head?: string;
  tail?: string;
  arc?: number;
  /** Pull the ring outward, e.g. -1.5, so it reads against the page and not the fill. */
  inset?: number;
}): CSSProperties {
  return {
    "--orb-w": v.width != null ? `${v.width}px` : undefined,
    "--orb-speed": v.speed != null ? `${v.speed}s` : undefined,
    "--orb-glow": v.glow != null ? `${v.glow}px` : undefined,
    "--orb-head": v.head,
    "--orb-tail": v.tail,
    "--orb-arc": v.arc != null ? `${v.arc}deg` : undefined,
    "--orb-inset": v.inset != null ? `${v.inset}px` : undefined,
  } as CSSProperties;
}
