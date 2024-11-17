import { createTRPCRouter } from "@/server/api/trpc";
import { procedure } from "@/server/api/trpc";
import * as _Schema from "@zenstackhq/runtime/zod/input";
import * as _SchemaModels from "@zenstackhq/runtime/zod/models";
import { z } from "zod";
import { checkMutate, checkRead } from "./generated/helper";
/* eslint-disable */
import { db } from "./generated/routers";

const AssistantUpdateModelSchema = _SchemaModels.AsssitantsUpdateSchema;
const AsssitantsInputSchema = _Schema.AsssitantsInputSchema;

export default function createRouter() {
  return createTRPCRouter({
    create: procedure
      .input(AsssitantsInputSchema.create)
      .mutation(async ({ ctx, input }) => {
        return await db(ctx).$transaction(async (tx) => {
          let config = undefined;
          if (input.data.config?.create) {
            config = await checkMutate(
              tx.configs.create({ data: input.data.config?.create }),
            );
          } else {
            config = await checkRead(
              tx.configs.findFirst({
                where: { config_id: input.data.config?.connect?.config_id },
              }),
            );
          }

          if (!config) {
            throw new Error("Failed to create config");
          }

          return checkMutate(
            tx.asssitants.create({
              data: {
                user_id: ctx.user.id,
                name: input.data.name,
                graph_id: input.data.graph_id,
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
      .input(
        AssistantUpdateModelSchema.omit({ assistant_id: true })
          .merge(
            z.object({
              assistant_id: z.string().uuid(),
            }),
          )
          .merge(z.object({ config: z.object({ configurable: z.any() }) })),
      )
      .mutation(async ({ ctx, input }) => {
        const { config, ...rest } = input;
        return await db(ctx).$transaction(async (tx) => {
          const res = await checkMutate(
            tx.asssitants.update({
              where: { assistant_id: input.assistant_id },
              data: rest,
            }),
          );
          const configRes = await checkMutate(
            tx.configs.update({
              where: { config_id: res?.config_id },
              data: config,
            }),
          );
          return res;
        });
      }),

    upsert: procedure
      .input(AsssitantsInputSchema.upsert)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).asssitants.upsert(input)),
      ),

    count: procedure
      .input(AsssitantsInputSchema.count.optional())
      .query(({ ctx, input }) =>
        checkRead(db(ctx).asssitants.count(input as any)),
      ),
  });
}
