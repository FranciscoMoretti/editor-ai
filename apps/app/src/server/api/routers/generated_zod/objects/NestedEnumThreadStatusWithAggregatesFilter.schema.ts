/* eslint-disable */
import { z } from "zod";
import { ThreadStatusSchema } from "../enums/ThreadStatus.schema";
import { NestedIntFilterObjectSchema } from "./NestedIntFilter.schema";
import { NestedEnumThreadStatusFilterObjectSchema } from "./NestedEnumThreadStatusFilter.schema";

import type { Prisma } from "@zenstackhq/runtime/models";

type SchemaType = z.ZodType<Prisma.NestedEnumThreadStatusWithAggregatesFilter>;
export const NestedEnumThreadStatusWithAggregatesFilterObjectSchema: SchemaType =
  z
    .object({
      equals: z.lazy(() => ThreadStatusSchema).optional(),
      in: z
        .lazy(() => ThreadStatusSchema)
        .array()
        .optional(),
      notIn: z
        .lazy(() => ThreadStatusSchema)
        .array()
        .optional(),
      not: z
        .union([
          z.lazy(() => ThreadStatusSchema),
          z.lazy(() => NestedEnumThreadStatusWithAggregatesFilterObjectSchema),
        ])
        .optional(),
      _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
      _min: z.lazy(() => NestedEnumThreadStatusFilterObjectSchema).optional(),
      _max: z.lazy(() => NestedEnumThreadStatusFilterObjectSchema).optional(),
    })
    .strict() as SchemaType;
