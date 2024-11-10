/* eslint-disable */
import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.asssitantsMaxOrderByAggregateInput>;
export const AsssitantsMaxOrderByAggregateInputObjectSchema: SchemaType = z.object({
    assistant_id: z.lazy(() => SortOrderSchema).optional(), user_id: z.lazy(() => SortOrderSchema).optional(), graph_id: z.lazy(() => SortOrderSchema).optional(), config_id: z.lazy(() => SortOrderSchema).optional(), created_at: z.lazy(() => SortOrderSchema).optional(), updated_at: z.lazy(() => SortOrderSchema).optional(), version: z.lazy(() => SortOrderSchema).optional(), name: z.lazy(() => SortOrderSchema).optional()
}).strict() as SchemaType;
