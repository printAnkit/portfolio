import Reveal from "@/components/Reveal";
import SocialLinks from "@/components/SocialLinks";
import { profile } from "@/data/portfolio";

const channels = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "Phone", value: profile.phone, href: profile.phoneHref },
  { label: "Behance", value: "behance.net/laxmisingh01", href: profile.behance },
  { label: "Location", value: profile.location },
];

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-28">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-brand to-brand-deep px-6 py-16 sm:px-14 sm:py-20">
          <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-accent/25 blur-3xl" />

          <p className="relative text-sm font-medium uppercase tracking-[0.2em] text-white/70">
            Get in touch
          </p>
          <h2 className="relative mt-4 max-w-3xl font-display text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
            Have a project in mind? Let&apos;s make it move.
          </h2>
          <a
            href={`mailto:${profile.email}`}
            className="relative mt-10 inline-block rounded-full bg-accent px-8 py-4 font-semibold text-ink transition-transform hover:-translate-y-0.5"
          >
            Say hello →
          </a>

          <SocialLinks
            className="relative mt-8 gap-3"
            linkClassName="rounded-full bg-white/10 px-4 py-2.5 text-sm font-medium backdrop-blur hover:bg-white hover:text-brand-deep"
            showLabel
          />

          <dl className="relative mt-14 grid gap-6 border-t border-white/20 pt-10 sm:grid-cols-2 lg:grid-cols-4">
            {channels.map((c) => (
              <div key={c.label} className="min-w-0">
                <dt className="text-sm text-white/60">{c.label}</dt>
                <dd className="mt-1 break-words font-medium">
                  {c.href ? (
                    <a
                      href={c.href}
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="hover:text-accent"
                    >
                      {c.value}
                    </a>
                  ) : (
                    c.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Reveal>
    </section>
  );
}
