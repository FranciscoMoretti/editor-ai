import { Prisma } from "@prisma/client";
import { logger } from "@v1/logger";
import { prisma } from "@v1/supabase/lib/prisma";

export async function updateUser(
  userId: string,
  data: Prisma.public_usersUpdateInput,
) {
  try {
    const result = await prisma.public_users.update({
      where: { id: userId },
      data,
    });

    return result;
  } catch (error) {
    logger.error(error);

    throw error;
  }
}
