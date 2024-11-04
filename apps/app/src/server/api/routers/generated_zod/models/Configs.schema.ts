/* eslint-disable */
import { z } from 'zod';
const baseSchema = z.object({
    config_id: z.string().uuid(),
    tags: z.array(z.string()),
    recursion_limit: z.number(),
    configurable: z.any(),
}
).strict();
const relationSchema = z.object({
    assistants: z.array(z.unknown()).optional(),
}
);

/**
 * `configs` schema excluding foreign keys and relations.
 */
export const ConfigsScalarSchema = baseSchema;


/**
 * `configs` schema including all fields (scalar, foreign key, and relations) and validations.
 */
export const ConfigsSchema = ConfigsScalarSchema.merge(relationSchema.partial());


/**
 * Schema used for validating Prisma create input. For internal use only.
 * @private
 */
export const ConfigsPrismaCreateSchema = baseSchema.partial().passthrough();


/**
 * Schema used for validating Prisma update input. For internal use only.
 * @private
 */
export const ConfigsPrismaUpdateSchema = z.object({
    config_id: z.string().uuid(),
    tags: z.array(z.string()),
    recursion_limit: z.union([z.number(), z.record(z.unknown())]),
    configurable: z.any()
}).partial().passthrough();


/**
 * `configs` schema for create operations excluding foreign keys and relations.
 */
export const ConfigsCreateScalarSchema = baseSchema.partial({
    config_id: true, tags: true
});


/**
 * `configs` schema for create operations including scalar fields, foreign key fields, and validations.
 */
export const ConfigsCreateSchema = baseSchema.partial({
    config_id: true, tags: true
});


/**
 * `configs` schema for update operations excluding foreign keys and relations.
 */
export const ConfigsUpdateScalarSchema = baseSchema.partial();


/**
 * `configs` schema for update operations including scalar fields, foreign key fields, and validations.
 */
export const ConfigsUpdateSchema = ConfigsUpdateScalarSchema;

