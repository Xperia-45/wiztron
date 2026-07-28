import { CONTACT } from "../data/content";
import { IconArrowRight, IconExternal } from "./icons";

export function JoinUs() {
  return (
    <section id="join" className="relative section-pad py-24 lg:py-32">
      <div className="mx-auto max-w-5xl">
        <div className="reveal relative overflow-hidden rounded-3xl border border-white/10">
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-violet-950/90 via-wiz-900 to-blue-950/80" />
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-violet-500/30 blur-3xl" />
          <div className="absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-blue-500/25 blur-3xl" />
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.12) 1px, transparent 0)",
              backgroundSize: "28px 28px",
            }}
          />

          <div className="relative px-6 py-14 text-center sm:px-12 sm:py-16 lg:px-16 lg:py-20">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-400/25 bg-violet-500/10 px-3 py-1 text-xs font-medium tracking-wide text-violet-200 uppercase">
              Applications Open
            </div>
            <h2 className="font-display mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Ready to join{" "}
              <span className="text-gradient-accent">Wiztron</span>?
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
              Whether you write code, design interfaces, organize events, or simply
              want to learn — there's a place for you here. Fill out the form and
              become part of the community.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={CONTACT.formUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shine group inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 text-base font-semibold text-wiz-950 shadow-xl shadow-violet-500/20 transition hover:bg-slate-100 sm:w-auto"
              >
                Join Now
                <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href={CONTACT.formUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-3.5 text-base font-semibold text-white backdrop-blur transition hover:bg-white/10 sm:w-auto"
              >
                Open Google Form
                <IconExternal className="h-4 w-4" />
              </a>
            </div>

            <p className="mt-6 text-xs text-slate-500">
              Form link is a placeholder — replace with your actual Google Form URL.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
