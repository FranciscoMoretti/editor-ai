/* eslint-disable */
import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.configsSumOrderByAggregateInput>;
export const ConfigsSumOrderByAggregateInputObjectSchema: SchemaType = z.object({
    recursion_limit: z.lazy(() => SortOrderSchema).optional()
}).strict() as SchemaType;
