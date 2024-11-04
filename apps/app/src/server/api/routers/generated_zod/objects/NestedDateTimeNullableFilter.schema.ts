/* eslint-disable */
import { z } from 'zod';


import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.NestedDateTimeNullableFilter>;
export const NestedDateTimeNullableFilterObjectSchema: SchemaType = z.object({
    equals: z.union([z.union([z.date(), z.string().datetime().optional()]),
    z.null()]).optional().nullable(), in: z.union([z.union([z.date().array(), z.string().datetime().array().optional()]),
    z.null()]).optional().nullable(), notIn: z.union([z.union([z.date().array(), z.string().datetime().array().optional()]),
    z.null()]).optional().nullable(), lt: z.union([z.date().optional(), z.string().datetime().optional()]), lte: z.union([z.date().optional(), z.string().datetime().optional()]), gt: z.union([z.date().optional(), z.string().datetime().optional()]), gte: z.union([z.date().optional(), z.string().datetime().optional()]), not: z.union([z.union([z.date(), z.string().datetime().optional()]),
    z.lazy(() => NestedDateTimeNullableFilterObjectSchema),
    z.null()]).optional().nullable()
}).strict() as SchemaType;
