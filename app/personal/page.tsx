import { PersonalPage } from "@/@types/schema";
import { loadPersonal } from "@/lib/load";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const page = async () => {
  const posts = await loadPersonal();

  return (
    <main className="container mx-auto">
      {posts.map((p: PersonalPage) => {
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
