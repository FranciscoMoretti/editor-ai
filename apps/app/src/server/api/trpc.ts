/**
 * YOU PROBABLY DON'T NEED TO EDIT THIS FILE, UNLESS:
 * 1. You want to modify request context (see Part 1).
 * 2. You want to create a new middleware or type of procedure (see Part 3).
 *
 * TL;DR - This is where all the tRPC server stuff is created and plugged in. The pieces you will
 * need to use are documented accordingly near the end.
 */
import { Prisma } from "@prisma/client";

import { TRPCError, initTRPC } from "@trpc/server";
import superjson from "superjson";
import { ZodError } from "zod";

import { getEnhancedPrisma } from "@/server/db/enhanced";
import { createClient } from "@v1/supabase/server";
import { isPrismaClientKnownRequestError } from "@zenstackhq/runtime";

/**
 * 1. CONTEXT
 *
 * This section defines the "contexts" that are available in the backend API.
 *
 * These allow you to access things when processing a request, like the database, the session, etc.
 *
 * This helper generates the "internals" for a tRPC context. The API handler and RSC clients each
 * wrap this and provides the required context.
 *
 * @see https://trpc.io/docs/server/context
 */
export const createTRPCContext = async (opts: { headers: Headers }) => {
  const supabase = createClient();
  const userResponse = await supabase.auth.getUser();
  const user = userResponse.data.user;
  return {
    user: user,
    prisma: await getEnhancedPrisma(user),
    ...opts,
  };
};

export type Context = Awaited<ReturnType<typeof createTRPCContext>>;

function makePrismaError(error: Error | undefined) {
  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    return {
      clientVersion: error.clientVersion,
      code: error.code,
      message: error.message,
    };
  } else if (error instanceof Prisma.PrismaClientUnknownRequestError) {
    return {
      clientVersion: error.clientVersion,
      message: error.message,
    };
  } else if (error instanceof Prisma.PrismaClientValidationError) {
    return {
      message: error.message,
    };
  }
  return undefined;
}

/**
 * 2. INITIALIZATION
 *
 * This is where the tRPC API is initialized, connecting the context and transformer. We also parse
 * ZodErrors so that you get typesafety on the frontend if your procedure fails due to validation
 * errors on the backend.
 */
const t = initTRPC.context<typeof createTRPCContext>().create({
  transformer: superjson,
  errorFormatter({ shape, error }) {
    return {
      ...shape,
      data: {
        ...shape.data,
        prismaError: makePrismaError(error.cause),
        zodError:
          error.cause instanceof ZodError ? error.cause.flatten() : null,
      },
    };
  },
});

/**
 * Create a server-side caller.
 *
 * @see https://trpc.io/docs/server/server-side-calls
 */
export const createCallerFactory = t.createCallerFactory;

/**
 * 3. ROUTER & PROCEDURE (THE IMPORTANT BIT)
 *
 * These are the pieces you use to build your tRPC API. You should import these a lot in the
 * "/src/server/api/routers" directory.
 */

/**
 * This is how you create new routers and sub-routers in your tRPC API.
 *
 * @see https://trpc.io/docs/router
 */
export const createTRPCRouter = t.router;

/**
 * Middleware for timing procedure execution and adding an artificial delay in development.
 *
 * You can remove this if you don't like it, but it can help catch unwanted waterfalls by simulating
 * network latency that would occur in production but not in local development.
 */
const timingMiddleware = t.middleware(async ({ next, path }) => {
  const start = Date.now();

  if (t._config.isDev) {
    // artificial delay in dev
    const waitMs = Math.floor(Math.random() * 400) + 100;
    await new Promise((resolve) => setTimeout(resolve, waitMs));
  }

  const result = await next();

  const end = Date.now();
  console.log(`[TRPC] ${path} took ${end - start}ms to execute`);

  return result;
});

/**
 * Public (unauthenticated) procedure
 *
 * This is the base piece you use to build new queries and mutations on your tRPC API. It does not
 * guarantee that a user querying is authorized, but you can still access user session data if they
 * are logged in.
 */
export const publicProcedure = t.procedure.use(timingMiddleware);

/**
 * Protected (authenticated) procedure
 *
 * If you want a query or mutation to ONLY be accessible to logged in users, use this. It verifies
 * the session is valid and guarantees `ctx.session.user` is not null.
 *
 * @see https://trpc.io/docs/procedures
 */
const protectedProcedure = t.procedure.use(({ ctx, next }) => {
  if (!ctx.user) {
    throw new TRPCError({ code: "UNAUTHORIZED" });
  }
  return next({
    ctx: {
      // infers the `session` as non-nullable
      user: ctx.user,
    },
  });
});

// middleware for wrapping access denied errors from enhanced Prisma
// to proper TRPC errors with 403 code
const errorWrappedProc = protectedProcedure.use(async ({ next }) => {
  const result = await next();
  if (
    !result.ok &&
    isPrismaClientKnownRequestError(result.error.cause) &&
    result.error.cause.code === "P2004" // access denied
  ) {
    return {
      ...result,
      error: new TRPCError({
        code: "FORBIDDEN",
        message: result.error.cause.message,
        cause: result.error.cause,
      }),
    };
  } else {
    return result;
  }
});

export const procedure = errorWrappedProc;
