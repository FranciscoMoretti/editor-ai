import { createTRPCRouter } from "@/server/api/trpc";
import { procedure } from "@/server/api/trpc";
import { checkMutate, checkRead } from "./generated/helper";
/* eslint-disable */
import { db } from "./generated/routers";
import { PostsInputSchema } from "./generated_zod/input/PostsInput.schema";

export default function createRouter() {
  return createTRPCRouter({
    aggregate: procedure
      .input(PostsInputSchema.aggregate)
      .query(({ ctx, input }) =>
        checkRead(db(ctx).posts.aggregate(input as any)),
      ),

    createMany: procedure
      .input(PostsInputSchema.createMany.optional())
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).posts.createMany(input as any)),
      ),

    create: procedure
      .input(PostsInputSchema.create)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).posts.create(input as any)),
      ),

    deleteMany: procedure
      .input(PostsInputSchema.deleteMany.optional())
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).posts.deleteMany(input as any)),
      ),

    delete: procedure
      .input(PostsInputSchema.delete)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).posts.delete(input as any)),
      ),

    findFirst: procedure
      .input(PostsInputSchema.findFirst.optional())
      .query(({ ctx, input }) =>
        checkRead(db(ctx).posts.findFirst(input as any)),
      ),

    findFirstOrThrow: procedure
      .input(PostsInputSchema.findFirst.optional())
      .query(({ ctx, input }) =>
        checkRead(db(ctx).posts.findFirstOrThrow(input as any)),
      ),

    findMany: procedure
      .input(PostsInputSchema.findMany.optional())
      .query(({ ctx, input }) =>
        checkRead(db(ctx).posts.findMany(input as any)),
      ),

    findUnique: procedure
      .input(PostsInputSchema.findUnique)
      .query(({ ctx, input }) =>
        checkRead(db(ctx).posts.findUnique(input as any)),
      ),

    findUniqueOrThrow: procedure
      .input(PostsInputSchema.findUnique)
      .query(({ ctx, input }) =>
        checkRead(db(ctx).posts.findUniqueOrThrow(input as any)),
      ),

    groupBy: procedure
      .input(PostsInputSchema.groupBy)
      .query(({ ctx, input }) =>
        checkRead(db(ctx).posts.groupBy(input as any)),
      ),

    updateMany: procedure
      .input(PostsInputSchema.updateMany)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).posts.updateMany(input as any)),
      ),

    update: procedure
      .input(PostsInputSchema.update)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).posts.update(input as any)),
      ),

    upsert: procedure
      .input(PostsInputSchema.upsert)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).posts.upsert(input as any)),
      ),

    count: procedure
      .input(PostsInputSchema.count.optional())
      .query(({ ctx, input }) => checkRead(db(ctx).posts.count(input as any))),
  });
}
