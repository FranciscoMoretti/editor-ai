/* eslint-disable */
import { z } from 'zod';
import { QueryModeSchema } from '../enums/QueryMode.schema';
import { NestedUuidFilterObjectSchema } from './NestedUuidFilter.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.UuidFilter>;
export const UuidFilterObjectSchema: SchemaType = z.object({
    equals: z.string().optional(), in: z.string().array().optional(), notIn: z.string().array().optional(), lt: z.string().optional(), lte: z.string().optional(), gt: z.string().optional(), gte: z.string().optional(), mode: z.lazy(() => QueryModeSchema).optional(), not: z.union([z.string(),
    z.lazy(() => NestedUuidFilterObjectSchema)]).optional()
}).strict() as SchemaType;
