/* eslint-disable */
import { z } from "zod";
import { UsersUpdateWithoutPostsInputObjectSchema } from "./UsersUpdateWithoutPostsInput.schema";
import { UsersUncheckedUpdateWithoutPostsInputObjectSchema } from "./UsersUncheckedUpdateWithoutPostsInput.schema";
import { UsersCreateWithoutPostsInputObjectSchema } from "./UsersCreateWithoutPostsInput.schema";
import { UsersUncheckedCreateWithoutPostsInputObjectSchema } from "./UsersUncheckedCreateWithoutPostsInput.schema";
import { UsersWhereInputObjectSchema } from "./UsersWhereInput.schema";

import type { Prisma } from "@zenstackhq/runtime/models";

type SchemaType = z.ZodType<Prisma.usersUpsertWithoutPostsInput>;
export const UsersUpsertWithoutPostsInputObjectSchema: SchemaType = z
  .object({
    update: z.union([
      z.lazy(() => UsersUpdateWithoutPostsInputObjectSchema),
      z.lazy(() => UsersUncheckedUpdateWithoutPostsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UsersCreateWithoutPostsInputObjectSchema),
      z.lazy(() => UsersUncheckedCreateWithoutPostsInputObjectSchema),
    ]),
    where: z.lazy(() => UsersWhereInputObjectSchema).optional(),
  })
  .strict() as SchemaType;
