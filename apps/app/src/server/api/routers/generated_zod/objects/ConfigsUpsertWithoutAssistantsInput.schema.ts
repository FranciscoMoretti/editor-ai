/* eslint-disable */
import { z } from 'zod';
import { ConfigsUpdateWithoutAssistantsInputObjectSchema } from './ConfigsUpdateWithoutAssistantsInput.schema';
import { ConfigsUncheckedUpdateWithoutAssistantsInputObjectSchema } from './ConfigsUncheckedUpdateWithoutAssistantsInput.schema';
import { ConfigsCreateWithoutAssistantsInputObjectSchema } from './ConfigsCreateWithoutAssistantsInput.schema';
import { ConfigsUncheckedCreateWithoutAssistantsInputObjectSchema } from './ConfigsUncheckedCreateWithoutAssistantsInput.schema';
import { ConfigsWhereInputObjectSchema } from './ConfigsWhereInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.configsUpsertWithoutAssistantsInput>;
export const ConfigsUpsertWithoutAssistantsInputObjectSchema: SchemaType = z.object({
    update: z.union([z.lazy(() => ConfigsUpdateWithoutAssistantsInputObjectSchema), z.lazy(() => ConfigsUncheckedUpdateWithoutAssistantsInputObjectSchema)]), create: z.union([z.lazy(() => ConfigsCreateWithoutAssistantsInputObjectSchema), z.lazy(() => ConfigsUncheckedCreateWithoutAssistantsInputObjectSchema)]), where: z.lazy(() => ConfigsWhereInputObjectSchema).optional()
}).strict() as SchemaType;
