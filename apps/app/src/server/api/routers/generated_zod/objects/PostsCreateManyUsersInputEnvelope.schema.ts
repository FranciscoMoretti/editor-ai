/* eslint-disable */
import { z } from 'zod';
import { PostsCreateManyUsersInputObjectSchema } from './PostsCreateManyUsersInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.postsCreateManyUsersInputEnvelope>;
export const PostsCreateManyUsersInputEnvelopeObjectSchema: SchemaType = z.object({
    data: z.union([z.lazy(() => PostsCreateManyUsersInputObjectSchema),
    z.lazy(() => PostsCreateManyUsersInputObjectSchema).array()]), skipDuplicates: z.boolean().optional()
}).strict() as SchemaType;
