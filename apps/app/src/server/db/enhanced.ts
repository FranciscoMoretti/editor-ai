import type { User } from "@supabase/supabase-js";
import { createClient } from "@v1/supabase/server";
import { enhance } from "@zenstackhq/runtime";
import { prisma } from "./client";
/**
 * Get an authorization-enabled database client
 */
export async function getEnhancedPrisma(user: User | null) {
  const uid = user?.id;
  // TODO: if you need to access fields other than just "id" in access policies,
  // you can do a database query here to fetch the full user record
  const contextUser = uid ? { id: uid } : undefined;

  return enhance(prisma, { user: contextUser });
}

export async function getEnhancedPrismaWithUser() {
  const supabase = createClient();
  const userResponse = await supabase.auth.getUser();
  const user = userResponse.data.user;
  return getEnhancedPrisma(user);
}
