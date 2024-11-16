/* eslint-disable */
import { z } from "zod";
import { SortOrderSchema } from "../enums/SortOrder.schema";
import { SortOrderInputObjectSchema } from "./SortOrderInput.schema";
import { UsersCountOrderByAggregateInputObjectSchema } from "./UsersCountOrderByAggregateInput.schema";
import { UsersMaxOrderByAggregateInputObjectSchema } from "./UsersMaxOrderByAggregateInput.schema";
import { UsersMinOrderByAggregateInputObjectSchema } from "./UsersMinOrderByAggregateInput.schema";

import type { Prisma } from "@zenstackhq/runtime/models";

type SchemaType = z.ZodType<Prisma.usersOrderByWithAggregationInput>;
export const UsersOrderByWithAggregationInputObjectSchema: SchemaType = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    email: z.lazy(() => SortOrderSchema).optional(),
    full_name: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    avatar_url: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    created_at: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    updated_at: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    _count: z
      .lazy(() => UsersCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z.lazy(() => UsersMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => UsersMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict() as SchemaType;
