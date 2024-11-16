/* eslint-disable */
import { z } from "zod";

import type { Prisma } from "@zenstackhq/runtime/models";

type SchemaType = z.ZodType<Prisma.StringNullableListFilter>;
export const StringNullableListFilterObjectSchema: SchemaType = z
  .object({
    equals: z.union([z.string().array(), z.null()]).optional().nullable(),
    has: z.union([z.string(), z.null()]).optional().nullable(),
    hasEvery: z.string().array().optional(),
    hasSome: z.string().array().optional(),
    isEmpty: z.boolean().optional(),
  })
  .strict() as SchemaType;
