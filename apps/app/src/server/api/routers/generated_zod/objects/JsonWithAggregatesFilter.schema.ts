/* eslint-disable */
import { z } from "zod";
import { JsonNullValueFilterSchema } from "../enums/JsonNullValueFilter.schema";
import { NestedIntFilterObjectSchema } from "./NestedIntFilter.schema";
import { NestedJsonFilterObjectSchema } from "./NestedJsonFilter.schema";

import type { Prisma } from "@zenstackhq/runtime/models";

const literalSchema = z.union([z.string(), z.number(), z.boolean()]);
const jsonSchema: z.ZodType<Prisma.InputJsonValue> = z.lazy(() =>
  z.union([
    literalSchema,
    z.array(jsonSchema.nullable()),
    z.record(jsonSchema.nullable()),
  ]),
);

type SchemaType = z.ZodType<Prisma.JsonWithAggregatesFilter>;
export const JsonWithAggregatesFilterObjectSchema: SchemaType = z
  .object({
    equals: z
      .union([jsonSchema, z.lazy(() => JsonNullValueFilterSchema)])
      .optional(),
    path: z.string().array().optional(),
    string_contains: z.string().optional(),
    string_starts_with: z.string().optional(),
    string_ends_with: z.string().optional(),
    array_contains: z.union([jsonSchema, z.null()]).optional().nullable(),
    array_starts_with: z.union([jsonSchema, z.null()]).optional().nullable(),
    array_ends_with: z.union([jsonSchema, z.null()]).optional().nullable(),
    lt: jsonSchema.optional(),
    lte: jsonSchema.optional(),
    gt: jsonSchema.optional(),
    gte: jsonSchema.optional(),
    not: z
      .union([jsonSchema, z.lazy(() => JsonNullValueFilterSchema)])
      .optional(),
    _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
    _min: z.lazy(() => NestedJsonFilterObjectSchema).optional(),
    _max: z.lazy(() => NestedJsonFilterObjectSchema).optional(),
  })
  .strict() as SchemaType;
