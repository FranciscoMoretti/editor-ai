/* eslint-disable */
import { z } from 'zod';
import { RunStatusSchema } from '../enums/RunStatus.schema';
import { JsonNullValueInputSchema } from '../enums/JsonNullValueInput.schema';
import { MultitaskStrategySchema } from '../enums/MultitaskStrategy.schema';

import type { Prisma } from '@zenstackhq/runtime/models';


const literalSchema = z.union([z.string(), z.number(), z.boolean()]);
const jsonSchema: z.ZodType<Prisma.InputJsonValue> = z.lazy(() =>
    z.union([literalSchema, z.array(jsonSchema.nullable()), z.record(jsonSchema.nullable())])
);

type SchemaType = z.ZodType<Prisma.runsCreateInput>;
export const RunsCreateInputObjectSchema: SchemaType = z.object({
    run_id: z.string().optional(), thread_id: z.string(), assistant_id: z.string(), created_at: z.union([z.date().optional(), z.string().datetime().optional()]), updated_at: z.union([z.date().optional(), z.string().datetime().optional()]), status: z.lazy(() => RunStatusSchema), metadata: z.union([z.lazy(() => JsonNullValueInputSchema),
        jsonSchema]), kwargs: z.union([z.lazy(() => JsonNullValueInputSchema),
            jsonSchema]), multitask_strategy: z.lazy(() => MultitaskStrategySchema)
}).strict() as SchemaType;
