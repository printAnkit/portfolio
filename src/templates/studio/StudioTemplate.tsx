import Image from "next/image";
import type { ReactNode } from "react";
import Reveal from "@/components/Reveal";
import SocialLinks from "@/components/SocialLinks";
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

// Timeline spans Jan 2025 → Dec 2026; ongoing clips run to the right edge.
const RANGE_START = 2025;
const RANGE_MONTHS = 24;
const PLAYHEAD = "2026-10";
const RULER = [
  { label: "JAN 25", at: "2025-01" },
  { label: "JUL 25", at: "2025-07" },
  { label: "JAN 26", at: "2026-01" },
  { label: "JUL 26", at: "2026-07" },
];

function monthIndex(ym: string) {
  const [y, m] = ym.split("-").map(Number);
  return (y - RANGE_START) * 12 + (m - 1);
}
const pct = (months: number) => `${(months / RANGE_MONTHS) * 100}%`;

function clipStyle(start: string, end: string | null) {
  const from = monthIndex(start);
  const to = end ? monthIndex(end) + 1 : RANGE_MONTHS;
  return { left: pct(from), width: pct(to - from) };
}

function Panel({
  title,
  tabs,
  children,
  className = "",
  id,
}: {
  title: string;
  tabs?: string[];
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={`flex flex-col overflow-hidden rounded-md border border-[#2e2e33] bg-[#1e1e21] ${className}`}
    >
      <div className="flex items-center gap-4 border-b border-[#2e2e33] bg-[#232326] px-3 font-studio text-[11px]">
        <span className="border-b-2 border-[#4fa3ff] py-2 text-[#e4e4e7]">{title}</span>
        {tabs?.map((t) => (
          <span key={t} className="hidden py-2 text-[#6b6b74] sm:inline">
            {t}
          </span>
        ))}
        <span className="ml-auto text-[#6b6b74]">≡</span>
      </div>
      <div className="flex-1">{children}</div>
    </section>
  );
}

const clipColors = ["#9b87f5", "#4fa3ff", "#f472b6"];

export default function StudioTemplate() {
  const audioClips = education.filter((e) => e.start);
  const project = projects[0];

  return (
    <div className="flex-1 bg-[#141416] text-[#d4d4d8] selection:bg-[#4fa3ff] selection:text-black">
      {/* App bar + workspace tabs */}
      <header className="sticky top-0 z-50 border-b border-[#2e2e33] bg-[#1a1a1c]/95 backdrop-blur">
        <div className="mx-auto flex h-14 max-w-7xl items-center gap-4 px-4">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-[#00005b] font-studio text-sm font-bold text-[#9999ff]">
            Ls
          </span>
          <p className="hidden truncate font-studio text-xs text-[#8a8a93] lg:block">
            Laxmi_Singh_Portfolio.prproj
          </p>
          <nav className="mx-auto hidden md:block">
            <ul className="flex gap-6 font-studio text-xs">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="py-4 text-[#8a8a93] hover:text-[#4fa3ff]">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <ThemeSwitcher className="ml-auto md:ml-0" />
        </div>
      </header>

      <main className="mx-auto grid max-w-7xl gap-2 p-2 sm:p-4 lg:grid-cols-12">
        {/* Effect controls: identity + stats as keyframed properties */}
        <Panel title="Effect Controls" tabs={["Lumetri Color", "Audio"]} className="lg:col-span-4">
          <div className="p-4 font-studio text-xs">
            <p className="text-[#6b6b74]">Source · laxmi_singh.mov</p>
            <dl className="mt-4 space-y-3">
              {[
                ["Name", profile.name],
                ["Role", profile.role],
                ["Location", profile.location],
              ].map(([k, v]) => (
                <div key={k} className="flex gap-3">
                  <dt className="w-20 shrink-0 text-[#6b6b74]">{k}</dt>
                  <dd className="text-[#4fa3ff]">{v}</dd>
                </div>
              ))}
              <div className="flex gap-3">
                <dt className="w-20 shrink-0 text-[#6b6b74]">Status</dt>
                <dd className="flex items-center gap-2 text-[#3ec27a]">
                  <span className="h-2 w-2 rounded-full bg-[#3ec27a]" /> Available for hire
                </dd>
              </div>
            </dl>

            <p className="mt-6 border-t border-[#2e2e33] pt-4 text-[#6b6b74]">▾ fx Results</p>
            <div className="mt-3 space-y-4">
              {stats.map((s, i) => (
                <div key={s.label}>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <span className="text-[#ffd166]">◆</span>
                      {s.label}
                    </span>
                    <span className="text-lg font-bold text-white">{s.value}</span>
                  </div>
                  <div className="mt-1.5 h-1 rounded bg-[#2e2e33]">
                    <div
                      className="h-full rounded bg-[#4fa3ff]"
                      style={{ width: `${[92, 100, 45][i]}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Panel>

        {/* Program monitor hero */}
        <Panel title="Program: Showreel" tabs={["Source"]} className="order-first lg:order-none lg:col-span-8" id="top">
          <div className="p-3">
            <div className="relative aspect-video overflow-hidden rounded-sm bg-gradient-to-br from-[#0b2a6b] via-[#123c9c] to-[#0a1633]">
              <Image
                src="/images/laxmi.jpg"
                alt={`Portrait of ${profile.name}`}
                width={354}
                height={356}
                preload
                className="absolute bottom-0 right-[6%] h-[92%] w-auto object-cover [mask-image:linear-gradient(to_left,black_75%,transparent)]"
              />
              {/* Title-safe guides */}
              <div className="pointer-events-none absolute inset-[5%] border border-dashed border-white/15" />
              <div className="pointer-events-none absolute inset-[10%] border border-dashed border-white/10" />

              <span className="absolute left-[6%] top-[7%] flex items-center gap-2 font-studio text-[10px] text-white sm:text-xs">
                <span className="animate-blink h-2.5 w-2.5 rounded-full bg-red-500" /> REC
              </span>
              <span className="absolute right-[6%] top-[7%] font-studio text-[10px] text-white/80 sm:text-xs">
                1920×1080 · 25fps
              </span>

              {/* Lower third */}
              <div className="absolute bottom-[12%] left-[6%] max-w-[58%]">
                <p className="font-studio text-[10px] uppercase tracking-[0.3em] text-[#ffd166] sm:text-xs">
                  Hi, I&apos;m
                </p>
                <h1 className="mt-1 text-3xl font-bold leading-none tracking-tight text-white sm:text-6xl lg:text-7xl">
                  {profile.name}
                </h1>
                <p className="mt-2 inline-block bg-[#4fa3ff] px-2 py-1 font-studio text-[10px] font-semibold text-black sm:text-sm">
                  {profile.role}
                </p>
              </div>
            </div>

            {/* Transport bar */}
            <div className="mt-3 flex flex-wrap items-center gap-3 font-studio text-xs">
              <span className="text-[#4fa3ff]">00:00:18:24</span>
              <span className="text-[#6b6b74]">Fit ▾ · Full ▾</span>
              <div className="mx-auto flex items-center gap-1 text-[#8a8a93]">
                <span className="px-2">⏮</span>
                <span className="px-2">◀</span>
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Play showreel on Behance"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-[#4fa3ff] text-black hover:bg-white"
                >
                  ▶
                </a>
                <span className="px-2">▶</span>
                <span className="px-2">⏭</span>
              </div>
              <span className="text-[#6b6b74]">00:01:12:00</span>
            </div>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#a1a1aa]">{profile.tagline}</p>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <a
                href="#work"
                className="rounded bg-[#4fa3ff] px-4 py-2 font-studio text-xs font-semibold text-black hover:bg-white"
              >
                Open project bin
              </a>
              <a
                href="#contact"
                className="rounded border border-[#3a3a3e] px-4 py-2 font-studio text-xs hover:border-[#4fa3ff]"
              >
                Export → Contact
              </a>
              <SocialLinks
                className="gap-2"
                linkClassName="h-8 w-8 justify-center rounded border border-[#3a3a3e] text-[#8a8a93] hover:border-[#4fa3ff] hover:text-[#4fa3ff]"
              />
            </div>
          </div>
        </Panel>

        {/* About + services as effects tree */}
        <Panel title="about_me.txt" className="lg:col-span-7" id="about">
          <Reveal className="space-y-4 p-5 leading-relaxed text-[#a1a1aa]">
            {profile.about.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </Reveal>
        </Panel>
        <Panel title="Effects" tabs={["Libraries", "Markers"]} className="lg:col-span-5">
          <div className="p-3 font-studio text-xs">
            <p className="px-2 py-1 text-[#6b6b74]">▾ 📁 Services</p>
            <ul>
              {services.map((s) => (
                <li key={s.title} className="rounded px-2 py-2 pl-6 hover:bg-[#4fa3ff]/10">
                  <p className="text-[#e4e4e7]">
                    <span className="mr-2 text-[#9b87f5]">fx</span>
                    {s.title}
                  </p>
                  <p className="mt-1 pl-7 font-sans text-[13px] leading-relaxed text-[#8a8a93]">
                    {s.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </Panel>

        {/* Project bin */}
        <Panel title="Project: Laxmi_Portfolio" tabs={["Media Browser"]} className="lg:col-span-12" id="work">
          <div className="grid gap-3 p-3 sm:grid-cols-2 lg:grid-cols-4">
            {projects.map((p) => (
              <Reveal key={p.title} className="sm:col-span-2">
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block rounded border border-transparent p-1 hover:border-[#4fa3ff]"
                >
                  <div className="relative overflow-hidden rounded-sm">
                    <Image
                      src={p.image}
                      alt={p.title}
                      width={404}
                      height={316}
                      className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute bottom-2 left-2 rounded-sm bg-black/70 px-1.5 py-0.5 font-studio text-[10px] text-white">
                      ▶ SEQUENCE
                    </span>
                  </div>
                  <p className="mt-2 truncate font-studio text-xs text-[#e4e4e7] group-hover:text-[#4fa3ff]">
                    Showreel_FINAL_v3.prproj
                  </p>
                  <p className="text-sm font-semibold text-white">{p.title}</p>
                  <p className="mt-1 text-sm text-[#8a8a93]">{p.description}</p>
                </a>
              </Reveal>
            ))}
            <Reveal className="sm:col-span-2">
              <a
                href={profile.behance}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-full min-h-48 flex-col items-center justify-center gap-3 rounded border border-dashed border-[#3a3a3e] p-6 text-center hover:border-[#4fa3ff]"
              >
                <span className="text-4xl">📁</span>
                <span className="font-studio text-xs text-[#e4e4e7]">Behance_Bin/</span>
                <span className="text-sm text-[#8a8a93]">Browse every project on Behance ↗</span>
              </a>
            </Reveal>
          </div>
        </Panel>

        {/* Timeline */}
        <Panel title="Timeline: Career_Sequence" className="lg:col-span-12" id="experience">
          <div className="overflow-x-auto">
            <div className="min-w-[720px] p-3 font-studio text-[11px]">
              {/* Ruler */}
              <div className="grid grid-cols-[64px_1fr] gap-2">
                <span className="text-[#4fa3ff]">00:21:00</span>
                <div className="relative h-6 border-b border-[#3a3a3e]">
                  {Array.from({ length: RANGE_MONTHS + 1 }, (_, i) => (
                    <span
                      key={i}
                      className={`absolute bottom-0 w-px bg-[#3a3a3e] ${i % 6 === 0 ? "h-3" : "h-1.5"}`}
                      style={{ left: pct(i) }}
                    />
                  ))}
                  {RULER.map((r) => (
                    <span key={r.label} className="absolute top-0 pl-1 text-[#6b6b74]" style={{ left: pct(monthIndex(r.at)) }}>
                      {r.label}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative mt-1">
                {/* Video tracks */}
                {experience.map((job, i) => (
                    <div key={job.company} className="grid grid-cols-[64px_1fr] gap-2 border-b border-[#26262a] py-1">
                      <span className="flex items-center justify-between rounded-sm bg-[#26262a] px-2 text-[#8a8a93]">
                        V{experience.length - i} <span className="text-[#6b6b74]">👁</span>
                      </span>
                      <div className="relative h-11">
                        <div
                          className="absolute inset-y-0 overflow-hidden rounded-sm border-l-2 border-white/40 px-2 py-1 text-black"
                          style={{ ...clipStyle(job.start, job.end), backgroundColor: clipColors[i] }}
                          title={`${job.company} — ${job.period}`}
                        >
                          <p className="truncate font-bold">{job.company}</p>
                          <p className="truncate opacity-70">{job.period}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                {/* Audio tracks: education */}
                {audioClips.map((e, i) => (
                  <div key={e.title} className="grid grid-cols-[64px_1fr] gap-2 border-b border-[#26262a] py-1">
                    <span className="flex items-center justify-between rounded-sm bg-[#26262a] px-2 text-[#8a8a93]">
                      A{i + 1} <span className="text-[#6b6b74]">M S</span>
                    </span>
                    <div className="relative h-9">
                      <div
                        className="absolute inset-y-0 overflow-hidden rounded-sm bg-[#1f5c3d] px-2 py-1 text-[#bff5d6]"
                        style={clipStyle(e.start!, e.end)}
                      >
                        <div className="absolute inset-x-0 bottom-0 h-3 bg-[repeating-linear-gradient(90deg,#3ec27a_0_2px,transparent_2px_5px)] opacity-50" />
                        <p className="relative truncate">{e.title}</p>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Playhead */}
                <div
                  className="pointer-events-none absolute -top-8 bottom-0 ml-[72px] w-px"
                  style={{ left: `calc((100% - 72px) * ${monthIndex(PLAYHEAD) / RANGE_MONTHS})` }}
                >
                  <div className="h-full w-px bg-[#4fa3ff]" />
                  <span className="absolute -left-1.5 top-0 h-3 w-3 rotate-45 bg-[#4fa3ff]" />
                  <span className="absolute -left-4 top-[-18px] rounded-sm bg-[#4fa3ff] px-1 text-[10px] font-bold text-black">
                    NOW
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Clip inspector */}
          <div className="grid gap-px border-t border-[#2e2e33] bg-[#2e2e33] md:grid-cols-3">
            {experience.map((job, i) => (
              <Reveal key={job.company} className="bg-[#1e1e21] p-5" delay={i * 80}>
                <p className="flex items-center gap-2 font-studio text-[11px] text-[#6b6b74]">
                  <span className="h-2.5 w-2.5 rounded-sm" style={{ backgroundColor: clipColors[i] }} />
                  {job.period}
                  {job.location ? ` · ${job.location}` : ""}
                </p>
                <h3 className="mt-2 font-semibold text-white">{job.company}</h3>
                <p className="text-sm text-[#4fa3ff]">{job.role}</p>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-[#a1a1aa]">
                  {job.points.map((pt) => (
                    <li key={pt}>› {pt}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </Panel>

        {/* Audio mixer = software skills */}
        <Panel title="Audio Track Mixer: Skills" className="lg:col-span-8" id="skills">
          <div className="grid grid-cols-3 gap-px bg-[#2e2e33] sm:grid-cols-6">
            {software.map((s) => (
              <div key={s.name} className="flex flex-col items-center gap-3 bg-[#1e1e21] px-2 py-5">
                <span className="font-studio text-[10px] text-[#6b6b74]">L ● R</span>
                <div className="flex h-40 items-end gap-1.5">
                  {[0, 3].map((offset) => (
                    <div key={offset} className="relative h-full w-2.5 overflow-hidden rounded-sm bg-[#111113]">
                      <div
                        className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#3ec27a] via-[#ffd166] to-[#ef4444]"
                        style={{ height: `${s.level - offset}%` }}
                      />
                    </div>
                  ))}
                  <div className="relative ml-1 h-full w-1 rounded bg-[#111113]">
                    <span
                      className="absolute -left-2 h-3 w-5 rounded-sm border border-[#555] bg-[#b4b4bb]"
                      style={{ bottom: `calc(${s.level}% - 6px)` }}
                    />
                  </div>
                </div>
                <span className="font-studio text-xs text-white">{s.level}</span>
                <span
                  className="w-full rounded-sm py-1 text-center font-studio text-[11px] font-bold"
                  style={{ backgroundColor: s.bg, color: s.color }}
                >
                  {s.short}
                </span>
                <span className="text-center text-[11px] leading-tight text-[#8a8a93]">{s.name}</span>
              </div>
            ))}
          </div>
        </Panel>
        <Panel title="Plug-ins: AI" className="lg:col-span-4">
          <ul className="divide-y divide-[#26262a] p-2 font-studio text-xs">
            {aiTools.map((t) => (
              <li key={t} className="flex items-center justify-between px-2 py-3">
                <span>{t}</span>
                <span className="flex h-4 w-8 items-center justify-end rounded-full bg-[#4fa3ff] px-0.5">
                  <span className="h-3 w-3 rounded-full bg-white" />
                </span>
              </li>
            ))}
          </ul>
          <div className="border-t border-[#2e2e33] p-4">
            <p className="font-studio text-[11px] text-[#6b6b74]">Certification</p>
            {certifications.map((c) => (
              <div key={c.title} className="mt-2">
                <p className="text-sm font-semibold text-white">{c.title}</p>
                <p className="text-xs text-[#9b87f5]">{c.issuer}</p>
                <p className="mt-2 text-sm leading-relaxed text-[#8a8a93]">{c.description}</p>
              </div>
            ))}
          </div>
        </Panel>

        {/* Export dialog = contact */}
        <Panel title="Export Settings" className="lg:col-span-12" id="contact">
          <div className="grid gap-8 p-5 sm:p-8 lg:grid-cols-2">
            <div>
              <p className="font-studio text-xs text-[#6b6b74]">Ready to render your next project?</p>
              <h2 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Let&apos;s cut
                <br />
                something <span className="text-[#4fa3ff]">great.</span>
              </h2>
              <SocialLinks
                className="mt-8 gap-2"
                linkClassName="rounded border border-[#3a3a3e] px-3 py-2 font-studio text-xs hover:border-[#4fa3ff] hover:text-[#4fa3ff]"
                showLabel
              />
            </div>
            <div className="rounded border border-[#2e2e33] bg-[#18181a] p-5 font-studio text-xs">
              <dl className="space-y-3">
                {[
                  ["Format", "Email / WhatsApp"],
                  ["Output Name", profile.email],
                  ["Phone", profile.phone],
                  ["Location", profile.location],
                  ["Education", education.map((e) => e.title).join(" · ")],
                ].map(([k, v]) => (
                  <div key={k} className="grid grid-cols-[96px_1fr] gap-3">
                    <dt className="text-[#6b6b74]">{k}</dt>
                    <dd className="break-words text-[#4fa3ff]">{v}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-6 flex justify-end gap-2 border-t border-[#2e2e33] pt-4">
                <a href={profile.phoneHref} className="rounded border border-[#3a3a3e] px-4 py-2 hover:border-white">
                  Queue
                </a>
                <a
                  href={`mailto:${profile.email}`}
                  className="rounded bg-[#4fa3ff] px-5 py-2 font-semibold text-black hover:bg-white"
                >
                  Export
                </a>
              </div>
            </div>
          </div>
        </Panel>
      </main>

      {/* Status bar */}
      <footer className="border-t border-[#2e2e33] bg-[#1a1a1c] font-studio text-[11px] text-[#6b6b74]">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-2 px-4 py-2">
          <span>© 2026 {profile.name}</span>
          <span>Rendered in New Delhi · 0 dropped frames</span>
        </div>
      </footer>
    </div>
  );
}
