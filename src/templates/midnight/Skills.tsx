import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { aiTools, software } from "@/data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="border-y border-line bg-surface/40">
      <div className="mx-auto max-w-6xl px-5 py-28">
        <Reveal>
          <SectionHeading eyebrow="Toolkit" title="Software I work in." />
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {software.map((s, i) => (
            <Reveal key={s.name} delay={i * 80}>
              <div className="flex items-center gap-5 rounded-2xl border border-line bg-ink p-5">
                <span
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl font-display text-xl font-bold"
                  style={{ backgroundColor: s.bg, color: s.color }}
                >
                  {s.short}
                </span>
                <div className="flex-1">
                  <div className="flex justify-between text-sm">
                    <span className="font-semibold">{s.name}</span>
                    <span className="text-muted">{s.level}%</span>
                  </div>
                  <div className="mt-2.5 h-1.5 overflow-hidden rounded-full bg-line">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-brand to-accent"
                      style={{ width: `${s.level}%` }}
                    />
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16">
          <h3 className="mb-6 font-display text-xl font-semibold">AI tools in my workflow</h3>
          <div className="flex flex-wrap gap-3">
            {aiTools.map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-line bg-ink px-5 py-2.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
              >
                {tool}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
