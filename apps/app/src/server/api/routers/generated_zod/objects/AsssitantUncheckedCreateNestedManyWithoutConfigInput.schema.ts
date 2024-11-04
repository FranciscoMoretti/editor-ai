/* eslint-disable */
import { z } from 'zod';
import { AsssitantCreateWithoutConfigInputObjectSchema } from './AsssitantCreateWithoutConfigInput.schema';
import { AsssitantUncheckedCreateWithoutConfigInputObjectSchema } from './AsssitantUncheckedCreateWithoutConfigInput.schema';
import { AsssitantCreateOrConnectWithoutConfigInputObjectSchema } from './AsssitantCreateOrConnectWithoutConfigInput.schema';
import { AsssitantCreateManyConfigInputEnvelopeObjectSchema } from './AsssitantCreateManyConfigInputEnvelope.schema';
import { AsssitantWhereUniqueInputObjectSchema } from './AsssitantWhereUniqueInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.asssitantUncheckedCreateNestedManyWithoutConfigInput>;
export const AsssitantUncheckedCreateNestedManyWithoutConfigInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => AsssitantCreateWithoutConfigInputObjectSchema), z.lazy(() => AsssitantCreateWithoutConfigInputObjectSchema).array(), z.lazy(() => AsssitantUncheckedCreateWithoutConfigInputObjectSchema), z.lazy(() => AsssitantUncheckedCreateWithoutConfigInputObjectSchema).array()]).optional(), connectOrCreate: z.union([z.lazy(() => AsssitantCreateOrConnectWithoutConfigInputObjectSchema),
    z.lazy(() => AsssitantCreateOrConnectWithoutConfigInputObjectSchema).array()]).optional(), createMany: z.lazy(() => AsssitantCreateManyConfigInputEnvelopeObjectSchema).optional(), connect: z.union([z.lazy(() => AsssitantWhereUniqueInputObjectSchema),
    z.lazy(() => AsssitantWhereUniqueInputObjectSchema).array()]).optional()
}).strict() as SchemaType;
