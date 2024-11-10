/* eslint-disable */
import { z } from 'zod';
import { ThreadStatus } from '@zenstackhq/runtime/models';
import { ThreadStatusSchema } from '../enums/ThreadStatus.schema';
const baseSchema = z.object({
    thread_id: z.string().uuid(),
    user_id: z.string().optional(),
    created_at: z.coerce.date().default(() => new Date()),
    updated_at: z.coerce.date().default(() => new Date()),
    metadata: z.any(),
    status: ThreadStatusSchema,
    values: z.any().default("{}"),
}
).strict();

/**
 * `threads` schema excluding foreign keys and relations.
 */
export const ThreadsScalarSchema = baseSchema.omit({
    user_id: true,
});


/**
 * `threads` schema including all fields (scalar, foreign key, and relations) and validations.
 */
export const ThreadsSchema = ThreadsScalarSchema;


/**
 * Schema used for validating Prisma create input. For internal use only.
 * @private
 */
export const ThreadsPrismaCreateSchema = baseSchema.partial().passthrough();


/**
 * Schema used for validating Prisma update input. For internal use only.
 * @private
 */
export const ThreadsPrismaUpdateSchema = z.object({
    thread_id: z.string().uuid(),
    user_id: z.string().optional(),
    created_at: z.coerce.date().default(() => new Date()),
    updated_at: z.coerce.date().default(() => new Date()),
    metadata: z.any(),
    status: ThreadStatusSchema,
    values: z.any().default("{}")
}).partial().passthrough();


/**
 * `threads` schema for create operations excluding foreign keys and relations.
 */
export const ThreadsCreateScalarSchema = baseSchema.partial({
    thread_id: true, user_id: true, created_at: true, updated_at: true, status: true, values: true
});


/**
 * `threads` schema for create operations including scalar fields, foreign key fields, and validations.
 */
export const ThreadsCreateSchema = baseSchema.partial({
    thread_id: true, user_id: true, created_at: true, updated_at: true, status: true, values: true
});


/**
 * `threads` schema for update operations excluding foreign keys and relations.
 */
export const ThreadsUpdateScalarSchema = baseSchema.partial();


/**
 * `threads` schema for update operations including scalar fields, foreign key fields, and validations.
 */
export const ThreadsUpdateSchema = ThreadsUpdateScalarSchema;

