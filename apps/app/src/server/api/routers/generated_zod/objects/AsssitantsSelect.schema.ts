/* eslint-disable */
import { z } from "zod";
import { ConfigsArgsObjectSchema } from "./ConfigsArgs.schema";
import { UsersArgsObjectSchema } from "./UsersArgs.schema";

import type { Prisma } from "@zenstackhq/runtime/models";

type SchemaType = z.ZodType<Prisma.asssitantsSelect>;
export const AsssitantsSelectObjectSchema: SchemaType = z
  .object({
    assistant_id: z.boolean().optional(),
    user_id: z.boolean().optional(),
    graph_id: z.boolean().optional(),
    config_id: z.boolean().optional(),
    config: z
      .union([z.boolean(), z.lazy(() => ConfigsArgsObjectSchema)])
      .optional(),
    created_at: z.boolean().optional(),
    updated_at: z.boolean().optional(),
    metadata: z.boolean().optional(),
    version: z.boolean().optional(),
    name: z.boolean().optional(),
    users: z
      .union([z.boolean(), z.lazy(() => UsersArgsObjectSchema)])
      .optional(),
  })
  .strict() as SchemaType;
