/* eslint-disable */
import { z } from 'zod';
import { PostsCreateWithoutUsersInputObjectSchema } from './PostsCreateWithoutUsersInput.schema';
import { PostsUncheckedCreateWithoutUsersInputObjectSchema } from './PostsUncheckedCreateWithoutUsersInput.schema';
import { PostsCreateOrConnectWithoutUsersInputObjectSchema } from './PostsCreateOrConnectWithoutUsersInput.schema';
import { PostsUpsertWithWhereUniqueWithoutUsersInputObjectSchema } from './PostsUpsertWithWhereUniqueWithoutUsersInput.schema';
import { PostsCreateManyUsersInputEnvelopeObjectSchema } from './PostsCreateManyUsersInputEnvelope.schema';
import { PostsWhereUniqueInputObjectSchema } from './PostsWhereUniqueInput.schema';
import { PostsUpdateWithWhereUniqueWithoutUsersInputObjectSchema } from './PostsUpdateWithWhereUniqueWithoutUsersInput.schema';
import { PostsUpdateManyWithWhereWithoutUsersInputObjectSchema } from './PostsUpdateManyWithWhereWithoutUsersInput.schema';
import { PostsScalarWhereInputObjectSchema } from './PostsScalarWhereInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.postsUncheckedUpdateManyWithoutUsersNestedInput>;
export const PostsUncheckedUpdateManyWithoutUsersNestedInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => PostsCreateWithoutUsersInputObjectSchema), z.lazy(() => PostsCreateWithoutUsersInputObjectSchema).array(), z.lazy(() => PostsUncheckedCreateWithoutUsersInputObjectSchema), z.lazy(() => PostsUncheckedCreateWithoutUsersInputObjectSchema).array()]).optional(), connectOrCreate: z.union([z.lazy(() => PostsCreateOrConnectWithoutUsersInputObjectSchema),
    z.lazy(() => PostsCreateOrConnectWithoutUsersInputObjectSchema).array()]).optional(), upsert: z.union([z.lazy(() => PostsUpsertWithWhereUniqueWithoutUsersInputObjectSchema),
    z.lazy(() => PostsUpsertWithWhereUniqueWithoutUsersInputObjectSchema).array()]).optional(), createMany: z.lazy(() => PostsCreateManyUsersInputEnvelopeObjectSchema).optional(), set: z.union([z.lazy(() => PostsWhereUniqueInputObjectSchema),
    z.lazy(() => PostsWhereUniqueInputObjectSchema).array()]).optional(), disconnect: z.union([z.lazy(() => PostsWhereUniqueInputObjectSchema),
    z.lazy(() => PostsWhereUniqueInputObjectSchema).array()]).optional(), delete: z.union([z.lazy(() => PostsWhereUniqueInputObjectSchema),
    z.lazy(() => PostsWhereUniqueInputObjectSchema).array()]).optional(), connect: z.union([z.lazy(() => PostsWhereUniqueInputObjectSchema),
    z.lazy(() => PostsWhereUniqueInputObjectSchema).array()]).optional(), update: z.union([z.lazy(() => PostsUpdateWithWhereUniqueWithoutUsersInputObjectSchema),
    z.lazy(() => PostsUpdateWithWhereUniqueWithoutUsersInputObjectSchema).array()]).optional(), updateMany: z.union([z.lazy(() => PostsUpdateManyWithWhereWithoutUsersInputObjectSchema),
    z.lazy(() => PostsUpdateManyWithWhereWithoutUsersInputObjectSchema).array()]).optional(), deleteMany: z.union([z.lazy(() => PostsScalarWhereInputObjectSchema),
    z.lazy(() => PostsScalarWhereInputObjectSchema).array()]).optional()
}).strict() as SchemaType;
