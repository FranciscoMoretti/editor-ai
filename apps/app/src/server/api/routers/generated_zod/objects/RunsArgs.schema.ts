/* eslint-disable */
import { z } from 'zod';
import { RunsSelectObjectSchema } from './RunsSelect.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.runsArgs>;
export const RunsArgsObjectSchema: SchemaType = z.object({
    select: z.lazy(() => RunsSelectObjectSchema).optional()
}).strict() as SchemaType;
