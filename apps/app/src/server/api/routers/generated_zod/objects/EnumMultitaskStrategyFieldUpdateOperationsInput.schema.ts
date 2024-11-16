/* eslint-disable */
import { z } from "zod";
import { MultitaskStrategySchema } from "../enums/MultitaskStrategy.schema";

import type { Prisma } from "@zenstackhq/runtime/models";

type SchemaType =
  z.ZodType<Prisma.EnumMultitaskStrategyFieldUpdateOperationsInput>;
export const EnumMultitaskStrategyFieldUpdateOperationsInputObjectSchema: SchemaType =
  z
    .object({
      set: z.lazy(() => MultitaskStrategySchema).optional(),
    })
    .strict() as SchemaType;
