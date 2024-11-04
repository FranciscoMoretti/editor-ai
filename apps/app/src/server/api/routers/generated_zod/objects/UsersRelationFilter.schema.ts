/* eslint-disable */
import { z } from 'zod';
import { UsersWhereInputObjectSchema } from './UsersWhereInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.UsersRelationFilter>;
export const UsersRelationFilterObjectSchema: SchemaType = z.object({
    is: z.lazy(() => UsersWhereInputObjectSchema).optional(), isNot: z.lazy(() => UsersWhereInputObjectSchema).optional()
}).strict() as SchemaType;
