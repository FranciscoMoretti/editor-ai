/* eslint-disable */
import { z } from 'zod';
import { AsssitantSelectObjectSchema } from './AsssitantSelect.schema';
import { AsssitantIncludeObjectSchema } from './AsssitantInclude.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.asssitantArgs>;
export const AsssitantArgsObjectSchema: SchemaType = z.object({
    select: z.lazy(() => AsssitantSelectObjectSchema).optional(), include: z.lazy(() => AsssitantIncludeObjectSchema).optional()
}).strict() as SchemaType;
