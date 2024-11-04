/* eslint-disable */
import { z } from 'zod';
import { AsssitantWhereUniqueInputObjectSchema } from './AsssitantWhereUniqueInput.schema';
import { AsssitantUpdateWithoutUsersInputObjectSchema } from './AsssitantUpdateWithoutUsersInput.schema';
import { AsssitantUncheckedUpdateWithoutUsersInputObjectSchema } from './AsssitantUncheckedUpdateWithoutUsersInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.asssitantUpdateWithWhereUniqueWithoutUsersInput>;
export const AsssitantUpdateWithWhereUniqueWithoutUsersInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => AsssitantWhereUniqueInputObjectSchema), data: z.union([z.lazy(() => AsssitantUpdateWithoutUsersInputObjectSchema), z.lazy(() => AsssitantUncheckedUpdateWithoutUsersInputObjectSchema)])
}).strict() as SchemaType;
