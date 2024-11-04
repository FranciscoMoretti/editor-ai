/* eslint-disable */
import { z } from 'zod';
import { PostsWhereInputObjectSchema } from './PostsWhereInput.schema';
import { UuidFilterObjectSchema } from './UuidFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { UsersRelationFilterObjectSchema } from './UsersRelationFilter.schema';
import { UsersWhereInputObjectSchema } from './UsersWhereInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.postsWhereUniqueInput>;
export const PostsWhereUniqueInputObjectSchema: SchemaType = z.object({
    id: z.string().optional(), AND: z.union([z.lazy(() => PostsWhereInputObjectSchema),
    z.lazy(() => PostsWhereInputObjectSchema).array()]).optional(), OR: z.lazy(() => PostsWhereInputObjectSchema).array().optional(), NOT: z.union([z.lazy(() => PostsWhereInputObjectSchema),
    z.lazy(() => PostsWhereInputObjectSchema).array()]).optional(), user_id: z.union([z.lazy(() => UuidFilterObjectSchema),
    z.string()]).optional(), title: z.union([z.lazy(() => StringFilterObjectSchema),
    z.string()]).optional(), content: z.union([z.lazy(() => StringFilterObjectSchema),
    z.string()]).optional(), created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema),
    z.union([z.date(), z.string().datetime().optional()])]).optional(), updated_at: z.union([z.lazy(() => DateTimeFilterObjectSchema),
    z.union([z.date(), z.string().datetime().optional()])]).optional(), users: z.union([z.lazy(() => UsersRelationFilterObjectSchema),
    z.lazy(() => UsersWhereInputObjectSchema)]).optional()
}).strict() as SchemaType;
