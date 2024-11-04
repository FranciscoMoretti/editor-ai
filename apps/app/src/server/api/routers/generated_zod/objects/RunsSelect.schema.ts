/* eslint-disable */
import { z } from 'zod';


import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.runsSelect>;
export const RunsSelectObjectSchema: SchemaType = z.object({
    run_id: z.boolean().optional(), thread_id: z.boolean().optional(), assistant_id: z.boolean().optional(), created_at: z.boolean().optional(), updated_at: z.boolean().optional(), status: z.boolean().optional(), metadata: z.boolean().optional(), kwargs: z.boolean().optional(), multitask_strategy: z.boolean().optional()
}).strict() as SchemaType;
