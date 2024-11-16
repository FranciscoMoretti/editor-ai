/* eslint-disable */
import { z } from "zod";

import type { Prisma } from "@zenstackhq/runtime/models";

type SchemaType = z.ZodType<Prisma.configsUpdatetagsInput>;
export const ConfigsUpdatetagsInputObjectSchema: SchemaType = z
  .object({
    set: z.string().array().optional(),
    push: z.union([z.string(), z.string().array()]).optional(),
  })
  .strict() as SchemaType;
