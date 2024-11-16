import { CustomQuickActions, Reflections } from "@/types";
/* eslint-disable */
import { z } from "zod";

export const StoreKey = z.enum(["actions", "reflection"]);
export type StoreKey = z.infer<typeof StoreKey>;

export const StoreValueSchema = z.union([CustomQuickActions, Reflections]);

export function parseStoreValue<K extends StoreKey>(
  value: z.infer<typeof StoreValueSchema>,
  key: K,
): K extends typeof StoreKey.Values.reflection
  ? z.infer<typeof Reflections>
  : K extends typeof StoreKey.Values.actions
    ? z.infer<typeof CustomQuickActions>
    : never {
  if (key === StoreKey.Values.reflection) {
    return Reflections.parse(value) as any;
  } else if (key === StoreKey.Values.actions) {
    return CustomQuickActions.parse(value) as any;
  }
  throw new Error(`Unknown key: ${key}`);
}
