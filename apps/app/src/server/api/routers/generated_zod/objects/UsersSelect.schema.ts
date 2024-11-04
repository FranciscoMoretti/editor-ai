/* eslint-disable */
import { z } from 'zod';
import { PostsInputSchema } from '../input/PostsInput.schema';
import { AsssitantInputSchema } from '../input/AsssitantInput.schema';
import { UsersCountOutputTypeArgsObjectSchema } from './UsersCountOutputTypeArgs.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.usersSelect>;
export const UsersSelectObjectSchema: SchemaType = z.object({
    id: z.boolean().optional(), email: z.boolean().optional(), full_name: z.boolean().optional(), avatar_url: z.boolean().optional(), created_at: z.boolean().optional(), updated_at: z.boolean().optional(), posts: z.union([z.boolean(),
    z.lazy(() => PostsInputSchema.findMany)]).optional(), assistants: z.union([z.boolean(),
    z.lazy(() => AsssitantInputSchema.findMany)]).optional(), _count: z.union([z.boolean(),
    z.lazy(() => UsersCountOutputTypeArgsObjectSchema)]).optional()
}).strict() as SchemaType;
