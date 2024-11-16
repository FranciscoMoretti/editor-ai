/* eslint-disable */
import { z } from "zod";
import { JsonNullValueInputSchema } from "../enums/JsonNullValueInput.schema";

import type { Prisma } from "@zenstackhq/runtime/models";

const literalSchema = z.union([z.string(), z.number(), z.boolean()]);
const jsonSchema: z.ZodType<Prisma.InputJsonValue> = z.lazy(() =>
  z.union([
    literalSchema,
    z.array(jsonSchema.nullable()),
    z.record(jsonSchema.nullable()),
  ]),
);

type SchemaType = z.ZodType<Prisma.asssitantsCreateManyUsersInput>;
export const AsssitantsCreateManyUsersInputObjectSchema: SchemaType = z
  .object({
    assistant_id: z.string().optional(),
    graph_id: z.string(),
    config_id: z.string(),
    created_at: z.union([
      z.date().optional(),
      z.string().datetime().optional(),
    ]),
    updated_at: z.union([
      z.date().optional(),
      z.string().datetime().optional(),
    ]),
    metadata: z
      .union([z.lazy(() => JsonNullValueInputSchema), jsonSchema])
      .optional(),
    version: z.number().optional(),
    name: z.string().optional(),
  })
  .strict() as SchemaType;