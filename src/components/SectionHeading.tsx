export default function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="mb-12">
      <p className="mb-3 flex items-center gap-3 text-sm font-medium uppercase tracking-[0.2em] text-accent">
        <span className="h-px w-8 bg-accent" />
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl font-bold tracking-tight sm:text-5xl">
        {title}
      </h2>
    </div>
  );
}
