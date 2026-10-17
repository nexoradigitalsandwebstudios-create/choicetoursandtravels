interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  intro?: string;
  /** "light" for sand backgrounds, "dark" for ink backgrounds and photos */
  tone?: "light" | "dark";
  align?: "left" | "center";
  /** Lets a section point aria-labelledby at its heading */
  id?: string;
}

// The small label + heading + intro paragraph used at the top of most sections.
export default function SectionHeading({
  eyebrow,
  title,
  intro,
  tone = "light",
  align = "left",
  id,
}: SectionHeadingProps) {
  const mutedText = tone === "dark" ? "text-sand/85" : "text-text-muted";
  const alignment = align === "center" ? "mx-auto text-center items-center" : "items-start";

  return (
    <div className={`flex max-w-3xl flex-col ${alignment}`}>
      {eyebrow && (
        <p className={`flex items-center gap-1.5 text-sm font-semibold tracking-[0.14em] uppercase ${mutedText}`}>
          <span aria-hidden="true" className="h-px w-4 bg-accent" />
          {eyebrow}
        </p>
      )}
      <h2 id={id} className="mt-2 text-2xl lg:text-3xl">
        {title}
      </h2>
      {intro && <p className={`mt-2 text-lg ${mutedText}`}>{intro}</p>}
    </div>
  );
}
