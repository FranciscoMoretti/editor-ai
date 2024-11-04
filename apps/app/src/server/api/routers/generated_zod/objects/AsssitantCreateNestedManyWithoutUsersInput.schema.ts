/* eslint-disable */
import { z } from 'zod';
import { AsssitantCreateWithoutUsersInputObjectSchema } from './AsssitantCreateWithoutUsersInput.schema';
import { AsssitantUncheckedCreateWithoutUsersInputObjectSchema } from './AsssitantUncheckedCreateWithoutUsersInput.schema';
import { AsssitantCreateOrConnectWithoutUsersInputObjectSchema } from './AsssitantCreateOrConnectWithoutUsersInput.schema';
import { AsssitantCreateManyUsersInputEnvelopeObjectSchema } from './AsssitantCreateManyUsersInputEnvelope.schema';
import { AsssitantWhereUniqueInputObjectSchema } from './AsssitantWhereUniqueInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.asssitantCreateNestedManyWithoutUsersInput>;
export const AsssitantCreateNestedManyWithoutUsersInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => AsssitantCreateWithoutUsersInputObjectSchema), z.lazy(() => AsssitantCreateWithoutUsersInputObjectSchema).array(), z.lazy(() => AsssitantUncheckedCreateWithoutUsersInputObjectSchema), z.lazy(() => AsssitantUncheckedCreateWithoutUsersInputObjectSchema).array()]).optional(), connectOrCreate: z.union([z.lazy(() => AsssitantCreateOrConnectWithoutUsersInputObjectSchema),
    z.lazy(() => AsssitantCreateOrConnectWithoutUsersInputObjectSchema).array()]).optional(), createMany: z.lazy(() => AsssitantCreateManyUsersInputEnvelopeObjectSchema).optional(), connect: z.union([z.lazy(() => AsssitantWhereUniqueInputObjectSchema),
    z.lazy(() => AsssitantWhereUniqueInputObjectSchema).array()]).optional()
}).strict() as SchemaType;
