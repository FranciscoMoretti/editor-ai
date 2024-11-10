/* eslint-disable */
import { z } from 'zod';
import { RunsWhereInputObjectSchema } from './RunsWhereInput.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { UuidFilterObjectSchema } from './UuidFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { EnumRunStatusFilterObjectSchema } from './EnumRunStatusFilter.schema';
import { RunStatusSchema } from '../enums/RunStatus.schema';
import { JsonFilterObjectSchema } from './JsonFilter.schema';
import { EnumMultitaskStrategyFilterObjectSchema } from './EnumMultitaskStrategyFilter.schema';
import { MultitaskStrategySchema } from '../enums/MultitaskStrategy.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.runsWhereUniqueInput>;
export const RunsWhereUniqueInputObjectSchema: SchemaType = z.object({
    run_id: z.string().optional(), AND: z.union([z.lazy(() => RunsWhereInputObjectSchema),
    z.lazy(() => RunsWhereInputObjectSchema).array()]).optional(), OR: z.lazy(() => RunsWhereInputObjectSchema).array().optional(), NOT: z.union([z.lazy(() => RunsWhereInputObjectSchema),
    z.lazy(() => RunsWhereInputObjectSchema).array()]).optional(), user_id: z.union([z.lazy(() => StringFilterObjectSchema),
    z.string()]).optional(), thread_id: z.union([z.lazy(() => UuidFilterObjectSchema),
    z.string()]).optional(), assistant_id: z.union([z.lazy(() => UuidFilterObjectSchema),
    z.string()]).optional(), created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema),
    z.union([z.date(), z.string().datetime().optional()])]).optional(), updated_at: z.union([z.lazy(() => DateTimeFilterObjectSchema),
    z.union([z.date(), z.string().datetime().optional()])]).optional(), status: z.union([z.lazy(() => EnumRunStatusFilterObjectSchema),
    z.lazy(() => RunStatusSchema)]).optional(), metadata: z.lazy(() => JsonFilterObjectSchema).optional(), kwargs: z.lazy(() => JsonFilterObjectSchema).optional(), multitask_strategy: z.union([z.lazy(() => EnumMultitaskStrategyFilterObjectSchema),
    z.lazy(() => MultitaskStrategySchema)]).optional()
}).strict() as SchemaType;
