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
    ? "group relative overflow-hidden rounded-2xl border border-white/15 bg-white/[0.03] p-4 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan/60 hover:bg-cyan/[0.08]"
    : "group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-4 sm:p-6 transition-all duration-300 cursor-not-allowed opacity-75 select-none";

  const statusLabel = date || (canOpen ? "Published" : "Coming Soon");
  const statusClasses = canOpen
    ? "rounded-full border border-cyan/35 bg-cyan/10 px-2 py-1 text-[10px] uppercase tracking-[0.1em] text-cyan/80"
    : "rounded-full border border-white/20 bg-white/5 px-2 py-1 text-[10px] uppercase tracking-[0.1em] text-white/70";

  const cardContent = (
    <>
      <div className="flex flex-col items-start gap-2 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
        <span className="inline-flex max-w-full items-center gap-2 text-[11px] uppercase tracking-[0.12em] text-white/70 sm:text-xs sm:tracking-[0.18em]">
          <Linkedin className="size-3.5 shrink-0 text-cyan" />
          <span className="leading-tight break-words">{tag}</span>
        </span>
        <span className={statusClasses}>
          {statusLabel}
        </span>
      </div>

      <h2
        className={`mt-4 text-lg sm:text-xl md:text-2xl leading-tight font-semibold transition-colors ${
          canOpen ? "text-white group-hover:text-cyan" : "text-white/85"
        }`}
      >
        {title}
      </h2>

      <p className="mt-3 text-[13px] sm:text-sm md:text-base leading-relaxed text-white/75">
        {oneLiner}
      </p>

      <div
        className={`mt-5 sm:mt-6 inline-flex items-center gap-2 text-xs sm:text-sm transition-colors ${
          canOpen ? "text-orange group-hover:text-cyan" : "text-white/60"
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
