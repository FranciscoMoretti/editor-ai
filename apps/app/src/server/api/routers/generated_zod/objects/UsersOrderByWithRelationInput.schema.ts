/* eslint-disable */
import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { PostsOrderByRelationAggregateInputObjectSchema } from './PostsOrderByRelationAggregateInput.schema';
import { AsssitantsOrderByRelationAggregateInputObjectSchema } from './AsssitantsOrderByRelationAggregateInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.usersOrderByWithRelationInput>;
export const UsersOrderByWithRelationInputObjectSchema: SchemaType = z.object({
    id: z.lazy(() => SortOrderSchema).optional(), email: z.lazy(() => SortOrderSchema).optional(), full_name: z.union([z.lazy(() => SortOrderSchema),
    z.lazy(() => SortOrderInputObjectSchema)]).optional(), avatar_url: z.union([z.lazy(() => SortOrderSchema),
    z.lazy(() => SortOrderInputObjectSchema)]).optional(), created_at: z.union([z.lazy(() => SortOrderSchema),
    z.lazy(() => SortOrderInputObjectSchema)]).optional(), updated_at: z.union([z.lazy(() => SortOrderSchema),
    z.lazy(() => SortOrderInputObjectSchema)]).optional(), posts: z.lazy(() => PostsOrderByRelationAggregateInputObjectSchema).optional(), assistants: z.lazy(() => AsssitantsOrderByRelationAggregateInputObjectSchema).optional()
}).strict() as SchemaType;
