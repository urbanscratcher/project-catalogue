import { BlogPost } from "@/@types/schema";
import { loadPosts } from "@/lib/getPosts";
import BlogCard from "../BlogCard";

const BlogCards = async () => {
  const posts = await loadPosts();
  return (
    <>
      <div className="mt-12 max-wlg mx-auto grid gap-6 lg:grids-cols-2 lg:grid-cols-2 lg:max-w-none">
        {posts.map((post: BlogPost) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </>
  );
};

export default BlogCards;
