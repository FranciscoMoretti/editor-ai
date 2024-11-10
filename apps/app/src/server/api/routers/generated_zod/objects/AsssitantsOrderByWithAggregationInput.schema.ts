/* eslint-disable */
import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { AsssitantsCountOrderByAggregateInputObjectSchema } from './AsssitantsCountOrderByAggregateInput.schema';
import { AsssitantsAvgOrderByAggregateInputObjectSchema } from './AsssitantsAvgOrderByAggregateInput.schema';
import { AsssitantsMaxOrderByAggregateInputObjectSchema } from './AsssitantsMaxOrderByAggregateInput.schema';
import { AsssitantsMinOrderByAggregateInputObjectSchema } from './AsssitantsMinOrderByAggregateInput.schema';
import { AsssitantsSumOrderByAggregateInputObjectSchema } from './AsssitantsSumOrderByAggregateInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.asssitantsOrderByWithAggregationInput>;
export const AsssitantsOrderByWithAggregationInputObjectSchema: SchemaType = z.object({
    assistant_id: z.lazy(() => SortOrderSchema).optional(), user_id: z.lazy(() => SortOrderSchema).optional(), graph_id: z.lazy(() => SortOrderSchema).optional(), config_id: z.lazy(() => SortOrderSchema).optional(), created_at: z.lazy(() => SortOrderSchema).optional(), updated_at: z.lazy(() => SortOrderSchema).optional(), metadata: z.lazy(() => SortOrderSchema).optional(), version: z.lazy(() => SortOrderSchema).optional(), name: z.lazy(() => SortOrderSchema).optional(), _count: z.lazy(() => AsssitantsCountOrderByAggregateInputObjectSchema).optional(), _avg: z.lazy(() => AsssitantsAvgOrderByAggregateInputObjectSchema).optional(), _max: z.lazy(() => AsssitantsMaxOrderByAggregateInputObjectSchema).optional(), _min: z.lazy(() => AsssitantsMinOrderByAggregateInputObjectSchema).optional(), _sum: z.lazy(() => AsssitantsSumOrderByAggregateInputObjectSchema).optional()
}).strict() as SchemaType;
