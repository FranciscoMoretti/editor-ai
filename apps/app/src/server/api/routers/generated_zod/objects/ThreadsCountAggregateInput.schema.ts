/* eslint-disable */
import { z } from 'zod';


import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.ThreadsCountAggregateInputType>;
export const ThreadsCountAggregateInputObjectSchema: SchemaType = z.object({
    thread_id: z.literal(true).optional(), created_at: z.literal(true).optional(), updated_at: z.literal(true).optional(), metadata: z.literal(true).optional(), status: z.literal(true).optional(), values: z.literal(true).optional(), _all: z.literal(true).optional()
}).strict() as SchemaType;
