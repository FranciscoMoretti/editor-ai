/* eslint-disable */
import { z } from 'zod';


import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.UsersCountAggregateInputType>;
export const UsersCountAggregateInputObjectSchema: SchemaType = z.object({
    id: z.literal(true).optional(), email: z.literal(true).optional(), full_name: z.literal(true).optional(), avatar_url: z.literal(true).optional(), created_at: z.literal(true).optional(), updated_at: z.literal(true).optional(), _all: z.literal(true).optional()
}).strict() as SchemaType;
