import { ConfigsInputSchema } from "@/server/api/routers/generated_zod/input/ConfigsInput.schema";
import { createTRPCRouter } from "@/server/api/trpc";
import { procedure } from "@/server/api/trpc";
/* eslint-disable */
import { db } from ".";
import { checkMutate, checkRead } from "../helper";

export default function createRouter() {
  return createTRPCRouter({
    aggregate: procedure
      .input(ConfigsInputSchema.aggregate)
      .query(({ ctx, input }) =>
        checkRead(db(ctx).configs.aggregate(input as any)),
      ),

    createMany: procedure
      .input(ConfigsInputSchema.createMany.optional())
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).configs.createMany(input as any)),
      ),

    create: procedure
      .input(ConfigsInputSchema.create)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).configs.create(input as any)),
      ),

    deleteMany: procedure
      .input(ConfigsInputSchema.deleteMany.optional())
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).configs.deleteMany(input as any)),
      ),

    delete: procedure
      .input(ConfigsInputSchema.delete)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).configs.delete(input as any)),
      ),

    findFirst: procedure
      .input(ConfigsInputSchema.findFirst.optional())
      .query(({ ctx, input }) =>
        checkRead(db(ctx).configs.findFirst(input as any)),
      ),

    findFirstOrThrow: procedure
      .input(ConfigsInputSchema.findFirst.optional())
      .query(({ ctx, input }) =>
        checkRead(db(ctx).configs.findFirstOrThrow(input as any)),
      ),

    findMany: procedure
      .input(ConfigsInputSchema.findMany.optional())
      .query(({ ctx, input }) =>
        checkRead(db(ctx).configs.findMany(input as any)),
      ),

    findUnique: procedure
      .input(ConfigsInputSchema.findUnique)
      .query(({ ctx, input }) =>
        checkRead(db(ctx).configs.findUnique(input as any)),
      ),

    findUniqueOrThrow: procedure
      .input(ConfigsInputSchema.findUnique)
      .query(({ ctx, input }) =>
        checkRead(db(ctx).configs.findUniqueOrThrow(input as any)),
      ),

    groupBy: procedure
      .input(ConfigsInputSchema.groupBy)
      .query(({ ctx, input }) =>
        checkRead(db(ctx).configs.groupBy(input as any)),
      ),

    updateMany: procedure
      .input(ConfigsInputSchema.updateMany)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).configs.updateMany(input as any)),
      ),

    update: procedure
      .input(ConfigsInputSchema.update)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).configs.update(input as any)),
      ),

    upsert: procedure
      .input(ConfigsInputSchema.upsert)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).configs.upsert(input as any)),
      ),

    count: procedure
      .input(ConfigsInputSchema.count.optional())
      .query(({ ctx, input }) =>
        checkRead(db(ctx).configs.count(input as any)),
      ),
  });
}
