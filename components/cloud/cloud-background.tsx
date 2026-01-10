import { NoiseOverlay } from "@/components/cloud/noise-overlay";
import { Drift } from "@/components/motion/drift";

export function CloudBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-mist" />
      <Drift className="absolute -left-24 top-16 h-64 w-64 rounded-full bg-white/60 blur-3xl" />
      <Drift
        className="absolute right-[-6rem] top-32 h-72 w-72 rounded-full bg-slate-200/40 blur-[90px]"
        duration={32}
        delay={4}
      />
      <Drift
        className="absolute left-1/3 top-2/3 h-80 w-80 rounded-full bg-sky-200/30 blur-[110px]"
        duration={38}
        delay={2}
      />
      <NoiseOverlay />
    </div>
  );
}
