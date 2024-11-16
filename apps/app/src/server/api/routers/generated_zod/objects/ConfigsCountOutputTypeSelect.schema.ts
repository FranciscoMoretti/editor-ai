/* eslint-disable */
import { z } from "zod";

import type { Prisma } from "@zenstackhq/runtime/models";

type SchemaType = z.ZodType<Prisma.ConfigsCountOutputTypeSelect>;
export const ConfigsCountOutputTypeSelectObjectSchema: SchemaType = z
  .object({
    assistants: z.boolean().optional(),
  })
  .strict() as SchemaType;
