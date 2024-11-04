/* eslint-disable */
import { z } from 'zod';
import { UuidFilterObjectSchema } from './UuidFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { JsonFilterObjectSchema } from './JsonFilter.schema';
import { EnumThreadStatusFilterObjectSchema } from './EnumThreadStatusFilter.schema';
import { ThreadStatusSchema } from '../enums/ThreadStatus.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.threadsWhereInput>;
export const ThreadsWhereInputObjectSchema: SchemaType = z.object({
    AND: z.union([z.lazy(() => ThreadsWhereInputObjectSchema),
    z.lazy(() => ThreadsWhereInputObjectSchema).array()]).optional(), OR: z.lazy(() => ThreadsWhereInputObjectSchema).array().optional(), NOT: z.union([z.lazy(() => ThreadsWhereInputObjectSchema),
    z.lazy(() => ThreadsWhereInputObjectSchema).array()]).optional(), thread_id: z.union([z.lazy(() => UuidFilterObjectSchema),
    z.string()]).optional(), created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema),
    z.union([z.date(), z.string().datetime().optional()])]).optional(), updated_at: z.union([z.lazy(() => DateTimeFilterObjectSchema),
    z.union([z.date(), z.string().datetime().optional()])]).optional(), metadata: z.lazy(() => JsonFilterObjectSchema).optional(), status: z.union([z.lazy(() => EnumThreadStatusFilterObjectSchema),
    z.lazy(() => ThreadStatusSchema)]).optional(), values: z.lazy(() => JsonFilterObjectSchema).optional()
}).strict() as SchemaType;
