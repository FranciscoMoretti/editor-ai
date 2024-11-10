/* eslint-disable */
import { z } from 'zod';
import { ConfigsArgsObjectSchema } from './ConfigsArgs.schema';
import { UsersArgsObjectSchema } from './UsersArgs.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.asssitantsInclude>;
export const AsssitantsIncludeObjectSchema: SchemaType = z.object({
    config: z.union([z.boolean(),
    z.lazy(() => ConfigsArgsObjectSchema)]).optional(), users: z.union([z.boolean(),
    z.lazy(() => UsersArgsObjectSchema)]).optional()
}).strict() as SchemaType;
