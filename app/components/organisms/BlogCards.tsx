import { DevPost } from "@/types/schema";
import { loadDevPosts } from "@/lib/getPosts";
import BlogCard from "../molecules/BlogCard";

type BlogCardsProps = {
  category: string;
};
const BlogCards = async ({ category }: BlogCardsProps) => {
  const posts = await loadDevPosts(category);
  return (
    <>
      <div className="mt-12 max-wlg mx-auto grid gap-6 lg:grids-cols-2 lg:grid-cols-2 lg:max-w-none">
        {posts.map((post: DevPost) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </>
  );
};

export default BlogCards;
