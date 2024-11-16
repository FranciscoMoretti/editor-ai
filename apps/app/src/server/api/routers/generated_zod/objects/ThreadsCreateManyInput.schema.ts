/* eslint-disable */
import { z } from "zod";
import { JsonNullValueInputSchema } from "../enums/JsonNullValueInput.schema";
import { ThreadStatusSchema } from "../enums/ThreadStatus.schema";

import type { Prisma } from "@zenstackhq/runtime/models";

const literalSchema = z.union([z.string(), z.number(), z.boolean()]);
const jsonSchema: z.ZodType<Prisma.InputJsonValue> = z.lazy(() =>
  z.union([
    literalSchema,
    z.array(jsonSchema.nullable()),
    z.record(jsonSchema.nullable()),
  ]),
);

type SchemaType = z.ZodType<Prisma.threadsCreateManyInput>;
export const ThreadsCreateManyInputObjectSchema: SchemaType = z
  .object({
    thread_id: z.string().optional(),
    user_id: z.string().optional(),
    created_at: z.union([
      z.date().optional(),
      z.string().datetime().optional(),
    ]),
    updated_at: z.union([
      z.date().optional(),
      z.string().datetime().optional(),
    ]),
    metadata: z.union([z.lazy(() => JsonNullValueInputSchema), jsonSchema]),
    status: z.lazy(() => ThreadStatusSchema).optional(),
    values: z
      .union([z.lazy(() => JsonNullValueInputSchema), jsonSchema])
      .optional(),
  })
  .strict() as SchemaType;