/* eslint-disable */
import { z } from 'zod';


import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.ThreadsMaxAggregateInputType>;
export const ThreadsMaxAggregateInputObjectSchema: SchemaType = z.object({
    thread_id: z.literal(true).optional(), created_at: z.literal(true).optional(), updated_at: z.literal(true).optional(), status: z.literal(true).optional()
}).strict() as SchemaType;
