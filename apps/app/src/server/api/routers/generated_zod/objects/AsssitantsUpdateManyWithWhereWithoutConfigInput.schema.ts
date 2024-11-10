/* eslint-disable */
import { z } from 'zod';
import { AsssitantsScalarWhereInputObjectSchema } from './AsssitantsScalarWhereInput.schema';
import { AsssitantsUpdateManyMutationInputObjectSchema } from './AsssitantsUpdateManyMutationInput.schema';
import { AsssitantsUncheckedUpdateManyWithoutConfigInputObjectSchema } from './AsssitantsUncheckedUpdateManyWithoutConfigInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.asssitantsUpdateManyWithWhereWithoutConfigInput>;
export const AsssitantsUpdateManyWithWhereWithoutConfigInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => AsssitantsScalarWhereInputObjectSchema), data: z.union([z.lazy(() => AsssitantsUpdateManyMutationInputObjectSchema), z.lazy(() => AsssitantsUncheckedUpdateManyWithoutConfigInputObjectSchema)])
}).strict() as SchemaType;
