/* eslint-disable */
import { z } from 'zod';
import { AsssitantInputSchema } from '../input/AsssitantInput.schema';
import { ConfigsCountOutputTypeArgsObjectSchema } from './ConfigsCountOutputTypeArgs.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.configsSelect>;
export const ConfigsSelectObjectSchema: SchemaType = z.object({
    config_id: z.boolean().optional(), tags: z.boolean().optional(), recursion_limit: z.boolean().optional(), configurable: z.boolean().optional(), assistants: z.union([z.boolean(),
    z.lazy(() => AsssitantInputSchema.findMany)]).optional(), _count: z.union([z.boolean(),
    z.lazy(() => ConfigsCountOutputTypeArgsObjectSchema)]).optional()
}).strict() as SchemaType;
