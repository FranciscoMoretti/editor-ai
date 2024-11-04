/* eslint-disable */
import { z } from 'zod';
import { AsssitantScalarWhereInputObjectSchema } from './AsssitantScalarWhereInput.schema';
import { AsssitantUpdateManyMutationInputObjectSchema } from './AsssitantUpdateManyMutationInput.schema';
import { AsssitantUncheckedUpdateManyWithoutConfigInputObjectSchema } from './AsssitantUncheckedUpdateManyWithoutConfigInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.asssitantUpdateManyWithWhereWithoutConfigInput>;
export const AsssitantUpdateManyWithWhereWithoutConfigInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => AsssitantScalarWhereInputObjectSchema), data: z.union([z.lazy(() => AsssitantUpdateManyMutationInputObjectSchema), z.lazy(() => AsssitantUncheckedUpdateManyWithoutConfigInputObjectSchema)])
}).strict() as SchemaType;
