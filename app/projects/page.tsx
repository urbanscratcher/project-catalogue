import ProjectCards from "../common/hydration/ProjectCards";
import Providers from "../common/utils/Providers";

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
