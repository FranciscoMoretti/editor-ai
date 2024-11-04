/* eslint-disable */
import { z } from 'zod';


import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.AsssitantSumAggregateInputType>;
export const AsssitantSumAggregateInputObjectSchema: SchemaType = z.object({
    version: z.literal(true).optional()
}).strict() as SchemaType;
