/* eslint-disable */
import { z } from 'zod';
import { AsssitantWhereUniqueInputObjectSchema } from './AsssitantWhereUniqueInput.schema';
import { AsssitantCreateWithoutConfigInputObjectSchema } from './AsssitantCreateWithoutConfigInput.schema';
import { AsssitantUncheckedCreateWithoutConfigInputObjectSchema } from './AsssitantUncheckedCreateWithoutConfigInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.asssitantCreateOrConnectWithoutConfigInput>;
export const AsssitantCreateOrConnectWithoutConfigInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => AsssitantWhereUniqueInputObjectSchema), create: z.union([z.lazy(() => AsssitantCreateWithoutConfigInputObjectSchema), z.lazy(() => AsssitantUncheckedCreateWithoutConfigInputObjectSchema)])
}).strict() as SchemaType;
