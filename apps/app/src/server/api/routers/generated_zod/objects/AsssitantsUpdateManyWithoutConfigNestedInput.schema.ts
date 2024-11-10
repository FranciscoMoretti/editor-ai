/* eslint-disable */
import { z } from 'zod';
import { AsssitantsCreateWithoutConfigInputObjectSchema } from './AsssitantsCreateWithoutConfigInput.schema';
import { AsssitantsUncheckedCreateWithoutConfigInputObjectSchema } from './AsssitantsUncheckedCreateWithoutConfigInput.schema';
import { AsssitantsCreateOrConnectWithoutConfigInputObjectSchema } from './AsssitantsCreateOrConnectWithoutConfigInput.schema';
import { AsssitantsUpsertWithWhereUniqueWithoutConfigInputObjectSchema } from './AsssitantsUpsertWithWhereUniqueWithoutConfigInput.schema';
import { AsssitantsCreateManyConfigInputEnvelopeObjectSchema } from './AsssitantsCreateManyConfigInputEnvelope.schema';
import { AsssitantsWhereUniqueInputObjectSchema } from './AsssitantsWhereUniqueInput.schema';
import { AsssitantsUpdateWithWhereUniqueWithoutConfigInputObjectSchema } from './AsssitantsUpdateWithWhereUniqueWithoutConfigInput.schema';
import { AsssitantsUpdateManyWithWhereWithoutConfigInputObjectSchema } from './AsssitantsUpdateManyWithWhereWithoutConfigInput.schema';
import { AsssitantsScalarWhereInputObjectSchema } from './AsssitantsScalarWhereInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.asssitantsUpdateManyWithoutConfigNestedInput>;
export const AsssitantsUpdateManyWithoutConfigNestedInputObjectSchema: SchemaType = z.object({
    create: z.union([z.lazy(() => AsssitantsCreateWithoutConfigInputObjectSchema), z.lazy(() => AsssitantsCreateWithoutConfigInputObjectSchema).array(), z.lazy(() => AsssitantsUncheckedCreateWithoutConfigInputObjectSchema), z.lazy(() => AsssitantsUncheckedCreateWithoutConfigInputObjectSchema).array()]).optional(), connectOrCreate: z.union([z.lazy(() => AsssitantsCreateOrConnectWithoutConfigInputObjectSchema),
    z.lazy(() => AsssitantsCreateOrConnectWithoutConfigInputObjectSchema).array()]).optional(), upsert: z.union([z.lazy(() => AsssitantsUpsertWithWhereUniqueWithoutConfigInputObjectSchema),
    z.lazy(() => AsssitantsUpsertWithWhereUniqueWithoutConfigInputObjectSchema).array()]).optional(), createMany: z.lazy(() => AsssitantsCreateManyConfigInputEnvelopeObjectSchema).optional(), set: z.union([z.lazy(() => AsssitantsWhereUniqueInputObjectSchema),
    z.lazy(() => AsssitantsWhereUniqueInputObjectSchema).array()]).optional(), disconnect: z.union([z.lazy(() => AsssitantsWhereUniqueInputObjectSchema),
    z.lazy(() => AsssitantsWhereUniqueInputObjectSchema).array()]).optional(), delete: z.union([z.lazy(() => AsssitantsWhereUniqueInputObjectSchema),
    z.lazy(() => AsssitantsWhereUniqueInputObjectSchema).array()]).optional(), connect: z.union([z.lazy(() => AsssitantsWhereUniqueInputObjectSchema),
    z.lazy(() => AsssitantsWhereUniqueInputObjectSchema).array()]).optional(), update: z.union([z.lazy(() => AsssitantsUpdateWithWhereUniqueWithoutConfigInputObjectSchema),
    z.lazy(() => AsssitantsUpdateWithWhereUniqueWithoutConfigInputObjectSchema).array()]).optional(), updateMany: z.union([z.lazy(() => AsssitantsUpdateManyWithWhereWithoutConfigInputObjectSchema),
    z.lazy(() => AsssitantsUpdateManyWithWhereWithoutConfigInputObjectSchema).array()]).optional(), deleteMany: z.union([z.lazy(() => AsssitantsScalarWhereInputObjectSchema),
    z.lazy(() => AsssitantsScalarWhereInputObjectSchema).array()]).optional()
}).strict() as SchemaType;
