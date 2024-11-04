/* eslint-disable */
import { z } from 'zod';


import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.IntFieldUpdateOperationsInput>;
export const IntFieldUpdateOperationsInputObjectSchema: SchemaType = z.object({
    set: z.number().optional(), increment: z.number().optional(), decrement: z.number().optional(), multiply: z.number().optional(), divide: z.number().optional()
}).strict() as SchemaType;
