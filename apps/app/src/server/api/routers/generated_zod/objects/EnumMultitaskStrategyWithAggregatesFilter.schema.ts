/* eslint-disable */
import { z } from "zod";
import { MultitaskStrategySchema } from "../enums/MultitaskStrategy.schema";
import { NestedEnumMultitaskStrategyWithAggregatesFilterObjectSchema } from "./NestedEnumMultitaskStrategyWithAggregatesFilter.schema";
import { NestedIntFilterObjectSchema } from "./NestedIntFilter.schema";
import { NestedEnumMultitaskStrategyFilterObjectSchema } from "./NestedEnumMultitaskStrategyFilter.schema";

import type { Prisma } from "@zenstackhq/runtime/models";

type SchemaType = z.ZodType<Prisma.EnumMultitaskStrategyWithAggregatesFilter>;
export const EnumMultitaskStrategyWithAggregatesFilterObjectSchema: SchemaType =
  z
    .object({
      equals: z.lazy(() => MultitaskStrategySchema).optional(),
      in: z
        .lazy(() => MultitaskStrategySchema)
        .array()
        .optional(),
      notIn: z
        .lazy(() => MultitaskStrategySchema)
        .array()
        .optional(),
      not: z
        .union([
          z.lazy(() => MultitaskStrategySchema),
          z.lazy(
            () => NestedEnumMultitaskStrategyWithAggregatesFilterObjectSchema,
          ),
        ])
        .optional(),
      _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
      _min: z
        .lazy(() => NestedEnumMultitaskStrategyFilterObjectSchema)
        .optional(),
      _max: z
        .lazy(() => NestedEnumMultitaskStrategyFilterObjectSchema)
        .optional(),
    })
    .strict() as SchemaType;
