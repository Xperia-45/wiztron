import { STATS } from "../data/content";
import { useCountUp } from "../hooks/useCountUp";
import { SectionHeading } from "./SectionHeading";

function StatCard({
  label,
  value,
  suffix,
  delayClass,
}: {
  label: string;
  value: number;
  suffix: string;
  delayClass: string;
}) {
  const { ref, value: count } = useCountUp(value);

  return (
    <div
      ref={ref}
      className={`glass glow-border card-lift reveal rounded-2xl px-6 py-8 text-center ${delayClass}`}
    >
      <div className="stat-number font-display mb-2 text-4xl font-extrabold tracking-tight text-gradient sm:text-5xl">
        {count}
        {suffix}
      </div>
      <p className="text-sm font-medium tracking-wide text-slate-400 uppercase">
        {label}
      </p>
    </div>
  );
}

export function Achievements() {
  return (
    <section id="achievements" className="relative section-pad py-24 lg:py-32">
      <div className="absolute inset-x-0 top-0 gradient-line" />
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Impact So Far"
          title="Numbers that tell our story"
          description="A growing community of builders, creators, and leaders — and we're just getting started."
        />

        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
          {STATS.map((stat, i) => (
            <StatCard
              key={stat.label}
              label={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              delayClass={
                i === 1
                  ? "reveal-delay-1"
                  : i === 2
                    ? "reveal-delay-2"
                    : i === 3
                      ? "reveal-delay-3"
                      : ""
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
