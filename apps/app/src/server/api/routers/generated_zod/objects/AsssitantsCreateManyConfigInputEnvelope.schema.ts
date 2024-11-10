/* eslint-disable */
import { z } from 'zod';
import { AsssitantsCreateManyConfigInputObjectSchema } from './AsssitantsCreateManyConfigInput.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.asssitantsCreateManyConfigInputEnvelope>;
export const AsssitantsCreateManyConfigInputEnvelopeObjectSchema: SchemaType = z.object({
    data: z.union([z.lazy(() => AsssitantsCreateManyConfigInputObjectSchema),
    z.lazy(() => AsssitantsCreateManyConfigInputObjectSchema).array()]), skipDuplicates: z.boolean().optional()
}).strict() as SchemaType;
