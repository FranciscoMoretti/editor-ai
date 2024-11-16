/* eslint-disable */
import { z } from "zod";
import { UsersCreateWithoutAssistantsInputObjectSchema } from "./UsersCreateWithoutAssistantsInput.schema";
import { UsersUncheckedCreateWithoutAssistantsInputObjectSchema } from "./UsersUncheckedCreateWithoutAssistantsInput.schema";
import { UsersCreateOrConnectWithoutAssistantsInputObjectSchema } from "./UsersCreateOrConnectWithoutAssistantsInput.schema";
import { UsersUpsertWithoutAssistantsInputObjectSchema } from "./UsersUpsertWithoutAssistantsInput.schema";
import { UsersWhereUniqueInputObjectSchema } from "./UsersWhereUniqueInput.schema";
import { UsersUpdateToOneWithWhereWithoutAssistantsInputObjectSchema } from "./UsersUpdateToOneWithWhereWithoutAssistantsInput.schema";
import { UsersUpdateWithoutAssistantsInputObjectSchema } from "./UsersUpdateWithoutAssistantsInput.schema";
import { UsersUncheckedUpdateWithoutAssistantsInputObjectSchema } from "./UsersUncheckedUpdateWithoutAssistantsInput.schema";

import type { Prisma } from "@zenstackhq/runtime/models";

type SchemaType =
  z.ZodType<Prisma.usersUpdateOneRequiredWithoutAssistantsNestedInput>;
export const UsersUpdateOneRequiredWithoutAssistantsNestedInputObjectSchema: SchemaType =
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
      upsert: z
        .lazy(() => UsersUpsertWithoutAssistantsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => UsersWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(
            () => UsersUpdateToOneWithWhereWithoutAssistantsInputObjectSchema,
          ),
          z.lazy(() => UsersUpdateWithoutAssistantsInputObjectSchema),
          z.lazy(() => UsersUncheckedUpdateWithoutAssistantsInputObjectSchema),
        ])
        .optional(),
    })
    .strict() as SchemaType;
