/* eslint-disable */
import type { AnyTRPCRouter as AnyRouter } from "@trpc/server";
import type { PrismaClient } from "@zenstackhq/runtime/models";
import { createTRPCRouter } from "@/server/api/trpc";
import createpostsRouter from "./posts.router";
import createusersRouter from "./users.router";
import createthreadsRouter from "./threads.router";
import createconfigsRouter from "./configs.router";
import createasssitantRouter from "./asssitant.router";
import createrunsRouter from "./runs.router";

export function db(ctx: any) {
    if (!ctx.prisma) {
        throw new Error('Missing "prisma" field in trpc context');
    }
    return ctx.prisma as PrismaClient;
}

export function createRouter() {
    return createTRPCRouter({
        posts: createpostsRouter(),
        users: createusersRouter(),
        threads: createthreadsRouter(),
        configs: createconfigsRouter(),
        asssitant: createasssitantRouter(),
        runs: createrunsRouter(),
    }
    );
}
