import { ThreadsInputSchema } from "@/server/api/routers/generated_zod/input/ThreadsInput.schema";
import { createTRPCRouter } from "@/server/api/trpc";
import { procedure } from "@/server/api/trpc";
import type { Prisma } from "@zenstackhq/runtime/models";
import { z } from "zod";
import { checkMutate, checkRead } from "./generated/helper";
/* eslint-disable */
import { db } from "./generated/routers";

const literalSchema = z.union([z.string(), z.number(), z.boolean()]);
const jsonSchema: z.ZodType<Prisma.InputJsonValue> = z.lazy(() =>
  z.union([
    literalSchema,
    z.array(jsonSchema.nullable()),
    z.record(jsonSchema.nullable()),
  ]),
);

export default function createRouter() {
  return createTRPCRouter({
    create: procedure
      .input(
        z.object({
          thread_id: z.string().optional(),
          metadata: jsonSchema.optional(),
          values: jsonSchema.optional(),
        }),
      )
      .mutation(async ({ ctx, input }) =>
        checkMutate(
          db(ctx).threads.create({
            data: {
              thread_id: input.thread_id,
              metadata: input.metadata ?? {},
              values: input.values,
            },
          }),
        ),
      ),

    deleteMany: procedure
      .input(ThreadsInputSchema.deleteMany.optional())
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).threads.deleteMany(input as any)),
      ),

    delete: procedure
      .input(ThreadsInputSchema.delete)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).threads.delete(input as any)),
      ),

    findFirst: procedure
      .input(ThreadsInputSchema.findFirst.optional())
      .query(({ ctx, input }) =>
        checkRead(db(ctx).threads.findFirst(input as any)),
      ),

    findFirstOrThrow: procedure
      .input(ThreadsInputSchema.findFirst.optional())
      .query(({ ctx, input }) =>
        checkRead(db(ctx).threads.findFirstOrThrow(input as any)),
      ),

    findMany: procedure
      .input(ThreadsInputSchema.findMany.optional())
      .query(({ ctx, input }) =>
        checkRead(db(ctx).threads.findMany(input as any)),
      ),

    findUnique: procedure
      .input(ThreadsInputSchema.findUnique)
      .query(({ ctx, input }) =>
        checkRead(db(ctx).threads.findUnique(input as any)),
      ),

    findUniqueOrThrow: procedure
      .input(ThreadsInputSchema.findUnique)
      .query(({ ctx, input }) =>
        checkRead(db(ctx).threads.findUniqueOrThrow(input as any)),
      ),

    groupBy: procedure
      .input(ThreadsInputSchema.groupBy)
      .query(({ ctx, input }) =>
        checkRead(db(ctx).threads.groupBy(input as any)),
      ),

    updateMany: procedure
      .input(ThreadsInputSchema.updateMany)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).threads.updateMany(input as any)),
      ),

    update: procedure
      .input(ThreadsInputSchema.update)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).threads.update(input as any)),
      ),

    upsert: procedure
      .input(ThreadsInputSchema.upsert)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).threads.upsert(input as any)),
      ),

    count: procedure
      .input(ThreadsInputSchema.count.optional())
      .query(({ ctx, input }) =>
        checkRead(db(ctx).threads.count(input as any)),
      ),
  });
}
