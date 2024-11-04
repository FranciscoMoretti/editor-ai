/* eslint-disable */
import { z } from 'zod';
import { AsssitantWhereInputObjectSchema } from './AsssitantWhereInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.AsssitantListRelationFilter>;
export const AsssitantListRelationFilterObjectSchema: SchemaType = z.object({
    every: z.lazy(() => AsssitantWhereInputObjectSchema).optional(), some: z.lazy(() => AsssitantWhereInputObjectSchema).optional(), none: z.lazy(() => AsssitantWhereInputObjectSchema).optional()
}).strict() as SchemaType;
