import { WHY_JOIN } from "../data/content";
import { SectionHeading } from "./SectionHeading";

export function WhyJoin() {
  return (
    <section id="why-join" className="relative section-pad py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 mesh-bg opacity-50" />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Your Growth Path"
          title="Why join Wiztron?"
          description="More than a club — a launchpad for skills, friendships, and opportunities that compound over your college journey."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {WHY_JOIN.map((item, i) => {
            const Icon = item.icon;
            // Last item centers on xl if odd — we have 7 items
            const isLast = i === WHY_JOIN.length - 1;
            return (
              <article
                key={item.title}
                className={`glass glow-border card-lift reveal group rounded-2xl p-6 ${
                  isLast ? "sm:col-span-2 lg:col-span-1 xl:col-span-1" : ""
                } ${
                  i % 4 === 1
                    ? "reveal-delay-1"
                    : i % 4 === 2
                      ? "reveal-delay-2"
                      : i % 4 === 3
                        ? "reveal-delay-3"
                        : ""
                }`}
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-500/10 text-violet-300 transition group-hover:border-violet-400/40 group-hover:bg-violet-500/20 group-hover:text-violet-200">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-display mb-2 text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-400">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
