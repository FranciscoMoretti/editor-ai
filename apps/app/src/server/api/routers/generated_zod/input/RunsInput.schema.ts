
/* eslint-disable */
import { z } from 'zod';
;
import type { Prisma } from '@zenstackhq/runtime/models';

;
import { RunsSelectObjectSchema } from '../objects/RunsSelect.schema';
;
import { RunsWhereUniqueInputObjectSchema } from '../objects/RunsWhereUniqueInput.schema';
import { RunsWhereInputObjectSchema } from '../objects/RunsWhereInput.schema';
import { RunsOrderByWithRelationInputObjectSchema } from '../objects/RunsOrderByWithRelationInput.schema';
import { RunsScalarFieldEnumSchema } from '../enums/RunsScalarFieldEnum.schema';
import { RunsCreateInputObjectSchema } from '../objects/RunsCreateInput.schema';
import { RunsUncheckedCreateInputObjectSchema } from '../objects/RunsUncheckedCreateInput.schema';
import { RunsCreateManyInputObjectSchema } from '../objects/RunsCreateManyInput.schema';
import { RunsUpdateInputObjectSchema } from '../objects/RunsUpdateInput.schema';
import { RunsUncheckedUpdateInputObjectSchema } from '../objects/RunsUncheckedUpdateInput.schema';
import { RunsUpdateManyMutationInputObjectSchema } from '../objects/RunsUpdateManyMutationInput.schema';
import { RunsUncheckedUpdateManyInputObjectSchema } from '../objects/RunsUncheckedUpdateManyInput.schema';
import { RunsCountAggregateInputObjectSchema } from '../objects/RunsCountAggregateInput.schema';
import { RunsMinAggregateInputObjectSchema } from '../objects/RunsMinAggregateInput.schema';
import { RunsMaxAggregateInputObjectSchema } from '../objects/RunsMaxAggregateInput.schema';
import { RunsOrderByWithAggregationInputObjectSchema } from '../objects/RunsOrderByWithAggregationInput.schema';
import { RunsScalarWhereWithAggregatesInputObjectSchema } from '../objects/RunsScalarWhereWithAggregatesInput.schema'

type RunsInputSchemaType = {
    findUnique: z.ZodType<Prisma.runsFindUniqueArgs>,
    findFirst: z.ZodType<Prisma.runsFindFirstArgs>,
    findMany: z.ZodType<Prisma.runsFindManyArgs>,
    create: z.ZodType<Prisma.runsCreateArgs>,
    createMany: z.ZodType<Prisma.runsCreateManyArgs>,
    delete: z.ZodType<Prisma.runsDeleteArgs>,
    deleteMany: z.ZodType<Prisma.runsDeleteManyArgs>,
    update: z.ZodType<Prisma.runsUpdateArgs>,
    updateMany: z.ZodType<Prisma.runsUpdateManyArgs>,
    upsert: z.ZodType<Prisma.runsUpsertArgs>,
    aggregate: z.ZodType<Prisma.RunsAggregateArgs>,
    groupBy: z.ZodType<Prisma.runsGroupByArgs>,
    count: z.ZodType<Prisma.runsCountArgs>
}

export const RunsInputSchema = {
    findUnique: z.object({
        select: z.lazy(() => RunsSelectObjectSchema.optional()), where: RunsWhereUniqueInputObjectSchema
    }).strict(), findFirst: z.object({
        select: z.lazy(() => RunsSelectObjectSchema.optional()), where: RunsWhereInputObjectSchema.optional(), orderBy: z.union([RunsOrderByWithRelationInputObjectSchema, RunsOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: RunsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.array(RunsScalarFieldEnumSchema).optional()
    }).strict(), findMany: z.object({
        select: z.lazy(() => RunsSelectObjectSchema.optional()), where: RunsWhereInputObjectSchema.optional(), orderBy: z.union([RunsOrderByWithRelationInputObjectSchema, RunsOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: RunsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.array(RunsScalarFieldEnumSchema).optional()
    }).strict(), create: z.object({
        select: z.lazy(() => RunsSelectObjectSchema.optional()), data: z.union([RunsCreateInputObjectSchema, RunsUncheckedCreateInputObjectSchema])
    }).strict(), createMany: z.object({
        data: z.union([RunsCreateManyInputObjectSchema, z.array(RunsCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional()
    }).strict(), 'delete': z.object({
        select: z.lazy(() => RunsSelectObjectSchema.optional()), where: RunsWhereUniqueInputObjectSchema
    }).strict(), deleteMany: z.object({
        where: RunsWhereInputObjectSchema.optional()
    }).strict(), update: z.object({
        select: z.lazy(() => RunsSelectObjectSchema.optional()), data: z.union([RunsUpdateInputObjectSchema, RunsUncheckedUpdateInputObjectSchema]), where: RunsWhereUniqueInputObjectSchema
    }).strict(), updateMany: z.object({
        data: z.union([RunsUpdateManyMutationInputObjectSchema, RunsUncheckedUpdateManyInputObjectSchema]), where: RunsWhereInputObjectSchema.optional()
    }).strict(), upsert: z.object({
        select: z.lazy(() => RunsSelectObjectSchema.optional()), where: RunsWhereUniqueInputObjectSchema, create: z.union([RunsCreateInputObjectSchema, RunsUncheckedCreateInputObjectSchema]), update: z.union([RunsUpdateInputObjectSchema, RunsUncheckedUpdateInputObjectSchema])
    }).strict(), aggregate: z.object({
        where: RunsWhereInputObjectSchema.optional(), orderBy: z.union([RunsOrderByWithRelationInputObjectSchema, RunsOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: RunsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([z.literal(true), RunsCountAggregateInputObjectSchema]).optional(), _min: RunsMinAggregateInputObjectSchema.optional(), _max: RunsMaxAggregateInputObjectSchema.optional()
    }).strict(), groupBy: z.object({
        where: RunsWhereInputObjectSchema.optional(), orderBy: z.union([RunsOrderByWithAggregationInputObjectSchema, RunsOrderByWithAggregationInputObjectSchema.array()]).optional(), having: RunsScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(RunsScalarFieldEnumSchema), _count: z.union([z.literal(true), RunsCountAggregateInputObjectSchema]).optional(), _min: RunsMinAggregateInputObjectSchema.optional(), _max: RunsMaxAggregateInputObjectSchema.optional()
    }).strict(), count: z.object({
        where: RunsWhereInputObjectSchema.optional(), orderBy: z.union([RunsOrderByWithRelationInputObjectSchema, RunsOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: RunsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.array(RunsScalarFieldEnumSchema).optional(), select: z.union([z.literal(true), RunsCountAggregateInputObjectSchema]).optional()
    }).strict(),
} as RunsInputSchemaType;
