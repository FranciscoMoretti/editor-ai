/* eslint-disable */
import { z } from "zod";
import { PostsScalarWhereInputObjectSchema } from "./PostsScalarWhereInput.schema";
import { PostsUpdateManyMutationInputObjectSchema } from "./PostsUpdateManyMutationInput.schema";
import { PostsUncheckedUpdateManyWithoutUsersInputObjectSchema } from "./PostsUncheckedUpdateManyWithoutUsersInput.schema";

import type { Prisma } from "@zenstackhq/runtime/models";

type SchemaType = z.ZodType<Prisma.postsUpdateManyWithWhereWithoutUsersInput>;
export const PostsUpdateManyWithWhereWithoutUsersInputObjectSchema: SchemaType =
  z
    .object({
      where: z.lazy(() => PostsScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => PostsUpdateManyMutationInputObjectSchema),
        z.lazy(() => PostsUncheckedUpdateManyWithoutUsersInputObjectSchema),
      ]),
    })
    .strict() as SchemaType;
