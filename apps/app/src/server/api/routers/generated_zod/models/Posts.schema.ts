/* eslint-disable */
import { z } from "zod";
const baseSchema = z
  .object({
    id: z.string().uuid(),
    title: z.string(),
    content: z.string(),
    created_at: z.coerce.date().default(() => new Date()),
    updated_at: z.coerce.date().default(() => new Date()),
  })
  .strict();
const relationSchema = z.object({
  users: z.record(z.unknown()),
});
const fkSchema = z.object({
  user_id: z.string().uuid().optional(),
});

/**
 * `posts` schema excluding foreign keys and relations.
 */
export const PostsScalarSchema = baseSchema;

/**
 * `posts` schema including all fields (scalar, foreign key, and relations) and validations.
 */
export const PostsSchema = PostsScalarSchema.merge(fkSchema).merge(
  relationSchema.partial(),
);

/**
 * Schema used for validating Prisma create input. For internal use only.
 * @private
 */
export const PostsPrismaCreateSchema = baseSchema.partial().passthrough();

/**
 * Schema used for validating Prisma update input. For internal use only.
 * @private
 */
export const PostsPrismaUpdateSchema = z
  .object({
    id: z.string().uuid(),
    title: z.string(),
    content: z.string(),
    created_at: z.coerce.date().default(() => new Date()),
    updated_at: z.coerce.date().default(() => new Date()),
  })
  .partial()
  .passthrough();

/**
 * `posts` schema for create operations excluding foreign keys and relations.
 */
export const PostsCreateScalarSchema = baseSchema.partial({
  id: true,
  created_at: true,
  updated_at: true,
});

/**
 * `posts` schema for create operations including scalar fields, foreign key fields, and validations.
 */
export const PostsCreateSchema = PostsCreateScalarSchema.merge(fkSchema);

/**
 * `posts` schema for update operations excluding foreign keys and relations.
 */
export const PostsUpdateScalarSchema = baseSchema.partial();

/**
 * `posts` schema for update operations including scalar fields, foreign key fields, and validations.
 */
export const PostsUpdateSchema = PostsUpdateScalarSchema.merge(
  fkSchema.partial(),
);
