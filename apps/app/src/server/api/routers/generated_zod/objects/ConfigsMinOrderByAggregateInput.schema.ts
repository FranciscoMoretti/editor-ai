/* eslint-disable */
import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.configsMinOrderByAggregateInput>;
export const ConfigsMinOrderByAggregateInputObjectSchema: SchemaType = z.object({
    config_id: z.lazy(() => SortOrderSchema).optional(), recursion_limit: z.lazy(() => SortOrderSchema).optional()
}).strict() as SchemaType;
