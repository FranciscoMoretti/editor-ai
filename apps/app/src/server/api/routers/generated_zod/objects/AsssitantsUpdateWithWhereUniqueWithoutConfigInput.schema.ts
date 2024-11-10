/* eslint-disable */
import { z } from 'zod';
import { AsssitantsWhereUniqueInputObjectSchema } from './AsssitantsWhereUniqueInput.schema';
import { AsssitantsUpdateWithoutConfigInputObjectSchema } from './AsssitantsUpdateWithoutConfigInput.schema';
import { AsssitantsUncheckedUpdateWithoutConfigInputObjectSchema } from './AsssitantsUncheckedUpdateWithoutConfigInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.asssitantsUpdateWithWhereUniqueWithoutConfigInput>;
export const AsssitantsUpdateWithWhereUniqueWithoutConfigInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => AsssitantsWhereUniqueInputObjectSchema), data: z.union([z.lazy(() => AsssitantsUpdateWithoutConfigInputObjectSchema), z.lazy(() => AsssitantsUncheckedUpdateWithoutConfigInputObjectSchema)])
}).strict() as SchemaType;
