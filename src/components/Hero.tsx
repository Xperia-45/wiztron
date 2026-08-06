import { useEffect, useState } from "react";
import { HERO } from "../data/content";
import { LogoMark } from "./icons";
import { ParticleBackground } from "./ParticleBackground";

export function Hero() {
  const [text, setText] = useState("");
  const [tagIndex, setTagIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  // Typing effect across rotating taglines
  useEffect(() => {
    const current = HERO.taglines[tagIndex];
    const typingSpeed = deleting ? 36 : 70;
    const pauseEnd = 1800;
    const pauseStart = 400;

    if (!deleting && text === current) {
      const t = setTimeout(() => setDeleting(true), pauseEnd);
      return () => clearTimeout(t);
    }

    if (deleting && text === "") {
      const t = setTimeout(() => {
        setDeleting(false);
        setTagIndex((i) => (i + 1) % HERO.taglines.length);
      }, pauseStart);
      return () => clearTimeout(t);
    }

    const t = setTimeout(() => {
      setText((prev) =>
        deleting ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1)
      );
    }, typingSpeed);

    return () => clearTimeout(t);
  }, [text, deleting, tagIndex]);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-20"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-wiz-950" />
      <div className="mesh-bg absolute inset-0" />
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />
      <ParticleBackground />

      {/* Grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(148,163,184,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.15) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 40%, black 20%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 40%, black 20%, transparent 75%)",
        }}
      />

      <div className="section-pad relative z-10 mx-auto w-full max-w-7xl py-16 lg:py-24">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-slate-300 backdrop-blur-md reveal visible">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-violet-500" />
            </span>
            Student Technology Community
          </div>

          {/* Logo + Name */}
          <div className="mb-6 flex flex-col items-center gap-5 reveal visible">
            <LogoMark className="h-16 w-16 sm:h-20 sm:w-20" />
            <h1 className="font-display text-5xl font-extrabold tracking-[0.12em] text-white sm:text-6xl md:text-7xl lg:text-8xl">
              <span className="text-gradient">{HERO.name}</span>
            </h1>
          </div>

          {/* Typing tagline */}
          <p className="font-display mb-6 min-h-[2rem] text-xl font-semibold text-violet-200 sm:min-h-[2.5rem] sm:text-2xl md:text-3xl reveal visible">
            <span className="typing-caret">{text}</span>
          </p>

          <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg reveal visible">
            {HERO.description}
          </p>

          {/* CTAs */}
          <div className="flex items-center justify-center reveal visible">
            <a
              href="#about"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-8 py-3.5 text-base font-semibold text-white backdrop-blur-md transition hover:border-violet-400/40 hover:bg-white/10 sm:w-auto"
            >
              Learn More
            </a>
          </div>

          {/* Trust strip */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-slate-500 reveal visible">
            <span className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-emerald-400" />
              Open to all years
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-blue-400" />
              8 active domains
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-violet-400" />
              Weekly sessions
            </span>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-wiz-950 to-transparent" />
    </section>
  );
}
