import { createTRPCRouter } from "@/server/api/trpc";
import { procedure } from "@/server/api/trpc";
import { CustomQuickAction, Reflections } from "@/types";
import type { PrismaClient } from "@zenstackhq/runtime/models";
import { z } from "zod";
import { db } from "../db";
import { checkMutate, checkRead } from "./generated/helper";
import { StoreKey, StoreValueSchema, parseStoreValue } from "./storeSchema";

const StoreLocationSchema = z.object({
  namespace: z.string(),
  key: StoreKey,
});

const StoreInputSchema = z
  .object({
    value: StoreValueSchema,
  })
  .merge(StoreLocationSchema);

export default function createRouter() {
  return createTRPCRouter({
    get: procedure.input(StoreLocationSchema).query(async ({ ctx, input }) => {
      const res = await checkRead(
        storeGet(db(ctx), input.namespace, input.key),
      );

      console.log("res", res);
      return res
        ? {
            ...res,
            value: parseStoreValue(
              res?.value as z.infer<typeof StoreValueSchema>,
              input.key,
            ),
          }
        : "NOT_FOUND";
    }),

    put: procedure
      .input(StoreInputSchema)
      .mutation(async ({ ctx, input }) =>
        checkMutate(storePut(db(ctx), input.namespace, input.key, input.value)),
      ),

    delete: procedure
      .input(StoreLocationSchema)
      .mutation(async ({ ctx, input }) =>
        checkMutate(storeDelete(db(ctx), input.namespace, input.key)),
      ),
  });
}

export async function storePut(
  prisma: PrismaClient,
  namespace: string,
  key: StoreKey,
  value: Record<string, any>,
) {
  await prisma.store.upsert({
    where: {
      namespace_key: { namespace, key },
    },
    update: { value },
    create: { namespace, key, value },
  });
}

async function storeGet(
  prisma: PrismaClient,
  namespace: string,
  key: StoreKey,
) {
  return await prisma.store.findUnique({
    where: {
      namespace_key: { namespace, key },
    },
  });
}

export async function storeDelete(
  prisma: PrismaClient,
  namespace: string,
  key: StoreKey,
) {
  await prisma.store.delete({ where: { namespace_key: { namespace, key } } });
}

export async function storeGetQuickActions(
  prisma: PrismaClient,
  namespace: string,
) {
  const res = await prisma.store.findUnique({
    where: { namespace_key: { namespace, key: StoreKey.Values.actions } },
  });
  return res ? z.record(CustomQuickAction).parse(res.value) : undefined;
}

export async function storeGetReflection(
  prisma: PrismaClient,
  namespace: string,
) {
  const res = await prisma.store.findUnique({
    where: { namespace_key: { namespace, key: StoreKey.Values.reflection } },
  });
  return res ? Reflections.parse(res.value) : undefined;
}
