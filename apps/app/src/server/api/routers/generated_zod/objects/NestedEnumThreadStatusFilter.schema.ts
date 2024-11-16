/* eslint-disable */
import { z } from "zod";
import { ThreadStatusSchema } from "../enums/ThreadStatus.schema";

import type { Prisma } from "@zenstackhq/runtime/models";

type SchemaType = z.ZodType<Prisma.NestedEnumThreadStatusFilter>;
export const NestedEnumThreadStatusFilterObjectSchema: SchemaType = z
  .object({
    equals: z.lazy(() => ThreadStatusSchema).optional(),
    in: z
      .lazy(() => ThreadStatusSchema)
      .array()
      .optional(),
    notIn: z
      .lazy(() => ThreadStatusSchema)
      .array()
      .optional(),
    not: z
      .union([
        z.lazy(() => ThreadStatusSchema),
        z.lazy(() => NestedEnumThreadStatusFilterObjectSchema),
      ])
      .optional(),
  })
  .strict() as SchemaType;