/* eslint-disable */
import { z } from 'zod';
import { AsssitantWhereUniqueInputObjectSchema } from './AsssitantWhereUniqueInput.schema';
import { AsssitantUpdateWithoutUsersInputObjectSchema } from './AsssitantUpdateWithoutUsersInput.schema';
import { AsssitantUncheckedUpdateWithoutUsersInputObjectSchema } from './AsssitantUncheckedUpdateWithoutUsersInput.schema';
import { AsssitantCreateWithoutUsersInputObjectSchema } from './AsssitantCreateWithoutUsersInput.schema';
import { AsssitantUncheckedCreateWithoutUsersInputObjectSchema } from './AsssitantUncheckedCreateWithoutUsersInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.asssitantUpsertWithWhereUniqueWithoutUsersInput>;
export const AsssitantUpsertWithWhereUniqueWithoutUsersInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => AsssitantWhereUniqueInputObjectSchema), update: z.union([z.lazy(() => AsssitantUpdateWithoutUsersInputObjectSchema), z.lazy(() => AsssitantUncheckedUpdateWithoutUsersInputObjectSchema)]), create: z.union([z.lazy(() => AsssitantCreateWithoutUsersInputObjectSchema), z.lazy(() => AsssitantUncheckedCreateWithoutUsersInputObjectSchema)])
}).strict() as SchemaType;
