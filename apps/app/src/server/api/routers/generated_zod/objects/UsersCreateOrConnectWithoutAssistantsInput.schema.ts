/* eslint-disable */
import { z } from 'zod';
import { UsersWhereUniqueInputObjectSchema } from './UsersWhereUniqueInput.schema';
import { UsersCreateWithoutAssistantsInputObjectSchema } from './UsersCreateWithoutAssistantsInput.schema';
import { UsersUncheckedCreateWithoutAssistantsInputObjectSchema } from './UsersUncheckedCreateWithoutAssistantsInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.usersCreateOrConnectWithoutAssistantsInput>;
export const UsersCreateOrConnectWithoutAssistantsInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => UsersWhereUniqueInputObjectSchema), create: z.union([z.lazy(() => UsersCreateWithoutAssistantsInputObjectSchema), z.lazy(() => UsersUncheckedCreateWithoutAssistantsInputObjectSchema)])
}).strict() as SchemaType;
