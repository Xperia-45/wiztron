import { CONTACT } from "../data/content";
import {
  IconDiscord,
  IconGitHub,
  IconInstagram,
  IconLinkedIn,
  IconMail,
} from "./icons";
import { SectionHeading } from "./SectionHeading";

const CHANNELS = [
  {
    label: "Email",
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
    icon: IconMail,
    hint: "Drop us a message",
  },
  {
    label: "Instagram",
    value: "@wiztron",
    href: CONTACT.instagram,
    icon: IconInstagram,
    hint: "Follow our journey",
  },
  {
    label: "LinkedIn",
    value: "Wiztron Club",
    href: CONTACT.linkedin,
    icon: IconLinkedIn,
    hint: "Professional updates",
  },
  {
    label: "GitHub",
    value: "github.com/wiztron",
    href: CONTACT.github,
    icon: IconGitHub,
    hint: "Open source & projects",
  },
  {
    label: "Discord",
    value: "Join the server",
    href: CONTACT.discord,
    icon: IconDiscord,
    hint: "Chat with members",
  },
];

export function Contact() {
  return (
    <section id="contact" className="relative section-pad py-24 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let's connect"
          description="Have a question, collaboration idea, or just want to say hi? Reach out through any channel below."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {CHANNELS.map((ch, i) => {
            const Icon = ch.icon;
            return (
              <a
                key={ch.label}
                href={ch.href}
                target={ch.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={
                  ch.href.startsWith("mailto:")
                    ? undefined
                    : "noopener noreferrer"
                }
                className={`glass card-lift reveal group flex flex-col rounded-2xl p-5 transition hover:border-violet-400/30 ${
                  i === 1
                    ? "reveal-delay-1"
                    : i === 2
                      ? "reveal-delay-2"
                      : i >= 3
                        ? "reveal-delay-3"
                        : ""
                }`}
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition group-hover:border-violet-400/30 group-hover:bg-violet-500/15 group-hover:text-violet-200">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="mb-1 text-xs font-medium tracking-wide text-slate-500 uppercase">
                  {ch.label}
                </span>
                <span className="mb-1 font-semibold text-white">{ch.value}</span>
                <span className="text-xs text-slate-500">{ch.hint}</span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
