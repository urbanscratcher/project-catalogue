import { DevPost } from "@/types/schema";
import * as dayjs from "dayjs";
import * as localizedFormat from "dayjs/plugin/localizedFormat";
import Image from "next/image";
import Link from "next/link";

type BlogCardProps = {
  post: DevPost;
};

dayjs.extend(localizedFormat);
dayjs.locale("ko");

const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <>
      <Link href={`/${post.category.name.toLowerCase()}/${post.slug}`}>
        <div className="transition duration-300 hover:scale-105">
          <div className="flex flex-col rounded-xl shadow-lg overflow-hidden">
            {/* image */}
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
            {/* text */}
            <div className="flex-1 bg-gray-50 pt-2 pb-6 px-4 flex flex-col justify-between">
              <div className="flex-1">
                {/* date */}
                <span className="block mt-2">
                  <h4 className="text-xs font-medium text-gray-600 font-mono">
                    {dayjs(post.date).format("LL")}
                  </h4>
                </span>
                {/* title */}
                <span className="block mt-2">
                  <h4 className="text-xl font-medium text-gray-900">
                    {post.title}
                  </h4>
                </span>
                {/* description */}
                <span className="block mt-2">
                  <h4 className="text-xs text-gray-600">{post.description}</h4>
                </span>
                {/* role */}
                {post?.role?.length > 0 ? (
                  <span className="block mt-2 space-x-4">
                    <span>Role</span>
                    {post?.role
                      ? post.role.map((role) => (
                          <span
                            key={role.id}
                            className="bg-green-300 text-green-800 px-2 py-1 text-xs rounded-lg"
                          >
                            #{role.name}
                          </span>
                        ))
                      : ""}
                  </span>
                ) : (
                  ""
                )}
                {/* techStack */}
                <span className="block mt-2 space-x-4">
                  <span>Tech Stack</span>
                  {post?.techStack
                    ? post.techStack.map((techStack) => (
                        <span
                          key={techStack.id}
                          className="bg-green-300 text-green-800 px-2 py-1 text-xs rounded-lg"
                        >
                          #{techStack.name}
                        </span>
                      ))
                    : ""}
                </span>
                {/* tags */}
                <span className="block mt-2 space-x-4">
                  <span>Tags</span>
                  {post?.tags
                    ? post.tags.map((tag) => (
                        <span
                          key={tag.id}
                          className="bg-green-300 text-green-800 px-2 py-1 text-xs rounded-lg"
                        >
                          #{tag.name}
                        </span>
                      ))
                    : ""}
                </span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default BlogCard;
