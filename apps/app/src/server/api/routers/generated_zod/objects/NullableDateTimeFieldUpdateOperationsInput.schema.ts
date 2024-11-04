/* eslint-disable */
import { z } from 'zod';


import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.NullableDateTimeFieldUpdateOperationsInput>;
export const NullableDateTimeFieldUpdateOperationsInputObjectSchema: SchemaType = z.object({
    set: z.union([z.union([z.date(), z.string().datetime().optional()]),
    z.null()]).optional().nullable()
}).strict() as SchemaType;
