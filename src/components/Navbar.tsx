import { useEffect, useState } from "react";
import { NAV_LINKS } from "../data/content";
import { IconClose, IconMenu, LogoMark } from "./icons";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleNav = () => setOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open ? "nav-scrolled" : "bg-transparent"
      }`}
    >
      <nav className="section-pad mx-auto flex h-16 max-w-7xl items-center justify-between lg:h-[4.5rem]">
        <a href="#hero" className="group flex items-center gap-3" onClick={handleNav}>
          <LogoMark className="h-9 w-9 transition-transform duration-300 group-hover:scale-105" />
          <span className="font-display text-lg font-bold tracking-[0.18em] text-white">
            WIZTRON
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <a
            href="#join"
            className="btn-shine inline-flex items-center rounded-full bg-gradient-to-r from-violet-600 to-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-violet-600/25 transition hover:shadow-violet-500/40"
          >
            Join Us
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <IconClose className="h-5 w-5" /> : <IconMenu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`mobile-menu border-t border-white/5 bg-wiz-950/95 backdrop-blur-xl lg:hidden ${
          open ? "open" : ""
        }`}
      >
        <ul className="section-pad flex flex-col gap-1 py-4">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={handleNav}
                className="block rounded-xl px-4 py-3 text-base font-medium text-slate-200 transition hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href="#join"
              onClick={handleNav}
              className="btn-shine flex items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-blue-600 px-5 py-3 text-sm font-semibold text-white"
            >
              Join Us
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
