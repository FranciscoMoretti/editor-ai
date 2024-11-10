/* eslint-disable */
import { z } from 'zod';
import { AsssitantsInputSchema } from '../input/AsssitantsInput.schema';
import { ConfigsCountOutputTypeArgsObjectSchema } from './ConfigsCountOutputTypeArgs.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.configsInclude>;
export const ConfigsIncludeObjectSchema: SchemaType = z.object({
    assistants: z.union([z.boolean(),
    z.lazy(() => AsssitantsInputSchema.findMany)]).optional(), _count: z.union([z.boolean(),
    z.lazy(() => ConfigsCountOutputTypeArgsObjectSchema)]).optional()
}).strict() as SchemaType;
