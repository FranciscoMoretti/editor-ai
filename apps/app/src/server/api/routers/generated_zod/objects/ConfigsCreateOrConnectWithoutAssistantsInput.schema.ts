/* eslint-disable */
import { z } from 'zod';
import { ConfigsWhereUniqueInputObjectSchema } from './ConfigsWhereUniqueInput.schema';
import { ConfigsCreateWithoutAssistantsInputObjectSchema } from './ConfigsCreateWithoutAssistantsInput.schema';
import { ConfigsUncheckedCreateWithoutAssistantsInputObjectSchema } from './ConfigsUncheckedCreateWithoutAssistantsInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.configsCreateOrConnectWithoutAssistantsInput>;
export const ConfigsCreateOrConnectWithoutAssistantsInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => ConfigsWhereUniqueInputObjectSchema), create: z.union([z.lazy(() => ConfigsCreateWithoutAssistantsInputObjectSchema), z.lazy(() => ConfigsUncheckedCreateWithoutAssistantsInputObjectSchema)])
}).strict() as SchemaType;
