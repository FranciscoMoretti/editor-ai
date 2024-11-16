/* eslint-disable */
import { z } from "zod";
import { AsssitantsCreateManyUsersInputObjectSchema } from "./AsssitantsCreateManyUsersInput.schema";

import type { Prisma } from "@zenstackhq/runtime/models";

type SchemaType = z.ZodType<Prisma.asssitantsCreateManyUsersInputEnvelope>;
export const AsssitantsCreateManyUsersInputEnvelopeObjectSchema: SchemaType = z
  .object({
    data: z.union([
      z.lazy(() => AsssitantsCreateManyUsersInputObjectSchema),
      z.lazy(() => AsssitantsCreateManyUsersInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict() as SchemaType;
