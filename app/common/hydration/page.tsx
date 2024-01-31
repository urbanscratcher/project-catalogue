import { loadProjects } from "@/lib/load";
import { Hydrate, dehydrate } from "@tanstack/react-query";
import getQueryClient from "../utils/getQueryClient";
import ProjectCards from "./ProjectCards";

// fetch data on the server
// hydrate the state
// dehydrate the cache
// rehydrate it on the client

// create a Server Component that prefetches the query and passes the prefetched data to the client component

async function getProjects() {
  return loadProjects();
}

export default async function Hydation() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(["hydrate-projects"], getProjects);

  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      <ProjectCards posts={[]} />
    </Hydrate>
  );
}
