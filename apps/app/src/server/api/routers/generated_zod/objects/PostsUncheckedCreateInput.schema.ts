/* eslint-disable */
import { z } from "zod";

import type { Prisma } from "@zenstackhq/runtime/models";

type SchemaType = z.ZodType<Prisma.postsUncheckedCreateInput>;
export const PostsUncheckedCreateInputObjectSchema: SchemaType = z
  .object({
    id: z.string().optional(),
    user_id: z.string().optional(),
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
  })
  .strict() as SchemaType;
