/* eslint-disable */
import { z } from 'zod';
import { UsersCreateWithoutPostsInputObjectSchema } from './UsersCreateWithoutPostsInput.schema';
import { UsersUncheckedCreateWithoutPostsInputObjectSchema } from './UsersUncheckedCreateWithoutPostsInput.schema';
import { UsersCreateOrConnectWithoutPostsInputObjectSchema } from './UsersCreateOrConnectWithoutPostsInput.schema';
import { UsersWhereUniqueInputObjectSchema } from './UsersWhereUniqueInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.usersCreateNestedOneWithoutPostsInput>;
export const UsersCreateNestedOneWithoutPostsInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => UsersCreateWithoutPostsInputObjectSchema), z.lazy(() => UsersUncheckedCreateWithoutPostsInputObjectSchema)]).optional(), connectOrCreate: z.lazy(() => UsersCreateOrConnectWithoutPostsInputObjectSchema).optional(), connect: z.lazy(() => UsersWhereUniqueInputObjectSchema).optional()
}).strict() as SchemaType;
