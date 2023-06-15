"use client";
import { loadProjects } from "@/lib/load";
import { use } from "react";
import ProjectCards from "../common/feature/ProjectCards";

const page = () => {
  const posts = use(loadProjects());

  return (
    <main id="main" className="container mx-auto">
      <ProjectCards posts={posts.data} />
    </main>
  );
};

export default page;
