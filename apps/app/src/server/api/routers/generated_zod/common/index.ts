
import { z } from 'zod';
export const DecimalSchema = z.union([z.number(), z.string(), z.object({ d: z.number().array(), e: z.number(), s: z.number() }).passthrough()]);
