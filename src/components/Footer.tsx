import { CONTACT, FOOTER } from "../data/content";
import {
  IconDiscord,
  IconGitHub,
  IconInstagram,
  IconLinkedIn,
  IconMail,
  LogoMark,
} from "./icons";

const SOCIALS = [
  { href: `mailto:${CONTACT.email}`, icon: IconMail, label: "Email" },
  { href: CONTACT.instagram, icon: IconInstagram, label: "Instagram" },
  { href: CONTACT.linkedin, icon: IconLinkedIn, label: "LinkedIn" },
  { href: CONTACT.github, icon: IconGitHub, label: "GitHub" },
  { href: CONTACT.discord, icon: IconDiscord, label: "Discord" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5 bg-wiz-950">
      <div className="absolute inset-x-0 top-0 gradient-line" />
      <div className="section-pad mx-auto max-w-7xl py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#hero" className="mb-4 inline-flex items-center gap-3">
              <LogoMark className="h-10 w-10" />
              <span className="font-display text-xl font-bold tracking-[0.16em] text-white">
                WIZTRON
              </span>
            </a>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-400">
              {FOOTER.tagline} A student-driven technology community focused on
              innovation, collaboration, and leadership.
            </p>
            <p className="mt-4 text-sm font-medium text-slate-300">
              {FOOTER.college}
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold tracking-wide text-white uppercase">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {FOOTER.quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 transition hover:text-violet-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="mb-4 text-sm font-semibold tracking-wide text-white uppercase">
              Connect
            </h4>
            <div className="flex flex-wrap gap-2.5">
              {SOCIALS.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={
                      s.href.startsWith("mailto:")
                        ? undefined
                        : "noopener noreferrer"
                    }
                    aria-label={s.label}
                    className="social-icon flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
            <p className="mt-5 text-sm text-slate-500">{CONTACT.email}</p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/5 pt-8 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-slate-500">
            © {year} Wiztron · {FOOTER.college}. All rights reserved.
          </p>
          <p className="text-xs text-slate-600">
            Crafted with care by the Wiztron community.
          </p>
        </div>
      </div>
    </footer>
  );
}
