
/* eslint-disable */
import { z } from 'zod';
;
import type { Prisma } from '@zenstackhq/runtime/models';

;
import { AsssitantsSelectObjectSchema } from '../objects/AsssitantsSelect.schema';
import { AsssitantsIncludeObjectSchema } from '../objects/AsssitantsInclude.schema';
import { AsssitantsWhereUniqueInputObjectSchema } from '../objects/AsssitantsWhereUniqueInput.schema';
import { AsssitantsWhereInputObjectSchema } from '../objects/AsssitantsWhereInput.schema';
import { AsssitantsOrderByWithRelationInputObjectSchema } from '../objects/AsssitantsOrderByWithRelationInput.schema';
import { AsssitantsScalarFieldEnumSchema } from '../enums/AsssitantsScalarFieldEnum.schema';
import { AsssitantsCreateInputObjectSchema } from '../objects/AsssitantsCreateInput.schema';
import { AsssitantsUncheckedCreateInputObjectSchema } from '../objects/AsssitantsUncheckedCreateInput.schema';
import { AsssitantsCreateManyInputObjectSchema } from '../objects/AsssitantsCreateManyInput.schema';
import { AsssitantsUpdateInputObjectSchema } from '../objects/AsssitantsUpdateInput.schema';
import { AsssitantsUncheckedUpdateInputObjectSchema } from '../objects/AsssitantsUncheckedUpdateInput.schema';
import { AsssitantsUpdateManyMutationInputObjectSchema } from '../objects/AsssitantsUpdateManyMutationInput.schema';
import { AsssitantsUncheckedUpdateManyInputObjectSchema } from '../objects/AsssitantsUncheckedUpdateManyInput.schema';
import { AsssitantsCountAggregateInputObjectSchema } from '../objects/AsssitantsCountAggregateInput.schema';
import { AsssitantsMinAggregateInputObjectSchema } from '../objects/AsssitantsMinAggregateInput.schema';
import { AsssitantsMaxAggregateInputObjectSchema } from '../objects/AsssitantsMaxAggregateInput.schema';
import { AsssitantsAvgAggregateInputObjectSchema } from '../objects/AsssitantsAvgAggregateInput.schema';
import { AsssitantsSumAggregateInputObjectSchema } from '../objects/AsssitantsSumAggregateInput.schema';
import { AsssitantsOrderByWithAggregationInputObjectSchema } from '../objects/AsssitantsOrderByWithAggregationInput.schema';
import { AsssitantsScalarWhereWithAggregatesInputObjectSchema } from '../objects/AsssitantsScalarWhereWithAggregatesInput.schema'

type AsssitantsInputSchemaType = {
    findUnique: z.ZodType<Prisma.asssitantsFindUniqueArgs>,
    findFirst: z.ZodType<Prisma.asssitantsFindFirstArgs>,
    findMany: z.ZodType<Prisma.asssitantsFindManyArgs>,
    create: z.ZodType<Prisma.asssitantsCreateArgs>,
    createMany: z.ZodType<Prisma.asssitantsCreateManyArgs>,
    delete: z.ZodType<Prisma.asssitantsDeleteArgs>,
    deleteMany: z.ZodType<Prisma.asssitantsDeleteManyArgs>,
    update: z.ZodType<Prisma.asssitantsUpdateArgs>,
    updateMany: z.ZodType<Prisma.asssitantsUpdateManyArgs>,
    upsert: z.ZodType<Prisma.asssitantsUpsertArgs>,
    aggregate: z.ZodType<Prisma.AsssitantsAggregateArgs>,
    groupBy: z.ZodType<Prisma.asssitantsGroupByArgs>,
    count: z.ZodType<Prisma.asssitantsCountArgs>
}

export const AsssitantsInputSchema = {
    findUnique: z.object({
        select: z.lazy(() => AsssitantsSelectObjectSchema.optional()), include: z.lazy(() => AsssitantsIncludeObjectSchema.optional()), where: AsssitantsWhereUniqueInputObjectSchema
    }).strict(), findFirst: z.object({
        select: z.lazy(() => AsssitantsSelectObjectSchema.optional()), include: z.lazy(() => AsssitantsIncludeObjectSchema.optional()), where: AsssitantsWhereInputObjectSchema.optional(), orderBy: z.union([AsssitantsOrderByWithRelationInputObjectSchema, AsssitantsOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: AsssitantsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.array(AsssitantsScalarFieldEnumSchema).optional()
    }).strict(), findMany: z.object({
        select: z.lazy(() => AsssitantsSelectObjectSchema.optional()), include: z.lazy(() => AsssitantsIncludeObjectSchema.optional()), where: AsssitantsWhereInputObjectSchema.optional(), orderBy: z.union([AsssitantsOrderByWithRelationInputObjectSchema, AsssitantsOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: AsssitantsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.array(AsssitantsScalarFieldEnumSchema).optional()
    }).strict(), create: z.object({
        select: z.lazy(() => AsssitantsSelectObjectSchema.optional()), include: z.lazy(() => AsssitantsIncludeObjectSchema.optional()), data: z.union([AsssitantsCreateInputObjectSchema, AsssitantsUncheckedCreateInputObjectSchema])
    }).strict(), createMany: z.object({
        data: z.union([AsssitantsCreateManyInputObjectSchema, z.array(AsssitantsCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional()
    }).strict(), 'delete': z.object({
        select: z.lazy(() => AsssitantsSelectObjectSchema.optional()), include: z.lazy(() => AsssitantsIncludeObjectSchema.optional()), where: AsssitantsWhereUniqueInputObjectSchema
    }).strict(), deleteMany: z.object({
        where: AsssitantsWhereInputObjectSchema.optional()
    }).strict(), update: z.object({
        select: z.lazy(() => AsssitantsSelectObjectSchema.optional()), include: z.lazy(() => AsssitantsIncludeObjectSchema.optional()), data: z.union([AsssitantsUpdateInputObjectSchema, AsssitantsUncheckedUpdateInputObjectSchema]), where: AsssitantsWhereUniqueInputObjectSchema
    }).strict(), updateMany: z.object({
        data: z.union([AsssitantsUpdateManyMutationInputObjectSchema, AsssitantsUncheckedUpdateManyInputObjectSchema]), where: AsssitantsWhereInputObjectSchema.optional()
    }).strict(), upsert: z.object({
        select: z.lazy(() => AsssitantsSelectObjectSchema.optional()), include: z.lazy(() => AsssitantsIncludeObjectSchema.optional()), where: AsssitantsWhereUniqueInputObjectSchema, create: z.union([AsssitantsCreateInputObjectSchema, AsssitantsUncheckedCreateInputObjectSchema]), update: z.union([AsssitantsUpdateInputObjectSchema, AsssitantsUncheckedUpdateInputObjectSchema])
    }).strict(), aggregate: z.object({
        where: AsssitantsWhereInputObjectSchema.optional(), orderBy: z.union([AsssitantsOrderByWithRelationInputObjectSchema, AsssitantsOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: AsssitantsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([z.literal(true), AsssitantsCountAggregateInputObjectSchema]).optional(), _min: AsssitantsMinAggregateInputObjectSchema.optional(), _max: AsssitantsMaxAggregateInputObjectSchema.optional(), _avg: AsssitantsAvgAggregateInputObjectSchema.optional(), _sum: AsssitantsSumAggregateInputObjectSchema.optional()
    }).strict(), groupBy: z.object({
        where: AsssitantsWhereInputObjectSchema.optional(), orderBy: z.union([AsssitantsOrderByWithAggregationInputObjectSchema, AsssitantsOrderByWithAggregationInputObjectSchema.array()]).optional(), having: AsssitantsScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(AsssitantsScalarFieldEnumSchema), _count: z.union([z.literal(true), AsssitantsCountAggregateInputObjectSchema]).optional(), _min: AsssitantsMinAggregateInputObjectSchema.optional(), _max: AsssitantsMaxAggregateInputObjectSchema.optional(), _avg: AsssitantsAvgAggregateInputObjectSchema.optional(), _sum: AsssitantsSumAggregateInputObjectSchema.optional()
    }).strict(), count: z.object({
        where: AsssitantsWhereInputObjectSchema.optional(), orderBy: z.union([AsssitantsOrderByWithRelationInputObjectSchema, AsssitantsOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: AsssitantsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.array(AsssitantsScalarFieldEnumSchema).optional(), select: z.union([z.literal(true), AsssitantsCountAggregateInputObjectSchema]).optional()
    }).strict(),
} as AsssitantsInputSchemaType;
