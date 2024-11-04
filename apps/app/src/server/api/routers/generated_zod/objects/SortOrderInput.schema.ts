/* eslint-disable */
import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { NullsOrderSchema } from '../enums/NullsOrder.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.SortOrderInput>;
export const SortOrderInputObjectSchema: SchemaType = z.object({
    sort: z.lazy(() => SortOrderSchema), nulls: z.lazy(() => NullsOrderSchema).optional()
}).strict() as SchemaType;
