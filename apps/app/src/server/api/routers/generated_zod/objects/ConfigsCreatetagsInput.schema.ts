/* eslint-disable */
import { z } from "zod";

import type { Prisma } from "@zenstackhq/runtime/models";

type SchemaType = z.ZodType<Prisma.configsCreatetagsInput>;
export const ConfigsCreatetagsInputObjectSchema: SchemaType = z
  .object({
    set: z.string().array(),
  })
  .strict() as SchemaType;
