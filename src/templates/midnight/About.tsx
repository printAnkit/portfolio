import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { profile, services } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-28">
      <div className="grid gap-14 lg:grid-cols-2">
        <Reveal>
          <SectionHeading eyebrow="About me" title="Stories told frame by frame." />
          <div className="space-y-5 text-lg leading-relaxed text-muted">
            {profile.about.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 100}>
              <div className="group h-full rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-brand">
                <span className="font-display text-sm text-accent">0{i + 1}</span>
                <h3 className="mt-4 font-display text-xl font-semibold">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{s.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
