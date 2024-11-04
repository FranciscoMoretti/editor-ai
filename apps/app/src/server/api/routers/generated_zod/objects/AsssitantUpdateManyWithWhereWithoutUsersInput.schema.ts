/* eslint-disable */
import { z } from 'zod';
import { AsssitantScalarWhereInputObjectSchema } from './AsssitantScalarWhereInput.schema';
import { AsssitantUpdateManyMutationInputObjectSchema } from './AsssitantUpdateManyMutationInput.schema';
import { AsssitantUncheckedUpdateManyWithoutUsersInputObjectSchema } from './AsssitantUncheckedUpdateManyWithoutUsersInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.asssitantUpdateManyWithWhereWithoutUsersInput>;
export const AsssitantUpdateManyWithWhereWithoutUsersInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => AsssitantScalarWhereInputObjectSchema), data: z.union([z.lazy(() => AsssitantUpdateManyMutationInputObjectSchema), z.lazy(() => AsssitantUncheckedUpdateManyWithoutUsersInputObjectSchema)])
}).strict() as SchemaType;
