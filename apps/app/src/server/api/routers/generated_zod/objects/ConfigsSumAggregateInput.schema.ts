/* eslint-disable */
import { z } from 'zod';


import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.ConfigsSumAggregateInputType>;
export const ConfigsSumAggregateInputObjectSchema: SchemaType = z.object({
    recursion_limit: z.literal(true).optional()
}).strict() as SchemaType;
