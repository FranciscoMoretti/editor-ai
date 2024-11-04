/* eslint-disable */
import { z } from 'zod';
import { AsssitantWhereUniqueInputObjectSchema } from './AsssitantWhereUniqueInput.schema';
import { AsssitantUpdateWithoutConfigInputObjectSchema } from './AsssitantUpdateWithoutConfigInput.schema';
import { AsssitantUncheckedUpdateWithoutConfigInputObjectSchema } from './AsssitantUncheckedUpdateWithoutConfigInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.asssitantUpdateWithWhereUniqueWithoutConfigInput>;
export const AsssitantUpdateWithWhereUniqueWithoutConfigInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => AsssitantWhereUniqueInputObjectSchema), data: z.union([z.lazy(() => AsssitantUpdateWithoutConfigInputObjectSchema), z.lazy(() => AsssitantUncheckedUpdateWithoutConfigInputObjectSchema)])
}).strict() as SchemaType;
