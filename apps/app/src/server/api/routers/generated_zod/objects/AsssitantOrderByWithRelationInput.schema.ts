/* eslint-disable */
import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ConfigsOrderByWithRelationInputObjectSchema } from './ConfigsOrderByWithRelationInput.schema';
import { UsersOrderByWithRelationInputObjectSchema } from './UsersOrderByWithRelationInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.asssitantOrderByWithRelationInput>;
export const AsssitantOrderByWithRelationInputObjectSchema: SchemaType = z.object({
    assistant_id: z.lazy(() => SortOrderSchema).optional(), graph_id: z.lazy(() => SortOrderSchema).optional(), config_id: z.lazy(() => SortOrderSchema).optional(), created_at: z.lazy(() => SortOrderSchema).optional(), updated_at: z.lazy(() => SortOrderSchema).optional(), metadata: z.lazy(() => SortOrderSchema).optional(), version: z.lazy(() => SortOrderSchema).optional(), name: z.lazy(() => SortOrderSchema).optional(), user_id: z.lazy(() => SortOrderSchema).optional(), config: z.lazy(() => ConfigsOrderByWithRelationInputObjectSchema).optional(), users: z.lazy(() => UsersOrderByWithRelationInputObjectSchema).optional()
}).strict() as SchemaType;
