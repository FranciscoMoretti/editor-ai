/* eslint-disable */
import { z } from 'zod';


import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.NestedDateTimeFilter>;
export const NestedDateTimeFilterObjectSchema: SchemaType = z.object({
    equals: z.union([z.date().optional(), z.string().datetime().optional()]), in: z.union([z.date().array().optional(), z.string().datetime().array().optional()]), notIn: z.union([z.date().array().optional(), z.string().datetime().array().optional()]), lt: z.union([z.date().optional(), z.string().datetime().optional()]), lte: z.union([z.date().optional(), z.string().datetime().optional()]), gt: z.union([z.date().optional(), z.string().datetime().optional()]), gte: z.union([z.date().optional(), z.string().datetime().optional()]), not: z.union([z.union([z.date(), z.string().datetime().optional()]),
    z.lazy(() => NestedDateTimeFilterObjectSchema)]).optional()
}).strict() as SchemaType;
