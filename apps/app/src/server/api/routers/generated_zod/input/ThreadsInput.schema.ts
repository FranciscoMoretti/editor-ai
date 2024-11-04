
/* eslint-disable */
import { z } from 'zod';
;
import type { Prisma } from '@zenstackhq/runtime/models';

;
import { ThreadsSelectObjectSchema } from '../objects/ThreadsSelect.schema';
;
import { ThreadsWhereUniqueInputObjectSchema } from '../objects/ThreadsWhereUniqueInput.schema';
import { ThreadsWhereInputObjectSchema } from '../objects/ThreadsWhereInput.schema';
import { ThreadsOrderByWithRelationInputObjectSchema } from '../objects/ThreadsOrderByWithRelationInput.schema';
import { ThreadsScalarFieldEnumSchema } from '../enums/ThreadsScalarFieldEnum.schema';
import { ThreadsCreateInputObjectSchema } from '../objects/ThreadsCreateInput.schema';
import { ThreadsUncheckedCreateInputObjectSchema } from '../objects/ThreadsUncheckedCreateInput.schema';
import { ThreadsCreateManyInputObjectSchema } from '../objects/ThreadsCreateManyInput.schema';
import { ThreadsUpdateInputObjectSchema } from '../objects/ThreadsUpdateInput.schema';
import { ThreadsUncheckedUpdateInputObjectSchema } from '../objects/ThreadsUncheckedUpdateInput.schema';
import { ThreadsUpdateManyMutationInputObjectSchema } from '../objects/ThreadsUpdateManyMutationInput.schema';
import { ThreadsUncheckedUpdateManyInputObjectSchema } from '../objects/ThreadsUncheckedUpdateManyInput.schema';
import { ThreadsCountAggregateInputObjectSchema } from '../objects/ThreadsCountAggregateInput.schema';
import { ThreadsMinAggregateInputObjectSchema } from '../objects/ThreadsMinAggregateInput.schema';
import { ThreadsMaxAggregateInputObjectSchema } from '../objects/ThreadsMaxAggregateInput.schema';
import { ThreadsOrderByWithAggregationInputObjectSchema } from '../objects/ThreadsOrderByWithAggregationInput.schema';
import { ThreadsScalarWhereWithAggregatesInputObjectSchema } from '../objects/ThreadsScalarWhereWithAggregatesInput.schema'

type ThreadsInputSchemaType = {
    findUnique: z.ZodType<Prisma.threadsFindUniqueArgs>,
    findFirst: z.ZodType<Prisma.threadsFindFirstArgs>,
    findMany: z.ZodType<Prisma.threadsFindManyArgs>,
    create: z.ZodType<Prisma.threadsCreateArgs>,
    createMany: z.ZodType<Prisma.threadsCreateManyArgs>,
    delete: z.ZodType<Prisma.threadsDeleteArgs>,
    deleteMany: z.ZodType<Prisma.threadsDeleteManyArgs>,
    update: z.ZodType<Prisma.threadsUpdateArgs>,
    updateMany: z.ZodType<Prisma.threadsUpdateManyArgs>,
    upsert: z.ZodType<Prisma.threadsUpsertArgs>,
    aggregate: z.ZodType<Prisma.ThreadsAggregateArgs>,
    groupBy: z.ZodType<Prisma.threadsGroupByArgs>,
    count: z.ZodType<Prisma.threadsCountArgs>
}

export const ThreadsInputSchema = {
    findUnique: z.object({
        select: z.lazy(() => ThreadsSelectObjectSchema.optional()), where: ThreadsWhereUniqueInputObjectSchema
    }).strict(), findFirst: z.object({
        select: z.lazy(() => ThreadsSelectObjectSchema.optional()), where: ThreadsWhereInputObjectSchema.optional(), orderBy: z.union([ThreadsOrderByWithRelationInputObjectSchema, ThreadsOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: ThreadsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.array(ThreadsScalarFieldEnumSchema).optional()
    }).strict(), findMany: z.object({
        select: z.lazy(() => ThreadsSelectObjectSchema.optional()), where: ThreadsWhereInputObjectSchema.optional(), orderBy: z.union([ThreadsOrderByWithRelationInputObjectSchema, ThreadsOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: ThreadsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.array(ThreadsScalarFieldEnumSchema).optional()
    }).strict(), create: z.object({
        select: z.lazy(() => ThreadsSelectObjectSchema.optional()), data: z.union([ThreadsCreateInputObjectSchema, ThreadsUncheckedCreateInputObjectSchema])
    }).strict(), createMany: z.object({
        data: z.union([ThreadsCreateManyInputObjectSchema, z.array(ThreadsCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional()
    }).strict(), 'delete': z.object({
        select: z.lazy(() => ThreadsSelectObjectSchema.optional()), where: ThreadsWhereUniqueInputObjectSchema
    }).strict(), deleteMany: z.object({
        where: ThreadsWhereInputObjectSchema.optional()
    }).strict(), update: z.object({
        select: z.lazy(() => ThreadsSelectObjectSchema.optional()), data: z.union([ThreadsUpdateInputObjectSchema, ThreadsUncheckedUpdateInputObjectSchema]), where: ThreadsWhereUniqueInputObjectSchema
    }).strict(), updateMany: z.object({
        data: z.union([ThreadsUpdateManyMutationInputObjectSchema, ThreadsUncheckedUpdateManyInputObjectSchema]), where: ThreadsWhereInputObjectSchema.optional()
    }).strict(), upsert: z.object({
        select: z.lazy(() => ThreadsSelectObjectSchema.optional()), where: ThreadsWhereUniqueInputObjectSchema, create: z.union([ThreadsCreateInputObjectSchema, ThreadsUncheckedCreateInputObjectSchema]), update: z.union([ThreadsUpdateInputObjectSchema, ThreadsUncheckedUpdateInputObjectSchema])
    }).strict(), aggregate: z.object({
        where: ThreadsWhereInputObjectSchema.optional(), orderBy: z.union([ThreadsOrderByWithRelationInputObjectSchema, ThreadsOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: ThreadsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([z.literal(true), ThreadsCountAggregateInputObjectSchema]).optional(), _min: ThreadsMinAggregateInputObjectSchema.optional(), _max: ThreadsMaxAggregateInputObjectSchema.optional()
    }).strict(), groupBy: z.object({
        where: ThreadsWhereInputObjectSchema.optional(), orderBy: z.union([ThreadsOrderByWithAggregationInputObjectSchema, ThreadsOrderByWithAggregationInputObjectSchema.array()]).optional(), having: ThreadsScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(ThreadsScalarFieldEnumSchema), _count: z.union([z.literal(true), ThreadsCountAggregateInputObjectSchema]).optional(), _min: ThreadsMinAggregateInputObjectSchema.optional(), _max: ThreadsMaxAggregateInputObjectSchema.optional()
    }).strict(), count: z.object({
        where: ThreadsWhereInputObjectSchema.optional(), orderBy: z.union([ThreadsOrderByWithRelationInputObjectSchema, ThreadsOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: ThreadsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.array(ThreadsScalarFieldEnumSchema).optional(), select: z.union([z.literal(true), ThreadsCountAggregateInputObjectSchema]).optional()
    }).strict(),
} as ThreadsInputSchemaType;
