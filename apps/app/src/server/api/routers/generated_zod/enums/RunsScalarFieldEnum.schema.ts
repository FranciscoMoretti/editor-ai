/* eslint-disable */
import { z } from "zod";

export const RunsScalarFieldEnumSchema = z.enum([
  "run_id",
  "user_id",
  "thread_id",
  "assistant_id",
  "created_at",
  "updated_at",
  "status",
  "metadata",
  "kwargs",
  "multitask_strategy",
]);
