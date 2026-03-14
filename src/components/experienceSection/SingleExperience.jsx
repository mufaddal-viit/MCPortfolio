import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

function ExperienceLeft({ intro }) {
  const { timeline, summary, highlights = [] } = intro;

  return (
    <div className="flex flex-col gap-8 items-center lg:items-start">
      <p className="self-start text-lightCyan font-bold uppercase text-xl lg:text-3xl font-special text-left">
        {timeline}
      </p>

      <div className="flex flex-wrap items-center justify-center gap-4 lg:justify-start">
        {highlights.map((highlight, highlightIndex) => (
          <div
            key={`${highlight.number}-${highlight.text}-${highlightIndex}`}
            className="flex flex-col items-center lg:items-start"
          >
            <p className="m-2 text-5xl font-bold text-orange lg:text-6xl">
              {highlight.number}
            </p>
            <p className="-mt-1 text-lg font-bold uppercase text-cyan lg:text-xl">
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
    <div className="mx-auto w-full max-w-[140px] p-1 animate-pulse sm:max-w-[170px] lg:max-w-[220px]">
      <img
        src={image.src}
        alt={image.alt || "experience"}
        loading="lazy"
        decoding="async"
        width="220"
        height="220"
      />
    </div>
  );
}

function ExperienceRight({ descriptionParagraphs, experienceKey }) {
  return (
    <div className="w-full rounded-xl border border-white p-5 md:p-6">
      {descriptionParagraphs.map((paragraph, paragraphIndex) => (
        <p
          key={`experience-paragraph-${experienceKey}-${paragraphIndex}`}
          className={`text-sm text-white md:text-base ${
            paragraphIndex === descriptionParagraphs.length - 1 ? "" : "mb-4"
          }`}
        >
          {paragraph.map((segment, segmentIndex) => (
            <span
              key={`experience-segment-${experienceKey}-${paragraphIndex}-${segmentIndex}`}
              className={
                segment.highlight ? "font-bold text-orange" : undefined
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
    <motion.article
      variants={fadeIn("up", index * 0.12)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.15 }}
      className="grid w-full items-center gap-8 lg:grid-cols-[320px_220px_minmax(0,1fr)]"
    >
      <ExperienceLeft intro={intro} />
      <ExperienceCenter image={intro.image} />
      <ExperienceRight
        descriptionParagraphs={descriptionParagraphs}
        experienceKey={experienceKey}
      />
    </motion.article>
  );
}

export default SingleExperience;
