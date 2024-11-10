/* eslint-disable */
import { z } from 'zod';
import { AsssitantsSelectObjectSchema } from './AsssitantsSelect.schema';
import { AsssitantsIncludeObjectSchema } from './AsssitantsInclude.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.asssitantsArgs>;
export const AsssitantsArgsObjectSchema: SchemaType = z.object({
    select: z.lazy(() => AsssitantsSelectObjectSchema).optional(), include: z.lazy(() => AsssitantsIncludeObjectSchema).optional()
}).strict() as SchemaType;
