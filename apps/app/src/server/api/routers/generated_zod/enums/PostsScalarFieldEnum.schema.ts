/* eslint-disable */
import { z } from "zod";

export const PostsScalarFieldEnumSchema = z.enum([
  "id",
  "user_id",
  "title",
  "content",
  "created_at",
  "updated_at",
]);
