/* eslint-disable */
import { z } from 'zod';


import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.NullableStringFieldUpdateOperationsInput>;
export const NullableStringFieldUpdateOperationsInputObjectSchema: SchemaType = z.object({
    set: z.union([z.string(),
    z.null()]).optional().nullable()
}).strict() as SchemaType;
