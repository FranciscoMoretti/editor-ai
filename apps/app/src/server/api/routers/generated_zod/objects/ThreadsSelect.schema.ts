/* eslint-disable */
import { z } from "zod";

import type { Prisma } from "@zenstackhq/runtime/models";

type SchemaType = z.ZodType<Prisma.threadsSelect>;
export const ThreadsSelectObjectSchema: SchemaType = z
  .object({
    thread_id: z.boolean().optional(),
    user_id: z.boolean().optional(),
    created_at: z.boolean().optional(),
    updated_at: z.boolean().optional(),
    metadata: z.boolean().optional(),
    status: z.boolean().optional(),
    values: z.boolean().optional(),
  })
  .strict() as SchemaType;
