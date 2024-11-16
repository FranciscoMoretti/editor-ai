/* eslint-disable */
import { z } from "zod";
import { ThreadsSelectObjectSchema } from "./ThreadsSelect.schema";

import type { Prisma } from "@zenstackhq/runtime/models";

type SchemaType = z.ZodType<Prisma.threadsArgs>;
export const ThreadsArgsObjectSchema: SchemaType = z
  .object({
    select: z.lazy(() => ThreadsSelectObjectSchema).optional(),
  })
  .strict() as SchemaType;
