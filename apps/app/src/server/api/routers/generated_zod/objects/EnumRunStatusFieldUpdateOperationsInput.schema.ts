/* eslint-disable */
import { z } from 'zod';
import { RunStatusSchema } from '../enums/RunStatus.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.EnumRunStatusFieldUpdateOperationsInput>;
export const EnumRunStatusFieldUpdateOperationsInputObjectSchema: SchemaType = z.object({
    set: z.lazy(() => RunStatusSchema).optional()
}).strict() as SchemaType;
