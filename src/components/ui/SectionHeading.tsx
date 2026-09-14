export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}) {
  const alignClasses = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col gap-3 ${alignClasses}`}>
      {eyebrow ? (
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="font-display text-3xl sm:text-4xl text-charcoal">{title}</h2>
      {subtitle ? (
        <p className="max-w-2xl text-charcoal-light text-base sm:text-lg">{subtitle}</p>
      ) : null}
    </div>
  );
}
