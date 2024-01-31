"use client";

import { ProjectData } from "@/@types/schema";
import { MENU } from "@/lib/constants";
import { loadProjects } from "@/lib/load";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";

// When this component mounts, it can retrieve the dehydrated query cache if available but will refetch the query on the client if it has become stale since the time it was rendered on the server.

interface ProjectCardsProps {
  posts: ProjectData[];
}

const ProjectCards = ({ posts }: ProjectCardsProps) => {
  const { isLoading, isFetching, error, data } = useQuery({
    queryKey: ["hydrate-projects"],
    queryFn: () => loadProjects(),
  });

  return (
    <>
      <div className="mt-12 max-wlg mx-auto grid gap-6 lg:grids-cols-2 lg:grid-cols-2 lg:max-w-none">
        {error ? (
          <p>There is an error</p>
        ) : isLoading || isFetching ? (
          <p>is loading . . . </p>
        ) : data ? (
          <>
            <ol className="flex flex-col gap-5">
              {data.data.map((post, i) => (
                <li key={post.id}>
                  <div className="flex flex-col">
                    <p className="font-bold leading-6 tracking-wide">
                      {String.fromCharCode(64 + i + 1)}.{" "}
                      {post.title.toUpperCase()}
                      <span className="text-gray-700 font-normal tracking-normal">
                        &nbsp;&nbsp;{post.description}
                      </span>
                    </p>
                    <div className="border-t border-gray-800 p-1 my-1  text-xs flex justify-between">
                      <ul className="flex gap-3">
                        {post.techStack.map((el) => (
                          <li key={el.id}>{el.name}</li>
                        ))}
                      </ul>
                      <ul className=" flex gap-2">
                        {post.role.map((el) => (
                          <li className="font-bold" key={el.id}>
                            {el.name}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </li>
              ))}
            </ol>

            {/* list display */}
            {data.data.map((post, i) => (
              <Link
                key={post.id}
                href={`/${MENU.PROJECTS.toLowerCase()}/${post.slug}`}
              >
                <p className="font-bold text-2xl">
                  {String.fromCharCode(64 + i + 1)}.
                </p>
                {post?.cover && (
                  <Image
                    src={post.cover.url}
                    alt={post.title}
                    width={200}
                    height={0}
                  />
                )}
              </Link>
            ))}
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default ProjectCards;
