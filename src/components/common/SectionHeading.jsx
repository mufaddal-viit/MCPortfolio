import { cn } from "@/lib/utils";

/**
 * Reusable section heading with an optional eyebrow label and description.
 * Uses a responsive type ramp so headings scale smoothly across breakpoints.
 *
 * @param {object} props
 * @param {string} props.title - Main heading text.
 * @param {string} [props.eyebrow] - Small uppercase label shown above the title.
 * @param {string} [props.description] - Supporting text shown below the title.
 * @param {2|3} [props.as=2] - Heading level (renders h2 or h3).
 */
const SectionHeading = ({
  title,
  eyebrow,
  description,
  as = 2,
  className = "",
  titleClassName = "",
  descriptionClassName = "",
}) => {
  const HeadingTag = as === 3 ? "h3" : "h2";

  return (
    <div className={cn("flex flex-col items-center text-center", className)}>
      {eyebrow ? (
        <span className="mb-4 inline-flex items-center rounded-full border border-default/20 bg-surface/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-accent backdrop-blur-sm">
          {eyebrow}
        </span>
      ) : null}

      <HeadingTag
        className={cn(
          "text-4xl font-bold tracking-tight text-accent sm:text-5xl lg:text-6xl",
          description ? "mb-5" : "mb-0",
          titleClassName,
        )}
      >
        {title}
      </HeadingTag>

      {description ? (
        <p
          className={cn(
            "max-w-3xl text-base leading-relaxed text-secondary sm:text-lg",
            descriptionClassName,
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
};

export default SectionHeading;
