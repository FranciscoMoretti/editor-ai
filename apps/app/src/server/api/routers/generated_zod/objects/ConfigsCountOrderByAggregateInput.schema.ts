/* eslint-disable */
import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.configsCountOrderByAggregateInput>;
export const ConfigsCountOrderByAggregateInputObjectSchema: SchemaType = z.object({
    config_id: z.lazy(() => SortOrderSchema).optional(), user_id: z.lazy(() => SortOrderSchema).optional(), tags: z.lazy(() => SortOrderSchema).optional(), recursion_limit: z.lazy(() => SortOrderSchema).optional(), configurable: z.lazy(() => SortOrderSchema).optional()
}).strict() as SchemaType;
