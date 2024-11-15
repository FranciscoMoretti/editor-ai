import { createCallerFactory, createTRPCRouter } from "@/server/api/trpc";
import createasssitantRouter from "./routers/assistants.router";
import createconfigsRouter from "./routers/generated/routers/configs.router";
import createusersRouter from "./routers/generated/routers/users.router";
import createpostsRouter from "./routers/posts.router";
import createrunsRouter from "./routers/runs.router";
import createthreadsRouter from "./routers/threads.router";
/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */

export const appRouter = createTRPCRouter({
  posts: createpostsRouter(),
  users: createusersRouter(),
  threads: createthreadsRouter(),
  configs: createconfigsRouter(),
  assistants: createasssitantRouter(),
  runs: createrunsRouter(),
});

// export type definition of API
export type AppRouter = typeof appRouter;

/**
 * Create a server-side caller for the tRPC API.
 * @example
 * const trpc = createCaller(createContext);
 * const res = await trpc.post.all();
 *       ^? Post[]
 */
export const createCaller = createCallerFactory(appRouter);
