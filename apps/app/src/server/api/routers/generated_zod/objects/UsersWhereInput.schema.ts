/* eslint-disable */
import { z } from 'zod';
import { UuidFilterObjectSchema } from './UuidFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { PostsListRelationFilterObjectSchema } from './PostsListRelationFilter.schema';
import { AsssitantsListRelationFilterObjectSchema } from './AsssitantsListRelationFilter.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.usersWhereInput>;
export const UsersWhereInputObjectSchema: SchemaType = z.object({
    AND: z.union([z.lazy(() => UsersWhereInputObjectSchema),
    z.lazy(() => UsersWhereInputObjectSchema).array()]).optional(), OR: z.lazy(() => UsersWhereInputObjectSchema).array().optional(), NOT: z.union([z.lazy(() => UsersWhereInputObjectSchema),
    z.lazy(() => UsersWhereInputObjectSchema).array()]).optional(), id: z.union([z.lazy(() => UuidFilterObjectSchema),
    z.string()]).optional(), email: z.union([z.lazy(() => StringFilterObjectSchema),
    z.string()]).optional(), full_name: z.union([z.lazy(() => StringNullableFilterObjectSchema),
    z.string(),
    z.null()]).optional().nullable(), avatar_url: z.union([z.lazy(() => StringNullableFilterObjectSchema),
    z.string(),
    z.null()]).optional().nullable(), created_at: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema),
    z.union([z.date(), z.string().datetime().optional()]),
    z.null()]).optional().nullable(), updated_at: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema),
    z.union([z.date(), z.string().datetime().optional()]),
    z.null()]).optional().nullable(), posts: z.lazy(() => PostsListRelationFilterObjectSchema).optional(), assistants: z.lazy(() => AsssitantsListRelationFilterObjectSchema).optional()
}).strict() as SchemaType;
