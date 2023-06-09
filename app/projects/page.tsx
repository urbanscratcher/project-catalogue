import { loadProjects } from "@/lib/load";
import Tags from "../components/molecules/Tags";
import ProjectCards from "../components/organisms/ProjectCards";

const page = async () => {
  const posts = await loadProjects();

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

  const roles = ["Frontend", "Backend", "Design"].map((i) => ({
    id: i,
    name: i,
  }));

  return (
    <main className="container mx-auto">
      <p className="text-l my-2">Filtered by Role</p>
      <Tags data={roles} />
      <p className="text-l my-2">Filtered by Tech Stack</p>
      <Tags data={techStacks} />
      <ProjectCards posts={posts} />
    </main>
  );
};

export default page;
