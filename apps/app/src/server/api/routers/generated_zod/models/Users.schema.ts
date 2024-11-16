/* eslint-disable */
import { z } from "zod";
const baseSchema = z
  .object({
    id: z.string().uuid(),
    email: z.string(),
    full_name: z.string().nullish(),
    avatar_url: z.string().nullish(),
    created_at: z.coerce
      .date()
      .default(() => new Date())
      .nullish(),
    updated_at: z.coerce
      .date()
      .default(() => new Date())
      .nullish(),
  })
  .strict();
const relationSchema = z.object({
  posts: z.array(z.unknown()).optional(),
  assistants: z.array(z.unknown()).optional(),
});

/**
 * `users` schema excluding foreign keys and relations.
 */
export const UsersScalarSchema = baseSchema;

/**
 * `users` schema including all fields (scalar, foreign key, and relations) and validations.
 */
export const UsersSchema = UsersScalarSchema.merge(relationSchema.partial());

/**
 * Schema used for validating Prisma create input. For internal use only.
 * @private
 */
export const UsersPrismaCreateSchema = baseSchema.partial().passthrough();

/**
 * Schema used for validating Prisma update input. For internal use only.
 * @private
 */
export const UsersPrismaUpdateSchema = z
  .object({
    id: z.string().uuid(),
    email: z.string(),
    full_name: z.string().nullish(),
    avatar_url: z.string().nullish(),
    created_at: z.coerce
      .date()
      .default(() => new Date())
      .nullish(),
    updated_at: z.coerce
      .date()
      .default(() => new Date())
      .nullish(),
  })
  .partial()
  .passthrough();

/**
 * `users` schema for create operations excluding foreign keys and relations.
 */
export const UsersCreateScalarSchema = baseSchema.partial({
  created_at: true,
  updated_at: true,
});

/**
 * `users` schema for create operations including scalar fields, foreign key fields, and validations.
 */
export const UsersCreateSchema = baseSchema.partial({
  created_at: true,
  updated_at: true,
});

/**
 * `users` schema for update operations excluding foreign keys and relations.
 */
export const UsersUpdateScalarSchema = baseSchema.partial();

/**
 * `users` schema for update operations including scalar fields, foreign key fields, and validations.
 */
export const UsersUpdateSchema = UsersUpdateScalarSchema;
