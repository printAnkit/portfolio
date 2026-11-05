import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { certifications, education, experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-5 py-28">
      <Reveal>
        <SectionHeading eyebrow="Experience" title="Where I've been creating." />
      </Reveal>

      <ol className="relative border-l border-line">
        {experience.map((job, i) => (
          <li key={job.company} className="mb-14 ml-8 last:mb-0">
            <span
              className={`absolute -left-[7px] mt-2 h-3.5 w-3.5 rounded-full border-2 border-ink ${
                i === 0 ? "bg-accent" : "bg-brand"
              }`}
            />
            <Reveal>
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                <h3 className="font-display text-2xl font-semibold">
                  {job.role}{" "}
                  <span className="text-brand">@ {job.company}</span>
                </h3>
                <p className="text-sm text-muted">
                  {job.period}
                  {job.location ? ` · ${job.location}` : ""}
                </p>
              </div>
              <ul className="mt-4 space-y-2 text-muted">
                {job.points.map((pt) => (
                  <li key={pt} className="flex gap-3">
                    <span className="mt-2.5 h-1 w-3 shrink-0 bg-accent" />
                    {pt}
                  </li>
                ))}
              </ul>
            </Reveal>
          </li>
        ))}
      </ol>

      <div className="mt-28 grid gap-14 lg:grid-cols-2">
        <Reveal>
          <h3 className="mb-8 font-display text-2xl font-bold">Education</h3>
          <div className="space-y-4">
            {education.map((e) => (
              <div key={e.title} className="rounded-2xl border border-line bg-surface p-6">
                <p className="text-sm text-accent">{e.period}</p>
                <h4 className="mt-2 font-display text-lg font-semibold">{e.title}</h4>
                <p className="text-muted">{e.place}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <h3 className="mb-8 font-display text-2xl font-bold">Certifications</h3>
          {certifications.map((c) => (
            <div
              key={c.title}
              className="rounded-2xl border border-brand/40 bg-gradient-to-br from-brand/15 to-transparent p-6"
            >
              <p className="text-sm text-accent">{c.issuer}</p>
              <h4 className="mt-2 font-display text-lg font-semibold">{c.title}</h4>
              <p className="mt-2 leading-relaxed text-muted">{c.description}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
