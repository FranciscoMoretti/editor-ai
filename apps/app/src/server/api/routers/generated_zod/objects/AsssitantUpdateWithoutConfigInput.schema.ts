/* eslint-disable */
import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { JsonNullValueInputSchema } from '../enums/JsonNullValueInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { UsersUpdateOneRequiredWithoutAssistantsNestedInputObjectSchema } from './UsersUpdateOneRequiredWithoutAssistantsNestedInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';


const literalSchema = z.union([z.string(), z.number(), z.boolean()]);
const jsonSchema: z.ZodType<Prisma.InputJsonValue> = z.lazy(() =>
    z.union([literalSchema, z.array(jsonSchema.nullable()), z.record(jsonSchema.nullable())])
);

type SchemaType = z.ZodType<Prisma.asssitantUpdateWithoutConfigInput>;
export const AsssitantUpdateWithoutConfigInputObjectSchema: SchemaType = z.object({
    assistant_id: z.union([z.string(),
    z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(), graph_id: z.union([z.string(),
    z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(), created_at: z.union([z.union([z.date(), z.string().datetime().optional()]),
    z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(), updated_at: z.union([z.union([z.date(), z.string().datetime().optional()]),
    z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(), metadata: z.union([z.lazy(() => JsonNullValueInputSchema),
        jsonSchema]).optional(), version: z.union([z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(), name: z.union([z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(), users: z.lazy(() => UsersUpdateOneRequiredWithoutAssistantsNestedInputObjectSchema).optional()
}).strict() as SchemaType;
