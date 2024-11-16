/* eslint-disable */
import { z } from "zod";
import { PostsWhereUniqueInputObjectSchema } from "./PostsWhereUniqueInput.schema";
import { PostsUpdateWithoutUsersInputObjectSchema } from "./PostsUpdateWithoutUsersInput.schema";
import { PostsUncheckedUpdateWithoutUsersInputObjectSchema } from "./PostsUncheckedUpdateWithoutUsersInput.schema";
import { PostsCreateWithoutUsersInputObjectSchema } from "./PostsCreateWithoutUsersInput.schema";
import { PostsUncheckedCreateWithoutUsersInputObjectSchema } from "./PostsUncheckedCreateWithoutUsersInput.schema";

import type { Prisma } from "@zenstackhq/runtime/models";

type SchemaType = z.ZodType<Prisma.postsUpsertWithWhereUniqueWithoutUsersInput>;
export const PostsUpsertWithWhereUniqueWithoutUsersInputObjectSchema: SchemaType =
  z
    .object({
      where: z.lazy(() => PostsWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => PostsUpdateWithoutUsersInputObjectSchema),
        z.lazy(() => PostsUncheckedUpdateWithoutUsersInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => PostsCreateWithoutUsersInputObjectSchema),
        z.lazy(() => PostsUncheckedCreateWithoutUsersInputObjectSchema),
      ]),
    })
    .strict() as SchemaType;
