import { createTRPCRouter } from "@/server/api/trpc";
import { procedure } from "@/server/api/trpc";
import * as _Schema from "@zenstackhq/runtime/zod/input";
/* eslint-disable */
import { db } from "../../../db";
const $Schema: typeof _Schema = (_Schema as any).default ?? _Schema;
import { checkMutate, checkRead } from "../helper";

export default function createRouter() {
  return createTRPCRouter({
    aggregate: procedure
      .input($Schema.ConfigsInputSchema.aggregate)
      .query(({ ctx, input }) =>
        checkRead(db(ctx).configs.aggregate(input as any)),
      ),

    createMany: procedure
      .input($Schema.ConfigsInputSchema.createMany.optional())
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).configs.createMany(input as any)),
      ),

    create: procedure
      .input($Schema.ConfigsInputSchema.create)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).configs.create(input as any)),
      ),

    deleteMany: procedure
      .input($Schema.ConfigsInputSchema.deleteMany.optional())
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).configs.deleteMany(input as any)),
      ),

    delete: procedure
      .input($Schema.ConfigsInputSchema.delete)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).configs.delete(input as any)),
      ),

    findFirst: procedure
      .input($Schema.ConfigsInputSchema.findFirst.optional())
      .query(({ ctx, input }) =>
        checkRead(db(ctx).configs.findFirst(input as any)),
      ),

    findFirstOrThrow: procedure
      .input($Schema.ConfigsInputSchema.findFirst.optional())
      .query(({ ctx, input }) =>
        checkRead(db(ctx).configs.findFirstOrThrow(input as any)),
      ),

    findMany: procedure
      .input($Schema.ConfigsInputSchema.findMany.optional())
      .query(({ ctx, input }) =>
        checkRead(db(ctx).configs.findMany(input as any)),
      ),

    findUnique: procedure
      .input($Schema.ConfigsInputSchema.findUnique)
      .query(({ ctx, input }) =>
        checkRead(db(ctx).configs.findUnique(input as any)),
      ),

    findUniqueOrThrow: procedure
      .input($Schema.ConfigsInputSchema.findUnique)
      .query(({ ctx, input }) =>
        checkRead(db(ctx).configs.findUniqueOrThrow(input as any)),
      ),

    groupBy: procedure
      .input($Schema.ConfigsInputSchema.groupBy)
      .query(({ ctx, input }) =>
        checkRead(db(ctx).configs.groupBy(input as any)),
      ),

    updateMany: procedure
      .input($Schema.ConfigsInputSchema.updateMany)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).configs.updateMany(input as any)),
      ),

    update: procedure
      .input($Schema.ConfigsInputSchema.update)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).configs.update(input as any)),
      ),

    upsert: procedure
      .input($Schema.ConfigsInputSchema.upsert)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).configs.upsert(input as any)),
      ),

    count: procedure
      .input($Schema.ConfigsInputSchema.count.optional())
      .query(({ ctx, input }) =>
        checkRead(db(ctx).configs.count(input as any)),
      ),
  });
}
