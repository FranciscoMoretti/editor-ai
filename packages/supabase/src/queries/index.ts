import { logger } from "@v1/logger";
import { createClient } from "@v1/supabase/server";
import { prisma } from "@v1/supabase/lib/prisma";

export async function getUser() {
  const supabase = createClient();

  try {
    const result = await supabase.auth.getUser();
    return result;
  } catch (error) {
    logger.error(error);
    throw error;
  }
}

export async function getPosts() {
  try {
    const posts = await prisma.posts.findMany({
      include: { users: true },
    });
    return { data: posts, error: null };
  } catch (error) {
    logger.error(error);
    return { data: null, error };
  }
}
