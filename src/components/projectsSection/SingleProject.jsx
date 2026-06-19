import { memo } from "react";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import Card from "../common/Card";
import { cn } from "../../lib/utils";

const SingleProject = ({ name, year, align, image, link }) => {
  return (
    <Card
      interactive
      className={cn(
        "group flex w-full items-center gap-6 p-5 sm:flex-col-reverse sm:gap-6 sm:p-6 md:gap-8 md:p-7",
        align === "left" ? "md:flex-row" : "md:flex-row-reverse",
      )}
    >
      <div
        className={cn(
          "flex w-full flex-col gap-3 text-center sm:text-center",
          align === "left" ? "md:text-left" : "md:text-right md:items-end",
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
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${name} project`}
          className={cn(
            "focus-ring inline-flex items-center gap-2 self-center rounded-md text-lg font-semibold text-accent transition-colors duration-300 hover:text-accent-2 sm:self-center",
            align === "left" ? "md:self-start" : "md:self-end",
          )}
        >
          View Project <BsFillArrowUpRightCircleFill aria-hidden="true" />
        </a>
      </div>
      <div className="relative aspect-square w-full max-w-[220px] shrink-0 overflow-hidden rounded-card border border-default/15 shadow-soft">
        <img
          src={image}
          alt={`${name} project preview`}
          loading="lazy"
          decoding="async"
          width="220"
          height="220"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
    </Card>
  );
};

export default memo(SingleProject);
