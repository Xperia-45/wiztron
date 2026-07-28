import { EVENTS } from "../data/content";
import { SectionHeading } from "./SectionHeading";

export function Events() {
  return (
    <section id="events" className="relative section-pad overflow-hidden py-24 lg:py-32">
      <div className="pointer-events-none absolute right-0 top-1/4 h-72 w-72 rounded-full bg-violet-600/10 blur-3xl" />
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="What We Host"
          title="Events that spark momentum"
          description="From intense hackathons to intimate tech talks — every gathering is designed to help you learn, ship, and connect."
        />

        <div className="relative">
          {/* Vertical timeline line (desktop) */}
          <div className="timeline-line absolute top-0 bottom-0 left-4 hidden w-px md:left-1/2 md:block md:-translate-x-px" />

          <div className="space-y-6 md:space-y-0">
            {EVENTS.map((event, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div
                  key={event.title}
                  className={`relative md:flex md:items-stretch md:gap-0 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  } md:pb-10`}
                >
                  {/* Card side */}
                  <div className={`md:w-1/2 ${isLeft ? "md:pr-12" : "md:pl-12"}`}>
                    <article
                      className={`glass glow-border card-lift reveal group relative rounded-2xl p-6 sm:p-7 ${
                        isLeft ? "" : "reveal-delay-1"
                      }`}
                    >
                      <div className="mb-3 flex flex-wrap items-center gap-2">
                        <span className="rounded-full bg-violet-500/15 px-2.5 py-0.5 text-xs font-semibold tracking-wide text-violet-300 uppercase">
                          {event.tag}
                        </span>
                        <span className="text-xs text-slate-500">{event.when}</span>
                      </div>
                      <h3 className="font-display mb-2 text-xl font-semibold text-white">
                        {event.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-slate-400">
                        {event.description}
                      </p>
                    </article>
                  </div>

                  {/* Center dot */}
                  <div className="absolute top-7 left-4 z-10 hidden h-3 w-3 -translate-x-1/2 rounded-full border-2 border-violet-400 bg-wiz-950 shadow-[0_0_12px_rgba(167,139,250,0.7)] md:left-1/2 md:block" />

                  {/* Spacer */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              );
            })}
          </div>

          {/* Mobile simple cards already use spacing; add subtle left rail on small screens */}
          <div className="pointer-events-none absolute top-0 bottom-0 left-0 w-px bg-gradient-to-b from-violet-500/40 via-blue-500/20 to-transparent md:hidden" />
        </div>
      </div>
    </section>
  );
}
