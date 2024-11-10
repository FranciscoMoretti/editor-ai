/* eslint-disable */
import { z } from 'zod';
import { AsssitantsCreateWithoutUsersInputObjectSchema } from './AsssitantsCreateWithoutUsersInput.schema';
import { AsssitantsUncheckedCreateWithoutUsersInputObjectSchema } from './AsssitantsUncheckedCreateWithoutUsersInput.schema';
import { AsssitantsCreateOrConnectWithoutUsersInputObjectSchema } from './AsssitantsCreateOrConnectWithoutUsersInput.schema';
import { AsssitantsCreateManyUsersInputEnvelopeObjectSchema } from './AsssitantsCreateManyUsersInputEnvelope.schema';
import { AsssitantsWhereUniqueInputObjectSchema } from './AsssitantsWhereUniqueInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.asssitantsCreateNestedManyWithoutUsersInput>;
export const AsssitantsCreateNestedManyWithoutUsersInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => AsssitantsCreateWithoutUsersInputObjectSchema), z.lazy(() => AsssitantsCreateWithoutUsersInputObjectSchema).array(), z.lazy(() => AsssitantsUncheckedCreateWithoutUsersInputObjectSchema), z.lazy(() => AsssitantsUncheckedCreateWithoutUsersInputObjectSchema).array()]).optional(), connectOrCreate: z.union([z.lazy(() => AsssitantsCreateOrConnectWithoutUsersInputObjectSchema),
    z.lazy(() => AsssitantsCreateOrConnectWithoutUsersInputObjectSchema).array()]).optional(), createMany: z.lazy(() => AsssitantsCreateManyUsersInputEnvelopeObjectSchema).optional(), connect: z.union([z.lazy(() => AsssitantsWhereUniqueInputObjectSchema),
    z.lazy(() => AsssitantsWhereUniqueInputObjectSchema).array()]).optional()
}).strict() as SchemaType;
