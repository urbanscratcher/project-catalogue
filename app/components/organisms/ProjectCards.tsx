import { ProjectData } from "@/@types/schema";
import { MENU } from "@/lib/constants";
import Link from "next/link";
import ProjectCard from "../molecules/ProjectCard";

interface ProjectCardsProps {
  posts: ProjectData[];
}

const ProjectCards = ({ posts }: ProjectCardsProps) => {
  return (
    <>
      <div className="mt-12 max-wlg mx-auto grid gap-6 lg:grids-cols-2 lg:grid-cols-2 lg:max-w-none">
        {posts.map((post) => (
          <Link
            key={post.id}
            href={`/${MENU.PROJECTS.toLowerCase()}/${post.slug}`}
          >
            <ProjectCard key={post.id} post={post} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default ProjectCards;
