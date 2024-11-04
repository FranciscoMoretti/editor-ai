/* eslint-disable */
import { z } from 'zod';
import { UsersUpdateWithoutAssistantsInputObjectSchema } from './UsersUpdateWithoutAssistantsInput.schema';
import { UsersUncheckedUpdateWithoutAssistantsInputObjectSchema } from './UsersUncheckedUpdateWithoutAssistantsInput.schema';
import { UsersCreateWithoutAssistantsInputObjectSchema } from './UsersCreateWithoutAssistantsInput.schema';
import { UsersUncheckedCreateWithoutAssistantsInputObjectSchema } from './UsersUncheckedCreateWithoutAssistantsInput.schema';
import { UsersWhereInputObjectSchema } from './UsersWhereInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.usersUpsertWithoutAssistantsInput>;
export const UsersUpsertWithoutAssistantsInputObjectSchema: SchemaType = z.object({
    update: z.union([z.lazy(() => UsersUpdateWithoutAssistantsInputObjectSchema), z.lazy(() => UsersUncheckedUpdateWithoutAssistantsInputObjectSchema)]), create: z.union([z.lazy(() => UsersCreateWithoutAssistantsInputObjectSchema), z.lazy(() => UsersUncheckedCreateWithoutAssistantsInputObjectSchema)]), where: z.lazy(() => UsersWhereInputObjectSchema).optional()
}).strict() as SchemaType;
