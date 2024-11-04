/* eslint-disable */
import { z } from 'zod';
import { ConfigsCountOutputTypeSelectObjectSchema } from './ConfigsCountOutputTypeSelect.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.ConfigsCountOutputTypeArgs>;
export const ConfigsCountOutputTypeArgsObjectSchema: SchemaType = z.object({
    select: z.lazy(() => ConfigsCountOutputTypeSelectObjectSchema).optional()
}).strict() as SchemaType;
