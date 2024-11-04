
/* eslint-disable */
import { z } from 'zod';
;
import type { Prisma } from '@zenstackhq/runtime/models';

;
import { UsersSelectObjectSchema } from '../objects/UsersSelect.schema';
import { UsersIncludeObjectSchema } from '../objects/UsersInclude.schema';
import { UsersWhereUniqueInputObjectSchema } from '../objects/UsersWhereUniqueInput.schema';
import { UsersWhereInputObjectSchema } from '../objects/UsersWhereInput.schema';
import { UsersOrderByWithRelationInputObjectSchema } from '../objects/UsersOrderByWithRelationInput.schema';
import { UsersScalarFieldEnumSchema } from '../enums/UsersScalarFieldEnum.schema';
import { UsersCreateInputObjectSchema } from '../objects/UsersCreateInput.schema';
import { UsersUncheckedCreateInputObjectSchema } from '../objects/UsersUncheckedCreateInput.schema';
import { UsersCreateManyInputObjectSchema } from '../objects/UsersCreateManyInput.schema';
import { UsersUpdateInputObjectSchema } from '../objects/UsersUpdateInput.schema';
import { UsersUncheckedUpdateInputObjectSchema } from '../objects/UsersUncheckedUpdateInput.schema';
import { UsersUpdateManyMutationInputObjectSchema } from '../objects/UsersUpdateManyMutationInput.schema';
import { UsersUncheckedUpdateManyInputObjectSchema } from '../objects/UsersUncheckedUpdateManyInput.schema';
import { UsersCountAggregateInputObjectSchema } from '../objects/UsersCountAggregateInput.schema';
import { UsersMinAggregateInputObjectSchema } from '../objects/UsersMinAggregateInput.schema';
import { UsersMaxAggregateInputObjectSchema } from '../objects/UsersMaxAggregateInput.schema';
import { UsersOrderByWithAggregationInputObjectSchema } from '../objects/UsersOrderByWithAggregationInput.schema';
import { UsersScalarWhereWithAggregatesInputObjectSchema } from '../objects/UsersScalarWhereWithAggregatesInput.schema'

type UsersInputSchemaType = {
    findUnique: z.ZodType<Prisma.usersFindUniqueArgs>,
    findFirst: z.ZodType<Prisma.usersFindFirstArgs>,
    findMany: z.ZodType<Prisma.usersFindManyArgs>,
    create: z.ZodType<Prisma.usersCreateArgs>,
    createMany: z.ZodType<Prisma.usersCreateManyArgs>,
    delete: z.ZodType<Prisma.usersDeleteArgs>,
    deleteMany: z.ZodType<Prisma.usersDeleteManyArgs>,
    update: z.ZodType<Prisma.usersUpdateArgs>,
    updateMany: z.ZodType<Prisma.usersUpdateManyArgs>,
    upsert: z.ZodType<Prisma.usersUpsertArgs>,
    aggregate: z.ZodType<Prisma.UsersAggregateArgs>,
    groupBy: z.ZodType<Prisma.usersGroupByArgs>,
    count: z.ZodType<Prisma.usersCountArgs>
}

export const UsersInputSchema = {
    findUnique: z.object({
        select: z.lazy(() => UsersSelectObjectSchema.optional()), include: z.lazy(() => UsersIncludeObjectSchema.optional()), where: UsersWhereUniqueInputObjectSchema
    }).strict(), findFirst: z.object({
        select: z.lazy(() => UsersSelectObjectSchema.optional()), include: z.lazy(() => UsersIncludeObjectSchema.optional()), where: UsersWhereInputObjectSchema.optional(), orderBy: z.union([UsersOrderByWithRelationInputObjectSchema, UsersOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: UsersWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.array(UsersScalarFieldEnumSchema).optional()
    }).strict(), findMany: z.object({
        select: z.lazy(() => UsersSelectObjectSchema.optional()), include: z.lazy(() => UsersIncludeObjectSchema.optional()), where: UsersWhereInputObjectSchema.optional(), orderBy: z.union([UsersOrderByWithRelationInputObjectSchema, UsersOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: UsersWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.array(UsersScalarFieldEnumSchema).optional()
    }).strict(), create: z.object({
        select: z.lazy(() => UsersSelectObjectSchema.optional()), include: z.lazy(() => UsersIncludeObjectSchema.optional()), data: z.union([UsersCreateInputObjectSchema, UsersUncheckedCreateInputObjectSchema])
    }).strict(), createMany: z.object({
        data: z.union([UsersCreateManyInputObjectSchema, z.array(UsersCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional()
    }).strict(), 'delete': z.object({
        select: z.lazy(() => UsersSelectObjectSchema.optional()), include: z.lazy(() => UsersIncludeObjectSchema.optional()), where: UsersWhereUniqueInputObjectSchema
    }).strict(), deleteMany: z.object({
        where: UsersWhereInputObjectSchema.optional()
    }).strict(), update: z.object({
        select: z.lazy(() => UsersSelectObjectSchema.optional()), include: z.lazy(() => UsersIncludeObjectSchema.optional()), data: z.union([UsersUpdateInputObjectSchema, UsersUncheckedUpdateInputObjectSchema]), where: UsersWhereUniqueInputObjectSchema
    }).strict(), updateMany: z.object({
        data: z.union([UsersUpdateManyMutationInputObjectSchema, UsersUncheckedUpdateManyInputObjectSchema]), where: UsersWhereInputObjectSchema.optional()
    }).strict(), upsert: z.object({
        select: z.lazy(() => UsersSelectObjectSchema.optional()), include: z.lazy(() => UsersIncludeObjectSchema.optional()), where: UsersWhereUniqueInputObjectSchema, create: z.union([UsersCreateInputObjectSchema, UsersUncheckedCreateInputObjectSchema]), update: z.union([UsersUpdateInputObjectSchema, UsersUncheckedUpdateInputObjectSchema])
    }).strict(), aggregate: z.object({
        where: UsersWhereInputObjectSchema.optional(), orderBy: z.union([UsersOrderByWithRelationInputObjectSchema, UsersOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: UsersWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([z.literal(true), UsersCountAggregateInputObjectSchema]).optional(), _min: UsersMinAggregateInputObjectSchema.optional(), _max: UsersMaxAggregateInputObjectSchema.optional()
    }).strict(), groupBy: z.object({
        where: UsersWhereInputObjectSchema.optional(), orderBy: z.union([UsersOrderByWithAggregationInputObjectSchema, UsersOrderByWithAggregationInputObjectSchema.array()]).optional(), having: UsersScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(UsersScalarFieldEnumSchema), _count: z.union([z.literal(true), UsersCountAggregateInputObjectSchema]).optional(), _min: UsersMinAggregateInputObjectSchema.optional(), _max: UsersMaxAggregateInputObjectSchema.optional()
    }).strict(), count: z.object({
        where: UsersWhereInputObjectSchema.optional(), orderBy: z.union([UsersOrderByWithRelationInputObjectSchema, UsersOrderByWithRelationInputObjectSchema.array()]).optional(), cursor: UsersWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.array(UsersScalarFieldEnumSchema).optional(), select: z.union([z.literal(true), UsersCountAggregateInputObjectSchema]).optional()
    }).strict(),
} as UsersInputSchemaType;
