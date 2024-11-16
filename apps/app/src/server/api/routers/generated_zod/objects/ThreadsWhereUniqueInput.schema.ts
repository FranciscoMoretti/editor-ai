/* eslint-disable */
import { z } from "zod";
import { ThreadsWhereInputObjectSchema } from "./ThreadsWhereInput.schema";
import { StringFilterObjectSchema } from "./StringFilter.schema";
import { DateTimeFilterObjectSchema } from "./DateTimeFilter.schema";
import { JsonFilterObjectSchema } from "./JsonFilter.schema";
import { EnumThreadStatusFilterObjectSchema } from "./EnumThreadStatusFilter.schema";
import { ThreadStatusSchema } from "../enums/ThreadStatus.schema";

import type { Prisma } from "@zenstackhq/runtime/models";

type SchemaType = z.ZodType<Prisma.threadsWhereUniqueInput>;
export const ThreadsWhereUniqueInputObjectSchema: SchemaType = z
  .object({
    thread_id: z.string().optional(),
    AND: z
      .union([
        z.lazy(() => ThreadsWhereInputObjectSchema),
        z.lazy(() => ThreadsWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ThreadsWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ThreadsWhereInputObjectSchema),
        z.lazy(() => ThreadsWhereInputObjectSchema).array(),
      ])
      .optional(),
    user_id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    created_at: z
      .union([
        z.lazy(() => DateTimeFilterObjectSchema),
        z.union([z.date(), z.string().datetime().optional()]),
      ])
      .optional(),
    updated_at: z
      .union([
        z.lazy(() => DateTimeFilterObjectSchema),
        z.union([z.date(), z.string().datetime().optional()]),
      ])
      .optional(),
    metadata: z.lazy(() => JsonFilterObjectSchema).optional(),
    status: z
      .union([
        z.lazy(() => EnumThreadStatusFilterObjectSchema),
        z.lazy(() => ThreadStatusSchema),
      ])
      .optional(),
    values: z.lazy(() => JsonFilterObjectSchema).optional(),
  })
  .strict() as SchemaType;
