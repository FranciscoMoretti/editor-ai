/* eslint-disable */
import { z } from "zod";
import { UuidWithAggregatesFilterObjectSchema } from "./UuidWithAggregatesFilter.schema";
import { StringWithAggregatesFilterObjectSchema } from "./StringWithAggregatesFilter.schema";
import { DateTimeWithAggregatesFilterObjectSchema } from "./DateTimeWithAggregatesFilter.schema";
import { JsonWithAggregatesFilterObjectSchema } from "./JsonWithAggregatesFilter.schema";
import { EnumThreadStatusWithAggregatesFilterObjectSchema } from "./EnumThreadStatusWithAggregatesFilter.schema";
import { ThreadStatusSchema } from "../enums/ThreadStatus.schema";

import type { Prisma } from "@zenstackhq/runtime/models";

type SchemaType = z.ZodType<Prisma.threadsScalarWhereWithAggregatesInput>;
export const ThreadsScalarWhereWithAggregatesInputObjectSchema: SchemaType = z
  .object({
    AND: z
      .union([
        z.lazy(() => ThreadsScalarWhereWithAggregatesInputObjectSchema),
        z.lazy(() => ThreadsScalarWhereWithAggregatesInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ThreadsScalarWhereWithAggregatesInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ThreadsScalarWhereWithAggregatesInputObjectSchema),
        z.lazy(() => ThreadsScalarWhereWithAggregatesInputObjectSchema).array(),
      ])
      .optional(),
    thread_id: z
      .union([z.lazy(() => UuidWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    user_id: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
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
    metadata: z.lazy(() => JsonWithAggregatesFilterObjectSchema).optional(),
    status: z
      .union([
        z.lazy(() => EnumThreadStatusWithAggregatesFilterObjectSchema),
        z.lazy(() => ThreadStatusSchema),
      ])
      .optional(),
    values: z.lazy(() => JsonWithAggregatesFilterObjectSchema).optional(),
  })
  .strict() as SchemaType;
