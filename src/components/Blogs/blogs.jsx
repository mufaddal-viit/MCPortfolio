import NavbarMain from "../navbar/NavbarMain";
import FooterMain from "../footer/FooterMain";
import { DockDemo } from "../dock";
import BlogsPageLayout from "./BlogsPageLayout";
import { BLOG_POSTS } from "./blogList";

export default function Blogs() {
  return (
    <main className="relative min-h-screen overflow-hidden font-body text-primary">
      <NavbarMain />
      <BlogsPageLayout posts={BLOG_POSTS} />
      <FooterMain />
      <DockDemo />
    </main>
  );
}
