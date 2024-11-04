/* eslint-disable */
import { z } from 'zod';
import { ThreadStatusSchema } from '../enums/ThreadStatus.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.EnumThreadStatusFieldUpdateOperationsInput>;
export const EnumThreadStatusFieldUpdateOperationsInputObjectSchema: SchemaType = z.object({
    set: z.lazy(() => ThreadStatusSchema).optional()
}).strict() as SchemaType;
