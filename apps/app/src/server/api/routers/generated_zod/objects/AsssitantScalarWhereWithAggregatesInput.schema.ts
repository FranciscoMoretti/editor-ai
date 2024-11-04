/* eslint-disable */
import { z } from 'zod';
import { UuidWithAggregatesFilterObjectSchema } from './UuidWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';
import { JsonWithAggregatesFilterObjectSchema } from './JsonWithAggregatesFilter.schema';
import { IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.asssitantScalarWhereWithAggregatesInput>;
export const AsssitantScalarWhereWithAggregatesInputObjectSchema: SchemaType = z.object({
    AND: z.union([z.lazy(() => AsssitantScalarWhereWithAggregatesInputObjectSchema),
    z.lazy(() => AsssitantScalarWhereWithAggregatesInputObjectSchema).array()]).optional(), OR: z.lazy(() => AsssitantScalarWhereWithAggregatesInputObjectSchema).array().optional(), NOT: z.union([z.lazy(() => AsssitantScalarWhereWithAggregatesInputObjectSchema),
    z.lazy(() => AsssitantScalarWhereWithAggregatesInputObjectSchema).array()]).optional(), assistant_id: z.union([z.lazy(() => UuidWithAggregatesFilterObjectSchema),
    z.string()]).optional(), graph_id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema),
    z.string()]).optional(), config_id: z.union([z.lazy(() => UuidWithAggregatesFilterObjectSchema),
    z.string()]).optional(), created_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema),
    z.union([z.date(), z.string().datetime().optional()])]).optional(), updated_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema),
    z.union([z.date(), z.string().datetime().optional()])]).optional(), metadata: z.lazy(() => JsonWithAggregatesFilterObjectSchema).optional(), version: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema),
    z.number()]).optional(), name: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema),
    z.string()]).optional(), user_id: z.union([z.lazy(() => UuidWithAggregatesFilterObjectSchema),
    z.string()]).optional()
}).strict() as SchemaType;
