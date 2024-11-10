/* eslint-disable */
import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.asssitantsAvgOrderByAggregateInput>;
export const AsssitantsAvgOrderByAggregateInputObjectSchema: SchemaType = z.object({
    version: z.lazy(() => SortOrderSchema).optional()
}).strict() as SchemaType;
