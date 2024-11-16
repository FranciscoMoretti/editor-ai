/* eslint-disable */
import { z } from "zod";
import { ConfigsSelectObjectSchema } from "./ConfigsSelect.schema";
import { ConfigsIncludeObjectSchema } from "./ConfigsInclude.schema";

import type { Prisma } from "@zenstackhq/runtime/models";

type SchemaType = z.ZodType<Prisma.configsArgs>;
export const ConfigsArgsObjectSchema: SchemaType = z
  .object({
    select: z.lazy(() => ConfigsSelectObjectSchema).optional(),
    include: z.lazy(() => ConfigsIncludeObjectSchema).optional(),
  })
  .strict() as SchemaType;
