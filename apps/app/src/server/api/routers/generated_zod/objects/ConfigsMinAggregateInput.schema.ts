/* eslint-disable */
import { z } from 'zod';


import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.ConfigsMinAggregateInputType>;
export const ConfigsMinAggregateInputObjectSchema: SchemaType = z.object({
    config_id: z.literal(true).optional(), recursion_limit: z.literal(true).optional()
}).strict() as SchemaType;
