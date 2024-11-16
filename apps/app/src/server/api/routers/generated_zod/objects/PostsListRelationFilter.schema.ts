/* eslint-disable */
import { z } from "zod";
import { PostsWhereInputObjectSchema } from "./PostsWhereInput.schema";

import type { Prisma } from "@zenstackhq/runtime/models";

type SchemaType = z.ZodType<Prisma.PostsListRelationFilter>;
export const PostsListRelationFilterObjectSchema: SchemaType = z
  .object({
    every: z.lazy(() => PostsWhereInputObjectSchema).optional(),
    some: z.lazy(() => PostsWhereInputObjectSchema).optional(),
    none: z.lazy(() => PostsWhereInputObjectSchema).optional(),
  })
  .strict() as SchemaType;
