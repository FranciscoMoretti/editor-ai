/* eslint-disable */
import { z } from 'zod';


import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.NestedIntFilter>;
export const NestedIntFilterObjectSchema: SchemaType = z.object({
    equals: z.number().optional(), in: z.number().array().optional(), notIn: z.number().array().optional(), lt: z.number().optional(), lte: z.number().optional(), gt: z.number().optional(), gte: z.number().optional(), not: z.union([z.number(),
    z.lazy(() => NestedIntFilterObjectSchema)]).optional()
}).strict() as SchemaType;
