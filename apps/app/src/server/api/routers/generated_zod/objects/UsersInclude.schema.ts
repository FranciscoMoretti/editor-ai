/* eslint-disable */
import { z } from "zod";
import { PostsInputSchema } from "../input/PostsInput.schema";
import { AsssitantsInputSchema } from "../input/AsssitantsInput.schema";
import { UsersCountOutputTypeArgsObjectSchema } from "./UsersCountOutputTypeArgs.schema";

import type { Prisma } from "@zenstackhq/runtime/models";

type SchemaType = z.ZodType<Prisma.usersInclude>;
export const UsersIncludeObjectSchema: SchemaType = z
  .object({
    posts: z
      .union([z.boolean(), z.lazy(() => PostsInputSchema.findMany)])
      .optional(),
    assistants: z
      .union([z.boolean(), z.lazy(() => AsssitantsInputSchema.findMany)])
      .optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => UsersCountOutputTypeArgsObjectSchema)])
      .optional(),
  })
  .strict() as SchemaType;
