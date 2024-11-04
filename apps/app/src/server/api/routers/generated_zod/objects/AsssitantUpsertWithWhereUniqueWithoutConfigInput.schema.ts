/* eslint-disable */
import { z } from 'zod';
import { AsssitantWhereUniqueInputObjectSchema } from './AsssitantWhereUniqueInput.schema';
import { AsssitantUpdateWithoutConfigInputObjectSchema } from './AsssitantUpdateWithoutConfigInput.schema';
import { AsssitantUncheckedUpdateWithoutConfigInputObjectSchema } from './AsssitantUncheckedUpdateWithoutConfigInput.schema';
import { AsssitantCreateWithoutConfigInputObjectSchema } from './AsssitantCreateWithoutConfigInput.schema';
import { AsssitantUncheckedCreateWithoutConfigInputObjectSchema } from './AsssitantUncheckedCreateWithoutConfigInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.asssitantUpsertWithWhereUniqueWithoutConfigInput>;
export const AsssitantUpsertWithWhereUniqueWithoutConfigInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => AsssitantWhereUniqueInputObjectSchema), update: z.union([z.lazy(() => AsssitantUpdateWithoutConfigInputObjectSchema), z.lazy(() => AsssitantUncheckedUpdateWithoutConfigInputObjectSchema)]), create: z.union([z.lazy(() => AsssitantCreateWithoutConfigInputObjectSchema), z.lazy(() => AsssitantUncheckedCreateWithoutConfigInputObjectSchema)])
}).strict() as SchemaType;
