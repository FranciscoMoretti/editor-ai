/* eslint-disable */
import { z } from "zod";

export const StoreScalarFieldEnumSchema = z.enum([
  "id",
  "namespace",
  "key",
  "user_id",
  "created_at",
  "updated_at",
  "value",
]);
