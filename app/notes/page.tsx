import { MENU } from "@/lib/constants";
import { loadDevs } from "@/lib/load";
import DevCards from "../common/feature/DevCards";
import TechStackTags from "../common/feature/TechStackTags";
import Tags from "../common/layout/Tags";

const page = async () => {
  const posts = await loadDevs(MENU.NOTES);

  const techStacks = [
    ...new Set(
      posts
        .map((i) => i.techStack!)
        .flat()
        .map((i) => i.name)
    ),
  ].map((i) => {
    return {
      id: i,
      name: i,
    };
  });

  const tags = [
    ...new Set(
      posts
        .map((i) => i.tags!)
        .flat()
        .map((i) => i.name)
    ),
  ].map((i) => {
    return {
      id: i,
      name: i,
    };
  });

  return (
    <main className="container mx-auto">
      <p className="text-l my-2">Filtered by Tags</p>
      <Tags data={tags} />
      <p className="text-l my-2">Filtered by Tech Stack</p>
      <TechStackTags techStack={techStacks} />
      <DevCards posts={posts} category={MENU.NOTES} />
    </main>
  );
};

export default page;
