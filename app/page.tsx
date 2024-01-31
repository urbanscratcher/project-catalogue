import ProjectCards from "./common/hydration/ProjectCards";
import { Metadata } from "next";
import Providers from "./common/utils/Providers";

export const metadata: Metadata = {
  title: "The Catalogue",
  description: "Joun's dev portfolio",
};

function Home() {
  return (
    <Providers>
      <main className="container mx-auto">
        <ProjectCards posts={[]} />
      </main>
    </Providers>
  );
}

export default Home;
