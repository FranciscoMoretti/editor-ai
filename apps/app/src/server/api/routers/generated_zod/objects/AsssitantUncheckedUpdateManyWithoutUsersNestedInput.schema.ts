/* eslint-disable */
import { z } from 'zod';
import { AsssitantCreateWithoutUsersInputObjectSchema } from './AsssitantCreateWithoutUsersInput.schema';
import { AsssitantUncheckedCreateWithoutUsersInputObjectSchema } from './AsssitantUncheckedCreateWithoutUsersInput.schema';
import { AsssitantCreateOrConnectWithoutUsersInputObjectSchema } from './AsssitantCreateOrConnectWithoutUsersInput.schema';
import { AsssitantUpsertWithWhereUniqueWithoutUsersInputObjectSchema } from './AsssitantUpsertWithWhereUniqueWithoutUsersInput.schema';
import { AsssitantCreateManyUsersInputEnvelopeObjectSchema } from './AsssitantCreateManyUsersInputEnvelope.schema';
import { AsssitantWhereUniqueInputObjectSchema } from './AsssitantWhereUniqueInput.schema';
import { AsssitantUpdateWithWhereUniqueWithoutUsersInputObjectSchema } from './AsssitantUpdateWithWhereUniqueWithoutUsersInput.schema';
import { AsssitantUpdateManyWithWhereWithoutUsersInputObjectSchema } from './AsssitantUpdateManyWithWhereWithoutUsersInput.schema';
import { AsssitantScalarWhereInputObjectSchema } from './AsssitantScalarWhereInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.asssitantUncheckedUpdateManyWithoutUsersNestedInput>;
export const AsssitantUncheckedUpdateManyWithoutUsersNestedInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => AsssitantCreateWithoutUsersInputObjectSchema), z.lazy(() => AsssitantCreateWithoutUsersInputObjectSchema).array(), z.lazy(() => AsssitantUncheckedCreateWithoutUsersInputObjectSchema), z.lazy(() => AsssitantUncheckedCreateWithoutUsersInputObjectSchema).array()]).optional(), connectOrCreate: z.union([z.lazy(() => AsssitantCreateOrConnectWithoutUsersInputObjectSchema),
    z.lazy(() => AsssitantCreateOrConnectWithoutUsersInputObjectSchema).array()]).optional(), upsert: z.union([z.lazy(() => AsssitantUpsertWithWhereUniqueWithoutUsersInputObjectSchema),
    z.lazy(() => AsssitantUpsertWithWhereUniqueWithoutUsersInputObjectSchema).array()]).optional(), createMany: z.lazy(() => AsssitantCreateManyUsersInputEnvelopeObjectSchema).optional(), set: z.union([z.lazy(() => AsssitantWhereUniqueInputObjectSchema),
    z.lazy(() => AsssitantWhereUniqueInputObjectSchema).array()]).optional(), disconnect: z.union([z.lazy(() => AsssitantWhereUniqueInputObjectSchema),
    z.lazy(() => AsssitantWhereUniqueInputObjectSchema).array()]).optional(), delete: z.union([z.lazy(() => AsssitantWhereUniqueInputObjectSchema),
    z.lazy(() => AsssitantWhereUniqueInputObjectSchema).array()]).optional(), connect: z.union([z.lazy(() => AsssitantWhereUniqueInputObjectSchema),
    z.lazy(() => AsssitantWhereUniqueInputObjectSchema).array()]).optional(), update: z.union([z.lazy(() => AsssitantUpdateWithWhereUniqueWithoutUsersInputObjectSchema),
    z.lazy(() => AsssitantUpdateWithWhereUniqueWithoutUsersInputObjectSchema).array()]).optional(), updateMany: z.union([z.lazy(() => AsssitantUpdateManyWithWhereWithoutUsersInputObjectSchema),
    z.lazy(() => AsssitantUpdateManyWithWhereWithoutUsersInputObjectSchema).array()]).optional(), deleteMany: z.union([z.lazy(() => AsssitantScalarWhereInputObjectSchema),
    z.lazy(() => AsssitantScalarWhereInputObjectSchema).array()]).optional()
}).strict() as SchemaType;
