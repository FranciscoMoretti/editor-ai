/* eslint-disable */
import { z } from 'zod';
import { RunStatusSchema } from '../enums/RunStatus.schema';
import { NestedEnumRunStatusFilterObjectSchema } from './NestedEnumRunStatusFilter.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.EnumRunStatusFilter>;
export const EnumRunStatusFilterObjectSchema: SchemaType = z.object({
    equals: z.lazy(() => RunStatusSchema).optional(), in: z.lazy(() => RunStatusSchema).array().optional(), notIn: z.lazy(() => RunStatusSchema).array().optional(), not: z.union([z.lazy(() => RunStatusSchema),
    z.lazy(() => NestedEnumRunStatusFilterObjectSchema)]).optional()
}).strict() as SchemaType;
