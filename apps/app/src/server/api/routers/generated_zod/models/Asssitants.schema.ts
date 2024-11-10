/* eslint-disable */
import { z } from 'zod';
const baseSchema = z.object({
    assistant_id: z.string().uuid(),
    graph_id: z.string(),
    created_at: z.coerce.date().default(() => new Date()),
    updated_at: z.coerce.date().default(() => new Date()),
    metadata: z.any().default("{}"),
    version: z.number().default(1),
    name: z.string().default("Untitled"),
}
).strict();
const relationSchema = z.object({
    config: z.record(z.unknown()),
    users: z.record(z.unknown()),
}
);
const fkSchema = z.object({
    user_id: z.string().uuid(),
    config_id: z.string().uuid(),
}
);

/**
 * `asssitants` schema excluding foreign keys and relations.
 */
export const AsssitantsScalarSchema = baseSchema;


/**
 * `asssitants` schema including all fields (scalar, foreign key, and relations) and validations.
 */
export const AsssitantsSchema = AsssitantsScalarSchema.merge(fkSchema).merge(relationSchema.partial());


/**
 * Schema used for validating Prisma create input. For internal use only.
 * @private
 */
export const AsssitantsPrismaCreateSchema = baseSchema.partial().passthrough();


/**
 * Schema used for validating Prisma update input. For internal use only.
 * @private
 */
export const AsssitantsPrismaUpdateSchema = z.object({
    assistant_id: z.string().uuid(),
    graph_id: z.string(),
    created_at: z.coerce.date().default(() => new Date()),
    updated_at: z.coerce.date().default(() => new Date()),
    metadata: z.any().default("{}"),
    version: z.union([z.number().default(1), z.record(z.unknown())]),
    name: z.string().default("Untitled")
}).partial().passthrough();


/**
 * `asssitants` schema for create operations excluding foreign keys and relations.
 */
export const AsssitantsCreateScalarSchema = baseSchema.partial({
    assistant_id: true, created_at: true, updated_at: true, metadata: true, version: true, name: true
});


/**
 * `asssitants` schema for create operations including scalar fields, foreign key fields, and validations.
 */
export const AsssitantsCreateSchema = AsssitantsCreateScalarSchema.merge(fkSchema);


/**
 * `asssitants` schema for update operations excluding foreign keys and relations.
 */
export const AsssitantsUpdateScalarSchema = baseSchema.partial();


/**
 * `asssitants` schema for update operations including scalar fields, foreign key fields, and validations.
 */
export const AsssitantsUpdateSchema = AsssitantsUpdateScalarSchema.merge(fkSchema.partial());

