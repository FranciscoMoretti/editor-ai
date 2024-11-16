/* eslint-disable */
import { z } from "zod";
import { PostsWhereUniqueInputObjectSchema } from "./PostsWhereUniqueInput.schema";
import { PostsCreateWithoutUsersInputObjectSchema } from "./PostsCreateWithoutUsersInput.schema";
import { PostsUncheckedCreateWithoutUsersInputObjectSchema } from "./PostsUncheckedCreateWithoutUsersInput.schema";

import type { Prisma } from "@zenstackhq/runtime/models";

type SchemaType = z.ZodType<Prisma.postsCreateOrConnectWithoutUsersInput>;
export const PostsCreateOrConnectWithoutUsersInputObjectSchema: SchemaType = z
  .object({
    where: z.lazy(() => PostsWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => PostsCreateWithoutUsersInputObjectSchema),
      z.lazy(() => PostsUncheckedCreateWithoutUsersInputObjectSchema),
    ]),
  })
  .strict() as SchemaType;
