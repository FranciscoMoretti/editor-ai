import { RunsInputSchema } from "@/server/api/routers/generated_zod/input/RunsInput.schema";
import { createTRPCRouter } from "@/server/api/trpc";
import { procedure } from "@/server/api/trpc";
/* eslint-disable */
import { db } from ".";
import { checkMutate, checkRead } from "../helper";

export default function createRouter() {
  return createTRPCRouter({
    aggregate: procedure
      .input(RunsInputSchema.aggregate)
      .query(({ ctx, input }) =>
        checkRead(db(ctx).runs.aggregate(input as any)),
      ),

    createMany: procedure
      .input(RunsInputSchema.createMany.optional())
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).runs.createMany(input as any)),
      ),

    create: procedure
      .input(RunsInputSchema.create)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).runs.create(input as any)),
      ),

    deleteMany: procedure
      .input(RunsInputSchema.deleteMany.optional())
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).runs.deleteMany(input as any)),
      ),

    delete: procedure
      .input(RunsInputSchema.delete)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).runs.delete(input as any)),
      ),

    findFirst: procedure
      .input(RunsInputSchema.findFirst.optional())
      .query(({ ctx, input }) =>
        checkRead(db(ctx).runs.findFirst(input as any)),
      ),

    findFirstOrThrow: procedure
      .input(RunsInputSchema.findFirst.optional())
      .query(({ ctx, input }) =>
        checkRead(db(ctx).runs.findFirstOrThrow(input as any)),
      ),

    findMany: procedure
      .input(RunsInputSchema.findMany.optional())
      .query(({ ctx, input }) =>
        checkRead(db(ctx).runs.findMany(input as any)),
      ),

    findUnique: procedure
      .input(RunsInputSchema.findUnique)
      .query(({ ctx, input }) =>
        checkRead(db(ctx).runs.findUnique(input as any)),
      ),

    findUniqueOrThrow: procedure
      .input(RunsInputSchema.findUnique)
      .query(({ ctx, input }) =>
        checkRead(db(ctx).runs.findUniqueOrThrow(input as any)),
      ),

    groupBy: procedure
      .input(RunsInputSchema.groupBy)
      .query(({ ctx, input }) => checkRead(db(ctx).runs.groupBy(input as any))),

    updateMany: procedure
      .input(RunsInputSchema.updateMany)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).runs.updateMany(input as any)),
      ),

    update: procedure
      .input(RunsInputSchema.update)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).runs.update(input as any)),
      ),

    upsert: procedure
      .input(RunsInputSchema.upsert)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).runs.upsert(input as any)),
      ),

    count: procedure
      .input(RunsInputSchema.count.optional())
      .query(({ ctx, input }) => checkRead(db(ctx).runs.count(input as any))),
  });
}
