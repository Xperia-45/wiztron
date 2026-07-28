import { useEffect, useState } from "react";
import { GALLERY } from "../data/content";
import { IconX } from "./icons";
import { SectionHeading } from "./SectionHeading";

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    if (active === null) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight")
        setActive((i) => (i === null ? null : (i + 1) % GALLERY.length));
      if (e.key === "ArrowLeft")
        setActive((i) =>
          i === null ? null : (i - 1 + GALLERY.length) % GALLERY.length
        );
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active]);

  return (
    <section id="gallery" className="relative section-pad py-24 lg:py-32">
      <div className="absolute inset-x-0 top-0 gradient-line" />
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Moments"
          title="Inside the Wiztron experience"
          description="Hack nights, workshops, wins, and everything in between — captured from our community."
        />

        <div className="grid auto-rows-[180px] grid-cols-1 gap-4 sm:auto-rows-[200px] sm:grid-cols-2 md:grid-cols-4 md:auto-rows-[220px]">
          {GALLERY.map((item, index) => (
            <button
              key={item.src}
              type="button"
              onClick={() => setActive(index)}
              className={`gallery-item group relative overflow-hidden rounded-2xl border border-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 ${item.span} reveal ${
                index % 3 === 1
                  ? "reveal-delay-1"
                  : index % 3 === 2
                    ? "reveal-delay-2"
                    : ""
              }`}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-70 transition group-hover:opacity-90" />
              <div className="absolute inset-x-0 bottom-0 translate-y-2 p-4 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-left text-sm font-medium text-white">{item.alt}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {active !== null && (
        <div
          className="lightbox-backdrop fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-md"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
        >
          <button
            type="button"
            aria-label="Close preview"
            className="absolute top-5 right-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition hover:bg-white/20"
            onClick={() => setActive(null)}
          >
            <IconX className="h-5 w-5" />
          </button>

          <img
            src={GALLERY[active].src}
            alt={GALLERY[active].alt}
            className="lightbox-image max-h-[85vh] max-w-[92vw] rounded-xl object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />

          <p className="absolute bottom-6 left-1/2 max-w-lg -translate-x-1/2 text-center text-sm text-slate-300">
            {GALLERY[active].alt}
          </p>
        </div>
      )}
    </section>
  );
}
