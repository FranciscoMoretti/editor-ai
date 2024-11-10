/* eslint-disable */
import { z } from 'zod';
import { AsssitantsCreateWithoutUsersInputObjectSchema } from './AsssitantsCreateWithoutUsersInput.schema';
import { AsssitantsUncheckedCreateWithoutUsersInputObjectSchema } from './AsssitantsUncheckedCreateWithoutUsersInput.schema';
import { AsssitantsCreateOrConnectWithoutUsersInputObjectSchema } from './AsssitantsCreateOrConnectWithoutUsersInput.schema';
import { AsssitantsUpsertWithWhereUniqueWithoutUsersInputObjectSchema } from './AsssitantsUpsertWithWhereUniqueWithoutUsersInput.schema';
import { AsssitantsCreateManyUsersInputEnvelopeObjectSchema } from './AsssitantsCreateManyUsersInputEnvelope.schema';
import { AsssitantsWhereUniqueInputObjectSchema } from './AsssitantsWhereUniqueInput.schema';
import { AsssitantsUpdateWithWhereUniqueWithoutUsersInputObjectSchema } from './AsssitantsUpdateWithWhereUniqueWithoutUsersInput.schema';
import { AsssitantsUpdateManyWithWhereWithoutUsersInputObjectSchema } from './AsssitantsUpdateManyWithWhereWithoutUsersInput.schema';
import { AsssitantsScalarWhereInputObjectSchema } from './AsssitantsScalarWhereInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.asssitantsUpdateManyWithoutUsersNestedInput>;
export const AsssitantsUpdateManyWithoutUsersNestedInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => AsssitantsCreateWithoutUsersInputObjectSchema), z.lazy(() => AsssitantsCreateWithoutUsersInputObjectSchema).array(), z.lazy(() => AsssitantsUncheckedCreateWithoutUsersInputObjectSchema), z.lazy(() => AsssitantsUncheckedCreateWithoutUsersInputObjectSchema).array()]).optional(), connectOrCreate: z.union([z.lazy(() => AsssitantsCreateOrConnectWithoutUsersInputObjectSchema),
    z.lazy(() => AsssitantsCreateOrConnectWithoutUsersInputObjectSchema).array()]).optional(), upsert: z.union([z.lazy(() => AsssitantsUpsertWithWhereUniqueWithoutUsersInputObjectSchema),
    z.lazy(() => AsssitantsUpsertWithWhereUniqueWithoutUsersInputObjectSchema).array()]).optional(), createMany: z.lazy(() => AsssitantsCreateManyUsersInputEnvelopeObjectSchema).optional(), set: z.union([z.lazy(() => AsssitantsWhereUniqueInputObjectSchema),
    z.lazy(() => AsssitantsWhereUniqueInputObjectSchema).array()]).optional(), disconnect: z.union([z.lazy(() => AsssitantsWhereUniqueInputObjectSchema),
    z.lazy(() => AsssitantsWhereUniqueInputObjectSchema).array()]).optional(), delete: z.union([z.lazy(() => AsssitantsWhereUniqueInputObjectSchema),
    z.lazy(() => AsssitantsWhereUniqueInputObjectSchema).array()]).optional(), connect: z.union([z.lazy(() => AsssitantsWhereUniqueInputObjectSchema),
    z.lazy(() => AsssitantsWhereUniqueInputObjectSchema).array()]).optional(), update: z.union([z.lazy(() => AsssitantsUpdateWithWhereUniqueWithoutUsersInputObjectSchema),
    z.lazy(() => AsssitantsUpdateWithWhereUniqueWithoutUsersInputObjectSchema).array()]).optional(), updateMany: z.union([z.lazy(() => AsssitantsUpdateManyWithWhereWithoutUsersInputObjectSchema),
    z.lazy(() => AsssitantsUpdateManyWithWhereWithoutUsersInputObjectSchema).array()]).optional(), deleteMany: z.union([z.lazy(() => AsssitantsScalarWhereInputObjectSchema),
    z.lazy(() => AsssitantsScalarWhereInputObjectSchema).array()]).optional()
}).strict() as SchemaType;
