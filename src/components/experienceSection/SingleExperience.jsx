import { memo } from "react";
import { motion } from "framer-motion";
import Card from "../common/Card";
import { cn } from "../../lib/utils";

function ExperienceLeft({ intro }) {
  const { timeline, summary, highlights = [] } = intro;

  return (
    <div className="flex flex-col items-center gap-6 lg:items-start">
      <p className="eyebrow self-center lg:self-start">{timeline}</p>

      <div className="flex flex-wrap items-center justify-center gap-6 lg:justify-start">
        {highlights.map((highlight, highlightIndex) => (
          <div
            key={`${highlight.number}-${highlight.text}-${highlightIndex}`}
            className="flex flex-col items-center lg:items-start"
          >
            <p className="text-3xl font-bold text-accent-2 lg:text-4xl">
              {highlight.number}
            </p>
            <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-accent lg:text-base">
              {highlight.text}
            </p>
          </div>
        ))}
      </div>

      <p className="text-center text-base leading-relaxed text-secondary lg:text-left lg:text-lg">
        {summary}
      </p>
    </div>
  );
}

function ExperienceCenter({ image }) {
  if (!image?.src) return <div className="hidden lg:block" />;

  return (
    <motion.div
      className="mx-auto w-full max-w-[140px] p-1 sm:max-w-[170px] lg:max-w-[220px]"
      animate={{ y: [0, -10, 0] }}
      transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
    >
      <img
        src={image.src}
        alt={image.alt || "Experience illustration"}
        loading="lazy"
        decoding="async"
        width="220"
        height="220"
      />
    </motion.div>
  );
}

function ExperienceRight({ descriptionParagraphs, experienceKey }) {
  return (
    <Card className="w-full p-6 md:p-7">
      {descriptionParagraphs.map((paragraph, paragraphIndex) => (
        <p
          key={`experience-paragraph-${experienceKey}-${paragraphIndex}`}
          className={cn(
            "text-sm leading-relaxed text-primary md:text-base",
            paragraphIndex === descriptionParagraphs.length - 1 ? "" : "mb-4",
          )}
        >
          {paragraph.map((segment, segmentIndex) => (
            <span
              key={`experience-segment-${experienceKey}-${paragraphIndex}-${segmentIndex}`}
              className={
                segment.highlight ? "font-semibold text-accent-2" : undefined
              }
            >
              {segment.text}
            </span>
          ))}
        </p>
      ))}
    </Card>
  );
}

function SingleExperience({ experience, index = 0 }) {
  const { intro = {}, descriptionParagraphs = [], id } = experience;
  const experienceKey = id || index;

  return (
    <article className="grid w-full items-center gap-8 lg:grid-cols-[320px_220px_minmax(0,1fr)]">
      <ExperienceLeft intro={intro} />
      <ExperienceCenter image={intro.image} />
      <ExperienceRight
        descriptionParagraphs={descriptionParagraphs}
        experienceKey={experienceKey}
      />
    </article>
  );
}

export default memo(SingleExperience);
