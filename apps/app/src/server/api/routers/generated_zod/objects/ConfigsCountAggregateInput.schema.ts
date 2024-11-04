/* eslint-disable */
import { z } from 'zod';


import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.ConfigsCountAggregateInputType>;
export const ConfigsCountAggregateInputObjectSchema: SchemaType = z.object({
    config_id: z.literal(true).optional(), tags: z.literal(true).optional(), recursion_limit: z.literal(true).optional(), configurable: z.literal(true).optional(), _all: z.literal(true).optional()
}).strict() as SchemaType;
