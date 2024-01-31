import ProjectCards from "../common/hydration/ProjectCards";
import Providers from "../common/utils/provider";

const page = () => {
  return (
    <main className="container mx-auto">
      <Providers>
        <ProjectCards posts={[]} />
      </Providers>
    </main>
  );
};

export default page;
