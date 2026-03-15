import BlogCard from "./BlogCard";

export default function BlogsPageLayout({ posts }) {
  const hasPosts = Array.isArray(posts) && posts.length > 0;

  return (
    <section className="mx-auto max-w-[1200px] px-4 pt-24 sm:pt-28 md:pt-32 pb-20 sm:pb-24">
      <div className="relative overflow-hidden rounded-3xl bg-surface/65 p-5 sm:p-8 md:p-10">
        <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-accent/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-56 w-56 rounded-full bg-accent-2/20 blur-3xl" />

        <div className="relative">
          <p className="text-[11px] uppercase tracking-[0.18em] text-accent/80 sm:text-xs sm:tracking-[0.3em]">
            LinkedIn Articles
          </p>
          <h1 className="mt-2 text-3xl font-bold text-accent sm:mt-3 sm:text-4xl md:text-6xl">
            Blogs
          </h1>
          <p className="mt-4 max-w-2xl text-sm text-secondary sm:mt-5 sm:text-base md:text-lg">
            Short technical posts and lessons from real projects, published on LinkedIn.
          </p>
        </div>
      </div>

      <div className="mt-8 sm:mt-10 grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2">
        {hasPosts ? (
          posts.map((post, index) => (
            <BlogCard key={`${post.title}-${index}`} {...post} />
          ))
        ) : (
          <div className="rounded-2xl border border-default/25 bg-surface/35 p-6 text-secondary">
            No blog posts added yet.
          </div>
        )}
      </div>
    </section>
  );
}
