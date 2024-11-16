/* eslint-disable */
import { z } from "zod";
import { UsersSelectObjectSchema } from "./UsersSelect.schema";
import { UsersIncludeObjectSchema } from "./UsersInclude.schema";

import type { Prisma } from "@zenstackhq/runtime/models";

type SchemaType = z.ZodType<Prisma.usersArgs>;
export const UsersArgsObjectSchema: SchemaType = z
  .object({
    select: z.lazy(() => UsersSelectObjectSchema).optional(),
    include: z.lazy(() => UsersIncludeObjectSchema).optional(),
  })
  .strict() as SchemaType;
