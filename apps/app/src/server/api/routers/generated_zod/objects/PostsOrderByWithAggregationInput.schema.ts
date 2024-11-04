/* eslint-disable */
import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { PostsCountOrderByAggregateInputObjectSchema } from './PostsCountOrderByAggregateInput.schema';
import { PostsMaxOrderByAggregateInputObjectSchema } from './PostsMaxOrderByAggregateInput.schema';
import { PostsMinOrderByAggregateInputObjectSchema } from './PostsMinOrderByAggregateInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.postsOrderByWithAggregationInput>;
export const PostsOrderByWithAggregationInputObjectSchema: SchemaType = z.object({
    id: z.lazy(() => SortOrderSchema).optional(), user_id: z.lazy(() => SortOrderSchema).optional(), title: z.lazy(() => SortOrderSchema).optional(), content: z.lazy(() => SortOrderSchema).optional(), created_at: z.lazy(() => SortOrderSchema).optional(), updated_at: z.lazy(() => SortOrderSchema).optional(), _count: z.lazy(() => PostsCountOrderByAggregateInputObjectSchema).optional(), _max: z.lazy(() => PostsMaxOrderByAggregateInputObjectSchema).optional(), _min: z.lazy(() => PostsMinOrderByAggregateInputObjectSchema).optional()
}).strict() as SchemaType;
