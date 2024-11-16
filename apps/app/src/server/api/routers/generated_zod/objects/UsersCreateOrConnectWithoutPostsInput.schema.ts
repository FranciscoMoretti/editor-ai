/* eslint-disable */
import { z } from "zod";
import { UsersWhereUniqueInputObjectSchema } from "./UsersWhereUniqueInput.schema";
import { UsersCreateWithoutPostsInputObjectSchema } from "./UsersCreateWithoutPostsInput.schema";
import { UsersUncheckedCreateWithoutPostsInputObjectSchema } from "./UsersUncheckedCreateWithoutPostsInput.schema";

import type { Prisma } from "@zenstackhq/runtime/models";

type SchemaType = z.ZodType<Prisma.usersCreateOrConnectWithoutPostsInput>;
export const UsersCreateOrConnectWithoutPostsInputObjectSchema: SchemaType = z
  .object({
    where: z.lazy(() => UsersWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UsersCreateWithoutPostsInputObjectSchema),
      z.lazy(() => UsersUncheckedCreateWithoutPostsInputObjectSchema),
    ]),
  })
  .strict() as SchemaType;
