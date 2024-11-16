/* eslint-disable */
import { z } from "zod";
import { SortOrderSchema } from "../enums/SortOrder.schema";

import type { Prisma } from "@zenstackhq/runtime/models";

type SchemaType = z.ZodType<Prisma.threadsMinOrderByAggregateInput>;
export const ThreadsMinOrderByAggregateInputObjectSchema: SchemaType = z
  .object({
    thread_id: z.lazy(() => SortOrderSchema).optional(),
    user_id: z.lazy(() => SortOrderSchema).optional(),
    created_at: z.lazy(() => SortOrderSchema).optional(),
    updated_at: z.lazy(() => SortOrderSchema).optional(),
    status: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict() as SchemaType;