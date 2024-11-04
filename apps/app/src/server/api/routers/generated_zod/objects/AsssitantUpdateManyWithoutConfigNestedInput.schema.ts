/* eslint-disable */
import { z } from 'zod';
import { AsssitantCreateWithoutConfigInputObjectSchema } from './AsssitantCreateWithoutConfigInput.schema';
import { AsssitantUncheckedCreateWithoutConfigInputObjectSchema } from './AsssitantUncheckedCreateWithoutConfigInput.schema';
import { AsssitantCreateOrConnectWithoutConfigInputObjectSchema } from './AsssitantCreateOrConnectWithoutConfigInput.schema';
import { AsssitantUpsertWithWhereUniqueWithoutConfigInputObjectSchema } from './AsssitantUpsertWithWhereUniqueWithoutConfigInput.schema';
import { AsssitantCreateManyConfigInputEnvelopeObjectSchema } from './AsssitantCreateManyConfigInputEnvelope.schema';
import { AsssitantWhereUniqueInputObjectSchema } from './AsssitantWhereUniqueInput.schema';
import { AsssitantUpdateWithWhereUniqueWithoutConfigInputObjectSchema } from './AsssitantUpdateWithWhereUniqueWithoutConfigInput.schema';
import { AsssitantUpdateManyWithWhereWithoutConfigInputObjectSchema } from './AsssitantUpdateManyWithWhereWithoutConfigInput.schema';
import { AsssitantScalarWhereInputObjectSchema } from './AsssitantScalarWhereInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.asssitantUpdateManyWithoutConfigNestedInput>;
export const AsssitantUpdateManyWithoutConfigNestedInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => AsssitantCreateWithoutConfigInputObjectSchema), z.lazy(() => AsssitantCreateWithoutConfigInputObjectSchema).array(), z.lazy(() => AsssitantUncheckedCreateWithoutConfigInputObjectSchema), z.lazy(() => AsssitantUncheckedCreateWithoutConfigInputObjectSchema).array()]).optional(), connectOrCreate: z.union([z.lazy(() => AsssitantCreateOrConnectWithoutConfigInputObjectSchema),
    z.lazy(() => AsssitantCreateOrConnectWithoutConfigInputObjectSchema).array()]).optional(), upsert: z.union([z.lazy(() => AsssitantUpsertWithWhereUniqueWithoutConfigInputObjectSchema),
    z.lazy(() => AsssitantUpsertWithWhereUniqueWithoutConfigInputObjectSchema).array()]).optional(), createMany: z.lazy(() => AsssitantCreateManyConfigInputEnvelopeObjectSchema).optional(), set: z.union([z.lazy(() => AsssitantWhereUniqueInputObjectSchema),
    z.lazy(() => AsssitantWhereUniqueInputObjectSchema).array()]).optional(), disconnect: z.union([z.lazy(() => AsssitantWhereUniqueInputObjectSchema),
    z.lazy(() => AsssitantWhereUniqueInputObjectSchema).array()]).optional(), delete: z.union([z.lazy(() => AsssitantWhereUniqueInputObjectSchema),
    z.lazy(() => AsssitantWhereUniqueInputObjectSchema).array()]).optional(), connect: z.union([z.lazy(() => AsssitantWhereUniqueInputObjectSchema),
    z.lazy(() => AsssitantWhereUniqueInputObjectSchema).array()]).optional(), update: z.union([z.lazy(() => AsssitantUpdateWithWhereUniqueWithoutConfigInputObjectSchema),
    z.lazy(() => AsssitantUpdateWithWhereUniqueWithoutConfigInputObjectSchema).array()]).optional(), updateMany: z.union([z.lazy(() => AsssitantUpdateManyWithWhereWithoutConfigInputObjectSchema),
    z.lazy(() => AsssitantUpdateManyWithWhereWithoutConfigInputObjectSchema).array()]).optional(), deleteMany: z.union([z.lazy(() => AsssitantScalarWhereInputObjectSchema),
    z.lazy(() => AsssitantScalarWhereInputObjectSchema).array()]).optional()
}).strict() as SchemaType;
