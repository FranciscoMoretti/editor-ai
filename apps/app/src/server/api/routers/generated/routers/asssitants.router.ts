/* eslint-disable */
import { db } from ".";
import { createTRPCRouter } from "@/server/api/trpc";
import { procedure } from "@/server/api/trpc";
import * as _Schema from "@/server/api/routers/generated_zod/input";
const $Schema: typeof _Schema = (_Schema as any).default ?? _Schema;
import { checkRead, checkMutate } from "../helper";

export default function createRouter() {
  return createTRPCRouter({
    aggregate: procedure
      .input($Schema.AsssitantsInputSchema.aggregate)
      .query(({ ctx, input }) =>
        checkRead(db(ctx).asssitants.aggregate(input as any)),
      ),

    createMany: procedure
      .input($Schema.AsssitantsInputSchema.createMany.optional())
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).asssitants.createMany(input as any)),
      ),

    create: procedure
      .input($Schema.AsssitantsInputSchema.create)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).asssitants.create(input as any)),
      ),

    deleteMany: procedure
      .input($Schema.AsssitantsInputSchema.deleteMany.optional())
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).asssitants.deleteMany(input as any)),
      ),

    delete: procedure
      .input($Schema.AsssitantsInputSchema.delete)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).asssitants.delete(input as any)),
      ),

    findFirst: procedure
      .input($Schema.AsssitantsInputSchema.findFirst.optional())
      .query(({ ctx, input }) =>
        checkRead(db(ctx).asssitants.findFirst(input as any)),
      ),

    findFirstOrThrow: procedure
      .input($Schema.AsssitantsInputSchema.findFirst.optional())
      .query(({ ctx, input }) =>
        checkRead(db(ctx).asssitants.findFirstOrThrow(input as any)),
      ),

    findMany: procedure
      .input($Schema.AsssitantsInputSchema.findMany.optional())
      .query(({ ctx, input }) =>
        checkRead(db(ctx).asssitants.findMany(input as any)),
      ),

    findUnique: procedure
      .input($Schema.AsssitantsInputSchema.findUnique)
      .query(({ ctx, input }) =>
        checkRead(db(ctx).asssitants.findUnique(input as any)),
      ),

    findUniqueOrThrow: procedure
      .input($Schema.AsssitantsInputSchema.findUnique)
      .query(({ ctx, input }) =>
        checkRead(db(ctx).asssitants.findUniqueOrThrow(input as any)),
      ),

    groupBy: procedure
      .input($Schema.AsssitantsInputSchema.groupBy)
      .query(({ ctx, input }) =>
        checkRead(db(ctx).asssitants.groupBy(input as any)),
      ),

    updateMany: procedure
      .input($Schema.AsssitantsInputSchema.updateMany)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).asssitants.updateMany(input as any)),
      ),

    update: procedure
      .input($Schema.AsssitantsInputSchema.update)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).asssitants.update(input as any)),
      ),

    upsert: procedure
      .input($Schema.AsssitantsInputSchema.upsert)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).asssitants.upsert(input as any)),
      ),

    count: procedure
      .input($Schema.AsssitantsInputSchema.count.optional())
      .query(({ ctx, input }) =>
        checkRead(db(ctx).asssitants.count(input as any)),
      ),
  });
}
