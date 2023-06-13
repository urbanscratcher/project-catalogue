import { loadProjects } from "@/lib/load";
import ProjectCards from "../common/feature/ProjectCards";
import RoleTags from "../common/feature/RoleTags";
import TechStackTags from "../common/feature/TechStackTags";

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
      <RoleTags roles={roles} />
      <p className="text-l my-2">Filtered by Tech Stack</p>
      <TechStackTags techStack={techStacks} />

      <ProjectCards posts={posts} />
    </main>
  );
};

export default page;
