import { ArrowUpRight, Clock3, Linkedin } from "lucide-react";

export default function BlogCard({
  title,
  oneLiner,
  link,
  tag,
  date,
  published = true,
}) {
  const canOpen = Boolean(published) && Boolean(link);
  const rootClasses = canOpen
    ? "group relative overflow-hidden rounded-2xl border border-default/20 bg-surface/35 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 hover:bg-accent/10 sm:p-6"
    : "group relative overflow-hidden rounded-2xl border border-default/15 bg-surface/25 p-4 transition-all duration-300 cursor-not-allowed select-none opacity-75 sm:p-6";

  const statusLabel = date || (canOpen ? "Published" : "Coming Soon");
  const statusClasses = canOpen
    ? "rounded-full border border-accent/35 bg-accent/10 px-2 py-1 text-[10px] uppercase tracking-[0.1em] text-accent/80"
    : "rounded-full border border-default/20 bg-surface/30 px-2 py-1 text-[10px] uppercase tracking-[0.1em] text-secondary";

  const cardContent = (
    <>
      <div className="flex flex-col items-start gap-2 text-xs text-secondary sm:flex-row sm:items-center sm:justify-between">
        <span className="inline-flex max-w-full items-center gap-2 text-[11px] uppercase tracking-[0.12em] text-secondary sm:text-xs sm:tracking-[0.18em]">
          <Linkedin className="size-3.5 shrink-0 text-accent" />
          <span className="leading-tight break-words">{tag}</span>
        </span>
        <span className={statusClasses}>
          {statusLabel}
        </span>
      </div>

      <h2
        className={`mt-4 text-lg sm:text-xl md:text-2xl leading-tight font-semibold transition-colors ${
          canOpen ? "text-primary group-hover:text-accent" : "text-primary/85"
        }`}
      >
        {title}
      </h2>

      <p className="mt-3 text-[13px] leading-relaxed text-secondary sm:text-sm md:text-base">
        {oneLiner}
      </p>

      <div
        className={`mt-5 sm:mt-6 inline-flex items-center gap-2 text-xs sm:text-sm transition-colors ${
          canOpen ? "text-accent-2 group-hover:text-accent" : "text-secondary"
        }`}
      >
        {canOpen ? "Read on LinkedIn" : "Not published yet"}
        {canOpen ? (
          <ArrowUpRight className="size-4" />
        ) : (
          <Clock3 className="size-4" />
        )}
      </div>
    </>
  );

  if (!canOpen) {
    return (
      <div
        className={rootClasses}
        aria-disabled="true"
        aria-label={`Blog post not yet published: ${title}`}
      >
        {cardContent}
      </div>
    );
  }

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={rootClasses}
      aria-label={`Open blog post: ${title}`}
    >
      {cardContent}
    </a>
  );
}
