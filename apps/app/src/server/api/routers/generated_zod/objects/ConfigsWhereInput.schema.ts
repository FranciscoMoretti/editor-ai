/* eslint-disable */
import { z } from "zod";
import { UuidFilterObjectSchema } from "./UuidFilter.schema";
import { StringFilterObjectSchema } from "./StringFilter.schema";
import { StringNullableListFilterObjectSchema } from "./StringNullableListFilter.schema";
import { IntFilterObjectSchema } from "./IntFilter.schema";
import { JsonFilterObjectSchema } from "./JsonFilter.schema";
import { AsssitantsListRelationFilterObjectSchema } from "./AsssitantsListRelationFilter.schema";

import type { Prisma } from "@zenstackhq/runtime/models";

type SchemaType = z.ZodType<Prisma.configsWhereInput>;
export const ConfigsWhereInputObjectSchema: SchemaType = z
  .object({
    AND: z
      .union([
        z.lazy(() => ConfigsWhereInputObjectSchema),
        z.lazy(() => ConfigsWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ConfigsWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ConfigsWhereInputObjectSchema),
        z.lazy(() => ConfigsWhereInputObjectSchema).array(),
      ])
      .optional(),
    config_id: z
      .union([z.lazy(() => UuidFilterObjectSchema), z.string()])
      .optional(),
    user_id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    tags: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
    recursion_limit: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    configurable: z.lazy(() => JsonFilterObjectSchema).optional(),
    assistants: z
      .lazy(() => AsssitantsListRelationFilterObjectSchema)
      .optional(),
  })
  .strict() as SchemaType;
