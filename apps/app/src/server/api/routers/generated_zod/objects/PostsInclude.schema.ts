/* eslint-disable */
import { z } from 'zod';
import { UsersArgsObjectSchema } from './UsersArgs.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.postsInclude>;
export const PostsIncludeObjectSchema: SchemaType = z.object({
    users: z.union([z.boolean(),
    z.lazy(() => UsersArgsObjectSchema)]).optional()
}).strict() as SchemaType;
