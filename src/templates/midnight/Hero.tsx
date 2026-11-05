import Image from "next/image";
import SocialLinks from "@/components/SocialLinks";
import { aiTools, profile, software, stats } from "@/data/portfolio";

export default function Hero() {
  const marquee = [...software.map((s) => s.name), ...aiTools];

  return (
    <section id="top" className="relative overflow-hidden pt-28 sm:pt-36">
      <div className="bg-grid pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-brand/30 blur-[140px]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 lg:grid-cols-[1.25fr_1fr]">
        <div>
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-surface/70 px-4 py-1.5 text-sm text-muted">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Available for freelance & full-time
          </p>

          <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl">
            Hi, I&apos;m {profile.shortName}.
            <br />
            <span className="bg-gradient-to-r from-brand via-sky-400 to-accent bg-clip-text text-transparent">
              I make videos move.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            {profile.role} based in {profile.location}. {profile.tagline}
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#work"
              className="rounded-full bg-accent px-7 py-3.5 font-semibold text-ink transition-transform hover:-translate-y-0.5"
            >
              View my work
            </a>
            <a
              href="#contact"
              className="rounded-full border border-line px-7 py-3.5 font-semibold transition-colors hover:border-white"
            >
              Let&apos;s talk
            </a>
          </div>

          <SocialLinks
            className="mt-8 gap-3"
            linkClassName="h-11 w-11 justify-center rounded-full border border-line text-muted hover:border-accent hover:text-accent"
          />

          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-line pt-8">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-3xl font-bold sm:text-4xl">{s.value}</dd>
                <dd className="mt-1 text-xs leading-snug text-muted sm:text-sm">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute -inset-3 rotate-3 rounded-[2rem] bg-gradient-to-br from-brand to-brand-deep" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-surface">
            <Image
              src="/images/laxmi.jpg"
              alt={`Portrait of ${profile.name}`}
              width={354}
              height={356}
              preload
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -left-5 rounded-2xl border border-line bg-ink/90 px-5 py-3 shadow-2xl backdrop-blur">
            <p className="text-xs text-muted">Currently at</p>
            <p className="font-display font-semibold">OPTM Healthcare</p>
          </div>
        </div>
      </div>

      <div className="relative mt-24 overflow-hidden border-y border-line bg-surface/50 py-5">
        <div className="animate-marquee flex w-max gap-12 whitespace-nowrap">
          {[...marquee, ...marquee].map((item, i) => (
            <span
              key={i}
              className="flex items-center gap-12 font-display text-xl font-semibold text-muted"
            >
              {item}
              <span className="text-accent">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
