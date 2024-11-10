/* eslint-disable */
import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { ConfigsUpdatetagsInputObjectSchema } from './ConfigsUpdatetagsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { JsonNullValueInputSchema } from '../enums/JsonNullValueInput.schema';
import { AsssitantsUncheckedUpdateManyWithoutConfigNestedInputObjectSchema } from './AsssitantsUncheckedUpdateManyWithoutConfigNestedInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';


const literalSchema = z.union([z.string(), z.number(), z.boolean()]);
const jsonSchema: z.ZodType<Prisma.InputJsonValue> = z.lazy(() =>
    z.union([literalSchema, z.array(jsonSchema.nullable()), z.record(jsonSchema.nullable())])
);

type SchemaType = z.ZodType<Prisma.configsUncheckedUpdateInput>;
export const ConfigsUncheckedUpdateInputObjectSchema: SchemaType = z.object({
    config_id: z.union([z.string(),
    z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(), user_id: z.union([z.string(),
    z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(), tags: z.union([z.lazy(() => ConfigsUpdatetagsInputObjectSchema),
    z.string().array()]).optional(), recursion_limit: z.union([z.number(),
    z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(), configurable: z.union([z.lazy(() => JsonNullValueInputSchema),
        jsonSchema]).optional(), assistants: z.lazy(() => AsssitantsUncheckedUpdateManyWithoutConfigNestedInputObjectSchema).optional()
}).strict() as SchemaType;
