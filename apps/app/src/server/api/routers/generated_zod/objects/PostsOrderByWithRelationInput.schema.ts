/* eslint-disable */
import { z } from "zod";
import { SortOrderSchema } from "../enums/SortOrder.schema";
import { UsersOrderByWithRelationInputObjectSchema } from "./UsersOrderByWithRelationInput.schema";

import type { Prisma } from "@zenstackhq/runtime/models";

type SchemaType = z.ZodType<Prisma.postsOrderByWithRelationInput>;
export const PostsOrderByWithRelationInputObjectSchema: SchemaType = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    user_id: z.lazy(() => SortOrderSchema).optional(),
    title: z.lazy(() => SortOrderSchema).optional(),
    content: z.lazy(() => SortOrderSchema).optional(),
    created_at: z.lazy(() => SortOrderSchema).optional(),
    updated_at: z.lazy(() => SortOrderSchema).optional(),
    users: z.lazy(() => UsersOrderByWithRelationInputObjectSchema).optional(),
  })
  .strict() as SchemaType;
