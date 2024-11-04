/* eslint-disable */
import { z } from 'zod';
import { AsssitantWhereUniqueInputObjectSchema } from './AsssitantWhereUniqueInput.schema';
import { AsssitantCreateWithoutUsersInputObjectSchema } from './AsssitantCreateWithoutUsersInput.schema';
import { AsssitantUncheckedCreateWithoutUsersInputObjectSchema } from './AsssitantUncheckedCreateWithoutUsersInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.asssitantCreateOrConnectWithoutUsersInput>;
export const AsssitantCreateOrConnectWithoutUsersInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => AsssitantWhereUniqueInputObjectSchema), create: z.union([z.lazy(() => AsssitantCreateWithoutUsersInputObjectSchema), z.lazy(() => AsssitantUncheckedCreateWithoutUsersInputObjectSchema)])
}).strict() as SchemaType;
