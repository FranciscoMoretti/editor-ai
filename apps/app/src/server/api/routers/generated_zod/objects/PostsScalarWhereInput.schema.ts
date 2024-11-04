/* eslint-disable */
import { z } from 'zod';
import { UuidFilterObjectSchema } from './UuidFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.postsScalarWhereInput>;
export const PostsScalarWhereInputObjectSchema: SchemaType = z.object({
    AND: z.union([z.lazy(() => PostsScalarWhereInputObjectSchema),
    z.lazy(() => PostsScalarWhereInputObjectSchema).array()]).optional(), OR: z.lazy(() => PostsScalarWhereInputObjectSchema).array().optional(), NOT: z.union([z.lazy(() => PostsScalarWhereInputObjectSchema),
    z.lazy(() => PostsScalarWhereInputObjectSchema).array()]).optional(), id: z.union([z.lazy(() => UuidFilterObjectSchema),
    z.string()]).optional(), user_id: z.union([z.lazy(() => UuidFilterObjectSchema),
    z.string()]).optional(), title: z.union([z.lazy(() => StringFilterObjectSchema),
    z.string()]).optional(), content: z.union([z.lazy(() => StringFilterObjectSchema),
    z.string()]).optional(), created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema),
    z.union([z.date(), z.string().datetime().optional()])]).optional(), updated_at: z.union([z.lazy(() => DateTimeFilterObjectSchema),
    z.union([z.date(), z.string().datetime().optional()])]).optional()
}).strict() as SchemaType;
