import { Metadata } from "next";
import ProjectCards from "./common/hydration/ProjectCards";

export const metadata: Metadata = {
  title: "The Catalogue",
  description: "Joun's dev portfolio",
};

function Home() {
  return (
    <main className="container mx-auto">
      <ProjectCards posts={[]} />
    </main>
  );
}

export default Home;
