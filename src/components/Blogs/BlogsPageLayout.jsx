import BlogCard from "./BlogCard";

export default function BlogsPageLayout({ posts }) {
  const hasPosts = Array.isArray(posts) && posts.length > 0;

  return (
    <section className="mx-auto max-w-[1200px] px-4 pt-24 sm:pt-28 md:pt-32 pb-20 sm:pb-24">
      <div className="relative overflow-hidden rounded-3xl bg-black/35 p-5 sm:p-8 md:p-10">
        <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-cyan/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-56 w-56 rounded-full bg-orange/20 blur-3xl" />

        <div className="relative">
          <p className="text-[11px] sm:text-xs tracking-[0.18em] sm:tracking-[0.3em] uppercase text-cyan/80">
            LinkedIn Articles
          </p>
          <h1 className="mt-2 sm:mt-3 text-3xl sm:text-4xl md:text-6xl font-bold text-cyan">
            Blogs
          </h1>
          <p className="mt-4 sm:mt-5 max-w-2xl text-sm sm:text-base md:text-lg text-white/80">
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
          <div className="rounded-2xl border border-white/15 bg-white/[0.03] p-6 text-white/70">
            No blog posts added yet.
          </div>
        )}
      </div>
    </section>
  );
}
