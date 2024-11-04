/* eslint-disable */
import { z } from 'zod';
import { AsssitantCreateManyConfigInputObjectSchema } from './AsssitantCreateManyConfigInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.asssitantCreateManyConfigInputEnvelope>;
export const AsssitantCreateManyConfigInputEnvelopeObjectSchema: SchemaType = z.object({
    data: z.union([z.lazy(() => AsssitantCreateManyConfigInputObjectSchema),
    z.lazy(() => AsssitantCreateManyConfigInputObjectSchema).array()]), skipDuplicates: z.boolean().optional()
}).strict() as SchemaType;
