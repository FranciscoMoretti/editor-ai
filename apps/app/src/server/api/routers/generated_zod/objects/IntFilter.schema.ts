/* eslint-disable */
import { z } from 'zod';
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.IntFilter>;
export const IntFilterObjectSchema: SchemaType = z.object({
    equals: z.number().optional(), in: z.number().array().optional(), notIn: z.number().array().optional(), lt: z.number().optional(), lte: z.number().optional(), gt: z.number().optional(), gte: z.number().optional(), not: z.union([z.number(),
    z.lazy(() => NestedIntFilterObjectSchema)]).optional()
}).strict() as SchemaType;
