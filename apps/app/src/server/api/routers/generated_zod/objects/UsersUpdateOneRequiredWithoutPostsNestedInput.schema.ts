/* eslint-disable */
import { z } from "zod";
import { UsersCreateWithoutPostsInputObjectSchema } from "./UsersCreateWithoutPostsInput.schema";
import { UsersUncheckedCreateWithoutPostsInputObjectSchema } from "./UsersUncheckedCreateWithoutPostsInput.schema";
import { UsersCreateOrConnectWithoutPostsInputObjectSchema } from "./UsersCreateOrConnectWithoutPostsInput.schema";
import { UsersUpsertWithoutPostsInputObjectSchema } from "./UsersUpsertWithoutPostsInput.schema";
import { UsersWhereUniqueInputObjectSchema } from "./UsersWhereUniqueInput.schema";
import { UsersUpdateToOneWithWhereWithoutPostsInputObjectSchema } from "./UsersUpdateToOneWithWhereWithoutPostsInput.schema";
import { UsersUpdateWithoutPostsInputObjectSchema } from "./UsersUpdateWithoutPostsInput.schema";
import { UsersUncheckedUpdateWithoutPostsInputObjectSchema } from "./UsersUncheckedUpdateWithoutPostsInput.schema";

import type { Prisma } from "@zenstackhq/runtime/models";

type SchemaType =
  z.ZodType<Prisma.usersUpdateOneRequiredWithoutPostsNestedInput>;
export const UsersUpdateOneRequiredWithoutPostsNestedInputObjectSchema: SchemaType =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UsersCreateWithoutPostsInputObjectSchema),
          z.lazy(() => UsersUncheckedCreateWithoutPostsInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => UsersCreateOrConnectWithoutPostsInputObjectSchema)
        .optional(),
      upsert: z.lazy(() => UsersUpsertWithoutPostsInputObjectSchema).optional(),
      connect: z.lazy(() => UsersWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => UsersUpdateToOneWithWhereWithoutPostsInputObjectSchema),
          z.lazy(() => UsersUpdateWithoutPostsInputObjectSchema),
          z.lazy(() => UsersUncheckedUpdateWithoutPostsInputObjectSchema),
        ])
        .optional(),
    })
    .strict() as SchemaType;
