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
      .input($Schema.UsersInputSchema.aggregate)
      .query(({ ctx, input }) =>
        checkRead(db(ctx).users.aggregate(input as any)),
      ),

    createMany: procedure
      .input($Schema.UsersInputSchema.createMany.optional())
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).users.createMany(input as any)),
      ),

    create: procedure
      .input($Schema.UsersInputSchema.create)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).users.create(input as any)),
      ),

    deleteMany: procedure
      .input($Schema.UsersInputSchema.deleteMany.optional())
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).users.deleteMany(input as any)),
      ),

    delete: procedure
      .input($Schema.UsersInputSchema.delete)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).users.delete(input as any)),
      ),

    findFirst: procedure
      .input($Schema.UsersInputSchema.findFirst.optional())
      .query(({ ctx, input }) =>
        checkRead(db(ctx).users.findFirst(input as any)),
      ),

    findFirstOrThrow: procedure
      .input($Schema.UsersInputSchema.findFirst.optional())
      .query(({ ctx, input }) =>
        checkRead(db(ctx).users.findFirstOrThrow(input as any)),
      ),

    findMany: procedure
      .input($Schema.UsersInputSchema.findMany.optional())
      .query(({ ctx, input }) =>
        checkRead(db(ctx).users.findMany(input as any)),
      ),

    findUnique: procedure
      .input($Schema.UsersInputSchema.findUnique)
      .query(({ ctx, input }) =>
        checkRead(db(ctx).users.findUnique(input as any)),
      ),

    findUniqueOrThrow: procedure
      .input($Schema.UsersInputSchema.findUnique)
      .query(({ ctx, input }) =>
        checkRead(db(ctx).users.findUniqueOrThrow(input as any)),
      ),

    groupBy: procedure
      .input($Schema.UsersInputSchema.groupBy)
      .query(({ ctx, input }) =>
        checkRead(db(ctx).users.groupBy(input as any)),
      ),

    updateMany: procedure
      .input($Schema.UsersInputSchema.updateMany)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).users.updateMany(input as any)),
      ),

    update: procedure
      .input($Schema.UsersInputSchema.update)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).users.update(input as any)),
      ),

    upsert: procedure
      .input($Schema.UsersInputSchema.upsert)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).users.upsert(input as any)),
      ),

    count: procedure
      .input($Schema.UsersInputSchema.count.optional())
      .query(({ ctx, input }) => checkRead(db(ctx).users.count(input as any))),
  });
}
