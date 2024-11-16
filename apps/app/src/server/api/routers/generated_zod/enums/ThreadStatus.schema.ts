/* eslint-disable */
import { z } from "zod";

export const ThreadStatusSchema = z.enum([
  "idle",
  "busy",
  "interrupted",
  "error",
]);
