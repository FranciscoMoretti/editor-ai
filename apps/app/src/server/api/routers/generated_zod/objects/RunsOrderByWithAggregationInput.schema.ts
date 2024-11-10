/* eslint-disable */
import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { RunsCountOrderByAggregateInputObjectSchema } from './RunsCountOrderByAggregateInput.schema';
import { RunsMaxOrderByAggregateInputObjectSchema } from './RunsMaxOrderByAggregateInput.schema';
import { RunsMinOrderByAggregateInputObjectSchema } from './RunsMinOrderByAggregateInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.runsOrderByWithAggregationInput>;
export const RunsOrderByWithAggregationInputObjectSchema: SchemaType = z.object({
    run_id: z.lazy(() => SortOrderSchema).optional(), user_id: z.lazy(() => SortOrderSchema).optional(), thread_id: z.lazy(() => SortOrderSchema).optional(), assistant_id: z.lazy(() => SortOrderSchema).optional(), created_at: z.lazy(() => SortOrderSchema).optional(), updated_at: z.lazy(() => SortOrderSchema).optional(), status: z.lazy(() => SortOrderSchema).optional(), metadata: z.lazy(() => SortOrderSchema).optional(), kwargs: z.lazy(() => SortOrderSchema).optional(), multitask_strategy: z.lazy(() => SortOrderSchema).optional(), _count: z.lazy(() => RunsCountOrderByAggregateInputObjectSchema).optional(), _max: z.lazy(() => RunsMaxOrderByAggregateInputObjectSchema).optional(), _min: z.lazy(() => RunsMinOrderByAggregateInputObjectSchema).optional()
}).strict() as SchemaType;
