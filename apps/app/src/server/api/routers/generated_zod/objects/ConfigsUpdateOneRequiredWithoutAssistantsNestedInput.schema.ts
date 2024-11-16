/* eslint-disable */
import { z } from "zod";
import { ConfigsCreateWithoutAssistantsInputObjectSchema } from "./ConfigsCreateWithoutAssistantsInput.schema";
import { ConfigsUncheckedCreateWithoutAssistantsInputObjectSchema } from "./ConfigsUncheckedCreateWithoutAssistantsInput.schema";
import { ConfigsCreateOrConnectWithoutAssistantsInputObjectSchema } from "./ConfigsCreateOrConnectWithoutAssistantsInput.schema";
import { ConfigsUpsertWithoutAssistantsInputObjectSchema } from "./ConfigsUpsertWithoutAssistantsInput.schema";
import { ConfigsWhereUniqueInputObjectSchema } from "./ConfigsWhereUniqueInput.schema";
import { ConfigsUpdateToOneWithWhereWithoutAssistantsInputObjectSchema } from "./ConfigsUpdateToOneWithWhereWithoutAssistantsInput.schema";
import { ConfigsUpdateWithoutAssistantsInputObjectSchema } from "./ConfigsUpdateWithoutAssistantsInput.schema";
import { ConfigsUncheckedUpdateWithoutAssistantsInputObjectSchema } from "./ConfigsUncheckedUpdateWithoutAssistantsInput.schema";

import type { Prisma } from "@zenstackhq/runtime/models";

type SchemaType =
  z.ZodType<Prisma.configsUpdateOneRequiredWithoutAssistantsNestedInput>;
export const ConfigsUpdateOneRequiredWithoutAssistantsNestedInputObjectSchema: SchemaType =
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
      upsert: z
        .lazy(() => ConfigsUpsertWithoutAssistantsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => ConfigsWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(
            () => ConfigsUpdateToOneWithWhereWithoutAssistantsInputObjectSchema,
          ),
          z.lazy(() => ConfigsUpdateWithoutAssistantsInputObjectSchema),
          z.lazy(
            () => ConfigsUncheckedUpdateWithoutAssistantsInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict() as SchemaType;
