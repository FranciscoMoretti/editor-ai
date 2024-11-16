/* eslint-disable */
import { z } from "zod";
import { UsersCountOutputTypeSelectObjectSchema } from "./UsersCountOutputTypeSelect.schema";

import type { Prisma } from "@zenstackhq/runtime/models";

type SchemaType = z.ZodType<Prisma.UsersCountOutputTypeArgs>;
export const UsersCountOutputTypeArgsObjectSchema: SchemaType = z
  .object({
    select: z.lazy(() => UsersCountOutputTypeSelectObjectSchema).optional(),
  })
  .strict() as SchemaType;
