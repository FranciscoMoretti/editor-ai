/* eslint-disable */
import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ThreadsCountOrderByAggregateInputObjectSchema } from './ThreadsCountOrderByAggregateInput.schema';
import { ThreadsMaxOrderByAggregateInputObjectSchema } from './ThreadsMaxOrderByAggregateInput.schema';
import { ThreadsMinOrderByAggregateInputObjectSchema } from './ThreadsMinOrderByAggregateInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.threadsOrderByWithAggregationInput>;
export const ThreadsOrderByWithAggregationInputObjectSchema: SchemaType = z.object({
    thread_id: z.lazy(() => SortOrderSchema).optional(), created_at: z.lazy(() => SortOrderSchema).optional(), updated_at: z.lazy(() => SortOrderSchema).optional(), metadata: z.lazy(() => SortOrderSchema).optional(), status: z.lazy(() => SortOrderSchema).optional(), values: z.lazy(() => SortOrderSchema).optional(), _count: z.lazy(() => ThreadsCountOrderByAggregateInputObjectSchema).optional(), _max: z.lazy(() => ThreadsMaxOrderByAggregateInputObjectSchema).optional(), _min: z.lazy(() => ThreadsMinOrderByAggregateInputObjectSchema).optional()
}).strict() as SchemaType;
