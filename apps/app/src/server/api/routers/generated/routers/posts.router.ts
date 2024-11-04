/* eslint-disable */
import { db } from ".";
import { createTRPCRouter } from "@/server/api/trpc";
import { procedure } from "@/server/api/trpc";
import * as _Schema from '@/server/api/routers/generated_zod/input';
const $Schema: typeof _Schema = (_Schema as any).default ?? _Schema;
import { checkRead, checkMutate } from '../helper';

export default function createRouter() {
    return createTRPCRouter({

        aggregate: procedure.input($Schema.PostsInputSchema.aggregate).query(({ ctx, input }) => checkRead(db(ctx).posts.aggregate(input as any))),

        createMany: procedure.input($Schema.PostsInputSchema.createMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).posts.createMany(input as any))),

        create: procedure.input($Schema.PostsInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).posts.create(input as any))),

        deleteMany: procedure.input($Schema.PostsInputSchema.deleteMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).posts.deleteMany(input as any))),

        delete: procedure.input($Schema.PostsInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).posts.delete(input as any))),

        findFirst: procedure.input($Schema.PostsInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).posts.findFirst(input as any))),

        findFirstOrThrow: procedure.input($Schema.PostsInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).posts.findFirstOrThrow(input as any))),

        findMany: procedure.input($Schema.PostsInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).posts.findMany(input as any))),

        findUnique: procedure.input($Schema.PostsInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).posts.findUnique(input as any))),

        findUniqueOrThrow: procedure.input($Schema.PostsInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).posts.findUniqueOrThrow(input as any))),

        groupBy: procedure.input($Schema.PostsInputSchema.groupBy).query(({ ctx, input }) => checkRead(db(ctx).posts.groupBy(input as any))),

        updateMany: procedure.input($Schema.PostsInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).posts.updateMany(input as any))),

        update: procedure.input($Schema.PostsInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).posts.update(input as any))),

        upsert: procedure.input($Schema.PostsInputSchema.upsert).mutation(async ({ ctx, input }) => checkMutate(db(ctx).posts.upsert(input as any))),

        count: procedure.input($Schema.PostsInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).posts.count(input as any))),

    }
    );
}
