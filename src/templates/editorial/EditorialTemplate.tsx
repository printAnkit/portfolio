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

function Kicker({ n, children }: { n: string; children: string }) {
  return (
    <div className="mb-10 flex items-baseline gap-4 border-t-2 border-[#1a1714] pt-4">
      <span className="font-editorial text-lg italic text-[#d9480f]">§{n}</span>
      <h2 className="text-xs font-semibold uppercase tracking-[0.3em]">{children}</h2>
    </div>
  );
}

export default function EditorialTemplate() {
  const [firstPara, ...restParas] = profile.about;

  return (
    <div className="flex-1 bg-[#f3eee4] font-sans text-[#1a1714] selection:bg-[#d9480f] selection:text-white">
      <header className="sticky top-0 z-50 border-b border-[#1a1714] bg-[#f3eee4]/95 backdrop-blur">
        <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-5">
          <p className="text-xs font-semibold uppercase tracking-[0.25em]">
            Vol. 01 <span className="hidden sm:inline">— The Portfolio Issue</span>
          </p>
          <ul className="hidden items-center gap-7 md:flex">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="font-editorial text-lg italic hover:text-[#d9480f]">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <ThemeSwitcher />
        </nav>
      </header>

      <main className="mx-auto max-w-6xl px-5">
        {/* Masthead */}
        <section id="top" className="pt-10">
          <h1 className="font-editorial text-[19vw] leading-[0.85] tracking-tight lg:text-[13.5rem]">
            Laxmi <em className="text-[#d9480f]">Singh</em>
          </h1>
          <div className="mt-6 grid gap-2 border-y border-[#1a1714] py-3 text-xs font-semibold uppercase tracking-[0.2em] sm:grid-cols-3">
            <p>{profile.role}</p>
            <p className="sm:text-center">{profile.location}</p>
            <p className="sm:text-right">Est. 2025 · Available now</p>
          </div>
        </section>

        {/* Feature: portrait + lead story */}
        <section id="about" className="grid gap-12 py-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <figure>
              <Image
                src="/images/laxmi.jpg"
                alt={`Portrait of ${profile.name}`}
                width={354}
                height={356}
                className="aspect-[4/5] w-full object-cover grayscale transition-all duration-700 hover:grayscale-0"
              />
              <figcaption className="mt-3 border-b border-[#1a1714]/30 pb-3 font-editorial text-base italic text-[#1a1714]/70">
                {profile.name}, photographed in New Delhi.
              </figcaption>
            </figure>
          </Reveal>

          <Reveal className="lg:col-span-7" delay={120}>
            <p className="font-editorial text-3xl leading-tight sm:text-[2.6rem] first-letter:float-left first-letter:mr-3 first-letter:font-editorial first-letter:text-[5.5rem] first-letter:leading-[0.8] first-letter:text-[#d9480f]">
              {firstPara}
            </p>
            <div className="mt-8 gap-8 text-[15px] leading-relaxed text-[#1a1714]/80 sm:columns-2">
              {restParas.map((p) => (
                <p key={p}>{p}</p>
              ))}
              <p className="mt-4 sm:mt-0">{profile.tagline}</p>
            </div>

            <dl className="mt-10 grid grid-cols-3 border-t border-[#1a1714]">
              {stats.map((s) => (
                <div key={s.label} className="border-r border-[#1a1714]/20 pr-3 pt-4 last:border-0">
                  <dd className="font-editorial text-5xl sm:text-6xl">{s.value}</dd>
                  <dt className="mt-1 text-xs uppercase tracking-wider text-[#1a1714]/60">{s.label}</dt>
                </div>
              ))}
            </dl>
          </Reveal>
        </section>

        {/* Services as an index */}
        <section className="py-12">
          <Kicker n="1">What I do</Kicker>
          <ol>
            {services.map((s, i) => (
              <li key={s.title} className="border-b border-[#1a1714]/25">
                <Reveal className="group grid gap-2 py-6 sm:grid-cols-12 sm:items-baseline">
                  <span className="font-editorial text-xl italic text-[#d9480f] sm:col-span-1">
                    ({String(i + 1).padStart(2, "0")})
                  </span>
                  <h3 className="font-editorial text-4xl transition-transform group-hover:translate-x-2 sm:col-span-5 sm:text-5xl">
                    {s.title}
                  </h3>
                  <p className="text-[#1a1714]/70 sm:col-span-6">{s.description}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </section>

        {/* Work */}
        <section id="work" className="py-12">
          <Kicker n="2">Selected work</Kicker>
          {projects.map((p) => (
            <Reveal key={p.title}>
              <a href={p.href} target="_blank" rel="noopener noreferrer" className="group grid gap-8 lg:grid-cols-12">
                <div className="overflow-hidden lg:col-span-8">
                  <Image
                    src={p.image}
                    alt={p.title}
                    width={404}
                    height={316}
                    className="aspect-[16/9] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-col justify-end lg:col-span-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1a1714]/60">
                    {p.tags.join(" / ")}
                  </p>
                  <h3 className="mt-3 font-editorial text-4xl italic leading-tight group-hover:text-[#d9480f]">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-[#1a1714]/70">{p.description}</p>
                  <span className="mt-5 text-sm font-semibold underline decoration-[#d9480f] decoration-2 underline-offset-4">
                    View the full story on Behance →
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </section>

        {/* Experience as a table of record */}
        <section id="experience" className="py-12">
          <Kicker n="3">Experience</Kicker>
          <div>
            {experience.map((job) => (
              <Reveal key={job.company}>
                <article className="grid gap-3 border-b border-[#1a1714]/25 py-8 md:grid-cols-12">
                  <p className="text-sm uppercase tracking-wider text-[#1a1714]/60 md:col-span-3">
                    {job.period}
                  </p>
                  <div className="md:col-span-4">
                    <h3 className="font-editorial text-3xl">{job.company}</h3>
                    <p className="italic text-[#d9480f]">{job.role}</p>
                  </div>
                  <ul className="space-y-2 text-[15px] leading-relaxed text-[#1a1714]/75 md:col-span-5">
                    {job.points.map((pt) => (
                      <li key={pt}>— {pt}</li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="mt-16 grid gap-14 md:grid-cols-2">
            <Reveal>
              <h3 className="mb-4 font-editorial text-3xl italic">Education</h3>
              {education.map((e) => (
                <div key={e.title} className="border-t border-[#1a1714]/25 py-4">
                  <p className="font-semibold">{e.title}</p>
                  <p className="text-sm text-[#1a1714]/65">
                    {e.place} — {e.period}
                  </p>
                </div>
              ))}
            </Reveal>
            <Reveal delay={100}>
              <h3 className="mb-4 font-editorial text-3xl italic">Certifications</h3>
              {certifications.map((c) => (
                <div key={c.title} className="border-t border-[#1a1714]/25 py-4">
                  <p className="font-semibold">
                    {c.title}, <span className="font-normal italic">{c.issuer}</span>
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-[#1a1714]/65">{c.description}</p>
                </div>
              ))}
            </Reveal>
          </div>
        </section>

        {/* Toolkit with dotted leaders */}
        <section id="skills" className="py-12">
          <Kicker n="4">The toolkit</Kicker>
          <div className="grid gap-x-16 md:grid-cols-2">
            {software.map((s) => (
              <div key={s.name} className="flex items-baseline gap-3 py-3">
                <span className="font-editorial text-2xl">{s.name}</span>
                <span className="flex-1 border-b-2 border-dotted border-[#1a1714]/30" />
                <span className="font-editorial text-2xl italic text-[#d9480f]">{s.level}</span>
              </div>
            ))}
          </div>
          <p className="mt-8 text-[#1a1714]/75">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1a1714]">
              AI in the workflow —{" "}
            </span>
            <span className="font-editorial text-xl italic">{aiTools.join(", ")}.</span>
          </p>
        </section>

        {/* Contact */}
        <section id="contact" className="border-t-2 border-[#1a1714] py-20 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em]">Correspondence</p>
          <h2 className="mt-6 font-editorial text-6xl leading-none sm:text-8xl">
            Let&apos;s work <em className="text-[#d9480f]">together.</em>
          </h2>
          <a
            href={`mailto:${profile.email}`}
            className="mt-10 inline-block break-all font-editorial text-2xl italic underline decoration-[#d9480f] decoration-2 underline-offset-8 hover:text-[#d9480f] sm:text-4xl"
          >
            {profile.email}
          </a>
          <p className="mt-6 text-sm text-[#1a1714]/65">
            <a href={profile.phoneHref} className="hover:text-[#d9480f]">
              {profile.phone}
            </a>{" "}
            · {profile.location}
          </p>
          <SocialLinks
            className="mt-8 justify-center gap-6 text-sm font-semibold uppercase tracking-[0.15em]"
            linkClassName="border-b border-[#1a1714] pb-1 hover:border-[#d9480f] hover:text-[#d9480f]"
            iconClassName="h-3.5 w-3.5"
            showLabel
          />
        </section>
      </main>

      <footer className="border-t border-[#1a1714]">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-2 px-5 py-6 text-xs uppercase tracking-[0.2em] sm:flex-row">
          <p>© 2026 {profile.name}</p>
          <p>Printed in New Delhi</p>
        </div>
      </footer>
    </div>
  );
}
