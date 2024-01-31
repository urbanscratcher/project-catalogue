import { QueryClient } from "@tanstack/react-query";
// To prevent data from being shared across users and requests, while still ensuring that the QueryClient is only created once per req

// -> make a request-scoped singleton instance of the QueryClient

// this will make prefetched queries available to all components further down the component tree
// and allow us to fetch data within multiple Server Components and use <Hydrate> in multiple places.

const getQueryClient = () => new QueryClient();
export default getQueryClient;
