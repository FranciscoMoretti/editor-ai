/* eslint-disable */
import { z } from 'zod';
import { ConfigsWhereInputObjectSchema } from './ConfigsWhereInput.schema';
import { ConfigsUpdateWithoutAssistantsInputObjectSchema } from './ConfigsUpdateWithoutAssistantsInput.schema';
import { ConfigsUncheckedUpdateWithoutAssistantsInputObjectSchema } from './ConfigsUncheckedUpdateWithoutAssistantsInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.configsUpdateToOneWithWhereWithoutAssistantsInput>;
export const ConfigsUpdateToOneWithWhereWithoutAssistantsInputObjectSchema: SchemaType = z.object({
    where: z.lazy(() => ConfigsWhereInputObjectSchema).optional(), data: z.union([z.lazy(() => ConfigsUpdateWithoutAssistantsInputObjectSchema), z.lazy(() => ConfigsUncheckedUpdateWithoutAssistantsInputObjectSchema)])
}).strict() as SchemaType;
