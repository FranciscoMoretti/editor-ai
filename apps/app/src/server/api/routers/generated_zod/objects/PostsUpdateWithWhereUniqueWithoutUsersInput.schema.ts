/* eslint-disable */
import { z } from 'zod';
import { PostsWhereUniqueInputObjectSchema } from './PostsWhereUniqueInput.schema';
import { PostsUpdateWithoutUsersInputObjectSchema } from './PostsUpdateWithoutUsersInput.schema';
import { PostsUncheckedUpdateWithoutUsersInputObjectSchema } from './PostsUncheckedUpdateWithoutUsersInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.postsUpdateWithWhereUniqueWithoutUsersInput>;
export const PostsUpdateWithWhereUniqueWithoutUsersInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => PostsWhereUniqueInputObjectSchema), data: z.union([z.lazy(() => PostsUpdateWithoutUsersInputObjectSchema), z.lazy(() => PostsUncheckedUpdateWithoutUsersInputObjectSchema)])
}).strict() as SchemaType;
