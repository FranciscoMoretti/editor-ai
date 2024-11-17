/* eslint-disable */
import type { PrismaClient } from "@zenstackhq/runtime/models";

export function db(ctx: any) {
  if (!ctx.prisma) {
    throw new Error('Missing "prisma" field in trpc context');
  }
  return ctx.prisma as PrismaClient;
}
