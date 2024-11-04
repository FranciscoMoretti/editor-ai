/* eslint-disable */
import { z } from 'zod';
import { UuidWithAggregatesFilterObjectSchema } from './UuidWithAggregatesFilter.schema';
import { StringNullableListFilterObjectSchema } from './StringNullableListFilter.schema';
import { IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { JsonWithAggregatesFilterObjectSchema } from './JsonWithAggregatesFilter.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.configsScalarWhereWithAggregatesInput>;
export const ConfigsScalarWhereWithAggregatesInputObjectSchema: SchemaType = z.object({
    AND: z.union([z.lazy(() => ConfigsScalarWhereWithAggregatesInputObjectSchema),
    z.lazy(() => ConfigsScalarWhereWithAggregatesInputObjectSchema).array()]).optional(), OR: z.lazy(() => ConfigsScalarWhereWithAggregatesInputObjectSchema).array().optional(), NOT: z.union([z.lazy(() => ConfigsScalarWhereWithAggregatesInputObjectSchema),
    z.lazy(() => ConfigsScalarWhereWithAggregatesInputObjectSchema).array()]).optional(), config_id: z.union([z.lazy(() => UuidWithAggregatesFilterObjectSchema),
    z.string()]).optional(), tags: z.lazy(() => StringNullableListFilterObjectSchema).optional(), recursion_limit: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema),
    z.number()]).optional(), configurable: z.lazy(() => JsonWithAggregatesFilterObjectSchema).optional()
}).strict() as SchemaType;
