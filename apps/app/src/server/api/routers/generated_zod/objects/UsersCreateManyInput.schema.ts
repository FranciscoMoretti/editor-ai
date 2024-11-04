/* eslint-disable */
import { z } from 'zod';


import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.usersCreateManyInput>;
export const UsersCreateManyInputObjectSchema: SchemaType = z.object({
    id: z.string(), email: z.string(), full_name: z.union([z.string(),
    z.null()]).optional().nullable(), avatar_url: z.union([z.string(),
    z.null()]).optional().nullable(), created_at: z.union([z.union([z.date(), z.string().datetime().optional()]),
    z.null()]).optional().nullable(), updated_at: z.union([z.union([z.date(), z.string().datetime().optional()]),
    z.null()]).optional().nullable()
}).strict() as SchemaType;
