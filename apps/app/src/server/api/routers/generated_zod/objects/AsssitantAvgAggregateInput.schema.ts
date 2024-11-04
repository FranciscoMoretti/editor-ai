/* eslint-disable */
import { z } from 'zod';


import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.AsssitantAvgAggregateInputType>;
export const AsssitantAvgAggregateInputObjectSchema: SchemaType = z.object({
    version: z.literal(true).optional()
}).strict() as SchemaType;
