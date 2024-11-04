/* eslint-disable */
import { z } from 'zod';
import { JsonNullValueInputSchema } from '../enums/JsonNullValueInput.schema';
import { ConfigsCreateNestedOneWithoutAssistantsInputObjectSchema } from './ConfigsCreateNestedOneWithoutAssistantsInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';


const literalSchema = z.union([z.string(), z.number(), z.boolean()]);
const jsonSchema: z.ZodType<Prisma.InputJsonValue> = z.lazy(() =>
    z.union([literalSchema, z.array(jsonSchema.nullable()), z.record(jsonSchema.nullable())])
);

type SchemaType = z.ZodType<Prisma.asssitantCreateWithoutUsersInput>;
export const AsssitantCreateWithoutUsersInputObjectSchema: SchemaType = z.object({
    assistant_id: z.string(), graph_id: z.string(), created_at: z.union([z.date().optional(), z.string().datetime().optional()]), updated_at: z.union([z.date().optional(), z.string().datetime().optional()]), metadata: z.union([z.lazy(() => JsonNullValueInputSchema),
        jsonSchema]), version: z.number(), name: z.string(), config: z.lazy(() => ConfigsCreateNestedOneWithoutAssistantsInputObjectSchema)
}).strict() as SchemaType;
