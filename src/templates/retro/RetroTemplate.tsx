import Image from "next/image";
import type { ReactNode } from "react";
import Reveal from "@/components/Reveal";
import SocialLinks, { activeSocials } from "@/components/SocialLinks";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import {
  aiTools,
  certifications,
  education,
  experience,
  navLinks,
  profile,
  projects,
  services,
  software,
  stats,
} from "@/data/portfolio";

const btn =
  "win-out inline-flex items-center justify-center gap-2 px-4 py-1.5 font-pixel text-sm text-black active:win-in focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-[-5px] focus-visible:outline-dotted focus-visible:outline-black";

function Win({
  title,
  icon,
  children,
  id,
  className = "",
  bodyClassName = "p-4",
}: {
  title: string;
  icon: string;
  children: ReactNode;
  id?: string;
  className?: string;
  bodyClassName?: string;
}) {
  return (
    <Reveal className={className}>
      <section id={id} className="win-out h-full p-[3px]">
        <div className="flex items-center gap-2 bg-gradient-to-r from-[#000080] to-[#1084d0] py-1 pl-2 pr-1 font-pixel text-sm text-white">
          <span aria-hidden>{icon}</span>
          <h2 className="truncate font-semibold">{title}</h2>
          <span aria-hidden className="ml-auto flex shrink-0 gap-0.5">
            {["_", "□", "×"].map((c) => (
              <span key={c} className="win-out flex h-5 w-5 items-center justify-center text-xs leading-none text-black">
                {c}
              </span>
            ))}
          </span>
        </div>
        <div className={bodyClassName}>{children}</div>
      </section>
    </Reveal>
  );
}

function GroupBox({ legend, children }: { legend: string; children: ReactNode }) {
  return (
    <fieldset className="border border-[#808080] px-3 pb-3 pt-1 shadow-[1px_1px_0_#fff,inset_1px_1px_0_#fff]">
      <legend className="px-1 font-pixel text-sm">{legend}</legend>
      {children}
    </fieldset>
  );
}

const desktopIcons = [
  { icon: "🎬", label: "My Work", href: "#work" },
  { icon: "📄", label: "Resume.txt", href: "#experience" },
  { icon: "🛠️", label: "Skills", href: "#skills" },
  { icon: "🌐", label: "Behance", href: profile.behance },
  { icon: "✉️", label: "Mail Me", href: `mailto:${profile.email}` },
];

export default function RetroTemplate() {
  const project = projects[0];

  return (
    <div className="flex-1 bg-[#008080] font-crt text-xl leading-snug text-black">
      {/* Taskbar (docked to the top) */}
      <header className="win-out sticky top-0 z-50 flex h-12 items-center gap-2 px-2">
        <a href="#top" className={`${btn} font-bold`}>
          <span className="text-base">✿</span> Start
        </a>
        <nav className="hidden min-w-0 flex-1 md:block">
          <ul className="flex gap-1">
            {navLinks.map((l) => (
              <li key={l.href} className="min-w-0">
                <a href={l.href} className={`${btn} w-full max-w-36 justify-start truncate`}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <ThemeSwitcher />
          <span className="win-in hidden px-3 py-1.5 font-pixel text-sm sm:inline">🔊 IST</span>
        </div>
      </header>

      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-8 lg:grid-cols-[96px_1fr]">
        {/* Desktop icons */}
        <ul className="flex flex-wrap gap-4 lg:flex-col lg:gap-6">
          {desktopIcons.map((d) => (
            <li key={d.label}>
              <a
                href={d.href}
                target={d.href.startsWith("http") ? "_blank" : undefined}
                rel={d.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex w-20 flex-col items-center gap-1 text-center"
              >
                <span className="text-4xl drop-shadow-[2px_2px_0_rgba(0,0,0,0.35)]">{d.icon}</span>
                <span className="px-1 font-pixel text-xs text-white group-hover:bg-[#000080] group-focus-visible:bg-[#000080] group-focus-visible:outline-dotted">
                  {d.label}
                </span>
              </a>
            </li>
          ))}
        </ul>

        <main className="relative space-y-8">
          {/* Hero window */}
          <Win id="top" title="Laxmi_Singh.exe" icon="🖥️" bodyClassName="p-4 sm:p-6">
            <div className="grid gap-6 md:grid-cols-[auto_1fr]">
              <div className="win-in mx-auto w-full max-w-64 bg-white p-2">
                <Image
                  src="/images/laxmi.jpg"
                  alt={`Portrait of ${profile.name}`}
                  width={354}
                  height={356}
                  className="aspect-square w-full object-cover [image-rendering:pixelated]"
                />
                <p className="mt-1 text-center font-pixel text-xs">laxmi_singh.bmp</p>
              </div>
              <div>
                <p className="font-pixel text-sm text-[#000080]">C:\&gt; whoami</p>
                <h1 className="mt-1 font-pixel text-5xl font-bold leading-none sm:text-7xl">
                  {profile.name}
                  <span className="animate-blink">_</span>
                </h1>
                <p className="mt-3 inline-block bg-[#000080] px-2 font-pixel text-white">{profile.role}</p>
                <p className="mt-4 text-2xl">{profile.tagline}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  <a href="#work" className={btn}>
                    📂 Open My Work
                  </a>
                  <a href="#contact" className={btn}>
                    ✉️ Contact...
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {stats.map((s) => (
                <GroupBox key={s.label} legend={s.label}>
                  <p className="font-pixel text-4xl font-bold text-[#000080]">{s.value}</p>
                </GroupBox>
              ))}
            </div>
          </Win>

          {/* Pop-up dialog */}
          <Reveal className="relative z-10 lg:-my-4 lg:ml-auto lg:mr-[-1.5rem] lg:w-96">
            <div className="win-out p-[3px] shadow-[6px_6px_0_rgba(0,0,0,0.35)]">
              <div className="bg-gradient-to-r from-[#000080] to-[#1084d0] px-2 py-1 font-pixel text-sm text-white">
                Message
              </div>
              <div className="flex gap-3 p-4">
                <span className="text-3xl">💡</span>
                <p>
                  {profile.shortName} is available for freelance &amp; full-time work. Currently at OPTM
                  Healthcare.
                </p>
              </div>
              <div className="flex justify-center pb-3">
                <a href="#contact" className={`${btn} min-w-24`}>
                  OK
                </a>
              </div>
            </div>
          </Reveal>

          {/* About + services */}
          <Win id="about" title="Control Panel — About Me" icon="⚙️">
            <div className="win-in space-y-3 bg-white p-4">
              {profile.about.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((s, i) => (
                <div key={s.title} className="flex flex-col items-center p-2 text-center">
                  <span className="text-4xl">{["🎞️", "✨", "🎨", "🤖"][i]}</span>
                  <h3 className="mt-2 font-pixel text-sm font-bold">{s.title}</h3>
                  <p className="mt-1 text-lg leading-tight">{s.description}</p>
                </div>
              ))}
            </div>
          </Win>

          {/* Explorer: work */}
          <Win id="work" title="C:\Laxmi\My Videos" icon="📁" bodyClassName="p-1">
            <div className="flex gap-4 px-2 py-1 font-pixel text-sm">
              {["File", "Edit", "View", "Help"].map((m) => (
                <span key={m}>
                  <u>{m[0]}</u>
                  {m.slice(1)}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-2 px-2 pb-2 font-pixel text-sm">
              Address
              <span className="win-in flex-1 bg-white px-2 py-0.5">C:\Laxmi\My Videos\</span>
            </div>
            <div className="win-in grid gap-6 bg-white p-4 sm:grid-cols-2">
              <a href={project.href} target="_blank" rel="noopener noreferrer" className="group block">
                <div className="border-2 border-transparent p-1 group-hover:border-dotted group-hover:border-[#000080]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={404}
                    height={316}
                    className="aspect-video w-full object-cover"
                  />
                </div>
                <p className="mt-2 font-pixel text-sm group-hover:bg-[#000080] group-hover:text-white">
                  🎬 showreel.avi
                </p>
                <p className="font-pixel text-base font-bold">{project.title}</p>
                <p className="leading-tight">{project.description}</p>
                <p className="mt-1 text-lg text-[#808080]">{project.tags.join(" · ")}</p>
              </a>
              <a
                href={profile.behance}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center justify-center gap-2 border-2 border-dashed border-[#c0c0c0] p-6 text-center hover:border-[#000080]"
              >
                <span className="text-6xl">🗂️</span>
                <span className="font-pixel text-sm group-hover:bg-[#000080] group-hover:text-white">
                  Shortcut to Behance.lnk
                </span>
                <span>Open the full portfolio ↗</span>
              </a>
            </div>
            <div className="mt-1 flex gap-1 font-pixel text-xs">
              <span className="win-in flex-1 px-2 py-0.5">2 object(s)</span>
              <span className="win-in px-2 py-0.5">My Computer</span>
            </div>
          </Win>

          {/* Notepad: experience */}
          <Win id="experience" title="experience.txt — Notepad" icon="📝" bodyClassName="p-1">
            <div className="flex gap-4 px-2 py-1 font-pixel text-sm">
              {["File", "Edit", "Search", "Help"].map((m) => (
                <span key={m}>
                  <u>{m[0]}</u>
                  {m.slice(1)}
                </span>
              ))}
            </div>
            <div className="win-in max-h-none bg-white p-4 text-[1.35rem]">
              {experience.map((job) => (
                <article key={job.company} className="mb-6 last:mb-0">
                  <h3 className="font-bold text-[#000080]">==== {job.company.toUpperCase()} ====</h3>
                  <p>
                    {job.role} | {job.period}
                    {job.location ? ` | ${job.location}` : ""}
                  </p>
                  <ul>
                    {job.points.map((pt) => (
                      <li key={pt}>- {pt}</li>
                    ))}
                  </ul>
                </article>
              ))}
              <span className="animate-blink">█</span>
            </div>
          </Win>

          <div className="grid gap-8 lg:grid-cols-5">
            {/* Explorer details view: education */}
            <Win title="Education — Details" icon="🎓" className="lg:col-span-3" bodyClassName="p-1">
              <div className="win-in overflow-x-auto bg-white">
                <table className="w-full min-w-[480px] text-left text-lg">
                  <thead className="font-pixel text-sm">
                    <tr>
                      {["Name", "Institute", "Date"].map((h) => (
                        <th key={h} className="win-out px-2 py-1 font-normal">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {education.map((e) => (
                      <tr key={e.title} className="hover:bg-[#000080] hover:text-white">
                        <td className="px-2 py-1">📘 {e.title}</td>
                        <td className="px-2 py-1">{e.place}</td>
                        <td className="whitespace-nowrap px-2 py-1">{e.period}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Win>

            <Win title="Certificate.doc" icon="🏅" className="lg:col-span-2">
              {certifications.map((c) => (
                <div key={c.title} className="win-in h-full bg-[#ffffe1] p-4">
                  <p className="font-pixel text-base font-bold">{c.title}</p>
                  <p className="text-[#000080]">Issued by {c.issuer}</p>
                  <p className="mt-2 leading-tight">{c.description}</p>
                </div>
              ))}
            </Win>
          </div>

          {/* Setup wizard: skills */}
          <Win id="skills" title="Setup — Installing Skills" icon="💾">
            <div className="grid gap-6 md:grid-cols-[140px_1fr]">
              <div className="hidden bg-gradient-to-b from-[#000080] to-[#1084d0] p-3 font-pixel text-white md:block">
                <p className="text-2xl font-bold leading-none">Skills 95</p>
                <p className="mt-2 text-xs">Setup Wizard</p>
              </div>
              <div>
                <p className="mb-4">Please wait while Setup installs the following software:</p>
                <div className="space-y-3">
                  {software.map((s) => (
                    <div key={s.name}>
                      <div className="flex justify-between font-pixel text-sm">
                        <span>{s.name}</span>
                        <span>{s.level}%</span>
                      </div>
                      <div className="win-in mt-1 h-6 bg-white p-[3px]">
                        <div
                          className="h-full bg-[repeating-linear-gradient(90deg,#000080_0_10px,transparent_10px_12px)]"
                          style={{ width: `${s.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <GroupBox legend="AI components">
                    <ul className="grid grid-cols-2 gap-1 sm:grid-cols-3">
                      {aiTools.map((t) => (
                        <li key={t} className="flex items-center gap-2">
                          <span className="win-in flex h-4 w-4 items-center justify-center bg-white text-xs leading-none">
                            ✓
                          </span>
                          {t}
                        </li>
                      ))}
                    </ul>
                  </GroupBox>
                </div>
                <div className="mt-5 flex justify-end">
                  <a href="#contact" className={btn}>
                    Finish &gt;
                  </a>
                </div>
              </div>
            </div>
          </Win>

          {/* Mail client: contact */}
          <Win id="contact" title="New Message — Outlook Express" icon="✉️" bodyClassName="p-1">
            <div className="flex flex-wrap gap-1 p-1">
              <a href={`mailto:${profile.email}`} className={btn}>
                📨 Send
              </a>
              <a href={profile.phoneHref} className={btn}>
                📞 Call
              </a>
              {activeSocials
                .filter((s) => s.id === "whatsapp")
                .map((s) => (
                  <a key={s.id} href={s.href} target="_blank" rel="noopener noreferrer" className={btn}>
                    💬 {s.label}
                  </a>
                ))}
            </div>
            <div className="space-y-1 p-2 font-pixel text-sm">
              {[
                ["To:", profile.email],
                ["Cc:", profile.phone],
                ["Subject:", "Let's work together!"],
              ].map(([k, v]) => (
                <div key={k} className="grid grid-cols-[72px_1fr] items-center gap-2">
                  <span>{k}</span>
                  <span className="win-in truncate bg-white px-2 py-0.5">{v}</span>
                </div>
              ))}
            </div>
            <div className="win-in bg-white p-4 text-2xl">
              <p>Hi {profile.shortName},</p>
              <p className="mt-3">
                I have a project in mind — reels, ads, motion graphics or something new. Let&apos;s
                talk!
              </p>
              <p className="mt-6 font-pixel text-sm text-[#808080]">Attachments:</p>
              <SocialLinks
                className="mt-2 gap-2 font-pixel text-sm"
                linkClassName="border border-dotted border-transparent px-1 hover:border-black hover:bg-[#000080] hover:text-white"
                showLabel
              />
              <p className="mt-4 text-lg text-[#808080]">📍 {profile.location}</p>
            </div>
          </Win>
        </main>
      </div>

      <footer className="pb-8 text-center font-pixel text-sm text-white">
        © 2026 {profile.name} · It is now safe to turn off your computer.
      </footer>
    </div>
  );
}
