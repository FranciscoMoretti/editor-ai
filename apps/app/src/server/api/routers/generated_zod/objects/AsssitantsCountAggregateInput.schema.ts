/* eslint-disable */
import { z } from "zod";

import type { Prisma } from "@zenstackhq/runtime/models";

type SchemaType = z.ZodType<Prisma.AsssitantsCountAggregateInputType>;
export const AsssitantsCountAggregateInputObjectSchema: SchemaType = z
  .object({
    assistant_id: z.literal(true).optional(),
    user_id: z.literal(true).optional(),
    graph_id: z.literal(true).optional(),
    config_id: z.literal(true).optional(),
    created_at: z.literal(true).optional(),
    updated_at: z.literal(true).optional(),
    metadata: z.literal(true).optional(),
    version: z.literal(true).optional(),
    name: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict() as SchemaType;
