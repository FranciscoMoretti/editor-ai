/* eslint-disable */
import { z } from 'zod';
import { RunStatusSchema } from '../enums/RunStatus.schema';
import { MultitaskStrategySchema } from '../enums/MultitaskStrategy.schema';
const baseSchema = z.object({
    run_id: z.string().uuid(),
    thread_id: z.string().uuid(),
    assistant_id: z.string().uuid(),
    created_at: z.coerce.date().default(() => new Date()),
    updated_at: z.coerce.date().default(() => new Date()),
    status: RunStatusSchema,
    metadata: z.any(),
    kwargs: z.any(),
    multitask_strategy: MultitaskStrategySchema,
}
).strict();

/**
 * `runs` schema excluding foreign keys and relations.
 */
export const RunsScalarSchema = baseSchema;


/**
 * `runs` schema including all fields (scalar, foreign key, and relations) and validations.
 */
export const RunsSchema = RunsScalarSchema;


/**
 * Schema used for validating Prisma create input. For internal use only.
 * @private
 */
export const RunsPrismaCreateSchema = baseSchema.partial().passthrough();


/**
 * Schema used for validating Prisma update input. For internal use only.
 * @private
 */
export const RunsPrismaUpdateSchema = z.object({
    run_id: z.string().uuid(),
    thread_id: z.string().uuid(),
    assistant_id: z.string().uuid(),
    created_at: z.coerce.date().default(() => new Date()),
    updated_at: z.coerce.date().default(() => new Date()),
    status: RunStatusSchema,
    metadata: z.any(),
    kwargs: z.any(),
    multitask_strategy: MultitaskStrategySchema
}).partial().passthrough();


/**
 * `runs` schema for create operations excluding foreign keys and relations.
 */
export const RunsCreateScalarSchema = baseSchema.partial({
    run_id: true, created_at: true, updated_at: true
});


/**
 * `runs` schema for create operations including scalar fields, foreign key fields, and validations.
 */
export const RunsCreateSchema = baseSchema.partial({
    run_id: true, created_at: true, updated_at: true
});


/**
 * `runs` schema for update operations excluding foreign keys and relations.
 */
export const RunsUpdateScalarSchema = baseSchema.partial();


/**
 * `runs` schema for update operations including scalar fields, foreign key fields, and validations.
 */
export const RunsUpdateSchema = RunsUpdateScalarSchema;

