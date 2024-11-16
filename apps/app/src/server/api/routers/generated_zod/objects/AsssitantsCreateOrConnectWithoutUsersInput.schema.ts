/* eslint-disable */
import { z } from "zod";
import { AsssitantsWhereUniqueInputObjectSchema } from "./AsssitantsWhereUniqueInput.schema";
import { AsssitantsCreateWithoutUsersInputObjectSchema } from "./AsssitantsCreateWithoutUsersInput.schema";
import { AsssitantsUncheckedCreateWithoutUsersInputObjectSchema } from "./AsssitantsUncheckedCreateWithoutUsersInput.schema";

import type { Prisma } from "@zenstackhq/runtime/models";

type SchemaType = z.ZodType<Prisma.asssitantsCreateOrConnectWithoutUsersInput>;
export const AsssitantsCreateOrConnectWithoutUsersInputObjectSchema: SchemaType =
  z
    .object({
      where: z.lazy(() => AsssitantsWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => AsssitantsCreateWithoutUsersInputObjectSchema),
        z.lazy(() => AsssitantsUncheckedCreateWithoutUsersInputObjectSchema),
      ]),
    })
    .strict() as SchemaType;
