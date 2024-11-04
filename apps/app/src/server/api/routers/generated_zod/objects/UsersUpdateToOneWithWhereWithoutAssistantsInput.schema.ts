/* eslint-disable */
import { z } from 'zod';
import { UsersWhereInputObjectSchema } from './UsersWhereInput.schema';
import { UsersUpdateWithoutAssistantsInputObjectSchema } from './UsersUpdateWithoutAssistantsInput.schema';
import { UsersUncheckedUpdateWithoutAssistantsInputObjectSchema } from './UsersUncheckedUpdateWithoutAssistantsInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.usersUpdateToOneWithWhereWithoutAssistantsInput>;
export const UsersUpdateToOneWithWhereWithoutAssistantsInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => UsersWhereInputObjectSchema).optional(), data: z.union([z.lazy(() => UsersUpdateWithoutAssistantsInputObjectSchema), z.lazy(() => UsersUncheckedUpdateWithoutAssistantsInputObjectSchema)])
}).strict() as SchemaType;
