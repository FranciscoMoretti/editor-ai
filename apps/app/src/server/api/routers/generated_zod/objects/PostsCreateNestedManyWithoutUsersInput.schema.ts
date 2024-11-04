/* eslint-disable */
import { z } from 'zod';
import { PostsCreateWithoutUsersInputObjectSchema } from './PostsCreateWithoutUsersInput.schema';
import { PostsUncheckedCreateWithoutUsersInputObjectSchema } from './PostsUncheckedCreateWithoutUsersInput.schema';
import { PostsCreateOrConnectWithoutUsersInputObjectSchema } from './PostsCreateOrConnectWithoutUsersInput.schema';
import { PostsCreateManyUsersInputEnvelopeObjectSchema } from './PostsCreateManyUsersInputEnvelope.schema';
import { PostsWhereUniqueInputObjectSchema } from './PostsWhereUniqueInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.postsCreateNestedManyWithoutUsersInput>;
export const PostsCreateNestedManyWithoutUsersInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => PostsCreateWithoutUsersInputObjectSchema), z.lazy(() => PostsCreateWithoutUsersInputObjectSchema).array(), z.lazy(() => PostsUncheckedCreateWithoutUsersInputObjectSchema), z.lazy(() => PostsUncheckedCreateWithoutUsersInputObjectSchema).array()]).optional(), connectOrCreate: z.union([z.lazy(() => PostsCreateOrConnectWithoutUsersInputObjectSchema),
    z.lazy(() => PostsCreateOrConnectWithoutUsersInputObjectSchema).array()]).optional(), createMany: z.lazy(() => PostsCreateManyUsersInputEnvelopeObjectSchema).optional(), connect: z.union([z.lazy(() => PostsWhereUniqueInputObjectSchema),
    z.lazy(() => PostsWhereUniqueInputObjectSchema).array()]).optional()
}).strict() as SchemaType;
