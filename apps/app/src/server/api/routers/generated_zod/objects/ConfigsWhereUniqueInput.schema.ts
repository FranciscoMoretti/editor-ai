/* eslint-disable */
import { z } from 'zod';
import { ConfigsWhereInputObjectSchema } from './ConfigsWhereInput.schema';
import { StringNullableListFilterObjectSchema } from './StringNullableListFilter.schema';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { JsonFilterObjectSchema } from './JsonFilter.schema';
import { AsssitantListRelationFilterObjectSchema } from './AsssitantListRelationFilter.schema';

import type { Prisma } from '@zenstackhq/runtime/models';

type SchemaType = z.ZodType<Prisma.configsWhereUniqueInput>;
export const ConfigsWhereUniqueInputObjectSchema: SchemaType = z.object({
    config_id: z.string().optional(), AND: z.union([z.lazy(() => ConfigsWhereInputObjectSchema),
    z.lazy(() => ConfigsWhereInputObjectSchema).array()]).optional(), OR: z.lazy(() => ConfigsWhereInputObjectSchema).array().optional(), NOT: z.union([z.lazy(() => ConfigsWhereInputObjectSchema),
    z.lazy(() => ConfigsWhereInputObjectSchema).array()]).optional(), tags: z.lazy(() => StringNullableListFilterObjectSchema).optional(), recursion_limit: z.union([z.lazy(() => IntFilterObjectSchema),
    z.number()]).optional(), configurable: z.lazy(() => JsonFilterObjectSchema).optional(), assistants: z.lazy(() => AsssitantListRelationFilterObjectSchema).optional()
}).strict() as SchemaType;
