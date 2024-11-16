/* eslint-disable */
import { z } from "zod";
import { UsersCreateNestedOneWithoutPostsInputObjectSchema } from "./UsersCreateNestedOneWithoutPostsInput.schema";

import type { Prisma } from "@zenstackhq/runtime/models";

type SchemaType = z.ZodType<Prisma.postsCreateInput>;
export const PostsCreateInputObjectSchema: SchemaType = z
  .object({
    id: z.string().optional(),
    title: z.string(),
    content: z.string(),
    created_at: z.union([
      z.date().optional(),
      z.string().datetime().optional(),
    ]),
    updated_at: z.union([
      z.date().optional(),
      z.string().datetime().optional(),
    ]),
    users: z
      .lazy(() => UsersCreateNestedOneWithoutPostsInputObjectSchema)
      .optional(),
  })
  .strict() as SchemaType;
