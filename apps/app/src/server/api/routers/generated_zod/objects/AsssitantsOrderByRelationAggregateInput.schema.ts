/* eslint-disable */
import { z } from "zod";
import { SortOrderSchema } from "../enums/SortOrder.schema";

import type { Prisma } from "@zenstackhq/runtime/models";

type SchemaType = z.ZodType<Prisma.asssitantsOrderByRelationAggregateInput>;
export const AsssitantsOrderByRelationAggregateInputObjectSchema: SchemaType = z
  .object({
    _count: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict() as SchemaType;