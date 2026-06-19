import { memo } from "react";
import { ArrowUpRight, Clock3, Linkedin } from "lucide-react";
import { cn } from "@/lib/utils";
import Card from "../common/Card";

function BlogCard({
  title,
  oneLiner,
  link,
  tag,
  date,
  published = true,
}) {
  const canOpen = Boolean(published) && Boolean(link);

  const statusLabel = canOpen ? date || "Published" : "Coming Soon";
  const statusClasses = canOpen
    ? "border-success/40 bg-success/10 text-success"
    : "border-default/20 bg-surface-2/50 text-secondary";

  const cardContent = (
    <>
      <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:justify-between">
        <span className="inline-flex max-w-full items-center gap-2 text-[11px] uppercase tracking-[0.12em] text-secondary sm:text-xs sm:tracking-[0.18em]">
          <Linkedin className="size-3.5 shrink-0 text-accent" />
          <span className="break-words leading-tight">{tag}</span>
        </span>
        <span
          className={cn(
            "rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.1em]",
            statusClasses,
          )}
        >
          {statusLabel}
        </span>
      </div>

      <h2
        className={cn(
          "mt-4 text-lg font-semibold leading-tight transition-colors sm:text-xl md:text-2xl",
          canOpen ? "text-primary group-hover:text-accent" : "text-primary/85",
        )}
      >
        {title}
      </h2>

      <p className="mt-3 text-[13px] leading-relaxed text-secondary sm:text-sm md:text-base">
        {oneLiner}
      </p>

      <div
        className={cn(
          "mt-5 inline-flex items-center gap-2 text-xs transition-colors sm:mt-6 sm:text-sm",
          canOpen ? "text-accent-2 group-hover:text-accent" : "text-secondary",
        )}
      >
        {canOpen ? "Read on LinkedIn" : "Not published yet"}
        {canOpen ? (
          <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        ) : (
          <Clock3 className="size-4" />
        )}
      </div>
    </>
  );

  if (!canOpen) {
    return (
      <Card
        className="group p-4 opacity-75 sm:p-6"
        aria-disabled="true"
        aria-label={`Blog post not yet published: ${title}`}
      >
        {cardContent}
      </Card>
    );
  }

  return (
    <Card
      as="a"
      interactive
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group p-4 focus-ring sm:p-6"
      aria-label={`Open blog post: ${title}`}
    >
      {cardContent}
    </Card>
  );
}

export default memo(BlogCard);
