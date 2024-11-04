/* eslint-disable */
import { db } from ".";
import { createTRPCRouter } from "@/server/api/trpc";
import { procedure } from "@/server/api/trpc";
import * as _Schema from '@/server/api/routers/generated_zod/input';
const $Schema: typeof _Schema = (_Schema as any).default ?? _Schema;
import { checkRead, checkMutate } from '../helper';

export default function createRouter() {
    return createTRPCRouter({

        aggregate: procedure.input($Schema.RunsInputSchema.aggregate).query(({ ctx, input }) => checkRead(db(ctx).runs.aggregate(input as any))),

        createMany: procedure.input($Schema.RunsInputSchema.createMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).runs.createMany(input as any))),

        create: procedure.input($Schema.RunsInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).runs.create(input as any))),

        deleteMany: procedure.input($Schema.RunsInputSchema.deleteMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).runs.deleteMany(input as any))),

        delete: procedure.input($Schema.RunsInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).runs.delete(input as any))),

        findFirst: procedure.input($Schema.RunsInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).runs.findFirst(input as any))),

        findFirstOrThrow: procedure.input($Schema.RunsInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).runs.findFirstOrThrow(input as any))),

        findMany: procedure.input($Schema.RunsInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).runs.findMany(input as any))),

        findUnique: procedure.input($Schema.RunsInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).runs.findUnique(input as any))),

        findUniqueOrThrow: procedure.input($Schema.RunsInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).runs.findUniqueOrThrow(input as any))),

        groupBy: procedure.input($Schema.RunsInputSchema.groupBy).query(({ ctx, input }) => checkRead(db(ctx).runs.groupBy(input as any))),

        updateMany: procedure.input($Schema.RunsInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).runs.updateMany(input as any))),

        update: procedure.input($Schema.RunsInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).runs.update(input as any))),

        upsert: procedure.input($Schema.RunsInputSchema.upsert).mutation(async ({ ctx, input }) => checkMutate(db(ctx).runs.upsert(input as any))),

        count: procedure.input($Schema.RunsInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).runs.count(input as any))),

    }
    );
}
