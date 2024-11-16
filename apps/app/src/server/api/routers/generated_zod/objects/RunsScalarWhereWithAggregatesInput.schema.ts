/* eslint-disable */
import { z } from "zod";
import { UuidWithAggregatesFilterObjectSchema } from "./UuidWithAggregatesFilter.schema";
import { StringWithAggregatesFilterObjectSchema } from "./StringWithAggregatesFilter.schema";
import { DateTimeWithAggregatesFilterObjectSchema } from "./DateTimeWithAggregatesFilter.schema";
import { EnumRunStatusWithAggregatesFilterObjectSchema } from "./EnumRunStatusWithAggregatesFilter.schema";
import { RunStatusSchema } from "../enums/RunStatus.schema";
import { JsonWithAggregatesFilterObjectSchema } from "./JsonWithAggregatesFilter.schema";
import { EnumMultitaskStrategyWithAggregatesFilterObjectSchema } from "./EnumMultitaskStrategyWithAggregatesFilter.schema";
import { MultitaskStrategySchema } from "../enums/MultitaskStrategy.schema";

import type { Prisma } from "@zenstackhq/runtime/models";

type SchemaType = z.ZodType<Prisma.runsScalarWhereWithAggregatesInput>;
export const RunsScalarWhereWithAggregatesInputObjectSchema: SchemaType = z
  .object({
    AND: z
      .union([
        z.lazy(() => RunsScalarWhereWithAggregatesInputObjectSchema),
        z.lazy(() => RunsScalarWhereWithAggregatesInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => RunsScalarWhereWithAggregatesInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => RunsScalarWhereWithAggregatesInputObjectSchema),
        z.lazy(() => RunsScalarWhereWithAggregatesInputObjectSchema).array(),
      ])
      .optional(),
    run_id: z
      .union([z.lazy(() => UuidWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    user_id: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    thread_id: z
      .union([z.lazy(() => UuidWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    assistant_id: z
      .union([z.lazy(() => UuidWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    created_at: z
      .union([
        z.lazy(() => DateTimeWithAggregatesFilterObjectSchema),
        z.union([z.date(), z.string().datetime().optional()]),
      ])
      .optional(),
    updated_at: z
      .union([
        z.lazy(() => DateTimeWithAggregatesFilterObjectSchema),
        z.union([z.date(), z.string().datetime().optional()]),
      ])
      .optional(),
    status: z
      .union([
        z.lazy(() => EnumRunStatusWithAggregatesFilterObjectSchema),
        z.lazy(() => RunStatusSchema),
      ])
      .optional(),
    metadata: z.lazy(() => JsonWithAggregatesFilterObjectSchema).optional(),
    kwargs: z.lazy(() => JsonWithAggregatesFilterObjectSchema).optional(),
    multitask_strategy: z
      .union([
        z.lazy(() => EnumMultitaskStrategyWithAggregatesFilterObjectSchema),
        z.lazy(() => MultitaskStrategySchema),
      ])
      .optional(),
  })
  .strict() as SchemaType;
