import Image from "next/image";
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

const box = "border-[3px] border-black";
const shadow = "shadow-[6px_6px_0_#000]";
const lift = "transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[9px_9px_0_#000]";
const cardColors = ["bg-[#ffd43b]", "bg-[#ff7eb6]", "bg-[#7cc4ff]", "bg-[#6ee7a8]"];

function Title({ children, color = "bg-[#ffd43b]" }: { children: string; color?: string }) {
  return (
    <h2
      className={`mb-10 inline-block -rotate-1 px-4 py-2 font-brutal text-4xl uppercase sm:text-6xl ${color} ${box} ${shadow}`}
    >
      {children}
    </h2>
  );
}

export default function BrutalTemplate() {
  const marquee = [...services.map((s) => s.title), ...aiTools];

  return (
    <div className="flex-1 overflow-x-clip bg-[#fff8e1] font-brutal-mono text-black selection:bg-black selection:text-[#ffd43b]">
      <header className="sticky top-0 z-50 border-b-[3px] border-black bg-[#fff8e1]">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5">
          <a href="#top" className={`bg-[#ffd43b] px-3 py-1 font-brutal text-lg uppercase ${box}`}>
            Laxmi!
          </a>
          <ul className="hidden items-center gap-6 text-sm font-bold uppercase md:flex">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="underline-offset-4 hover:underline hover:decoration-[3px]">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <ThemeSwitcher />
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section id="top" className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <p className={`inline-block rotate-[-2deg] bg-[#6ee7a8] px-3 py-1 text-sm font-bold uppercase ${box}`}>
              ● Available for hire
            </p>
            <h1 className="mt-6 font-brutal text-6xl uppercase leading-[0.9] sm:text-8xl">
              Laxmi
              <br />
              <span className="text-[#3b6cff] [-webkit-text-stroke:3px_#000]">Singh</span>
            </h1>
            <p className={`mt-6 inline-block bg-black px-3 py-2 text-sm font-bold uppercase text-[#ffd43b]`}>
              Video editor ✦ Motion designer ✦ Graphic designer
            </p>
            <p className="mt-6 max-w-lg leading-relaxed">{profile.tagline}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#work" className={`bg-[#ff7eb6] px-6 py-3 font-bold uppercase ${box} ${shadow} ${lift}`}>
                See my work →
              </a>
              <a href="#contact" className={`bg-white px-6 py-3 font-bold uppercase ${box} ${shadow} ${lift}`}>
                Hire me
              </a>
            </div>
            <SocialLinks
              className="mt-8 gap-3"
              linkClassName={`h-12 w-12 justify-center bg-white ${box} shadow-[4px_4px_0_#000] hover:bg-[#ffd43b] hover:-translate-y-0.5`}
              iconClassName="h-5 w-5"
            />
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className={`relative bg-[#7cc4ff] p-4 ${box} shadow-[12px_12px_0_#000]`}>
              <Image
                src="/images/laxmi.jpg"
                alt={`Portrait of ${profile.name}`}
                width={354}
                height={356}
                className={`aspect-square w-full object-cover ${box}`}
              />
            </div>
            <span className={`absolute -right-3 -top-5 rotate-6 bg-[#ff7eb6] px-4 py-2 font-brutal text-xl uppercase ${box}`}>
              Hi! 👋
            </span>
            <span className={`absolute -bottom-5 -left-3 -rotate-3 bg-[#ffd43b] px-4 py-2 text-sm font-bold uppercase ${box}`}>
              Now @ OPTM Healthcare
            </span>
          </div>
        </section>

        {/* Stats */}
        <section className="mx-auto grid max-w-6xl gap-5 px-5 pb-16 sm:grid-cols-3">
          {stats.map((s, i) => (
            <div key={s.label} className={`p-6 ${cardColors[i]} ${box} ${shadow}`}>
              <p className="font-brutal text-5xl">{s.value}</p>
              <p className="mt-2 text-sm font-bold uppercase">{s.label}</p>
            </div>
          ))}
        </section>

        {/* Marquee band */}
        <div className="-rotate-1 overflow-hidden border-y-[3px] border-black bg-black py-4">
          <div className="animate-marquee flex w-max gap-10 whitespace-nowrap">
            {[...marquee, ...marquee].map((m, i) => (
              <span key={i} className="flex items-center gap-10 font-brutal text-2xl uppercase text-[#ffd43b]">
                {m} <span className="text-[#ff7eb6]">★</span>
              </span>
            ))}
          </div>
        </div>

        {/* About */}
        <section id="about" className="mx-auto max-w-6xl px-5 py-24">
          <Title>About me</Title>
          <div className="grid gap-8 lg:grid-cols-2">
            <Reveal>
              <div className={`h-full space-y-4 bg-[#3b6cff] p-8 leading-relaxed text-white ${box} ${shadow}`}>
                {profile.about.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </Reveal>
            <div className="grid gap-5 sm:grid-cols-2">
              {services.map((s, i) => (
                <Reveal key={s.title} delay={i * 80}>
                  <div className={`h-full p-6 ${cardColors[i]} ${box} ${shadow} ${lift}`}>
                    <p className="font-brutal text-3xl">0{i + 1}</p>
                    <h3 className="mt-3 font-brutal text-lg uppercase">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed">{s.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Work */}
        <section id="work" className="mx-auto max-w-6xl px-5 py-12">
          <Title color="bg-[#ff7eb6]">Work</Title>
          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((p) => (
              <Reveal key={p.title}>
                <a href={p.href} target="_blank" rel="noopener noreferrer" className={`block bg-white ${box} ${shadow} ${lift}`}>
                  <Image
                    src={p.image}
                    alt={p.title}
                    width={404}
                    height={316}
                    className="aspect-[16/10] w-full border-b-[3px] border-black object-cover"
                  />
                  <div className="p-6">
                    <h3 className="font-brutal text-2xl uppercase">{p.title}</h3>
                    <p className="mt-2 text-sm">{p.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span key={t} className="border-2 border-black bg-[#ffd43b] px-2 py-0.5 text-xs font-bold uppercase">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>
              </Reveal>
            ))}
            <Reveal delay={100}>
              <a
                href={profile.behance}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex h-full min-h-64 flex-col justify-between bg-[#6ee7a8] p-8 ${box} ${shadow} ${lift}`}
              >
                <span className="text-sm font-bold uppercase">Behance ↗</span>
                <span className="font-brutal text-4xl uppercase leading-none">More projects this way →</span>
              </a>
            </Reveal>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="mx-auto max-w-6xl px-5 py-24">
          <Title color="bg-[#7cc4ff]">Experience</Title>
          <div className="space-y-6">
            {experience.map((job, i) => (
              <Reveal key={job.company}>
                <article className={`grid bg-white md:grid-cols-[220px_1fr] ${box} ${shadow}`}>
                  <div className={`border-b-[3px] border-black p-5 md:border-b-0 md:border-r-[3px] ${cardColors[i]}`}>
                    <p className="font-bold uppercase">{job.period}</p>
                    {job.location && <p className="text-sm">{job.location}</p>}
                  </div>
                  <div className="p-6">
                    <h3 className="font-brutal text-2xl uppercase">{job.company}</h3>
                    <p className="font-bold text-[#3b6cff]">{job.role}</p>
                    <ul className="mt-4 space-y-2 text-sm leading-relaxed">
                      {job.points.map((pt) => (
                        <li key={pt}>▸ {pt}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            <Reveal>
              <div className={`h-full bg-white p-6 ${box} ${shadow}`}>
                <h3 className="mb-4 inline-block bg-black px-2 py-1 font-brutal uppercase text-white">Education</h3>
                {education.map((e) => (
                  <div key={e.title} className="border-b-2 border-dashed border-black py-3 last:border-0">
                    <p className="font-bold">{e.title}</p>
                    <p className="text-sm">
                      {e.place} / {e.period}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className={`h-full bg-[#ffd43b] p-6 ${box} ${shadow}`}>
                <h3 className="mb-4 inline-block bg-black px-2 py-1 font-brutal uppercase text-white">
                  Certified
                </h3>
                {certifications.map((c) => (
                  <div key={c.title}>
                    <p className="font-bold">
                      {c.title} ({c.issuer})
                    </p>
                    <p className="mt-2 text-sm leading-relaxed">{c.description}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="mx-auto max-w-6xl px-5 py-12">
          <Title color="bg-[#6ee7a8]">Skills</Title>
          <div className="grid gap-5 md:grid-cols-2">
            {software.map((s) => (
              <div key={s.name} className={`bg-white p-4 ${box}`}>
                <div className="flex justify-between font-bold uppercase">
                  <span>{s.name}</span>
                  <span>{s.level}%</span>
                </div>
                <div className="mt-3 h-6 border-[3px] border-black bg-white">
                  <div
                    className="h-full border-r-[3px] border-black bg-[repeating-linear-gradient(45deg,#ff7eb6_0_10px,#ffd43b_10px_20px)]"
                    style={{ width: `${s.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {aiTools.map((t, i) => (
              <span
                key={t}
                className={`px-4 py-2 font-bold uppercase ${cardColors[i % cardColors.length]} ${box} ${
                  i % 2 ? "rotate-2" : "-rotate-2"
                }`}
              >
                {t}
              </span>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mx-auto max-w-6xl px-5 py-24">
          <div className={`bg-[#ffd43b] p-8 sm:p-14 ${box} shadow-[12px_12px_0_#000]`}>
            <h2 className="font-brutal text-5xl uppercase leading-[0.95] sm:text-8xl">
              Let&apos;s
              <br />
              work!
            </h2>
            <a
              href={`mailto:${profile.email}`}
              className={`mt-8 inline-block break-all bg-white px-5 py-3 font-bold sm:text-xl ${box} ${shadow} ${lift}`}
            >
              {profile.email}
            </a>
            <p className="mt-6 font-bold">
              <a href={profile.phoneHref} className="underline decoration-[3px] underline-offset-4">
                {profile.phone}
              </a>{" "}
              — {profile.location}
            </p>
            <SocialLinks
              className="mt-8 gap-3"
              linkClassName={`bg-white px-4 py-2 text-sm font-bold uppercase ${box} shadow-[4px_4px_0_#000] hover:bg-[#ff7eb6]`}
              showLabel
            />
          </div>
        </section>
      </main>

      <footer className="border-t-[3px] border-black bg-black py-6 text-center text-sm font-bold uppercase text-[#ffd43b]">
        © 2026 {profile.name} — made loud in New Delhi
      </footer>
    </div>
  );
}
