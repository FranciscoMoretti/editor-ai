
/* eslint-disable */
import { z } from 'zod';
;
import type { Prisma } from '@zenstackhq/runtime/models';

;
import { AsssitantSelectObjectSchema } from '../objects/AsssitantSelect.schema';
import { AsssitantIncludeObjectSchema } from '../objects/AsssitantInclude.schema';
import { AsssitantWhereUniqueInputObjectSchema } from '../objects/AsssitantWhereUniqueInput.schema';
import { AsssitantWhereInputObjectSchema } from '../objects/AsssitantWhereInput.schema';
import { AsssitantOrderByWithRelationInputObjectSchema } from '../objects/AsssitantOrderByWithRelationInput.schema';
import { AsssitantScalarFieldEnumSchema } from '../enums/AsssitantScalarFieldEnum.schema';
import { AsssitantCreateInputObjectSchema } from '../objects/AsssitantCreateInput.schema';
import { AsssitantUncheckedCreateInputObjectSchema } from '../objects/AsssitantUncheckedCreateInput.schema';
import { AsssitantCreateManyInputObjectSchema } from '../objects/AsssitantCreateManyInput.schema';
import { AsssitantUpdateInputObjectSchema } from '../objects/AsssitantUpdateInput.schema';
import { AsssitantUncheckedUpdateInputObjectSchema } from '../objects/AsssitantUncheckedUpdateInput.schema';
import { AsssitantUpdateManyMutationInputObjectSchema } from '../objects/AsssitantUpdateManyMutationInput.schema';
import { AsssitantUncheckedUpdateManyInputObjectSchema } from '../objects/AsssitantUncheckedUpdateManyInput.schema';
import { AsssitantCountAggregateInputObjectSchema } from '../objects/AsssitantCountAggregateInput.schema';
import { AsssitantMinAggregateInputObjectSchema } from '../objects/AsssitantMinAggregateInput.schema';
import { AsssitantMaxAggregateInputObjectSchema } from '../objects/AsssitantMaxAggregateInput.schema';
import { AsssitantAvgAggregateInputObjectSchema } from '../objects/AsssitantAvgAggregateInput.schema';
import { AsssitantSumAggregateInputObjectSchema } from '../objects/AsssitantSumAggregateInput.schema';
import { AsssitantOrderByWithAggregationInputObjectSchema } from '../objects/AsssitantOrderByWithAggregationInput.schema';
import { AsssitantScalarWhereWithAggregatesInputObjectSchema } from '../objects/AsssitantScalarWhereWithAggregatesInput.schema'

type AsssitantInputSchemaType = {
    findUnique: z.ZodType<Prisma.asssitantFindUniqueArgs>,
    findFirst: z.ZodType<Prisma.asssitantFindFirstArgs>,
    findMany: z.ZodType<Prisma.asssitantFindManyArgs>,
    create: z.ZodType<Prisma.asssitantCreateArgs>,
    createMany: z.ZodType<Prisma.asssitantCreateManyArgs>,
    delete: z.ZodType<Prisma.asssitantDeleteArgs>,
    deleteMany: z.ZodType<Prisma.asssitantDeleteManyArgs>,
    update: z.ZodType<Prisma.asssitantUpdateArgs>,
    updateMany: z.ZodType<Prisma.asssitantUpdateManyArgs>,
    upsert: z.ZodType<Prisma.asssitantUpsertArgs>,
    aggregate: z.ZodType<Prisma.AsssitantAggregateArgs>,
    groupBy: z.ZodType<Prisma.asssitantGroupByArgs>,
    count: z.ZodType<Prisma.asssitantCountArgs>
}

export const AsssitantInputSchema = {
    findUnique: z.object({
        select: z.lazy(() => AsssitantSelectObjectSchema.optional()), include: z.lazy(() => AsssitantIncludeObjectSchema.optional()), where: AsssitantWhereUniqueInputObjectSchema
    }).strict(), findFirst: z.object({
        select: z.lazy(() => AsssitantSelectObjectSchema.optional()), include: z.lazy(() => AsssitantIncludeObjectSchema.optional()), where: AsssitantWhereInputObjectSchema.optional(), orderBy: z.union([AsssitantOrderByWithRelationInputObjectSchema, AsssitantOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: AsssitantWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.array(AsssitantScalarFieldEnumSchema).optional()
    }).strict(), findMany: z.object({
        select: z.lazy(() => AsssitantSelectObjectSchema.optional()), include: z.lazy(() => AsssitantIncludeObjectSchema.optional()), where: AsssitantWhereInputObjectSchema.optional(), orderBy: z.union([AsssitantOrderByWithRelationInputObjectSchema, AsssitantOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: AsssitantWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.array(AsssitantScalarFieldEnumSchema).optional()
    }).strict(), create: z.object({
        select: z.lazy(() => AsssitantSelectObjectSchema.optional()), include: z.lazy(() => AsssitantIncludeObjectSchema.optional()), data: z.union([AsssitantCreateInputObjectSchema, AsssitantUncheckedCreateInputObjectSchema])
    }).strict(), createMany: z.object({
        data: z.union([AsssitantCreateManyInputObjectSchema, z.array(AsssitantCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional()
    }).strict(), 'delete': z.object({
        select: z.lazy(() => AsssitantSelectObjectSchema.optional()), include: z.lazy(() => AsssitantIncludeObjectSchema.optional()), where: AsssitantWhereUniqueInputObjectSchema
    }).strict(), deleteMany: z.object({
        where: AsssitantWhereInputObjectSchema.optional()
    }).strict(), update: z.object({
        select: z.lazy(() => AsssitantSelectObjectSchema.optional()), include: z.lazy(() => AsssitantIncludeObjectSchema.optional()), data: z.union([AsssitantUpdateInputObjectSchema, AsssitantUncheckedUpdateInputObjectSchema]), where: AsssitantWhereUniqueInputObjectSchema
    }).strict(), updateMany: z.object({
        data: z.union([AsssitantUpdateManyMutationInputObjectSchema, AsssitantUncheckedUpdateManyInputObjectSchema]), where: AsssitantWhereInputObjectSchema.optional()
    }).strict(), upsert: z.object({
        select: z.lazy(() => AsssitantSelectObjectSchema.optional()), include: z.lazy(() => AsssitantIncludeObjectSchema.optional()), where: AsssitantWhereUniqueInputObjectSchema, create: z.union([AsssitantCreateInputObjectSchema, AsssitantUncheckedCreateInputObjectSchema]), update: z.union([AsssitantUpdateInputObjectSchema, AsssitantUncheckedUpdateInputObjectSchema])
    }).strict(), aggregate: z.object({
        where: AsssitantWhereInputObjectSchema.optional(), orderBy: z.union([AsssitantOrderByWithRelationInputObjectSchema, AsssitantOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: AsssitantWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([z.literal(true), AsssitantCountAggregateInputObjectSchema]).optional(), _min: AsssitantMinAggregateInputObjectSchema.optional(), _max: AsssitantMaxAggregateInputObjectSchema.optional(), _avg: AsssitantAvgAggregateInputObjectSchema.optional(), _sum: AsssitantSumAggregateInputObjectSchema.optional()
    }).strict(), groupBy: z.object({
        where: AsssitantWhereInputObjectSchema.optional(), orderBy: z.union([AsssitantOrderByWithAggregationInputObjectSchema, AsssitantOrderByWithAggregationInputObjectSchema.array()]).optional(), having: AsssitantScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(AsssitantScalarFieldEnumSchema), _count: z.union([z.literal(true), AsssitantCountAggregateInputObjectSchema]).optional(), _min: AsssitantMinAggregateInputObjectSchema.optional(), _max: AsssitantMaxAggregateInputObjectSchema.optional(), _avg: AsssitantAvgAggregateInputObjectSchema.optional(), _sum: AsssitantSumAggregateInputObjectSchema.optional()
    }).strict(), count: z.object({
        where: AsssitantWhereInputObjectSchema.optional(), orderBy: z.union([AsssitantOrderByWithRelationInputObjectSchema, AsssitantOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: AsssitantWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.array(AsssitantScalarFieldEnumSchema).optional(), select: z.union([z.literal(true), AsssitantCountAggregateInputObjectSchema]).optional()
    }).strict(),
} as AsssitantInputSchemaType;
