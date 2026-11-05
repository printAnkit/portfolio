import Image from "next/image";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { profile, projects } from "@/data/portfolio";

export default function Work() {
  return (
    <section id="work" className="border-y border-line bg-surface/40">
      <div className="mx-auto max-w-6xl px-5 py-28">
        <Reveal>
          <SectionHeading eyebrow="Selected work" title="Featured projects." />
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((p) => (
            <Reveal key={p.title}>
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block overflow-hidden rounded-3xl border border-line bg-ink transition-colors hover:border-brand"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.title}
                    width={404}
                    height={316}
                    className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent text-xl text-ink opacity-0 transition-opacity group-hover:opacity-100">
                    ↗
                  </span>
                </div>
                <div className="p-7">
                  <div className="mb-4 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-line px-3 py-1 text-xs text-muted"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-display text-2xl font-semibold">{p.title}</h3>
                  <p className="mt-2 text-muted">{p.description}</p>
                </div>
              </a>
            </Reveal>
          ))}

          <Reveal delay={120}>
            <a
              href={profile.behance}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full min-h-72 flex-col justify-between rounded-3xl bg-gradient-to-br from-brand to-brand-deep p-8 transition-transform hover:-translate-y-1"
            >
              <span className="font-display text-sm uppercase tracking-[0.2em] text-white/70">
                Behance
              </span>
              <div>
                <h3 className="font-display text-3xl font-bold leading-tight sm:text-4xl">
                  See the full portfolio on Behance
                </h3>
                <p className="mt-4 inline-flex items-center gap-2 font-semibold text-accent">
                  behance.net/laxmisingh01
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </p>
              </div>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
