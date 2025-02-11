import type { Post } from "@repo/db/data";
import BlogList from "./Blog/List";

export function Main({ posts }: { posts: Post[] }) {
  return (
    <main>
      <BlogList posts={posts} />
    </main>
  );
}
