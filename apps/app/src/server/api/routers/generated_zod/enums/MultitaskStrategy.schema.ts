/* eslint-disable */
import { z } from 'zod';

export const MultitaskStrategySchema = z.enum(["reject", "rollback", "interrupt", "enqueue"])
