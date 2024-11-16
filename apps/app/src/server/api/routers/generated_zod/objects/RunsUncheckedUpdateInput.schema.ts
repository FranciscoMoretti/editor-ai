/* eslint-disable */
import { z } from "zod";
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema";
import { DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema";
import { RunStatusSchema } from "../enums/RunStatus.schema";
import { EnumRunStatusFieldUpdateOperationsInputObjectSchema } from "./EnumRunStatusFieldUpdateOperationsInput.schema";
import { JsonNullValueInputSchema } from "../enums/JsonNullValueInput.schema";
import { MultitaskStrategySchema } from "../enums/MultitaskStrategy.schema";
import { EnumMultitaskStrategyFieldUpdateOperationsInputObjectSchema } from "./EnumMultitaskStrategyFieldUpdateOperationsInput.schema";

import type { Prisma } from "@zenstackhq/runtime/models";

const literalSchema = z.union([z.string(), z.number(), z.boolean()]);
const jsonSchema: z.ZodType<Prisma.InputJsonValue> = z.lazy(() =>
  z.union([
    literalSchema,
    z.array(jsonSchema.nullable()),
    z.record(jsonSchema.nullable()),
  ]),
);

type SchemaType = z.ZodType<Prisma.runsUncheckedUpdateInput>;
export const RunsUncheckedUpdateInputObjectSchema: SchemaType = z
  .object({
    run_id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    user_id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    thread_id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    assistant_id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    created_at: z
      .union([
        z.union([z.date(), z.string().datetime().optional()]),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    updated_at: z
      .union([
        z.union([z.date(), z.string().datetime().optional()]),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    status: z
      .union([
        z.lazy(() => RunStatusSchema),
        z.lazy(() => EnumRunStatusFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    metadata: z
      .union([z.lazy(() => JsonNullValueInputSchema), jsonSchema])
      .optional(),
    kwargs: z
      .union([z.lazy(() => JsonNullValueInputSchema), jsonSchema])
      .optional(),
    multitask_strategy: z
      .union([
        z.lazy(() => MultitaskStrategySchema),
        z.lazy(
          () => EnumMultitaskStrategyFieldUpdateOperationsInputObjectSchema,
        ),
      ])
      .optional(),
  })
  .strict() as SchemaType;
