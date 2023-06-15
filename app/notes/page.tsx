import { MENU } from "@/lib/constants";
import { loadDevs } from "@/lib/load";
import DevCards from "../common/feature/DevCards";

const page = async () => {
  const posts = await loadDevs(MENU.NOTES);

  return (
    <main className="container mx-auto">
      <DevCards posts={posts} category={MENU.NOTES} />
    </main>
  );
};

export default page;
