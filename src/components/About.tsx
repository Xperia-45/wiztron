import { ABOUT } from "../data/content";
import { IconCheck, IconEye, IconTarget, IconZap } from "./icons";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section id="about" className="relative section-pad py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 mesh-bg opacity-60" />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Who We Are"
          title="Building the next generation of tech leaders"
          description={ABOUT.intro}
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Mission */}
          <article className="glass glow-border card-lift reveal group rounded-2xl p-7">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 text-white shadow-lg shadow-violet-500/30">
              <IconTarget className="h-6 w-6" />
            </div>
            <h3 className="font-display mb-3 text-xl font-semibold text-white">
              {ABOUT.mission.title}
            </h3>
            <p className="text-sm leading-relaxed text-slate-400 sm:text-[0.95rem]">
              {ABOUT.mission.text}
            </p>
          </article>

          {/* Vision */}
          <article className="glass glow-border card-lift reveal reveal-delay-1 group rounded-2xl p-7">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/30">
              <IconEye className="h-6 w-6" />
            </div>
            <h3 className="font-display mb-3 text-xl font-semibold text-white">
              {ABOUT.vision.title}
            </h3>
            <p className="text-sm leading-relaxed text-slate-400 sm:text-[0.95rem]">
              {ABOUT.vision.text}
            </p>
          </article>

          {/* Objectives */}
          <article className="glass glow-border card-lift reveal reveal-delay-2 group rounded-2xl p-7">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-500 to-purple-600 text-white shadow-lg shadow-fuchsia-500/30">
              <IconZap className="h-6 w-6" />
            </div>
            <h3 className="font-display mb-3 text-xl font-semibold text-white">
              Club Objectives
            </h3>
            <ul className="space-y-2.5">
              {ABOUT.objectives.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-slate-400">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-violet-500/15 text-violet-300">
                    <IconCheck className="h-3.5 w-3.5" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
