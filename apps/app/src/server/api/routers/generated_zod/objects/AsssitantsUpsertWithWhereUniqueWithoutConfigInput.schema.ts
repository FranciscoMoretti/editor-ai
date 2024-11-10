/* eslint-disable */
import { z } from 'zod';
import { AsssitantsWhereUniqueInputObjectSchema } from './AsssitantsWhereUniqueInput.schema';
import { AsssitantsUpdateWithoutConfigInputObjectSchema } from './AsssitantsUpdateWithoutConfigInput.schema';
import { AsssitantsUncheckedUpdateWithoutConfigInputObjectSchema } from './AsssitantsUncheckedUpdateWithoutConfigInput.schema';
import { AsssitantsCreateWithoutConfigInputObjectSchema } from './AsssitantsCreateWithoutConfigInput.schema';
import { AsssitantsUncheckedCreateWithoutConfigInputObjectSchema } from './AsssitantsUncheckedCreateWithoutConfigInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.asssitantsUpsertWithWhereUniqueWithoutConfigInput>;
export const AsssitantsUpsertWithWhereUniqueWithoutConfigInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => AsssitantsWhereUniqueInputObjectSchema), update: z.union([z.lazy(() => AsssitantsUpdateWithoutConfigInputObjectSchema), z.lazy(() => AsssitantsUncheckedUpdateWithoutConfigInputObjectSchema)]), create: z.union([z.lazy(() => AsssitantsCreateWithoutConfigInputObjectSchema), z.lazy(() => AsssitantsUncheckedCreateWithoutConfigInputObjectSchema)])
}).strict() as SchemaType;
