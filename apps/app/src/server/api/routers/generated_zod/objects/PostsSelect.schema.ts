/* eslint-disable */
import { z } from "zod";
import { UsersArgsObjectSchema } from "./UsersArgs.schema";

import type { Prisma } from "@zenstackhq/runtime/models";

type SchemaType = z.ZodType<Prisma.postsSelect>;
export const PostsSelectObjectSchema: SchemaType = z
  .object({
    id: z.boolean().optional(),
    user_id: z.boolean().optional(),
    title: z.boolean().optional(),
    content: z.boolean().optional(),
    created_at: z.boolean().optional(),
    updated_at: z.boolean().optional(),
    users: z
      .union([z.boolean(), z.lazy(() => UsersArgsObjectSchema)])
      .optional(),
  })
  .strict() as SchemaType;
