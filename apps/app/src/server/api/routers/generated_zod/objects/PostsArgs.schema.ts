/* eslint-disable */
import { z } from 'zod';
import { PostsSelectObjectSchema } from './PostsSelect.schema';
import { PostsIncludeObjectSchema } from './PostsInclude.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.postsArgs>;
export const PostsArgsObjectSchema: SchemaType = z.object({
    select: z.lazy(() => PostsSelectObjectSchema).optional(), include: z.lazy(() => PostsIncludeObjectSchema).optional()
}).strict() as SchemaType;
