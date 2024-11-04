/* eslint-disable */
import { z } from 'zod';


import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.RunsCountAggregateInputType>;
export const RunsCountAggregateInputObjectSchema: SchemaType = z.object({
    run_id: z.literal(true).optional(), thread_id: z.literal(true).optional(), assistant_id: z.literal(true).optional(), created_at: z.literal(true).optional(), updated_at: z.literal(true).optional(), status: z.literal(true).optional(), metadata: z.literal(true).optional(), kwargs: z.literal(true).optional(), multitask_strategy: z.literal(true).optional(), _all: z.literal(true).optional()
}).strict() as SchemaType;
