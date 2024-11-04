/* eslint-disable */
import { db } from ".";
import { createTRPCRouter } from "@/server/api/trpc";
import { procedure } from "@/server/api/trpc";
import * as _Schema from '@/server/api/routers/generated_zod/input';
const $Schema: typeof _Schema = (_Schema as any).default ?? _Schema;
import { checkRead, checkMutate } from '../helper';

export default function createRouter() {
    return createTRPCRouter({

        aggregate: procedure.input($Schema.AsssitantInputSchema.aggregate).query(({ ctx, input }) => checkRead(db(ctx).asssitant.aggregate(input as any))),

        createMany: procedure.input($Schema.AsssitantInputSchema.createMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).asssitant.createMany(input as any))),

        create: procedure.input($Schema.AsssitantInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).asssitant.create(input as any))),

        deleteMany: procedure.input($Schema.AsssitantInputSchema.deleteMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).asssitant.deleteMany(input as any))),

        delete: procedure.input($Schema.AsssitantInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).asssitant.delete(input as any))),

        findFirst: procedure.input($Schema.AsssitantInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).asssitant.findFirst(input as any))),

        findFirstOrThrow: procedure.input($Schema.AsssitantInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).asssitant.findFirstOrThrow(input as any))),

        findMany: procedure.input($Schema.AsssitantInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).asssitant.findMany(input as any))),

        findUnique: procedure.input($Schema.AsssitantInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).asssitant.findUnique(input as any))),

        findUniqueOrThrow: procedure.input($Schema.AsssitantInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).asssitant.findUniqueOrThrow(input as any))),

        groupBy: procedure.input($Schema.AsssitantInputSchema.groupBy).query(({ ctx, input }) => checkRead(db(ctx).asssitant.groupBy(input as any))),

        updateMany: procedure.input($Schema.AsssitantInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).asssitant.updateMany(input as any))),

        update: procedure.input($Schema.AsssitantInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).asssitant.update(input as any))),

        upsert: procedure.input($Schema.AsssitantInputSchema.upsert).mutation(async ({ ctx, input }) => checkMutate(db(ctx).asssitant.upsert(input as any))),

        count: procedure.input($Schema.AsssitantInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).asssitant.count(input as any))),

    }
    );
}
