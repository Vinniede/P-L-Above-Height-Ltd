type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
  eyebrowClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  eyebrowClassName,
  titleClassName,
  descriptionClassName,
}: SectionHeadingProps) {
  return (
    <div
      className={
        align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"
      }
    >
      <p
        className={`text-sm font-semibold uppercase tracking-[0.35em] ${
          eyebrowClassName ?? "text-brand-orange"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl ${
          titleClassName ?? "text-brand-navy"
        }`}
      >
        {title}
      </h2>
      <p
        className={`mt-4 text-lg ${
          descriptionClassName ?? "text-slate-600"
        }`}
      >
        {description}
      </p>
    </div>
  );
}
