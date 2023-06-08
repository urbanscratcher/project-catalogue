import { loadPersonalPosts } from "@/lib/getPosts";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const page = async () => {
  const posts = await loadPersonalPosts();

  return (
    <main className="container mx-auto">
      {posts.map((p) => {
        return (
          <>
            <section className="prose mx-auto">
              <h2>{p.post.title}</h2>
              <p>{p.post.description}</p>
              <article>
                <ReactMarkdown>{p.markdown}</ReactMarkdown>
              </article>
            </section>
          </>
        );
      })}
    </main>
  );
};

export default page;
