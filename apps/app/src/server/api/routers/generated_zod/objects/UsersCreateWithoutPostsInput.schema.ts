/* eslint-disable */
import { z } from 'zod';
import { AsssitantCreateNestedManyWithoutUsersInputObjectSchema } from './AsssitantCreateNestedManyWithoutUsersInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.usersCreateWithoutPostsInput>;
export const UsersCreateWithoutPostsInputObjectSchema: SchemaType = z.object({
    id: z.string(), email: z.string(), full_name: z.union([z.string(),
    z.null()]).optional().nullable(), avatar_url: z.union([z.string(),
    z.null()]).optional().nullable(), created_at: z.union([z.union([z.date(), z.string().datetime().optional()]),
    z.null()]).optional().nullable(), updated_at: z.union([z.union([z.date(), z.string().datetime().optional()]),
    z.null()]).optional().nullable(), assistants: z.lazy(() => AsssitantCreateNestedManyWithoutUsersInputObjectSchema).optional()
}).strict() as SchemaType;
