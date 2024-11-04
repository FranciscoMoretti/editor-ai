/* eslint-disable */
import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { AsssitantOrderByRelationAggregateInputObjectSchema } from './AsssitantOrderByRelationAggregateInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.configsOrderByWithRelationInput>;
export const ConfigsOrderByWithRelationInputObjectSchema: SchemaType = z.object({
    config_id: z.lazy(() => SortOrderSchema).optional(), tags: z.lazy(() => SortOrderSchema).optional(), recursion_limit: z.lazy(() => SortOrderSchema).optional(), configurable: z.lazy(() => SortOrderSchema).optional(), assistants: z.lazy(() => AsssitantOrderByRelationAggregateInputObjectSchema).optional()
}).strict() as SchemaType;
