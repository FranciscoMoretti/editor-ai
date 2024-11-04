/* eslint-disable */
import { z } from 'zod';


import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.NestedIntNullableFilter>;
export const NestedIntNullableFilterObjectSchema: SchemaType = z.object({
    equals: z.union([z.number(),
    z.null()]).optional().nullable(), in: z.union([z.number().array(),
    z.null()]).optional().nullable(), notIn: z.union([z.number().array(),
    z.null()]).optional().nullable(), lt: z.number().optional(), lte: z.number().optional(), gt: z.number().optional(), gte: z.number().optional(), not: z.union([z.number(),
    z.lazy(() => NestedIntNullableFilterObjectSchema),
    z.null()]).optional().nullable()
}).strict() as SchemaType;
