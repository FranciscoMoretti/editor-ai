/* eslint-disable */
import { z } from 'zod';


import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.PostsMinAggregateInputType>;
export const PostsMinAggregateInputObjectSchema: SchemaType = z.object({
    id: z.literal(true).optional(), user_id: z.literal(true).optional(), title: z.literal(true).optional(), content: z.literal(true).optional(), created_at: z.literal(true).optional(), updated_at: z.literal(true).optional()
}).strict() as SchemaType;
