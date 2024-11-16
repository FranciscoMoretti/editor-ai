/* eslint-disable */
import { z } from "zod";
import { SortOrderSchema } from "../enums/SortOrder.schema";
import { ConfigsCountOrderByAggregateInputObjectSchema } from "./ConfigsCountOrderByAggregateInput.schema";
import { ConfigsAvgOrderByAggregateInputObjectSchema } from "./ConfigsAvgOrderByAggregateInput.schema";
import { ConfigsMaxOrderByAggregateInputObjectSchema } from "./ConfigsMaxOrderByAggregateInput.schema";
import { ConfigsMinOrderByAggregateInputObjectSchema } from "./ConfigsMinOrderByAggregateInput.schema";
import { ConfigsSumOrderByAggregateInputObjectSchema } from "./ConfigsSumOrderByAggregateInput.schema";

import type { Prisma } from "@zenstackhq/runtime/models";

type SchemaType = z.ZodType<Prisma.configsOrderByWithAggregationInput>;
export const ConfigsOrderByWithAggregationInputObjectSchema: SchemaType = z
  .object({
    config_id: z.lazy(() => SortOrderSchema).optional(),
    user_id: z.lazy(() => SortOrderSchema).optional(),
    tags: z.lazy(() => SortOrderSchema).optional(),
    recursion_limit: z.lazy(() => SortOrderSchema).optional(),
    configurable: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => ConfigsCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z.lazy(() => ConfigsAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => ConfigsMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => ConfigsMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => ConfigsSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict() as SchemaType;
