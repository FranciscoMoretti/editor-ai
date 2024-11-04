/* eslint-disable */
import { z } from 'zod';
import { UuidFilterObjectSchema } from './UuidFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { JsonFilterObjectSchema } from './JsonFilter.schema';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { ConfigsRelationFilterObjectSchema } from './ConfigsRelationFilter.schema';
import { ConfigsWhereInputObjectSchema } from './ConfigsWhereInput.schema';
import { UsersRelationFilterObjectSchema } from './UsersRelationFilter.schema';
import { UsersWhereInputObjectSchema } from './UsersWhereInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.asssitantWhereInput>;
export const AsssitantWhereInputObjectSchema: SchemaType = z.object({
    AND: z.union([z.lazy(() => AsssitantWhereInputObjectSchema),
    z.lazy(() => AsssitantWhereInputObjectSchema).array()]).optional(), OR: z.lazy(() => AsssitantWhereInputObjectSchema).array().optional(), NOT: z.union([z.lazy(() => AsssitantWhereInputObjectSchema),
    z.lazy(() => AsssitantWhereInputObjectSchema).array()]).optional(), assistant_id: z.union([z.lazy(() => UuidFilterObjectSchema),
    z.string()]).optional(), graph_id: z.union([z.lazy(() => StringFilterObjectSchema),
    z.string()]).optional(), config_id: z.union([z.lazy(() => UuidFilterObjectSchema),
    z.string()]).optional(), created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema),
    z.union([z.date(), z.string().datetime().optional()])]).optional(), updated_at: z.union([z.lazy(() => DateTimeFilterObjectSchema),
    z.union([z.date(), z.string().datetime().optional()])]).optional(), metadata: z.lazy(() => JsonFilterObjectSchema).optional(), version: z.union([z.lazy(() => IntFilterObjectSchema),
    z.number()]).optional(), name: z.union([z.lazy(() => StringFilterObjectSchema),
    z.string()]).optional(), user_id: z.union([z.lazy(() => UuidFilterObjectSchema),
    z.string()]).optional(), config: z.union([z.lazy(() => ConfigsRelationFilterObjectSchema),
    z.lazy(() => ConfigsWhereInputObjectSchema)]).optional(), users: z.union([z.lazy(() => UsersRelationFilterObjectSchema),
    z.lazy(() => UsersWhereInputObjectSchema)]).optional()
}).strict() as SchemaType;
