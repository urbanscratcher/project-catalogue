import { DevData } from "@/@types/schema";
import { MENU } from "@/lib/constants";
import Link from "next/link";
import DevCard from "../molecules/DevCard";

interface DevCardsProps {
  posts: DevData[];
  category: MENU;
}

const DevCards = ({ posts, category }: DevCardsProps) => {
  return (
    <>
      <div className="mt-12 max-wlg mx-auto grid gap-6 lg:grids-cols-2 lg:grid-cols-2 lg:max-w-none">
        {posts.map((post) => (
          <Link key={post.id} href={`/${category.toLowerCase()}/${post.slug}`}>
            <DevCard key={post.id} post={post} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default DevCards;
