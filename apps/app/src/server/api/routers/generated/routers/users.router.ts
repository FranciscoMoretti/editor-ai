import { UsersInputSchema } from "@/server/api/routers/generated_zod/input/UsersInput.schema";
import { createTRPCRouter } from "@/server/api/trpc";
import { procedure } from "@/server/api/trpc";
/* eslint-disable */
import { db } from ".";
import { checkMutate, checkRead } from "../helper";

export default function createRouter() {
  return createTRPCRouter({
    aggregate: procedure
      .input(UsersInputSchema.aggregate)
      .query(({ ctx, input }) =>
        checkRead(db(ctx).users.aggregate(input as any)),
      ),

    createMany: procedure
      .input(UsersInputSchema.createMany.optional())
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).users.createMany(input as any)),
      ),

    create: procedure
      .input(UsersInputSchema.create)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).users.create(input as any)),
      ),

    deleteMany: procedure
      .input(UsersInputSchema.deleteMany.optional())
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).users.deleteMany(input as any)),
      ),

    delete: procedure
      .input(UsersInputSchema.delete)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).users.delete(input as any)),
      ),

    findFirst: procedure
      .input(UsersInputSchema.findFirst.optional())
      .query(({ ctx, input }) =>
        checkRead(db(ctx).users.findFirst(input as any)),
      ),

    findFirstOrThrow: procedure
      .input(UsersInputSchema.findFirst.optional())
      .query(({ ctx, input }) =>
        checkRead(db(ctx).users.findFirstOrThrow(input as any)),
      ),

    findMany: procedure
      .input(UsersInputSchema.findMany.optional())
      .query(({ ctx, input }) =>
        checkRead(db(ctx).users.findMany(input as any)),
      ),

    findUnique: procedure
      .input(UsersInputSchema.findUnique)
      .query(({ ctx, input }) =>
        checkRead(db(ctx).users.findUnique(input as any)),
      ),

    findUniqueOrThrow: procedure
      .input(UsersInputSchema.findUnique)
      .query(({ ctx, input }) =>
        checkRead(db(ctx).users.findUniqueOrThrow(input as any)),
      ),

    groupBy: procedure
      .input(UsersInputSchema.groupBy)
      .query(({ ctx, input }) =>
        checkRead(db(ctx).users.groupBy(input as any)),
      ),

    updateMany: procedure
      .input(UsersInputSchema.updateMany)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).users.updateMany(input as any)),
      ),

    update: procedure
      .input(UsersInputSchema.update)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).users.update(input as any)),
      ),

    upsert: procedure
      .input(UsersInputSchema.upsert)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).users.upsert(input as any)),
      ),

    count: procedure
      .input(UsersInputSchema.count.optional())
      .query(({ ctx, input }) => checkRead(db(ctx).users.count(input as any))),
  });
}
