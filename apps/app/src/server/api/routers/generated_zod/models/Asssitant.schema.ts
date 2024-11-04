/* eslint-disable */
import { z } from 'zod';
const baseSchema = z.object({
    assistant_id: z.string().uuid(),
    graph_id: z.string(),
    created_at: z.coerce.date().default(() => new Date()),
    updated_at: z.coerce.date().default(() => new Date()),
    metadata: z.any(),
    version: z.number(),
    name: z.string(),
}
).strict();
const relationSchema = z.object({
    config: z.record(z.unknown()),
    users: z.record(z.unknown()),
}
);
const fkSchema = z.object({
    config_id: z.string().uuid(),
    user_id: z.string().uuid(),
}
);

/**
 * `asssitant` schema excluding foreign keys and relations.
 */
export const AsssitantScalarSchema = baseSchema;


/**
 * `asssitant` schema including all fields (scalar, foreign key, and relations) and validations.
 */
export const AsssitantSchema = AsssitantScalarSchema.merge(fkSchema).merge(relationSchema.partial());


/**
 * Schema used for validating Prisma create input. For internal use only.
 * @private
 */
export const AsssitantPrismaCreateSchema = baseSchema.partial().passthrough();


/**
 * Schema used for validating Prisma update input. For internal use only.
 * @private
 */
export const AsssitantPrismaUpdateSchema = z.object({
    assistant_id: z.string().uuid(),
    graph_id: z.string(),
    created_at: z.coerce.date().default(() => new Date()),
    updated_at: z.coerce.date().default(() => new Date()),
    metadata: z.any(),
    version: z.union([z.number(), z.record(z.unknown())]),
    name: z.string()
}).partial().passthrough();


/**
 * `asssitant` schema for create operations excluding foreign keys and relations.
 */
export const AsssitantCreateScalarSchema = baseSchema.partial({
    created_at: true, updated_at: true
});


/**
 * `asssitant` schema for create operations including scalar fields, foreign key fields, and validations.
 */
export const AsssitantCreateSchema = AsssitantCreateScalarSchema.merge(fkSchema);


/**
 * `asssitant` schema for update operations excluding foreign keys and relations.
 */
export const AsssitantUpdateScalarSchema = baseSchema.partial();


/**
 * `asssitant` schema for update operations including scalar fields, foreign key fields, and validations.
 */
export const AsssitantUpdateSchema = AsssitantUpdateScalarSchema.merge(fkSchema.partial());

