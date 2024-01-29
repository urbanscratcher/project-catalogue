import Head from "next/head";
import Providers from "./common/utils/provider";
import ProjectCards from "./common/hydration/ProjectCards";

const Home = () => {
  return (
    <>
      <main className="container mx-auto">
        <Head>
          <title>The Catalogue</title>
        </Head>
        <Providers>
          <ProjectCards posts={[]} />
        </Providers>
      </main>
    </>
  );
};

export default Home;
