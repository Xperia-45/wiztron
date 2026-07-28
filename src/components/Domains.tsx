import { DOMAINS } from "../data/content";
import { SectionHeading } from "./SectionHeading";

export function Domains() {
  return (
    <section id="domains" className="relative section-pad py-24 lg:py-32">
      <div className="absolute inset-x-0 top-0 gradient-line" />
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="What We Explore"
          title="Domains that shape builders"
          description="Eight focused tracks so every member can dive deep, collaborate across disciplines, and grow with purpose."
        />

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {DOMAINS.map((domain, i) => {
            const Icon = domain.icon;
            return (
              <article
                key={domain.title}
                className={`group glass card-lift reveal rounded-2xl p-6 ${
                  i % 4 === 1
                    ? "reveal-delay-1"
                    : i % 4 === 2
                      ? "reveal-delay-2"
                      : i % 4 === 3
                        ? "reveal-delay-3"
                        : ""
                }`}
              >
                <div className="icon-ring mb-5 inline-flex">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${domain.accent} text-white shadow-lg`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                </div>
                <h3 className="font-display mb-2 text-lg font-semibold text-white transition-colors group-hover:text-violet-200">
                  {domain.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-400">
                  {domain.description}
                </p>
                <div className="mt-5 h-px w-full origin-left scale-x-0 bg-gradient-to-r from-violet-500/60 to-transparent transition-transform duration-400 group-hover:scale-x-100" />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
