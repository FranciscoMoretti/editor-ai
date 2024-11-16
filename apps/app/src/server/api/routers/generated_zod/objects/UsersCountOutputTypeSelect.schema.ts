/* eslint-disable */
import { z } from "zod";

import type { Prisma } from "@zenstackhq/runtime/models";

type SchemaType = z.ZodType<Prisma.UsersCountOutputTypeSelect>;
export const UsersCountOutputTypeSelectObjectSchema: SchemaType = z
  .object({
    posts: z.boolean().optional(),
    assistants: z.boolean().optional(),
  })
  .strict() as SchemaType;
