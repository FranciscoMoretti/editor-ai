/* eslint-disable */
import { z } from "zod";
import { UsersCreateWithoutAssistantsInputObjectSchema } from "./UsersCreateWithoutAssistantsInput.schema";
import { UsersUncheckedCreateWithoutAssistantsInputObjectSchema } from "./UsersUncheckedCreateWithoutAssistantsInput.schema";
import { UsersCreateOrConnectWithoutAssistantsInputObjectSchema } from "./UsersCreateOrConnectWithoutAssistantsInput.schema";
import { UsersWhereUniqueInputObjectSchema } from "./UsersWhereUniqueInput.schema";

import type { Prisma } from "@zenstackhq/runtime/models";

type SchemaType = z.ZodType<Prisma.usersCreateNestedOneWithoutAssistantsInput>;
export const UsersCreateNestedOneWithoutAssistantsInputObjectSchema: SchemaType =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UsersCreateWithoutAssistantsInputObjectSchema),
          z.lazy(() => UsersUncheckedCreateWithoutAssistantsInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => UsersCreateOrConnectWithoutAssistantsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => UsersWhereUniqueInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
