/* eslint-disable */
import { z } from 'zod';
import { AsssitantsWhereUniqueInputObjectSchema } from './AsssitantsWhereUniqueInput.schema';
import { AsssitantsUpdateWithoutUsersInputObjectSchema } from './AsssitantsUpdateWithoutUsersInput.schema';
import { AsssitantsUncheckedUpdateWithoutUsersInputObjectSchema } from './AsssitantsUncheckedUpdateWithoutUsersInput.schema';
import { AsssitantsCreateWithoutUsersInputObjectSchema } from './AsssitantsCreateWithoutUsersInput.schema';
import { AsssitantsUncheckedCreateWithoutUsersInputObjectSchema } from './AsssitantsUncheckedCreateWithoutUsersInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.asssitantsUpsertWithWhereUniqueWithoutUsersInput>;
export const AsssitantsUpsertWithWhereUniqueWithoutUsersInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => AsssitantsWhereUniqueInputObjectSchema), update: z.union([z.lazy(() => AsssitantsUpdateWithoutUsersInputObjectSchema), z.lazy(() => AsssitantsUncheckedUpdateWithoutUsersInputObjectSchema)]), create: z.union([z.lazy(() => AsssitantsCreateWithoutUsersInputObjectSchema), z.lazy(() => AsssitantsUncheckedCreateWithoutUsersInputObjectSchema)])
}).strict() as SchemaType;
