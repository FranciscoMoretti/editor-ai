/* eslint-disable */
import { z } from 'zod';


import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.NestedStringNullableFilter>;
export const NestedStringNullableFilterObjectSchema: SchemaType = z.object({
    equals: z.union([z.string(),
    z.null()]).optional().nullable(), in: z.union([z.string().array(),
    z.null()]).optional().nullable(), notIn: z.union([z.string().array(),
    z.null()]).optional().nullable(), lt: z.string().optional(), lte: z.string().optional(), gt: z.string().optional(), gte: z.string().optional(), contains: z.string().optional(), startsWith: z.string().optional(), endsWith: z.string().optional(), not: z.union([z.string(),
    z.lazy(() => NestedStringNullableFilterObjectSchema),
    z.null()]).optional().nullable()
}).strict() as SchemaType;
