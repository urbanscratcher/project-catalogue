import { DevData, ProjectData } from "@/@types/schema";
import Image from "next/image";
import Card from "../atoms/Card";
import Tags from "./Tags";

type DevCardProps = {
  key?: string;
  post: DevData;
};

const DevCard = ({ post }: DevCardProps) => {
  const dateObj: Date = new Date(post.date);
  const date = dateObj.toLocaleDateString("ko");

  const tags = post?.tags;
  const techStacks = post?.techStack;

  return (
    <>
      <Card
        imageComp={
          <div className="flex-shrink-0">
            {post.cover !== "" && post.cover !== undefined ? (
              <Image
                className="h-64 w-full object-cover"
                src={post.cover}
                alt={"cover"}
                sizes="660px"
                width="0"
                height="0"
              />
            ) : (
              ""
            )}
          </div>
        }
        contentComp={
          <div className="flex-1 bg-gray-50 pt-2 pb-6 px-4 flex flex-col justify-between">
            <div className="flex flex-col gap-2">
              {/* date */}
              <span className="block">
                <h4 className="text-xs font-medium text-gray-600 font-mono">
                  {date}
                </h4>
              </span>
              {/* title */}
              <span className="block">
                <h4 className="text-xl font-medium text-gray-900">
                  {post.title}
                </h4>
              </span>
              {/* description */}
              <span className="block">
                <h4 className="text-xs text-gray-600">{post.description}</h4>
              </span>

              {/* techStack */}
              {techStacks !== undefined && techStacks.length > 0 ? (
                <div className="flex items-center">
                  <span className="mr-2">Tech Stack</span>
                  <Tags data={techStacks} />
                </div>
              ) : (
                ""
              )}

              {/* tags */}
              {tags !== undefined && tags?.length > 0 ? (
                <div className="flex items-center">
                  <span className="mr-2">Tags</span>
                  <Tags data={tags} includeSharp />
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        }
      />
    </>
  );
};

export default DevCard;
