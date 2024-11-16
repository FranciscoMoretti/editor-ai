import {
  MutationCache,
  QueryClient,
  defaultShouldDehydrateQuery,
} from "@tanstack/react-query";
import SuperJSON from "superjson";

export const createQueryClient = () => {
  const queryClient = new QueryClient({
    mutationCache: new MutationCache({
      onSuccess: () => {
        queryClient.invalidateQueries();
      },
    }),
    defaultOptions: {
      queries: {
        // With SSR, we usually want to set some default staleTime
        // above 0 to avoid refetching immediately on the client
        staleTime: 30 * 1000,
      },
      dehydrate: {
        serializeData: SuperJSON.serialize,
        shouldDehydrateQuery: (query) =>
          defaultShouldDehydrateQuery(query) ||
          query.state.status === "pending",
      },
      hydrate: {
        deserializeData: SuperJSON.deserialize,
      },
    },
  });
  return queryClient;
};