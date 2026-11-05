export const profile = {
  name: "Laxmi Singh",
  shortName: "Laxmi",
  role: "Video Editor & Motion Designer",
  tagline:
    "I craft scroll-stopping videos, motion graphics and visual design that help brands tell their story — and grow.",
  location: "New Delhi, India",
  email: "laxmi35singh35@gmail.com",
  phone: "+91 78380 29984",
  phoneHref: "tel:+917838029984",
  behance: "https://www.behance.net/laxmisingh01",
  about: [
    "I do professional video editing, motion graphics and graphic design to create engaging visual content. I focus on delivering creative, high-quality videos and designs that help brands communicate their message effectively.",
    "From short-form social reels and ad creatives to AI-powered talking-head videos, I handle the full pipeline — scripting hooks and CTAs, editing, animation, typography and color grading.",
  ],
};

// Links with an empty href are hidden — paste the profile URL to show them.
export const socials = [
  { id: "behance", label: "Behance", href: "https://www.behance.net/laxmisingh01" },
  { id: "whatsapp", label: "WhatsApp", href: "https://wa.me/917838029984" },
  { id: "email", label: "Email", href: "mailto:laxmi35singh35@gmail.com" },
  { id: "linkedin", label: "LinkedIn", href: "" },
  { id: "instagram", label: "Instagram", href: "" },
  { id: "youtube", label: "YouTube", href: "" },
] as const;

export type SocialId = (typeof socials)[number]["id"];

export const stats = [
  { value: "18K+", label: "Followers grown from zero" },
  { value: "1M+", label: "Views across platforms" },
  { value: "3+", label: "Brands & startups served" },
];

export const services = [
  {
    title: "Video Editing",
    description:
      "Reels, shorts, ads and long-form edits with sharp pacing, sound design and color grading.",
  },
  {
    title: "Motion Graphics",
    description:
      "Animated titles, kinetic typography, explainers and VFX built in After Effects.",
  },
  {
    title: "Graphic Design",
    description:
      "Social media creatives, thumbnails and brand visuals that stay on-brand and stand out.",
  },
  {
    title: "AI Video Production",
    description:
      "Talking-head and AI clone videos with HeyGen, ElevenLabs voice and Claude-assisted scripting.",
  },
];

export const projects = [
  {
    title: "Showreel — Video Editing Portfolio",
    description:
      "A curated reel of my editing and motion work, built in Premiere Pro and After Effects.",
    tags: ["Premiere Pro", "After Effects", "Motion"],
    image: "/images/project-video-portfolio.jpg",
    href: "https://www.behance.net/gallery/252940015/Video-editing-portfolio",
  },
];

export const experience = [
  {
    role: "Video Editor & Content Creator",
    company: "OPTM Healthcare",
    period: "Aug 2026 — Present",
    // YYYY-MM; end: null means ongoing. Used to place clips on the Studio timeline.
    start: "2026-08",
    end: null,
    location: "Delhi",
    points: [
      "Create short-form social media and ad videos, including talking-head and AI clone videos using HeyGen.",
      "Develop scripts, hooks and CTAs using Claude and competitive landscape research.",
      "Handle end-to-end editing in Premiere Pro and After Effects.",
    ],
  },
  {
    role: "Social Media Video Editor",
    company: "Reel Rack (Startup)",
    period: "Mar — May 2026",
    start: "2026-03",
    end: "2026-05",
    points: [
      "Helped grow the startup's social media presence from 0 to 18K followers.",
      "Produced content that achieved over 1M+ views across platforms.",
    ],
  },
  {
    role: "Freelance Video Editor & Graphic Designer",
    company: "Self-employed",
    period: "2025 — Present",
    start: "2025-01",
    end: null,
    points: [
      "Edited videos, created motion graphics and designed social media creatives for clients.",
    ],
  },
];

export const education = [
  {
    title: "Advanced Motion Graphics Course",
    place: "D.G Royals Institute & Company",
    period: "Aug 2025 — May 2026",
    start: "2025-08",
    end: "2026-05",
  },
  {
    title: "Bachelor of Arts in English",
    place: "Delhi University",
    period: "2025 — Present",
    start: "2025-08",
    end: null,
  },
  {
    title: "12th & 10th, CBSE Board",
    place: "Sarvodaya Kanya Vidyalaya",
    period: "Completed",
    start: null,
    end: null,
  },
];

export const certifications = [
  {
    title: "AI Tools & Claude Workshop",
    issuer: "Be 10X",
    description:
      "Hands-on training in modern AI tools for improving productivity, content creation, research and creative problem-solving.",
  },
];

export const software = [
  { name: "Premiere Pro", short: "Pr", level: 95, color: "#9999ff", bg: "#00005b" },
  { name: "After Effects", short: "Ae", level: 88, color: "#9999ff", bg: "#00005b" },
  { name: "Photoshop", short: "Ps", level: 90, color: "#31a8ff", bg: "#001e36" },
  { name: "Illustrator", short: "Ai", level: 88, color: "#ff9a00", bg: "#330000" },
  { name: "CorelDRAW", short: "Cd", level: 80, color: "#6ee7b7", bg: "#063b2c" },
  { name: "Canva", short: "Ca", level: 95, color: "#7dd3fc", bg: "#0b3b63" },
];

export const aiTools = ["ChatGPT", "Gemini", "HeyGen", "ElevenLabs", "Claude"];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];
