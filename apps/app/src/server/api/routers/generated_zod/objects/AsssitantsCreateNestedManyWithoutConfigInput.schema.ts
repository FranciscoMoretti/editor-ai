/* eslint-disable */
import { z } from "zod";
import { AsssitantsCreateWithoutConfigInputObjectSchema } from "./AsssitantsCreateWithoutConfigInput.schema";
import { AsssitantsUncheckedCreateWithoutConfigInputObjectSchema } from "./AsssitantsUncheckedCreateWithoutConfigInput.schema";
import { AsssitantsCreateOrConnectWithoutConfigInputObjectSchema } from "./AsssitantsCreateOrConnectWithoutConfigInput.schema";
import { AsssitantsCreateManyConfigInputEnvelopeObjectSchema } from "./AsssitantsCreateManyConfigInputEnvelope.schema";
import { AsssitantsWhereUniqueInputObjectSchema } from "./AsssitantsWhereUniqueInput.schema";

import type { Prisma } from "@zenstackhq/runtime/models";

type SchemaType =
  z.ZodType<Prisma.asssitantsCreateNestedManyWithoutConfigInput>;
export const AsssitantsCreateNestedManyWithoutConfigInputObjectSchema: SchemaType =
  z
    .object({
      create: z
        .union([
          z.lazy(() => AsssitantsCreateWithoutConfigInputObjectSchema),
          z.lazy(() => AsssitantsCreateWithoutConfigInputObjectSchema).array(),
          z.lazy(() => AsssitantsUncheckedCreateWithoutConfigInputObjectSchema),
          z
            .lazy(() => AsssitantsUncheckedCreateWithoutConfigInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => AsssitantsCreateOrConnectWithoutConfigInputObjectSchema),
          z
            .lazy(() => AsssitantsCreateOrConnectWithoutConfigInputObjectSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => AsssitantsCreateManyConfigInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => AsssitantsWhereUniqueInputObjectSchema),
          z.lazy(() => AsssitantsWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict() as SchemaType;
