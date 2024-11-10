import { AsssitantsInputSchema } from "@/server/api/routers/generated_zod/input/AsssitantsInput.schema";
import { createTRPCRouter } from "@/server/api/trpc";
import { procedure } from "@/server/api/trpc";
import { z } from "zod";
import { checkMutate, checkRead } from "./generated/helper";
/* eslint-disable */
import { db } from "./generated/routers";

export default function createRouter() {
  return createTRPCRouter({
    create: procedure
      .input(
        z.object({
          graph_id: z.string(),
          name: z.string().optional(),
        }),
      )
      .mutation(async ({ ctx, input }) => {
        return await db(ctx).$transaction(async (tx) => {
          const config = await checkMutate(
            tx.configs.create({
              data: {
                configurable: {},
                recursion_limit: 10,
              },
            }),
          );

          if (!config) {
            throw new Error("Failed to create config");
          }

          return checkMutate(
            tx.asssitants.create({
              data: {
                user_id: ctx.user.id,
                name: input.name,
                graph_id: input.graph_id,
                config_id: config.config_id,
              },
            }),
          );
        });
      }),

    deleteMany: procedure
      .input(AsssitantsInputSchema.deleteMany.optional())
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).asssitants.deleteMany(input as any)),
      ),

    delete: procedure
      .input(AsssitantsInputSchema.delete)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).asssitants.delete(input as any)),
      ),

    findFirst: procedure
      .input(AsssitantsInputSchema.findFirst.optional())
      .query(({ ctx, input }) =>
        checkRead(db(ctx).asssitants.findFirst(input as any)),
      ),

    findFirstOrThrow: procedure
      .input(AsssitantsInputSchema.findFirst.optional())
      .query(({ ctx, input }) =>
        checkRead(db(ctx).asssitants.findFirstOrThrow(input as any)),
      ),

    findMany: procedure
      .input(AsssitantsInputSchema.findMany.optional())
      .query(({ ctx, input }) =>
        checkRead(db(ctx).asssitants.findMany(input as any)),
      ),

    findUnique: procedure
      .input(AsssitantsInputSchema.findUnique)
      .query(({ ctx, input }) =>
        checkRead(db(ctx).asssitants.findUnique(input as any)),
      ),

    findUniqueOrThrow: procedure
      .input(AsssitantsInputSchema.findUnique)
      .query(({ ctx, input }) =>
        checkRead(db(ctx).asssitants.findUniqueOrThrow(input as any)),
      ),

    groupBy: procedure
      .input(AsssitantsInputSchema.groupBy)
      .query(({ ctx, input }) =>
        checkRead(db(ctx).asssitants.groupBy(input as any)),
      ),

    updateMany: procedure
      .input(AsssitantsInputSchema.updateMany)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).asssitants.updateMany(input as any)),
      ),

    update: procedure
      .input(AsssitantsInputSchema.update)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).asssitants.update(input as any)),
      ),

    upsert: procedure
      .input(AsssitantsInputSchema.upsert)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).asssitants.upsert(input as any)),
      ),

    count: procedure
      .input(AsssitantsInputSchema.count.optional())
      .query(({ ctx, input }) =>
        checkRead(db(ctx).asssitants.count(input as any)),
      ),
  });
}
