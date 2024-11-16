/* eslint-disable */
import { z } from "zod";
import { RunStatusSchema } from "../enums/RunStatus.schema";
import { NestedEnumRunStatusWithAggregatesFilterObjectSchema } from "./NestedEnumRunStatusWithAggregatesFilter.schema";
import { NestedIntFilterObjectSchema } from "./NestedIntFilter.schema";
import { NestedEnumRunStatusFilterObjectSchema } from "./NestedEnumRunStatusFilter.schema";

import type { Prisma } from "@zenstackhq/runtime/models";

type SchemaType = z.ZodType<Prisma.EnumRunStatusWithAggregatesFilter>;
export const EnumRunStatusWithAggregatesFilterObjectSchema: SchemaType = z
  .object({
    equals: z.lazy(() => RunStatusSchema).optional(),
    in: z
      .lazy(() => RunStatusSchema)
      .array()
      .optional(),
    notIn: z
      .lazy(() => RunStatusSchema)
      .array()
      .optional(),
    not: z
      .union([
        z.lazy(() => RunStatusSchema),
        z.lazy(() => NestedEnumRunStatusWithAggregatesFilterObjectSchema),
      ])
      .optional(),
    _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
    _min: z.lazy(() => NestedEnumRunStatusFilterObjectSchema).optional(),
    _max: z.lazy(() => NestedEnumRunStatusFilterObjectSchema).optional(),
  })
  .strict() as SchemaType;
