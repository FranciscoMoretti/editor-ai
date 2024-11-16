/* eslint-disable */
import { z } from "zod";
import { AsssitantsScalarWhereInputObjectSchema } from "./AsssitantsScalarWhereInput.schema";
import { AsssitantsUpdateManyMutationInputObjectSchema } from "./AsssitantsUpdateManyMutationInput.schema";
import { AsssitantsUncheckedUpdateManyWithoutUsersInputObjectSchema } from "./AsssitantsUncheckedUpdateManyWithoutUsersInput.schema";

import type { Prisma } from "@zenstackhq/runtime/models";

type SchemaType =
  z.ZodType<Prisma.asssitantsUpdateManyWithWhereWithoutUsersInput>;
export const AsssitantsUpdateManyWithWhereWithoutUsersInputObjectSchema: SchemaType =
  z
    .object({
      where: z.lazy(() => AsssitantsScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => AsssitantsUpdateManyMutationInputObjectSchema),
        z.lazy(
          () => AsssitantsUncheckedUpdateManyWithoutUsersInputObjectSchema,
        ),
      ]),
    })
    .strict() as SchemaType;
