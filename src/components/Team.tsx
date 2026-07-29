import { useEffect, useState } from "react";
import { IconLinkedIn } from "./icons";
import { SectionHeading } from "./SectionHeading";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image_url: string;
  linkedin: string;
  description: string;
}

export function Team() {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const response = await fetch("http://localhost:5000/members");

        if (!response.ok) {
          throw new Error("Failed to fetch team members");
        }

        const data = await response.json();
        setTeamMembers(data);
      } catch (error) {
        console.error("Error fetching team members:", error);
      }
    };

    fetchTeamMembers();
  }, []);

  return (
    <section id="team" className="relative section-pad py-24 lg:py-32">
      <div className="pointer-events-none absolute left-0 top-1/3 h-80 w-80 rounded-full bg-blue-600/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="The People"
          title="Meet the core team"
          description="Student leaders who design experiences, mentor peers, and keep the Wiztron engine running."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, i) => (
            <article
              key={member.id}
              className={`group glass card-lift reveal overflow-hidden rounded-2xl ${
                i % 3 === 1
                  ? "reveal-delay-1"
                  : i % 3 === 2
                  ? "reveal-delay-2"
                  : ""
              }`}
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={member.image_url || "/placeholder.jpg"}
                  alt={member.name}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-wiz-950 via-wiz-950/40 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="font-display text-lg font-semibold text-white">
                    {member.name}
                  </h3>

                  <p className="text-sm text-violet-300">
                    {member.role}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-white/5 px-5 py-4">
                <span className="text-xs tracking-wide text-slate-500 uppercase">
                  Core Team
                </span>

                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member.name} on LinkedIn`}
                  className="social-icon flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300"
                >
                  <IconLinkedIn className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}