import NotionService from "@/services/notion-service";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const page = async ({ params }: any) => {
  const { slug } = params;
  const getPost = async () => {
    const service = new NotionService();
    const post = await service.getSingleBlogPost(slug);
    if (!post) {
      throw "Error";
    }

    return post;
  };
  const post = await getPost();

  return (
    <>
      <main className="container mx-auto">
        <h1>Project</h1>
        <h2 className="text-center text-5xl font-bold">
          {slug.replace("-", " ")}
        </h2>
        <article className="prose mx-auto">
          <ReactMarkdown>{post.markdown.parent}</ReactMarkdown>
        </article>
      </main>
    </>
  );
};

export default page;