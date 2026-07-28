import type { ComponentType, SVGProps } from "react";
import {
  IconBrain,
  IconGlobe,
  IconSmartphone,
  IconPalette,
  IconShield,
  IconCalendar,
  IconMic,
  IconMegaphone,
  IconUsers,
  IconRocket,
  IconNetwork,
  IconTrophy,
  IconBriefcase,
  IconSparkles,
} from "../components/icons";

export type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Domains", href: "#domains" },
  { label: "Events", href: "#events" },
  { label: "Team", href: "#team" },
  { label: "Gallery", href: "#gallery" },
  { label: "Join", href: "#join" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  name: "WIZTRON",
  taglines: [
    "Build. Break. Innovate.",
    "Code the Future.",
    "Where Ideas Become Reality.",
  ],
  description:
    "A student-driven technology community empowering students through innovation, collaboration, workshops, hackathons, projects and leadership.",
};

export const ABOUT = {
  intro:
    "Wiztron is the official technology club of [College Name], built by students who believe learning happens best when you build together. From late-night hackathons to hands-on workshops, we turn curiosity into real skills.",
  mission: {
    title: "Mission",
    text: "To cultivate a vibrant community where every student can explore emerging technologies, ship meaningful projects, and grow into confident technologists and leaders.",
  },
  vision: {
    title: "Vision",
    text: "To become the most impactful student tech collective on campus — a launchpad for innovators who shape the future of technology and entrepreneurship.",
  },
  objectives: [
    "Host high-quality workshops, hackathons, and tech talks",
    "Mentor students across domains from beginner to advanced",
    "Ship open-source and campus-impact projects",
    "Build bridges with industry mentors and alumni",
    "Develop leadership, communication, and teamwork skills",
  ],
};

export const DOMAINS: {
  title: string;
  description: string;
  icon: IconComponent;
  accent: string;
}[] = [
  {
    title: "AI & Machine Learning",
    description:
      "Explore neural networks, NLP, computer vision, and practical ML pipelines through projects and study circles.",
    icon: IconBrain,
    accent: "from-violet-500 to-fuchsia-500",
  },
  {
    title: "Web Development",
    description:
      "Master modern frontend and backend stacks — React, Node, APIs, and full-stack product thinking.",
    icon: IconGlobe,
    accent: "from-blue-500 to-cyan-500",
  },
  {
    title: "App Development",
    description:
      "Build polished mobile experiences with Flutter, React Native, and native platform fundamentals.",
    icon: IconSmartphone,
    accent: "from-indigo-500 to-blue-500",
  },
  {
    title: "UI/UX Design",
    description:
      "Design delightful interfaces with research, wireframes, design systems, and prototype-driven workflows.",
    icon: IconPalette,
    accent: "from-pink-500 to-rose-500",
  },
  {
    title: "Cyber Security",
    description:
      "Learn ethical hacking, network defense, CTFs, and secure coding practices that matter in the real world.",
    icon: IconShield,
    accent: "from-emerald-500 to-teal-500",
  },
  {
    title: "Event Management",
    description:
      "Plan and execute flagship campus events — logistics, operations, and experience design at scale.",
    icon: IconCalendar,
    accent: "from-amber-500 to-orange-500",
  },
  {
    title: "Public Speaking",
    description:
      "Sharpen storytelling, pitch delivery, and stage presence through guided sessions and live practice.",
    icon: IconMic,
    accent: "from-purple-500 to-violet-500",
  },
  {
    title: "Marketing",
    description:
      "Craft campaigns, brand narratives, and growth strategies that amplify every Wiztron initiative.",
    icon: IconMegaphone,
    accent: "from-sky-500 to-indigo-500",
  },
];

export const EVENTS = [
  {
    title: "Hackathons",
    description:
      "24–48 hour build sprints where teams turn bold ideas into working prototypes under real deadlines.",
    tag: "Flagship",
    when: "Semester highlights",
  },
  {
    title: "Coding Contests",
    description:
      "Competitive programming challenges designed to sharpen problem-solving speed and algorithmic thinking.",
    tag: "Competitive",
    when: "Monthly",
  },
  {
    title: "Technical Workshops",
    description:
      "Hands-on sessions covering frameworks, tools, and workflows led by peers, alumni, and industry guests.",
    tag: "Learning",
    when: "Bi-weekly",
  },
  {
    title: "Guest Lectures",
    description:
      "Insights from engineers, founders, and researchers on careers, product, research, and emerging tech.",
    tag: "Insight",
    when: "Quarterly",
  },
  {
    title: "Open Source Sessions",
    description:
      "Contribute to real repositories, learn Git workflows, and ship your first meaningful PR with mentors.",
    tag: "Community",
    when: "Ongoing",
  },
  {
    title: "Networking Events",
    description:
      "Connect with peers, seniors, and professionals in curated mixers built for collaboration and opportunity.",
    tag: "Connect",
    when: "Seasonal",
  },
];

export const STATS = [
  { label: "Members", value: 250, suffix: "+" },
  { label: "Projects", value: 40, suffix: "+" },
  { label: "Events Conducted", value: 60, suffix: "+" },
  { label: "Hackathons", value: 12, suffix: "+" },
];

export const TEAM = [
  {
    name: "Aarav Mehta",
    role: "President",
    image:
      "https://images.pexels.com/photos/13111213/pexels-photo-13111213.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=500",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Priya Sharma",
    role: "Vice President",
    image:
      "https://images.pexels.com/photos/31869537/pexels-photo-31869537.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=500",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Rohan Kapoor",
    role: "Technical Lead",
    image:
      "https://images.pexels.com/photos/9092311/pexels-photo-9092311.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=500",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Ananya Iyer",
    role: "Design Lead",
    image:
      "https://images.pexels.com/photos/26872232/pexels-photo-26872232.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=500",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Kabir Singh",
    role: "Events Head",
    image:
      "https://images.pexels.com/photos/33331334/pexels-photo-33331334.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=500",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Sneha Reddy",
    role: "Outreach Lead",
    image:
      "https://images.pexels.com/photos/30133727/pexels-photo-30133727.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=500",
    linkedin: "https://linkedin.com",
  },
];

export const GALLERY = [
  {
    src: "https://images.pexels.com/photos/4385446/pexels-photo-4385446.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
    alt: "Students collaborating on a coding project",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    src: "https://images.pexels.com/photos/6804068/pexels-photo-6804068.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=900",
    alt: "Developers working together in a tech lab",
    span: "",
  },
  {
    src: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=900",
    alt: "Focused coding session on laptop",
    span: "",
  },
  {
    src: "https://images.pexels.com/photos/5380586/pexels-photo-5380586.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=900",
    alt: "Cybersecurity workshop in progress",
    span: "",
  },
  {
    src: "https://images.pexels.com/photos/4385997/pexels-photo-4385997.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=900",
    alt: "Night-time collaborative coding meetup",
    span: "",
  },
  {
    src: "https://images.pexels.com/photos/6804594/pexels-photo-6804594.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=1200",
    alt: "Engineer reviewing code on dual monitors",
    span: "md:col-span-2",
  },
];

export const WHY_JOIN: {
  title: string;
  description: string;
  icon: IconComponent;
}[] = [
  {
    title: "Learn New Technologies",
    description:
      "Stay ahead with curated learning paths, peer mentorship, and workshops on tools that matter.",
    icon: IconSparkles,
  },
  {
    title: "Build Projects",
    description:
      "Ship portfolio-ready products with cross-functional teams — from idea validation to deployment.",
    icon: IconRocket,
  },
  {
    title: "Networking",
    description:
      "Meet ambitious peers, seniors, alumni, and industry mentors who open doors you didn't know existed.",
    icon: IconNetwork,
  },
  {
    title: "Hackathons",
    description:
      "Compete, collaborate, and create under pressure — the fastest way to level up as a builder.",
    icon: IconTrophy,
  },
  {
    title: "Leadership",
    description:
      "Lead domains, run events, and manage initiatives that develop real ownership and soft skills.",
    icon: IconUsers,
  },
  {
    title: "Internships",
    description:
      "Access referrals, resume reviews, and opportunity channels shared across the Wiztron network.",
    icon: IconBriefcase,
  },
  {
    title: "Public Speaking",
    description:
      "Present demos, host sessions, and grow the confidence to communicate ideas with clarity.",
    icon: IconMic,
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "Wiztron turned my curiosity into a real skill set. The workshops and weekend builds helped me land my first internship.",
    name: "Ishaan Verma",
    role: "Web Development Member",
    avatar: "IV",
  },
  {
    quote:
      "I joined for coding contests and stayed for the community. The mentorship culture here is genuinely rare on campus.",
    name: "Meera Nair",
    role: "AI/ML Domain",
    avatar: "MN",
  },
  {
    quote:
      "From organizing events to speaking on stage, Wiztron pushed me far outside my comfort zone — in the best way possible.",
    name: "Aditya Rao",
    role: "Events & Outreach",
    avatar: "AR",
  },
];

export const CONTACT = {
  email: "hello@wiztron.club",
  instagram: "https://instagram.com",
  linkedin: "https://linkedin.com",
  github: "https://github.com",
  discord: "https://discord.com",
  formUrl: "https://forms.google.com",
};

export const FOOTER = {
  college: "[College Name]",
  tagline: "Empowering student innovators since [Year].",
  quickLinks: NAV_LINKS,
};
