/* eslint-disable */
import { z } from 'zod';
import { AsssitantsWhereInputObjectSchema } from './AsssitantsWhereInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.AsssitantsListRelationFilter>;
export const AsssitantsListRelationFilterObjectSchema: SchemaType = z.object({
    every: z.lazy(() => AsssitantsWhereInputObjectSchema).optional(), some: z.lazy(() => AsssitantsWhereInputObjectSchema).optional(), none: z.lazy(() => AsssitantsWhereInputObjectSchema).optional()
}).strict() as SchemaType;
