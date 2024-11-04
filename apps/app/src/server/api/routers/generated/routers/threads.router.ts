/* eslint-disable */
import { db } from ".";
import { createTRPCRouter } from "@/server/api/trpc";
import { procedure } from "@/server/api/trpc";
import * as _Schema from '@/server/api/routers/generated_zod/input';
const $Schema: typeof _Schema = (_Schema as any).default ?? _Schema;
import { checkRead, checkMutate } from '../helper';

export default function createRouter() {
    return createTRPCRouter({

        aggregate: procedure.input($Schema.ThreadsInputSchema.aggregate).query(({ ctx, input }) => checkRead(db(ctx).threads.aggregate(input as any))),

        createMany: procedure.input($Schema.ThreadsInputSchema.createMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).threads.createMany(input as any))),

        create: procedure.input($Schema.ThreadsInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).threads.create(input as any))),

        deleteMany: procedure.input($Schema.ThreadsInputSchema.deleteMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).threads.deleteMany(input as any))),

        delete: procedure.input($Schema.ThreadsInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).threads.delete(input as any))),

        findFirst: procedure.input($Schema.ThreadsInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).threads.findFirst(input as any))),

        findFirstOrThrow: procedure.input($Schema.ThreadsInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).threads.findFirstOrThrow(input as any))),

        findMany: procedure.input($Schema.ThreadsInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).threads.findMany(input as any))),

        findUnique: procedure.input($Schema.ThreadsInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).threads.findUnique(input as any))),

        findUniqueOrThrow: procedure.input($Schema.ThreadsInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).threads.findUniqueOrThrow(input as any))),

        groupBy: procedure.input($Schema.ThreadsInputSchema.groupBy).query(({ ctx, input }) => checkRead(db(ctx).threads.groupBy(input as any))),

        updateMany: procedure.input($Schema.ThreadsInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).threads.updateMany(input as any))),

        update: procedure.input($Schema.ThreadsInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).threads.update(input as any))),

        upsert: procedure.input($Schema.ThreadsInputSchema.upsert).mutation(async ({ ctx, input }) => checkMutate(db(ctx).threads.upsert(input as any))),

        count: procedure.input($Schema.ThreadsInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).threads.count(input as any))),

    }
    );
}
