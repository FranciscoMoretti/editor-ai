/* eslint-disable */
import { z } from "zod";
import { UsersWhereInputObjectSchema } from "./UsersWhereInput.schema";
import { UsersUpdateWithoutPostsInputObjectSchema } from "./UsersUpdateWithoutPostsInput.schema";
import { UsersUncheckedUpdateWithoutPostsInputObjectSchema } from "./UsersUncheckedUpdateWithoutPostsInput.schema";

import type { Prisma } from "@zenstackhq/runtime/models";

type SchemaType = z.ZodType<Prisma.usersUpdateToOneWithWhereWithoutPostsInput>;
export const UsersUpdateToOneWithWhereWithoutPostsInputObjectSchema: SchemaType =
  z
    .object({
      where: z.lazy(() => UsersWhereInputObjectSchema).optional(),
      data: z.union([
        z.lazy(() => UsersUpdateWithoutPostsInputObjectSchema),
        z.lazy(() => UsersUncheckedUpdateWithoutPostsInputObjectSchema),
      ]),
    })
    .strict() as SchemaType;
