/* eslint-disable */
import { z } from "zod";
import type { Prisma } from "@zenstackhq/runtime/models";
import { ConfigsSelectObjectSchema } from "../objects/ConfigsSelect.schema";
import { ConfigsIncludeObjectSchema } from "../objects/ConfigsInclude.schema";
import { ConfigsWhereUniqueInputObjectSchema } from "../objects/ConfigsWhereUniqueInput.schema";
import { ConfigsWhereInputObjectSchema } from "../objects/ConfigsWhereInput.schema";
import { ConfigsOrderByWithRelationInputObjectSchema } from "../objects/ConfigsOrderByWithRelationInput.schema";
import { ConfigsScalarFieldEnumSchema } from "../enums/ConfigsScalarFieldEnum.schema";
import { ConfigsCreateInputObjectSchema } from "../objects/ConfigsCreateInput.schema";
import { ConfigsUncheckedCreateInputObjectSchema } from "../objects/ConfigsUncheckedCreateInput.schema";
import { ConfigsCreateManyInputObjectSchema } from "../objects/ConfigsCreateManyInput.schema";
import { ConfigsUpdateInputObjectSchema } from "../objects/ConfigsUpdateInput.schema";
import { ConfigsUncheckedUpdateInputObjectSchema } from "../objects/ConfigsUncheckedUpdateInput.schema";
import { ConfigsUpdateManyMutationInputObjectSchema } from "../objects/ConfigsUpdateManyMutationInput.schema";
import { ConfigsUncheckedUpdateManyInputObjectSchema } from "../objects/ConfigsUncheckedUpdateManyInput.schema";
import { ConfigsCountAggregateInputObjectSchema } from "../objects/ConfigsCountAggregateInput.schema";
import { ConfigsMinAggregateInputObjectSchema } from "../objects/ConfigsMinAggregateInput.schema";
import { ConfigsMaxAggregateInputObjectSchema } from "../objects/ConfigsMaxAggregateInput.schema";
import { ConfigsAvgAggregateInputObjectSchema } from "../objects/ConfigsAvgAggregateInput.schema";
import { ConfigsSumAggregateInputObjectSchema } from "../objects/ConfigsSumAggregateInput.schema";
import { ConfigsOrderByWithAggregationInputObjectSchema } from "../objects/ConfigsOrderByWithAggregationInput.schema";
import { ConfigsScalarWhereWithAggregatesInputObjectSchema } from "../objects/ConfigsScalarWhereWithAggregatesInput.schema";

type ConfigsInputSchemaType = {
  findUnique: z.ZodType<Prisma.configsFindUniqueArgs>;
  findFirst: z.ZodType<Prisma.configsFindFirstArgs>;
  findMany: z.ZodType<Prisma.configsFindManyArgs>;
  create: z.ZodType<Prisma.configsCreateArgs>;
  createMany: z.ZodType<Prisma.configsCreateManyArgs>;
  delete: z.ZodType<Prisma.configsDeleteArgs>;
  deleteMany: z.ZodType<Prisma.configsDeleteManyArgs>;
  update: z.ZodType<Prisma.configsUpdateArgs>;
  updateMany: z.ZodType<Prisma.configsUpdateManyArgs>;
  upsert: z.ZodType<Prisma.configsUpsertArgs>;
  aggregate: z.ZodType<Prisma.ConfigsAggregateArgs>;
  groupBy: z.ZodType<Prisma.configsGroupByArgs>;
  count: z.ZodType<Prisma.configsCountArgs>;
};

export const ConfigsInputSchema = {
  findUnique: z
    .object({
      select: z.lazy(() => ConfigsSelectObjectSchema.optional()),
      include: z.lazy(() => ConfigsIncludeObjectSchema.optional()),
      where: ConfigsWhereUniqueInputObjectSchema,
    })
    .strict(),
  findFirst: z
    .object({
      select: z.lazy(() => ConfigsSelectObjectSchema.optional()),
      include: z.lazy(() => ConfigsIncludeObjectSchema.optional()),
      where: ConfigsWhereInputObjectSchema.optional(),
      orderBy: z
        .union([
          ConfigsOrderByWithRelationInputObjectSchema,
          ConfigsOrderByWithRelationInputObjectSchema.array(),
        ])
        .optional(),
      cursor: ConfigsWhereUniqueInputObjectSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z.array(ConfigsScalarFieldEnumSchema).optional(),
    })
    .strict(),
  findMany: z
    .object({
      select: z.lazy(() => ConfigsSelectObjectSchema.optional()),
      include: z.lazy(() => ConfigsIncludeObjectSchema.optional()),
      where: ConfigsWhereInputObjectSchema.optional(),
      orderBy: z
        .union([
          ConfigsOrderByWithRelationInputObjectSchema,
          ConfigsOrderByWithRelationInputObjectSchema.array(),
        ])
        .optional(),
      cursor: ConfigsWhereUniqueInputObjectSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z.array(ConfigsScalarFieldEnumSchema).optional(),
    })
    .strict(),
  create: z
    .object({
      select: z.lazy(() => ConfigsSelectObjectSchema.optional()),
      include: z.lazy(() => ConfigsIncludeObjectSchema.optional()),
      data: z.union([
        ConfigsCreateInputObjectSchema,
        ConfigsUncheckedCreateInputObjectSchema,
      ]),
    })
    .strict(),
  createMany: z
    .object({
      data: z.union([
        ConfigsCreateManyInputObjectSchema,
        z.array(ConfigsCreateManyInputObjectSchema),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict(),
  delete: z
    .object({
      select: z.lazy(() => ConfigsSelectObjectSchema.optional()),
      include: z.lazy(() => ConfigsIncludeObjectSchema.optional()),
      where: ConfigsWhereUniqueInputObjectSchema,
    })
    .strict(),
  deleteMany: z
    .object({
      where: ConfigsWhereInputObjectSchema.optional(),
    })
    .strict(),
  update: z
    .object({
      select: z.lazy(() => ConfigsSelectObjectSchema.optional()),
      include: z.lazy(() => ConfigsIncludeObjectSchema.optional()),
      data: z.union([
        ConfigsUpdateInputObjectSchema,
        ConfigsUncheckedUpdateInputObjectSchema,
      ]),
      where: ConfigsWhereUniqueInputObjectSchema,
    })
    .strict(),
  updateMany: z
    .object({
      data: z.union([
        ConfigsUpdateManyMutationInputObjectSchema,
        ConfigsUncheckedUpdateManyInputObjectSchema,
      ]),
      where: ConfigsWhereInputObjectSchema.optional(),
    })
    .strict(),
  upsert: z
    .object({
      select: z.lazy(() => ConfigsSelectObjectSchema.optional()),
      include: z.lazy(() => ConfigsIncludeObjectSchema.optional()),
      where: ConfigsWhereUniqueInputObjectSchema,
      create: z.union([
        ConfigsCreateInputObjectSchema,
        ConfigsUncheckedCreateInputObjectSchema,
      ]),
      update: z.union([
        ConfigsUpdateInputObjectSchema,
        ConfigsUncheckedUpdateInputObjectSchema,
      ]),
    })
    .strict(),
  aggregate: z
    .object({
      where: ConfigsWhereInputObjectSchema.optional(),
      orderBy: z
        .union([
          ConfigsOrderByWithRelationInputObjectSchema,
          ConfigsOrderByWithRelationInputObjectSchema.array(),
        ])
        .optional(),
      cursor: ConfigsWhereUniqueInputObjectSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      _count: z
        .union([z.literal(true), ConfigsCountAggregateInputObjectSchema])
        .optional(),
      _min: ConfigsMinAggregateInputObjectSchema.optional(),
      _max: ConfigsMaxAggregateInputObjectSchema.optional(),
      _avg: ConfigsAvgAggregateInputObjectSchema.optional(),
      _sum: ConfigsSumAggregateInputObjectSchema.optional(),
    })
    .strict(),
  groupBy: z
    .object({
      where: ConfigsWhereInputObjectSchema.optional(),
      orderBy: z
        .union([
          ConfigsOrderByWithAggregationInputObjectSchema,
          ConfigsOrderByWithAggregationInputObjectSchema.array(),
        ])
        .optional(),
      having: ConfigsScalarWhereWithAggregatesInputObjectSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      by: z.array(ConfigsScalarFieldEnumSchema),
      _count: z
        .union([z.literal(true), ConfigsCountAggregateInputObjectSchema])
        .optional(),
      _min: ConfigsMinAggregateInputObjectSchema.optional(),
      _max: ConfigsMaxAggregateInputObjectSchema.optional(),
      _avg: ConfigsAvgAggregateInputObjectSchema.optional(),
      _sum: ConfigsSumAggregateInputObjectSchema.optional(),
    })
    .strict(),
  count: z
    .object({
      where: ConfigsWhereInputObjectSchema.optional(),
      orderBy: z
        .union([
          ConfigsOrderByWithRelationInputObjectSchema,
          ConfigsOrderByWithRelationInputObjectSchema.array(),
        ])
        .optional(),
      cursor: ConfigsWhereUniqueInputObjectSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z.array(ConfigsScalarFieldEnumSchema).optional(),
      select: z
        .union([z.literal(true), ConfigsCountAggregateInputObjectSchema])
        .optional(),
    })
    .strict(),
} as ConfigsInputSchemaType;
