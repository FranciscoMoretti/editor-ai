/* eslint-disable */
import { z } from "zod";
import type { Prisma } from "@zenstackhq/runtime/models";
import { PostsSelectObjectSchema } from "../objects/PostsSelect.schema";
import { PostsIncludeObjectSchema } from "../objects/PostsInclude.schema";
import { PostsWhereUniqueInputObjectSchema } from "../objects/PostsWhereUniqueInput.schema";
import { PostsWhereInputObjectSchema } from "../objects/PostsWhereInput.schema";
import { PostsOrderByWithRelationInputObjectSchema } from "../objects/PostsOrderByWithRelationInput.schema";
import { PostsScalarFieldEnumSchema } from "../enums/PostsScalarFieldEnum.schema";
import { PostsCreateInputObjectSchema } from "../objects/PostsCreateInput.schema";
import { PostsUncheckedCreateInputObjectSchema } from "../objects/PostsUncheckedCreateInput.schema";
import { PostsCreateManyInputObjectSchema } from "../objects/PostsCreateManyInput.schema";
import { PostsUpdateInputObjectSchema } from "../objects/PostsUpdateInput.schema";
import { PostsUncheckedUpdateInputObjectSchema } from "../objects/PostsUncheckedUpdateInput.schema";
import { PostsUpdateManyMutationInputObjectSchema } from "../objects/PostsUpdateManyMutationInput.schema";
import { PostsUncheckedUpdateManyInputObjectSchema } from "../objects/PostsUncheckedUpdateManyInput.schema";
import { PostsCountAggregateInputObjectSchema } from "../objects/PostsCountAggregateInput.schema";
import { PostsMinAggregateInputObjectSchema } from "../objects/PostsMinAggregateInput.schema";
import { PostsMaxAggregateInputObjectSchema } from "../objects/PostsMaxAggregateInput.schema";
import { PostsOrderByWithAggregationInputObjectSchema } from "../objects/PostsOrderByWithAggregationInput.schema";
import { PostsScalarWhereWithAggregatesInputObjectSchema } from "../objects/PostsScalarWhereWithAggregatesInput.schema";

type PostsInputSchemaType = {
  findUnique: z.ZodType<Prisma.postsFindUniqueArgs>;
  findFirst: z.ZodType<Prisma.postsFindFirstArgs>;
  findMany: z.ZodType<Prisma.postsFindManyArgs>;
  create: z.ZodType<Prisma.postsCreateArgs>;
  createMany: z.ZodType<Prisma.postsCreateManyArgs>;
  delete: z.ZodType<Prisma.postsDeleteArgs>;
  deleteMany: z.ZodType<Prisma.postsDeleteManyArgs>;
  update: z.ZodType<Prisma.postsUpdateArgs>;
  updateMany: z.ZodType<Prisma.postsUpdateManyArgs>;
  upsert: z.ZodType<Prisma.postsUpsertArgs>;
  aggregate: z.ZodType<Prisma.PostsAggregateArgs>;
  groupBy: z.ZodType<Prisma.postsGroupByArgs>;
  count: z.ZodType<Prisma.postsCountArgs>;
};

export const PostsInputSchema = {
  findUnique: z
    .object({
      select: z.lazy(() => PostsSelectObjectSchema.optional()),
      include: z.lazy(() => PostsIncludeObjectSchema.optional()),
      where: PostsWhereUniqueInputObjectSchema,
    })
    .strict(),
  findFirst: z
    .object({
      select: z.lazy(() => PostsSelectObjectSchema.optional()),
      include: z.lazy(() => PostsIncludeObjectSchema.optional()),
      where: PostsWhereInputObjectSchema.optional(),
      orderBy: z
        .union([
          PostsOrderByWithRelationInputObjectSchema,
          PostsOrderByWithRelationInputObjectSchema.array(),
        ])
        .optional(),
      cursor: PostsWhereUniqueInputObjectSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z.array(PostsScalarFieldEnumSchema).optional(),
    })
    .strict(),
  findMany: z
    .object({
      select: z.lazy(() => PostsSelectObjectSchema.optional()),
      include: z.lazy(() => PostsIncludeObjectSchema.optional()),
      where: PostsWhereInputObjectSchema.optional(),
      orderBy: z
        .union([
          PostsOrderByWithRelationInputObjectSchema,
          PostsOrderByWithRelationInputObjectSchema.array(),
        ])
        .optional(),
      cursor: PostsWhereUniqueInputObjectSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z.array(PostsScalarFieldEnumSchema).optional(),
    })
    .strict(),
  create: z
    .object({
      select: z.lazy(() => PostsSelectObjectSchema.optional()),
      include: z.lazy(() => PostsIncludeObjectSchema.optional()),
      data: z.union([
        PostsCreateInputObjectSchema,
        PostsUncheckedCreateInputObjectSchema,
      ]),
    })
    .strict(),
  createMany: z
    .object({
      data: z.union([
        PostsCreateManyInputObjectSchema,
        z.array(PostsCreateManyInputObjectSchema),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict(),
  delete: z
    .object({
      select: z.lazy(() => PostsSelectObjectSchema.optional()),
      include: z.lazy(() => PostsIncludeObjectSchema.optional()),
      where: PostsWhereUniqueInputObjectSchema,
    })
    .strict(),
  deleteMany: z
    .object({
      where: PostsWhereInputObjectSchema.optional(),
    })
    .strict(),
  update: z
    .object({
      select: z.lazy(() => PostsSelectObjectSchema.optional()),
      include: z.lazy(() => PostsIncludeObjectSchema.optional()),
      data: z.union([
        PostsUpdateInputObjectSchema,
        PostsUncheckedUpdateInputObjectSchema,
      ]),
      where: PostsWhereUniqueInputObjectSchema,
    })
    .strict(),
  updateMany: z
    .object({
      data: z.union([
        PostsUpdateManyMutationInputObjectSchema,
        PostsUncheckedUpdateManyInputObjectSchema,
      ]),
      where: PostsWhereInputObjectSchema.optional(),
    })
    .strict(),
  upsert: z
    .object({
      select: z.lazy(() => PostsSelectObjectSchema.optional()),
      include: z.lazy(() => PostsIncludeObjectSchema.optional()),
      where: PostsWhereUniqueInputObjectSchema,
      create: z.union([
        PostsCreateInputObjectSchema,
        PostsUncheckedCreateInputObjectSchema,
      ]),
      update: z.union([
        PostsUpdateInputObjectSchema,
        PostsUncheckedUpdateInputObjectSchema,
      ]),
    })
    .strict(),
  aggregate: z
    .object({
      where: PostsWhereInputObjectSchema.optional(),
      orderBy: z
        .union([
          PostsOrderByWithRelationInputObjectSchema,
          PostsOrderByWithRelationInputObjectSchema.array(),
        ])
        .optional(),
      cursor: PostsWhereUniqueInputObjectSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      _count: z
        .union([z.literal(true), PostsCountAggregateInputObjectSchema])
        .optional(),
      _min: PostsMinAggregateInputObjectSchema.optional(),
      _max: PostsMaxAggregateInputObjectSchema.optional(),
    })
    .strict(),
  groupBy: z
    .object({
      where: PostsWhereInputObjectSchema.optional(),
      orderBy: z
        .union([
          PostsOrderByWithAggregationInputObjectSchema,
          PostsOrderByWithAggregationInputObjectSchema.array(),
        ])
        .optional(),
      having: PostsScalarWhereWithAggregatesInputObjectSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      by: z.array(PostsScalarFieldEnumSchema),
      _count: z
        .union([z.literal(true), PostsCountAggregateInputObjectSchema])
        .optional(),
      _min: PostsMinAggregateInputObjectSchema.optional(),
      _max: PostsMaxAggregateInputObjectSchema.optional(),
    })
    .strict(),
  count: z
    .object({
      where: PostsWhereInputObjectSchema.optional(),
      orderBy: z
        .union([
          PostsOrderByWithRelationInputObjectSchema,
          PostsOrderByWithRelationInputObjectSchema.array(),
        ])
        .optional(),
      cursor: PostsWhereUniqueInputObjectSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z.array(PostsScalarFieldEnumSchema).optional(),
      select: z
        .union([z.literal(true), PostsCountAggregateInputObjectSchema])
        .optional(),
    })
    .strict(),
} as PostsInputSchemaType;
