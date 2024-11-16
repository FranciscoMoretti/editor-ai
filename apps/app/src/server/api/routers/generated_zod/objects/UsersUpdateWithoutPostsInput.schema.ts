/* eslint-disable */
import { z } from "zod";
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema";
import { NullableStringFieldUpdateOperationsInputObjectSchema } from "./NullableStringFieldUpdateOperationsInput.schema";
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from "./NullableDateTimeFieldUpdateOperationsInput.schema";
import { AsssitantsUpdateManyWithoutUsersNestedInputObjectSchema } from "./AsssitantsUpdateManyWithoutUsersNestedInput.schema";

import type { Prisma } from "@zenstackhq/runtime/models";

type SchemaType = z.ZodType<Prisma.usersUpdateWithoutPostsInput>;
export const UsersUpdateWithoutPostsInputObjectSchema: SchemaType = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    email: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    full_name: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
        z.null(),
      ])
      .optional()
      .nullable(),
    avatar_url: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
        z.null(),
      ])
      .optional()
      .nullable(),
    created_at: z
      .union([
        z.union([z.date(), z.string().datetime().optional()]),
        z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema),
        z.null(),
      ])
      .optional()
      .nullable(),
    updated_at: z
      .union([
        z.union([z.date(), z.string().datetime().optional()]),
        z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema),
        z.null(),
      ])
      .optional()
      .nullable(),
    assistants: z
      .lazy(() => AsssitantsUpdateManyWithoutUsersNestedInputObjectSchema)
      .optional(),
  })
  .strict() as SchemaType;