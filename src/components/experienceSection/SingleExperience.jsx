import { motion } from "framer-motion";

function ExperienceLeft({ intro }) {
  const { timeline, summary, highlights = [] } = intro;

  return (
    <div className="flex flex-col gap-8 items-center lg:items-start">
      <p className="self-start text-accent font-bold uppercase text-xl lg:text-3xl font-special text-left">
        {timeline}
      </p>

      <div className="flex flex-wrap items-center justify-center gap-4 lg:justify-start">
        {highlights.map((highlight, highlightIndex) => (
          <div
            key={`${highlight.number}-${highlight.text}-${highlightIndex}`}
            className="flex flex-col items-center lg:items-start"
          >
            <p className="m-2 text-5xl font-bold text-accent-2 lg:text-6xl">
              {highlight.number}
            </p>
            <p className="-mt-1 text-lg font-bold uppercase text-accent lg:text-xl">
              {highlight.text}
            </p>
          </div>
        ))}
      </div>

      <p className="text-center text-lg leading-relaxed lg:text-left lg:text-xl">
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
        alt={image.alt || "experience"}
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
    <div className="w-full rounded-xl border border-default/50 bg-surface/35 p-5 md:p-6">
      {descriptionParagraphs.map((paragraph, paragraphIndex) => (
        <p
          key={`experience-paragraph-${experienceKey}-${paragraphIndex}`}
          className={`text-sm text-primary md:text-base ${
            paragraphIndex === descriptionParagraphs.length - 1 ? "" : "mb-4"
          }`}
        >
          {paragraph.map((segment, segmentIndex) => (
            <span
              key={`experience-segment-${experienceKey}-${paragraphIndex}-${segmentIndex}`}
              className={
                segment.highlight ? "font-bold text-accent-2" : undefined
              }
            >
              {segment.text}
            </span>
          ))}
        </p>
      ))}
    </div>
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

export default SingleExperience;
