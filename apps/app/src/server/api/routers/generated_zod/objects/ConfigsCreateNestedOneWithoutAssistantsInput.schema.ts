/* eslint-disable */
import { z } from "zod";
import { ConfigsCreateWithoutAssistantsInputObjectSchema } from "./ConfigsCreateWithoutAssistantsInput.schema";
import { ConfigsUncheckedCreateWithoutAssistantsInputObjectSchema } from "./ConfigsUncheckedCreateWithoutAssistantsInput.schema";
import { ConfigsCreateOrConnectWithoutAssistantsInputObjectSchema } from "./ConfigsCreateOrConnectWithoutAssistantsInput.schema";
import { ConfigsWhereUniqueInputObjectSchema } from "./ConfigsWhereUniqueInput.schema";

import type { Prisma } from "@zenstackhq/runtime/models";

type SchemaType =
  z.ZodType<Prisma.configsCreateNestedOneWithoutAssistantsInput>;
export const ConfigsCreateNestedOneWithoutAssistantsInputObjectSchema: SchemaType =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ConfigsCreateWithoutAssistantsInputObjectSchema),
          z.lazy(
            () => ConfigsUncheckedCreateWithoutAssistantsInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => ConfigsCreateOrConnectWithoutAssistantsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => ConfigsWhereUniqueInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
