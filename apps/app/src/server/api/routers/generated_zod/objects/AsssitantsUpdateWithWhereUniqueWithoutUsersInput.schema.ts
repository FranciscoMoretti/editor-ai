/* eslint-disable */
import { z } from 'zod';
import { AsssitantsWhereUniqueInputObjectSchema } from './AsssitantsWhereUniqueInput.schema';
import { AsssitantsUpdateWithoutUsersInputObjectSchema } from './AsssitantsUpdateWithoutUsersInput.schema';
import { AsssitantsUncheckedUpdateWithoutUsersInputObjectSchema } from './AsssitantsUncheckedUpdateWithoutUsersInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.asssitantsUpdateWithWhereUniqueWithoutUsersInput>;
export const AsssitantsUpdateWithWhereUniqueWithoutUsersInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => AsssitantsWhereUniqueInputObjectSchema), data: z.union([z.lazy(() => AsssitantsUpdateWithoutUsersInputObjectSchema), z.lazy(() => AsssitantsUncheckedUpdateWithoutUsersInputObjectSchema)])
}).strict() as SchemaType;
