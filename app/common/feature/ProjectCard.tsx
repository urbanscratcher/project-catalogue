import { ProjectData } from "@/@types/schema";
import Image from "next/image";
import Card from "../layout/Card";
import Tags from "../layout/Tags";

type ProjectCardProps = {
  key?: string;
  post: ProjectData;
};

const ProjectCard = ({ post }: ProjectCardProps) => {
  const dateObj: Date = new Date(post.date);
  const date = dateObj.toLocaleDateString("ko");

  const techStacks = post?.techStack;
  const roles = post?.role;

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

              {/* role */}
              {roles !== undefined && roles.length > 0 ? (
                <div className="flex items-center">
                  <span className="mr-2">Role</span>
                  <Tags data={roles} />
                </div>
              ) : (
                ""
              )}

              {/* techStack */}
              {techStacks !== undefined && techStacks.length > 0 ? (
                <div className="flex items-center">
                  <span className="mr-2">Tech Stack</span>
                  <Tags data={techStacks} />
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

export default ProjectCard;
