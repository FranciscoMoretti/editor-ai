/* eslint-disable */
import { z } from 'zod';

export const RunStatusSchema = z.enum(["pending", "error", "success", "timeout", "interrupted"])
