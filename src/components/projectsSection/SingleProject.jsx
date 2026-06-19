import { memo } from "react";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { cn } from "../../lib/utils";

const SingleProject = ({ name, year, align, image, link, about }) => {
  const alignItems =
    align === "left" ? "md:text-left md:items-start" : "md:text-right md:items-end";

  return (
    <div
      className={cn(
        "group flex w-full items-center gap-6 rounded-card border border-default/10 bg-surface/25 p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:bg-surface/40 hover:shadow-card-hover sm:flex-col-reverse sm:gap-6 sm:p-6 md:gap-8 md:p-7",
        align === "left" ? "md:flex-row" : "md:flex-row-reverse",
      )}
    >
      <div
        className={cn(
          "flex w-full flex-col gap-3 text-center sm:text-center",
          alignItems,
        )}
      >
        <h2 className="text-2xl font-extrabold text-accent-2 sm:text-3xl md:text-4xl">
          {name}
        </h2>
        {year ? (
          <p className="font-special text-sm font-thin uppercase tracking-wide text-secondary">
            {year}
          </p>
        ) : null}
        {about ? (
          <p className="max-w-md text-sm leading-relaxed text-secondary sm:text-base">
            {about}
          </p>
        ) : null}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${name} project`}
          className={cn(
            "focus-ring mt-1 inline-flex items-center gap-2 self-center rounded-md text-lg font-semibold text-accent transition-colors duration-300 hover:text-accent-2 sm:self-center",
            align === "left" ? "md:self-start" : "md:self-end",
          )}
        >
          View Project <BsFillArrowUpRightCircleFill aria-hidden="true" />
        </a>
      </div>
      <div className="relative aspect-square w-full max-w-[220px] shrink-0 overflow-hidden rounded-card border border-default/15 shadow-soft">
        {image ? (
          <img
            src={image}
            alt={`${name} project preview`}
            loading="lazy"
            decoding="async"
            width="220"
            height="220"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-surface-2/50 text-3xl font-extrabold uppercase text-accent/40">
            {name.charAt(0)}
          </div>
        )}
      </div>
    </div>
  );
};

export default memo(SingleProject);
