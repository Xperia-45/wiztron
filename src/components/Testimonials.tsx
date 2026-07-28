import { TESTIMONIALS } from "../data/content";
import { IconQuote } from "./icons";
import { SectionHeading } from "./SectionHeading";

export function Testimonials() {
  return (
    <section id="testimonials" className="relative section-pad py-24 lg:py-32">
      <div className="absolute inset-x-0 top-0 gradient-line" />
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Member Voices"
          title="What our community says"
          description="Real stories from students who found their tribe, leveled up their craft, and shipped things they're proud of."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <blockquote
              key={t.name}
              className={`glass glow-border card-lift reveal relative rounded-2xl p-7 ${
                i === 1 ? "reveal-delay-1" : i === 2 ? "reveal-delay-2" : ""
              }`}
            >
              <IconQuote className="mb-4 h-8 w-8 text-violet-400/40" />
              <p className="mb-6 text-[0.95rem] leading-relaxed text-slate-300">
                “{t.quote}”
              </p>
              <footer className="flex items-center gap-3 border-t border-white/5 pt-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-blue-600 text-sm font-bold text-white">
                  {t.avatar}
                </div>
                <div>
                  <cite className="not-italic font-semibold text-white">{t.name}</cite>
                  <p className="text-xs text-slate-500">{t.role}</p>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
