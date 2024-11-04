/* eslint-disable */
import { z } from 'zod';
import { AsssitantCreateManyUsersInputObjectSchema } from './AsssitantCreateManyUsersInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.asssitantCreateManyUsersInputEnvelope>;
export const AsssitantCreateManyUsersInputEnvelopeObjectSchema: SchemaType = z.object({
    data: z.union([z.lazy(() => AsssitantCreateManyUsersInputObjectSchema),
    z.lazy(() => AsssitantCreateManyUsersInputObjectSchema).array()]), skipDuplicates: z.boolean().optional()
}).strict() as SchemaType;
