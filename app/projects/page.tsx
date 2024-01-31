import ProjectCards from "../common/hydration/ProjectCards";

const page = () => {
  return (
    <main className="container mx-auto">
      <ProjectCards posts={[]} />
    </main>
  );
};

export default page;
