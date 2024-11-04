/* eslint-disable */
import { z } from 'zod';
import { MultitaskStrategySchema } from '../enums/MultitaskStrategy.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.NestedEnumMultitaskStrategyFilter>;
export const NestedEnumMultitaskStrategyFilterObjectSchema: SchemaType = z.object({
    equals: z.lazy(() => MultitaskStrategySchema).optional(), in: z.lazy(() => MultitaskStrategySchema).array().optional(), notIn: z.lazy(() => MultitaskStrategySchema).array().optional(), not: z.union([z.lazy(() => MultitaskStrategySchema),
    z.lazy(() => NestedEnumMultitaskStrategyFilterObjectSchema)]).optional()
}).strict() as SchemaType;
