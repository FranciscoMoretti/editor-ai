/* eslint-disable */
import { z } from 'zod';
import { UuidFilterObjectSchema } from './UuidFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { JsonFilterObjectSchema } from './JsonFilter.schema';
import { IntFilterObjectSchema } from './IntFilter.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.asssitantScalarWhereInput>;
export const AsssitantScalarWhereInputObjectSchema: SchemaType = z.object({
    AND: z.union([z.lazy(() => AsssitantScalarWhereInputObjectSchema),
    z.lazy(() => AsssitantScalarWhereInputObjectSchema).array()]).optional(), OR: z.lazy(() => AsssitantScalarWhereInputObjectSchema).array().optional(), NOT: z.union([z.lazy(() => AsssitantScalarWhereInputObjectSchema),
    z.lazy(() => AsssitantScalarWhereInputObjectSchema).array()]).optional(), assistant_id: z.union([z.lazy(() => UuidFilterObjectSchema),
    z.string()]).optional(), graph_id: z.union([z.lazy(() => StringFilterObjectSchema),
    z.string()]).optional(), config_id: z.union([z.lazy(() => UuidFilterObjectSchema),
    z.string()]).optional(), created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema),
    z.union([z.date(), z.string().datetime().optional()])]).optional(), updated_at: z.union([z.lazy(() => DateTimeFilterObjectSchema),
    z.union([z.date(), z.string().datetime().optional()])]).optional(), metadata: z.lazy(() => JsonFilterObjectSchema).optional(), version: z.union([z.lazy(() => IntFilterObjectSchema),
    z.number()]).optional(), name: z.union([z.lazy(() => StringFilterObjectSchema),
    z.string()]).optional(), user_id: z.union([z.lazy(() => UuidFilterObjectSchema),
    z.string()]).optional()
}).strict() as SchemaType;
