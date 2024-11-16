/* eslint-disable */
import { z } from "zod";
import { AsssitantsWhereUniqueInputObjectSchema } from "./AsssitantsWhereUniqueInput.schema";
import { AsssitantsCreateWithoutConfigInputObjectSchema } from "./AsssitantsCreateWithoutConfigInput.schema";
import { AsssitantsUncheckedCreateWithoutConfigInputObjectSchema } from "./AsssitantsUncheckedCreateWithoutConfigInput.schema";

import type { Prisma } from "@zenstackhq/runtime/models";

type SchemaType = z.ZodType<Prisma.asssitantsCreateOrConnectWithoutConfigInput>;
export const AsssitantsCreateOrConnectWithoutConfigInputObjectSchema: SchemaType =
  z
    .object({
      where: z.lazy(() => AsssitantsWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => AsssitantsCreateWithoutConfigInputObjectSchema),
        z.lazy(() => AsssitantsUncheckedCreateWithoutConfigInputObjectSchema),
      ]),
    })
    .strict() as SchemaType;
