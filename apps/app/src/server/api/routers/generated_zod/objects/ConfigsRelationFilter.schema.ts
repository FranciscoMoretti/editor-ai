/* eslint-disable */
import { z } from 'zod';
import { ConfigsWhereInputObjectSchema } from './ConfigsWhereInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.ConfigsRelationFilter>;
export const ConfigsRelationFilterObjectSchema: SchemaType = z.object({
    is: z.lazy(() => ConfigsWhereInputObjectSchema).optional(), isNot: z.lazy(() => ConfigsWhereInputObjectSchema).optional()
}).strict() as SchemaType;
