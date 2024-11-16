/* eslint-disable */
import { z } from "zod";
import { ConfigsCreatetagsInputObjectSchema } from "./ConfigsCreatetagsInput.schema";
import { JsonNullValueInputSchema } from "../enums/JsonNullValueInput.schema";
import { AsssitantsUncheckedCreateNestedManyWithoutConfigInputObjectSchema } from "./AsssitantsUncheckedCreateNestedManyWithoutConfigInput.schema";

import type { Prisma } from "@zenstackhq/runtime/models";

const literalSchema = z.union([z.string(), z.number(), z.boolean()]);
const jsonSchema: z.ZodType<Prisma.InputJsonValue> = z.lazy(() =>
  z.union([
    literalSchema,
    z.array(jsonSchema.nullable()),
    z.record(jsonSchema.nullable()),
  ]),
);

type SchemaType = z.ZodType<Prisma.configsUncheckedCreateInput>;
export const ConfigsUncheckedCreateInputObjectSchema: SchemaType = z
  .object({
    config_id: z.string().optional(),
    user_id: z.string().optional(),
    tags: z
      .union([
        z.lazy(() => ConfigsCreatetagsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    recursion_limit: z.number().optional(),
    configurable: z.union([z.lazy(() => JsonNullValueInputSchema), jsonSchema]),
    assistants: z
      .lazy(
        () => AsssitantsUncheckedCreateNestedManyWithoutConfigInputObjectSchema,
      )
      .optional(),
  })
  .strict() as SchemaType;