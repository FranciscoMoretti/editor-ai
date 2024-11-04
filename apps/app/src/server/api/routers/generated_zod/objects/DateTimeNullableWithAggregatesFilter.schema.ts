/* eslint-disable */
import { z } from 'zod';
import { NestedDateTimeNullableWithAggregatesFilterObjectSchema } from './NestedDateTimeNullableWithAggregatesFilter.schema';
import { NestedIntNullableFilterObjectSchema } from './NestedIntNullableFilter.schema';
import { NestedDateTimeNullableFilterObjectSchema } from './NestedDateTimeNullableFilter.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.DateTimeNullableWithAggregatesFilter>;
export const DateTimeNullableWithAggregatesFilterObjectSchema: SchemaType = z.object({
    equals: z.union([z.union([z.date(), z.string().datetime().optional()]),
    z.null()]).optional().nullable(), in: z.union([z.union([z.date().array(), z.string().datetime().array().optional()]),
    z.null()]).optional().nullable(), notIn: z.union([z.union([z.date().array(), z.string().datetime().array().optional()]),
    z.null()]).optional().nullable(), lt: z.union([z.date().optional(), z.string().datetime().optional()]), lte: z.union([z.date().optional(), z.string().datetime().optional()]), gt: z.union([z.date().optional(), z.string().datetime().optional()]), gte: z.union([z.date().optional(), z.string().datetime().optional()]), not: z.union([z.union([z.date(), z.string().datetime().optional()]),
    z.lazy(() => NestedDateTimeNullableWithAggregatesFilterObjectSchema),
    z.null()]).optional().nullable(), _count: z.lazy(() => NestedIntNullableFilterObjectSchema).optional(), _min: z.lazy(() => NestedDateTimeNullableFilterObjectSchema).optional(), _max: z.lazy(() => NestedDateTimeNullableFilterObjectSchema).optional()
}).strict() as SchemaType;
