/* eslint-disable */
import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { AsssitantCountOrderByAggregateInputObjectSchema } from './AsssitantCountOrderByAggregateInput.schema';
import { AsssitantAvgOrderByAggregateInputObjectSchema } from './AsssitantAvgOrderByAggregateInput.schema';
import { AsssitantMaxOrderByAggregateInputObjectSchema } from './AsssitantMaxOrderByAggregateInput.schema';
import { AsssitantMinOrderByAggregateInputObjectSchema } from './AsssitantMinOrderByAggregateInput.schema';
import { AsssitantSumOrderByAggregateInputObjectSchema } from './AsssitantSumOrderByAggregateInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.asssitantOrderByWithAggregationInput>;
export const AsssitantOrderByWithAggregationInputObjectSchema: SchemaType = z.object({
    assistant_id: z.lazy(() => SortOrderSchema).optional(), graph_id: z.lazy(() => SortOrderSchema).optional(), config_id: z.lazy(() => SortOrderSchema).optional(), created_at: z.lazy(() => SortOrderSchema).optional(), updated_at: z.lazy(() => SortOrderSchema).optional(), metadata: z.lazy(() => SortOrderSchema).optional(), version: z.lazy(() => SortOrderSchema).optional(), name: z.lazy(() => SortOrderSchema).optional(), user_id: z.lazy(() => SortOrderSchema).optional(), _count: z.lazy(() => AsssitantCountOrderByAggregateInputObjectSchema).optional(), _avg: z.lazy(() => AsssitantAvgOrderByAggregateInputObjectSchema).optional(), _max: z.lazy(() => AsssitantMaxOrderByAggregateInputObjectSchema).optional(), _min: z.lazy(() => AsssitantMinOrderByAggregateInputObjectSchema).optional(), _sum: z.lazy(() => AsssitantSumOrderByAggregateInputObjectSchema).optional()
}).strict() as SchemaType;
