/* eslint-disable */
import { z } from 'zod';
import { PostsCreateNestedManyWithoutUsersInputObjectSchema } from './PostsCreateNestedManyWithoutUsersInput.schema';
import { AsssitantsCreateNestedManyWithoutUsersInputObjectSchema } from './AsssitantsCreateNestedManyWithoutUsersInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.usersCreateInput>;
export const UsersCreateInputObjectSchema: SchemaType = z.object({
    id: z.string(), email: z.string(), full_name: z.union([z.string(),
    z.null()]).optional().nullable(), avatar_url: z.union([z.string(),
    z.null()]).optional().nullable(), created_at: z.union([z.union([z.date(), z.string().datetime().optional()]),
    z.null()]).optional().nullable(), updated_at: z.union([z.union([z.date(), z.string().datetime().optional()]),
    z.null()]).optional().nullable(), posts: z.lazy(() => PostsCreateNestedManyWithoutUsersInputObjectSchema).optional(), assistants: z.lazy(() => AsssitantsCreateNestedManyWithoutUsersInputObjectSchema).optional()
}).strict() as SchemaType;
